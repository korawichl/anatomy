/**
 * scripts/record_to_git.cjs
 * บันทึกคะแนนสอบและรายงานวิเคราะห์จุดผิดพลาด (Mistake Log & Weak Topics) ลงใน Git โดยอัตโนมัติ
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const RECORDS_DIR = path.resolve(__dirname, '../exam_records');
const HISTORY_JSON = path.join(RECORDS_DIR, 'history.json');
const MISTAKE_LOG_MD = path.join(RECORDS_DIR, 'MISTAKE_LOG.md');
const SCORE_HISTORY_MD = path.join(RECORDS_DIR, 'SCORE_HISTORY.md');
const WEAK_TOPICS_MD = path.join(RECORDS_DIR, 'WEAK_TOPICS_REPORT.md');

function ensureDir() {
  if (!fs.existsSync(RECORDS_DIR)) {
    fs.mkdirSync(RECORDS_DIR, { recursive: true });
  }
}

function loadHistory() {
  ensureDir();
  if (fs.existsSync(HISTORY_JSON)) {
    try {
      const data = JSON.parse(fs.readFileSync(HISTORY_JSON, 'utf-8'));
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.warn('Could not parse history.json, initializing empty array');
      return [];
    }
  }
  return [];
}

function saveHistory(history) {
  ensureDir();
  fs.writeFileSync(HISTORY_JSON, JSON.stringify(history, null, 2), 'utf-8');
}

/**
 * Generate MISTAKE_LOG.md
 */
function generateMistakeLog(history) {
  let md = `# 📋 บันทึกข้อสอบกายวิภาคศาสตร์และจุดผิดพลาด (Anatomy Exam Mistake Log)\n\n`;
  md += `> ไฟล์นี้ถูกบันทึกและซิงค์ผ่าน Git อัตโนมัติ เพื่อใช้วิเคราะห์จุดบกพร่อง ทบทวนข้อที่ตอบผิด และอ้างอิงหน้าสไลด์คำอธิบาย\n`;
  md += `> วันที่อัปเดตล่าสุด: ${new Date().toLocaleString('th-TH')}\n\n`;

  if (history.length === 0) {
    md += `*ยังไม่มีประวัติการสอบที่บันทึก*\n`;
    return md;
  }

  // Iterate attempts in reverse chronological order
  const reversed = [...history].reverse();

  reversed.forEach((attempt, index) => {
    const wrongAnswers = (attempt.answers || []).filter(a => !a.isCorrect);
    const dateStr = new Date(attempt.submittedAt || attempt.startedAt).toLocaleString('th-TH');
    const isPassed = attempt.percentage >= 60;
    const gradeBadge = attempt.percentage >= 80 ? '🌟 ดีเยี่ยม (Grade A)' : isPassed ? '✅ ผ่านเกณฑ์ (Passed)' : '❌ ควรทบทวนเพิ่ม (Needs Review)';

    md += `## 📝 ครั้งที่ ${history.length - index}: การสอบวันที่ ${dateStr}\n\n`;
    md += `- **รหัสการสอบ (Attempt ID):** \`${attempt.id}\`\n`;
    md += `- **ระบบอวัยวะ:** ${(attempt.selectedSystems || []).join(', ')}\n`;
    md += `- **โหมดการสอบ:** ${attempt.examMode || 'Exam'} Mode\n`;
    md += `- **คะแนนที่ได้:** **${attempt.score} / ${attempt.totalQuestions} ข้อ (${attempt.percentage}%)** — ${gradeBadge}\n`;
    md += `- **จำนวนข้อที่ตอบผิด:** ${attempt.wrongCount} ข้อ | **เวลาที่ใช้:** ${Math.floor((attempt.durationSeconds || 0) / 60)} นาที ${(attempt.durationSeconds || 0) % 60} วินาที\n\n`;

    if (wrongAnswers.length === 0) {
      md += `🎉 **ยอดเยี่ยมมาก! ไม่มีข้อใดตอบผิดในการสอบครั้งนี้ (คะแนนเต็ม 100%)**\n\n---\n\n`;
      return;
    }

    md += `### 🔍 รายการข้อที่ตอบผิดและวิเคราะห์เหตุผล (${wrongAnswers.length} ข้อ)\n\n`;

    wrongAnswers.forEach((ans, qIdx) => {
      const q = ans.questionSnapshot || {};
      const userSelected = ans.selectedOption;
      const userSelectedText = userSelected ? (q.options ? `${userSelected}) ${q.options[userSelected]}` : userSelected) : 'ไม่ได้ตอบ (ข้าม)';
      const correctSelected = q.correctOption;
      const correctSelectedText = correctSelected ? (q.options ? `${correctSelected}) ${q.options[correctSelected]}` : correctSelected) : '-';

      md += `#### ${qIdx + 1}. [${q.id || `Q${qIdx + 1}`}] ${q.questionText}\n`;
      md += `- **ระบบและหัวข้อ:** \`${q.system}\` > **${q.topic || '-'}**\n`;
      md += `- **ระดับความยาก:** ${q.difficulty || 'Medium'}\n`;
      md += `- **คำตอบของคุณ (ผิด):** ❌ \`${userSelectedText}\`\n`;
      md += `- **คำตอบที่ถูกต้อง:** ✅ **\`${correctSelectedText}\`**\n`;
      md += `- **💡 คำอธิบายทางการแพทย์และเหตุผล:**\n`;
      md += `  > ${q.explanation ? q.explanation.replace(/\n/g, ' ') : 'ไม่มีคำอธิบาย'}\n`;
      md += `- **📖 เอกสารอ้างอิง:** \`${q.sourceFile || 'PDF Lecture'}\` **(หน้าที่ ${q.sourcePage || '-'})**\n\n`;
    });

    md += `---\n\n`;
  });

  return md;
}

