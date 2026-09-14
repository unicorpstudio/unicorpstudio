import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import { Label, ClosingCTA, SectionHeading } from "@/components/ui";
export const metadata: Metadata = pageMetadata({
  title: "Notre approche",
  description:
    "Unicorp Studio relie stratégie de marque, design et développement pour donner aux entreprises un système qu’elles peuvent faire évoluer.",
  alternates: { canonical: "/studio" },
});
export default function StudioPage() {
  return (
    <>
      <section className="subpage-hero container">
        <Label>Le studio</Label>
        <h1>
          Nous aimons les marques
          <br className="desktop-break" /> qui savent où elles vont.
        </h1>
        <p className="lead">
          Notre travail consiste à rendre cette direction concrète. Nous
          réunissons stratégie, identité et développement pour que ce qui fait
          votre singularité se retrouve dans chaque interface.
        </p>
      </section>
      <section className="page-band">
        <div className="container values-grid">
          {[
            [
              "Un interlocuteur pour l’ensemble",
              "Les décisions de marque, de design et de développement se répondent. Nous les abordons ensemble pour éviter de vous laisser faire le lien entre des livrables isolés.",
            ],
            [
              "Des choix expliqués",
              "Vous devez pouvoir comprendre pourquoi une décision a été prise et comment l’utiliser ensuite. La documentation et la passation font partie du projet.",
            ],
            [
              "Une autonomie préparée",
              "Nous construisons avec des fichiers accessibles, des composants réutilisables et du code qui vous est remis. Le système doit continuer à vous servir après la livraison.",
            ],
          ].map(([title, text], i) => (
            <div key={title}>
              <span className="item-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="Pourquoi cette direction"
          title="L’IA change la production. Votre marque a toujours besoin d’une intention."
          text="Produire une interface devient plus accessible. Décider ce qu’elle doit exprimer, comment elle fonctionne et pourquoi elle vous ressemble reste un travail de conception."
        />
        <blockquote className="studio-quote">
          « Nous voulons que votre prochaine page prolonge votre marque, plutôt
          que de vous obliger à la redéfinir. »
        </blockquote>
      </section>
      <section
        className="section container"
        style={{ borderTop: "1px solid var(--color-line)" }}
      >
        <SectionHeading
          label="Un regard sur le design"
          title="La cohérence se juge aussi dans les détails."
          text="Une exploration visuelle autour de la mobilité électrique : un contraste affirmé, une hiérarchie précise et une place centrale donnée au produit."
        />
        <figure className="studio-work">
          <Image
            src="/images/e01-exploration.webp"
            alt="Exploration e/01 : une interface de mobilité électrique avec une voiture sportive et des accents vert citron"
            width={1440}
            height={810}
            sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1552px) calc(100vw - 112px), 1440px"
          />
          <figcaption>
            <strong>e/01</strong>
            <span>Exploration visuelle · mobilité électrique</span>
          </figcaption>
        </figure>
      </section>
      <ClosingCTA />
    </>
  );
}
