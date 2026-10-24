import React, { useState } from 'react';
import { 
  History, 
  Trash2, 
  Search, 
  Eye, 
  FileSpreadsheet, 
  FileText, 
  Download, 
  Calendar, 
  CheckCircle2, 
  XCircle,
  AlertTriangle,
  ArrowUpDown,
  Filter
} from 'lucide-react';
import { ExamAttempt, OrganSystem } from '../types';
import { ExportService } from '../services/export';

interface ExamHistoryProps {
  attempts: ExamAttempt[];
  onViewAttempt: (attempt: ExamAttempt) => void;
  onDeleteAttempt: (id: string) => void;
  onClearAll: () => void;
}

export const ExamHistory: React.FC<ExamHistoryProps> = ({
  attempts,
  onViewAttempt,
  onDeleteAttempt,
  onClearAll
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSystem, setSelectedSystem] = useState<string>('All');
  const [sortField, setSortField] = useState<'date' | 'score' | 'duration'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [deleteCandidateId, setDeleteCandidateId] = useState<string | null>(null);
  const [showClearAllModal, setShowClearAllModal] = useState<boolean>(false);

  // Filter & Search
  let filtered = attempts.filter(att => {
    if (selectedSystem !== 'All') {
      const matchSys = att.selectedSystems.some(s => s === selectedSystem);
      if (!matchSys) return false;
    }
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      return (
        att.id.toLowerCase().includes(term) ||
        att.examMode.toLowerCase().includes(term) ||
        att.selectedSystems.some(s => s.toLowerCase().includes(term))
      );
    }
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    let diff = 0;
    if (sortField === 'date') {
      diff = new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
    } else if (sortField === 'score') {
      diff = a.percentage - b.percentage;
    } else if (sortField === 'duration') {
      diff = a.durationSeconds - b.durationSeconds;
    }
    return sortOrder === 'desc' ? -diff : diff;
  });

  const toggleSort = (field: 'date' | 'score' | 'duration') => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'));
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const handleConfirmDelete = () => {
    if (deleteCandidateId) {
      onDeleteAttempt(deleteCandidateId);
      setDeleteCandidateId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fadeIn pb-12">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <History className="w-8 h-8 text-sky-600 dark:text-sky-400" />
            <span>ประวัติการสอบ (Exam History)</span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            บันทึกผลสอบย้อนหลัง คำนวณคะแนน เปรียบเทียบพัฒนาการ และส่งออกรายงาน
          </p>
        </div>

        {attempts.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => ExportService.exportAttemptsToCSV(attempts)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ส่งออก CSV</span>
            </button>
            <button
              onClick={() => ExportService.exportFullWorkbookXLSX(attempts)}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>ส่งออก Excel (.xlsx)</span>
            </button>
            <button
              onClick={() => setShowClearAllModal(true)}
              className="px-3 py-2 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold hover:bg-rose-100 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>ล้างทั้งหมด</span>
            </button>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="ค้นหาตามรหัสสอบ หรือชื่อระบบ..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* System Filter */}
        <div className="flex items-center gap-2 text-xs">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-slate-500">ระบบ:</span>
          <select
            value={selectedSystem}
            onChange={e => setSelectedSystem(e.target.value)}
            className="py-1.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
          >
            <option value="All">ทุกระบบ (All Systems)</option>
            <option value="Cardiovascular and Lymphatic Systems">Cardiovascular & Lymphatic</option>
            <option value="Digestive System">Digestive System</option>
            <option value="Urinary System">Urinary System</option>
          </select>
        </div>

        {/* Sort triggers */}
        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={() => toggleSort('date')}
            className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1 transition-all ${
              sortField === 'date' 
                ? 'bg-sky-50 dark:bg-sky-950 border-sky-400 text-sky-700 dark:text-sky-300'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            <span>วันที่ {sortField === 'date' ? (sortOrder === 'desc' ? '↓' : '↑') : ''}</span>
          </button>

          <button
            onClick={() => toggleSort('score')}
            className={`px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1 transition-all ${
              sortField === 'score' 
                ? 'bg-sky-50 dark:bg-sky-950 border-sky-400 text-sky-700 dark:text-sky-300'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            <span>คะแนน {sortField === 'score' ? (sortOrder === 'desc' ? '↓' : '↑') : ''}</span>
          </button>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-slate-400 space-y-2">
            <History className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600" />
            <p className="text-sm font-medium">ไม่พบประวัติการสอบที่ตรงกับเงื่อนไข</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-900/50 text-slate-500 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3.5 px-4">วันที่และเวลาสอบ</th>
                  <th className="py-3.5 px-4">โหมด</th>
                  <th className="py-3.5 px-4">ระบบที่สอบ</th>
                  <th className="py-3.5 px-4 text-center">ข้อสอบ</th>
                  <th className="py-3.5 px-4 text-center">ตอบถูก / ผิด</th>
                  <th className="py-3.5 px-4 text-center">เปอร์เซ็นต์</th>
                  <th className="py-3.5 px-4 text-center">เวลาที่ใช้</th>
                  <th className="py-3.5 px-4 text-right">การจัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {filtered.map(att => (
                  <tr key={att.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-700/40 transition-colors">
                    
                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100">
                      <div>{new Date(att.submittedAt).toLocaleDateString('th-TH')}</div>
                      <div className="text-xs text-slate-400 font-normal">
                        {new Date(att.submittedAt).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="capitalize px-2 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {att.examMode}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-xs font-medium text-slate-600 dark:text-slate-300 max-w-[220px] truncate" title={att.selectedSystems.join(', ')}>
                      {att.selectedSystems.join(', ')}
                    </td>

                    <td className="py-3.5 px-4 text-center font-bold">
                      {att.totalQuestions}
                    </td>

                    <td className="py-3.5 px-4 text-center text-xs">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{att.correctCount}</span>
                      <span className="text-slate-400"> / </span>
                      <span className="text-rose-500 font-bold">{att.wrongCount}</span>
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-black ${
                        att.percentage >= 80 
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : att.percentage >= 60
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                      }`}>
                        {att.percentage}%
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-center text-xs text-slate-500">
                      {Math.floor(att.durationSeconds / 60)}:{(att.durationSeconds % 60).toString().padStart(2, '0')} นาที
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onViewAttempt(att)}
                          title="ดูเฉลยและการวิเคราะห์ผลสอบครั้งนี้"
                          className="p-1.5 rounded-lg text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteCandidateId(att.id)}
                          title="ลบผลสอบนี้"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Single Confirmation Modal */}
      {deleteCandidateId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-3 rounded-full bg-rose-100 dark:bg-rose-950">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                ลบประวัติการสอบนี้?
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              เมื่อลบแล้ว ข้อมูลคะแนนและรายละเอียดคำตอบของการสอบครั้งนี้จะไม่สามารถกู้คืนได้
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setDeleteCandidateId(null)}
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow"
              >
                ยืนยันลบ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clear All Confirmation Modal */}
      {showClearAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <div className="p-3 rounded-full bg-rose-100 dark:bg-rose-950">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                ล้างประวัติการสอบทั้งหมด?
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              การกระทำนี้จะลบประวัติการสอบทั้งหมด {attempts.length} ครั้งออกจากอุปกรณ์ของคุณอย่างถาวร
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowClearAllModal(false)}
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => {
                  onClearAll();
                  setShowClearAllModal(false);
                }}
                className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow"
              >
                ยืนยันล้างทั้งหมด
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
