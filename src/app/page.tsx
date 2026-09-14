import type { Metadata } from "next";
import Link from "next/link";
import {
  BookingLink,
  ButtonLink,
  Label,
  SectionHeading,
  CheckList,
  ClosingCTA,
  Arrow,
} from "@/components/ui";
import { SystemDemo } from "@/components/system-demo";
import { faqs, articles } from "@/lib/content";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-topline">
          <Label>Branding & systèmes digitaux pour les entreprises</Label>
          <span className="hero-index">UNICORP STUDIO / DESIGN × IA</span>
        </div>
        <h1 id="hero-title">
          Une marque qui reste la vôtre,
          <br className="desktop-break" /> même avec l’IA.
        </h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-description">
              Nous transformons votre identité en un système que vos équipes et
              vos agents IA peuvent vraiment utiliser. Du positionnement au site
              web, tout est conçu ensemble pour que votre marque garde sa
              cohérence à mesure que vous avancez.
            </p>
            <div className="hero-actions">
              <BookingLink />
              <ButtonLink href="/#systeme" variant="secondary">
                Découvrir le système
              </ButtonLink>
            </div>
          </div>
          <div className="hero-side">
            <span>
              Pour les startups, SaaS
              <br />
              et entreprises qui évoluent.
            </span>
            <div>
              <span className="status-dot" />
              Un seul partenaire, de l’idée au code.
            </div>
          </div>
        </div>
        <SystemDemo />
        <div className="workflow-strip">
          <span>Un fil conducteur, du début à la suite.</span>
          <ol>
            <li>Stratégie</li>
            <li>Identité</li>
            <li>Design system</li>
            <li>Code</li>
            <li>Site web</li>
          </ol>
        </div>
      </section>
      <section
        className="section container problem"
        aria-labelledby="problem-title"
      >
        <Label>Le vrai sujet</Label>
        <div className="problem-grid">
          <h2 id="problem-title">
            Votre marque existe.
            <br />
            <span className="muted">
              Mais chacun en fait
              <br className="desktop-break" /> sa propre version.
            </span>
          </h2>
          <div>
            <p className="lead">
              Votre charte est dans un PDF, vos maquettes dans Figma et votre
              site vit de son côté. À chaque nouvelle page, quelqu’un doit
              réinterpréter les mêmes choix.
            </p>
            <p>
              Avec l’IA, vous pouvez produire davantage. Mais si les règles de
              votre marque ne sont pas explicites, vous multipliez aussi les
              incohérences. Nous relions ces éléments pour que chaque nouvelle
              interface parte d’une base commune.
            </p>
            <a className="text-link" href="#systeme">
              Voilà ce que nous mettons en place <Arrow />
            </a>
          </div>
        </div>
        <div className="friction-row">
          <div>
            <span className="item-number">01</span>
            <h3>Une direction que l’on comprend</h3>
            <p>
              Votre positionnement et vos messages donnent une raison claire de
              vous choisir.
            </p>
          </div>
          <div>
            <span className="item-number">02</span>
            <h3>Des choix que l’on retrouve</h3>
            <p>
              Les mêmes règles visuelles relient vos maquettes, vos composants
              et vos pages.
            </p>
          </div>
          <div>
            <span className="item-number">03</span>
            <h3>Une base que l’on peut faire évoluer</h3>
            <p>
              Votre équipe dispose du contexte et du code pour construire la
              suite.
            </p>
          </div>
        </div>
      </section>
      <section id="systeme" className="section system-section">
        <div className="container">
          <SectionHeading
            label="L’AI-Ready Brand System"
            title="Tout ce qui fait votre marque, dans un système utilisable."
            text="Nous assemblons les fondations, les composants et les règles qui permettent à votre équipe de créer sans redéfinir votre identité à chaque projet."
          />
          <div className="deliverables-grid">
            <article className="deliverable">
              <span className="item-number">01 / La direction</span>
              <h3>
                Une marque qui sait
                <br />
                ce qu’elle veut dire.
              </h3>
              <p>
                Nous clarifions votre positionnement, votre promesse et votre
                voix, puis nous les traduisons en une identité qui vous
                ressemble.
              </p>
              <CheckList
                items={[
                  "Positionnement et messages clés",
                  "Direction visuelle, couleurs et typographie",
                  "Règles de ton et de rédaction",
                ]}
              />
              <span className="delivery-format">Votre socle de marque</span>
            </article>
            <article className="deliverable">
              <span className="item-number">02 / Le système</span>
              <h3>
                Les mêmes règles,
                <br />
                du design au code.
              </h3>
              <p>
                Votre identité devient une bibliothèque de composants Figma et
                React, avec des valeurs partagées et des états clairement
                définis.
              </p>
              <CheckList
                items={[
                  "Tokens et composants Figma",
                  "Composants React réutilisables",
                  "États, responsive et interactions",
                ]}
              />
              <span className="delivery-format">Figma + code source</span>
            </article>
            <article className="deliverable deliverable-accent">
              <span className="item-number">03 / L’autonomie</span>
              <h3>
                Le contexte dont
                <br />
                vos agents ont besoin.
              </h3>
              <p>
                Nous documentons comment utiliser votre système. Votre équipe et
                ses agents disposent d’un cadre concret pour créer de nouvelles
                interfaces.
              </p>
              <CheckList
                items={[
                  "Composants autorisés et exemples",
                  "Contexte et consignes pour les agents",
                  "Documentation et prise en main",
                ]}
              />
              <span className="delivery-format">
                Une base pour construire la suite
              </span>
            </article>
          </div>
          <div className="system-footnote">
            <img src="/brand/figma.svg" width="18" height="27" alt="Figma" />
            <span>Figma</span>
            <span aria-hidden="true">→</span>
            <span>React / Next.js</span>
            <span aria-hidden="true">→</span>
            <span>Vercel</span>
            <p>Vos fichiers et votre code restent entre vos mains.</p>
          </div>
        </div>
      </section>
      <section className="section container example-section">
        <SectionHeading
          label="Le système en pratique"
          title="Ce site est notre premier terrain d’application."
          text="L’identité Unicorp vient de notre fichier Figma. Les boutons, la palette et les cartes que vous voyez ici sont devenus des composants partagés dans le site."
        />
        <div className="example-panel">
          <div className="example-code">
            <span className="code-label">UNICORP / BRAND CONTEXT</span>
            <div>
              <span className="line-number">01</span>
              <span>Utiliser les composants existants.</span>
            </div>
            <div>
              <span className="line-number">02</span>
              <span>Conserver la palette de marque.</span>
            </div>
            <div>
              <span className="line-number">03</span>
              <span>Écrire comme on parle à un client.</span>
            </div>
            <div>
              <span className="line-number">04</span>
              <span>Vérifier le clavier et le mobile.</span>
            </div>
            <div>
              <span className="line-number">05</span>
              <span>Documenter ce qui change.</span>
            </div>
            <div className="code-comment">
              Un cadre explicite pour créer avec l’IA.
            </div>
          </div>
          <div className="example-copy">
            <Label green>Notre propre méthode, appliquée</Label>
            <h3>
              Faire évoluer Unicorp
              <br />
              en gardant sa personnalité.
            </h3>
            <p>
              Le site change de message et de structure tout en conservant sa
              personnalité. C’est exactement le rôle du système : permettre à
              votre entreprise d’évoluer sans perdre ce qui la rend
              reconnaissable.
            </p>
            <ButtonLink href="/studio" variant="secondary">
              Découvrir notre approche
            </ButtonLink>
          </div>
        </div>
      </section>
      <section id="methode" className="section container">
        <SectionHeading
          label="Une collaboration, de bout en bout"
          title="Vous faites partie du projet, à chaque étape."
          text="Nous avançons par étapes lisibles. Vous savez ce que nous travaillons, ce que vous devez valider et ce que vous récupérez à la fin."
        />
        <ol className="process-list">
          {[
            [
              "Comprendre votre point de départ",
              "Nous examinons votre offre, votre identité, votre site et votre manière de travailler. Ensemble, nous définissons les priorités et le périmètre utile.",
              "Cadrage & diagnostic",
            ],
            [
              "Poser une direction commune",
              "Nous clarifions les messages et l’identité visuelle. Vous validez les fondations avant que nous les déclinions dans le système.",
              "Stratégie & identité",
            ],
            [
              "Construire et éprouver le système",
              "Nous créons les composants Figma, leur version en code et les règles d’utilisation. Les pages concrètes nous permettent de vérifier que tout fonctionne ensemble.",
              "Figma, code & documentation",
            ],
            [
              "Vous donner les moyens de continuer",
              "Nous livrons les fichiers, organisons la prise en main et, pour la formule avec site, préparons la mise en ligne sur vos comptes.",
              "Livraison & déploiement",
            ],
          ].map(([title, text, tag], i) => (
            <li key={title}>
              <span className="process-number">0{i + 1}</span>
              <h3>{title}</h3>
              <div>
                <p>{text}</p>
                <span className="process-tag">{tag}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section id="offres" className="section offers-section">
        <div className="container">
          <SectionHeading
            label="Deux façons de travailler ensemble"
            title="Le bon socle pour votre prochaine étape."
            text="Choisissez le système seul si votre équipe peut développer ses interfaces, ou confiez-nous également votre site jusqu’à sa mise en ligne."
            centered
          />
          <div className="offers-grid">
            <article className="offer-card">
              <span className="offer-kicker">
                Votre équipe construit la suite
              </span>
              <h3>System</h3>
              <p className="offer-description">
                Pour donner à vos équipes et à leurs agents une base commune,
                claire et réutilisable.
              </p>
              <p className="price">
                4 000–7 000 €<span>Budget indicatif · sur devis</span>
              </p>
              <BookingLink variant="secondary">Discuter de System</BookingLink>
              <CheckList
                items={[
                  "Positionnement et fondations de marque",
                  "Bibliothèque de composants Figma",
                  "Tokens et composants React",
                  "Documentation pour les équipes et les agents",
                  "Fichiers sources et prise en main",
                ]}
              />
            </article>
            <article className="offer-card offer-featured">
              <div className="offer-top">
                <span className="offer-kicker">
                  Du positionnement à la mise en ligne
                </span>
                <span className="offer-chip">L’accompagnement complet</span>
              </div>
              <h3>System + Website</h3>
              <p className="offer-description">
                Pour lancer votre nouveau site avec le système qui vous
                permettra de le faire évoluer.
              </p>
              <p className="price">
                7 000–12 000 €<span>Budget indicatif · sur devis</span>
              </p>
              <BookingLink>Discuter de mon site</BookingLink>
              <CheckList
                items={[
                  "Tout ce qui est inclus dans System",
                  "Structure et rédaction des pages principales",
                  "Site Next.js responsive",
                  "SEO technique et vérifications d’accessibilité",
                  "Déploiement Vercel et passation",
                ]}
              />
            </article>
          </div>
          <p className="offer-note">
            Le périmètre, le calendrier, les taxes applicables et les éventuels
            services tiers sont précisés dans votre devis avant tout engagement.
          </p>
          <div className="audit-strip">
            <div>
              <Label green>Vous ne savez pas par où commencer ?</Label>
              <h3>Commençons par regarder ce qui existe.</h3>
              <p>
                Le diagnostic gratuit vous donne un premier repère. Pour
                examiner vos fichiers et vos interfaces en détail, l’audit
                complet se situe entre 500 et 1 000 €, sur devis.
              </p>
            </div>
            <ButtonLink href="/audit" variant="secondary">
              Évaluer ma marque
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <Label>Les questions que vous vous posez</Label>
          <h2>
            Avant de
            <br />
            faire équipe.
          </h2>
          <p>
            Un point mérite d’être précisé ?<br />
            <Link href="/contact" className="text-link">
              Parlons-en <Arrow />
            </Link>
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="section container journal-preview">
        <div className="journal-header">
          <SectionHeading
            label="Le journal"
            title="Ce que nous apprenons en construisant."
          />
          <Link href="/journal" className="text-link">
            Tous les articles <Arrow />
          </Link>
        </div>
        <div className="articles-grid">
          {articles.map((article, i) => (
            <Link
              className="article-card"
              href={`/journal/${article.slug}`}
              key={article.slug}
            >
              <div className={`article-visual visual-${i}`} aria-hidden="true">
                {i === 0 ? (
                  <>
                    <span>Aa</span>
                    <small>La marque, au-delà du PDF.</small>
                  </>
                ) : i === 1 ? (
                  <>
                    <span className="visual-brackets">{"{ }"}</span>
                    <small>Design & code, même langage.</small>
                  </>
                ) : (
                  <>
                    <span>01 → 02</span>
                    <small>Préparer la suite.</small>
                  </>
                )}
              </div>
              <div className="article-meta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h3>{article.title}</h3>
              <span className="article-read">
                Lire l’article <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
