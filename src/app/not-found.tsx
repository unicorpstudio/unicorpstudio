import { ButtonLink, Label } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container error-page">
      <Label>Erreur 404</Label>
      <h1>
        Cette page a peut-être
        <br />
        pris une autre direction.
      </h1>
      <p>
        Retrouvez notre système de marque, nos offres et nos ressources depuis
        l’accueil.
      </p>
      <ButtonLink href="/">Revenir à l’accueil</ButtonLink>
    </section>
  );
}
