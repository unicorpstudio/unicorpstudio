import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { Label, Arrow, ClosingCTA } from "@/components/ui";
import { articles } from "@/lib/content";
export const metadata: Metadata = pageMetadata({
  title: "Le journal",
  description:
    "Nos réflexions sur les marques, les design systems et la création de sites avec l’IA.",
  alternates: { canonical: "/journal" },
});
export default function JournalPage() {
  return (
    <>
      <section className="subpage-hero container">
        <Label>Le journal Unicorp</Label>
        <h1>
          Un peu de recul
          <br className="desktop-break" /> pour mieux construire.
        </h1>
        <p className="lead">
          Des idées et des méthodes pour relier votre marque, vos interfaces et
          les outils avec lesquels vous travaillez.
        </p>
      </section>
      <section
        className="container articles-grid"
        style={{ paddingBottom: 100 }}
        aria-label="Tous les articles"
      >
        {articles.map((article, i) => (
          <Link
            className="article-card"
            href={`/journal/${article.slug}`}
            key={article.slug}
          >
            <div className={`article-visual visual-${i}`} aria-hidden="true">
              <span>{i === 0 ? "Aa" : i === 1 ? "{ }" : "01 → 02"}</span>
              <small>{article.category}</small>
            </div>
            <div className="article-meta">
              <span>{article.category}</span>
              <span>{article.readTime}</span>
            </div>
            <h2 style={{ fontSize: 25, marginTop: 14, letterSpacing: "-.6px" }}>
              {article.title}
            </h2>
            <p style={{ marginTop: 16, fontSize: 15 }}>{article.excerpt}</p>
            <span className="article-read">
              Lire l’article <Arrow />
            </span>
          </Link>
        ))}
      </section>
      <ClosingCTA />
    </>
  );
}
