# Validation de la livraison

Vérifications exécutées le 14 septembre 2026 sur la version de production locale.

## Résultats

| Vérification | Résultat |
| --- | --- |
| Compilation Next.js de production | Réussie, pages préconstruites |
| TypeScript strict | Réussi |
| Tests de calcul du diagnostic | 5 / 5 |
| Tests de parcours et de pages | 34 / 34 sur Chromium et WebKit |
| Axe, règles WCAG 2 A/AA, 2.1 AA, 2.2 AA | Aucune violation détectée sur les 12 pages testées, le menu mobile ouvert et le résultat du diagnostic |
| Responsive de l’accueil | Aucun débordement à 320, 375, 768, 1024, 1440, 1920 px |
| Pages secondaires | Pas de débordement à 1440 px (Chromium) et 390 px (WebKit) |
| Chargement des images | Toutes chargées, y compris le visuel chargé à la demande |
| Liens internes et ancres de l’accueil | Réponses HTTP et cibles vérifiées |
| Réservation | Liens pointant vers `https://cal.com/unicorpstudio/30min` ; aucune réservation effectuée |
| SEO | Titre, langue, canonical, sitemap, robots, 404 et hiérarchie H1 contrôlés |

## Parcours exercés

Diagnostic : refus d’une étape sans réponse, sélection, progression, retour avec conservation du choix, calcul d’un résultat mixte à 60/100, export TXT, accès au calendrier, recommencement. Vérification de l’absence de stockage local et de session.

Navigation : ouverture du menu mobile, fermeture par Échap et restitution du focus, navigation vers les offres, ouverture de FAQ avec Entrée. Les trois états de la démonstration partagent l’identité et les boutons réagissent aux sélections.

Les captures du navigateur ont également servi à inspecter le hero sur mobile, le hero desktop et les cartes d’offres. Les assets du logo ont été comparés aux exports Figma et le visuel de portfolio inspecté avant intégration.

## Portée des résultats

Ces contrôles ne constituent pas un audit complet de conformité WCAG ou RGAA. Aucun test exhaustif avec NVDA, JAWS, VoiceOver, des utilisateurs ou tous les navigateurs réels n’a été réalisé. Une validation manuelle dédiée reste nécessaire pour revendiquer une conformité intégrale. [Le W3C précise les critères ajoutés par WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

Le responsive couvre les dimensions indiquées ; il ne constitue pas un test sur tous les appareils physiques. Aucun score Lighthouse, mesure Core Web Vitals terrain ou gain de conversion n’est revendiqué.

Le déploiement Vercel et la réservation finale restent sous le contrôle du propriétaire. Les variables juridiques sont à compléter avant publication. Le diagnostic est déclaratif et ne remplace pas l’audit approfondi proposé dans l’offre.

## Rejouer

```sh
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test
pnpm exec playwright install chromium webkit
pnpm build
pnpm test:e2e
```

Arrêter tout serveur de développement avant le dernier appel pour laisser Playwright lancer la version de production. Les rapports HTML de test sont locaux et ignorés par Git.
