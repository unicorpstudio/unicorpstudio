# Design system : correspondance Figma → React

Source : [Unicorp.Studio, 1920w light, 1786:1452](https://www.figma.com/design/vA7iweoBTGUX5n7iy4ccFT/Unicorp.Studio?node-id=1786-1452).

Lecture du contexte de design pour le hero, le header, les cartes système, l’offre et les réalisations. Inspection complémentaire de la page « Unicorp Studio V3 » : pas de composants/composants sets natifs trouvés sur cette page, pas de styles texte/couleur locaux retournés, et une seule variable locale numérique non structurante. Les règles visibles sont donc normalisées dans les tokens CSS et des composants React, sans prétendre réutiliser une bibliothèque Code Connect absente.

## Fondations conservées

| Figma | Implémentation |
| --- | --- |
| Noir `#000000`, blanc `#FFFFFF` | `--color-ink`, `--color-paper` |
| Vert `#AEFF00` | `--color-accent` |
| Surfaces `#FAFAFA`, `#F6F6F6` | `--color-surface`, `--color-soft` |
| Bordure `#E4E4E7` | `--color-line` |
| Cartes rayon 16 | `--radius-card: 16px` |
| Boutons pilule rayon 50 | `--radius-pill: 50px` |
| Labels rayon 4 | `--radius-label: 4px` |
| Conteneur principal 1440 | `--container: 1440px` |
| SF Pro Display regular/medium | pile système Apple/SF, puis Segoe UI/Arial |
| Titres 64 / 40, tracking resserré | échelle fluide desktop/mobile conservant l’esprit de la hiérarchie |

Les gris de texte sont renforcés lorsque nécessaire pour les contrastes. Les espacements et la taille des titres deviennent fluides ; les cadres fixes de 1920 pixels ne sont pas copiés comme des dimensions web rigides.

## Composants et provenance

| Composant React | Référence Figma |
| --- | --- |
| `Brand` | Logo `1786:2423`, vecteurs `1786:2425` et `1786:2432` |
| `Header` | Header `1786:2419`, navigation pilule `1786:2434` |
| `ButtonLink`, `BookingLink` | Trailing Default Button `1786:1494`, `1786:1501`, `1786:2460` |
| `Label` | Labels `1786:2464`, `1849:4`, `1786:2193` |
| `Arrow` | Flèche pointillée `1849:55` et flèche diagonale exportée du hero |
| `CheckList` | Liste de livrables `1786:2679`, icône `1786:2681` |
| Cartes de livrables | Project `1849:308`, `1849:272`, `1849:284` |
| Cartes d’offres | Offre `1786:2656`, carte dégradée `1786:2675` |
| FAQ | Section `1786:2300`, adaptée avec `details` / `summary` natifs |
| Favicon | Symbole original `1786:2431` |

Les SVG proviennent d’exports Figma, sans reconstruction manuelle des tracés. Ils sont enregistrés dans le projet, sans URL d’asset expirante. L’exploration e/01 du nœud `1786:1741` est optimisée en WebP (1440 × 810, environ 112 Ko).

## Typographie

SF Pro constitue la famille principale de la page source. La licence Apple ne permet pas sa redistribution comme webfont générique. Le projet utilise la police système SF sur les appareils Apple, puis les alternatives système indiquées dans la pile CSS. Les familles secondaires isolées du Figma (Manrope, Helvetica Neue LT Std) ne sont pas téléchargées arbitrairement. [Conditions et ressources officielles Apple](https://developer.apple.com/fonts/).

## Conventions d’évolution

- Modifier les tokens avant d’introduire une couleur ou un rayon isolé.
- Réutiliser `BookingLink` pour garder une seule source de vérité pour le calendrier.
- Étendre les composants communs plutôt que copier des boutons ou des en-têtes.
- Maintenir tous les états clavier et la préférence de mouvement réduit.
- Vérifier une nouvelle page à 320, 390, 768 et 1440 pixels avant livraison.
- Ajouter un article dans `src/lib/content.ts` : génération de route et sitemap suivent automatiquement.