/**
 * Generate SCORE_HISTORY.md
 */
function generateScoreHistory(history) {
  let md = `# 📈 ประวัติคะแนนสอบวิชากายวิภาคศาสตร์ (Score History)\n\n`;
  md += `> วันที่อัปเดตล่าสุด: ${new Date().toLocaleString('th-TH')}\n\n`;

  if (history.length === 0) {
    md += `*ยังไม่มีประวัติการสอบที่บันทึก*\n`;
    return md;
  }

  // Calculate totals
  const totalAttempts = history.length;
  const totalAnswered = history.reduce((sum, h) => sum + (h.totalQuestions || 0), 0);
  const totalCorrect = history.reduce((sum, h) => sum + (h.correctCount || 0), 0);
  const totalWrong = history.reduce((sum, h) => sum + (h.wrongCount || 0), 0);
  const overallAcc = totalAnswered > 0 ? ((totalCorrect / totalAnswered) * 100).toFixed(1) : 0;
  const avgScore = (history.reduce((sum, h) => sum + (h.percentage || 0), 0) / totalAttempts).toFixed(1);
  const maxScore = Math.max(...history.map(h => h.percentage || 0));

  md += `### 📊 สรุปสถิติภาพรวมสะสม\n\n`;
  md += `| รายการสถิติ | ตัวเลขที่บันทึกได้ |\n`;
  md += `| :--- | :--- |\n`;
  md += `| **จำนวนครั้งที่สอบทั้งหมด (Total Attempts)** | **${totalAttempts} ครั้ง** |\n`;
  md += `| **จำนวนข้อสอบที่ทำทั้งหมด** | **${totalAnswered} ข้อ** |\n`;
  md += `| **ตอบถูกสะสม** | **${totalCorrect} ข้อ** |\n`;
  md += `| **ตอบผิดสะสม** | **${totalWrong} ข้อ** |\n`;
  md += `| **อัตราความถูกต้องโดยรวม (Accuracy)** | **${overallAcc}%** |\n`;
  md += `| **คะแนนเฉลี่ย (Average Score)** | **${avgScore}%** |\n`;
  md += `| **คะแนนสูงสุดที่ทำได้ (Max Score)** | **${maxScore}%** |\n\n`;

  md += `### 📜 ตารางบันทึกผลสอบทุกรอบ\n\n`;
  md += `| # | วันที่-เวลา | ระบบอวัยวะ | โหมด | จำนวนข้อ | ตอบถูก | ตอบผิด | คะแนน | เปอร์เซ็นต์ | เวลา | สถานะ |\n`;
  md += `| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n`;

  [...history].reverse().forEach((att, idx) => {
    const num = history.length - idx;
    const date = new Date(att.submittedAt || att.startedAt).toLocaleString('th-TH');
    const sys = (att.selectedSystems || []).join(', ');
    const isPassed = att.percentage >= 60;
    const statusText = att.percentage >= 80 ? '🌟 ดีเยี่ยม' : isPassed ? '✅ ผ่าน' : '❌ ต้องทบทวน';
    const duration = `${Math.floor((att.durationSeconds || 0) / 60)}m ${(att.durationSeconds || 0) % 60}s`;

    md += `| ${num} | ${date} | ${sys} | ${att.examMode} | ${att.totalQuestions} | ${att.correctCount} | ${att.wrongCount} | ${att.score} | **${att.percentage}%** | ${duration} | ${statusText} |\n`;
  });

  md += `\n`;
  return md;
}

