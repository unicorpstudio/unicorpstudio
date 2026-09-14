<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Unicorp Studio — règles du projet

Lire `docs/design-system.md` avant une modification visuelle et `docs/strategie-conversion.md` avant une réécriture de l’offre. Le public principal est B2B ; DesignerOS reste une entrée secondaire. Préserver les SVG originaux, les tokens et les composants partagés. Les nouveaux textes sont en français, au vouvoiement, avec des phrases naturelles et sans chiffres de résultats, avis ou disponibilités inventés.

Le calendrier est défini dans `src/lib/site.ts`. Le diagnostic est déclaratif, sans collecte ni stockage persistant. Ne pas ajouter un tracker, un backend d’envoi ou un SDK de réservation sans besoin explicite. Ne jamais annoncer une conformité d’accessibilité intégrale sur la seule base d’Axe.

Vérification : `pnpm typecheck`, `pnpm test`, `pnpm build`, puis `pnpm test:e2e` pour une modification de parcours. Ne pas lancer le build et le serveur de développement simultanément pendant une validation de production.
