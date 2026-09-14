import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Unicorp Studio — Votre marque, prête pour l’IA",
    template: "%s — Unicorp Studio",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: "Unicorp Studio — Votre marque, prête pour l’IA",
    description: site.description,
  },
  twitter: { card: "summary", title: site.name, description: site.description },
  icons: { icon: "/brand/favicon.svg" },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
