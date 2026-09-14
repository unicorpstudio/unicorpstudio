export const faqs = [
  {
    question: "Qu’est-ce qu’un système de marque « AI-ready » ?",
    answer:
      "C’est une identité dont les règles sont suffisamment explicites pour être utilisées par votre équipe et par un agent IA. Nous relions le positionnement, les styles Figma, les composants de code et leur documentation. L’agent dispose ainsi d’un cadre pour construire vos pages ; votre équipe garde la responsabilité de les relire et de les valider.",
  },
  {
    question: "Nous avons déjà une identité. Faut-il tout refaire ?",
    answer:
      "Non. Nous commençons par examiner ce qui existe et ce qui fonctionne. Si votre identité est juste, nous la conservons et structurons les éléments manquants. Le périmètre peut porter sur le système, la documentation et le code, sans refaire votre logo.",
  },
  {
    question: "Quelle formule choisir ?",
    answer:
      "System convient si votre équipe dispose déjà des ressources pour construire ses interfaces. System + Website ajoute la conception, la rédaction et le développement des pages principales, puis leur mise en ligne. Si vous hésitez, le premier échange sert précisément à déterminer le bon périmètre.",
  },
  {
    question: "Combien de temps faut-il prévoir ?",
    answer:
      "Le calendrier dépend de votre point de départ, du nombre de composants et des pages à créer. Après notre premier échange, vous recevez un planning avec les étapes de validation. Nous fixons les dates avec vous avant de commencer, pour tenir compte de vos contraintes et de vos disponibilités.",
  },
  {
    question: "Que récupérons-nous à la fin du projet ?",
    answer:
      "Les fichiers Figma, les tokens, le code source, les assets et les documents de votre système vous sont remis. Pour la formule avec site, nous organisons également le déploiement sur vos comptes et la prise en main. Les licences des outils ou assets tiers sont précisées dans le devis.",
  },
  {
    question: "Sommes-nous liés à un outil d’IA ?",
    answer:
      "Les règles de marque et les composants restent utilisables indépendamment d’un agent. La documentation peut être adaptée à Claude Code, Codex ou à votre environnement. Les outils évoluent ; le système doit pouvoir continuer à être utilisé et maintenu par votre équipe.",
  },
  {
    question: "Comment se passe la suite après la mise en ligne ?",
    answer:
      "La livraison comprend une passation et la documentation nécessaire à votre autonomie. Si vous souhaitez un accompagnement pour ajouter des pages ou faire évoluer le système, nous définissons ce périmètre séparément. Les modalités de suivi sont précisées dans votre devis.",
  },
];
export const articles = [
  {
    slug: "une-charte-ne-suffit-plus",
    category: "Marque × IA",
    title: "Votre charte graphique ne dit pas tout ce que votre équipe sait.",
    excerpt:
      "Ce qui semble évident à un designer mérite parfois d’être écrit pour devenir réutilisable.",
    readTime: "4 min",
    sections: [
      {
        title: "Le problème commence avec les règles implicites",
        text: "Une charte présente souvent un logo, une palette et quelques mises en page. Elle exprime une direction, mais explique rarement toutes les décisions nécessaires à la création d’une interface : quelle couleur pour une action secondaire, quel espace entre deux champs, quelle variante de carte dans un contexte précis. Votre équipe complète ces blancs grâce à son expérience. Un agent peut les compléter autrement.",
      },
      {
        title: "Passer des exemples à des décisions explicites",
        text: "Commencez par nommer les couleurs selon leur rôle, puis décrivez les états de vos composants. Un bouton n’est pas seulement une forme : il possède un libellé, une taille, un état de focus et un comportement. Une règle utile relie la décision visuelle à son usage, plutôt que de donner une valeur isolée.",
      },
      {
        title: "Une documentation qui accompagne les fichiers",
        text: "Rassemblez les composants autorisés, leurs exemples d’utilisation et les exceptions dans le dépôt du projet. Ajoutez la voix de marque, les règles de contenu et les attentes d’accessibilité. Le contexte devient consultable au même endroit que le code. Il reste nécessaire de vérifier le résultat : une documentation claire réduit l’ambiguïté, elle ne remplace pas la direction créative.",
      },
    ],
  },
  {
    slug: "figma-et-code-un-meme-systeme",
    category: "Design system",
    title: "Figma et votre site devraient parler de la même marque.",
    excerpt:
      "Comment éviter qu’une identité se transforme à chaque passage du design au développement.",
    readTime: "3 min",
    sections: [
      {
        title: "Donner les mêmes noms aux mêmes choses",
        text: "Quand la couleur d’action porte un nom dans Figma et un autre dans le code, les mises à jour demandent un travail de traduction. Partager un vocabulaire simple entre les deux environnements facilite la discussion. Le rôle d’une valeur doit rester compréhensible même lorsque cette valeur change.",
      },
      {
        title: "Construire les composants autour de vrais usages",
        text: "Une bibliothèque utile commence avec les interfaces dont vous avez besoin. Concevez un bouton, une carte ou un champ à partir de situations concrètes, puis documentez ses variantes. Multiplier les composants sans les utiliser dans une page réelle crée une complexité que votre équipe devra ensuite entretenir.",
      },
      {
        title: "Définir comment le système évolue",
        text: "Précisez où une modification est proposée, qui la valide et comment elle arrive dans le code. Les noms et la documentation ne suffisent pas si chacun modifie sa copie. La cohérence dépend aussi de ce processus, et de la capacité de votre équipe à comprendre ce qui a changé.",
      },
    ],
  },
  {
    slug: "preparer-votre-prochain-site",
    category: "Méthode",
    title: "Avant de refaire votre site, regardez ce que vous voulez garder.",
    excerpt:
      "Un bon point de départ évite de reconstruire les mêmes fondations quelques mois plus tard.",
    readTime: "3 min",
    sections: [
      {
        title: "Commencer par votre activité",
        text: "Qu’est-ce qui a changé dans votre offre ? À qui vous adressez-vous aujourd’hui ? Quelles questions vos prospects posent-ils avant de vous contacter ? Ces réponses servent à hiérarchiser le contenu. Une nouvelle mise en page ne corrige pas à elle seule une offre difficile à comprendre.",
      },
      {
        title: "Faire l’inventaire de ce qui existe",
        text: "Rassemblez votre identité, les écrans Figma, le site et ses composants. Repérez les éléments qui fonctionnent, les divergences et ce qui doit réellement être refait. Ce travail permet de concentrer le budget sur les problèmes qui ont un effet sur l’expérience de vos visiteurs et le quotidien de votre équipe.",
      },
      {
        title: "Prévoir la page suivante dès maintenant",
        text: "Votre site aura probablement besoin de nouvelles pages. Pensez à leur structure, aux contenus que vous devrez mettre à jour et aux personnes qui le feront. Livrer des composants compréhensibles et un cadre éditorial vous donne une base pour continuer, au lieu de dépendre d’une nouvelle refonte pour chaque évolution.",
      },
    ],
  },
];
