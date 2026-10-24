const path = require('path');
const { writeQuestionsFile } = require('./question_builder_util.cjs');
const { part1 } = require('./cardio_advanced_part1.cjs');
const { part2 } = require('./cardio_advanced_part2.cjs');

const allCardio = [...part1, ...part2];
console.log(`Compiling Cardio Questions: Total = ${allCardio.length}`);

if (allCardio.length !== 100) {
  console.error(`Error: Expected 100 questions, got ${allCardio.length}`);
  process.exit(1);
}

const outputPath = path.join(__dirname, '../src/data/cardioQuestions.ts');
writeQuestionsFile(outputPath, 'cardioQuestions', allCardio);
console.log('Successfully compiled and balanced cardioQuestions.ts!');
