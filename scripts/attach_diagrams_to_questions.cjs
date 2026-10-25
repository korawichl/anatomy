/**
 * scripts/attach_diagrams_to_questions.cjs
 * Attaches the 15 pairs of High-Resolution Medical Vector (SVG) Diagrams
 * to 105 questions (35 per system) across Cardiovascular/Lymphatic, Digestive, and Urinary systems.
 * Also enriches question stems and explanations with landmark pin cross-references [A]–[F].
 */

const path = require('path');
const { diagrams } = require('./generate_anatomy_diagrams.cjs');
const { writeQuestionsFile } = require('./question_builder_util.cjs');

const cardio1 = require('./cardio_advanced_part1.cjs').part1;
const cardio2 = require('./cardio_advanced_part2.cjs').part2;
const digest1 = require('./digestive_advanced_part1.cjs').part1;
const digest2 = require('./digestive_advanced_part2.cjs').part2;
const urinary1 = require('./urinary_advanced_part1.cjs').part1;
const urinary2 = require('./urinary_advanced_part2.cjs').part2;

const diagramMapById = {};
diagrams.forEach(d => {
  diagramMapById[d.id] = d;
});

// Mapping of 105 Question IDs (35 per system) -> Diagram ID + Target Pin Hint
const questionToDiagram = {
  // === CARDIOVASCULAR & LYMPHATIC (35 Questions) ===
  // 1. heart_chambers (7)
  'CARDIO-026': { diagId: 'heart_chambers', focusPin: 'A' },
  'CARDIO-027': { diagId: 'heart_chambers', focusPin: 'B' },
  'CARDIO-028': { diagId: 'heart_chambers', focusPin: 'C' },
  'CARDIO-029': { diagId: 'heart_chambers', focusPin: 'F' },
  'CARDIO-030': { diagId: 'heart_chambers', focusPin: 'C' },
  'CARDIO-031': { diagId: 'heart_chambers', focusPin: 'E' },
  'CARDIO-032': { diagId: 'heart_chambers', focusPin: 'D' },

  // 2. conduction_system (7)
  'CARDIO-041': { diagId: 'conduction_system', focusPin: 'A' },
  'CARDIO-042': { diagId: 'conduction_system', focusPin: 'B' },
  'CARDIO-043': { diagId: 'conduction_system', focusPin: 'C' },
  'CARDIO-044': { diagId: 'conduction_system', focusPin: 'D' },
  'CARDIO-045': { diagId: 'conduction_system', focusPin: 'E' },
  'CARDIO-046': { diagId: 'conduction_system', focusPin: 'F' },
  'CARDIO-047': { diagId: 'conduction_system', focusPin: 'B' },

  // 3. coronary_vessels (7)
  'CARDIO-051': { diagId: 'coronary_vessels', focusPin: 'A' },
  'CARDIO-052': { diagId: 'coronary_vessels', focusPin: 'D' },
  'CARDIO-053': { diagId: 'coronary_vessels', focusPin: 'E' },
  'CARDIO-054': { diagId: 'coronary_vessels', focusPin: 'B' },
  'CARDIO-055': { diagId: 'coronary_vessels', focusPin: 'F' },
  'CARDIO-056': { diagId: 'coronary_vessels', focusPin: 'D' },
  'CARDIO-057': { diagId: 'coronary_vessels', focusPin: 'C' },

  // 4. blood_cells_vessels (7)
  'CARDIO-003': { diagId: 'blood_cells_vessels', focusPin: 'A' },
  'CARDIO-006': { diagId: 'blood_cells_vessels', focusPin: 'B' },
  'CARDIO-007': { diagId: 'blood_cells_vessels', focusPin: 'C' },
  'CARDIO-009': { diagId: 'blood_cells_vessels', focusPin: 'D' },
  'CARDIO-061': { diagId: 'blood_cells_vessels', focusPin: 'E' },
  'CARDIO-062': { diagId: 'blood_cells_vessels', focusPin: 'F' },
  'CARDIO-063': { diagId: 'blood_cells_vessels', focusPin: 'F' },

  // 5. lymphatic_system (7)
  'CARDIO-077': { diagId: 'lymphatic_system', focusPin: 'F' },
  'CARDIO-078': { diagId: 'lymphatic_system', focusPin: 'F' },
  'CARDIO-081': { diagId: 'lymphatic_system', focusPin: 'A' },
  'CARDIO-082': { diagId: 'lymphatic_system', focusPin: 'B' },
  'CARDIO-086': { diagId: 'lymphatic_system', focusPin: 'D' },
  'CARDIO-087': { diagId: 'lymphatic_system', focusPin: 'E' },
  'CARDIO-088': { diagId: 'lymphatic_system', focusPin: 'C' },

  // === DIGESTIVE SYSTEM (35 Questions) ===
  // 6. gi_wall_peritoneum (7)
  'DIGEST-001': { diagId: 'gi_wall_peritoneum', focusPin: 'A' },
  'DIGEST-002': { diagId: 'gi_wall_peritoneum', focusPin: 'B' },
  'DIGEST-003': { diagId: 'gi_wall_peritoneum', focusPin: 'C' },
  'DIGEST-004': { diagId: 'gi_wall_peritoneum', focusPin: 'E' },
  'DIGEST-005': { diagId: 'gi_wall_peritoneum', focusPin: 'F' },
  'DIGEST-006': { diagId: 'gi_wall_peritoneum', focusPin: 'F' },
  'DIGEST-099': { diagId: 'gi_wall_peritoneum', focusPin: 'D' },

  // 7. oral_salivary_esophagus (7)
  'DIGEST-011': { diagId: 'oral_salivary_esophagus', focusPin: 'F' },
  'DIGEST-012': { diagId: 'oral_salivary_esophagus', focusPin: 'D' },
  'DIGEST-014': { diagId: 'oral_salivary_esophagus', focusPin: 'E' },
  'DIGEST-016': { diagId: 'oral_salivary_esophagus', focusPin: 'A' },
  'DIGEST-017': { diagId: 'oral_salivary_esophagus', focusPin: 'B' },
  'DIGEST-018': { diagId: 'oral_salivary_esophagus', focusPin: 'C' },
  'DIGEST-088': { diagId: 'oral_salivary_esophagus', focusPin: 'A' },

  // 8. stomach_anatomy (7)
  'DIGEST-026': { diagId: 'stomach_anatomy', focusPin: 'A' },
  'DIGEST-027': { diagId: 'stomach_anatomy', focusPin: 'C' },
  'DIGEST-028': { diagId: 'stomach_anatomy', focusPin: 'B' },
  'DIGEST-030': { diagId: 'stomach_anatomy', focusPin: 'D' },
  'DIGEST-031': { diagId: 'stomach_anatomy', focusPin: 'D' },
  'DIGEST-032': { diagId: 'stomach_anatomy', focusPin: 'E' },
  'DIGEST-034': { diagId: 'stomach_anatomy', focusPin: 'F' },

  // 9. small_large_intestine (7)
  'DIGEST-037': { diagId: 'small_large_intestine', focusPin: 'B' },
  'DIGEST-039': { diagId: 'small_large_intestine', focusPin: 'C' },
  'DIGEST-042': { diagId: 'small_large_intestine', focusPin: 'A' },
  'DIGEST-045': { diagId: 'small_large_intestine', focusPin: 'E' },
  'DIGEST-051': { diagId: 'small_large_intestine', focusPin: 'F' },
  'DIGEST-052': { diagId: 'small_large_intestine', focusPin: 'D' },
  'DIGEST-054': { diagId: 'small_large_intestine', focusPin: 'D' },

  // 10. hepatobiliary_pancreas (7)
  'DIGEST-061': { diagId: 'hepatobiliary_pancreas', focusPin: 'B' },
  'DIGEST-065': { diagId: 'hepatobiliary_pancreas', focusPin: 'B' },
  'DIGEST-066': { diagId: 'hepatobiliary_pancreas', focusPin: 'C' },
  'DIGEST-067': { diagId: 'hepatobiliary_pancreas', focusPin: 'F' },
  'DIGEST-069': { diagId: 'hepatobiliary_pancreas', focusPin: 'A' },
  'DIGEST-071': { diagId: 'hepatobiliary_pancreas', focusPin: 'D' },
  'DIGEST-073': { diagId: 'hepatobiliary_pancreas', focusPin: 'E' },

  // === URINARY SYSTEM (35 Questions) ===
  // 11. kidney_gross_internal (7)
  'URINARY-007': { diagId: 'kidney_gross_internal', focusPin: 'E' },
  'URINARY-009': { diagId: 'kidney_gross_internal', focusPin: 'A' },
  'URINARY-010': { diagId: 'kidney_gross_internal', focusPin: 'B' },
  'URINARY-011': { diagId: 'kidney_gross_internal', focusPin: 'D' },
  'URINARY-012': { diagId: 'kidney_gross_internal', focusPin: 'C' },
  'URINARY-013': { diagId: 'kidney_gross_internal', focusPin: 'E' },
  'URINARY-096': { diagId: 'kidney_gross_internal', focusPin: 'F' },

  // 12. renal_corpuscle_jga (7)
  'URINARY-017': { diagId: 'renal_corpuscle_jga', focusPin: 'E' },
  'URINARY-018': { diagId: 'renal_corpuscle_jga', focusPin: 'D' },
  'URINARY-019': { diagId: 'renal_corpuscle_jga', focusPin: 'D' },
  'URINARY-020': { diagId: 'renal_corpuscle_jga', focusPin: 'C' },
  'URINARY-036': { diagId: 'renal_corpuscle_jga', focusPin: 'B' },
  'URINARY-037': { diagId: 'renal_corpuscle_jga', focusPin: 'B' },
  'URINARY-038': { diagId: 'renal_corpuscle_jga', focusPin: 'A' },

  // 13. nephron_tubules (7)
  'URINARY-022': { diagId: 'nephron_tubules', focusPin: 'A' },
  'URINARY-024': { diagId: 'nephron_tubules', focusPin: 'B' },
  'URINARY-025': { diagId: 'nephron_tubules', focusPin: 'D' },
  'URINARY-027': { diagId: 'nephron_tubules', focusPin: 'E' },
  'URINARY-028': { diagId: 'nephron_tubules', focusPin: 'F' },
  'URINARY-029': { diagId: 'nephron_tubules', focusPin: 'F' },
  'URINARY-032': { diagId: 'nephron_tubules', focusPin: 'C' },

  // 14. raas_filtration (7)
  'URINARY-039': { diagId: 'raas_filtration', focusPin: 'D' },
  'URINARY-040': { diagId: 'raas_filtration', focusPin: 'E' },
  'URINARY-042': { diagId: 'raas_filtration', focusPin: 'F' },
  'URINARY-044': { diagId: 'raas_filtration', focusPin: 'A' },
  'URINARY-045': { diagId: 'raas_filtration', focusPin: 'C' },
  'URINARY-046': { diagId: 'raas_filtration', focusPin: 'A' },
  'URINARY-047': { diagId: 'raas_filtration', focusPin: 'B' },

  // 15. ureter_bladder_urethra (7)
  'URINARY-051': { diagId: 'ureter_bladder_urethra', focusPin: 'A' },
  'URINARY-053': { diagId: 'ureter_bladder_urethra', focusPin: 'A' },
  'URINARY-055': { diagId: 'ureter_bladder_urethra', focusPin: 'C' },
  'URINARY-057': { diagId: 'ureter_bladder_urethra', focusPin: 'B' },
  'URINARY-060': { diagId: 'ureter_bladder_urethra', focusPin: 'D' },
  'URINARY-061': { diagId: 'ureter_bladder_urethra', focusPin: 'E' },
  'URINARY-063': { diagId: 'ureter_bladder_urethra', focusPin: 'F' }
};

