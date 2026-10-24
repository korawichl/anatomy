import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  ArrowLeft, 
  Download, 
  BookOpen, 
  Flag, 
  Filter,
  Layers,
  Sparkles,
  Share2,
  GitBranch,
  GitCommit,
  FileText,
  Copy,
  Check,
  Loader2,
  X
} from 'lucide-react';
import { ExamAttempt, OptionKey } from '../types';
import { ScoringService } from '../services/scoring';
import { ExportService } from '../services/export';

interface ExamResultProps {
  attempt: ExamAttempt;
  onRetake: () => void;
  onPracticeMissed: () => void;
  onBackToDashboard: () => void;
}

export const ExamResult: React.FC<ExamResultProps> = ({
  attempt,
  onRetake,
  onPracticeMissed,
  onBackToDashboard
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'flagged'>('all');
  const [showGitModal, setShowGitModal] = useState<boolean>(false);
  const [isSyncingGit, setIsSyncingGit] = useState<boolean>(false);
  const [gitResult, setGitResult] = useState<{ success: boolean; message: string; commitHash?: string; pushed?: boolean } | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<boolean>(false);

  const systemBreakdown = ScoringService.getSystemBreakdown(attempt.answers);

  const handleSyncGit = async () => {
    setIsSyncingGit(true);
    setGitResult(null);
    try {
      const res = await ExportService.recordAttemptToGit(attempt);
      setGitResult(res);
    } catch (e: any) {
      setGitResult({
        success: false,
        message: e.message || 'เกิดข้อผิดพลาดในการบันทึกลง Git'
      });
    } finally {
      setIsSyncingGit(false);
    }
  };

  const copyGitCommand = () => {
    navigator.clipboard.writeText('npm run record');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2500);
  };

  // Trigger celebration confetti if score >= 80%
  useEffect(() => {
    if (attempt.percentage >= 80) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Ignore confetti error
      }
    }
  }, [attempt.percentage]);

  const filteredAnswers = attempt.answers.filter(ans => {
    if (filterMode === 'incorrect') return !ans.isCorrect;
    if (filterMode === 'flagged') return ans.isFlagged;
    return true;
  });

  const isPassed = attempt.percentage >= 60;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-16">
      
      {/* Score Banner Hero */}
      <div className={`p-8 rounded-3xl text-white shadow-xl relative overflow-hidden ${
        attempt.percentage >= 80
          ? 'bg-gradient-to-r from-emerald-600 to-teal-700'
          : isPassed
          ? 'bg-gradient-to-r from-sky-600 to-indigo-700'
          : 'bg-gradient-to-r from-rose-600 to-orange-700'
      }`}>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-bold uppercase tracking-wider">
              {attempt.percentage >= 80 ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>ผลการสอบระดับดีเยี่ยม (Grade A / Strong)</span>
                </>
              ) : isPassed ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ผ่านเกณฑ์มาตรฐานการประเมิน (Passed)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-3.5 h-3.5" />
                  <span>ยังไม่ผ่านเกณฑ์ 60% ควรทบทวนเพิ่ม (Needs Review)</span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              คะแนนของคุณ: {attempt.score} / {attempt.totalQuestions} ข้อ
            </h1>
            <p className="text-sm text-white/90">
              ชุดข้อสอบ: {attempt.selectedSystems.join(', ')} • {attempt.examMode} Mode
            </p>
          </div>

          {/* Percentage Circle / Badge */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 min-w-[140px]">
            <span className="text-5xl font-black tracking-tight">{attempt.percentage}%</span>
            <span className="text-xs font-semibold text-white/80 mt-1">คะแนนรวม</span>
          </div>

        </div>

        {/* Quick summary stats pills */}
        <div className="relative z-10 grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/20 text-center text-xs">
          <div className="space-y-1">
            <span className="text-white/70">ตอบถูก</span>
            <p className="text-lg font-black">{attempt.correctCount} ข้อ</p>
          </div>
          <div className="space-y-1">
            <span className="text-white/70">ตอบผิด</span>
            <p className="text-lg font-black">{attempt.wrongCount} ข้อ</p>
          </div>
          <div className="space-y-1">
            <span className="text-white/70">เวลาที่ใช้</span>
            <p className="text-lg font-black">
              {Math.floor(attempt.durationSeconds / 60)} นาที {attempt.durationSeconds % 60} วิ
            </p>
          </div>
        </div>

        {/* Decorative circle */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      </div>

      {/* Action Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onBackToDashboard}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับสู่แดชบอร์ด</span>
          </button>

          <button
            onClick={onRetake}
            className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>ทำข้อสอบชุดใหม่</span>
          </button>

          {attempt.wrongCount > 0 && (
            <button
              onClick={onPracticeMissed}
              className="px-4 py-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ทำซ้ำเฉพาะ {attempt.wrongCount} ข้อที่ตอบผิด</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setShowGitModal(true);
              setGitResult(null);
            }}
            className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4" />
            <span>💾 บันทึกลง Git</span>
          </button>

          <button
            onClick={() => ExportService.downloadMistakeLogMarkdown(attempt)}
            className="px-4 py-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 text-sm font-semibold transition-colors flex items-center gap-1.5"
            title="ดาวน์โหลดบันทึกจุดผิดพลาดเป็นไฟล์ Markdown"
          >
            <FileText className="w-4 h-4" />
            <span>บันทึกจุดผิดพลาด (MD)</span>
          </button>

          <button
            onClick={() => ExportService.exportAttemptsToCSV([attempt])}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>ส่งออก CSV</span>
          </button>
        </div>
      </div>

      {/* System Breakdown Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
          <Layers className="w-5 h-5 text-sky-600" />
          <span>ผลคะแนนจำแนกตามระบบอวัยวะ (System Breakdown)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(systemBreakdown).map(([system, data]) => {
            if (data.total === 0) return null;
            return (
              <div key={system} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate" title={system}>
                  {system}
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{data.percentage}%</span>
                  <span className="text-xs text-slate-500">ถูก {data.correct} จาก {data.total} ข้อ</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      data.percentage >= 80 ? 'bg-emerald-500' : data.percentage >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${data.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Review Section with Filter Pills */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              เฉลยละเอียดและวิเคราะห์คำตอบรายข้อ (Detailed Answers)
            </h2>
            <p className="text-xs text-slate-500">
              แสดงคำตอบของคุณ คำตอบที่ถูกต้อง เหตุผลทางการแพทย์ และเลขหน้าอ้างอิงจากสไลด์อาจารย์
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === 'all'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              ทั้งหมด ({attempt.answers.length})
            </button>
            <button
              onClick={() => setFilterMode('incorrect')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === 'incorrect'
                  ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              เฉพาะข้อที่ผิด ({attempt.wrongCount})
            </button>
            <button
              onClick={() => setFilterMode('flagged')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterMode === 'flagged'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              ติดธง ({attempt.answers.filter(a => a.isFlagged).length})
            </button>
          </div>
        </div>

        {/* Answers List */}
        <div className="space-y-4">
          {filteredAnswers.map((ans, idx) => {
            const q = ans.questionSnapshot;
            const originalIndex = attempt.answers.findIndex(a => a.questionId === ans.questionId);

            return (
              <div 
                key={ans.id}
                className={`p-6 rounded-2xl bg-white dark:bg-slate-800 border transition-all ${
                  ans.isCorrect
                    ? 'border-slate-200 dark:border-slate-700'
                    : 'border-rose-200 dark:border-rose-900/60 ring-1 ring-rose-500/10'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white ${
                      ans.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}>
                      {originalIndex + 1}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {q.system}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {q.topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {ans.isFlagged && (
                      <span className="flex items-center gap-1 text-amber-600 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded font-semibold">
                        <Flag className="w-3 h-3 fill-amber-500" />
                        <span>ติดธง</span>
                      </span>
                    )}
                    <span className={`px-2 py-0.5 rounded font-bold ${
                      ans.isCorrect 
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                        : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                    }`}>
                      {ans.isCorrect ? 'ถูกต้อง (+1)' : 'ตอบผิด (0)'}
                    </span>
                  </div>
                </div>

                {/* Question */}
                <div className="py-3 text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                  {q.questionText}
                </div>

                {/* Options Review */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {(['A', 'B', 'C', 'D'] as OptionKey[]).map(key => {
                    const isUserChoice = ans.selectedOption === key;
                    const isActualCorrect = q.correctOption === key;

                    let optBg = 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';

                    if (isActualCorrect) {
                      optBg = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500/30';
                    } else if (isUserChoice && !isActualCorrect) {
                      optBg = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100 line-through opacity-80';
                    }

                    return (
                      <div 
                        key={key}
                        className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${optBg}`}
                      >
                        <span className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[11px] shrink-0 ${
                          isActualCorrect 
                            ? 'bg-emerald-600 text-white'
                            : isUserChoice
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600'
                        }`}>
                          {key}
                        </span>
                        <span className="pt-0.5 leading-snug">
                          {q.options[key]}
                          {isUserChoice && !isActualCorrect && ' (คุณเลือกข้อนี้)'}
                          {isActualCorrect && ' (คำตอบที่ถูกต้อง ✓)'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Card */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-sky-600" />
                    <span>คำอธิบายเฉลย (Explanation):</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                    {q.explanation}
                  </p>
                  <div className="text-[11px] text-slate-400 pl-5 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                    <strong>แหล่งข้อมูลอ้างอิง:</strong> {q.sourceFile} — หน้าที่ {q.sourcePage} (ผ่านการตรวจสอบ)
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Git Sync Modal */}
      {showGitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-6 animate-scaleUp">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    บันทึกคะแนนและจุดผิดพลาดลง Git
                  </h3>
                  <p className="text-xs text-slate-500">
                    exam_records/MISTAKE_LOG.md • SCORE_HISTORY.md
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowGitModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status / Result display */}
            {gitResult && (
              <div className={`p-4 rounded-2xl text-xs space-y-1.5 border ${
                gitResult.success 
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200' 
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200'
              }`}>
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  {gitResult.success ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                  <span>{gitResult.success ? 'บันทึกสำเร็จเรียบร้อย!' : 'การบันทึกขัดข้อง'}</span>
                </div>
                <p className="leading-relaxed">{gitResult.message}</p>
                {gitResult.commitHash && (
                  <div className="pt-1 flex items-center gap-2 text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold">
                      Commit: {gitResult.commitHash}
                    </span>
                    {gitResult.pushed && <span className="text-emerald-600 font-bold">✓ Pushed to GitHub</span>}
                  </div>
                )}
              </div>
            )}

            {/* Action 1: Auto Commit & Push (Local dev) */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                1. บันทึกและ Commit/Push ขึ้น Git อัตโนมัติ (1-Click)
              </div>
              <button
                onClick={handleSyncGit}
                disabled={isSyncingGit}
                className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-60 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSyncingGit ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>กำลังประมวลผลและรัน Git Commit...</span>
                  </>
                ) : (
                  <>
                    <GitCommit className="w-4 h-4" />
                    <span>🚀 สั่งบันทึกลง Git และ Push ขึ้น GitHub</span>
                  </>
                )}
              </button>
            </div>

            {/* Action 2: Direct file downloads */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                2. หรือดาวน์โหลดไฟล์นำไปเปิดอ่าน / ซิงค์ด้วยตนเอง
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => ExportService.downloadMistakeLogMarkdown(attempt)}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-left transition-colors flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <div className="font-bold">MISTAKE_LOG.md</div>
                    <div className="text-[10px] text-slate-400">สรุปจุดผิดพร้อมเฉลย</div>
                  </div>
                </button>

                <button
                  onClick={() => ExportService.downloadAttemptJSON(attempt)}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-left transition-colors flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <Download className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <div className="font-bold">JSON Payload</div>
                    <div className="text-[10px] text-slate-400">สำหรับ import/sync</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Action 3: Terminal Command */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300">3. คำสั่ง Terminal (Sync All to Git)</span>
                <button
                  onClick={copyGitCommand}
                  className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-bold flex items-center gap-1 text-[11px]"
                >
                  {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCmd ? 'คัดลอกแล้ว!' : 'คัดลอกคำสั่ง'}</span>
                </button>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs flex items-center justify-between">
                <code>npm run record</code>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowGitModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                ปิดหน้าต่าง
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
