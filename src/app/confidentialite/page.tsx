import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Label } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata: Metadata = pageMetadata({
  title: "Confidentialité",
  description:
    "Comment fonctionnent le diagnostic et la prise de rendez-vous sur le site Unicorp Studio.",
  alternates: { canonical: "/confidentialite" },
});
export default function PrivacyPage() {
  return (
    <>
      <header className="subpage-hero container">
        <Label>Vos données</Label>
        <h1>Confidentialité</h1>
        <p className="lead">
          Voici comment vos informations sont utilisées lors de votre visite.
        </p>
      </header>
      <div className="container prose">
        <h2>Le diagnostic de marque</h2>
        <p>
          Le diagnostic fonctionne dans votre navigateur. Nous ne demandons ni
          votre nom, ni votre e-mail, ni l’adresse de votre site. Les réponses
          servent uniquement à calculer le résultat affiché. Elles ne sont pas
          envoyées à Unicorp Studio, ne sont pas enregistrées dans un cookie ou
          dans le stockage local, et disparaissent au rechargement de la page.
        </p>
        <p>
          Si vous téléchargez le bilan, le fichier est créé dans votre
          navigateur puis enregistré sur votre appareil.
        </p>
        <h2>Les rendez-vous</h2>
        <p>
          Les boutons de réservation vous conduisent vers{" "}
          <a href={site.bookingUrl}>notre calendrier Cal.com</a>. Le service
          n’est pas chargé dans le site avant que vous suiviez ce lien. Les
          données que vous y saisissez sont soumises à la{" "}
          <a href="https://cal.com/privacy">
            politique de confidentialité de Cal.com
          </a>
          .
        </p>
        <h2>La mesure d’audience et les cookies</h2>
        <p>
          Cette version du site n’intègre aucun outil de mesure d’audience
          publicitaire, aucun pixel marketing et aucun cookie de suivi
          applicatif. Les polices système et les éléments visuels sont servis
          sans appel à un service de polices externe.
        </p>
        <h2>L’hébergement</h2>
        <p>
          Lors de la mise en ligne sur Vercel, les requêtes techniques
          nécessaires à l’affichage du site peuvent être traitées par
          l’hébergeur, notamment l’adresse IP, le navigateur et l’URL demandée.
          Les règles du prestataire sont décrites dans la{" "}
          <a href="https://vercel.com/legal/privacy-policy">
            politique de confidentialité de Vercel
          </a>
          .
        </p>
        <h2>Nous contacter</h2>
        <p>
          Pour une question concernant les données que vous auriez partagées
          dans le cadre d’un rendez-vous, vous pouvez utiliser les coordonnées
          présentes dans votre confirmation de réservation ou{" "}
          <a href={site.bookingUrl}>contacter le studio par son calendrier</a>.
        </p>
      </div>
    </>
  );
}
