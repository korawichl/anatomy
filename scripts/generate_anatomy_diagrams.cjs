/**
 * scripts/generate_anatomy_diagrams.cjs
 * Generates 15 pairs (30 files) of High-Resolution Medical Vector (SVG) Diagrams:
 * - *_exam.svg: Clean anatomical illustration with callout leader lines and Pinned Markers [A], [B], [C], [D], [E], [F]
 * - *_labeled.svg: Fully Labeled Master Diagram revealing all anatomical names (English + Thai) and functional notes
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../public/images/anatomy');
fs.mkdirSync(OUT_DIR, { recursive: true });

function renderCalloutPin(pinObj, isLabeled) {
  const { pin, x, y, labelX, labelY, term, thaiName, color = '#0284c7' } = pinObj;
  const isRight = labelX >= x;
  const boxWidth = isLabeled ? 255 : 44;
  const boxHeight = isLabeled ? 44 : 34;
  const boxX = isRight ? labelX : labelX - boxWidth;
  const boxY = labelY - boxHeight / 2;

  return `
    <!-- Landmark Pin ${pin} -->
    <g class="landmark-group">
      <line x1="${x}" y1="${y}" x2="${labelX}" y2="${labelY}" stroke="${color}" stroke-width="2.2" stroke-dasharray="${isLabeled ? 'none' : '4,3'}" />
      <circle cx="${x}" cy="${y}" r="6" fill="${color}" stroke="#ffffff" stroke-width="2" />
      <circle cx="${x}" cy="${y}" r="11" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5" />
      ${
        isLabeled
          ? `
        <rect x="${boxX}" y="${boxY}" width="${boxWidth}" height="${boxHeight}" rx="8" fill="#0f172a" fill-opacity="0.93" stroke="${color}" stroke-width="2" filter="url(#dropShadow)" />
        <rect x="${boxX}" y="${boxY}" width="28" height="${boxHeight}" rx="8" fill="${color}" />
        <text x="${boxX + 14}" y="${labelY + 5}" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">${pin}</text>
        <text x="${boxX + 36}" y="${labelY - 4}" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="700" fill="#f8fafc">${term}</text>
        <text x="${boxX + 36}" y="${labelY + 13}" font-family="Sarabun, Inter, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">${thaiName}</text>
      `
          : `
        <rect x="${boxX}" y="${boxY}" width="${boxWidth}" height="${boxHeight}" rx="8" fill="${color}" stroke="#ffffff" stroke-width="2.5" filter="url(#dropShadow)" />
        <text x="${boxX + boxWidth / 2}" y="${labelY + 6}" font-family="Inter, system-ui, sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">${pin}</text>
      `
      }
    </g>
  `;
}

function wrapSvg(title, subtitle, systemBadge, innerGraphic, pins, isLabeled) {
  const modeBadge = isLabeled
    ? `<rect x="750" y="18" width="225" height="30" rx="15" fill="#059669" /><text x="862" y="38" font-family="Sarabun, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">✓ เฉลยโครงสร้างครบทุกจุด (Master)</text>`
    : `<rect x="770" y="18" width="205" height="30" rx="15" fill="#dc2626" /><text x="872" y="38" font-family="Sarabun, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">❓ ภาพโจทย์สอบระบุตำแหน่ง (Exam)</text>`;

  const pinsMarkup = pins.map(p => renderCalloutPin(p, isLabeled)).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 620" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#eff6ff" />
    </linearGradient>
    <linearGradient id="oxyBlood" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#b91c1c" />
    </linearGradient>
    <linearGradient id="deoxyBlood" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="organPink" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fda4af" />
      <stop offset="100%" stop-color="#e11d48" />
    </linearGradient>
    <linearGradient id="liverBrown" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>
    <linearGradient id="kidneyRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#be123c" />
      <stop offset="100%" stop-color="#881337" />
    </linearGradient>
    <linearGradient id="lymphGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="urineYellow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#eab308" />
    </linearGradient>
    <filter id="dropShadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#0f172a" flood-opacity="0.22" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1000" height="620" rx="18" fill="url(#bgGrad)" stroke="#cbd5e1" stroke-width="2" />
  
  <!-- Subtle Medical Grid -->
  <g stroke="#e2e8f0" stroke-width="1" opacity="0.55">
    <line x1="0" y1="150" x2="1000" y2="150" />
    <line x1="0" y1="300" x2="1000" y2="300" />
    <line x1="0" y1="450" x2="1000" y2="450" />
    <line x1="250" y1="65" x2="250" y2="620" />
    <line x1="500" y1="65" x2="500" y2="620" />
    <line x1="750" y1="65" x2="750" y2="620" />
  </g>

  <!-- Header Banner -->
  <rect x="0" y="0" width="1000" height="66" rx="18" fill="#0f172a" />
  <rect x="0" y="48" width="1000" height="18" fill="#0f172a" />
  <text x="28" y="30" font-family="Inter, Sarabun, sans-serif" font-size="17" font-weight="800" fill="#f8fafc">${title}</text>
  <text x="28" y="51" font-family="Sarabun, Inter, sans-serif" font-size="12.5" font-weight="500" fill="#38bdf8">${systemBadge} • ${subtitle}</text>
  ${modeBadge}

  <!-- Main Anatomical Illustration -->
  <g transform="translate(0, 10)">
    ${innerGraphic}
  </g>

  <!-- Callout Pins -->
  <g transform="translate(0, 10)">
    ${pinsMarkup}
  </g>

  <!-- Footer -->
  <text x="500" y="606" font-family="Sarabun, Inter, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">
    Anatomy Exam Lab — High-Resolution Medical Vector Atlas (Aligned with BNS102 RSU Lecture Slides)
  </text>
</svg>`;
}

const diagrams = [
  // =========================================================================
  // 1. HEART CHAMBERS & INTERNAL VALVES
  // =========================================================================
  {
    id: 'heart_chambers',
    title: 'Internal Anatomy of the Heart: Chambers, Valves & Great Vessels',
    subtitle: 'ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่',
    systemBadge: 'Cardiovascular System',
    graphic: `
      <!-- Superior & Inferior Vena Cava -->
      <path d="M375,110 L375,210 L415,210 L415,110 Z" fill="url(#deoxyBlood)" stroke="#1e3a8a" stroke-width="2.5"/>
      <path d="M380,430 L380,535 L420,535 L420,430 Z" fill="url(#deoxyBlood)" stroke="#1e3a8a" stroke-width="2.5"/>
      <!-- Aortic Arch -->
      <path d="M510,230 C510,115 620,115 620,210 L580,210 C580,155 545,155 545,230 Z" fill="url(#oxyBlood)" stroke="#7f1d1d" stroke-width="3"/>
      <!-- Pulmonary Trunk -->
      <path d="M465,260 L465,155 L395,135 L405,110 L505,135 L585,120 L590,148 L502,165 L502,260 Z" fill="url(#deoxyBlood)" stroke="#1e3a8a" stroke-width="2.5"/>
      <!-- Outer Myocardium Contour -->
      <path d="M340,210 C290,260 295,380 365,455 L545,535 C635,485 685,365 655,245 C635,195 570,190 520,200 Z" fill="#fda4af" stroke="#881337" stroke-width="4" filter="url(#dropShadow)"/>
      <!-- Thick Left Ventricular Wall -->
      <path d="M535,515 C615,465 655,355 630,265 L595,280 C610,350 580,440 525,480 Z" fill="#e11d48" opacity="0.65"/>
      <!-- Right Atrium (RA) -->
      <path d="M355,215 C325,245 325,310 365,335 L445,335 L445,215 Z" fill="#93c5fd" stroke="#1e40af" stroke-width="2.5"/>
      <!-- Fossa Ovalis on Interatrial septum -->
      <ellipse cx="430" cy="275" rx="12" ry="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="3,2"/>
      <!-- Left Atrium (LA) & 4 Pulmonary Veins -->
      <path d="M645,215 L690,195 M650,245 L695,235" stroke="#dc2626" stroke-width="10" stroke-linecap="round"/>
      <path d="M530,205 L625,215 C645,245 635,295 605,320 L525,320 Z" fill="#fca5a5" stroke="#991b1b" stroke-width="2.5"/>
      <!-- Right Ventricle (RV) -->
      <path d="M368,350 C348,400 385,455 475,495 L485,350 Z" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/>
      <!-- Left Ventricle (LV) -->
      <path d="M515,335 L505,495 C565,465 615,390 600,335 Z" fill="#f87171" stroke="#991b1b" stroke-width="3.5"/>
      <!-- Interventricular Septum -->
      <path d="M485,335 L515,335 L508,505 L475,495 Z" fill="#be123c" stroke="#881337" stroke-width="2"/>
      <!-- Tricuspid Valve + Chordae Tendineae + Papillary Muscle -->
      <path d="M380,335 L410,365 M440,335 L420,365" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
      <line x1="410" y1="365" x2="405" y2="425" stroke="#f8fafc" stroke-width="1.8" stroke-dasharray="2,2"/>
      <line x1="420" y1="365" x2="435" y2="435" stroke="#f8fafc" stroke-width="1.8" stroke-dasharray="2,2"/>
      <polygon points="395,450 405,420 418,455" fill="#9f1239"/>
      <polygon points="425,465 435,432 448,472" fill="#9f1239"/>
      <!-- Mitral (Bicuspid) Valve + Chordae Tendineae -->
      <path d="M535,325 L555,360 M595,325 L572,360" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="555" y1="360" x2="545" y2="425" stroke="#fff1f2" stroke-width="2"/>
      <line x1="572" y1="360" x2="578" y2="420" stroke="#fff1f2" stroke-width="2"/>
      <!-- Aortic & Pulmonary Semilunar Valves -->
      <circle cx="525" cy="235" r="10" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="483" cy="255" r="10" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    `,
    pins: [
      { pin: 'A', x: 395, y: 155, labelX: 280, labelY: 135, term: 'Superior Vena Cava (SVC)', thaiName: 'หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA', color: '#2563eb' },
      { pin: 'B', x: 430, y: 275, labelX: 280, labelY: 235, term: 'Fossa Ovalis (Interatrial Septum)', thaiName: 'รอยบุ๋มรูปไข่ (ซาก Foramen ovale)', color: '#0284c7' },
      { pin: 'C', x: 415, y: 365, labelX: 280, labelY: 345, term: 'Tricuspid Valve & Chordae Tendineae', thaiName: 'ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ', color: '#0d9488' },
      { pin: 'D', x: 496, y: 435, labelX: 280, labelY: 455, term: 'Interventricular Septum', thaiName: 'ผนังกั้นหัวใจห้องล่างซ้าย-ขวา', color: '#e11d48' },
      { pin: 'E', x: 565, y: 355, labelX: 715, labelY: 335, term: 'Bicuspid (Mitral) Valve', thaiName: 'ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV', color: '#dc2626' },
      { pin: 'F', x: 615, y: 395, labelX: 715, labelY: 445, term: 'Left Ventricular Myocardium', thaiName: 'กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)', color: '#9f1239' }
    ]
  },

  // =========================================================================
  // 2. CARDIAC CONDUCTION SYSTEM & ECG
  // =========================================================================
  {
    id: 'conduction_system',
    title: 'Cardiac Conduction System & Electrocardiogram (ECG) Correlation',
    subtitle: 'ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ',
    systemBadge: 'Cardiovascular System',
    graphic: `
      <!-- Heart Silhouette -->
      <path d="M260,180 C200,230 205,360 280,440 L450,520 C540,470 590,350 560,220 C530,165 440,160 390,180 Z" fill="#ffe4e6" stroke="#be123c" stroke-width="3.5" filter="url(#dropShadow)"/>
      <path d="M395,310 L415,310 L410,490 L385,480 Z" fill="#fda4af" stroke="#e11d48" stroke-width="2"/>
      <!-- SA Node (Glowing Gold) -->
      <circle cx="285" cy="225" r="16" fill="#facc15" stroke="#b45309" stroke-width="3"/>
      <!-- Internodal Pathways -->
      <path d="M285,225 Q335,230 375,295" fill="none" stroke="#eab308" stroke-width="3.5" stroke-dasharray="6,4"/>
      <path d="M285,225 Q310,275 375,295" fill="none" stroke="#eab308" stroke-width="3.5" stroke-dasharray="6,4"/>
      <!-- AV Node -->
      <circle cx="382" cy="300" r="13" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>
      <!-- Bundle of His -->
      <path d="M382,313 L398,350" fill="none" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
      <!-- Right & Left Bundle Branches -->
      <path d="M398,350 L385,465 Q330,445 305,380" fill="none" stroke="#f97316" stroke-width="4"/>
      <path d="M398,350 L415,470 Q495,435 515,345" fill="none" stroke="#f97316" stroke-width="4"/>
      <!-- Purkinje Fibers arborization -->
      <path d="M320,410 L295,400 M345,445 L325,455 M485,415 L515,410 M465,450 L495,465" stroke="#ea580c" stroke-width="3"/>

      <!-- ECG Panel on Right -->
      <rect x="615" y="145" width="340" height="230" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2.5" filter="url(#dropShadow)"/>
      <text x="785" y="175" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">NORMAL SINUS RHYTHM (ECG)</text>
      <!-- ECG Trace -->
      <path d="M635,285 L665,285 Q680,255 695,285 L715,285 L725,305 L742,190 L758,330 L770,285 L810,285 Q835,240 860,285 L925,285" fill="none" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="680" y="250" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#fde047" text-anchor="middle">P</text>
      <text x="742" y="180" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#f87171" text-anchor="middle">QRS</text>
      <text x="835" y="235" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#38bdf8" text-anchor="middle">T</text>
    `,
    pins: [
      { pin: 'A', x: 285, y: 225, labelX: 265, labelY: 120, term: 'Sinoatrial (SA) Node', thaiName: 'ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)', color: '#d97706' },
      { pin: 'B', x: 382, y: 300, labelX: 265, labelY: 295, term: 'Atrioventricular (AV) Node', thaiName: 'ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)', color: '#ea580c' },
      { pin: 'C', x: 392, y: 335, labelX: 265, labelY: 395, term: 'AV Bundle (Bundle of His)', thaiName: 'ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton', color: '#dc2626' },
      { pin: 'D', x: 495, y: 410, labelX: 670, labelY: 465, term: 'Purkinje Fibers', thaiName: 'เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)', color: '#e11d48' },
      { pin: 'E', x: 680, y: 270, labelX: 690, labelY: 110, term: 'P Wave (Atrial Depolarization)', thaiName: 'คลื่นกระตุ้นการหดตัวของหัวใจห้องบน', color: '#16a34a' },
      { pin: 'F', x: 742, y: 215, labelX: 690, labelY: 405, term: 'QRS Complex (Ventricular Depolarization)', thaiName: 'คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง', color: '#0284c7' }
    ]
  },

  // =========================================================================
  // 3. CORONARY CIRCULATION
  // =========================================================================
  {
    id: 'coronary_vessels',
    title: 'Coronary Arteries & Cardiac Venous Drainage',
    subtitle: 'หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ',
    systemBadge: 'Cardiovascular System',
    graphic: `
      <!-- Heart Base & Surface -->
      <path d="M350,175 C295,225 300,375 375,460 L535,535 C635,480 685,355 650,220 C620,170 530,160 470,175 Z" fill="#fecdd3" stroke="#9f1239" stroke-width="3.5" filter="url(#dropShadow)"/>
      <!-- Ascending Aorta Root -->
      <path d="M465,110 L465,215 C465,235 535,235 535,215 L535,110 Z" fill="url(#oxyBlood)" stroke="#7f1d1d" stroke-width="3"/>
      <!-- Right Coronary Artery (RCA) & Marginal Branch -->
      <path d="M465,205 C405,215 355,255 345,335 C340,385 370,435 430,465" fill="none" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
      <!-- Left Coronary Artery (LCA) main stem -->
      <path d="M535,200 L585,215" fill="none" stroke="#dc2626" stroke-width="7" stroke-linecap="round"/>
      <!-- Circumflex Artery (LCx) -->
      <path d="M585,215 C630,230 655,270 645,325" fill="none" stroke="#dc2626" stroke-width="5.5" stroke-linecap="round"/>
      <!-- Anterior Interventricular Artery (LAD - Widow Maker) -->
      <path d="M585,215 C555,280 540,395 525,515" fill="none" stroke="#b91c1c" stroke-width="6.5" stroke-linecap="round"/>
      <path d="M560,310 L605,360 M545,390 L585,435" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>
      <!-- Great Cardiac Vein & Coronary Sinus (Dashed Blue) -->
      <path d="M510,505 C525,390 540,285 575,230 C615,245 620,295 580,315 L445,315" fill="none" stroke="#2563eb" stroke-width="5" stroke-dasharray="8,4" stroke-linecap="round"/>
      <!-- Ischemic Zone Highlight at Apex/Anterior Wall -->
      <ellipse cx="550" cy="445" rx="45" ry="35" fill="#7f1d1d" fill-opacity="0.28" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
    `,
    pins: [
      { pin: 'A', x: 465, y: 195, labelX: 280, labelY: 165, term: 'Aortic Sinus (Origin of Coronary a.)', thaiName: 'จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta', color: '#dc2626' },
      { pin: 'B', x: 365, y: 270, labelX: 280, labelY: 275, term: 'Right Coronary Artery (RCA)', thaiName: 'หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)', color: '#e11d48' },
      { pin: 'C', x: 368, y: 415, labelX: 280, labelY: 415, term: 'Right Marginal Artery', thaiName: 'แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV', color: '#be123c' },
      { pin: 'D', x: 552, y: 345, labelX: 715, labelY: 365, term: 'Anterior Interventricular Artery (LAD)', thaiName: 'หลอดเลือด LAD ("Widow maker" เลี้ยงผนังหน้า LV)', color: '#991b1b' },
      { pin: 'E', x: 638, y: 265, labelX: 715, labelY: 225, term: 'Circumflex Artery (LCx)', thaiName: 'หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย', color: '#d97706' },
      { pin: 'F', x: 485, y: 315, labelX: 715, labelY: 475, term: 'Coronary Sinus & Great Cardiac Vein', thaiName: 'แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium', color: '#2563eb' }
    ]
  },

  // =========================================================================
  // 4. BLOOD CELLS & VESSEL HISTOLOGY
  // =========================================================================
  {
    id: 'blood_cells_vessels',
    title: 'Hematology (Formed Elements) & Blood Vessel Wall Layers',
    subtitle: 'สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น',
    systemBadge: 'Cardiovascular System',
    graphic: `
      <!-- Left Panel: Blood Smear Cells -->
      <rect x="60" y="95" width="420" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="270" y="125" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">PERIPHERAL BLOOD SMEAR</text>
      <!-- RBC Biconcave -->
      <circle cx="155" cy="195" r="34" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/>
      <circle cx="155" cy="195" r="15" fill="#fca5a5" opacity="0.8"/>
      <!-- Neutrophil (3-5 lobes) -->
      <circle cx="345" cy="195" r="38" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
      <circle cx="330" cy="185" r="10" fill="#6b21a8"/><circle cx="352" cy="180" r="10" fill="#6b21a8"/><circle cx="360" cy="202" r="10" fill="#6b21a8"/><circle cx="335" cy="210" r="9" fill="#6b21a8"/>
      <path d="M330,185 L352,180 L360,202 L335,210" fill="none" stroke="#6b21a8" stroke-width="3"/>
      <!-- Eosinophil (Bilobed + red granules) -->
      <circle cx="155" cy="325" r="38" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <circle cx="140" cy="325" r="13" fill="#581c87"/><circle cx="170" cy="325" r="13" fill="#581c87"/>
      <path d="M140,325 Q155,305 170,325" fill="none" stroke="#581c87" stroke-width="4"/>
      <!-- Monocyte (Kidney-shaped nucleus) -->
      <circle cx="345" cy="325" r="44" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
      <path d="M325,310 C315,330 330,350 355,345 C370,340 370,315 355,305 C345,300 345,325 335,320 Z" fill="#312e81"/>
      <!-- Megakaryocyte & Platelets -->
      <g fill="#7c3aed">
        <polygon points="240,450 252,445 248,458"/><polygon points="265,460 278,455 272,468"/><polygon points="250,475 262,472 258,485"/>
      </g>

      <!-- Right Panel: Blood Vessel Tunics -->
      <rect x="520" y="95" width="420" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="730" y="125" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">ARTERIAL WALL HISTOLOGY (3 TUNICS)</text>
      <!-- Concentric Tunics -->
      <circle cx="730" cy="325" r="145" fill="#fde68a" stroke="#ca8a04" stroke-width="3"/>
      <circle cx="730" cy="325" r="105" fill="#f87171" stroke="#b91c1c" stroke-width="4"/>
      <circle cx="730" cy="325" r="58" fill="#fecdd3" stroke="#991b1b" stroke-width="3" stroke-dasharray="6,3"/>
      <circle cx="730" cy="325" r="42" fill="#7f1d1d"/>
    `,
    pins: [
      { pin: 'A', x: 155, y: 195, labelX: 280, labelY: 155, term: 'Erythrocyte (Biconcave RBC)', thaiName: 'เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส', color: '#dc2626' },
      { pin: 'B', x: 360, y: 195, labelX: 280, labelY: 255, term: 'Neutrophil (3-5 Lobed PMN)', thaiName: 'นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก', color: '#9333ea' },
      { pin: 'C', x: 155, y: 325, labelX: 280, labelY: 385, term: 'Eosinophil (Bilobed Nucleus)', thaiName: 'อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)', color: '#ea580c' },
      { pin: 'D', x: 345, y: 325, labelX: 280, labelY: 475, term: 'Monocyte (Kidney-shaped Nucleus)', thaiName: 'โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)', color: '#4f46e5' },
      { pin: 'E', x: 730, y: 272, labelX: 715, labelY: 185, term: 'Tunica Intima (Endothelium)', thaiName: 'ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium', color: '#e11d48' },
      { pin: 'F', x: 810, y: 325, labelX: 715, labelY: 465, term: 'Tunica Media (Smooth Muscle & Elastin)', thaiName: 'ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)', color: '#b91c1c' }
    ]
  },

  // =========================================================================
  // 5. LYMPHATIC SYSTEM, LYMPH NODE & SPLEEN
  // =========================================================================
  {
    id: 'lymphatic_system',
    title: 'Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage',
    subtitle: 'โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่',
    systemBadge: 'Lymphatic System',
    graphic: `
      <!-- Bean-shaped Lymph Node -->
      <path d="M220,175 C135,175 125,445 220,455 C285,460 325,400 305,345 C290,315 290,295 305,265 C325,215 285,175 220,175 Z" fill="#a7f3d0" stroke="#047857" stroke-width="4" filter="url(#dropShadow)"/>
      <!-- Afferent Lymphatic Vessels (Convex side) -->
      <path d="M95,215 L155,235 M85,315 L142,315 M95,415 L155,395" stroke="#10b981" stroke-width="8" stroke-linecap="round"/>
      <!-- Germinal Centers (Cortex Follicles) -->
      <circle cx="205" cy="235" r="26" fill="#059669" stroke="#064e3b" stroke-width="2"/>
      <circle cx="205" cy="235" r="14" fill="#6ee7b7"/>
      <circle cx="195" cy="315" r="26" fill="#059669" stroke="#064e3b" stroke-width="2"/>
      <circle cx="195" cy="315" r="14" fill="#6ee7b7"/>
      <circle cx="205" cy="395" r="26" fill="#059669" stroke="#064e3b" stroke-width="2"/>
      <circle cx="205" cy="395" r="14" fill="#6ee7b7"/>
      <!-- Efferent Vessel at Hilum -->
      <path d="M298,305 L385,295 M298,330 L385,345" stroke="#047857" stroke-width="8" stroke-linecap="round"/>

      <!-- Right Side: Spleen & Thoracic Duct Diagram -->
      <rect x="490" y="110" width="445" height="200" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="712" y="138" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#881337" text-anchor="middle">SPLEEN HISTOLOGY (WHITE PULP vs RED PULP)</text>
      <ellipse cx="712" cy="215" rx="165" ry="65" fill="#9f1239" stroke="#4c0519" stroke-width="3"/>
      <circle cx="645" cy="215" r="28" fill="#c084fc" stroke="#ffffff" stroke-width="2"/>
      <circle cx="645" cy="215" r="7" fill="#ef4444"/>
      <circle cx="765" cy="215" r="28" fill="#c084fc" stroke="#ffffff" stroke-width="2"/>
      <circle cx="765" cy="215" r="7" fill="#ef4444"/>

      <!-- Cisterna Chyli & Thoracic Duct -->
      <rect x="490" y="335" width="445" height="195" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <path d="M710,505 C690,485 690,455 710,445 L710,365 L645,365" fill="none" stroke="#059669" stroke-width="9" stroke-linecap="round"/>
      <ellipse cx="710" cy="480" rx="22" ry="30" fill="#10b981" stroke="#065f46" stroke-width="2.5"/>
    `,
    pins: [
      { pin: 'A', x: 115, y: 222, labelX: 270, labelY: 125, term: 'Afferent Lymphatic Vessels', thaiName: 'ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)', color: '#059669' },
      { pin: 'B', x: 205, y: 235, labelX: 270, labelY: 225, term: 'Germinal Center in Cortex', thaiName: 'ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex', color: '#0d9488' },
      { pin: 'C', x: 345, y: 300, labelX: 270, labelY: 475, term: 'Efferent Lymphatic Vessel at Hilum', thaiName: 'ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)', color: '#047857' },
      { pin: 'D', x: 645, y: 215, labelX: 715, labelY: 165, term: 'Splenic White Pulp (Lymphocytes)', thaiName: 'เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)', color: '#9333ea' },
      { pin: 'E', x: 825, y: 215, labelX: 715, labelY: 285, term: 'Splenic Red Pulp (Cords of Billroth)', thaiName: 'เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)', color: '#be123c' },
      { pin: 'F', x: 710, y: 480, labelX: 715, labelY: 465, term: 'Cisterna Chyli & Thoracic Duct', thaiName: 'กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct', color: '#10b981' }
    ]
  },

  // =========================================================================
  // 6. GI TRACT WALL HISTOLOGY (4 LAYERS) & PLEXUSES
  // =========================================================================
  {
    id: 'gi_wall_peritoneum',
    title: 'Four Histological Layers of the Gastrointestinal Tract Wall',
    subtitle: 'โครงสร้างเนื้อเยื่อผนังทางเดินอาหาร 4 ชั้น และระบบประสาทลำไส้ (ENS)',
    systemBadge: 'Digestive System',
    graphic: `
      <!-- Cross section slabs of GI Wall from Inside Lumen (Top) to Outside Serosa (Bottom) -->
      <!-- Lumen -->
      <rect x="180" y="95" width="640" height="55" rx="8" fill="#fef9c3" stroke="#fde047" stroke-width="2"/>
      <text x="500" y="128" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="#854d0e" text-anchor="middle">GASTROINTESTINAL LUMEN (โพรงทางเดินอาหาร)</text>
      <!-- Layer 1: Mucosa (Epithelium + Lamina Propria + Muscularis Mucosae) -->
      <path d="M180,150 Q210,120 240,150 Q270,180 300,150 Q330,120 360,150 Q390,180 420,150 Q450,120 480,150 Q510,180 540,150 Q570,120 600,150 Q630,180 660,150 Q690,120 720,150 Q750,180 780,150 L820,150 L820,245 L180,245 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
      <rect x="180" y="232" width="640" height="13" fill="#ec4899"/>
      <!-- Layer 2: Submucosa + Meissner's Plexus + Vessels -->
      <rect x="180" y="245" width="640" height="95" fill="#fde68a" stroke="#d97706" stroke-width="3"/>
      <circle cx="320" cy="292" r="14" fill="#ef4444"/><circle cx="355" cy="292" r="14" fill="#3b82f6"/>
      <!-- Submucosal (Meissner's) Plexus nodes -->
      <circle cx="510" cy="290" r="13" fill="#facc15" stroke="#713f12" stroke-width="2.5"/>
      <circle cx="640" cy="290" r="13" fill="#facc15" stroke="#713f12" stroke-width="2.5"/>
      <!-- Layer 3: Muscularis Externa (Inner Circular + Myenteric Plexus + Outer Longitudinal) -->
      <rect x="180" y="340" width="640" height="70" fill="#fca5a5" stroke="#dc2626" stroke-width="3"/>
      <!-- Myenteric (Auerbach's) Plexus between circular & longitudinal -->
      <circle cx="430" cy="410" r="15" fill="#fde047" stroke="#b45309" stroke-width="3"/>
      <circle cx="590" cy="410" r="15" fill="#fde047" stroke="#b45309" stroke-width="3"/>
      <rect x="180" y="410" width="640" height="65" fill="#f87171" stroke="#991b1b" stroke-width="3"/>
      <!-- Layer 4: Serosa / Visceral Peritoneum -->
      <rect x="180" y="475" width="640" height="38" rx="6" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
    `,
    pins: [
      { pin: 'A', x: 250, y: 185, labelX: 280, labelY: 185, term: 'Mucosa (Epithelium & Lamina Propria)', thaiName: 'ชั้นเยื่อเมือกด้านในสุด (ดูดซึมและหลั่งเมือก)', color: '#db2777' },
      { pin: 'B', x: 250, y: 238, labelX: 280, labelY: 250, term: 'Muscularis Mucosae', thaiName: 'กล้ามเนื้อเรียบบางๆ แยก Mucosa กับ Submucosa', color: '#be185d' },
      { pin: 'C', x: 510, y: 290, labelX: 715, labelY: 270, term: 'Submucosa & Meissner\'s Plexus', thaiName: 'ชั้นใต้เยื่อเมือกและร่างแหประสาทควบคุมการหลั่งสาร', color: '#d97706' },
      { pin: 'D', x: 280, y: 375, labelX: 280, labelY: 375, term: 'Muscularis Externa (Inner Circular)', thaiName: 'ชั้นกล้ามเนื้อเรียบวงใน (หดตัวบีบรูดลูเมน)', color: '#dc2626' },
      { pin: 'E', x: 590, y: 410, labelX: 715, labelY: 405, term: 'Myenteric (Auerbach\'s) Plexus', thaiName: 'ร่างแหประสาทคั่นระหว่างกล้ามเนื้อ 2 ชั้น ควบคุม Peristalsis', color: '#b45309' },
      { pin: 'F', x: 500, y: 494, labelX: 715, labelY: 505, term: 'Serosa (Visceral Peritoneum) / Adventitia', thaiName: 'ผนังชั้นนอกสุดห่อหุ้มทางเดินอาหาร', color: '#0284c7' }
    ]
  },

  // =========================================================================
  // 7. ORAL CAVITY, TONGUE PAPILLAE & SALIVARY GLANDS
  // =========================================================================
  {
    id: 'oral_salivary_esophagus',
    title: 'Major Salivary Glands & Dorsal Surface of the Tongue',
    subtitle: 'ต่อมน้ำลายหลัก 3 คู่ (Parotid, Submandibular, Sublingual) และปุ่มลิ้น',
    systemBadge: 'Digestive System',
    graphic: `
      <!-- Left Box: 3 Salivary Glands -->
      <rect x="65" y="95" width="420" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="275" y="125" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">THREE PAIRS OF SALIVARY GLANDS</text>
      <!-- Jaw & Oral Profile -->
      <path d="M140,180 C140,360 220,440 380,430" fill="none" stroke="#94a3b8" stroke-width="14" stroke-linecap="round"/>
      <!-- Parotid Gland & Stensen's Duct -->
      <path d="M155,195 C125,215 130,305 175,320 C215,325 225,235 190,195 Z" fill="#fde047" stroke="#ca8a04" stroke-width="3"/>
      <path d="M205,255 L325,255" fill="none" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
      <!-- Submandibular Gland & Wharton's Duct -->
      <ellipse cx="235" cy="405" rx="48" ry="30" fill="#facc15" stroke="#b45309" stroke-width="3"/>
      <path d="M265,390 L365,345" fill="none" stroke="#0d9488" stroke-width="4" stroke-linecap="round"/>
      <!-- Sublingual Gland & Ducts of Rivinus -->
      <ellipse cx="355" cy="365" rx="36" ry="18" fill="#fef08a" stroke="#a16207" stroke-width="2.5"/>

      <!-- Right Box: Tongue Dorsum & Papillae -->
      <rect x="515" y="95" width="420" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="725" y="125" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">DORSUM OF TONGUE &amp; PAPILLAE</text>
      <!-- Tongue Shape -->
      <path d="M615,175 L835,175 L845,380 C845,495 605,495 605,380 Z" fill="#fda4af" stroke="#be123c" stroke-width="3.5"/>
      <!-- Sulcus Terminalis (V-shaped groove) & Foramen Cecum -->
      <path d="M610,285 L725,335 L840,285" fill="none" stroke="#881337" stroke-width="4"/>
      <circle cx="725" cy="335" r="7" fill="#4c0519"/>
      <!-- Circumvallate Papillae (V-row) -->
      <g fill="#e11d48" stroke="#ffffff" stroke-width="2">
        <circle cx="635" cy="272" r="10"/><circle cx="665" cy="285" r="10"/><circle cx="695" cy="298" r="10"/>
        <circle cx="725" cy="310" r="11"/>
        <circle cx="755" cy="298" r="10"/><circle cx="785" cy="285" r="10"/><circle cx="815" cy="272" r="10"/>
      </g>
      <!-- Filiform & Fungiform Papillae on Anterior 2/3 -->
      <g fill="#be123c">
        <circle cx="665" cy="390" r="5"/><circle cx="725" cy="410" r="4"/><circle cx="780" cy="385" r="5"/>
        <circle cx="690" cy="445" r="6"/><circle cx="760" cy="445" r="6"/>
      </g>
    `,
    pins: [
      { pin: 'A', x: 175, y: 245, labelX: 280, labelY: 195, term: 'Parotid Gland & Stensen\'s Duct', thaiName: 'ต่อมน้ำลายพารอติด (ใหญ่สุด ผลิตน้ำลายใส เปิดตรงข้ามกรามบนซี่ 2)', color: '#ca8a04' },
      { pin: 'B', x: 235, y: 405, labelX: 280, labelY: 425, term: 'Submandibular Gland & Wharton\'s Duct', thaiName: 'ต่อมน้ำลายใต้ขากรรไกร (ผลิตน้ำลาย 70% เปิดใต้โคนลิ้น)', color: '#b45309' },
      { pin: 'C', x: 355, y: 365, labelX: 280, labelY: 325, term: 'Sublingual Gland (Ducts of Rivinus)', thaiName: 'ต่อมน้ำลายใต้ลิ้น (เล็กสุด ผลิตน้ำลายเมือกข้น)', color: '#0d9488' },
      { pin: 'D', x: 695, y: 298, labelX: 715, labelY: 235, term: 'Circumvallate Papillae (Von Ebner\'s glands)', thaiName: 'ปุ่มลิ้นขนาดใหญ่เรียงรูปตัว V หน้า Sulcus terminalis', color: '#e11d48' },
      { pin: 'E', x: 725, y: 335, labelX: 715, labelY: 345, term: 'Sulcus Terminalis & Foramen Cecum', thaiName: 'ร่องตัว V แบ่งลิ้นส่วนหน้า 2/3 กับส่วนหลัง 1/3', color: '#881337' },
      { pin: 'F', x: 725, y: 410, labelX: 715, labelY: 465, term: 'Anterior 2/3 Tongue (Filiform/Fungiform)', thaiName: 'ลิ้น 2/3 ส่วนหน้า (Filiform มากสุดไม่มีตุ่มรับรส / รับรสด้วย CN VII)', color: '#be123c' }
    ]
  },

  // =========================================================================
  // 8. STOMACH REGIONS, MUSCLE LAYERS & GASTRIC GLAND CELLS
  // =========================================================================
  {
    id: 'stomach_anatomy',
    title: 'Stomach Regions, Three Muscular Layers & Gastric Gland Cells',
    subtitle: 'กายวิภาคกระเพาะอาหาร 4 ส่วน กล้ามเนื้อ 3 ชั้น และเซลล์ต่อมกระเพาะอาหาร',
    systemBadge: 'Digestive System',
    graphic: `
      <!-- Stomach J-Shape -->
      <path d="M275,130 L275,195 C230,145 135,165 130,265 C125,385 215,495 365,485 L455,445 L455,385 L375,405 C295,405 275,325 295,235 L315,130 Z" fill="#fda4af" stroke="#9f1239" stroke-width="4" filter="url(#dropShadow)"/>
      <!-- Gastric Rugae folds inside -->
      <path d="M175,245 C175,345 245,445 360,445 M210,255 C210,335 265,415 355,420" fill="none" stroke="#be123c" stroke-width="3.5" stroke-dasharray="10,5"/>
      <!-- Pyloric Sphincter -->
      <ellipse cx="450" cy="415" rx="14" ry="34" fill="#9f1239" stroke="#ffffff" stroke-width="2"/>

      <!-- Right Side: Gastric Pit & Gland Histology -->
      <rect x="545" y="105" width="395" height="430" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="742" y="135" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">GASTRIC GLAND SECRETORY CELLS</text>
      <!-- Tubular Gastric Gland -->
      <path d="M645,165 L695,165 L695,475 C695,505 785,505 785,475 L785,165 L835,165" fill="none" stroke="#f43f5e" stroke-width="18" stroke-linecap="round"/>
      <!-- Parietal Cells (Pink triangular) -->
      <circle cx="685" cy="275" r="20" fill="#fb7185" stroke="#881337" stroke-width="2.5"/>
      <circle cx="795" cy="295" r="20" fill="#fb7185" stroke="#881337" stroke-width="2.5"/>
      <!-- Chief Cells (Purple basal) -->
      <circle cx="690" cy="390" r="19" fill="#a855f7" stroke="#4c1d95" stroke-width="2.5"/>
      <circle cx="790" cy="390" r="19" fill="#a855f7" stroke="#4c1d95" stroke-width="2.5"/>
      <!-- Enteroendocrine G Cell (Base) -->
      <circle cx="740" cy="495" r="20" fill="#eab308" stroke="#713f12" stroke-width="2.5"/>
    `,
    pins: [
      { pin: 'A', x: 185, y: 195, labelX: 280, labelY: 135, term: 'Fundus of Stomach', thaiName: 'กระเปาะส่วนบนสุดโค้งอยู่เหนือระดับ Cardia', color: '#e11d48' },
      { pin: 'B', x: 235, y: 385, labelX: 280, labelY: 365, term: 'Gastric Rugae & 3 Muscle Layers', thaiName: 'รอยพับเยื่อเมือก Rugae และกล้ามเนื้อเรียบ 3 ชั้น (มี Inner oblique)', color: '#be123c' },
      { pin: 'C', x: 450, y: 415, labelX: 280, labelY: 485, term: 'Pyloric Sphincter', thaiName: 'หูรูดไพโลริก (ควบคุมการปล่อย Chyme ลงสู่ Duodenum)', color: '#881337' },
      { pin: 'D', x: 685, y: 275, labelX: 715, labelY: 235, term: 'Parietal (Oxyntic) Cells', thaiName: 'หลั่งกรด HCl และ Intrinsic Factor (ช่วยดูดซึม B12)', color: '#db2777' },
      { pin: 'E', x: 690, y: 390, labelX: 715, labelY: 365, term: 'Chief (Zymogenic) Cells', thaiName: 'หลั่งเอนไซม์ตั้งต้น Pepsinogen และ Gastric lipase', color: '#7e22ce' },
      { pin: 'F', x: 740, y: 495, labelX: 715, labelY: 485, term: 'Enteroendocrine G Cells', thaiName: 'หลั่งฮอร์โมน Gastrin เข้าสู่กระแสเลือดไปกระตุ้นการหลั่งกรด', color: '#ca8a04' }
    ]
  },

  // =========================================================================
  // 9. SMALL & LARGE INTESTINE SPECIALIZATIONS
  // =========================================================================
  {
    id: 'small_large_intestine',
    title: 'Small Intestine Villi/Submucosa & Large Intestine Anatomy',
    subtitle: 'เปรียบเทียบลำไส้เล็ก (Villi, Lacteals, Peyer\'s patches) และลำไส้ใหญ่ (Taeniae coli, Appendix)',
    systemBadge: 'Digestive System',
    graphic: `
      <!-- Left Box: Intestinal Villus & Submucosal Features -->
      <rect x="60" y="95" width="420" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="270" y="125" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">SMALL INTESTINE VILLUS &amp; SUBMUCOSA</text>
      <!-- Finger-like Villi -->
      <path d="M125,380 L125,210 C125,155 215,155 215,210 L215,380 L285,380 L285,210 C285,155 375,155 375,210 L375,380" fill="#fbcfe8" stroke="#be185d" stroke-width="3.5"/>
      <!-- Central Green Lacteal inside Villus -->
      <path d="M170,385 L170,205 M330,385 L330,205" stroke="#10b981" stroke-width="12" stroke-linecap="round"/>
      <!-- Brunner's Glands (Duodenum) vs Peyer's Patches (Ileum) in Submucosa -->
      <rect x="95" y="385" width="350" height="125" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <circle cx="165" cy="445" r="28" fill="#fde047" stroke="#ca8a04" stroke-width="2.5"/>
      <circle cx="335" cy="445" r="32" fill="#c084fc" stroke="#6b21a8" stroke-width="2.5"/>

      <!-- Right Box: Large Intestine Frame, Cecum & Appendix -->
      <rect x="515" y="95" width="425" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="727" y="125" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">LARGE INTESTINE (COLON, CECUM &amp; APPENDIX)</text>
      <!-- Colon Frame with Haustra -->
      <path d="M610,435 L610,235 L845,235 L845,425 L745,425 L745,505" fill="none" stroke="#fb7185" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Taeniae Coli (Longitudinal ribbon band) -->
      <path d="M610,445 L610,235 L845,235 L845,425 L745,425" fill="none" stroke="#fef08a" stroke-width="6"/>
      <!-- Vermiform Appendix hanging from Cecum -->
      <path d="M595,455 C575,485 590,515 620,515" fill="none" stroke="#e11d48" stroke-width="12" stroke-linecap="round"/>
      <!-- Ileocecal junction -->
      <path d="M675,415 L625,415" stroke="#f43f5e" stroke-width="20"/>
    `,
    pins: [
      { pin: 'A', x: 170, y: 235, labelX: 270, labelY: 175, term: 'Villus & Central Lacteal', thaiName: 'วิลไลและหลอดน้ำเหลือง Lacteal (ดูดซึมไขมัน Chylomicrons)', color: '#059669' },
      { pin: 'B', x: 165, y: 445, labelX: 270, labelY: 355, term: 'Brunner\'s Glands (Duodenum Submucosa)', thaiName: 'ต่อมบรุนเนอร์ในชั้น Submucosa ของ Duodenum (หลั่งเมือกด่าง)', color: '#d97706' },
      { pin: 'C', x: 335, y: 445, labelX: 270, labelY: 495, term: 'Peyer\'s Patches (Ileum Submucosa)', thaiName: 'กลุ่มเนื้อเยื่อน้ำเหลือง MALT หนาแน่นในลำไส้เล็กส่วน Ileum', color: '#7e22ce' },
      { pin: 'D', x: 725, y: 235, labelX: 715, labelY: 180, term: 'Taeniae Coli & Haustra', thaiName: 'แถบกล้ามเนื้อแนวยาว 3 แถบ ดึงให้ลำไส้ใหญ่โป่งเป็นกระพุ้ง Haustra', color: '#ca8a04' },
      { pin: 'E', x: 635, y: 415, labelX: 715, labelY: 345, term: 'Ileocecal Valve & Cecum', thaiName: 'ลิ้นกั้นระหว่าง Ileum กับ Cecum ป้องกันแบคทีเรียไหลย้อนกลับ', color: '#e11d48' },
      { pin: 'F', x: 595, y: 495, labelX: 715, labelY: 485, term: 'Vermiform Appendix (McBurney\'s Point)', thaiName: 'ไส้ติ่ง (โคนอยู่จุดรวม Taeniae coli ตรงกับ McBurney\'s point)', color: '#be123c' }
    ]
  },

  // =========================================================================
  // 10. HEPATOBILIARY SYSTEM, PANCREAS & DUODENAL PAPILLA
  // =========================================================================
  {
    id: 'hepatobiliary_pancreas',
    title: 'Liver, Biliary Tree, Gallbladder, Pancreas & Duodenum',
    subtitle: 'โครงสร้างตับ ทางเดินน้ำดี ถุงน้ำดี ตับอ่อน และกระเปาะ Ampulla of Vater',
    systemBadge: 'Digestive System',
    graphic: `
      <!-- Liver Lobes Top -->
      <path d="M180,195 C180,105 385,95 565,125 L495,235 C375,235 255,245 180,195 Z" fill="url(#liverBrown)" stroke="#451a03" stroke-width="3.5" filter="url(#dropShadow)"/>
      <!-- Gallbladder (Green) -->
      <ellipse cx="285" cy="255" rx="45" ry="26" transform="rotate(-18 285 255)" fill="#15803d" stroke="#052e16" stroke-width="3"/>
      <!-- Biliary Tree: Right & Left Hepatic -> Common Hepatic + Cystic -> CBD -->
      <path d="M375,180 L410,215 M445,180 L410,215 L410,265" fill="none" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>
      <path d="M328,245 L410,265 L410,415" fill="none" stroke="#15803d" stroke-width="7" stroke-linecap="round"/>
      <!-- Duodenum C-Loop -->
      <path d="M465,280 C345,280 345,495 475,495" fill="none" stroke="#fda4af" stroke-width="46" stroke-linecap="round"/>
      <path d="M465,280 C345,280 345,495 475,495" fill="none" stroke="#fecdd3" stroke-width="36" stroke-linecap="round"/>
      <!-- Pancreas (Head in C-loop, Body, Tail towards Spleen) -->
      <path d="M445,355 C415,355 415,435 455,435 L735,385 C775,375 775,335 735,335 Z" fill="#fde047" stroke="#ca8a04" stroke-width="3" filter="url(#dropShadow)"/>
      <!-- Main Pancreatic Duct (Wirsung) -->
      <path d="M715,365 L410,415" fill="none" stroke="#eab308" stroke-width="5" stroke-dasharray="6,3"/>
      <!-- Hepatopancreatic Ampulla (Vater) & Sphincter of Oddi -->
      <circle cx="395" cy="415" r="14" fill="#dc2626" stroke="#ffffff" stroke-width="2.5"/>
    `,
    pins: [
      { pin: 'A', x: 285, y: 255, labelX: 250, labelY: 315, term: 'Gallbladder & Cystic Duct', thaiName: 'ถุงน้ำดี (กักเก็บและทำให้น้ำดีเข้มข้น 5-10 เท่า บีบตัวด้วย CCK)', color: '#15803d' },
      { pin: 'B', x: 410, y: 225, labelX: 670, labelY: 165, term: 'Common Hepatic Duct', thaiName: 'ท่อน้ำดีตับร่วม (เกิดจาก Right และ Left hepatic ducts รวมกัน)', color: '#16a34a' },
      { pin: 'C', x: 410, y: 315, labelX: 670, labelY: 250, term: 'Common Bile Duct (CBD)', thaiName: 'ท่อน้ำดีร่วม (เกิดจาก Common hepatic รวมกับ Cystic duct)', color: '#0d9488' },
      { pin: 'D', x: 355, y: 365, labelX: 250, labelY: 425, term: 'Duodenum (C-shaped Loop)', thaiName: 'ลำไส้เล็กส่วนต้นโค้งรูปตัว C โอบรอบหัวตับอ่อน', color: '#e11d48' },
      { pin: 'E', x: 615, y: 368, labelX: 715, labelY: 425, term: 'Pancreas & Main Pancreatic Duct', thaiName: 'ตับอ่อน (Acinar หลั่งเอนไซม์ / Duct หลั่ง HCO3- / Islets หลั่งอินซูลิน)', color: '#ca8a04' },
      { pin: 'F', x: 395, y: 415, labelX: 670, labelY: 505, term: 'Hepatopancreatic Ampulla (Vater) & Oddi', thaiName: 'กระเปาะรวมท่อน้ำดีกับท่อตับอ่อน และหูรูด Sphincter of Oddi', color: '#dc2626' }
    ]
  },

  // =========================================================================
  // 11. KIDNEY INTERNAL STRUCTURE & BLOOD SUPPLY
  // =========================================================================
  {
    id: 'kidney_gross_internal',
    title: 'Internal Structure of the Kidney: Cortex, Medulla, Calyces & Hilum',
    subtitle: 'โครงสร้างภายในไต ชั้น Cortex, Medullary Pyramids, กรวยไต และหลอดเลือดไต',
    systemBadge: 'Urinary System',
    graphic: `
      <!-- Kidney Bean Outer Contour (Renal Capsule + Cortex) -->
      <path d="M460,105 C265,105 225,515 460,520 C555,520 595,435 555,365 C525,325 525,295 555,255 C595,185 555,105 460,105 Z" fill="#fda4af" stroke="#881337" stroke-width="5" filter="url(#dropShadow)"/>
      <!-- Renal Pyramids (Triangular striated in Medulla) -->
      <polygon points="335,185 415,155 445,245" fill="#9f1239" stroke="#ffffff" stroke-width="1.5"/>
      <polygon points="295,280 345,220 430,285" fill="#9f1239" stroke="#ffffff" stroke-width="1.5"/>
      <polygon points="295,355 320,425 430,340" fill="#9f1239" stroke="#ffffff" stroke-width="1.5"/>
      <polygon points="355,465 430,490 455,380" fill="#9f1239" stroke="#ffffff" stroke-width="1.5"/>
      <!-- Renal Pelvis, Major & Minor Calyces & Ureter -->
      <path d="M445,245 L485,275 M430,285 L485,295 M430,340 L485,325 M455,380 L485,350" stroke="#fde047" stroke-width="14" stroke-linecap="round"/>
      <path d="M475,265 C535,280 565,315 585,375 L585,535" fill="none" stroke="#eab308" stroke-width="26" stroke-linecap="round"/>
      <!-- Renal Artery & Vein at Hilum -->
      <path d="M535,285 L685,265" stroke="#dc2626" stroke-width="14" stroke-linecap="round"/>
      <path d="M535,315 L685,315" stroke="#2563eb" stroke-width="16" stroke-linecap="round"/>
      <!-- Arcuate & Interlobar Vessels -->
      <path d="M535,285 L415,255 C365,240 335,260 325,295" fill="none" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="4,2"/>
    `,
    pins: [
      { pin: 'A', x: 315, y: 155, labelX: 250, labelY: 145, term: 'Renal Cortex & Fibrous Capsule', thaiName: 'เนื้อไตชั้นนอก (ที่อยู่ของ Renal corpuscles ทั้งหมด) และแคปซูลหุ้มไต', color: '#e11d48' },
      { pin: 'B', x: 345, y: 265, labelX: 250, labelY: 265, term: 'Renal Pyramid in Medulla & Papilla', thaiName: 'พีระมิดไตในชั้น Medulla มียอดแหลม Renal papilla เปิดเข้ากรวยไต', color: '#9f1239' },
      { pin: 'C', x: 375, y: 310, labelX: 250, labelY: 385, term: 'Renal Column (Column of Bertin)', thaiName: 'เนื้อไตชั้น Cortex ที่ยื่นแทรกคั่นระหว่างพีระมิดไต (ทางผ่าน Interlobar a.)', color: '#db2777' },
      { pin: 'D', x: 455, y: 288, labelX: 715, labelY: 205, term: 'Minor & Major Calyces', thaiName: 'กรวยไตย่อย (รองรับปัสสาวะจาก Renal papilla) รวมเป็นกรวยไตใหญ่', color: '#ca8a04' },
      { pin: 'E', x: 625, y: 285, labelX: 715, labelY: 315, term: 'Renal Hilum (Vein-Artery-Pelvis)', thaiName: 'ขั้วไตทางด้านใน เรียงจากหน้าไปหลัง: Renal Vein -> Artery -> Pelvis', color: '#2563eb' },
      { pin: 'F', x: 585, y: 455, labelX: 715, labelY: 465, term: 'Renal Pelvis & Ureter', thaiName: 'แอ่งกรวยไตใหญ่ต่อลงไปเป็นท่อไต (Ureter) สู่กระเพาะปัสสาวะ', color: '#d97706' }
    ]
  },

  // =========================================================================
  // 12. RENAL CORPUSCLE, FILTRATION BARRIER & JGA
  // =========================================================================
  {
    id: 'renal_corpuscle_jga',
    title: 'Renal Corpuscle, Glomerular Filtration Barrier & Juxtaglomerular Apparatus',
    subtitle: 'โครงสร้างโกลเมอรูลัส เซลล์มีเท้า Podocytes และชุดควบคุมความดัน JGA',
    systemBadge: 'Urinary System',
    graphic: `
      <!-- Bowman's Capsule Cup -->
      <path d="M350,165 C555,115 685,220 685,320 C685,420 555,525 350,475 C420,435 420,205 350,165 Z" fill="#fef9c3" stroke="#ca8a04" stroke-width="4" filter="url(#dropShadow)"/>
      <path d="M685,285 L835,285 M685,355 L835,355" stroke="#ca8a04" stroke-width="4"/>
      <!-- Wide Afferent Arteriole (Top Left) with Granular JG cells -->
      <path d="M180,220 L385,265" stroke="#dc2626" stroke-width="24" stroke-linecap="round"/>
      <!-- Narrower Efferent Arteriole (Bottom Left) -->
      <path d="M180,420 L385,375" stroke="#ef4444" stroke-width="13" stroke-linecap="round"/>
      <!-- JG Granular Cells on Afferent Arteriole wall -->
      <circle cx="315" cy="235" r="9" fill="#fde047" stroke="#713f12" stroke-width="2"/>
      <circle cx="335" cy="240" r="9" fill="#fde047" stroke="#713f12" stroke-width="2"/>
      <circle cx="315" cy="265" r="9" fill="#fde047" stroke="#713f12" stroke-width="2"/>
      <!-- Distal Convoluted Tubule & Macula Densa touching Vascular Pole -->
      <ellipse cx="265" cy="320" rx="42" ry="52" fill="#fed7aa" stroke="#ea580c" stroke-width="3.5"/>
      <ellipse cx="265" cy="320" rx="22" ry="30" fill="#ffffff"/>
      <!-- Tall crowded Macula Densa cells on right side of DCT -->
      <rect x="292" y="295" width="14" height="50" rx="4" fill="#9a3412"/>
      <!-- Glomerular Capillary Tuft covered by Podocytes & Pedicels -->
      <path d="M385,265 C485,215 585,255 565,320 C585,385 485,425 385,375" fill="none" stroke="#dc2626" stroke-width="22" stroke-linecap="round"/>
      <!-- Podocyte Cell Body & Foot Processes (Pedicels) -->
      <circle cx="515" cy="265" r="18" fill="#38bdf8" stroke="#0369a1" stroke-width="2.5"/>
      <path d="M515,283 L495,305 M515,283 L515,305 M515,283 L535,305" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
    `,
    pins: [
      { pin: 'A', x: 245, y: 235, labelX: 260, labelY: 135, term: 'Afferent Arteriole & JG Granular Cells', thaiName: 'หลอดเลือดแดงขาเข้า (กว้างกว่า) และเซลล์ JG ที่หลั่งเอนไซม์ Renin', color: '#dc2626' },
      { pin: 'B', x: 298, y: 320, labelX: 260, labelY: 320, term: 'Macula Densa (in Distal Tubule)', thaiName: 'กลุ่มเซลล์ทรงสูงในผนัง DCT ทำหน้าที่ตรวจจับความเข้มข้น NaCl', color: '#ea580c' },
      { pin: 'C', x: 255, y: 405, labelX: 260, labelY: 485, term: 'Efferent Arteriole (Narrower Lumen)', thaiName: 'หลอดเลือดแดงขาออก (แคบกว่า เพื่อสร้างแรงดันกรอง GHP สูง 55 mmHg)', color: '#e11d48' },
      { pin: 'D', x: 515, y: 265, labelX: 715, labelY: 175, term: 'Podocytes & Filtration Slits (Visceral Layer)', thaiName: 'เซลล์มีเท้าโอบรอบโกลเมอรูลัส เกิดเป็นร่องกรอง Filtration slits', color: '#0284c7' },
      { pin: 'E', x: 615, y: 215, labelX: 715, labelY: 265, term: 'Bowman\'s Capsule (Parietal Layer & Space)', thaiName: 'ถุงหุ้มโกลเมอรูลัสชั้นนอก (Simple squamous) และช่องรับน้ำกรอง', color: '#ca8a04' },
      { pin: 'F', x: 765, y: 320, labelX: 715, labelY: 425, term: 'Proximal Convoluted Tubule (Urinary Pole)', thaiName: 'ท่อหน่วยไตส่วนต้น (PCT) มี Brush border ดูดกลับน้ำตาล 100%', color: '#d97706' }
    ]
  },

  // =========================================================================
  // 13. NEPHRON TUBULAR SYSTEM & COUNTERCURRENT MECHANISM
  // =========================================================================
  {
    id: 'nephron_tubules',
    title: 'Nephron Tubular Segments: PCT, Loop of Henle, DCT & Collecting Duct',
    subtitle: 'ท่อหน่วยไตส่วนต่างๆ และกลไกการดูดซึมกลับและสร้างปัสสาวะเข้มข้น',
    systemBadge: 'Urinary System',
    graphic: `
      <!-- Cortex-Medulla Divider Line -->
      <line x1="80" y1="245" x2="920" y2="245" stroke="#94a3b8" stroke-width="3" stroke-dasharray="10,6"/>
      <text x="145" y="232" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#475569">RENAL CORTEX (300 mOsm/L)</text>
      <text x="145" y="268" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#9f1239">RENAL MEDULLA (Up to 1,200 mOsm/L)</text>

      <!-- Glomerulus & Bowman's Capsule -->
      <circle cx="245" cy="165" r="34" fill="#fef08a" stroke="#ca8a04" stroke-width="3.5"/>
      <circle cx="245" cy="165" r="20" fill="#ef4444"/>
      <!-- Proximal Convoluted Tubule (PCT) -->
      <path d="M279,165 C335,135 375,195 405,165 C435,135 435,215 415,245" fill="none" stroke="#f59e0b" stroke-width="18" stroke-linecap="round"/>
      <!-- Thin Descending Limb of Loop of Henle -->
      <path d="M415,245 L415,475 C415,515 495,515 495,475 L495,385" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
      <!-- Thick Ascending Limb (TAL - NKCC2) -->
      <path d="M495,385 L495,215" fill="none" stroke="#ec4899" stroke-width="18" stroke-linecap="round"/>
      <!-- Distal Convoluted Tubule (DCT) -->
      <path d="M495,215 C495,145 575,145 625,175 L705,175" fill="none" stroke="#a855f7" stroke-width="15" stroke-linecap="round"/>
      <!-- Collecting Duct (Cortical & Medullary) -->
      <path d="M705,135 L705,525" fill="none" stroke="#eab308" stroke-width="24" stroke-linecap="round"/>
    `,
    pins: [
      { pin: 'A', x: 355, y: 165, labelX: 260, labelY: 115, term: 'Proximal Convoluted Tubule (PCT)', thaiName: 'ดูดกลับน้ำ/Na+ 65-70% และดูดกลับ Glucose/Amino acids 100%', color: '#d97706' },
      { pin: 'B', x: 415, y: 365, labelX: 260, labelY: 365, term: 'Thin Descending Limb of Loop of Henle', thaiName: 'ยอมให้น้ำซึมออกอย่างอิสระ (Aquaporin-1) แต่ไม่ยอมให้เกลือผ่าน', color: '#0284c7' },
      { pin: 'C', x: 455, y: 502, labelX: 260, labelY: 505, term: 'Hairpin Turn of Juxtamedullary Loop (1200 mOsm)', thaiName: 'ก้นห่วงเฮนเลใน Medulla ชั้นลึก ล้อมรอบด้วยหลอดเลือด Vasa recta', color: '#0369a1' },
      { pin: 'D', x: 495, y: 315, labelX: 720, labelY: 315, term: 'Thick Ascending Limb (NKCC2 Symporter)', thaiName: 'ไม่ยอมให้น้ำผ่านเลย แต่ปั๊ม Na+/K+/2Cl- ออก (เป้าหมายยา Furosemide)', color: '#db2777' },
      { pin: 'E', x: 585, y: 162, labelX: 720, labelY: 145, term: 'Distal Convoluted Tubule (DCT)', thaiName: 'ไม่มี Brush border ดูดกลับ Ca2+ (กระตุ้นโดย PTH) และ NaCl (Thiazides)', color: '#9333ea' },
      { pin: 'F', x: 705, y: 425, labelX: 720, labelY: 455, term: 'Collecting Duct (Principal & Intercalated Cells)', thaiName: 'ท่อรวม (ออกฤทธิ์โดย Aldosterone และ ADH ผ่าน Aquaporin-2)', color: '#ca8a04' }
    ]
  },

  // =========================================================================
  // 14. STARLING FILTRATION PRESSURES & RAAS CASCADE
  // =========================================================================
  {
    id: 'raas_filtration',
    title: 'Glomerular Filtration Pressures (NFP) & RAAS Hormonal Cascade',
    subtitle: 'แรงดันสุทธิในการกรอง (NFP = 10 mmHg) และกลไกควบคุมความดันโลหิต RAAS',
    systemBadge: 'Urinary System',
    graphic: `
      <!-- Left Box: Net Filtration Pressure Forces -->
      <rect x="60" y="95" width="420" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="270" y="125" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">GLOMERULAR FILTRATION FORCES</text>
      <!-- Capillary vs Capsule Box -->
      <rect x="105" y="165" width="145" height="260" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
      <text x="177" y="195" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#991b1b" text-anchor="middle">GLOMERULUS</text>
      <rect x="290" y="165" width="145" height="260" rx="12" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
      <text x="362" y="195" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#854d0e" text-anchor="middle">BOWMAN'S SPACE</text>
      <!-- Arrows for GHP (55 out), CHP (15 in), BCOP (30 in) -->
      <path d="M210,240 L325,240" stroke="#16a34a" stroke-width="10" stroke-linecap="round"/>
      <polygon points="325,228 345,240 325,252" fill="#16a34a"/>
      <path d="M330,310 L225,310" stroke="#dc2626" stroke-width="7" stroke-linecap="round"/>
      <polygon points="225,300 208,310 225,320" fill="#dc2626"/>
      <path d="M330,370 L225,370" stroke="#ea580c" stroke-width="8" stroke-linecap="round"/>
      <polygon points="225,360 208,370 225,380" fill="#ea580c"/>
      <rect x="120" y="450" width="300" height="48" rx="10" fill="#0f172a"/>
      <text x="270" y="479" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#4ade80" text-anchor="middle">NFP = 55 - (15 + 30) = +10 mmHg</text>

      <!-- Right Box: RAAS Pathway -->
      <rect x="515" y="95" width="425" height="445" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="727" y="125" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">RENIN-ANGIOTENSIN-ALDOSTERONE SYSTEM</text>
      <rect x="615" y="155" width="225" height="48" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <rect x="615" y="255" width="225" height="48" rx="10" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5"/>
      <rect x="615" y="355" width="225" height="52" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
      <rect x="615" y="455" width="225" height="52" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <path d="M727,203 L727,255 M727,303 L727,355 M727,407 L727,455" stroke="#475569" stroke-width="3"/>
    `,
    pins: [
      { pin: 'A', x: 270, y: 240, labelX: 270, labelY: 150, term: 'Glomerular Hydrostatic Pressure (GHP = 55 mmHg)', thaiName: 'แรงดันเลือดในโกลเมอรูลัส ทำหน้าที่ผลักดันน้ำกรองออกสู่แคปซูล', color: '#16a34a' },
      { pin: 'B', x: 270, y: 310, labelX: 270, labelY: 310, term: 'Capsular Hydrostatic Pressure (CHP = 15 mmHg)', thaiName: 'แรงดันน้ำในถุงโบว์แมนที่ต้านการกรองกลับเข้ามา', color: '#dc2626' },
      { pin: 'C', x: 270, y: 370, labelX: 270, labelY: 415, term: 'Blood Colloid Osmotic Pressure (BCOP = 30 mmHg)', thaiName: 'แรงดึงออสโมติกของโปรตีน Albumin ในเลือดที่ดึงน้ำไว้ไม่ให้ถูกกรอง', color: '#ea580c' },
      { pin: 'D', x: 727, y: 180, labelX: 715, labelY: 180, term: 'Renin (from JG cells) + Angiotensinogen (Liver)', thaiName: 'เรนินจากไตเปลี่ยน Angiotensinogen จากตับให้เป็น Angiotensin I', color: '#2563eb' },
      { pin: 'E', x: 727, y: 380, labelX: 715, labelY: 335, term: 'ACE (in Lungs) -> Angiotensin II', thaiName: 'เอนไซม์ ACE ที่หลอดเลือดฝอยปอดเปลี่ยน Ang I เป็น Ang II (หดหลอดเลือด)', color: '#dc2626' },
      { pin: 'F', x: 727, y: 480, labelX: 715, labelY: 480, term: 'Aldosterone (Adrenal Cortex) & ADH', thaiName: 'อัลโดสเตอโรนสั่งดูดกลับ Na+/น้ำ และขับ K+ ที่ท่อรวมเพื่อเพิ่มความดัน', color: '#d97706' }
    ]
  },

  // =========================================================================
  // 15. URETERS, URINARY BLADDER, TRIGONE & MALE/FEMALE URETHRA
  // =========================================================================
  {
    id: 'ureter_bladder_urethra',
    title: 'Ureters, Urinary Bladder (Trigone & Sphincters) & Male Urethra Divisions',
    subtitle: 'ท่อไต 3 จุดคอดแคบ กระเพาะปัสสาวะ (Detrusor, Trigone) และท่อปัสสาวะ 3 ส่วน',
    systemBadge: 'Urinary System',
    graphic: `
      <!-- Left & Right Ureters descending -->
      <path d="M355,100 C355,180 390,220 405,285" fill="none" stroke="#fde047" stroke-width="10" stroke-linecap="round"/>
      <path d="M645,100 C645,180 610,220 595,285" fill="none" stroke="#fde047" stroke-width="10" stroke-linecap="round"/>
      <!-- Urinary Bladder (Detrusor Muscle Wall) -->
      <ellipse cx="500" cy="300" rx="135" ry="95" fill="#fda4af" stroke="#9f1239" stroke-width="5" filter="url(#dropShadow)"/>
      <ellipse cx="500" cy="300" rx="108" ry="72" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
      <!-- Trigone Triangle (Smooth triangular floor) -->
      <polygon points="435,275 565,275 500,365" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
      <circle cx="435" cy="275" r="6" fill="#854d0e"/><circle cx="565" cy="275" r="6" fill="#854d0e"/>
      <!-- Prostate Gland surrounding Prostatic Urethra -->
      <path d="M445,380 L555,380 L535,445 L465,445 Z" fill="#c084fc" stroke="#6b21a8" stroke-width="3"/>
      <!-- Urogenital Diaphragm & External Urethral Sphincter (Skeletal) -->
      <rect x="415" y="445" width="170" height="25" rx="6" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
      <!-- Spongy (Penile) Urethra in Corpus Spongiosum -->
      <path d="M475,470 L475,545 L525,545 L525,470 Z" fill="#f43f5e" stroke="#881337" stroke-width="2.5"/>
      <!-- Continuous Urethral Lumen -->
      <line x1="500" y1="365" x2="500" y2="545" stroke="#fef9c3" stroke-width="7"/>
    `,
    pins: [
      { pin: 'A', x: 375, y: 185, labelX: 255, labelY: 165, term: 'Ureter (3 Constriction Sites: UPJ, Brim, UVJ)', thaiName: 'ท่อไต (มีจุดคอดแคบ 3 ตำแหน่งที่นิ่วมักติดค้างและเกิด Renal colic)', color: '#ca8a04' },
      { pin: 'B', x: 375, y: 295, labelX: 255, labelY: 275, term: 'Detrusor Muscle & Transitional Epithelium', thaiName: 'กล้ามเนื้อเรียบกระเพาะปัสสาวะ 3 ชั้น (บีบตัวด้วย Parasympathetic S2-S4)', color: '#e11d48' },
      { pin: 'C', x: 500, y: 315, labelX: 255, labelY: 380, term: 'Trigone of Urinary Bladder', thaiName: 'บริเวณสามเหลี่ยมเรียบที่ฐานกระเพาะปัสสาวะ (2 รูท่อไต + 1 รูท่อปัสสาวะ)', color: '#d97706' },
      { pin: 'D', x: 485, y: 375, labelX: 715, labelY: 265, term: 'Internal Urethral Sphincter (Smooth Muscle)', thaiName: 'หูรูดท่อปัสสาวะชั้นใน (กล้ามเนื้อเรียบ อยู่นอกอำนาจจิตใจ Autonomic)', color: '#be123c' },
      { pin: 'E', x: 530, y: 412, labelX: 715, labelY: 375, term: 'Prostatic Urethra (Surrounded by Prostate)', thaiName: 'ท่อปัสสาวะส่วนผ่านต่อมลูกหมาก (ตีบแคบในผู้สูงอายุที่เป็นโรค BPH)', color: '#7e22ce' },
      { pin: 'F', x: 550, y: 458, labelX: 715, labelY: 480, term: 'Membranous Urethra & External Sphincter', thaiName: 'ท่อปัสสาวะส่วนผ่านกล้ามเนื้อหูรูดชั้นนอก (กล้ามเนื้อลาย สั่งกลั้นได้ผ่าน Pudendal n.)', color: '#dc2626' }
    ]
  }
];

let createdCount = 0;
diagrams.forEach(diag => {
  const examSvg = wrapSvg(diag.title, diag.subtitle, diag.systemBadge, diag.graphic, diag.pins, false);
  const labeledSvg = wrapSvg(diag.title, diag.subtitle, diag.systemBadge, diag.graphic, diag.pins, true);

  const examPath = path.join(OUT_DIR, `${diag.id}_exam.svg`);
  const labeledPath = path.join(OUT_DIR, `${diag.id}_labeled.svg`);

  fs.writeFileSync(examPath, examSvg, 'utf8');
  fs.writeFileSync(labeledPath, labeledSvg, 'utf8');
  createdCount += 2;
});

console.log(`Successfully generated ${createdCount} high-resolution medical SVG files in ${OUT_DIR}`);
module.exports = { diagrams };
