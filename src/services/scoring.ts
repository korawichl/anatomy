import { Question, OptionKey, AttemptAnswer, ExamAttempt, OrganSystem, ExamMode } from '../types';

export const ScoringService = {
  createAttemptAnswer(
    question: Question,
    selectedOption: OptionKey | null,
    attemptId: string,
    isFlagged: boolean = false
  ): AttemptAnswer {
    const isCorrect = selectedOption === question.correctOption;
    return {
      id: `${attemptId}_${question.id}`,
      attemptId,
      questionId: question.id,
      selectedOption,
      correctOptionSnapshot: question.correctOption,
      isCorrect,
      questionSnapshot: { ...question },
      isFlagged
    };
  },

  finalizeAttempt(params: {
    attemptId: string;
    startedAt: string;
    examMode: ExamMode;
    selectedSystems: OrganSystem[];
    questions: Question[];
    userAnswers: Record<string, OptionKey | null>;
    flaggedQuestionIds: string[];
    durationSeconds: number;
  }): ExamAttempt {
    const {
      attemptId,
      startedAt,
      examMode,
      selectedSystems,
      questions,
      userAnswers,
      flaggedQuestionIds,
      durationSeconds
    } = params;

    const answers: AttemptAnswer[] = questions.map(q => {
      const selected = userAnswers[q.id] || null;
      const isFlagged = flaggedQuestionIds.includes(q.id);
      return this.createAttemptAnswer(q, selected, attemptId, isFlagged);
    });

    const correctCount = answers.filter(a => a.isCorrect).length;
    const totalQuestions = answers.length;
    const wrongCount = totalQuestions - correctCount;
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 1000) / 10 : 0;

    return {
      id: attemptId,
      startedAt,
      submittedAt: new Date().toISOString(),
      examMode,
      selectedSystems,
      totalQuestions,
      correctCount,
      wrongCount,
      score: correctCount,
      percentage,
      durationSeconds,
      answers
    };
  },

  getSystemBreakdown(answers: AttemptAnswer[]) {
    const breakdown: Record<OrganSystem, { total: number; correct: number; percentage: number }> = {
      'Cardiovascular and Lymphatic Systems': { total: 0, correct: 0, percentage: 0 },
      'Digestive System': { total: 0, correct: 0, percentage: 0 },
      'Urinary System': { total: 0, correct: 0, percentage: 0 }
    };

    answers.forEach(ans => {
      const sys = ans.questionSnapshot.system;
      if (breakdown[sys]) {
        breakdown[sys].total++;
        if (ans.isCorrect) {
          breakdown[sys].correct++;
        }
      }
    });

    Object.keys(breakdown).forEach(k => {
      const sys = k as OrganSystem;
      const item = breakdown[sys];
      item.percentage = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
    });

    return breakdown;
  }
};
