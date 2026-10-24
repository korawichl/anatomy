import { Question, OrganSystem, Difficulty } from '../types';
import { cardioQuestions } from './cardioQuestions';
import { digestiveQuestions } from './digestiveQuestions';
import { urinaryQuestions } from './urinaryQuestions';

export const allQuestions: Question[] = [
  ...cardioQuestions,
  ...digestiveQuestions,
  ...urinaryQuestions
];

export const questionBankSummary = {
  total: allQuestions.length,
  bySystem: {
    'Cardiovascular and Lymphatic Systems': cardioQuestions.length,
    'Digestive System': digestiveQuestions.length,
    'Urinary System': urinaryQuestions.length
  },
  byDifficulty: {
    Easy: allQuestions.filter(q => q.difficulty === 'Easy').length,
    Medium: allQuestions.filter(q => q.difficulty === 'Medium').length,
    Hard: allQuestions.filter(q => q.difficulty === 'Hard').length
  }
};

export function getFilteredQuestions(params: {
  system?: OrganSystem | 'All Systems';
  difficulty?: Difficulty;
  topic?: string;
  search?: string;
  limit?: number;
}): Question[] {
  let list = [...allQuestions];

  if (params.system && params.system !== 'All Systems') {
    list = list.filter(q => q.system === params.system);
  }

  if (params.difficulty && params.difficulty !== 'Mixed') {
    list = list.filter(q => q.difficulty === params.difficulty);
  }

  if (params.topic) {
    list = list.filter(q => q.topic === params.topic);
  }

  if (params.search && params.search.trim() !== '') {
    const q = params.search.toLowerCase();
    list = list.filter(item => 
      item.questionText.toLowerCase().includes(q) ||
      item.topic.toLowerCase().includes(q) ||
      item.explanation.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q) ||
      Object.values(item.options).some(opt => opt.toLowerCase().includes(q))
    );
  }

  if (params.limit && params.limit > 0) {
    list = list.slice(0, params.limit);
  }

  return list;
}
