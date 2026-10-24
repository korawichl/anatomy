import React, { useState } from 'react';
import { 
  Play, 
  Settings2, 
  Clock, 
  Shuffle, 
  AlertCircle, 
  Heart, 
  Utensils, 
  Droplets, 
  Layers,
  Sparkles,
  HelpCircle,
  FileQuestion
} from 'lucide-react';
import { OrganSystem, ExamMode, Difficulty, ExamConfig } from '../types';
import { allQuestions } from '../data/questionBank';

interface ExamSetupProps {
  onStartExam: (config: ExamConfig) => void;
  missedQuestionCount: number;
}

export const ExamSetup: React.FC<ExamSetupProps> = ({
  onStartExam,
  missedQuestionCount
}) => {
  const [selectedSystem, setSelectedSystem] = useState<OrganSystem | 'All Systems'>('All Systems');
  const [questionCount, setQuestionCount] = useState<number>(70); // Default 70 as requested by user!
  const [difficulty, setDifficulty] = useState<Difficulty>('Mixed');
  const [mode, setMode] = useState<ExamMode>('exam'); // Simulated exam mode
  const [timed, setTimed] = useState<boolean>(true);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(70); // 1 min per question default
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [shuffleOptions, setShuffleOptions] = useState<boolean>(false);

  // Available count check
  const availablePool = allQuestions.filter(q => {
    if (selectedSystem !== 'All Systems' && q.system !== selectedSystem) return false;
    if (difficulty !== 'Mixed' && q.difficulty !== difficulty) return false;
    return true;
  });

  const availableCount = availablePool.length;
  const actualCount = Math.min(questionCount, availableCount);

  const handleSystemChange = (sys: OrganSystem | 'All Systems') => {
    setSelectedSystem(sys);
  };

  const handleCountChange = (count: number) => {
    setQuestionCount(count);
    if (timed) {
      setTimeLimitMinutes(count); // Default 1 min per question
    }
  };

  const handleStart = () => {
    onStartExam({
      system: selectedSystem,
      questionCount: actualCount,
      difficulty,
      mode,
      timed,
      timeLimitMinutes: timed ? timeLimitMinutes : 0,
      shuffleQuestions,
      shuffleOptions
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
          <Settings2 className="w-8 h-8 text-sky-600 dark:text-sky-400" />
          <span>กำหนดเงื่อนไขชุดข้อสอบ (Exam Configuration)</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          ปรับแต่งเนื้อหาระบบอวัยวะ จำนวนข้อ เวลาสอบ และโหมดการทำข้อสอบได้ตามเป้าหมายการอ่านหนังสือ
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-8">
        
        {/* 1. Organ System Selection */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>1. เลือกระบบอวัยวะที่ต้องการฝึกสอบ</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* All Systems */}
            <button
              type="button"
              onClick={() => handleSystemChange('All Systems')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedSystem === 'All Systems'
                  ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 ring-2 ring-sky-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">All Systems</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  300 ข้อ
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                รวมข้อสอบครบทั้ง 3 ระบบ (จำลองข้อสอบไฟนอล)
              </p>
            </button>

            {/* Cardio & Lymph */}
            <button
              type="button"
              onClick={() => handleSystemChange('Cardiovascular and Lymphatic Systems')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedSystem === 'Cardiovascular and Lymphatic Systems'
                  ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Cardio & Lymph</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  100 ข้อ
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                หัวใจ, หลอดเลือด, เลือด, น้ำเหลือง (BNS102)
              </p>
            </button>

            {/* Digestive */}
            <button
              type="button"
              onClick={() => handleSystemChange('Digestive System')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedSystem === 'Digestive System'
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 ring-2 ring-amber-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  <Utensils className="w-4 h-4 text-amber-500" />
                  <span>Digestive System</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  100 ข้อ
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                ทางเดินอาหาร, เยื่อบุช่องท้อง, ตับ, ตับอ่อน
              </p>
            </button>

            {/* Urinary */}
            <button
              type="button"
              onClick={() => handleSystemChange('Urinary System')}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedSystem === 'Urinary System'
                  ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 ring-2 ring-sky-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-sm">
                  <Droplets className="w-4 h-4 text-sky-500" />
                  <span>Urinary System</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  100 ข้อ
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                ไต, หน่วยไต (Nephron), JGA, ท่อไต, กระเพาะปัสสาวะ
              </p>
            </button>

          </div>
        </div>

        {/* 2. Question Count */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileQuestion className="w-4 h-4 text-sky-600" />
              <span>2. จำนวนข้อสอบ</span>
            </label>
            <span className="text-xs text-slate-500">
              มีข้อสอบพร้อมให้สอบ: <strong className="text-sky-600 dark:text-sky-400">{availableCount}</strong> ข้อ
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[10, 20, 30, 50, 70, 100, availableCount].map((cnt, idx) => {
              if (cnt > availableCount && idx !== 6) return null;
              const isSelected = questionCount === cnt;
              const label = cnt === availableCount ? `ทั้งหมด (${cnt} ข้อ)` : `${cnt} ข้อ`;
              const isSpecial70 = cnt === 70;

              return (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => handleCountChange(cnt)}
                  className={`px-4 py-2.5 rounded-xl border text-sm font-bold transition-all relative ${
                    isSelected
                      ? 'border-sky-600 bg-sky-600 text-white shadow-sm'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  {isSpecial70 && (
                    <span className="absolute -top-2 -right-1 px-1.5 py-0.2 rounded bg-amber-500 text-white text-[10px] font-black uppercase">
                      แนะนำ
                    </span>
                  )}
                  {label}
                </button>
              );
            })}
          </div>

          {questionCount > availableCount && (
            <p className="text-xs text-amber-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>จำนวนข้อที่คุณเลือก ({questionCount} ข้อ) มากกว่าข้อสอบที่มีจริง ระบบจะปรับเป็น {availableCount} ข้อให้อัตโนมัติ</span>
            </p>
          )}
        </div>

        {/* 3. Exam Mode */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>3. รูปแบบการสอบ (Exam Mode)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Simulated Exam Mode */}
            <button
              type="button"
              onClick={() => setMode('exam')}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'exam'
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-indigo-600 dark:text-indigo-400">
                Exam Mode (สอบจริง)
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                จับเวลา ทำจนครบทุกข้อ แล้วตรวจเฉลยเมื่อกดส่งข้อสอบ (ตามข้อกำหนดหลัก)
              </p>
            </button>

            {/* Practice Mode */}
            <button
              type="button"
              onClick={() => setMode('practice')}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'practice'
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-emerald-600 dark:text-emerald-400">
                Practice Mode (ฝึกซ้อม)
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                เฉลยทันทีทีละข้อ เหมาะสำหรับอ่านทบทวนก่อนสอบ
              </p>
            </button>

            {/* Review Mode (Wrong only) */}
            <button
              type="button"
              disabled={missedQuestionCount === 0}
              onClick={() => setMode('review')}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'review'
                  ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300'
              } ${missedQuestionCount === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-rose-600 dark:text-rose-400">
                  Review Mode (ข้อที่ผิด)
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300">
                  {missedQuestionCount} ข้อ
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                ดึงเฉพาะข้อที่เคยตอบผิดในอดีตมาสอบซ้ำจนกว่าจะผ่าน
              </p>
            </button>

            {/* Random Mode */}
            <button
              type="button"
              onClick={() => setMode('random')}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === 'random'
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 ring-2 ring-purple-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-purple-600 dark:text-purple-400">
                Random Mode (สุ่มคละ)
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                สุ่มหัวข้อและระดับความยากอย่างอิสระ
              </p>
            </button>

          </div>
        </div>

        {/* 4. Difficulty & Timer Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          
          {/* Difficulty Selection */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-900 dark:text-white">
              ระดับความยาก (Difficulty)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['Mixed', 'Easy', 'Medium', 'Hard'] as Difficulty[]).map(d => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDifficulty(d)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                    difficulty === d
                      ? 'border-sky-600 bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 ring-2 ring-sky-500/20'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Timer Settings */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>ตัวจับเวลา (Timer)</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="timer-toggle"
                  type="checkbox"
                  checked={timed}
                  onChange={e => setTimed(e.target.checked)}
                  className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                />
                <label htmlFor="timer-toggle" className="text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer">
                  {timed ? 'เปิดจับเวลา' : 'ไม่จำกัดเวลา'}
                </label>
              </div>
            </div>

            {timed && (
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="5"
                  max="180"
                  step="5"
                  value={timeLimitMinutes}
                  onChange={e => setTimeLimitMinutes(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <span className="text-xs font-bold text-slate-900 dark:text-white w-20 text-right">
                  {timeLimitMinutes} นาที
                </span>
              </div>
            )}
          </div>

        </div>

        {/* 5. Shuffling options */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shuffle className="w-5 h-5 text-indigo-500" />
            <div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">สลับลำดับข้อสอบและตัวเลือก (Randomization)</p>
              <p className="text-xs text-slate-500">ลดการจำตำแหน่งตัวเลือก เพิ่มความแม่นยำทางความรู้</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={shuffleQuestions}
                onChange={e => setShuffleQuestions(e.target.checked)}
                className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
              />
              <span>สลับลำดับข้อสอบ</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={shuffleOptions}
                onChange={e => setShuffleOptions(e.target.checked)}
                className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
              />
              <span>สลับตัวเลือก A/B/C/D</span>
            </label>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            พร้อมเริ่มทำข้อสอบ: <strong className="text-slate-800 dark:text-slate-200">{actualCount} ข้อ</strong> • {timed ? `เวลา ${timeLimitMinutes} นาที` : 'ไม่จับเวลา'}
          </div>

          <button
            onClick={handleStart}
            disabled={actualCount === 0}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 active:scale-95 text-white font-extrabold text-base shadow-lg shadow-sky-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>เข้าสู่ห้องสอบ (Start Exam)</span>
          </button>
        </div>

      </div>

    </div>
  );
};
