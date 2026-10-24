import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Play,
  RotateCcw
} from 'lucide-react';
import { ExamAttempt, TopicAnalytics } from '../types';
import { AnalyticsService } from '../services/analytics';

interface AnalyticsViewProps {
  attempts: ExamAttempt[];
  onPracticeWeakTopics: (weakTopicTitles: string[]) => void;
  onPracticeMissedQuestions: () => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  attempts,
  onPracticeWeakTopics,
  onPracticeMissedQuestions
}) => {
  const analytics = AnalyticsService.computeAnalytics(attempts);

  const weakTopicTitles = analytics.weakTopics.map(t => t.topic);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-16">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-sky-600 dark:text-sky-400" />
            <span>วิเคราะห์จุดอ่อน (Performance Analytics)</span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ระบบวิเคราะห์ความแม่นยำรายหัวข้อ จำแนกระดับความชำนาญ เพื่อวางแผนการอ่านหนังสือให้ตรงจุด
          </p>
        </div>

        {analytics.weakTopics.length > 0 && (
          <button
            onClick={() => onPracticeWeakTopics(weakTopicTitles)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Practice Weak Topics ({analytics.weakTopics.length} หัวข้อ)</span>
          </button>
        )}
      </div>

      {/* KPI Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ความแม่นยำรวม</span>
          <div className="text-3xl font-black text-slate-900 dark:text-white">
            {analytics.totalAnswered > 0 ? `${analytics.overallAccuracy}%` : '-'}
          </div>
          <p className="text-xs text-slate-500">
            จากทั้งหมด {analytics.totalAnswered} ข้อที่ตอบ
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">เปรียบเทียบพัฒนาการ</span>
          <div className="text-3xl font-black text-slate-900 dark:text-white">
            {analytics.scoreImprovement !== null ? (
              <span className={analytics.scoreImprovement >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}>
                {analytics.scoreImprovement >= 0 ? `+${analytics.scoreImprovement}%` : `${analytics.scoreImprovement}%`}
              </span>
            ) : '-'}
          </div>
          <p className="text-xs text-slate-500">
            {analytics.previousScorePercentage !== null 
              ? `ล่าสุด ${analytics.latestScorePercentage}% vs ครั้งก่อน ${analytics.previousScorePercentage}%`
              : 'ต้องมีประวัติอย่างน้อย 2 ครั้ง'}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">หัวข้อที่ควรทบทวน (&lt;60%)</span>
          <div className="text-3xl font-black text-rose-600 dark:text-rose-400">
            {analytics.weakTopics.length}
          </div>
          <p className="text-xs text-slate-500">
            จากหัวข้อที่มีการสอบทั้งหมด {analytics.topicAnalytics.length} หัวข้อ
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">หัวข้อที่ชำนาญ (≥80%)</span>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
            {analytics.strongTopics.length}
          </div>
          <p className="text-xs text-slate-500">
            มีระดับความเข้าใจอยู่ในเกณฑ์ดีเยี่ยม
          </p>
        </div>

      </div>

      {/* System Comparison */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-5">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
          <Layers className="w-5 h-5 text-sky-600" />
          <span>การวิเคราะห์เปรียบเทียบระหว่าง 3 ระบบ (System Performance)</span>
        </div>

        <div className="space-y-4">
          {Object.values(analytics.systemAnalytics).map(sys => (
            <div key={sys.system} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{sys.system}</h3>
                  <span className="text-xs text-slate-400">ฝึกไปแล้ว {sys.attemptsCount} ครั้ง • ตอบไป {sys.totalAnswered} ข้อ</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-slate-900 dark:text-slate-100">
                    {sys.totalAnswered > 0 ? `${sys.accuracy}%` : 'ยังไม่มีข้อมูล'}
                  </span>
                  <p className="text-xs text-slate-400">ถูก {sys.correctCount} / {sys.totalAnswered}</p>
                </div>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    sys.accuracy >= 80 ? 'bg-emerald-500' : sys.accuracy >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                  style={{ width: `${sys.accuracy}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Topic Status Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              สถานะความแม่นยำจำแนกตามหัวข้อย่อย (Topic Breakdown)
            </h2>
            <p className="text-xs text-slate-500">
              เกณฑ์การประเมิน: <strong>Strong</strong> (≥80%) | <strong>Developing</strong> (60-79%) | <strong>Needs Review</strong> (&lt;60%)
            </p>
          </div>

          {analytics.missedQuestionIds.length > 0 && (
            <button
              onClick={onPracticeMissedQuestions}
              className="px-3.5 py-1.5 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-bold hover:bg-rose-100 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ทำซ้ำข้อที่เคยตอบผิด ({analytics.missedQuestionIds.length} ข้อ)</span>
            </button>
          )}
        </div>

        {analytics.topicAnalytics.length === 0 ? (
          <div className="py-12 text-center text-slate-400 space-y-2">
            <BookOpen className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600" />
            <p className="text-xs">ยังไม่มีข้อมูลการตอบข้อสอบ</p>
            <p className="text-xs text-slate-500">เริ่มทำข้อสอบอย่างน้อย 1 ชุด เพื่อเปิดการวิเคราะห์รายหัวข้อ</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="uppercase bg-slate-50 dark:bg-slate-900/50 text-slate-500 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3 px-4">หัวข้อ (Topic)</th>
                  <th className="py-3 px-4">ระบบอวัยวะ</th>
                  <th className="py-3 px-4 text-center">ข้อที่ทำ</th>
                  <th className="py-3 px-4 text-center">ตอบถูก</th>
                  <th className="py-3 px-4 text-center">ความแม่นยำ</th>
                  <th className="py-3 px-4 text-center">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
                {analytics.topicAnalytics.map((top, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">
                      {top.topic}
                    </td>
                    <td className="py-3 px-4 text-slate-500 truncate max-w-[180px]">
                      {top.system}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {top.totalAnswered}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-700 dark:text-slate-300">
                      {top.correctCount}
                    </td>
                    <td className="py-3 px-4 text-center font-bold">
                      {top.accuracy}%
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        top.status === 'Strong'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : top.status === 'Developing'
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                      }`}>
                        {top.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
};
