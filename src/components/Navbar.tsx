import React from 'react';
import { 
  Activity, 
  BookOpen, 
  History, 
  BarChart3, 
  Database, 
  Moon, 
  Sun,
  GraduationCap
} from 'lucide-react';

export type ActiveTab = 'dashboard' | 'setup' | 'history' | 'analytics' | 'bank';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  examInProgress: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  toggleTheme,
  examInProgress
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => !examInProgress && setActiveTab('dashboard')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                Anatomy <span className="text-sky-600 dark:text-sky-400">Exam Lab</span>
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                ระบบฝึกทำข้อสอบกายวิภาคศาสตร์ (RSU Nurse)
              </p>
            </div>
          </div>

          {/* Navigation links (disabled while taking exam) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-xl">
            <button
              disabled={examInProgress}
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              } ${examInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Activity className="w-4 h-4" />
              <span>แดชบอร์ด</span>
            </button>

            <button
              disabled={examInProgress}
              onClick={() => setActiveTab('setup')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'setup'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              } ${examInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <BookOpen className="w-4 h-4" />
              <span>เริ่มทำข้อสอบ</span>
            </button>

            <button
              disabled={examInProgress}
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'history'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              } ${examInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <History className="w-4 h-4" />
              <span>ประวัติการสอบ</span>
            </button>

            <button
              disabled={examInProgress}
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'analytics'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              } ${examInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>วิเคราะห์จุดอ่อน</span>
            </button>

            <button
              disabled={examInProgress}
              onClick={() => setActiveTab('bank')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'bank'
                  ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              } ${examInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Database className="w-4 h-4" />
              <span>คลังข้อสอบ (300 ข้อ)</span>
            </button>
          </nav>

          {/* Right actions: Theme toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-xs">
        <button
          disabled={examInProgress}
          onClick={() => setActiveTab('dashboard')}
          className={`flex flex-col items-center gap-1 py-1 px-2 ${activeTab === 'dashboard' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500'}`}
        >
          <Activity className="w-4 h-4" />
          <span>แดชบอร์ด</span>
        </button>
        <button
          disabled={examInProgress}
          onClick={() => setActiveTab('setup')}
          className={`flex flex-col items-center gap-1 py-1 px-2 ${activeTab === 'setup' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500'}`}
        >
          <BookOpen className="w-4 h-4" />
          <span>สอบ</span>
        </button>
        <button
          disabled={examInProgress}
          onClick={() => setActiveTab('history')}
          className={`flex flex-col items-center gap-1 py-1 px-2 ${activeTab === 'history' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500'}`}
        >
          <History className="w-4 h-4" />
          <span>ประวัติ</span>
        </button>
        <button
          disabled={examInProgress}
          onClick={() => setActiveTab('analytics')}
          className={`flex flex-col items-center gap-1 py-1 px-2 ${activeTab === 'analytics' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500'}`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>วิเคราะห์</span>
        </button>
        <button
          disabled={examInProgress}
          onClick={() => setActiveTab('bank')}
          className={`flex flex-col items-center gap-1 py-1 px-2 ${activeTab === 'bank' ? 'text-sky-600 dark:text-sky-400 font-semibold' : 'text-slate-500'}`}
        >
          <Database className="w-4 h-4" />
          <span>คลัง</span>
        </button>
      </div>
    </header>
  );
};
