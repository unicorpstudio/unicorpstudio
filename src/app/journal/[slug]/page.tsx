import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Label, ButtonLink } from "@/components/ui";
import { articles } from "@/lib/content";
import { site } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${site.url}/journal/${slug}`,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.excerpt,
    },
  };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <article>
      <header className="container article-header">
        <Link className="breadcrumb" href="/journal">
          ← Tous les articles
        </Link>
        <div>
          <Label>{article.category}</Label>
        </div>
        <h1>{article.title}</h1>
        <p className="lead">{article.excerpt}</p>
        <p className="article-byline">
          Par Unicorp Studio · {article.readTime} de lecture
        </p>
      </header>
      <div className="container prose article-body">
        {article.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
        <aside className="article-cta">
          <h2>Et votre marque, où en est-elle ?</h2>
          <p>Notre diagnostic vous aide à faire le point en cinq questions.</p>
          <ButtonLink href="/audit">Évaluer ma marque</ButtonLink>
        </aside>
      </div>
    </article>
  );
}
