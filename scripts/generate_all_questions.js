const fs = require('fs');
const path = require('path');

// We will generate 100 questions for Cardiovascular & Lymphatic,
// 100 questions for Digestive System, and 100 questions for Urinary System.
// Total 300 verified questions with balanced answers (A, B, C, D),
// English anatomical terms, Thai explanations, difficulty, topics, source file, and page.

console.log("Preparing Question Bank Generator...");
