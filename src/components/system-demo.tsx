"use client";
import { useState } from "react";
import { Brand } from "./ui";
const examples = {
  accueil: {
    name: "Accueil",
    title: "Votre prochaine étape mérite une marque à sa hauteur.",
    action: "Parlons de votre projet",
    tag: "Unicorp Studio",
  },
  offre: {
    name: "Offre",
    title: "Un système de marque qui grandit avec votre entreprise.",
    action: "Découvrir le système",
    tag: "AI-Ready Brand System",
  },
  contact: {
    name: "Contact",
    title: "Et si nous construisions la suite ensemble ?",
    action: "Choisir un créneau",
    tag: "Faisons connaissance",
  },
};
export function SystemDemo() {
  const [selected, setSelected] = useState<keyof typeof examples>("accueil");
  const example = examples[selected];
  return (
    <div className="system-demo">
      <div className="demo-toolbar">
        <div>
          <span className="status-dot" />
          Unicorp System <span className="muted">/ aperçu interactif</span>
        </div>
        <span className="mono">01 — 03</span>
      </div>
      <div className="demo-grid">
        <div className="foundation-preview">
          <div className="preview-heading">
            <span>01 / Identité</span>
            <span>↗</span>
          </div>
          <div className="type-specimen" aria-hidden="true">
            Aa
            <span>
              Une personnalité,
              <br />
              des règles claires.
            </span>
          </div>
          <div className="color-row">
            <div>
              <span className="swatch swatch-lime" />
              <span>#AEFF00</span>
            </div>
            <div>
              <span className="swatch swatch-black" />
              <span>#000000</span>
            </div>
            <div>
              <span className="swatch swatch-white" />
              <span>#FFFFFF</span>
            </div>
          </div>
          <p>
            La même direction visuelle,
            <br />
            quel que soit le support.
          </p>
        </div>
        <div className="components-preview">
          <div className="preview-heading">
            <span>02 / Composants</span>
            <span aria-hidden="true">⌘</span>
          </div>
          <div className="component-stack">
            <div className="sample-button">
              Parlons de votre projet <span aria-hidden="true">↗</span>
            </div>
            <div className="sample-outline">
              Découvrir notre approche <span aria-hidden="true">→</span>
            </div>
            <div className="sample-tags">
              <span>Branding</span>
              <span>Design system</span>
            </div>
            <div className="token-code">
              <span>brand.accent</span>
              <b>#AEFF00</b>
              <span>button.radius</span>
              <b>50px</b>
              <span>component.status</span>
              <b>réutilisable</b>
            </div>
          </div>
          <p>
            Une seule définition.
            <br />
            Figma, code et agents alignés.
          </p>
        </div>
        <div className="website-preview">
          <div className="preview-heading">
            <span>03 / Site web</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="mini-browser">
            <div className="browser-top">
              <span aria-hidden="true">•••</span>
              <span>
                unicorp.studio/{selected === "accueil" ? "" : selected}
              </span>
            </div>
            <div className="mini-page" aria-live="polite" aria-atomic="true">
              <Brand />
              <span className="mini-tag">{example.tag}</span>
              <p className="mini-title">{example.title}</p>
              <span className="mini-button">
                {example.action}
                <span aria-hidden="true">↗</span>
              </span>
              <div className="mini-grid" aria-hidden="true">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
          <div
            className="page-selector"
            role="group"
            aria-label="Choisir une page de démonstration"
          >
            {Object.entries(examples).map(([key, value]) => (
              <button
                key={key}
                aria-pressed={selected === key}
                onClick={() => setSelected(key as keyof typeof examples)}
              >
                {value.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="demo-footer">
        <span>Votre marque traverse tout le système.</span>
        <span>
          Changez de page pour voir la cohérence en action{" "}
          <span aria-hidden="true">↑</span>
        </span>
      </div>
    </div>
  );
}
