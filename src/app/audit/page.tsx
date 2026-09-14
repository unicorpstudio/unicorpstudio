import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Label, BookingLink } from "@/components/ui";
import { AuditQuiz } from "@/components/audit-quiz";
export const metadata: Metadata = pageMetadata({
  title: "Diagnostic de marque gratuit",
  description:
    "En cinq questions, identifiez ce qui manque à votre marque pour être utilisée de manière cohérente par vos équipes et vos agents IA.",
  alternates: { canonical: "/audit" },
});
export default function AuditPage() {
  return (
    <>
      <section className="subpage-hero container">
        <Label green>AI Brand Readiness · diagnostic gratuit</Label>
        <h1>
          Votre marque est-elle
          <br className="desktop-break" /> prête à travailler avec l’IA ?
        </h1>
        <p className="lead">
          Prenez deux minutes pour faire le point sur vos fondations. Vous
          repartirez avec un score indicatif et une première piste à travailler.
        </p>
      </section>
      <section className="container audit-layout" aria-label="Votre diagnostic">
        <aside className="audit-sidebar">
          <h2>
            Un repère pour
            <br className="desktop-break" /> commencer.
          </h2>
          <p>
            Cinq questions sur votre positionnement, votre identité, vos
            composants et le contexte disponible pour vos agents.
          </p>
          <ol>
            <li>Répondez selon votre situation actuelle.</li>
            <li>Découvrez vos priorités.</li>
            <li>Téléchargez votre bilan.</li>
          </ol>
          <p>
            Aucun e-mail demandé. Vos réponses restent dans cette page et
            disparaissent lorsque vous la rechargez.
          </p>
          <details className="audit-method">
            <summary className="text-link">
              Comment le score est-il calculé ?
            </summary>
            <p>
              Chaque réponse vaut 0, 10 ou 20 points. Les cinq dimensions ont le
              même poids. Le total sur 100 décrit votre situation déclarée ; il
              ne s’agit pas d’une analyse automatisée de votre site.
            </p>
          </details>
        </aside>
        <AuditQuiz />
      </section>
      <section className="page-band">
        <div className="container">
          <h2>Vous préférez un regard extérieur ?</h2>
          <p className="lead" style={{ maxWidth: 700, marginTop: 24 }}>
            L’audit complet examine votre identité, votre Figma, votre code et
            votre site. Nous en tirons des priorités concrètes, avec un
            périmètre et un tarif convenus avant de commencer.
          </p>
          <div className="hero-actions">
            <BookingLink>Discuter d’un audit complet</BookingLink>
            <span className="small-note" style={{ alignSelf: "center" }}>
              500–1 000 € · budget indicatif, sur devis
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
