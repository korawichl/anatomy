import { ExamAttempt, TopicAnalytics, SystemAnalytics, OrganSystem, Question } from '../types';
import { allQuestions } from '../data/questionBank';

export interface OverallAnalytics {
  totalAttempts: number;
  totalAnswered: number;
  totalCorrect: number;
  totalWrong: number;
  overallAccuracy: number;
  avgScorePercentage: number;
  maxScorePercentage: number;
  latestScorePercentage: number | null;
  previousScorePercentage: number | null;
  scoreImprovement: number | null;
  systemAnalytics: Record<OrganSystem, SystemAnalytics>;
  topicAnalytics: TopicAnalytics[];
  weakTopics: TopicAnalytics[];
  strongTopics: TopicAnalytics[];
  missedQuestionIds: string[];
}

export const AnalyticsService = {
  computeAnalytics(attempts: ExamAttempt[]): OverallAnalytics {
    const totalAttempts = attempts.length;

    // Default system stats
    const systems: OrganSystem[] = [
      'Cardiovascular and Lymphatic Systems',
      'Digestive System',
      'Urinary System'
    ];

    const systemAnalytics: Record<OrganSystem, SystemAnalytics> = {
      'Cardiovascular and Lymphatic Systems': {
        system: 'Cardiovascular and Lymphatic Systems',
        totalAnswered: 0,
        correctCount: 0,
        accuracy: 0,
        attemptsCount: 0
      },
      'Digestive System': {
        system: 'Digestive System',
        totalAnswered: 0,
        correctCount: 0,
        accuracy: 0,
        attemptsCount: 0
      },
      'Urinary System': {
        system: 'Urinary System',
        totalAnswered: 0,
        correctCount: 0,
        accuracy: 0,
        attemptsCount: 0
      }
    };

    let totalAnswered = 0;
    let totalCorrect = 0;
    let totalScorePercentages = 0;
    let maxScorePercentage = 0;

    const topicMap: Record<string, { system: OrganSystem; total: number; correct: number }> = {};
    const questionAccuracyMap: Record<string, { attempts: number; correct: number }> = {};

    attempts.forEach(attempt => {
      totalScorePercentages += attempt.percentage;
      if (attempt.percentage > maxScorePercentage) {
        maxScorePercentage = attempt.percentage;
      }

      attempt.selectedSystems.forEach(sys => {
        if (systemAnalytics[sys]) {
          systemAnalytics[sys].attemptsCount++;
        }
      });

      attempt.answers.forEach(ans => {
        totalAnswered++;
        const sys = ans.questionSnapshot.system;
        const topic = ans.questionSnapshot.topic || 'General Anatomy';
        const qId = ans.questionId;

        // System count
        if (systemAnalytics[sys]) {
          systemAnalytics[sys].totalAnswered++;
          if (ans.isCorrect) {
            systemAnalytics[sys].correctCount++;
          }
        }

        // Topic count
        if (!topicMap[topic]) {
          topicMap[topic] = { system: sys, total: 0, correct: 0 };
        }
        topicMap[topic].total++;
        if (ans.isCorrect) {
          topicMap[topic].correct++;
          totalCorrect++;
        }

        // Question accuracy
        if (!questionAccuracyMap[qId]) {
          questionAccuracyMap[qId] = { attempts: 0, correct: 0 };
        }
        questionAccuracyMap[qId].attempts++;
        if (ans.isCorrect) {
          questionAccuracyMap[qId].correct++;
        }
      });
    });

    const totalWrong = totalAnswered - totalCorrect;
    const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 1000) / 10 : 0;
    const avgScorePercentage = totalAttempts > 0 ? Math.round((totalScorePercentages / totalAttempts) * 10) / 10 : 0;

    // Latest vs Previous
    let latestScorePercentage: number | null = null;
    let previousScorePercentage: number | null = null;
    let scoreImprovement: number | null = null;

    if (totalAttempts >= 1) {
      latestScorePercentage = attempts[0].percentage;
    }
    if (totalAttempts >= 2) {
      previousScorePercentage = attempts[1].percentage;
      scoreImprovement = Math.round((latestScorePercentage! - previousScorePercentage) * 10) / 10;
    }

    // System accuracy
    systems.forEach(sys => {
      const s = systemAnalytics[sys];
      s.accuracy = s.totalAnswered > 0 ? Math.round((s.correctCount / s.totalAnswered) * 1000) / 10 : 0;
    });

    // Topic status
    const topicAnalytics: TopicAnalytics[] = Object.keys(topicMap).map(topic => {
      const data = topicMap[topic];
      const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 1000) / 10 : 0;
      let status: 'Strong' | 'Developing' | 'Needs Review';
      if (accuracy >= 80) {
        status = 'Strong';
      } else if (accuracy >= 60) {
        status = 'Developing';
      } else {
        status = 'Needs Review';
      }
      return {
        topic,
        system: data.system,
        totalAnswered: data.total,
        correctCount: data.correct,
        accuracy,
        status
      };
    }).sort((a, b) => a.accuracy - b.accuracy);

    const weakTopics = topicAnalytics.filter(t => t.status === 'Needs Review');
    const strongTopics = topicAnalytics.filter(t => t.status === 'Strong');

    // Questions answered incorrectly in last attempt or never got right
    const missedQuestionIds = Object.keys(questionAccuracyMap).filter(qId => {
      const stat = questionAccuracyMap[qId];
      return stat.correct < stat.attempts;
    });

    return {
      totalAttempts,
      totalAnswered,
      totalCorrect,
      totalWrong,
      overallAccuracy,
      avgScorePercentage,
      maxScorePercentage,
      latestScorePercentage,
      previousScorePercentage,
      scoreImprovement,
      systemAnalytics,
      topicAnalytics,
      weakTopics,
      strongTopics,
      missedQuestionIds
    };
  },

  getWeakTopicQuestions(weakTopicTitles: string[], missedIds: string[]): Question[] {
    // Collect questions from weak topics or from missed questions
    const pool = allQuestions.filter(q => 
      weakTopicTitles.includes(q.topic) || missedIds.includes(q.id)
    );

    return pool.length > 0 ? pool : allQuestions.slice(0, 30);
  }
};
