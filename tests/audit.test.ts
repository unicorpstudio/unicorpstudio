import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateAudit, auditReport } from "../src/lib/audit.ts";
test("scores minimum et maximum", () => {
  assert.equal(calculateAudit([0, 0, 0, 0, 0]).score, 0);
  assert.equal(calculateAudit([2, 2, 2, 2, 2]).score, 100);
});
test("score mixte et priorité sur la dimension la plus faible", () => {
  const result = calculateAudit([2, 1, 0, 2, 1]);
  assert.equal(result.score, 60);
  assert.equal(result.priority, 2);
  assert.equal(result.dimensions[1].score, 50);
});
test("refuse les réponses incomplètes ou hors barème", () => {
  for (const answers of [
    [],
    [1, 1, 1, 1],
    [0, 0, 0, 0, -1],
    [2, 2, 2, 2, 3],
    [1, 1, 1, 1, 1.5],
    [NaN, 1, 1, 1, 1],
  ])
    assert.throws(() => calculateAudit(answers));
});
test("le bilan reste déclaratif et n’invente pas une analyse", () => {
  const report = auditReport([1, 1, 1, 1, 1]);
  assert.match(report, /50\/100/);
  assert.match(report, /ne constitue pas un audit/);
  assert.match(report, /https:\/\/cal.com\/unicorpstudio\/30min/);
});
test("le score maximal propose une vérification réelle", () => {
  assert.match(auditReport([2, 2, 2, 2, 2]), /confrontez ces réponses/);
});