/**
 * Generate WEAK_TOPICS_REPORT.md
 */
function generateWeakTopicsReport(history) {
  let md = `# 🎯 รายงานวิเคราะห์หัวข้อจุดอ่อนที่ต้องทบทวนด่วน (Weak Topics Analysis)\n\n`;
  md += `> รายงานนี้ประมวลผลจากประวัติการทำข้อสอบจริง เพื่อค้นหาหัวข้อที่มีความแม่นยำต่ำกว่า 60% พร้อมระบุหน้าสไลด์ของอาจารย์ที่ต้องเปิดอ่านซ้ำ\n`;
  md += `> วันที่อัปเดตล่าสุด: ${new Date().toLocaleString('th-TH')}\n\n`;

  if (history.length === 0) {
    md += `*ยังไม่มีประวัติการสอบที่บันทึก*\n`;
    return md;
  }

  // Aggregate by topic
  const topicStats = {};

  history.forEach(att => {
    (att.answers || []).forEach(ans => {
      const q = ans.questionSnapshot;
      if (!q || !q.topic) return;

      const key = `${q.system}:::${q.topic}`;
      if (!topicStats[key]) {
        topicStats[key] = {
          system: q.system,
          topic: q.topic,
          total: 0,
          correct: 0,
          wrong: 0,
          sourceFile: q.sourceFile,
          sourcePages: new Set()
        };
      }

      topicStats[key].total++;
      if (ans.isCorrect) {
        topicStats[key].correct++;
      } else {
        topicStats[key].wrong++;
      }
      if (q.sourcePage) {
        topicStats[key].sourcePages.add(q.sourcePage);
      }
    });
  });

  const topicsArray = Object.values(topicStats).map(t => {
    const accuracy = t.total > 0 ? (t.correct / t.total) * 100 : 0;
    let status = 'Developing';
    if (accuracy >= 80) status = 'Strong';
    else if (accuracy < 60) status = 'Needs Review';

    return {
      ...t,
      accuracy: Math.round(accuracy * 10) / 10,
      status,
      pages: Array.from(t.sourcePages).sort((a, b) => Number(a) - Number(b)).join(', ')
    };
  });

  const critical = topicsArray.filter(t => t.status === 'Needs Review').sort((a, b) => a.accuracy - b.accuracy);
  const developing = topicsArray.filter(t => t.status === 'Developing').sort((a, b) => a.accuracy - b.accuracy);
  const mastered = topicsArray.filter(t => t.status === 'Strong').sort((a, b) => b.accuracy - a.accuracy);

  md += `## 🔴 หัวข้อวิกฤต (ความแม่นยำต่ำกว่า 60% — ควรทบทวนทันที)\n\n`;
  if (critical.length === 0) {
    md += `👏 *ไม่พบหัวข้อวิกฤตที่ต่ำกว่า 60%! คุณทำผลงานได้ในเกณฑ์มาตรฐานทุกหัวข้อ*\n\n`;
  } else {
    md += `| หัวข้อ (Topic) | ระบบอวัยวะ | ทำไป | ถูก | ผิด | ความแม่นยำ | หน้าสไลด์เอกสารที่ต้องอ่านทบทวน |\n`;
    md += `| :--- | :--- | :---: | :---: | :---: | :---: | :--- |\n`;
    critical.forEach(t => {
      md += `| **${t.topic}** | ${t.system} | ${t.total} | ${t.correct} | ${t.wrong} | **${t.accuracy}%** | \`${t.sourceFile}\` (หน้า ${t.pages || '-'}) |\n`;
    });
    md += `\n`;
  }

  md += `## 🟡 หัวข้อที่เริ่มเข้าใจแต่ต้องฝึกซ้ำ (60% - 79% — Developing)\n\n`;
  if (developing.length === 0) {
    md += `*ไม่มีหัวข้อในช่วงนี้*\n\n`;
  } else {
    md += `| หัวข้อ (Topic) | ระบบอวัยวะ | ทำไป | ถูก | ผิด | ความแม่นยำ | เอกสารอ้างอิง |\n`;
    md += `| :--- | :--- | :---: | :---: | :---: | :---: | :--- |\n`;
    developing.forEach(t => {
      md += `| **${t.topic}** | ${t.system} | ${t.total} | ${t.correct} | ${t.wrong} | **${t.accuracy}%** | \`${t.sourceFile}\` (หน้า ${t.pages || '-'}) |\n`;
    });
    md += `\n`;
  }

  md += `## 🟢 หัวข้อที่เชี่ยวชาญแล้ว (ตั้งแต่ 80% ขึ้นไป — Mastered)\n\n`;
  if (mastered.length === 0) {
    md += `*ยังไม่มีหัวข้อที่ถึงเกณฑ์ 80%*\n\n`;
  } else {
    md += `| หัวข้อ (Topic) | ระบบอวัยวะ | ทำไป | ถูก | ความแม่นยำ |\n`;
    md += `| :--- | :--- | :---: | :---: | :---: |\n`;
    mastered.forEach(t => {
      md += `| **${t.topic}** | ${t.system} | ${t.total} | ${t.correct} | **${t.accuracy}%** |\n`;
    });
    md += `\n`;
  }

  return md;
}

