import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/audit",
  "/contact",
  "/studio",
  "/journal",
  "/designeros",
  "/confidentialite",
  "/mentions-legales",
  "/accessibilite",
  "/journal/une-charte-ne-suffit-plus",
  "/journal/figma-et-code-un-meme-systeme",
  "/journal/preparer-votre-prochain-site",
];
for (const route of routes)
  test(`page accessible et sans débordement : ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
    ).toBeTruthy();
    for (const img of await page.locator('img[loading="lazy"]').all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          img.evaluate(
            (el) =>
              (el as HTMLImageElement).complete &&
              (el as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBeTruthy();
    }
    expect(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images
            .filter(
              (image) =>
                !(image as HTMLImageElement).complete ||
                (image as HTMLImageElement).naturalWidth === 0,
            )
            .map((image) => image.getAttribute("src")),
        ),
    ).toEqual([]);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
test("parcours du diagnostic, retour, téléchargement et réinitialisation", async ({
  page,
}) => {
  await page.goto("/audit");
  await page.getByRole("button", { name: "Question suivante" }).click();
  await expect(page.locator("#question-error")).toContainText("Choisissez");
  await page.getByRole("radio").nth(2).check();
  await page.getByRole("button", { name: "Question suivante" }).click();
  await expect(page.locator(".audit-form")).toBeFocused();
  await page.getByRole("button", { name: "Précédent" }).click();
  await expect(page.getByRole("radio").nth(2)).toBeChecked();
  await page.getByRole("button", { name: "Question suivante" }).click();
  for (let step = 1; step < 5; step++) {
    await page.getByRole("radio").nth(1).check();
    await page
      .getByRole("button", {
        name: step === 4 ? "Voir mon diagnostic" : "Question suivante",
      })
      .click();
  }
  await expect(page.locator(".score-value")).toContainText("60");
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(result.violations).toEqual([]);
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Télécharger mon bilan" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("diagnostic-marque-unicorp.txt");
  await expect(
    page.getByRole("link", { name: "Parler de mes résultats" }),
  ).toHaveAttribute("href", "https://cal.com/unicorpstudio/30min");
  await page.getByRole("button", { name: "Recommencer le diagnostic" }).click();
  await expect(page.getByRole("radio").nth(2)).not.toBeChecked();
  expect(
    await page.evaluate(() => ({
      local: localStorage.length,
      session: sessionStorage.length,
    })),
  ).toEqual({ local: 0, session: 0 });
});
test("navigation mobile, fermeture Escape et FAQ au clavier", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu" }).click();
  await expect(page.locator("#mobile-navigation")).toBeVisible();
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await expect(page.getByRole("button", { name: "Menu" })).toBeFocused();
  await page.getByRole("button", { name: "Menu" }).click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Les offres" })
    .click();
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await expect(page).toHaveURL(/#offres$/);
  const question = page.locator(".faq-list summary").first();
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".faq-list details").first()).toHaveAttribute(
    "open",
    "",
  );
});
test("démonstration du système et liens de réservation", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Offre", exact: true }).click();
  await expect(page.locator(".mini-title")).toContainText(
    "Un système de marque",
  );
  await page.getByRole("button", { name: "Contact", exact: true }).click();
  await expect(page.locator(".mini-title")).toContainText("ensemble");
  const bookingLinks = page.locator('a[href*="cal.com"]');
  expect(await bookingLinks.count()).toBeGreaterThan(3);
  for (const link of await bookingLinks.all())
    await expect(link).toHaveAttribute(
      "href",
      "https://cal.com/unicorpstudio/30min",
    );
});
test("responsive de 320 à 1920 pixels et mouvement réduit", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
    ).toBeTruthy();
  }
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
});
test("liens internes, SEO et erreur 404", async ({ page, request }) => {
  await page.goto("/");
  const links = await page
    .locator('a[href^="/"]')
    .evaluateAll((anchors) => [
      ...new Set(anchors.map((a) => a.getAttribute("href")!)),
    ]);
  for (const href of links) {
    const [path, hash] = href.split("#");
    expect((await request.get(path || "/")).status()).toBe(200);
    if (hash) await expect(page.locator(`[id="${hash}"]`)).toHaveCount(1);
  }
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://unicorp.studio",
  );
  expect((await page.goto("/page-qui-nexiste-pas"))?.status()).toBe(404);
  await expect(
    page.getByRole("link", { name: "Revenir à l’accueil" }),
  ).toBeVisible();
});
