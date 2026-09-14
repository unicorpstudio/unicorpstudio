import type { Metadata } from "next";

export const site = {
  name: "Unicorp Studio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://unicorp.studio",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://cal.com/unicorpstudio/30min",
  description:
    "Unicorp Studio transforme votre marque en un système cohérent : stratégie, identité, composants Figma et React, documentation IA et site web.",
};
export const navigation = [
  { label: "Le système", href: "/#systeme" },
  { label: "La méthode", href: "/#methode" },
  { label: "Les offres", href: "/#offres" },
];

export function pageMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : site.name;
  const description = metadata.description || site.description;
  return {
    ...metadata,
    openGraph: { type: "website", locale: "fr_FR", siteName: site.name, title, description, ...metadata.openGraph },
    twitter: { card: "summary", title, description, ...metadata.twitter },
  };
}
