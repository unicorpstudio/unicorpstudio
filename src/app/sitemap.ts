import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/audit",
    "/contact",
    "/studio",
    "/journal",
    "/designeros",
    "/confidentialite",
    "/accessibilite",
    ...articles.map((article) => `/journal/${article.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/audit" ? 0.8 : 0.6,
  }));
}
