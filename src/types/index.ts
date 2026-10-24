export type OrganSystem = 
  | 'Cardiovascular and Lymphatic Systems'
  | 'Digestive System'
  | 'Urinary System';

export type ExamMode = 'practice' | 'exam' | 'review' | 'random';
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Mixed';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: string;
  questionText: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctOption: OptionKey;
  explanation: string;
  system: OrganSystem;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  sourceFile: string;
  sourcePage: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  verificationStatus: 'verified' | 'unverified';
}

export interface AttemptAnswer {
  id: string;
  attemptId: string;
  questionId: string;
  selectedOption: OptionKey | null;
  correctOptionSnapshot: OptionKey;
  isCorrect: boolean;
  questionSnapshot: Question;
  isFlagged?: boolean;
}

export interface ExamAttempt {
  id: string;
  startedAt: string;
  submittedAt: string;
  examMode: ExamMode;
  selectedSystems: OrganSystem[];
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  score: number;
  percentage: number;
  durationSeconds: number;
  answers: AttemptAnswer[];
}

export interface ExamConfig {
  system: OrganSystem | 'All Systems';
  questionCount: number;
  difficulty: Difficulty;
  mode: ExamMode;
  timed: boolean;
  timeLimitMinutes: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}

export interface TopicAnalytics {
  topic: string;
  system: OrganSystem;
  totalAnswered: number;
  correctCount: number;
  accuracy: number;
  status: 'Strong' | 'Developing' | 'Needs Review';
}

export interface SystemAnalytics {
  system: OrganSystem;
  totalAnswered: number;
  correctCount: number;
  accuracy: number;
  attemptsCount: number;
}
