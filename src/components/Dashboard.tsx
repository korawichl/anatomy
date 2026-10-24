import React from 'react';
import { 
  Database, 
  Award, 
  Target, 
  XCircle, 
  Clock, 
  ArrowRight, 
  RefreshCw, 
  FileSpreadsheet, 
  FileText, 
  AlertTriangle,
  Play,
  Heart,
  Utensils,
  Droplets,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { ExamAttempt } from '../types';
import { AnalyticsService } from '../services/analytics';
import { ExportService } from '../services/export';
import { questionBankSummary } from '../data/questionBank';

interface DashboardProps {
  attempts: ExamAttempt[];
  onStartExam: () => void;
  onPracticeWrong: () => void;
  onViewHistory: () => void;
  onViewAnalytics: () => void;
  onViewBank: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  attempts,
  onStartExam,
  onPracticeWrong,
  onViewHistory,
  onViewAnalytics,
  onViewBank
}) => {
  const analytics = AnalyticsService.computeAnalytics(attempts);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white p-6 sm:p-8 shadow-xl shadow-sky-900/10">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-medium text-sky-100">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>คลังข้อสอบวิชา Anatomy พยาบาล ม.รังสิต (RSU Nurse)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Anatomy Exam Lab — ห้องปฏิบัติการฝึกทำข้อสอบเสมือนจริง
          </h1>
          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
            ฝึกฝนทักษะการทำข้อสอบ 4 ตัวเลือก คัดกรองจากเนื้อหาคำสอน 3 ระบบใหญ่ ตรวจผลทันที วิเคราะห์จุดอ่อนรายหัวข้อ และส่งออกผลคะแนนเป็น CSV/Excel ได้จริง
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onStartExam}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-sky-700 font-bold text-sm shadow-md hover:bg-sky-50 active:scale-95 transition-all"
            >
              <Play className="w-4 h-4 fill-sky-700" />
              <span>เริ่มทำข้อสอบทันที</span>
            </button>

            {analytics.totalWrong > 0 && (
              <button
                onClick={onPracticeWrong}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-900/40 hover:bg-sky-900/60 border border-white/20 text-white font-semibold text-sm backdrop-blur transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                <span>ทบทวนข้อที่ตอบผิด ({analytics.totalWrong} ข้อ)</span>
              </button>
            )}

            <button
              onClick={() => ExportService.exportFullWorkbookXLSX(attempts)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/90 hover:bg-emerald-600 text-white font-semibold text-sm shadow transition-all ml-auto"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>ส่งออก Excel (.xlsx)</span>
            </button>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      </div>

      {/* Main KPI Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        
        {/* Total Questions in Bank */}
        <div 
          onClick={onViewBank}
          className="col-span-1 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-sky-500 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">คลังข้อสอบทั้งหมด</span>
            <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
              <Database className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 dark:text-white">{questionBankSummary.total}</span>
            <span className="text-xs text-slate-400">ข้อ</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 group-hover:text-sky-500 flex items-center gap-1">
            <span>ตรวจสอบคลัง</span>
            <ArrowRight className="w-3 h-3" />
          </p>
        </div>

        {/* Total Attempts */}
        <div 
          onClick={onViewHistory}
          className="col-span-1 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-indigo-500 cursor-pointer transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">จำนวนครั้งที่สอบ</span>
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 dark:text-white">{analytics.totalAttempts}</span>
            <span className="text-xs text-slate-400">ครั้ง</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 flex items-center gap-1">
            <span>ดูประวัติสอบ</span>
            <ArrowRight className="w-3 h-3" />
          </p>
        </div>

        {/* Avg Score */}
        <div className="col-span-1 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">คะแนนเฉลี่ย</span>
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {analytics.totalAttempts > 0 ? `${analytics.avgScorePercentage}%` : '-'}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {analytics.totalAttempts > 0 ? `จาก ${analytics.totalAnswered} ข้อที่ตอบ` : 'ยังไม่มีข้อมูลสอบ'}
          </p>
        </div>

        {/* Max Score */}
        <div className="col-span-1 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">คะแนนสูงสุด</span>
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {analytics.totalAttempts > 0 ? `${analytics.maxScorePercentage}%` : '-'}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {analytics.scoreImprovement !== null ? (
              <span className={analytics.scoreImprovement >= 0 ? 'text-emerald-600 font-medium' : 'text-rose-500 font-medium'}>
                {analytics.scoreImprovement >= 0 ? `+${analytics.scoreImprovement}%` : `${analytics.scoreImprovement}%`} เทียบครั้งก่อน
              </span>
            ) : 'สถิติส่วนบุคคล'}
          </p>
        </div>

        {/* Overall Accuracy */}
        <div className="col-span-1 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">อัตราตอบถูก</span>
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 dark:text-white">
              {analytics.totalAnswered > 0 ? `${analytics.overallAccuracy}%` : '-'}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            ถูก {analytics.totalCorrect} / {analytics.totalAnswered}
          </p>
        </div>

        {/* Total Wrong */}
        <div className="col-span-1 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">ข้อที่ตอบผิด</span>
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
              <XCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-slate-900 dark:text-white">{analytics.totalWrong}</span>
            <span className="text-xs text-slate-400">ข้อ</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {analytics.totalWrong > 0 ? 'ควรกดทบทวนซ้ำ' : 'ยอดเยี่ยมมาก'}
          </p>
        </div>

      </div>

      {/* Grid: System Breakdown & Weak Topics Alert */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Progress by Organ System (2 Columns) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                ความก้าวหน้ารายระบบอวัยวะ (Organ Systems)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                สถิติความแม่นยำและการทำข้อสอบจากทั้ง 3 หมวดวิชา
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              3 ระบบ • 300 ข้อ
            </span>
          </div>

          <div className="space-y-5">
            {/* Cardiovascular & Lymphatic */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Cardiovascular & Lymphatic Systems
                    </h3>
                    <p className="text-xs text-slate-500">
                      หัวใจ, เลือด, หลอดเลือด, ระบบน้ำเหลือง • คลัง 100 ข้อ
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-slate-800 dark:text-slate-200">
                    {analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].totalAnswered > 0 
                      ? `${analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].accuracy}%`
                      : 'ยังไม่เคยสอบ'}
                  </span>
                  <p className="text-xs text-slate-400">
                    ฝึกแล้ว {analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].attemptsCount} ครั้ง
                  </p>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div 
                  className="h-full bg-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].accuracy}%` }}
                />
              </div>
            </div>

            {/* Digestive System */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Digestive System
                    </h3>
                    <p className="text-xs text-slate-500">
                      ทางเดินอาหาร, เยื่อบุช่องท้อง, ตับ, ตับอ่อน, ถุงน้ำดี • คลัง 100 ข้อ
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-slate-800 dark:text-slate-200">
                    {analytics.systemAnalytics['Digestive System'].totalAnswered > 0 
                      ? `${analytics.systemAnalytics['Digestive System'].accuracy}%`
                      : 'ยังไม่เคยสอบ'}
                  </span>
                  <p className="text-xs text-slate-400">
                    ฝึกแล้ว {analytics.systemAnalytics['Digestive System'].attemptsCount} ครั้ง
                  </p>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${analytics.systemAnalytics['Digestive System'].accuracy}%` }}
                />
              </div>
            </div>

            {/* Urinary System */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Urinary System
                    </h3>
                    <p className="text-xs text-slate-500">
                      ไต, Nephron, JGA, ท่อไต, กระเพาะปัสสาวะ, ท่อปัสสาวะ • คลัง 100 ข้อ
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-slate-800 dark:text-slate-200">
                    {analytics.systemAnalytics['Urinary System'].totalAnswered > 0 
                      ? `${analytics.systemAnalytics['Urinary System'].accuracy}%`
                      : 'ยังไม่เคยสอบ'}
                  </span>
                  <p className="text-xs text-slate-400">
                    ฝึกแล้ว {analytics.systemAnalytics['Urinary System'].attemptsCount} ครั้ง
                  </p>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div 
                  className="h-full bg-sky-500 rounded-full transition-all duration-500"
                  style={{ width: `${analytics.systemAnalytics['Urinary System'].accuracy}%` }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Weak Topics Alert Card (1 Column) */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                หัวข้อที่ควรทบทวนเร่งด่วน
              </h2>
            </div>

            {analytics.weakTopics.length > 0 ? (
              <div className="space-y-2.5">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  ตรวจพบหัวข้อที่มีความถูกต้องต่ำกว่า 60% แนะนำให้อ่านซ้ำและฝึกทำข้อสอบเฉพาะหัวข้อนี้:
                </p>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {analytics.weakTopics.slice(0, 5).map((wt, i) => (
                    <div 
                      key={i}
                      className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">
                        {wt.topic}
                      </span>
                      <span className="font-bold text-rose-600 dark:text-rose-400 shrink-0">
                        {wt.accuracy}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : analytics.totalAttempts === 0 ? (
              <div className="py-8 text-center text-slate-400 text-xs space-y-2">
                <AlertTriangle className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600" />
                <p>ยังไม่มีประวัติการสอบ</p>
                <p>เมื่อทำข้อสอบแล้ว ระบบจะวิเคราะห์จุดอ่อนที่ต้องทบทวนให้อัตโนมัติ</p>
              </div>
            ) : (
              <div className="py-8 text-center text-emerald-600 dark:text-emerald-400 text-xs space-y-2">
                <Sparkles className="w-8 h-8 mx-auto text-emerald-500" />
                <p className="font-bold text-sm">ยอดเยี่ยมมาก!</p>
                <p className="text-slate-500 dark:text-slate-400">ไม่พบหัวข้อที่คะแนนต่ำกว่าเกณฑ์ 60%</p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 mt-4 space-y-2">
            <button
              onClick={onViewAnalytics}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>ดูการวิเคราะห์จุดอ่อนแบบละเอียด</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Recent Attempts Table Preview */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              ประวัติการสอบล่าสุด (Recent Attempts)
            </h2>
          </div>
          {attempts.length > 0 && (
            <button
              onClick={onViewHistory}
              className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
            >
              <span>ดูทั้งหมด ({attempts.length} ครั้ง)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {attempts.length === 0 ? (
          <div className="py-12 text-center text-slate-400 space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 mx-auto flex items-center justify-center">
              <Clock className="w-6 h-6 text-slate-400" />
            </div>
            <p className="text-sm">ยังไม่มีประวัติการสอบในอุปกรณ์นี้</p>
            <button
              onClick={onStartExam}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>เริ่มสอบครั้งแรกเลย</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-500 uppercase border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3 px-4">วันที่สอบ</th>
                  <th className="py-3 px-4">โหมด</th>
                  <th className="py-3 px-4">ระบบที่สอบ</th>
                  <th className="py-3 px-4 text-center">จำนวนข้อ</th>
                  <th className="py-3 px-4 text-center">คะแนน</th>
                  <th className="py-3 px-4 text-center">เปอร์เซ็นต์</th>
                  <th className="py-3 px-4 text-right">เวลาที่ใช้</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {attempts.slice(0, 5).map(att => (
                  <tr key={att.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-900 dark:text-slate-100">
                      {new Date(att.submittedAt).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' })}
                    </td>
                    <td className="py-3 px-4">
                      <span className="capitalize px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {att.examMode}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400 max-w-[200px] truncate">
                      {att.selectedSystems.join(', ')}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold">
                      {att.totalQuestions}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-slate-800 dark:text-slate-200">
                      {att.score} / {att.totalQuestions}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        att.percentage >= 80 
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : att.percentage >= 60
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                      }`}>
                        {att.percentage}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-xs text-slate-500">
                      {Math.floor(att.durationSeconds / 60)} นาที {att.durationSeconds % 60} วิ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Export Quick Bar */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
          <div>
            <p className="text-xs font-bold text-slate-900 dark:text-white">ส่งออกข้อมูลการเรียนรู้ (Export Data)</p>
            <p className="text-xs text-slate-500">รองรับภาษาไทย 100% เปิดใน Excel ได้ทันทีโดยข้อความไม่เพี้ยน</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => ExportService.exportAttemptsToCSV(attempts)}
            className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
          >
            ดาวน์โหลด CSV
          </button>
          <button
            onClick={() => ExportService.exportWrongQuestionsToCSV(attempts)}
            className="px-3.5 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold hover:bg-rose-100 dark:hover:bg-rose-900/60 transition-colors"
          >
            ดาวน์โหลดข้อที่ตอบผิด (CSV)
          </button>
          <button
            onClick={() => ExportService.exportFullWorkbookXLSX(attempts)}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>ดาวน์โหลด Excel 5 ชีต (.xlsx)</span>
          </button>
        </div>
      </div>

    </div>
  );
};
