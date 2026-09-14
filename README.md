# Unicorp Studio

Nouveau site de marque en français, réalisé avec Next.js App Router, React et TypeScript. Projet autonome prêt à importer dans Vercel. La livraison n’effectue aucune publication et ne change pas le domaine existant.

## Démarrer

Prérequis : Node.js 24 LTS et pnpm 11.19.0.

```sh
corepack enable
corepack prepare pnpm@11.19.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Ouvrir http://127.0.0.1:3000. Si Corepack n’est pas installé avec Node, installer pnpm suivant sa documentation officielle : https://pnpm.io/installation.

## Vérifier la version de production

```sh
pnpm build
pnpm start
```

Arrêter le serveur de développement avant de démarrer la version de production sur le même port. La compilation préconstruit toutes les pages. Aucun service de base de données ni clé d’API n’est nécessaire.

## Déployer sur Vercel

1. Ajouter le contenu de ce dossier à votre dépôt Git, puis importer ce dépôt dans Vercel.
2. Choisir le dossier contenant `package.json` comme Root Directory et le preset **Next.js**.
3. Utiliser Node.js **24.x**, `pnpm install --frozen-lockfile` pour l’installation et `pnpm build` pour la compilation. Conserver le répertoire de sortie par défaut de Next.js.
4. Définir les variables décrites dans `.env.example` dans les environnements souhaités. Le calendrier fonctionne déjà avec le lien fourni : https://cal.com/unicorpstudio/30min.
5. Créer une Preview, vérifier le contenu et compléter les mentions légales, puis publier et connecter le domaine `unicorp.studio` depuis votre compte Vercel.

Le fichier `vercel.json` précise le framework et les commandes. Les modifications des variables `NEXT_PUBLIC_*` et des informations légales nécessitent une nouvelle compilation, car les pages sont préconstruites.

Documentation officielle : [Next.js sur Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [versions Node.js](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

## Pages et fonctionnalités

- `/` : proposition de valeur, démonstration interactive du système, livrables, méthode, offres, FAQ et journal.
- `/audit` : cinq questions, score déclaratif, priorité conseillée, bilan TXT téléchargeable et rendez-vous.
- `/contact` : présentation de l’échange et lien direct vers Cal.com.
- `/studio` : approche et exploration visuelle issue du fichier fourni.
- `/journal` et trois articles : contenu éditorial sur marque, IA et design systems.
- `/designeros` : présentation du programme en préparation, sans inscriptions ni dates inventées.
- `/confidentialite`, `/mentions-legales`, `/accessibilite` : informations de fonctionnement et de transparence.
- Page 404, sitemap XML, robots.txt, favicon original et métadonnées par page.

## Où modifier le site

| Besoin | Fichier |
| --- | --- |
| Palette, typographie, espacements, responsive | `src/app/globals.css` |
| Logo, boutons, labels, listes, bloc de contact | `src/components/ui.tsx` |
| Adresse du site, calendrier, navigation | `src/lib/site.ts` |
| Copywriting principal et tarifs | `src/app/page.tsx` |
| FAQ et articles | `src/lib/content.ts` |
| Questions, calcul et bilan du diagnostic | `src/lib/audit.ts` |
| Assets Figma locaux | `public/brand/` et `public/images/` |

Les composants reproduisent les motifs présents dans le Figma fourni. Le fichier ne présentait pas de bibliothèque de composants publiée sur la page inspectée : la correspondance est documentée dans `docs/design-system.md`.

## Données et intégrations

Le seul service externe dans le parcours de conversion est Cal.com, ouvert au clic dans l’onglet courant. Aucun SDK tiers, embed, formulaire d’envoi, service e-mail, pixel de suivi ou script analytique n’est chargé. Le diagnostic ne scanne pas les sites ; il calcule un score indicatif à partir des réponses, conservées uniquement en mémoire pendant la session de page. Le bilan est créé localement dans le navigateur.

## Tests

```sh
pnpm typecheck
pnpm test
pnpm exec playwright install chromium webkit
pnpm build
pnpm test:e2e
```

Le serveur de test est lancé automatiquement si aucun serveur n’écoute déjà sur le port 3000. Pour tester précisément le build de production, arrêter le serveur de développement avant `pnpm test:e2e`.

Le rapport est consultable avec `pnpm exec playwright show-report`. Résultat de la livraison : 5 tests de logique et 34 tests de parcours passent. Détails dans `docs/validation.md`.

## Points à finaliser avant publication

- Renseigner la raison sociale, l’adresse, l’identifiant de l’entreprise, le responsable de publication et l’e-mail dans les variables `LEGAL_*`. Tant qu’ils ne sont pas tous renseignés, une note explicite apparaît dans les mentions légales. Aucun identifiant juridique n’a été inventé.
- Confirmer les budgets indicatifs issus du positionnement fourni et les modalités contractuelles dans vos devis.
- Les tarifs et le calendrier de DesignerOS ne sont pas annoncés : le programme est présenté comme étant en préparation.
- SF Pro est la famille principale du Figma. Le site emploie la police système Apple sur macOS/iOS et une alternative système ailleurs. Aucun fichier propriétaire Apple n’est redistribué. La métrique exacte peut donc varier entre systèmes.
- L’objectif est WCAG 2.2 AA. Les contrôles automatisés ne constituent pas une certification ni un audit exhaustif avec lecteurs d’écran et utilisateurs.

Le code et les assets sont livrés pour ce projet Unicorp. Les noms et marques de services tiers restent à leurs titulaires respectifs.
