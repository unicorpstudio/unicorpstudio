"use client";
import { useEffect, useRef, useState } from "react";
import { questions, calculateAudit, auditReport } from "@/lib/audit";
import { BookingLink, Arrow, Label } from "./ui";
export function AuditQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1),
  );
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    panel.current?.focus();
  }, [step, complete]);
  const result = complete ? calculateAudit(answers) : null;
  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (answers[step] === -1) {
      setError(true);
      return;
    }
    setError(false);
    if (step === questions.length - 1) setComplete(true);
    else setStep(step + 1);
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + auditReport(answers)], {
        type: "text/plain;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "diagnostic-marque-unicorp.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <div
      ref={panel}
      tabIndex={-1}
      className="audit-form"
      aria-label={
        complete
          ? "Votre résultat"
          : `Question ${step + 1} sur ${questions.length}`
      }
    >
      {result ? (
        <div>
          <Label green>Votre point de départ</Label>
          <p className="score-value">
            {result.score}
            <small> / 100</small>
          </p>
          <h2 className="result-heading">{result.level}</h2>
          <p className="result-note">
            Ce score repose uniquement sur vos réponses. Il vous aide à
            identifier un point de départ, sans analyser vos fichiers ni votre
            site.
          </p>
          <ul className="score-breakdown">
            {result.dimensions.map((dimension) => (
              <li key={dimension.label}>
                <span>{dimension.label}</span>
                <strong>{dimension.score}/100</strong>
              </li>
            ))}
          </ul>
          <div className="priority-box">
            <h3>
              {result.score === 100
                ? "Vérifiez le système en situation réelle."
                : `Votre priorité : ${questions[result.priority].dimension.toLowerCase()}.`}
            </h3>
            <p>
              {result.score === 100
                ? "Vos réponses décrivent un système solide. Testez-le sur une nouvelle page, puis vérifiez la cohérence visuelle, le contenu et l’accessibilité du résultat avec votre équipe."
                : questions[result.priority].recommendation}
            </p>
          </div>
          <div className="result-actions">
            <BookingLink>Parler de mes résultats</BookingLink>
            <button className="button button-secondary" onClick={download}>
              Télécharger mon bilan
            </button>
          </div>
          <button
            className="back-button audit-restart"
            onClick={() => {
              setAnswers(Array(questions.length).fill(-1));
              setStep(0);
              setComplete(false);
              setError(false);
            }}
          >
            Recommencer le diagnostic
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <div className="audit-progress">
            <span>
              Question {step + 1} sur {questions.length}
            </span>
            <span>{questions[step].dimension}</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Progression du diagnostic"
            aria-valuemin={0}
            aria-valuemax={5}
            aria-valuenow={step}
          >
            <span style={{ width: `${(step / questions.length) * 100}%` }} />
          </div>
          <fieldset
            aria-describedby={`question-help${error ? " question-error" : ""}`}
          >
            <legend>{questions[step].title}</legend>
            <p id="question-help" className="question-help">
              {questions[step].help}
            </p>
            {questions[step].options.map((option, value) => (
              <label className="radio-option" key={`${step}-${value}`}>
                <input
                  type="radio"
                  name={questions[step].id}
                  value={value}
                  checked={answers[step] === value}
                  onChange={() => {
                    setAnswers((previous) =>
                      previous.map((answer, index) =>
                        index === step ? value : answer,
                      ),
                    );
                    setError(false);
                  }}
                />
                {option}
              </label>
            ))}
          </fieldset>
          {error && (
            <p id="question-error" role="alert" className="form-error">
              Choisissez la réponse qui correspond le mieux à votre situation.
            </p>
          )}
          <div className="audit-controls">
            <button
              type="button"
              className="back-button"
              disabled={step === 0}
              onClick={() => {
                setStep(step - 1);
                setError(false);
              }}
            >
              Précédent
            </button>
            <button className="button button-primary" type="submit">
              {step === questions.length - 1
                ? "Voir mon diagnostic"
                : "Question suivante"}
              <Arrow />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
