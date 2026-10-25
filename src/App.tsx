import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { ExamSetup } from './components/ExamSetup';
import { ExamRoom } from './components/ExamRoom';
import { ExamResult } from './components/ExamResult';
import { ExamHistory } from './components/ExamHistory';
import { AnalyticsView } from './components/AnalyticsView';
import { QuestionBankView } from './components/QuestionBankView';

import { 
  Question, 
  ExamAttempt, 
  ExamConfig, 
  OptionKey, 
  OrganSystem,
  ExamMode 
} from './types';
import { allQuestions } from './data/questionBank';
import { StorageService } from './services/storage';
import { ScoringService } from './services/scoring';
import { AnalyticsService } from './services/analytics';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  
  // Active exam session state
  const [activeSession, setActiveSession] = useState<any | null>(null);
  const [lastCompletedAttempt, setLastCompletedAttempt] = useState<ExamAttempt | null>(null);

  // Initialize theme & load stored attempts & active session
  useEffect(() => {
    const savedTheme = StorageService.getTheme();
    setTheme(savedTheme);
    StorageService.setTheme(savedTheme);

    const savedAttempts = StorageService.getAttempts();
    setAttempts(savedAttempts);

    // Check for ongoing session to recover
    const ongoingSession = StorageService.getActiveSession();
    if (ongoingSession) {
      setActiveSession(ongoingSession);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    StorageService.setTheme(next);
  };

  // Helper to shuffle an array
  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Shuffle question options safely while updating correctOption
  function shuffleQuestionOptions(q: Question): Question {
    const keys: OptionKey[] = ['A', 'B', 'C', 'D'];
    const currentCorrectText = q.options[q.correctOption];
    const optionTexts = shuffleArray(keys.map(k => q.options[k]));

    const newOptions: any = {
      A: optionTexts[0],
      B: optionTexts[1],
      C: optionTexts[2],
      D: optionTexts[3]
    };

    let newCorrect: OptionKey = 'A';
    for (const k of keys) {
      if (newOptions[k] === currentCorrectText) {
        newCorrect = k;
        break;
      }
    }

    return {
      ...q,
      options: newOptions,
      correctOption: newCorrect
    };
  }

  // 1. Start a standard exam from config
  const handleStartExamFromConfig = (config: ExamConfig) => {
    let pool: Question[] = [];

    if (config.mode === 'review') {
      // Review mode: questions previously missed
      const analytics = AnalyticsService.computeAnalytics(attempts);
      const missedSet = new Set(analytics.missedQuestionIds);
      pool = allQuestions.filter(q => missedSet.has(q.id) && (!config.diagramOnly || Boolean(q.imageUrl)));
      if (pool.length === 0) {
        pool = allQuestions.filter(q => !config.diagramOnly || Boolean(q.imageUrl)).slice(0, 30);
      }
    } else {
      pool = allQuestions.filter(q => {
        if (config.system !== 'All Systems' && q.system !== config.system) return false;
        if (config.difficulty !== 'Mixed' && q.difficulty !== config.difficulty) return false;
        if (config.diagramOnly && !q.imageUrl) return false;
        return true;
      });
    }

    // Shuffling
    if (config.shuffleQuestions) {
      pool = shuffleArray(pool);
    }

    const selectedQuestions = pool.slice(0, config.questionCount).map(q => {
      return config.shuffleOptions ? shuffleQuestionOptions(q) : q;
    });

    const newSession = {
      attemptId: `att_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      startedAt: new Date().toISOString(),
      examMode: config.mode,
      selectedSystems: config.system === 'All Systems' 
        ? ['Cardiovascular and Lymphatic Systems', 'Digestive System', 'Urinary System'] as OrganSystem[]
        : [config.system as OrganSystem],
      questions: selectedQuestions,
      userAnswers: {},
      flaggedIds: [],
      currentIndex: 0,
      timeRemainingSeconds: config.timed ? config.timeLimitMinutes * 60 : 0,
      timed: config.timed
    };

    setActiveSession(newSession);
    StorageService.saveActiveSession(newSession);
    setLastCompletedAttempt(null);
  };

  // 2. Start Weak Topics Exam
  const handlePracticeWeakTopics = (weakTopicTitles: string[]) => {
    const weakQuestions = allQuestions.filter(q => weakTopicTitles.includes(q.topic));
    const finalPool = weakQuestions.length > 0 ? weakQuestions : allQuestions.slice(0, 30);
    
    handleStartExamFromConfig({
      system: 'All Systems',
      questionCount: Math.min(finalPool.length, 50),
      difficulty: 'Mixed',
      mode: 'practice',
      timed: false,
      timeLimitMinutes: 0,
      shuffleQuestions: true,
      shuffleOptions: false
    });
  };

  // 3. Start Missed Questions Exam
  const handlePracticeMissedQuestions = () => {
    handleStartExamFromConfig({
      system: 'All Systems',
      questionCount: 50,
      difficulty: 'Mixed',
      mode: 'review',
      timed: false,
      timeLimitMinutes: 0,
      shuffleQuestions: true,
      shuffleOptions: false
    });
  };

  // 4. Submit & Score Exam
  const handleSubmitExam = (
    userAnswers: Record<string, OptionKey | null>,
    flaggedIds: string[],
    durationSeconds: number
  ) => {
    if (!activeSession) return;

    const completedAttempt = ScoringService.finalizeAttempt({
      attemptId: activeSession.attemptId,
      startedAt: activeSession.startedAt,
      examMode: activeSession.examMode,
      selectedSystems: activeSession.selectedSystems,
      questions: activeSession.questions,
      userAnswers,
      flaggedQuestionIds: flaggedIds,
      durationSeconds
    });

    // Save to LocalStorage
    StorageService.saveAttempt(completedAttempt);
    StorageService.clearActiveSession();

    // Update state
    setAttempts(StorageService.getAttempts());
    setActiveSession(null);
    setLastCompletedAttempt(completedAttempt);
  };

  // History Actions
  const handleDeleteAttempt = (attemptId: string) => {
    StorageService.deleteAttempt(attemptId);
    setAttempts(StorageService.getAttempts());
  };

  const handleClearAllAttempts = () => {
    StorageService.clearAllAttempts();
    setAttempts([]);
  };

  const handleViewPastAttempt = (attempt: ExamAttempt) => {
    setLastCompletedAttempt(attempt);
    setActiveSession(null);
  };

  // Compute missed count for badge
  const analytics = AnalyticsService.computeAnalytics(attempts);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setLastCompletedAttempt(null);
        }}
        theme={theme}
        toggleTheme={toggleTheme}
        examInProgress={Boolean(activeSession)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Active Exam Room View (Overrides tabs when active) */}
        {activeSession ? (
          <ExamRoom
            session={activeSession}
            onUpdateSession={setActiveSession}
            onSubmitExam={handleSubmitExam}
          />
        ) : lastCompletedAttempt ? (
          /* Completed Exam Result / Review View */
          <ExamResult
            attempt={lastCompletedAttempt}
            onRetake={() => {
              setLastCompletedAttempt(null);
              setActiveTab('setup');
            }}
            onPracticeMissed={handlePracticeMissedQuestions}
            onBackToDashboard={() => {
              setLastCompletedAttempt(null);
              setActiveTab('dashboard');
            }}
          />
        ) : (
          /* Normal Tab Views */
          <>
            {activeTab === 'dashboard' && (
              <Dashboard
                attempts={attempts}
                onStartExam={() => setActiveTab('setup')}
                onPracticeWrong={handlePracticeMissedQuestions}
                onViewHistory={() => setActiveTab('history')}
                onViewAnalytics={() => setActiveTab('analytics')}
                onViewBank={() => setActiveTab('bank')}
              />
            )}

            {activeTab === 'setup' && (
              <ExamSetup
                onStartExam={handleStartExamFromConfig}
                missedQuestionCount={analytics.missedQuestionIds.length}
              />
            )}

            {activeTab === 'history' && (
              <ExamHistory
                attempts={attempts}
                onViewAttempt={handleViewPastAttempt}
                onDeleteAttempt={handleDeleteAttempt}
                onClearAll={handleClearAllAttempts}
              />
            )}

            {activeTab === 'analytics' && (
              <AnalyticsView
                attempts={attempts}
                onPracticeWeakTopics={handlePracticeWeakTopics}
                onPracticeMissedQuestions={handlePracticeMissedQuestions}
              />
            )}

            {activeTab === 'bank' && (
              <QuestionBankView />
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-6 text-center text-xs text-slate-500">
        <p>
          Anatomy Exam Lab • ระบบฝึกทำข้อสอบและวิเคราะห์สมรรถนะนักศึกษาพยาบาล ม.รังสิต (RSU Nurse)
        </p>
        <p className="mt-1 text-slate-400">
          คลังข้อสอบ 300 ข้อ • อ้างอิงสไลด์ระบบไหลเวียนโลหิต, ทางเดินอาหาร และทางเดินปัสสาวะ
        </p>
      </footer>

    </div>
  );
};
export default App;