function enrichWithDiagram(questions) {
  let count = 0;
  const enriched = questions.map(q => {
    const mapping = questionToDiagram[q.id];
    if (!mapping) return q;

    const diag = diagramMapById[mapping.diagId];
    if (!diag) {
      throw new Error(`Missing diagram definition for ${mapping.diagId}`);
    }

    const focusPinObj = diag.pins.find(p => p.pin === mapping.focusPin) || diag.pins[0];
    count++;

    const imageLabels = diag.pins.map(p => ({
      pin: p.pin,
      term: p.term,
      thaiName: p.thaiName,
      description: `ตำแหน่ง [${p.pin}] คือ ${p.term} — ${p.thaiName}`
    }));

    // Add visual pin reference to question stem and explanation if not already added
    const diagramPromptPrefix = `[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [${focusPinObj.pin}]] `;
    const cleanQuestionText = q.questionText.startsWith('[🖼️')
      ? q.questionText
      : diagramPromptPrefix + q.questionText;

    const pinSummarySuffix = `\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (${diag.title}): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [${focusPinObj.pin}] (${focusPinObj.term} — ${focusPinObj.thaiName}) สามารถกดสลับดู "ภาพเฉลยครบทุกจุด (Master Labeled Diagram)" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที`;
    const cleanExplanation = q.explanation.includes('📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ')
      ? q.explanation
      : q.explanation + pinSummarySuffix;

    const updatedTags = Array.from(new Set([...(q.tags || []), 'has-diagram', `diagram-${diag.id}`]));

    return {
      ...q,
      questionText: cleanQuestionText,
      explanation: cleanExplanation,
      tags: updatedTags,
      imageUrl: `/images/anatomy/${diag.id}_exam.svg`,
      labeledImageUrl: `/images/anatomy/${diag.id}_labeled.svg`,
      imageCaption: `${diag.title} — ${diag.subtitle}`,
      imageLabels
    };
  });

  return { enriched, count };
}

const allCardio = [...cardio1, ...cardio2];
const allDigest = [...digest1, ...digest2];
const allUrinary = [...urinary1, ...urinary2];

const resCardio = enrichWithDiagram(allCardio);
const resDigest = enrichWithDiagram(allDigest);
const resUrinary = enrichWithDiagram(allUrinary);

console.log(`Attached diagrams to Cardio: ${resCardio.count} questions`);
console.log(`Attached diagrams to Digestive: ${resDigest.count} questions`);
console.log(`Attached diagrams to Urinary: ${resUrinary.count} questions`);
console.log(`Total diagram questions: ${resCardio.count + resDigest.count + resUrinary.count}`);

writeQuestionsFile(path.join(__dirname, '../src/data/cardioQuestions.ts'), 'cardioQuestions', resCardio.enriched);
writeQuestionsFile(path.join(__dirname, '../src/data/digestiveQuestions.ts'), 'digestiveQuestions', resDigest.enriched);
writeQuestionsFile(path.join(__dirname, '../src/data/urinaryQuestions.ts'), 'urinaryQuestions', resUrinary.enriched);
