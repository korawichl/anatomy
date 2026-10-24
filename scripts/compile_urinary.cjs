const path = require('path');
const { writeQuestionsFile } = require('./question_builder_util.cjs');
const { part1 } = require('./urinary_advanced_part1.cjs');
const { part2 } = require('./urinary_advanced_part2.cjs');

const allUrinary = [...part1, ...part2];
console.log(`Compiling Urinary Questions: Total = ${allUrinary.length}`);

if (allUrinary.length !== 100) {
  console.error(`Error: Expected 100 questions, got ${allUrinary.length}`);
  process.exit(1);
}

const outputPath = path.join(__dirname, '../src/data/urinaryQuestions.ts');
writeQuestionsFile(outputPath, 'urinaryQuestions', allUrinary);
console.log('Successfully compiled and balanced urinaryQuestions.ts!');
