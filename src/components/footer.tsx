import Link from "next/link";
import { Brand, Arrow } from "./ui";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link href="/" aria-label="Unicorp Studio, accueil">
              <Brand />
            </Link>
            <p>
              Des marques pensées pour les humains.
              <br />
              Des systèmes compris par l’IA.
            </p>
          </div>
          <nav aria-label="Explorer le studio">
            <span className="footer-label">Le studio</span>
            <Link href="/#systeme">Le système</Link>
            <Link href="/#offres">Les offres</Link>
            <Link href="/studio">Notre approche</Link>
            <Link href="/contact">Nous contacter</Link>
          </nav>
          <nav aria-label="Ressources">
            <span className="footer-label">Pour aller plus loin</span>
            <Link href="/audit">Diagnostic de marque</Link>
            <Link href="/journal">Le journal</Link>
            <Link href="/designeros">
              DesignerOS <Arrow />
            </Link>
            <a href={site.bookingUrl}>
              Prendre rendez-vous <Arrow />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Unicorp Studio</p>
          <span>Nous travaillons avec vous, où que vous soyez.</span>
          <div>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/accessibilite">Accessibilité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
