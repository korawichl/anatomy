import * as XLSX from 'xlsx';
import { ExamAttempt } from '../types';
import { allQuestions } from '../data/questionBank';
import { AnalyticsService } from './analytics';

export const ExportService = {
  // Download helper
  downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // 1. CSV EXPORT (with UTF-8 BOM for Thai Excel compatibility)
  exportAttemptsToCSV(attempts: ExamAttempt[]) {
    if (attempts.length === 0) {
      alert('ไม่มีประวัติการสอบสำหรับส่งออก');
      return;
    }

    const headers = [
      'รหัสการสอบ (Attempt ID)',
      'วันที่เริ่มสอบ',
      'วันที่ส่งข้อสอบ',
      'โหมดการสอบ',
      'ระบบอวัยวะ',
      'จำนวนข้อทั้งหมด',
      'ตอบถูก (ข้อ)',
      'ตอบผิด (ข้อ)',
      'คะแนนที่ได้',
      'เปอร์เซ็นต์ (%)',
      'เวลาที่ใช้ (วินาที)',
      'เวลาที่ใช้ (นาที)'
    ];

    const rows = attempts.map(att => [
      `"${att.id}"`,
      `"${new Date(att.startedAt).toLocaleString('th-TH')}"`,
      `"${new Date(att.submittedAt).toLocaleString('th-TH')}"`,
      `"${att.examMode}"`,
      `"${att.selectedSystems.join(', ')}"`,
      att.totalQuestions,
      att.correctCount,
      att.wrongCount,
      att.score,
      att.percentage,
      att.durationSeconds,
      (att.durationSeconds / 60).toFixed(1)
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const filename = `Anatomy_Exam_History_${new Date().toISOString().slice(0, 10)}.csv`;
    this.downloadBlob(blob, filename);
  },

  exportWrongQuestionsToCSV(attempts: ExamAttempt[]) {
    const wrongAnswersMap = new Map<string, {
      questionId: string;
      questionText: string;
      system: string;
      topic: string;
      userLastAnswer: string;
      correctAnswer: string;
      explanation: string;
      sourceFile: string;
      sourcePage: number | string;
    }>();

    attempts.forEach(att => {
      att.answers.forEach(ans => {
        if (!ans.isCorrect) {
          const q = ans.questionSnapshot;
          wrongAnswersMap.set(q.id, {
            questionId: q.id,
            questionText: q.questionText,
            system: q.system,
            topic: q.topic,
            userLastAnswer: `${ans.selectedOption || 'ไม่ตอบ'}: ${ans.selectedOption ? q.options[ans.selectedOption] : '-'}`,
            correctAnswer: `${q.correctOption}: ${q.options[q.correctOption]}`,
            explanation: q.explanation,
            sourceFile: q.sourceFile,
            sourcePage: q.sourcePage
          });
        }
      });
    });

    if (wrongAnswersMap.size === 0) {
      alert('ยินดีด้วย! ไม่พบข้อที่ตอบผิดในประวัติการสอบปัจจุบัน');
      return;
    }

    const headers = [
      'รหัสข้อสอบ',
      'โจทย์คำถาม',
      'ระบบอวัยวะ',
      'หัวข้อ',
      'คำตอบที่ผู้ใช้ตอบผิดล่าสุด',
      'คำตอบที่ถูกต้อง',
      'คำอธิบายเฉลย',
      'ไฟล์อ้างอิง',
      'หน้าเอกสาร'
    ];

    const rows = Array.from(wrongAnswersMap.values()).map(item => [
      `"${item.questionId}"`,
      `"${item.questionText.replace(/"/g, '""')}"`,
      `"${item.system}"`,
      `"${item.topic}"`,
      `"${item.userLastAnswer.replace(/"/g, '""')}"`,
      `"${item.correctAnswer.replace(/"/g, '""')}"`,
      `"${item.explanation.replace(/"/g, '""')}"`,
      `"${item.sourceFile}"`,
      item.sourcePage
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const filename = `Anatomy_Wrong_Questions_${new Date().toISOString().slice(0, 10)}.csv`;
    this.downloadBlob(blob, filename);
  },

  // 2. EXCEL (.xlsx) EXPORT (Multi-sheet workbook)
  exportFullWorkbookXLSX(attempts: ExamAttempt[]) {
    const wb = XLSX.utils.book_new();
    const analytics = AnalyticsService.computeAnalytics(attempts);

    // Sheet 1: Summary
    const summaryData = [
      ['ระบบฝึกทำข้อสอบกายวิภาคศาสตร์ (Anatomy Exam Lab) — รายงานผลการประเมิน'],
      ['วันที่ออกรายงาน', new Date().toLocaleString('th-TH')],
      [],
      ['หัวข้อสถิติภาพรวม', 'ค่าที่บันทึกได้'],
      ['จำนวนครั้งที่สอบทั้งหมด (Total Attempts)', analytics.totalAttempts],
      ['จำนวนข้อที่ทำทั้งหมด (Total Answered)', analytics.totalAnswered],
      ['จำนวนข้อที่ตอบถูก (Total Correct)', analytics.totalCorrect],
      ['จำนวนข้อที่ตอบผิด (Total Wrong)', analytics.totalWrong],
      ['อัตราความถูกต้องโดยรวม (Overall Accuracy)', `${analytics.overallAccuracy}%`],
      ['คะแนนเฉลี่ย (Average Score)', `${analytics.avgScorePercentage}%`],
      ['คะแนนสูงสุดที่เคยทำได้ (Max Score)', `${analytics.maxScorePercentage}%`],
      ['จำนวนข้อสอบทั้งหมดในคลัง (Question Bank)', allQuestions.length],
      [],
      ['สถิติแยกตามระบบอวัยวะ (System Breakdown)', 'จำนวนข้อที่ทำ', 'ตอบถูก', 'ความแม่นยำ (%)', 'จำนวนครั้งที่ฝึก'],
      [
        'Cardiovascular and Lymphatic Systems',
        analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].totalAnswered,
        analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].correctCount,
        `${analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].accuracy}%`,
        analytics.systemAnalytics['Cardiovascular and Lymphatic Systems'].attemptsCount
      ],
      [
        'Digestive System',
        analytics.systemAnalytics['Digestive System'].totalAnswered,
        analytics.systemAnalytics['Digestive System'].correctCount,
        `${analytics.systemAnalytics['Digestive System'].accuracy}%`,
        analytics.systemAnalytics['Digestive System'].attemptsCount
      ],
      [
        'Urinary System',
        analytics.systemAnalytics['Urinary System'].totalAnswered,
        analytics.systemAnalytics['Urinary System'].correctCount,
        `${analytics.systemAnalytics['Urinary System'].accuracy}%`,
        analytics.systemAnalytics['Urinary System'].attemptsCount
      ]
    ];
    const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(wb, wsSummary, 'Summary');

    // Sheet 2: Exam History
    const historyData = [
      ['Attempt ID', 'วันที่สอบ', 'โหมดการสอบ', 'ระบบอวัยวะ', 'จำนวนข้อ', 'ตอบถูก', 'ตอบผิด', 'คะแนน', 'เปอร์เซ็นต์ (%)', 'เวลาที่ใช้ (นาที)'],
      ...attempts.map(att => [
        att.id,
        new Date(att.submittedAt).toLocaleString('th-TH'),
        att.examMode,
        att.selectedSystems.join(', '),
        att.totalQuestions,
        att.correctCount,
        att.wrongCount,
        att.score,
        att.percentage,
        (att.durationSeconds / 60).toFixed(1)
      ])
    ];
    const wsHistory = XLSX.utils.aoa_to_sheet(historyData);
    XLSX.utils.book_append_sheet(wb, wsHistory, 'Exam History');

    // Sheet 3: Answer Details
    const answerRows: any[] = [
      ['Attempt ID', 'รหัสข้อสอบ', 'ระบบอวัยวะ', 'หัวข้อ', 'คำตอบที่ผู้ใช้เลือก', 'คำตอบที่ถูกต้อง', 'ผลตรวจ', 'คำอธิบายเฉลย', 'หน้าเอกสาร PDF']
    ];
    attempts.forEach(att => {
      att.answers.forEach(ans => {
        answerRows.push([
          att.id,
          ans.questionId,
          ans.questionSnapshot.system,
          ans.questionSnapshot.topic,
          ans.selectedOption || 'ไม่ตอบ',
          ans.correctOptionSnapshot,
          ans.isCorrect ? 'ถูกต้อง' : 'ผิด',
          ans.questionSnapshot.explanation,
          ans.questionSnapshot.sourcePage
        ]);
      });
    });
    const wsAnswers = XLSX.utils.aoa_to_sheet(answerRows);
    XLSX.utils.book_append_sheet(wb, wsAnswers, 'Answer Details');

    // Sheet 4: Weak Topics
    const weakTopicRows: any[] = [
      ['หัวข้อ (Topic)', 'ระบบอวัยวะ', 'จำนวนข้อที่ทำ', 'ตอบถูก (ข้อ)', 'ความแม่นยำ (%)', 'สถานะการเรียนรู้ (Status)']
    ];
    analytics.topicAnalytics.forEach(top => {
      weakTopicRows.push([
        top.topic,
        top.system,
        top.totalAnswered,
        top.correctCount,
        `${top.accuracy}%`,
        top.status
      ]);
    });
    const wsWeak = XLSX.utils.aoa_to_sheet(weakTopicRows);
    XLSX.utils.book_append_sheet(wb, wsWeak, 'Weak Topics');

    // Sheet 5: Question Bank
    const qBankRows: any[] = [
      ['Question ID', 'ระบบอวัยวะ', 'หัวข้อ', 'ระดับความยาก', 'คำถาม', 'ตัวเลือก A', 'ตัวเลือก B', 'ตัวเลือก C', 'ตัวเลือก D', 'เฉลย', 'คำอธิบายเฉลย', 'เอกสารอ้างอิง', 'หน้า PDF']
    ];
    allQuestions.forEach(q => {
      qBankRows.push([
        q.id,
        q.system,
        q.topic,
        q.difficulty,
        q.questionText,
        q.options.A,
        q.options.B,
        q.options.C,
        q.options.D,
        q.correctOption,
        q.explanation,
        q.sourceFile,
        q.sourcePage
      ]);
    });
    const wsQBank = XLSX.utils.aoa_to_sheet(qBankRows);
    XLSX.utils.book_append_sheet(wb, wsQBank, 'Question Bank');

    // Generate and download
    const filename = `Anatomy_Exam_Lab_Complete_${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(wb, filename);
  },

  // 3. GENERATE MISTAKE LOG (MARKDOWN)
  generateMistakeLogMarkdown(attempt: ExamAttempt): string {
    const wrongAnswers = (attempt.answers || []).filter(a => !a.isCorrect);
    const dateStr = new Date(attempt.submittedAt || attempt.startedAt).toLocaleString('th-TH');
    const isPassed = attempt.percentage >= 60;
    const gradeBadge = attempt.percentage >= 80 ? '🌟 ดีเยี่ยม (Grade A)' : isPassed ? '✅ ผ่านเกณฑ์ (Passed)' : '❌ ควรทบทวนเพิ่ม (Needs Review)';

    let md = `# 📋 บันทึกผลสอบและจุดผิดพลาด (Anatomy Exam Mistake Log)\n\n`;
    md += `> วันที่บันทึก: ${dateStr}\n\n`;
    md += `## 📊 ข้อมูลการสอบรอบนี้\n`;
    md += `- **รหัสการสอบ:** \`${attempt.id}\`\n`;
    md += `- **ระบบอวัยวะ:** ${(attempt.selectedSystems || []).join(', ')}\n`;
    md += `- **โหมดการสอบ:** ${attempt.examMode} Mode\n`;
    md += `- **คะแนน:** **${attempt.score} / ${attempt.totalQuestions} ข้อ (${attempt.percentage}%)** — ${gradeBadge}\n`;
    md += `- **จำนวนข้อที่ตอบผิด:** ${attempt.wrongCount} ข้อ | **เวลาที่ใช้:** ${Math.floor(attempt.durationSeconds / 60)} นาที ${attempt.durationSeconds % 60} วินาที\n\n`;

    if (wrongAnswers.length === 0) {
      md += `🎉 **ยอดเยี่ยมมาก! ไม่มีข้อใดตอบผิดในการสอบครั้งนี้ (100% Correct)**\n`;
      return md;
    }

    md += `## ❌ รายละเอียดข้อที่ตอบผิดและวิเคราะห์เหตุผล (${wrongAnswers.length} ข้อ)\n\n`;

    wrongAnswers.forEach((ans, idx) => {
      const q = ans.questionSnapshot;
      const userSel = ans.selectedOption;
      const userSelText = userSel ? `${userSel}) ${q.options[userSel]}` : 'ไม่ได้ตอบ (ข้าม)';
      const corrSel = q.correctOption;
      const corrSelText = `${corrSel}) ${q.options[corrSel]}`;

      md += `### ${idx + 1}. [${q.id}] ${q.questionText}\n`;
      md += `- **ระบบและหัวข้อ:** \`${q.system}\` > **${q.topic}**\n`;
      md += `- **ระดับความยาก:** ${q.difficulty}\n`;
      md += `- **คำตอบของคุณ (ผิด):** ❌ \`${userSelText}\`\n`;
      md += `- **คำตอบที่ถูกต้อง:** ✅ **\`${corrSelText}\`**\n`;
      md += `- **💡 คำอธิบายทางการแพทย์และเหตุผล:**\n`;
      md += `  > ${q.explanation.replace(/\n/g, ' ')}\n`;
      md += `- **📖 เอกสารอ้างอิง:** \`${q.sourceFile}\` **(หน้าที่ ${q.sourcePage})**\n\n`;
    });

    return md;
  },

  downloadMistakeLogMarkdown(attempt: ExamAttempt) {
    const md = this.generateMistakeLogMarkdown(attempt);
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const filename = `MISTAKE_LOG_${attempt.id}.md`;
    this.downloadBlob(blob, filename);
  },

  downloadAttemptJSON(attempt: ExamAttempt) {
    const json = JSON.stringify(attempt, null, 2);
    const blob = new Blob([json], { type: 'application/json;charset=utf-8;' });
    const filename = `attempt_${attempt.id}.json`;
    this.downloadBlob(blob, filename);
  },

  // 4. SYNC TO GIT ENDPOINT (When running dev server)
  async recordAttemptToGit(attemptOrList: ExamAttempt | ExamAttempt[]): Promise<{ success: boolean; message: string; commitHash?: string; pushed?: boolean }> {
    try {
      const response = await fetch('/api/record-to-git', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(attemptOrList)
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      return {
        success: false,
        message: err.message || 'ไม่สามารถติดต่อ Git recording service ได้ (หากอยู่บน Cloud กรุณาดาวน์โหลดไฟล์ไปรัน npm run record)'
      };
    }
  }
};
