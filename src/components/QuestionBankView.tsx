import React, { useState } from 'react';
import { 
  Database, 
  Search, 
  Filter, 
  CheckCircle2, 
  FileText, 
  BookOpen, 
  Download,
  FileSpreadsheet,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Question, OrganSystem, Difficulty } from '../types';
import { allQuestions, questionBankSummary, getFilteredQuestions } from '../data/questionBank';
import { ExportService } from '../services/export';

export const QuestionBankView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSystem, setSelectedSystem] = useState<OrganSystem | 'All Systems'>('All Systems');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('Mixed');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = getFilteredQuestions({
    system: selectedSystem,
    difficulty: selectedDifficulty,
    search: searchTerm
  });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fadeIn pb-16">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <Database className="w-8 h-8 text-sky-600 dark:text-sky-400" />
            <span>คลังข้อสอบวิชากายวิภาคศาสตร์ (Question Bank)</span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            คลังข้อสอบ 4 ตัวเลือก 300 ข้อ ผ่านการตรวจสอบอ้างอิงตรงตามสไลด์คำสอนพยาบาล ม.รังสิต
          </p>
        </div>

        <button
          onClick={() => ExportService.exportFullWorkbookXLSX([])}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2"
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>ส่งออกคลังข้อสอบ (Excel .xlsx)</span>
        </button>
      </div>

      {/* Overview Metric Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <span className="text-xs text-slate-400 font-medium">ข้อสอบทั้งหมด</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {questionBankSummary.total} ข้อ
          </div>
          <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
            <CheckCircle2 className="w-3 h-3" />
            <span>ผ่านการตรวจสอบ 100%</span>
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <span className="text-xs text-rose-500 font-bold">Cardiovascular & Lymph</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {questionBankSummary.bySystem['Cardiovascular and Lymphatic Systems']} ข้อ
          </div>
          <span className="text-[11px] text-slate-400">สไลด์ BNS102 (102 หน้า)</span>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <span className="text-xs text-amber-500 font-bold">Digestive System</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {questionBankSummary.bySystem['Digestive System']} ข้อ
          </div>
          <span className="text-[11px] text-slate-400">สไลด์ทางเดินอาหาร (68 หน้า)</span>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <span className="text-xs text-sky-500 font-bold">Urinary System</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {questionBankSummary.bySystem['Urinary System']} ข้อ
          </div>
          <span className="text-[11px] text-slate-400">สไลด์ทางเดินปัสสาวะ (80 หน้า)</span>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative flex-1 min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="ค้นหาข้อสอบด้วยคีย์เวิร์ด, คำถาม, หรือคำอธิบาย..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* System filter */}
        <div className="flex items-center gap-2 text-xs">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedSystem}
            onChange={e => setSelectedSystem(e.target.value as any)}
            className="py-1.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
          >
            <option value="All Systems">ทุกระบบอวัยวะ</option>
            <option value="Cardiovascular and Lymphatic Systems">Cardiovascular & Lymphatic</option>
            <option value="Digestive System">Digestive System</option>
            <option value="Urinary System">Urinary System</option>
          </select>
        </div>

        {/* Difficulty filter */}
        <div className="flex items-center gap-2 text-xs">
          <select
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value as any)}
            className="py-1.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
          >
            <option value="Mixed">ทุกระดับความยาก</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          แสดงผล: <strong className="text-slate-800 dark:text-slate-200">{filtered.length}</strong> / {allQuestions.length} ข้อ
        </div>

      </div>

      {/* Questions Accordion / Cards List */}
      <div className="space-y-3">
        {filtered.slice(0, 50).map((q, idx) => {
          const isExpanded = expandedId === q.id;

          return (
            <div 
              key={q.id}
              className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden transition-all"
            >
              <div 
                onClick={() => toggleExpand(q.id)}
                className="p-5 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-700/30 flex items-start justify-between gap-4 select-none"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-sky-600 dark:text-sky-400">
                      {q.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold">
                      {q.system}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600 dark:text-slate-300">
                      {q.topic}
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 text-[10px]">
                      {q.difficulty}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                    {q.questionText}
                  </h3>
                </div>

                <div className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-900/40 space-y-4 text-xs animate-fadeIn">
                  
                  {/* 4 Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {(['A', 'B', 'C', 'D'] as const).map(key => {
                      const isCorrect = q.correctOption === key;
                      return (
                        <div 
                          key={key}
                          className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                            isCorrect 
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 font-semibold text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500/20'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[11px] shrink-0 ${
                            isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'
                          }`}>
                            {key}
                          </span>
                          <span className="pt-0.5 leading-snug">
                            {q.options[key]} {isCorrect && '✓ (คำตอบที่ถูกต้อง)'}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation & Source */}
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-sky-600" />
                      <span>คำอธิบายเฉลยอย่างละเอียด:</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                      {q.explanation}
                    </p>
                    <div className="text-[11px] text-slate-400 pl-5 pt-1.5 border-t border-slate-100 dark:border-slate-700">
                      <strong>แหล่งที่มา:</strong> {q.sourceFile} — หน้า {q.sourcePage}
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}

        {filtered.length > 50 && (
          <div className="py-4 text-center text-xs text-slate-500">
            แสดง 50 ข้อแรกจาก {filtered.length} ข้อ (ใช้ช่องค้นหาด้านบนเพื่อค้นหาข้ออื่นๆ เพิ่มเติม)
          </div>
        )}
      </div>

    </div>
  );
};
