import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  Eye, 
  HelpCircle,
  FileText,
  Bookmark
} from 'lucide-react';
import { Question, OptionKey, ExamMode } from '../types';
import { StorageService } from '../services/storage';
import { AnatomyImageViewer } from './AnatomyImageViewer';

interface ActiveExamSession {
  attemptId: string;
  startedAt: string;
  examMode: ExamMode;
  questions: Question[];
  userAnswers: Record<string, OptionKey | null>;
  flaggedIds: string[];
  currentIndex: number;
  timeRemainingSeconds: number;
  timed: boolean;
}

interface ExamRoomProps {
  session: ActiveExamSession;
  onUpdateSession: (session: ActiveExamSession) => void;
  onSubmitExam: (answers: Record<string, OptionKey | null>, flaggedIds: string[], durationSeconds: number) => void;
}

export const ExamRoom: React.FC<ExamRoomProps> = ({
  session,
  onUpdateSession,
  onSubmitExam
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(session.currentIndex || 0);
  const [userAnswers, setUserAnswers] = useState<Record<string, OptionKey | null>>(session.userAnswers || {});
  const [flaggedIds, setFlaggedIds] = useState<string[]>(session.flaggedIds || []);
  const [timeRemaining, setTimeRemaining] = useState<number>(session.timeRemainingSeconds);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showPracticeExplanation, setShowPracticeExplanation] = useState<boolean>(false);

  const totalQuestions = session.questions.length;
  const currentQuestion = session.questions[currentIndex];
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Track total duration spent
  const initialTimeRef = useRef<number>(session.timeRemainingSeconds);
  const startedAtRef = useRef<string>(session.startedAt);

  // Timer interval
  useEffect(() => {
    if (!session.timed) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [session.timed]);

  // Persist session to LocalStorage on changes
  useEffect(() => {
    const updated: ActiveExamSession = {
      ...session,
      currentIndex,
      userAnswers,
      flaggedIds,
      timeRemainingSeconds: timeRemaining
    };
    StorageService.saveActiveSession(updated);
    onUpdateSession(updated);
  }, [currentIndex, userAnswers, flaggedIds, timeRemaining]);

  const handleSelectOption = (opt: OptionKey) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: opt
    }));

    // In Practice mode, automatically reveal explanation when answered
    if (session.examMode === 'practice') {
      setShowPracticeExplanation(true);
    }
  };

  const handleToggleFlag = () => {
    setFlaggedIds(prev => 
      prev.includes(currentQuestion.id)
        ? prev.filter(id => id !== currentQuestion.id)
        : [...prev, currentQuestion.id]
    );
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowPracticeExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowPracticeExplanation(false);
    }
  };

  const handleTimeExpired = () => {
    alert('หมดเวลาสอบแล้ว! ระบบกำลังส่งกระดาษคำตอบของคุณโดยอัตโนมัติ');
    finalizeAndSubmit();
  };

  const finalizeAndSubmit = () => {
    // Calculate duration in seconds
    const elapsedSeconds = session.timed 
      ? Math.max(1, initialTimeRef.current - timeRemaining)
      : Math.max(1, Math.round((new Date().getTime() - new Date(startedAtRef.current).getTime()) / 1000));

    StorageService.clearActiveSession();
    onSubmitExam(userAnswers, flaggedIds, elapsedSeconds);
  };

  // Stats for confirmation
  const answeredCount = Object.values(userAnswers).filter(Boolean).length;
  const unansweredCount = totalQuestions - answeredCount;

  // Format time mm:ss
  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = session.timed && timeRemaining < 300; // < 5 mins warning

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-fadeIn">
      
      {/* Top Header Bar: Progress, Timer & Submit */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        {/* Question Counter & Mode */}
        <div className="flex items-center gap-3">
          <div className="text-sm font-extrabold text-slate-900 dark:text-white">
            ข้อที่ <span className="text-xl text-sky-600 dark:text-sky-400">{currentIndex + 1}</span> / {totalQuestions}
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {session.examMode} Mode
          </span>
          {flaggedIds.includes(currentQuestion.id) && (
            <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
              <Flag className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>ติดธง</span>
            </span>
          )}
        </div>

        {/* Center: Timer */}
        {session.timed && (
          <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono font-bold text-sm transition-colors ${
            isLowTime 
              ? 'bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 animate-pulse ring-2 ring-rose-500/30'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{formatTimer(timeRemaining)}</span>
          </div>
        )}

        {/* Right Actions: Flag & Submit button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleFlag}
            title="ทำเครื่องหมายติดธงเพื่อกลับมาทบทวน"
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              flaggedIds.includes(currentQuestion.id)
                ? 'border-amber-400 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800'
            }`}
          >
            <Flag className={`w-4 h-4 ${flaggedIds.includes(currentQuestion.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">ทบทวน</span>
          </button>

          <button
            type="button"
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center gap-1.5 transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>ส่งข้อสอบ</span>
          </button>
        </div>

        {/* Full width Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>

      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6">
        
        {/* Question Topic & Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-700/60">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
              {currentQuestion.system}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              {currentQuestion.topic}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
              {currentQuestion.difficulty}
            </span>
            <span>ID: {currentQuestion.id}</span>
          </div>
        </div>

        {/* Question Text */}
        <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
          {currentQuestion.questionText}
        </div>

        {/* Anatomical Diagram Preview & Fullscreen Zoom Viewer */}
        {currentQuestion.imageUrl && (
          <AnatomyImageViewer
            imageUrl={currentQuestion.imageUrl}
            labeledImageUrl={currentQuestion.labeledImageUrl}
            imageCaption={currentQuestion.imageCaption}
            imageLabels={currentQuestion.imageLabels}
            showSolution={session.examMode === 'practice' && Boolean(userAnswers[currentQuestion.id])}
          />
        )}

        {/* Options A, B, C, D */}
        <div className="space-y-3 pt-2">
          {(['A', 'B', 'C', 'D'] as OptionKey[]).map(key => {
            const isSelected = userAnswers[currentQuestion.id] === key;
            const isCorrect = currentQuestion.correctOption === key;
            const showPracticeState = session.examMode === 'practice' && userAnswers[currentQuestion.id] !== undefined;

            let optionClasses = 'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200';

            if (isSelected) {
              optionClasses = 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-100 ring-2 ring-sky-500/20';
            }

            // In practice mode after selection, highlight correct in green and wrong in red
            if (showPracticeState) {
              if (isCorrect) {
                optionClasses = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/30';
              } else if (isSelected && !isCorrect) {
                optionClasses = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/30';
              }
            }

            return (
              <label
                key={key}
                onClick={() => handleSelectOption(key)}
                className={`flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer select-none transition-all ${optionClasses}`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                }`}>
                  {key}
                </div>
                <div className="text-sm font-medium pt-0.5 leading-snug">
                  {currentQuestion.options[key]}
                </div>
              </label>
            );
          })}
        </div>

        {/* Practice Mode Instant Feedback Box */}
        {session.examMode === 'practice' && userAnswers[currentQuestion.id] && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
              <HelpCircle className="w-4 h-4 text-sky-500" />
              <span>เฉลยและคำอธิบาย (Practice Feedback)</span>
            </div>
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>คำตอบที่ถูกต้อง: ตัวเลือก {currentQuestion.correctOption}</strong> — {currentQuestion.explanation}
            </div>
            <div className="text-[11px] text-slate-400">
              อ้างอิง: {currentQuestion.sourceFile} • หน้า {currentQuestion.sourcePage}
            </div>
          </div>
        )}

      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>ข้อก่อนหน้า</span>
        </button>

        <div className="text-xs text-slate-400">
          ตอบแล้ว <strong className="text-slate-700 dark:text-slate-300">{answeredCount}</strong> / {totalQuestions}
        </div>

        {isLastQuestion ? (
          <button
            type="button"
            onClick={() => setShowConfirmModal(true)}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <span>ส่งข้อสอบ</span>
            <Send className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>ข้อถัดไป</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Question Matrix Navigation Palette */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-200">
            ตารางข้อสอบ (Question Navigator)
          </span>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-sky-600 inline-block" /> ตอบแล้ว
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700 inline-block" /> ยังไม่ตอบ
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-amber-400 inline-block" /> ติดธง
            </span>
          </div>
        </div>

        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-14 lg:grid-cols-20 gap-2 max-h-48 overflow-y-auto pr-1">
          {session.questions.map((q, idx) => {
            const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== null;
            const isFlagged = flaggedIds.includes(q.id);
            const isCurrent = idx === currentIndex;

            let btnClass = 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300';
            if (isAnswered) {
              btnClass = 'bg-sky-600 text-white font-bold';
            }
            if (isFlagged) {
              btnClass = 'bg-amber-400 text-slate-900 font-bold';
            }
            if (isCurrent) {
              btnClass += ' ring-2 ring-sky-500 ring-offset-2 dark:ring-offset-slate-900 scale-105';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowPracticeExplanation(false);
                }}
                className={`w-8 h-8 rounded-lg text-xs flex items-center justify-center transition-all ${btnClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Confirmation Modal Before Submit */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            
            <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400">
              <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                ยืนยันการส่งข้อสอบ?
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              คุณได้ทำข้อสอบชุดนี้ครบตามที่ต้องการแล้วหรือไม่? เมื่อส่งข้อสอบแล้วระบบจะทำการตรวจคำตอบและประเมินผลคะแนนทันที
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">จำนวนข้อทั้งหมด:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{totalQuestions} ข้อ</span>
              </div>
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                <span>ตอบแล้ว:</span>
                <span className="font-bold">{answeredCount} ข้อ</span>
              </div>
              {unansweredCount > 0 && (
                <div className="flex justify-between text-rose-600 dark:text-rose-400">
                  <span>ยังไม่ได้ตอบ:</span>
                  <span className="font-bold">{unansweredCount} ข้อ</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                กลับไปทำต่อ
              </button>
              <button
                type="button"
                onClick={finalizeAndSubmit}
                className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold shadow-md transition-colors"
              >
                ยืนยันส่งข้อสอบ
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
