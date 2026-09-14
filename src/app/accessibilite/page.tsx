import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Label, BookingLink } from "@/components/ui";
export const metadata: Metadata = pageMetadata({
  title: "Accessibilité",
  description:
    "Les dispositions d’accessibilité du site Unicorp Studio et leurs limites.",
  alternates: { canonical: "/accessibilite" },
});
export default function AccessibilityPage() {
  return (
    <>
      <header className="subpage-hero container">
        <Label>Un site que chacun peut utiliser</Label>
        <h1>Accessibilité</h1>
      </header>
      <div className="container prose">
        <p>
          Le site est conçu avec l’objectif de respecter les critères WCAG 2.2
          de niveau AA. Cette page décrit les dispositions mises en place ; elle
          ne constitue pas une déclaration de conformité issue d’un audit
          indépendant complet.
        </p>
        <h2>Navigation et lecture</h2>
        <ul>
          <li>
            Navigation au clavier, indicateur de focus visible et lien d’accès
            direct au contenu.
          </li>
          <li>
            Titres hiérarchisés, langue française déclarée et alternatives
            textuelles pour les images informatives.
          </li>
          <li>
            Mise en page adaptée aux petits écrans et au zoom du navigateur.
          </li>
          <li>Prise en compte de la préférence de réduction des animations.</li>
        </ul>
        <h2>Composants interactifs</h2>
        <p>
          Le menu mobile expose son état ouvert ou fermé. La foire aux questions
          utilise les éléments natifs du navigateur. Le diagnostic repose sur
          des groupes de boutons radio avec libellés, et signale les réponses
          manquantes. Les changements d’étape déplacent le focus vers la
          nouvelle question.
        </p>
        <h2>Services externes</h2>
        <p>
          La réservation se déroule sur Cal.com, dont l’interface ne dépend pas
          de ce site. Le calendrier s’ouvre uniquement lorsque vous choisissez
          de suivre le lien de réservation.
        </p>
        <h2>Signaler une difficulté</h2>
        <p>
          Si une partie du site vous empêche d’accéder à une information, vous
          pouvez contacter le studio à l’aide des coordonnées figurant dans
          votre confirmation de rendez-vous ou par notre page de contact.
        </p>
        <BookingLink>Contacter le studio</BookingLink>
      </div>
    </>
  );
}