/**
 * Record an attempt, update all files, and commit/push to git
 */
function recordAttempt(attemptData, autoPush = true) {
  ensureDir();
  const history = loadHistory();

  const incomingList = Array.isArray(attemptData) ? attemptData : [attemptData];

  incomingList.forEach(item => {
    if (!item || !item.id) return;
    const existingIndex = history.findIndex(h => h.id === item.id);
    if (existingIndex >= 0) {
      history[existingIndex] = item;
    } else {
      history.push(item);
    }
  });

  // 1. Save history.json
  saveHistory(history);

  // 2. Generate Markdown files
  fs.writeFileSync(MISTAKE_LOG_MD, generateMistakeLog(history), 'utf-8');
  fs.writeFileSync(SCORE_HISTORY_MD, generateScoreHistory(history), 'utf-8');
  fs.writeFileSync(WEAK_TOPICS_MD, generateWeakTopicsReport(history), 'utf-8');

  console.log(`[Record] Updated exam records files in ${RECORDS_DIR}`);

  let gitStatus = '';
  const latestItem = incomingList[incomingList.length - 1] || {};
  let commitMessage = incomingList.length === 1
    ? `feat(records): log anatomy exam attempt - Score ${latestItem.score || 0}/${latestItem.totalQuestions || 0} (${latestItem.percentage || 0}%)`
    : `feat(records): sync ${incomingList.length} exam attempts to Git`;

  try {
    execSync('git add exam_records', { stdio: 'pipe' });
    const diff = execSync('git status --porcelain exam_records', { encoding: 'utf-8' }).trim();
    if (!diff) {
      return {
        success: true,
        message: 'ไฟล์ผลสอบใน exam_records เป็นปัจจุบันอยู่แล้ว (ไม่มีการเปลี่ยนแปลงใหม่)',
        attemptId: attemptData.id
      };
    }

    execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });
    const commitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();

    if (autoPush) {
      try {
        execSync('git push', { stdio: 'pipe' });
        console.log(`[Git] Successfully pushed commit ${commitHash} to origin.`);
        return {
          success: true,
          commitHash,
          pushed: true,
          message: `บันทึกคะแนนและจุดผิดพลาดขึ้น Git เรียบร้อยแล้ว (Commit: ${commitHash})`
        };
      } catch (pushErr) {
        console.warn('[Git Push Warning] Commit created locally but push failed:', pushErr.message);
        return {
          success: true,
          commitHash,
          pushed: false,
          message: `บันทึกและ Commit ในเครื่องสำเร็จ (${commitHash}) แต่ Push ไม่ผ่าน กรุณาตรวจสอบอินเทอร์เน็ตหรือรัน git push`
        };
      }
    }

    return {
      success: true,
      commitHash,
      pushed: false,
      message: `บันทึกและ Commit สำเร็จ (${commitHash})`
    };
  } catch (gitErr) {
    console.error('[Git Error]', gitErr.message);
    return {
      success: false,
      error: gitErr.message,
      message: 'บันทึกไฟล์สำเร็จ แต่เกิดข้อผิดพลาดในการรัน git commit'
    };
  }
}

