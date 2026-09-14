import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Label, BookingLink } from "@/components/ui";
export const metadata: Metadata = pageMetadata({
  title: "Parlons de votre projet",
  description:
    "Réservez un échange de 30 minutes avec Unicorp Studio pour discuter de votre marque, de votre système ou de votre prochain site.",
  alternates: { canonical: "/contact" },
});
export default function ContactPage() {
  return (
    <section className="container contact-layout">
      <div>
        <Label>Faisons connaissance</Label>
        <h1>
          Qu’avez-vous envie
          <br className="desktop-break" /> de construire ?
        </h1>
        <p className="lead">
          Vous avez peut-être un projet précis, ou simplement l’impression que
          votre marque ne reflète plus votre entreprise. Nous pouvons commencer
          là.
        </p>
        <ol className="contact-steps">
          <li>
            <span>01</span>
            <div>
              <strong>Vous nous racontez votre situation.</strong>
              <br />
              Votre activité, vos objectifs et ce qui vous freine aujourd’hui.
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Nous regardons où nous pouvons être utiles.</strong>
              <br />
              Identité, système, site ou diagnostic : nous précisons le besoin
              ensemble.
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Nous convenons d’une prochaine étape.</strong>
              <br />
              Si le projet correspond à notre approche, nous préparons un
              périmètre et un devis.
            </div>
          </li>
        </ol>
      </div>
      <aside className="booking-card">
        <Label green>Un premier échange, simplement</Label>
        <h2>
          30 minutes pour
          <br />
          faire le point.
        </h2>
        <p>
          Choisissez le créneau qui vous convient dans notre calendrier. Vous
          recevrez les informations de rendez-vous après votre réservation.
        </p>
        <div className="meeting-meta">
          <span>30 minutes</span>
          <span>Visioconférence</span>
          <span>Sans engagement</span>
        </div>
        <BookingLink>Choisir mon créneau sur Cal.com</BookingLink>
        <p className="small-note">
          Le calendrier s’ouvre sur Cal.com. Aucune réservation n’est effectuée
          avant votre confirmation sur ce service.
        </p>
      </aside>
    </section>
  );
}
