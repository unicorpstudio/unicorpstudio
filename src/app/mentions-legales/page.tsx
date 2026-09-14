import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Label } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata: Metadata = pageMetadata({
  title: "Mentions légales",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
});
export default function LegalPage() {
  const company = process.env.LEGAL_COMPANY_NAME;
  const address = process.env.LEGAL_ADDRESS;
  const registration = process.env.LEGAL_REGISTRATION;
  const publisher = process.env.LEGAL_PUBLISHER;
  const email = process.env.LEGAL_EMAIL;
  const complete = company && address && registration && publisher && email;
  return (
    <>
      <header className="subpage-hero container">
        <Label>Informations du site</Label>
        <h1>Mentions légales</h1>
      </header>
      <div className="container prose">
        {!complete && (
          <p className="notice">
            Les informations d’identification de l’éditeur sont en cours de
            finalisation. Cette page doit être complétée avant la publication du
            site.
          </p>
        )}
        <h2>Éditeur</h2>
        <p>
          {company || "Unicorp Studio"}
          {address && (
            <>
              <br />
              {address}
            </>
          )}
          {registration && (
            <>
              <br />
              {registration}
            </>
          )}
          {publisher && (
            <>
              <br />
              Responsable de publication : {publisher}
            </>
          )}
        </p>
        <p>
          {email ? (
            <a href={`mailto:${email}`}>{email}</a>
          ) : (
            <a href={site.bookingUrl}>Contacter Unicorp Studio</a>
          )}
        </p>
        <h2>Hébergement prévu</h2>
        <p>
          Le projet est préparé pour être hébergé par Vercel Inc. Les
          coordonnées et informations relatives au prestataire sont disponibles
          sur le <a href="https://vercel.com/legal">site officiel de Vercel</a>.
        </p>
        <h2>Contenus et éléments de marque</h2>
        <p>
          Les textes, éléments graphiques et réalisations présentés sur ce site
          ne sont pas proposés comme des ressources libres de réutilisation.
          Pour toute demande concernant leur usage, contactez le studio. Les
          noms des outils et services mentionnés appartiennent à leurs
          titulaires respectifs.
        </p>
        <h2>Offres et budgets</h2>
        <p>
          Les montants affichés sont des budgets indicatifs pour des prestations
          professionnelles. Le devis précise le périmètre, le calendrier, les
          taxes applicables, les services tiers et les modalités de la
          collaboration. La prise de rendez-vous ne vaut pas commande.
        </p>
      </div>
    </>
  );
}
