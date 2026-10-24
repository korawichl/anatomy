const path = require('path');
const { writeQuestionsFile } = require('./question_builder_util.cjs');
const { part1 } = require('./digestive_advanced_part1.cjs');
const { part2 } = require('./digestive_advanced_part2.cjs');

const allDigestive = [...part1, ...part2];
console.log(`Compiling Digestive Questions: Total = ${allDigestive.length}`);

if (allDigestive.length !== 100) {
  console.error(`Error: Expected 100 questions, got ${allDigestive.length}`);
  process.exit(1);
}

const outputPath = path.join(__dirname, '../src/data/digestiveQuestions.ts');
writeQuestionsFile(outputPath, 'digestiveQuestions', allDigestive);
console.log('Successfully compiled and balanced digestiveQuestions.ts!');