// CLI Execution Support
if (require.main === module) {
  const args = process.argv.slice(2);
  let payload = null;

  if (args.length > 0 && fs.existsSync(args[0])) {
    try {
      payload = JSON.parse(fs.readFileSync(args[0], 'utf-8'));
    } catch (e) {
      console.error('Invalid JSON file:', args[0]);
      process.exit(1);
    }
  } else {
    // Check if there is an attempt pending or just regenerate from existing history
    const history = loadHistory();
    if (history.length === 0) {
      console.log('No exam history found. Waiting for new attempt or pass a JSON file.');
      process.exit(0);
    }
    // Re-generate markdown from history
    fs.writeFileSync(MISTAKE_LOG_MD, generateMistakeLog(history), 'utf-8');
    fs.writeFileSync(SCORE_HISTORY_MD, generateScoreHistory(history), 'utf-8');
    fs.writeFileSync(WEAK_TOPICS_MD, generateWeakTopicsReport(history), 'utf-8');
    console.log('Regenerated all markdown files from history.json.');
    try {
      execSync('git add exam_records', { stdio: 'pipe' });
      const diff = execSync('git status --porcelain exam_records', { encoding: 'utf-8' }).trim();
      if (diff) {
        execSync('git commit -m "docs(records): update exam mistake log & score history"', { stdio: 'pipe' });
        execSync('git push', { stdio: 'pipe' });
        console.log('Pushed updated records to Git.');
      } else {
        console.log('Exam records are already clean and up to date in Git.');
      }
    } catch (e) {
      console.log('Git command result:', e.message);
    }
    process.exit(0);
  }

  if (payload) {
    const result = recordAttempt(payload, true);
    console.log(JSON.stringify(result, null, 2));
  }
}

module.exports = {
  recordAttempt,
  generateMistakeLog,
  generateScoreHistory,
  generateWeakTopicsReport,
  loadHistory,
  saveHistory
};
