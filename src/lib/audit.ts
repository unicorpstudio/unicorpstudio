export const questions = [
  {
    id: "positionnement",
    dimension: "Positionnement",
    title: "Votre équipe décrit-elle votre marque de la même façon ?",
    help: "Pensez à votre promesse, à votre public et aux raisons de vous choisir.",
    options: [
      "Nous n’avons pas encore clarifié ces éléments.",
      "Ils sont définis, mais chacun les formule à sa manière.",
      "Ils sont écrits et utilisés dans nos contenus.",
    ],
    recommendation:
      "Commencez par formaliser votre public, votre promesse et vos messages clés. Ces décisions guideront les choix visuels et éditoriaux du système.",
  },
  {
    id: "identite",
    dimension: "Identité visuelle",
    title: "Vos règles visuelles sont-elles faciles à retrouver ?",
    help: "Couleurs, typographies, espacements et usages du logo doivent pouvoir être consultés.",
    options: [
      "Nous les reconstituons à partir de nos anciens supports.",
      "Nous avons une charte, mais elle laisse des zones d’ombre.",
      "Nos règles sont à jour, nommées et accessibles à l’équipe.",
    ],
    recommendation:
      "Rassemblez les règles visuelles dans une source partagée. Nommez les couleurs selon leur rôle et documentez les espacements, la typographie et les cas d’usage.",
  },
  {
    id: "figma",
    dimension: "Composants Figma",
    title: "Comment concevez-vous une nouvelle page dans Figma ?",
    help: "L’enjeu est de réutiliser des décisions, et pas seulement de copier un écran.",
    options: [
      "Nous repartons d’une page blanche ou d’un ancien écran.",
      "Nous avons quelques composants, avec des variantes manquantes.",
      "Nous utilisons une bibliothèque documentée et maintenue.",
    ],
    recommendation:
      "Créez une première bibliothèque à partir de vos pages réelles. Priorisez les composants fréquents et leurs états avant d’étendre le système.",
  },
  {
    id: "code",
    dimension: "Composants de code",
    title: "Le code de votre site suit-il les mêmes règles que Figma ?",
    help: "Pensez aux valeurs partagées, aux composants et à la manière de les mettre à jour.",
    options: [
      "Le design et le code évoluent séparément.",
      "Certaines valeurs sont partagées, mais les écarts s’accumulent.",
      "Les composants et les valeurs sont alignés et vérifiés.",
    ],
    recommendation:
      "Reliez les noms et les rôles des tokens Figma à ceux du code. Vérifiez les composants utilisés en production et définissez un processus de mise à jour commun.",
  },
  {
    id: "contexte",
    dimension: "Contexte pour l’IA",
    title: "Quelles consignes un agent reçoit-il pour créer une page ?",
    help: "Il doit savoir quels composants utiliser, comment écrire et quelles règles respecter.",
    options: [
      "Un prompt et éventuellement une capture d’écran.",
      "Quelques règles, dispersées dans plusieurs documents.",
      "Un contexte structuré, des composants autorisés et des exemples.",
    ],
    recommendation:
      "Ajoutez au dépôt les composants autorisés, les exemples d’usage, la voix de marque et les attentes d’accessibilité. Faites de ce contexte une partie maintenue du système.",
  },
] as const;
export type AuditResult = {
  score: number;
  level: string;
  priority: number;
  dimensions: { label: string; score: number }[];
};
export function calculateAudit(answers: number[]): AuditResult {
  if (
    answers.length !== questions.length ||
    answers.some(
      (answer) => !Number.isInteger(answer) || answer < 0 || answer > 2,
    )
  )
    throw new Error(
      "Répondez aux cinq questions pour obtenir votre diagnostic.",
    );
  const score = answers.reduce((total, answer) => total + answer * 10, 0);
  return {
    score,
    level:
      score < 40
        ? "Des fondations à poser."
        : score < 80
          ? "Une bonne base, encore fragmentée."
          : "Un système déjà bien structuré.",
    priority: answers.indexOf(Math.min(...answers)),
    dimensions: questions.map((question, index) => ({
      label: question.dimension,
      score: answers[index] * 50,
    })),
  };
}
export function auditReport(answers: number[]) {
  const result = calculateAudit(answers);
  return [
    "UNICORP STUDIO — DIAGNOSTIC DE MARQUE",
    "",
    `Score déclaratif : ${result.score}/100`,
    result.level,
    "",
    ...result.dimensions.map((item) => `${item.label} : ${item.score}/100`),
    "",
    result.score === 100
      ? "Prochaine étape : confrontez ces réponses à vos fichiers et à vos interfaces réelles."
      : `Priorité : ${questions[result.priority].recommendation}`,
    "",
    "Méthode : 5 questions, chacune vaut 0, 10 ou 20 points. Les cinq dimensions ont le même poids.",
    "Ce résultat repose sur vos réponses. Il ne constitue pas un audit de vos fichiers et ne garantit pas les résultats d’un agent IA.",
    "",
    "Pour en parler : https://cal.com/unicorpstudio/30min",
  ].join("\n");
}
