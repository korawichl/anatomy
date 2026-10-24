const fs = require('fs');
const path = require('path');

// Evenly balance answer options across A, B, C, D
function balanceQuestions(questions) {
  const targetKeys = ['A', 'B', 'C', 'D'];
  return questions.map((q, idx) => {
    const targetKey = targetKeys[idx % 4];
    if (q.correctOption === targetKey) {
      return q;
    }
    
    // Swap the correct option with targetKey
    const currentCorrect = q.correctOption;
    const oldOptions = { ...q.options };
    const tempText = oldOptions[targetKey];
    oldOptions[targetKey] = oldOptions[currentCorrect];
    oldOptions[currentCorrect] = tempText;

    return {
      ...q,
      options: oldOptions,
      correctOption: targetKey
    };
  });
}

function writeQuestionsFile(filename, varName, questions) {
  const balanced = balanceQuestions(questions);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  const code = `import { Question } from '../types';

export const ${varName}: Question[] = ${JSON.stringify(balanced, null, 2)};
`;
  fs.writeFileSync(filename, code, 'utf8');
  console.log(`Wrote ${balanced.length} questions to ${filename}`);
  checkDistribution(balanced);
}

function checkDistribution(questions) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  questions.forEach(q => counts[q.correctOption]++);
  console.log(`Answer distribution: A=${counts.A}, B=${counts.B}, C=${counts.C}, D=${counts.D}`);
}

module.exports = { writeQuestionsFile, checkDistribution, balanceQuestions };
