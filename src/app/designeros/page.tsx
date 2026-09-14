import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Label, BookingLink, ButtonLink } from "@/components/ui";
export const metadata: Metadata = pageMetadata({
  title: "DesignerOS — Le prolongement pour les designers",
  description:
    "DesignerOS est le projet pédagogique issu des méthodes Unicorp : concevoir un système, construire un site et développer son offre.",
  alternates: { canonical: "/designeros" },
});
export default function DesignerOSPage() {
  return (
    <>
      <section className="subpage-hero container designer-banner">
        <div>
          <Label green>DesignerOS · programme en préparation</Label>
          <h1>
            Apprenez à concevoir,
            <br />
            construire et vendre
            <br />
            des sites avec l’IA.
          </h1>
          <p className="lead">
            DesignerOS est le prolongement pédagogique d’Unicorp. Nous y
            partageons une méthode pour passer du design à un site fonctionnel
            avec des agents IA, et transformer cette capacité en une offre pour
            vos clients.
          </p>
          <div className="hero-actions">
            <BookingLink>Échanger sur DesignerOS</BookingLink>
          </div>
        </div>
        <div className="designer-art" aria-hidden="true">
          <span>
            Designer
            <br />
            OS_
          </span>
          <p>
            Design → Build → Sell
            <br />
            Une méthode issue de la pratique du studio.
          </p>
        </div>
      </section>
      <section
        className="section container"
        style={{ borderTop: "1px solid var(--color-line)" }}
      >
        <Label>Le format envisagé</Label>
        <h2 style={{ marginTop: 28 }}>Quatre semaines, un projet concret.</h2>
        <div className="designer-curriculum">
          {[
            [
              "Le workflow",
              "Comprendre le rôle du designer, celui de l’agent et les vérifications qui restent entre vos mains.",
            ],
            [
              "Le système",
              "Structurer une identité et une bibliothèque Figma utilisables dans un vrai projet.",
            ],
            [
              "La construction",
              "Passer des composants au site fonctionnel et préparer sa mise en ligne.",
            ],
            [
              "Votre offre",
              "Présenter votre projet et formuler une offre compréhensible pour vos futurs clients.",
            ],
          ].map(([title, text], i) => (
            <div key={title}>
              <span className="item-number">Semaine 0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="notice" style={{ marginTop: 45 }}>
          Le programme est en préparation. Les dates, les modalités et le tarif
          de la première session seront précisés avant l’ouverture des
          inscriptions.
        </p>
      </section>
      <section className="page-band">
        <div className="container">
          <h2>Vous représentez une entreprise ?</h2>
          <p className="lead" style={{ marginTop: 22, maxWidth: 700 }}>
            Unicorp Studio peut concevoir et mettre en place votre système de
            marque avec vous.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/#offres">
              Découvrir les offres du studio
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
