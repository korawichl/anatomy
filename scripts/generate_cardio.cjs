const path = require('path');
const { writeQuestionsFile, checkDistribution } = require('./question_builder_util.cjs');

const systemName = 'Cardiovascular and Lymphatic Systems';
const sourceFile = 'BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf';

const cardioQuestions = [
  // Blood & Hematology (P.5 - P.15)
  {
    id: 'CARDIO-001',
    questionText: 'ปริมาตรของเลือดในร่างกายของผู้ใหญ่ปกติมีประมาณเท่าใด และคิดเป็นกี่เปอร์เซ็นต์ของน้ำหนักตัว?',
    options: {
      A: 'ประมาณ 5 ลิตร หรือคิดเป็น 7 - 8% ของน้ำหนักร่างกาย',
      B: 'ประมาณ 2 ลิตร หรือคิดเป็น 3% ของน้ำหนักร่างกาย',
      C: 'ประมาณ 10 ลิตร หรือคิดเป็น 15% ของน้ำหนักร่างกาย',
      D: 'ประมาณ 1 ลิตร หรือคิดเป็น 2% ของน้ำหนักร่างกาย'
    },
    correctOption: 'A',
    explanation: 'เลือดในร่างกายมนุษย์มีปริมาตรเฉลี่ยประมาณ 5 ลิตร (ในเพศชายประมาณ 5-6 ลิตร เพศหญิงประมาณ 4-5 ลิตร) คิดเป็นประมาณ 7-8% ของน้ำหนักตัว มี pH เป็นด่างอ่อนๆ อยู่ที่ 7.35 - 7.45',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 6,
    tags: ['blood-volume', 'blood-characteristics'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-002',
    questionText: 'เซลล์เม็ดเลือดแดง (Red Blood Cells: RBCs / Erythrocytes) ที่โตเต็มที่แล้วมีลักษณะทางสัณฐานวิทยาอย่างไร?',
    options: {
      A: 'มีรูปร่างกลม เว้าตรงกลางทั้งสองด้านแบบ Biconcave disc และไม่มีนิวเคลียส (Non-nucleated)',
      B: 'มีรูปร่างรี มีนิวเคลียสขนาดใหญ่ 2 พู',
      C: 'มีรูปร่างไม่แน่นอนและมีแขนงยื่นคล้ายเท้าเทียม',
      D: 'มีรูปทรงกลมแข็ง มีนิวเคลียสกลมโตตรงกลาง'
    },
    correctOption: 'A',
    explanation: 'RBCs ที่โตเต็มที่ในกระแสเลือดมีรูปร่างเป็นจานกลมเว้าตรงกลางสองด้าน (Biconcave disc) ขนาดเส้นผ่านศูนย์กลางประมาณ 7-8 ไมครอน ไม่มีนิวเคลียสและออร์แกเนลล์ เพื่อเพิ่มพื้นที่ผิวในการแลกเปลี่ยน O2 และ CO2',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 7,
    tags: ['rbc', 'erythrocytes', 'biconcave-disc'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-003',
    questionText: 'เม็ดเลือดขาวชนิดใดที่พบมากที่สุดในกระแสเลือด (ประมาณ 60-70%) มีนิวเคลียส 3-5 พู และทำหน้าที่กำจัดแบคทีเรียด้วยวิธี Phagocytosis เป็นด่านแรก?',
    options: {
      A: 'Neutrophil',
      B: 'Eosinophil',
      C: 'Basophil',
      D: 'Lymphocyte'
    },
    correctOption: 'A',
    explanation: 'Neutrophils เป็นเม็ดเลือดขาวกลุ่ม Granulocyte ที่พบมากที่สุด (60-70%) นิวเคลียสแบ่งเป็นหลายพู (Polymorphonuclear) ตอบสนองต่อการติดเชื้อแบคทีเรียอย่างเฉียบพลันเป็นเซลล์กลุ่มแรก',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 9,
    tags: ['neutrophils', 'granulocytes', 'phagocytosis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-004',
    questionText: 'เม็ดเลือดขาวชนิดใดที่มีแกรนูลติดสีส้มแดง (Red-orange granules) มีนิวเคลียส 2 พู และมีบทบาทสำคัญในการต่อต้านการติดเชื้อพยาธิ (Parasitic infections) และภาวะภูมิแพ้?',
    options: {
      A: 'Eosinophil',
      B: 'Neutrophil',
      C: 'Basophil',
      D: 'Monocyte'
    },
    correctOption: 'A',
    explanation: 'Eosinophils (2-4% ของ WBC ทั้งหมด) แกรนูลในไซโทพลาสซึมติดสีส้มแดงของสี Eosin ทำหน้าที่หลั่งเอนไซม์ทำลายพยาธิ และช่วยควบคุมปฏิกิริยาการอักเสบในโรคภูมิแพ้และหอบหืด',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 10,
    tags: ['eosinophil', 'parasites', 'allergy'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-005',
    questionText: 'เม็ดเลือดขาวชนิด Basophil หลั่งสารสำคัญชนิดใดที่มีบทบาทในการขยายหลอดเลือดและป้องกันการแข็งตัวของเลือดในบริเวณที่มีการอักเสบ?',
    options: {
      A: 'Histamine (ขยายหลอดเลือด) และ Heparin (ป้องกันการแข็งตัวของเลือด)',
      B: 'Hemoglobin และ Myoglobin',
      C: 'Insulin และ Glucagon',
      D: 'Pepsin และ Trypsin'
    },
    correctOption: 'A',
    explanation: 'Basophils มีแกรนูลขนาดใหญ่ติดสีน้ำเงินม่วงเข้ม บรรจุสาร Histamine (กระตุ้นการขยายตัวและเพิ่ม permeability ของหลอดเลือด) และ Heparin (สารต้านการแข็งตัวของเลือดธรรมชาติ)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 11,
    tags: ['basophils', 'histamine', 'heparin'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-006',
    questionText: 'เม็ดเลือดขาวชนิด Agranular leucocyte ที่มีขนาดใหญ่ที่สุด นิวเคลียสเป็นรูปไตหรือเกือกม้า (Kidney/Horseshoe-shaped) เมื่อแทรกตัวเข้าสู่เนื้อเยื่อจะเปลี่ยนเป็นอะไร?',
    options: {
      A: 'Monocyte ซึ่งจะเปลี่ยนเป็น Macrophage ในเนื้อเยื่อ',
      B: 'Lymphocyte ซึ่งจะเปลี่ยนเป็น RBC',
      C: 'Platelet',
      D: 'Eosinophil'
    },
    correctOption: 'A',
    explanation: 'Monocyte (มีประมาณ 3-8% ของ WBC) เป็นเม็ดเลือดขาวขนาดใหญ่ที่สุด นิวเคลียสเว้าเป็นรูปไต เมื่อเคลื่อนออกจากกระแสเลือดเข้าสู่เนื้อเยื่อจะพัฒนาไปเป็น Macrophage คอยเก็บกินเชื้อโรคและเศษเซลล์',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 12,
    tags: ['monocyte', 'macrophage', 'agranulocytes'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-007',
    questionText: 'เกล็ดเลือด (Platelets / Thrombocytes) กำเนิดมาจากชิ้นส่วนไซโทพลาสซึมของเซลล์ขนาดใหญ่ชนิดใดในไขกระดูก?',
    options: {
      A: 'Megakaryocyte',
      B: 'Erythroblast',
      C: 'Myeloblast',
      D: 'Lymphoblast'
    },
    correctOption: 'A',
    explanation: 'Platelets ไม่ใช่เซลล์สมบูรณ์ แต่เป็นชิ้นส่วนไซโทพลาสซึมขนาด 2-4 ไมครอนที่หลุดลอกออกมาจาก Megakaryocyte ในไขกระดูก ทำหน้าที่สำคัญในกระบวนการห้ามเลือด (Hemostasis)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 14,
    tags: ['platelets', 'thrombocytes', 'megakaryocyte'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  // Heart Anatomy & Pericardium (P.16 - P.20)
  {
    id: 'CARDIO-008',
    questionText: 'หัวใจตั้งอยู่ในบริเวณใดของช่องอก และส่วนยอด (Apex) ชี้ไปในทิศทางใด?',
    options: {
      A: 'ตั้งอยู่ใน Middle mediastinum โดยมี Apex ชี้ลงล่าง ไปทางหน้า และเอียงไปทางซ้าย ที่ช่องซี่โครงที่ 5 (5th intercostal space)',
      B: 'ตั้งอยู่ใน Anterior mediastinum โดยมี Apex ชี้ขึ้นไปทางขวา',
      C: 'ตั้งอยู่ใต้ตับในช่องท้องด้านขวา',
      D: 'ตั้งอยู่ใน Posterior mediastinum ชี้ตรงไปทางกระดูกสันหลัง'
    },
    correctOption: 'A',
    explanation: 'หัวใจวางตัวอยู่ใน Middle mediastinum ระหว่างปอดสองข้าง ประมาณ 2/3 อยู่ทางซีกซ้าย ยอดหัวใจ (Apex) ซึ่งเกิดจาก Left ventricle ชี้ลงล่างเฉียงไปทางซ้าย สัมผัสกับผนังหน้าอกที่ Intercostal space ที่ 5 แนว Midclavicular line',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 16,
    tags: ['heart-location', 'apex', 'mediastinum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-009',
    questionText: 'ถุงหุ้มหัวใจชั้นนอกสุดที่เป็นพังผืดเหนียว (Fibrous sac) ทำหน้าที่ยึดกับ Central tendon ของกะบังลมและป้องกันหัวใจขยายตัวมากเกินไป คือชั้นใด?',
    options: {
      A: 'Fibrous pericardium',
      B: 'Parietal serous pericardium',
      C: 'Visceral serous pericardium (Epicardium)',
      D: 'Endocardium'
    },
    correctOption: 'A',
    explanation: 'Fibrous pericardium เป็นถุงพังผืดเนื้อแน่นชั้นนอกสุด ยึดติดกับ central tendon ของกะบังลมและเกาะกับผนังของ great vessels ทำหน้าที่ป้องกันไม่ให้หัวใจโป่งพองขยายตัวเกินขีดจำกัด',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 18,
    tags: ['fibrous-pericardium', 'diaphragm-attachment'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-010',
    questionText: 'ช่องว่าง Pericardial cavity บรรจุของเหลวหล่อลื่น (Pericardial fluid) อยู่ระหว่างชั้นเนื้อเยื่อสองชั้นใด?',
    options: {
      A: 'Parietal layer และ Visceral layer (Epicardium) ของ Serous pericardium',
      B: 'Fibrous pericardium และ Parietal pericardium',
      C: 'Myocardium และ Endocardium',
      D: 'ระหว่าง Atrium และ Ventricle'
    },
    correctOption: 'A',
    explanation: 'Pericardial cavity คือช่องว่างแคบๆ ระหว่าง Parietal serous pericardium (เยื่อหุ้มชั้นนอก) และ Visceral serous pericardium (Epicardium เยื่อหุ้มติดผิวหัวใจ) มีน้ำหล่อลื่น 15-50 mL ลดแรงเสียดสีขณะหัวใจบีบตัว',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 17,
    tags: ['pericardial-cavity', 'pericardial-fluid'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-011',
    questionText: 'ชั้นผนังหัวใจชั้นใดที่มีความหนามากที่สุด ประกอบด้วยเซลล์กล้ามเนื้อหัวใจที่ทำหน้าที่หดตัวสูบฉีดเลือด?',
    options: {
      A: 'Epicardium',
      B: 'Myocardium',
      C: 'Endocardium',
      D: 'Parietal pericardium'
    },
    correctOption: 'B',
    explanation: 'Myocardium เป็นชั้นเนื้อเยื่อกล้ามเนื้อหัวใจ (Cardiac muscle) มีสัดส่วนหนาที่สุดของผนังหัวใจ ทำหน้าที่หดตัวเป็นจังหวะเพื่อสูบฉีดเลือดออกจากห้องหัวใจ',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 19,
    tags: ['myocardium', 'heart-wall', 'cardiac-muscle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-012',
    questionText: 'ลักษณะเฉพาะของเซลล์กล้ามเนื้อหัวใจ (Cardiac muscle cells) ทางมิญชวิทยาข้อใดถูกต้อง?',
    options: {
      A: 'เซลล์มีลาย (Striated), นิวเคลียส 1 อันอยู่กึ่งกลางเซลล์, มีการแตกแขนง และเชื่อมต่อกันด้วย Intercalated discs',
      B: 'ไม่มีลาย, มีหลายนิวเคลียสอยู่ที่ขอบเซลล์',
      C: 'มีหลายนิวเคลียสและควบคุมได้ตามใจชอบ',
      D: 'เป็นรูปกระสวยไม่มีลายคล้ายกล้ามเนื้อกระเพาะอาหาร'
    },
    correctOption: 'A',
    explanation: 'Cardiac muscle cells มีลาย (striated), นิวเคลียสกลมรี 1-2 อันอยู่ตรงกลางเซลล์ มีการแตกแขนงเชื่อมกัน และมีรอยต่อเฉพาะเรียกว่า Intercalated discs ซึ่งมี Gap junctions นำกระแสไฟฟ้าส่งต่อกันอย่างรวดเร็ว',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 20,
    tags: ['cardiac-muscle-histology', 'intercalated-discs'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-013',
    questionText: 'ชั้นเยื่อบุผนังด้านในสุดของหัวใจและลิ้นหัวใจ ซึ่งเป็นเนื้อเยื่อบุผิว Simple squamous ต่อเนื่องกับเยื่อบุหลอดเลือด เรียกว่าอะไร?',
    options: {
      A: 'Endocardium',
      B: 'Epicardium',
      C: 'Myocardium',
      D: 'Pericardium'
    },
    correctOption: 'A',
    explanation: 'Endocardium เป็นชั้นในสุดของหัวใจ ประกอบด้วย Endothelium (Simple squamous epithelium) ผิวเรียบมัน ช่วยให้เลือดไหลเวียนสะดวกโดยไม่เกิดลิ่มเลือด และคลุมเป็นลิ้นหัวใจทั้งหมด',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 19,
    tags: ['endocardium', 'endothelium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  // Cardiac Chambers & Valves (P.21 - P.37)
  {
    id: 'CARDIO-014',
    questionText: 'หัวใจห้องบนขวา (Right Atrium) รับเลือดดำ (Deoxygenated blood) จากหลอดเลือดหลัก 3 เส้นใด?',
    options: {
      A: 'Superior Vena Cava (SVC), Inferior Vena Cava (IVC), และ Coronary Sinus',
      B: 'Pulmonary veins 4 เส้น และ Aorta',
      C: 'Pulmonary trunk, Carotid artery, และ Subclavian vein',
      D: 'Hepatic vein, Renal vein, และ Femoral vein'
    },
    correctOption: 'A',
    explanation: 'Right Atrium รับเลือดที่มี O2 ต่ำจาก 1) SVC (จากส่วนบนของร่างกาย) 2) IVC (จากส่วนล่างของร่างกาย) และ 3) Coronary Sinus (จากกล้ามเนื้อหัวใจ)',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 23,
    tags: ['right-atrium', 'svc', 'ivc', 'coronary-sinus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-015',
    questionText: 'ร่องรอยวงรี (Fossa ovalis) บนผนัง Interatrial septum ของหัวใจห้องบนขวา เป็นร่องรอยที่หลงเหลือมาจากโครงสร้างใดในทารกในครรภ์?',
    options: {
      A: 'Foramen ovale (รูเปิดเชื่อมระหว่างห้องบนขวาและบนซ้ายในครรภ์)',
      B: 'Ductus arteriosus',
      C: 'Ductus venosus',
      D: 'Umbilical vein'
    },
    correctOption: 'A',
    explanation: 'Fossa ovalis คือหลุมวงรีบนผนังกั้นหัวใจห้องบน (Interatrial septum) ซึ่งเป็นร่องรอยปิดสนิทของ Foramen ovale ที่เคยเปิดให้เลือดลัดจาก Atrium ขวาไปซ้ายขณะอยู่ในครรภ์',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 22,
    tags: ['fossa-ovalis', 'foramen-ovale', 'fetal-circulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-016',
    questionText: 'ลิ้นหัวใจที่กั้นระหว่างหัวใจห้องบนขวา (Right Atrium) และห้องล่างขวา (Right Ventricle) มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Tricuspid valve (ลิ้นไตรคัสปิด มี 3 แฉก)',
      B: 'Bicuspid / Mitral valve',
      C: 'Aortic semilunar valve',
      D: 'Pulmonary semilunar valve'
    },
    correctOption: 'A',
    explanation: 'Tricuspid valve (Right atrioventricular valve) มีแผ่นลิ้น 3 แฉก (anterior, posterior, septal cusps) กั้นระหว่าง Right Atrium และ Right Ventricle ป้องกันเลือดไหลย้อนกลับขึ้นห้องบน',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 26,
    tags: ['tricuspid-valve', 'av-valves'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-017',
    questionText: 'เส้นใยเอ็น Chordae tendineae ยึดระหว่างขอบของแผ่นลิ้นหัวใจ AV valves กับกล้ามเนื้อชนิดใดในโพรงหัวใจห้องล่าง?',
    options: {
      A: 'Papillary muscles',
      B: 'Pectinate muscles',
      C: 'Trabeculae carneae',
      D: 'Intercostal muscles'
    },
    correctOption: 'A',
    explanation: 'Chordae tendineae (เส้นเอ็นยึดลิ้นหัวใจ คล้ายสายร่มชูชีพ) ยึดขอบ cusps ของ AV valves ไว้กับ Papillary muscles ซึ่งหดตัวพร้อม Ventricular systole ป้องกันไม่ให้ลิ้นหัวใจปลิ้นปลิ้นกลับขึ้น Atrium',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 28,
    tags: ['chordae-tendineae', 'papillary-muscles'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-018',
    questionText: 'หัวใจห้องล่างขวา (Right Ventricle) สูบฉีดเลือดดำไปยังปอดสองข้างผ่านหลอดเลือดใหญ่และลิ้นหัวใจใด?',
    options: {
      A: 'สูบฉีดผ่าน Pulmonary semilunar valve เข้าสู่ Pulmonary trunk',
      B: 'สูบฉีดผ่าน Aortic valve เข้าสู่ Aorta',
      C: 'สูบฉีดผ่าน Tricuspid valve เข้าสู่ SVC',
      D: 'สูบฉีดเข้าสู่ Pulmonary veins'
    },
    correctOption: 'A',
    explanation: 'Right Ventricle บีบตัวส่งเลือดดำผ่าน Pulmonary semilunar valve เข้าสู่ Pulmonary trunk ซึ่งจะแตกแขนงออกเป็น Right และ Left Pulmonary Arteries นำเลือดไปฟอกที่ปอด',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 27,
    tags: ['right-ventricle', 'pulmonary-trunk'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-019',
    questionText: 'หัวใจห้องบนซ้าย (Left Atrium) รับเลือดที่มีออกซิเจนสูง (Oxygenated blood) จากปอดผ่านหลอดเลือดใด?',
    options: {
      A: 'Pulmonary veins จำนวน 4 เส้น (ขวา 2 เส้น และซ้าย 2 เส้น)',
      B: 'Pulmonary artery 2 เส้น',
      C: 'Superior Vena Cava',
      D: 'Coronary sinus'
    },
    correctOption: 'A',
    explanation: 'Left Atrium รับเลือดแดงที่มี O2 สูงที่ฟอกแล้วจากปอดผ่านทาง Pulmonary veins ทั้งหมด 4 เส้น (Right & Left superior/inferior pulmonary veins) โดยไม่มีลิ้นเปิดปิดที่ปากรู',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 30,
    tags: ['left-atrium', 'pulmonary-veins'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-020',
    questionText: 'ลิ้นหัวใจ Bicuspid valve (Mitral valve) มีลักษณะสำคัญอย่างไร?',
    options: {
      A: 'มีแผ่นลิ้น 2 แฉก กั้นระหว่างหัวใจห้องบนซ้าย (Left Atrium) และห้องล่างซ้าย (Left Ventricle)',
      B: 'มีแผ่นลิ้น 3 แฉก กั้นระหว่างบนขวาและล่างขวา',
      C: 'เป็นลิ้นรูปพระจันทร์เสี้ยวที่โคนหลอดเลือด Aorta',
      D: 'กั้นระหว่างเส้นเลือดดำและหัวใจ'
    },
    correctOption: 'A',
    explanation: 'Bicuspid valve หรือ Mitral valve (ชื่อคล้ายหมวกพระสังฆราช) มี cusp 2 แฉก (anterior และ posterior) กั้นระหว่าง Left Atrium และ Left Ventricle ต้องทนแรงดันบีบตัวสูงของหัวใจซีกซ้าย',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 30,
    tags: ['mitral-valve', 'bicuspid-valve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-021',
    questionText: 'เหตุใดผนังกล้ามเนื้อของหัวใจห้องล่างซ้าย (Left Ventricle) จึงมีความหนามากกว่าห้องล่างขวา (Right Ventricle) ถึงประมาณ 3 เท่า?',
    options: {
      A: 'เพราะต้องสร้างแรงดันสูงในการสูบฉีดเลือดไปเลี้ยงทั่วร่างกายผ่าน Systemic circulation ซึ่งมีความต้านทานหลอดเลือดสูงกว่าปอดมาก',
      B: 'เพราะบรรจุเลือดมากกว่าห้องล่างขวา 3 เท่า',
      C: 'เพราะมีหลอดเลือดดำเปิดเข้าโดยตรง',
      D: 'เพราะไม่มีลิ้นหัวใจกั้น'
    },
    correctOption: 'A',
    explanation: 'Left Ventricle ต้องสร้างความดันประมาณ 120 mmHg เพื่อส่งเลือดชนะแรงต้านทานของระบบไหลเวียนร่างกาย (Systemic circulation) ขณะที่ Right Ventricle ส่งเลือดไปปอดที่มีแรงต้านต่ำเพียง ~25 mmHg',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 31,
    tags: ['left-ventricle', 'myocardial-thickness', 'systemic-circulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-022',
    questionText: 'เสียงหัวใจเสียงที่หนึ่ง (First heart sound: S1 หรือเสียง "Lubb") เกิดจากปรากฏการณ์ใด?',
    options: {
      A: 'การปิดของลิ้นหัวใจ Atrioventricular valves (Tricuspid และ Mitral valves) เมื่อเริ่มต้นการบีบตัวของ Ventricles',
      B: 'การปิดของ Semilunar valves (Aortic และ Pulmonary valves)',
      C: 'การไหลเวียนของเลือดผ่านผนังหัวใจ',
      D: 'การคลายตัวของกล้ามเนื้อกระบังลม'
    },
    correctOption: 'A',
    explanation: 'เสียง S1 เกิดจากการสั่นสะเทือนเมื่อ AV valves (Mitral & Tricuspid) ปิดพร้อมกันตอนต้นจังหวะ Ventricular systole บ่งบอกการเริ่มต้นบีบตัวของหัวใจห้องล่าง',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 34,
    tags: ['heart-sounds', 's1', 'av-valve-closure'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-023',
    questionText: 'เสียงหัวใจเสียงที่สอง (Second heart sound: S2 หรือเสียง "Dupp") เกิดจากเหตุการณ์ใด?',
    options: {
      A: 'การปิดของ Semilunar valves (Aortic และ Pulmonary valves) เมื่อสิ้นสุดการบีบตัวของ Ventricles',
      B: 'การปิดของ AV valves',
      C: 'การเปิดของลิ้นหัวใจทุกอันพร้อมกัน',
      D: 'การบีบตัวของหัวใจห้องบน'
    },
    correctOption: 'A',
    explanation: 'เสียง S2 เกิดจากการปิดสนิทของ Semilunar valves (Aortic และ Pulmonary valves) ตอนต้นจังหวะ Ventricular diastole เมื่อความดันใน Ventricle ต่ำลงกว่าหลอดเลือดแดงใหญ่',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 34,
    tags: ['heart-sounds', 's2', 'semilunar-valves'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  // Coronary Circulation & Conduction System (P.38 - P.48)
  {
    id: 'CARDIO-024',
    questionText: 'หลอดเลือดแดงโคโรนารี (Right and Left Coronary Arteries) ที่นำเลือดไปเลี้ยงกล้ามเนื้อหัวใจ แตกแขนงออกมาจากตำแหน่งใด?',
    options: {
      A: 'Ascending Aorta (บริเวณ Aortic sinuses เหนือแผ่นลิ้น Aortic valve)',
      B: 'Arch of Aorta',
      C: 'Pulmonary trunk',
      D: 'Left Ventricle โดยตรง'
    },
    correctOption: 'A',
    explanation: 'Coronary arteries แยกตัวออกมาจากบริเวณโคนของ Ascending Aorta (Right and Left aortic sinuses of Valsalva) เหนือใบลิ้น Aortic valve เลือดจะไหลเข้าเลี้ยงกล้ามเนื้อหัวใจสูงสุดในจังหวะ Diastole',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 38,
    tags: ['coronary-arteries', 'ascending-aorta'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-025',
    questionText: 'แขนงของหลอดเลือดแดง Left Coronary Artery ที่ทอดลงมาตามร่องหน้าหัวใจ เลี้ยงผนังห้องล่างทั้งสองข้างและมักเกิดการอุดตันบ่อยจนได้ฉายาว่า "Widow maker" คือแขนงใด?',
    options: {
      A: 'Anterior Interventricular Artery (Left Anterior Descending: LAD)',
      B: 'Circumflex artery',
      C: 'Marginal artery',
      D: 'Posterior interventricular artery'
    },
    correctOption: 'A',
    explanation: 'LAD (Anterior Interventricular branch) วิ่งในร่อง anterior interventricular sulcus เลี้ยงผนังหน้าของ LV และ 2/3 ส่วนหน้าของ interventricular septum หากตันเฉียบพลันจะเกิดกล้ามเนื้อหัวใจตายรุนแรง',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 39,
    tags: ['lad', 'widow-maker', 'coronary-circulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-026',
    questionText: 'โครงสร้างใดทำหน้าที่เป็นตัวกำหนดจังหวะการเต้นของหัวใจตามธรรมชาติ (Natural Pacemaker of the heart) โดยสามารถสร้างกระแสไฟฟ้าได้ 60-100 ครั้งต่อนาที?',
    options: {
      A: 'Sinoatrial node (SA node)',
      B: 'Atrioventricular node (AV node)',
      C: 'Bundle of His',
      D: 'Purkinje fibers'
    },
    correctOption: 'A',
    explanation: 'SA node ตั้งอยู่บริเวณผนังของหัวใจห้องบนขวาใกล้รูเปิดของ SVC มีเซลล์ Pacemaker ที่เกิด spontaneous depolarization เร็วที่สุด (60-100 ครั้ง/นาที) จึงเป็นตัวคุมจังหวะหลักของหัวใจ',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 43,
    tags: ['sa-node', 'pacemaker', 'conduction-system'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-027',
    questionText: 'Atrioventricular node (AV node) ตั้งอยู่ ณ บริเวณใด และมีหน้าที่สำคัญประการใดต่อระบบการนำไฟฟ้าของหัวใจ?',
    options: {
      A: 'ตั้งอยู่ที่ Interatrial septum ใกล้รูเปิด Coronary sinus ทำหน้าที่หน่วงสัญญาณไฟฟ้าชั่วครู่ (~0.1 วินาที) เพื่อให้ Atrium บีบเลือดลง Ventricle ให้เสร็จสิ้นก่อน',
      B: 'ตั้งอยู่ที่ยอดหัวใจ ทำหน้าที่สร้างน้ำหล่อลื่น',
      C: 'ตั้งอยู่ใน Aorta เพื่อปรับความดัน',
      D: 'ตั้งอยู่ในปอดเพื่อรับออกซิเจน'
    },
    correctOption: 'A',
    explanation: 'AV node ตั้งอยู่ที่รอยต่อ interatrial septum ทำหน้าที่หน่วงกระแสไฟฟ้าประมาณ 0.09-0.12 วินาที (AV delay) เพื่อให้หัวใจห้องบนบีบเลือดลงห้องล่างได้สมบูรณ์ก่อนที่ห้องล่างจะเริ่มบีบตัว',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 44,
    tags: ['av-node', 'av-delay', 'interatrial-septum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-028',
    questionText: 'ลำดับเส้นทางการนำกระแสไฟฟ้าภายในหัวใจข้อใดเรียงลำดับได้อย่างถูกต้อง?',
    options: {
      A: 'SA node -> AV node -> AV bundle (Bundle of His) -> Bundle branches -> Purkinje fibers',
      B: 'AV node -> SA node -> Purkinje fibers -> Bundle of His',
      C: 'Purkinje fibers -> Bundle of His -> AV node -> SA node',
      D: 'SA node -> Bundle branches -> AV node -> Purkinje fibers'
    },
    correctOption: 'A',
    explanation: 'กระแสประสาทเริ่มจาก SA node -> วิ่งผ่าน Atrium สู่ AV node -> เข้าสู่ Bundle of His ทะลุ Fibrous skeleton -> แยกเป็น Right และ Left bundle branches ใน Interventricular septum -> กระจายสู่ Purkinje fibers สู่กล้ามเนื้อ Ventricles',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 45,
    tags: ['cardiac-conduction-pathway', 'purkinje-fibers'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  // Blood Vessels (P.49 - P.88)
  {
    id: 'CARDIO-029',
    questionText: 'ผนังของหลอดเลือดโดยทั่วไปประกอบด้วยเนื้อเยื่อ 3 ชั้น ลำดับจากด้านในสู่ด้านนอกข้อใดถูกต้อง?',
    options: {
      A: 'Tunica intima -> Tunica media -> Tunica externa (Adventitia)',
      B: 'Tunica media -> Tunica intima -> Tunica externa',
      C: 'Tunica externa -> Tunica media -> Tunica intima',
      D: 'Tunica intima -> Tunica serosa -> Tunica muscularis'
    },
    correctOption: 'A',
    explanation: 'ผนังหลอดเลือดเรียงจากในออกนอก: 1. Tunica intima (Endothelium + subendothelial layer) 2. Tunica media (กล้ามเนื้อเรียบและ elastic fibers) และ 3. Tunica externa/adventitia (คอลลาเจนยึดโครงสร้าง)',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 49,
    tags: ['tunics-of-vessels', 'tunica-intima', 'tunica-media'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-030',
    questionText: 'ชั้น Tunica media ของหลอดเลือดแดง (Artery) แตกต่างจากหลอดเลือดดำ (Vein) อย่างไร?',
    options: {
      A: 'หลอดเลือดแดงมีชั้น Tunica media ที่หนาและมีเส้นใยกล้ามเนื้อเรียบกับ Elastic fibers หนาแน่นกว่ามากเพื่อรองรับแรงดันสูง',
      B: 'หลอดเลือดดำมี Tunica media หนาที่สุดในร่างกาย',
      C: 'หลอดเลือดแดงไม่มีชั้น Tunica media',
      D: 'หลอดเลือดดำมีกล้ามเนื้อลายในชั้น Tunica media'
    },
    correctOption: 'A',
    explanation: 'หลอดเลือดแดงมี Tunica media หนามากเพื่อทนต่อแรงดันโลหิตสูงและควบคุมแรงต้านหลอดเลือด (Vasoconstriction/Vasodilation) ส่วนหลอดเลือดดำมี Tunica media บางกว่า แต่มีลูเมนกว้างและมี Tunica externa หนาสุด',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 50,
    tags: ['artery-vs-vein', 'tunica-media'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-031',
    questionText: 'หลอดเลือดแดงชนิดใดที่ทำหน้าที่เป็น "Resistance vessels" มีบทบาทหลักในการควบคุมความดันโลหิตทั่วร่างกายโดยการหดหรือขยายตัวของกล้ามเนื้อเรียบ?',
    options: {
      A: 'Arterioles (หลอดเลือดแดงฝอยขนาดเล็ก)',
      B: 'Elastic arteries (เช่น Aorta)',
      C: 'Large veins (เช่น Vena Cava)',
      D: 'Capillaries'
    },
    correctOption: 'A',
    explanation: 'Arterioles เป็นหลอดเลือดที่มีเส้นผ่านศูนย์กลางเล็กแต่มีสัดส่วนของกล้ามเนื้อเรียบสูงมาก เป็นจุดหลักที่สร้างความต้านทานส่วนปลาย (Systemic Vascular Resistance: SVR) ควบคุมความดันโลหิตและกระจายเลือด',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 52,
    tags: ['arterioles', 'resistance-vessels', 'blood-pressure'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-032',
    questionText: 'หลอดเลือดฝอย (Capillaries) ชนิดใดที่พบใน Glomerulus ของไต และต่อมไร้ท่อ ซึ่งมีรูพรุนขนาดเล็ก (Pores/Fenestrae) เพื่อให้สารละลายและโมเลกุลขนาดเล็กผ่านได้รวดเร็ว?',
    options: {
      A: 'Fenestrated capillaries',
      B: 'Continuous capillaries',
      C: 'Sinusoid capillaries',
      D: 'Discontinuous capillaries'
    },
    correctOption: 'A',
    explanation: 'Fenestrated capillaries มีรูพรุน (fenestrae) ทะลุผ่านเซลล์ endothelium พบในอวัยวะที่มีการกรองหรือดูดซึมสารสูง เช่น Glomerulus ของไต, เยื่อบุลำไส้เล็ก และต่อมไร้ท่อ',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 56,
    tags: ['fenestrated-capillaries', 'capillary-types'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-033',
    questionText: 'หลอดเลือดดำ (Veins) มีโครงสร้างพิเศษใดที่ยื่นออกมาจากชั้น Tunica intima เพื่อป้องกันไม่ให้เลือดดำไหลย้อนกลับ (Prevent backflow) จากแรงโน้มถ่วง?',
    options: {
      A: 'Venous valves (ลิ้นในหลอดเลือดดำ)',
      B: 'Chordae tendineae',
      C: 'Precapillary sphincters',
      D: 'Pectinate folds'
    },
    correctOption: 'A',
    explanation: 'Venous valves เป็นแผ่นพับของชั้น Tunica intima พบได้มากในหลอดเลือดดำของรยางค์ล่าง (แขนขา) ทำหน้าที่เปิดให้เลือดไหลขึ้นสู่หัวใจ และปิดสนิทเมื่อเลือดจะไหลย้อนกลับ',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 61,
    tags: ['venous-valves', 'vein-structure'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-034',
    questionText: 'ส่วนโค้งของหลอดเลือดแดงใหญ่ (Arch of Aorta) มีแขนงหลอดเลือดแดงใหญ่แยกออกไป 3 เส้น ข้อใดเรียงลำดับจากขวาไปซ้ายได้อย่างถูกต้อง?',
    options: {
      A: 'Brachiocephalic trunk -> Left Common Carotid artery -> Left Subclavian artery',
      B: 'Left Common Carotid -> Right Common Carotid -> Subclavian',
      C: 'Left Subclavian -> Left Common Carotid -> Brachiocephalic',
      D: 'Celiac trunk -> SMA -> IMA'
    },
    correctOption: 'A',
    explanation: 'Arch of Aorta ให้ 3 แขนงเรียงจากขวาไปซ้าย: 1. Brachiocephalic artery/trunk (แยกต่อเป็น Right common carotid และ Right subclavian) 2. Left common carotid artery และ 3. Left subclavian artery',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 69,
    tags: ['arch-of-aorta', 'aortic-branches'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  // Lymphatic System (P.89 - P.102)
  {
    id: 'CARDIO-035',
    questionText: 'ท่อน้ำเหลืองฝอย (Lymphatic capillaries) แตกต่างจากหลอดเลือดฝอย (Blood capillaries) ทางโครงสร้างที่สำคัญอย่างไร?',
    options: {
      A: 'เป็นท่อปลายตัน (Blind-ended), มีผนังที่ยอมให้สารโมเลกุลใหญ่และแบคทีเรียผ่านเข้าได้ง่ายกว่า และมี Flap-like minivalves',
      B: 'เป็นวงจรปิดต่อเนื่องกับหลอดเลือดดำ',
      C: 'มีเม็ดเลือดแดงไหลเวียนหนาแน่น',
      D: 'มีกล้ามเนื้อหัวใจบีบตัวเป็นจังหวะ'
    },
    correctOption: 'A',
    explanation: 'Lymphatic capillaries เริ่มต้นเป็นท่อปลายตันในเนื้อเยื่อ รอยต่อระหว่าง endothelial cells ซ้อนทับกันคล้ายลิ้นทางเดียว (Minivalves) ยอมให้น้ำคั่ง โปรตีนขนาดใหญ่ และเซลล์เม็ดเลือดขาวไหลเข้าได้ แต่ไม่ให้ไหลย้อน',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 90,
    tags: ['lymphatic-capillaries', 'blind-ended'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-036',
    questionText: 'ท่อน้ำเหลืองขนาดใหญ่ที่สุดในร่างกายมนุษย์ที่ระบายน้ำเหลืองจากร่างกายส่วนล่างทั้งหมดและซีกซ้ายส่วนบน มีชื่อว่าอะไร?',
    options: {
      A: 'Thoracic duct (Left lymphatic duct)',
      B: 'Right lymphatic duct',
      C: 'Cisterna chyli',
      D: 'Hepatopancreatic duct'
    },
    correctOption: 'A',
    explanation: 'Thoracic duct เป็นท่อน้ำเหลืองหลักที่ยาวและใหญ่ที่สุด ระบายน้ำเหลืองจากร่างกายประมาณ 75% (ขาทั้งสองข้าง อุ้งเชิงกราน ช่องท้อง แขนซ้าย อกซ้าย ศีรษะและคอซีกซ้าย) เทเข้าสู่ Left Subclavian Vein',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 92,
    tags: ['thoracic-duct', 'lymphatic-drainage'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-037',
    questionText: 'กระเปาะถุงน้ำเหลือง Cisterna chyli ซึ่งเป็นจุดเริ่มต้นของ Thoracic duct ในช่องท้อง รับน้ำเหลืองที่มีลักษณะขุ่นขาวคล้ายน้ำนม (Chyle) เนื่องจากการดูดซึมสารอาหารชนิดใดจากลำไส้?',
    options: {
      A: 'Fat / Lipids (ไขมันในรูป Chylomicrons)',
      B: 'Glucose',
      C: 'Amino acids',
      D: 'Water soluble vitamins'
    },
    correctOption: 'A',
    explanation: 'Cisterna chyli ตั้งอยู่หน้าระดับกระดูก L1-L2 รับน้ำเหลืองจาก Intestinal trunk ซึ่งอุดมไปด้วยไขมันที่ถูกดูดซึมจาก Lacteals ในลำไส้เล็ก น้ำเหลืองที่มีไขมันนี้จึงมีสีขาวขุ่น เรียกว่า Chyle',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 92,
    tags: ['cisterna-chyli', 'chyle', 'fat-transport'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-038',
    questionText: 'ท่อน้ำเหลือง Right Lymphatic Duct ระบายน้ำเหลืองจากบริเวณใดของร่างกายเข้าสู่ Right Subclavian Vein?',
    options: {
      A: 'ศีรษะและคอด้านขวา, แขนขวา, และช่องอกด้านขวา (ประมาณ 25% ของร่างกาย)',
      B: 'ขาทั้งสองข้างและช่องท้อง',
      C: 'ร่างกายซีกซ้ายทั้งหมด',
      D: 'อวัยวะสืบพันธุ์'
    },
    correctOption: 'A',
    explanation: 'Right Lymphatic Duct มีขนาดยาวเพียง 1.25 cm รับน้ำเหลืองเฉพาะจากส่วนขวาบนของร่างกาย (Right upper quadrant: แขนขวา ด้านขวาของศีรษะ คอ และทรวงอก) เทเข้ามุมต่อมน้ำเลือดดำขวา (Right subclavian/internal jugular junction)',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 93,
    tags: ['right-lymphatic-duct', 'lymphatic-drainage'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-039',
    questionText: 'อวัยวะน้ำเหลืองที่มีขนาดใหญ่ที่สุดในร่างกายมนุษย์ (Largest lymphoid organ) คืออวัยวะใด?',
    options: {
      A: 'Spleen (ม้าม)',
      B: 'Thymus gland',
      C: 'Palatine tonsil',
      D: 'Appendix'
    },
    correctOption: 'A',
    explanation: 'ม้าม (Spleen) ตั้งอยู่ในช่องท้องด้านบนซ้ายใต้กะบังลม เป็นอวัยวะน้ำเหลืองที่ใหญ่ที่สุด มีน้ำหนักประมาณ 150-200 กรัม ทำหน้าที่กรองเลือด ทำลายเม็ดเลือดแดงที่หมดอายุ และสร้างภูมิคุ้มกัน',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 97,
    tags: ['spleen', 'largest-lymphoid-organ'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-040',
    questionText: 'เนื้อเยื่อส่วน Red pulp และ White pulp ของม้าม (Spleen) มีความแตกต่างกันในด้านหน้าที่อย่างไร?',
    options: {
      A: 'Red pulp กรองและทำลายเม็ดเลือดแดงที่เสื่อมสภาพ พร้อมกักเก็บเกล็ดเลือด ส่วน White pulp เป็นเนื้อเยื่อน้ำเหลืองทำหน้าที่เกี่ยวกับระบบภูมิคุ้มกัน (Immune response)',
      B: 'Red pulp สร้างน้ำลาย ส่วน White pulp สร้างอินซูลิน',
      C: 'Red pulp ทำลายไวรัส ส่วน White pulp ผลิตฮอร์โมนเพศ',
      D: 'ทั้งสองมีหน้าที่เหมือนกันทุกประการ'
    },
    correctOption: 'A',
    explanation: 'White pulp ประกอบด้วย Lymphoid tissue ล้อมรอบ Central arteries (PALS) ทำหน้าที่ดักจับสิ่งแปลกปลอมในกระแสเลือด ส่วน Red pulp ประกอบด้วย Splenic sinusoids และ Splenic cords (of Billroth) กรองและทำลาย RBCs ที่อายุเกิน 120 วัน',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 98,
    tags: ['spleen-histology', 'red-pulp', 'white-pulp'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-041',
    questionText: 'ต่อมไทมัส (Thymus gland) มีบทบาทสำคัญอย่างยิ่งต่อการเจริญเติบโตและการพัฒนาของเซลล์เม็ดเลือดขาวชนิดใด?',
    options: {
      A: 'T lymphocytes (T cells)',
      B: 'B lymphocytes (B cells)',
      C: 'Neutrophils',
      D: 'Erythrocytes'
    },
    correctOption: 'A',
    explanation: 'Thymus เป็น primary lymphoid organ ในช่องอกตอนบน เป็นสถานที่ที่ T progenitor cells จากไขกระดูกจะเดินทางมาเจริญเติบโตและผ่านกระบวนการคัดกรอง (T cell maturation & education)',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 99,
    tags: ['thymus', 't-cell-maturation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-042',
    questionText: 'ต่อมไทมัส (Thymus) มีการเปลี่ยนแปลงตามอายุ (Age-related changes) อย่างไรในผู้ใหญ่?',
    options: {
      A: 'มีขนาดใหญ่ที่สุดและทำงานสูงสุดในวัยเด็ก จากนั้นจะค่อยๆ ฝ่อเล็กลง (Involution) และถูกแทนที่ด้วยเนื้อเยื่อไขมันหลังวัยเจริญพันธุ์',
      B: 'จะเจริญเติบโตใหญ่ขึ้นเรื่อยๆ ตลอดชีวิต',
      C: 'สลายตัวหายไปตั้งแต่แรกเกิด',
      D: 'กลายเป็นกระดูกแข็ง'
    },
    correctOption: 'A',
    explanation: 'Thymus มีอัตราส่วนการทำงานสูงสุดในวัยทารกและเด็ก เมื่อเข้าสู่วัยรุ่นจะเกิดกระบวนการ Thymic involution คือค่อยๆ ฝ่อตัวลงและถูกแทนที่ด้วย Adipose tissue ในวัยผู้ใหญ่',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 99,
    tags: ['thymic-involution', 'thymus-atrophy'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-043',
    questionText: 'ต่อมทอนซิลคู่ใดที่ตั้งอยู่สองข้างของคอหอยหลังช่องปาก (Oropharynx) ระหว่าง Palatoglossal arch และ Palatopharyngeal arch ซึ่งมักเกิดการอักเสบ (Tonsillitis) ได้บ่อยที่สุด?',
    options: {
      A: 'Palatine tonsils',
      B: 'Pharyngeal tonsil (Adenoid)',
      C: 'Lingual tonsils',
      D: 'Tubal tonsils'
    },
    correctOption: 'A',
    explanation: 'Palatine tonsils คือต่อมทอนซิลคู่ที่เราอ้าปากแล้วมองเห็นได้ชัดเจนที่ช่องปากด้านหลัง เป็นต่อมทอนซิลที่พบการติดเชื้ออักเสบบ่อยที่สุดและมักได้รับการผ่าตัดต่อมทอนซิล (Tonsillectomy)',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 100,
    tags: ['palatine-tonsils', 'tonsillitis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-044',
    questionText: 'ต่อมทอนซิล Pharyngeal tonsil ตั้งอยู่บริเวณใด และหากบวมโตผิดปกติในเด็กจะเรียกว่าอะไร?',
    options: {
      A: 'ตั้งอยู่บนผนังหลังของ Nasopharynx เมื่อบวมโตจะเรียกว่า Adenoids (อาจอุดกั้นทางเดินหายใจ)',
      B: 'ตั้งอยู่ที่โคนลิ้น เรียกว่า Lingual goiter',
      C: 'ตั้งอยู่ในกระเพาะอาหาร',
      D: 'ตั้งอยู่ในกล่องเสียง'
    },
    correctOption: 'A',
    explanation: 'Pharyngeal tonsil อยู่ที่เพดานด้านหลังของ Nasopharynx หากอักเสบหรือโตมากจะเรียกว่า Adenoids ซึ่งอาจอุดกั้นทางเดินหายใจส่วนบน ทำให้เด็กต้องนอนอ้าปากหายใจหรือกรน',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 100,
    tags: ['adenoids', 'pharyngeal-tonsil', 'nasopharynx'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-045',
    questionText: 'วงแหวนของเนื้อเยื่อต่อมน้ำเหลืองรอบช่องทางเข้าคอหอยที่ช่วยดักจับเชื้อโรคที่เข้ามาทางการหายใจและการกิน เรียกว่าอะไร?',
    options: {
      A: 'Waldeyer\'s tonsillar ring',
      B: 'Circle of Willis',
      C: 'Inguinal ring',
      D: 'Fibrous ring'
    },
    correctOption: 'A',
    explanation: 'Waldeyer\'s lymphatic ring เป็นแนววงแหวนภูมิคุ้มกันด่านหน้า ประกอบด้วย Pharyngeal tonsil (บน), Tubal tonsils (ข้าง), Palatine tonsils (ข้างล่าง) และ Lingual tonsils (ที่โคนลิ้น)',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 100,
    tags: ['waldeyers-ring', 'tonsillar-ring'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-046',
    questionText: 'ทิศทางการไหลของน้ำเหลืองผ่านต่อมน้ำเหลือง (Lymph node) ข้อใดถูกต้อง?',
    options: {
      A: 'น้ำเหลืองเข้าสู่ต่อมทาง Afferent lymphatic vessels หลายเส้น และไหลออกจากต่อมทาง Efferent lymphatic vessel เพียง 1-2 เส้นที่บริเวณ Hilum',
      B: 'น้ำเหลืองเข้าทาง Efferent และออกทาง Afferent',
      C: 'ไม่มีท่อน้ำเหลืองเข้าออก',
      D: 'น้ำเหลืองไหลวนเป็นวงกลมโดยไม่ออกจากต่อม'
    },
    correctOption: 'A',
    explanation: 'น้ำเหลืองนำพาเชื้อโรคและแอนติเจนเข้าสู่ต่อมน้ำเหลืองผ่าน Afferent vessels หลายท่อรอบขอบนอก กรองผ่านไซนัส และไหลออกจากต่อมทาง Efferent vessels 1-2 ท่อที่รอยเว้า Hilum',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 94,
    tags: ['lymph-node-circulation', 'afferent-efferent'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-047',
    questionText: 'บริเวณ Germinal centers ในชั้นนอก (Cortex) ของต่อมน้ำเหลืองเป็นแหล่งรวมของเซลล์เม็ดเลือดขาวชนิดใดที่กำลังแบ่งตัวเมื่อถูกกระตุ้นด้วยแอนติเจน?',
    options: {
      A: 'B lymphocytes (B cells ซึ่งจะพัฒนาเป็น Plasma cells สร้าง Antibody)',
      B: 'Erythrocytes',
      C: 'Platelets',
      D: 'Basophils'
    },
    correctOption: 'A',
    explanation: 'Germinal centers ใน Lymphoid follicles ของชั้น Cortex เป็นบริเวณที่มีการเพิ่มจำนวนอย่างรวดเร็วของ B cells เพื่อคัดเลือกและพัฒนาเป็น Plasma cells ทำหน้าที่หลั่ง Antibodies เข้าสู่กระแสเลือด',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 95,
    tags: ['germinal-centers', 'b-cells', 'lymph-node-cortex'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-048',
    questionText: 'หลอดเลือดแดงคู่ใดที่วิ่งขึ้นไปตามด้านข้างของลำคอเพื่อส่งเลือดไปเลี้ยงศีรษะและสมอง และสามารถคลำชีพจร (Pulse) ได้ชัดเจนที่สุด?',
    options: {
      A: 'Common Carotid arteries',
      B: 'Subclavian arteries',
      C: 'Brachial arteries',
      D: 'Femoral arteries'
    },
    correctOption: 'A',
    explanation: 'Common Carotid artery (ซ้ายและขวา) วิ่งขึ้นไปใน Carotid sheath ข้างหลอดลม สามารถคลำชีพจร Carotid pulse ได้ง่ายข้างกระดูกอ่อนไทรอยด์ และจะแตกแขนงเป็น Internal และ External carotid arteries',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 70,
    tags: ['carotid-artery', 'carotid-pulse'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-049',
    questionText: 'หลอดเลือดดำที่อยู่ตื้นบริเวณข้อพับแขน (Cubital fossa) ซึ่งพยาบาลนิยมใช้ในการเจาะเลือดและให้สารน้ำบ่อยที่สุดคือเส้นใด?',
    options: {
      A: 'Median Cubital Vein',
      B: 'Great Saphenous Vein',
      C: 'Femoral Vein',
      D: 'Subclavian Vein'
    },
    correctOption: 'A',
    explanation: 'Median Cubital Vein ทอดตัวเชื่อมระหว่าง Cephalic vein และ Basilic vein บริเวณข้อพับแขน (Antecubital fossa) เป็นตำแหน่งยอดนิยมสำหรับการเจาะเลือด (Venipuncture) เพราะมีขนาดใหญ่และอยู่ตื้น',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 82,
    tags: ['median-cubital-vein', 'venipuncture', 'nursing-skills'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-050',
    questionText: 'หลอดเลือดดำที่ยาวที่สุดในร่างกายมนุษย์ (Longest vein) ซึ่งทอดตัวอยู่ด้านในของขาจากข้อเท้าขึ้นสู่ต้นขาคือเส้นใด?',
    options: {
      A: 'Great Saphenous Vein',
      B: 'Small Saphenous Vein',
      C: 'Femoral Vein',
      D: 'Popliteal Vein'
    },
    correctOption: 'A',
    explanation: 'Great Saphenous Vein เป็นหลอดเลือดดำตื้นที่ยาวที่สุด เริ่มต้นจากหลังเท้า ทอดผ่านหน้าตาตุ่มด้านใน ขึ้นมาตามขาด้านใน เข้าสู่ Femoral vein นิยมนำมาใช้ทำ Coronary Artery Bypass Graft (CABG)',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 85,
    tags: ['great-saphenous-vein', 'longest-vein', 'cabg'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

// Additional 50 high-yield questions for Cardiovascular & Lymphatic (Total = 100)
const additionalCardio = [
  {
    id: 'CARDIO-051',
    questionText: 'สารโปรตีนชนิดใดที่มีสัดส่วนมากที่สุดในพลาสมา (ประมาณ 54-60%) ทำหน้าที่สร้างแรงดันคอลลอยด์ออสโมติก (Colloid Osmotic Pressure) เพื่อดึงน้ำไว้ในหลอดเลือด?',
    options: {
      A: 'Albumin',
      B: 'Globulin',
      C: 'Fibrinogen',
      D: 'Hemoglobin'
    },
    correctOption: 'A',
    explanation: 'Albumin สังเคราะห์จากตับ เป็นโปรตีนพลาสมาที่มีสัดส่วนสูงที่สุด ทำหน้าที่หลักในการรักษา Blood Colloid Osmotic Pressure หากขาดอัลบูมินจะเกิดอาการบวมน้ำ (Edema)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 6,
    tags: ['plasma-proteins', 'albumin', 'oncotic-pressure'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-052',
    questionText: 'อายุขัยเฉลี่ย (Lifespan) ของเซลล์เม็ดเลือดแดง (RBC) ในกระแสเลือดคนปกติคือประมาณกี่วัน?',
    options: {
      A: 'ประมาณ 120 วัน',
      B: 'ประมาณ 10 วัน',
      C: 'ประมาณ 3 - 5 วัน',
      D: 'ตลอดชีวิตโดยไม่ตาย'
    },
    correctOption: 'A',
    explanation: 'เนื่องจาก RBC ไม่มีนิวเคลียสและไม่สามารถสังเคราะห์โปรตีนใหม่ได้ จึงมีอายุเฉลี่ยประมาณ 120 วัน จากนั้นจะเสื่อมสภาพและถูกทำลายโดย Macrophages ในม้าม ตับ และไขกระดูก',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 7,
    tags: ['rbc-lifespan', 'erythrocyte-turnover'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-053',
    questionText: 'ฮีโมโกลบิน 1 โมเลกุล (Hemoglobin molecule) สามารถจับกับโมเลกุลของก๊าซออกซิเจน (O2) ได้สูงสุดกี่โมเลกุล?',
    options: {
      A: '4 โมเลกุล (เพราะมี Heme group 4 หน่วย บรรจุ Fe2+ หน่วยละ 1 อะตอม)',
      B: '2 โมเลกุล',
      C: '1 โมเลกุล',
      D: '8 โมเลกุล'
    },
    correctOption: 'A',
    explanation: 'Hemoglobin ประกอบด้วยสาย polypeptide 4 สาย (Globin) แต่ละสายมีหมู่วงแหวน Heme ที่มีเหล็ก Fe2+ ตรงกลาง 1 อะตอม จึงสามารถจับกับ O2 ได้ 4 โมเลกุล (เกิดเป็น Oxyhemoglobin)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 7,
    tags: ['hemoglobin', 'oxygen-binding', 'heme'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-054',
    questionText: 'เซลล์เม็ดเลือดขาวชนิดใดที่ทำหน้าที่ผลิตแอนติบอดี (Antibodies / Immunoglobulins) ในกระแสเลือด?',
    options: {
      A: 'B lymphocytes เมื่อพัฒนาไปเป็น Plasma cells',
      B: 'T cytotoxic cells',
      C: 'Neutrophils',
      D: 'Natural killer cells'
    },
    correctOption: 'A',
    explanation: 'B lymphocytes เมื่อตรวจจับแอนติเจนและได้รับการกระตุ้น จะแบ่งตัวและพัฒนาเป็น Plasma cells ทำหน้าที่เป็นโรงงานสังเคราะห์และหลั่ง Antibody จำเพาะเข้าสู่ระบบไหลเวียนโลหิต (Humoral immunity)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 13,
    tags: ['plasma-cells', 'antibodies', 'b-cells'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-055',
    questionText: 'กล้ามเนื้อสันนูนคล้ายฟันหวี (Pectinate muscles) พบได้ที่ผนังด้านในของโครงสร้างหัวใจใด?',
    options: {
      A: 'Right Atrium (ผนังด้านหน้า) และ Auricles (ติ่งหูช้างของ Atrium)',
      B: 'Left Ventricle',
      C: 'Right Ventricle',
      D: 'Aortic valve'
    },
    correctOption: 'A',
    explanation: 'Pectinate muscles เป็นสันกล้ามเนื้อนูนขนานกันคล้ายซี่หวี พบที่ผนังด้านหน้าของ Right Atrium และภายใน Auricle ทั้งสองข้าง โดยมีรอยแบ่ง Crista terminalis กั้นกับผนังเรียบด้านหลัง',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 22,
    tags: ['pectinate-muscles', 'auricles', 'atrium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-056',
    questionText: 'สันกล้ามเนื้อนูนสานกันเป็นร่างแหบนผนังด้านในของโพรงหัวใจห้องล่างทั้งสองข้าง (Ventricles) มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Trabeculae carneae',
      B: 'Pectinate muscles',
      C: 'Chordae tendineae',
      D: 'Intercalated discs'
    },
    correctOption: 'A',
    explanation: 'Trabeculae carneae คือสันกล้ามเนื้อนูนสานกันเป็นร่างแหที่ผนังด้านในของ Ventricles ช่วยเพิ่มประสิทธิภาพการบีบตัวและลดแรงกระแทกของกระแสน้ำเลือด',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 27,
    tags: ['trabeculae-carneae', 'ventricles'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-057',
    questionText: 'ลิ้นหัวใจ Semilunar valves (Aortic valve และ Pulmonary valve) มีโครงสร้างแผ่นลิ้นกี่แฉก และมีรูปร่างอย่างไร?',
    options: {
      A: 'มี 3 แฉก รูปกระเปาะเสี้ยวพระจันทร์ (Crescent / Half-moon shaped cusps) โดยไม่มี Chordae tendineae ยึด',
      B: 'มี 2 แฉก และมี Chordae tendineae ยึดแน่น',
      C: 'มี 4 แฉก รูปสี่เหลี่ยม',
      D: 'มี 1 แฉกกลม'
    },
    correctOption: 'A',
    explanation: 'Semilunar valves แต่ละอันประกอบด้วยแผ่นลิ้นรูปกระเปาะเสี้ยวจันทร์ 3 ชิ้น ยึดกับผนังหลอดเลือดแดง ทำงานตามแรงดันเลือด เมื่อ Ventricle คลายตัว เลือดจะไหลกลับมาเติมเต็มกระเปาะทำให้ลิ้นแนบปิดสนิท',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 32,
    tags: ['semilunar-valves', 'aortic-valve', 'pulmonary-valve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-058',
    questionText: 'หลอดเลือด Coronary Sinus รวบรวมเลือดดำจากกล้ามเนื้อหัวใจทั้งหมดมาเปิดเข้าสู่หัวใจห้องใด?',
    options: {
      A: 'Right Atrium (หัวใจห้องบนขวา)',
      B: 'Left Atrium',
      C: 'Right Ventricle',
      D: 'Superior Vena Cava'
    },
    correctOption: 'A',
    explanation: 'Coronary Sinus เป็นหลอดเลือดดำขนาดใหญ่ทอดอยู่ใน Coronary sulcus ทางด้านหลังของหัวใจ รับเลือดดำจาก Great, Middle, และ Small cardiac veins แล้วเทตรงเข้าสู่ Right Atrium',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 40,
    tags: ['coronary-sinus', 'cardiac-veins', 'right-atrium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-059',
    questionText: 'หลอดเลือดแดงแขนง Circumflex artery แยกตัวมาจากหลอดเลือดแดงใด และวิ่งไปเลี้ยงหัวใจส่วนใด?',
    options: {
      A: 'แยกมาจาก Left Coronary Artery (LCA) วิ่งอ้อมไปตาม Coronary sulcus เลี้ยง Atrium ซ้าย และผนังด้านข้าง/หลังของ Ventricle ซ้าย',
      B: 'แยกมาจาก Right Coronary Artery เลี้ยง Atrium ขวา',
      C: 'แยกมาจาก Aorta เลี้ยงปอด',
      D: 'แยกมาจาก Carotid artery'
    },
    correctOption: 'A',
    explanation: 'Left Coronary Artery แตกเป็น 2 แขนงหลักคือ LAD และ Circumflex artery โดย Circumflex วิ่งอ้อมไปทางด้านซ้ายและหลังใน Coronary groove เลี้ยง Left Atrium และ Lateral/Posterior wall ของ Left Ventricle',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 39,
    tags: ['circumflex-artery', 'lca'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-060',
    questionText: 'หลอดเลือดแดง Posterior Interventricular Artery (PDA) ในคนส่วนใหญ่ (~70-80% Right dominant) แยกออกมาจากหลอดเลือดแดงใด?',
    options: {
      A: 'Right Coronary Artery (RCA)',
      B: 'Left Anterior Descending artery (LAD)',
      C: 'Circumflex artery',
      D: 'Internal thoracic artery'
    },
    correctOption: 'A',
    explanation: 'ในสรีรวิทยาแบบ Right dominance หลอดเลือด Posterior Interventricular Artery (วิ่งในร่องด้านหลังของหัวใจ) แยกตัวออกมาจาก Right Coronary Artery เลี้ยงผนังล่างและ 1/3 หลังของ septum',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 39,
    tags: ['posterior-descending-artery', 'rca', 'cardiac-dominance'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-061',
    questionText: 'โครงสร้างกระดูกพังผืดของหัวใจ (Fibrous skeleton of the heart) มีหน้าที่สำคัญอย่างไรนอกจากเป็นที่เกาะของลิ้นหัวใจและกล้ามเนื้อ?',
    options: {
      A: 'ทำหน้าที่เป็นฉนวนกั้นไฟฟ้า (Electrical insulator) ป้องกันไม่ให้สัญญาณไฟฟ้าลัดจากห้องบนลงห้องล่างโดยไม่ผ่าน AV node',
      B: 'ผลิตฮอร์โมนควบคุมความดัน',
      C: 'สร้างเม็ดเลือดแดง',
      D: 'ป้องกันการติดเชื้อไวรัส'
    },
    correctOption: 'A',
    explanation: 'Fibrous skeleton ประกอบด้วยวงแหวน fibrous rings รอบลิ้นหัวใจทั้ง 4 นอกจากเป็นโครงร่างยึดเกาะแล้ว ยังทำหน้าที่เป็นฉนวนกั้นกระแสไฟฟ้า ทำให้คลื่นไฟฟ้าต้องผ่านทาง AV bundle เท่านั้น',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 36,
    tags: ['fibrous-skeleton', 'electrical-insulator'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-062',
    questionText: 'หลอดเลือดชนิดใดที่มีโครงสร้างผนังแบบ Elastic tissue หนาแน่นมาก (Elastic / Conducting arteries) เพื่อทำหน้าที่เป็น "Pressure reservoir" ช่วยรองรับแรงกระแทกของเลือดและเปลี่ยนการไหลแบบจังหวะให้ต่อเนื่อง?',
    options: {
      A: 'Aorta และ Pulmonary trunk',
      B: 'Radial artery และ Ulnar artery',
      C: 'Arterioles',
      D: 'Venules'
    },
    correctOption: 'A',
    explanation: 'Elastic (Conducting) arteries เช่น Aorta มีชั้น Tunica media เต็มไปด้วย Elastic laminae สามารถขยายตัวรับแรงดันขณะ Systole (Windkessel effect) และหดตัวคืนรูปผลักดันเลือดไปข้างหน้าขณะ Diastole',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 51,
    tags: ['elastic-arteries', 'aorta', 'windkessel-effect'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-063',
    questionText: 'หลอดเลือดฝอยชนิด Sinusoids (Discontinuous capillaries) มีลักษณะเด่นอย่างไร และพบได้ในอวัยวะใด?',
    options: {
      A: 'มีช่องว่างระหว่างเซลล์ขนาดใหญ่มากและมี Basement membrane ที่ไม่สมบูรณ์ พบในตับ (Liver), ม้าม (Spleen), และไขกระดูก (Bone marrow)',
      B: 'มีผนังทึบไม่มีรูพรุน พบในสมอง',
      C: 'พบในผิวหนังเท่านั้น',
      D: 'มีลิ้นเปิดปิดคล้ายหลอดเลือดดำ'
    },
    correctOption: 'A',
    explanation: 'Sinusoids มีเส้นผ่านศูนย์กลางกว้าง มีรอยแยกขนาดใหญ่ และ basement membrane ขาดช่วง ช่วยให้โปรตีนขนาดใหญ่และเซลล์เม็ดเลือดเคลื่อนผ่านเข้าออกจากเนื้อเยื่อได้ พบในตับ ม้าม และไขกระดูก',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 57,
    tags: ['sinusoids', 'discontinuous-capillaries', 'liver-spleen'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-064',
    questionText: 'โครงสร้างใดทำหน้าที่ควบคุมการไหลของเลือดเข้าสู่ร่างแหหลอดเลือดฝอย (Capillary bed) โดยสามารถหดรัดปิดกั้นเลือดไม่ให้เข้าสู่ร่างแหเมื่อเนื้อเยื่อไม่ต้องการ?',
    options: {
      A: 'Precapillary sphincters (หูรูดก่อนหลอดเลือดฝอย)',
      B: 'Venous valves',
      C: 'Papillary muscles',
      D: 'Aortic semilunar valves'
    },
    correctOption: 'A',
    explanation: 'Precapillary sphincter เป็นวงแหวนกล้ามเนื้อเรียบที่จุดเริ่มต้นของแต่ละหลอดเลือดฝอยแท้ (True capillary) หดหรือคลายตามความต้องการสารอาหารและออกซิเจนของเนื้อเยื่อเฉพาะที่ (Vasomotion)',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 58,
    tags: ['precapillary-sphincters', 'microcirculation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-065',
    questionText: 'กลไก Skeletal muscle pump ช่วยในการไหลเวียนของเลือดดำกลับสู่หัวใจ (Venous return) ได้อย่างไร?',
    options: {
      A: 'การหดตัวของกล้ามเนื้อลายรอบหลอดเลือดดำจะบีบดันเลือดขึ้นบน และมีลิ้นหลอดเลือดดำคอยกั้นไม่ให้เลือดไหลย้อนกลับ',
      B: 'การบีบตัวของหลอดเลือดแดงใหญ่',
      C: 'การขยายตัวของกระเพาะปัสสาวะ',
      D: 'การเต้นของชีพจรข้อมือ'
    },
    correctOption: 'A',
    explanation: 'เมื่อกล้ามเนื้อขาหดตัวขณะเดิน จะกดบีบหลอดเลือดดำส่วนลึก (Deep veins) ดันเลือดพุ่งขึ้นสู่หัวใจ โดยมี Venous valves ป้องกันไม่ให้เลือดไหลย้อนลงตามแรงดึงดูดของโลก',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 63,
    tags: ['skeletal-muscle-pump', 'venous-return'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-066',
    questionText: 'เส้นเลือดแดงใหญ่ Abdominal Aorta สิ้นสุดลงที่ระดับกระดูกสันหลังระดับ L4 โดยแตกแขนงออกเป็นหลอดเลือดใด?',
    options: {
      A: 'Right and Left Common Iliac arteries',
      B: 'Femoral arteries',
      C: 'Renal arteries',
      D: 'Celiac trunk'
    },
    correctOption: 'A',
    explanation: 'Abdominal Aorta วิ่งลงมาตามแนวกระดูกสันหลังจนถึงระดับ L4 (ระดับเดียวกับยอดสะโพก Iliac crest) จากนั้นจะแตกออกเป็น 2 แขนงใหญ่คือ Right และ Left Common Iliac arteries ไปเลี้ยงอุ้งเชิงกรานและขา',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 74,
    tags: ['abdominal-aorta-bifurcation', 'common-iliac-arteries'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-067',
    questionText: 'หลอดเลือดแดงใดที่ทอดผ่านบริเวณข้อมือด้านหัวแม่มือ และเป็นตำแหน่งที่นิยมใช้ในการคลำนับอัตราชีพจร (Radial pulse) มากที่สุด?',
    options: {
      A: 'Radial artery',
      B: 'Ulnar artery',
      C: 'Brachial artery',
      D: 'Axillary artery'
    },
    correctOption: 'A',
    explanation: 'Radial artery วิ่งลงมาตามขอบด้านข้าง (Lateral) ของปลายแขน วางตัวตื้นอยู่บนกระดูก Radius บริเวณร่องข้อมือด้านนิ้วหัวแม่มือ เป็นตำแหน่งมาตรฐานที่นิยมคลำ Radial pulse',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 72,
    tags: ['radial-artery', 'radial-pulse'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-068',
    questionText: 'หลอดเลือดแดงใดที่ใช้เป็นตำแหน่งหลักในการวางแป้นหูฟัง (Stethoscope) เพื่อฟังเสียง Korotkoff sounds ในการวัดความดันโลหิตที่ต้นแขน?',
    options: {
      A: 'Brachial artery',
      B: 'Radial artery',
      C: 'Carotid artery',
      D: 'Femoral artery'
    },
    correctOption: 'A',
    explanation: 'Brachial artery ทอดตัวอยู่ด้านในของกล้ามเนื้อ Biceps brachii และวิ่งผ่านกึ่งกลางด้านในของข้อพับแขน (Cubital fossa) เป็นตำแหน่งหลักในการฟังเสียงเพื่อวัดความดันโลหิตด้วย Sphygmomanometer',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 71,
    tags: ['brachial-artery', 'blood-pressure-measurement'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-069',
    questionText: 'Circle of Willis (Cerebral arterial circle) ฐานสมองเกิดจากการเชื่อมต่อกันระหว่างระบบหลอดเลือดคู่ใด?',
    options: {
      A: 'Internal Carotid arteries และ Vertebrobasilar system (Vertebral / Basilar arteries)',
      B: 'External Carotid arteries และ Jugular veins',
      C: 'Aorta และ Pulmonary trunk',
      D: 'Subclavian artery และ Axillary artery'
    },
    correctOption: 'A',
    explanation: 'Circle of Willis เป็นวงแหวนเชื่อมต่อของหลอดเลือดแดงที่ฐานสมอง เกิดจากการเชื่อมกันของ Internal Carotid arteries (ระบบหน้า) และ Vertebrobasilar system (ระบบหลัง) ผ่าน Communicating arteries ป้องกันสมองขาดเลือด',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 70,
    tags: ['circle-of-willis', 'cerebral-circulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-070',
    questionText: 'หลอดเลือดดำ Inferior Vena Cava (IVC) เกิดจากการรวมตัวกันของหลอดเลือดดำใดที่ระดับกระดูกสันหลัง L5?',
    options: {
      A: 'Right and Left Common Iliac veins',
      B: 'Renal veins',
      C: 'Hepatic portal veins',
      D: 'Femoral veins'
    },
    correctOption: 'A',
    explanation: 'IVC เกิดจากการรวมตัวกันของ Right และ Left Common Iliac veins ที่ระดับกระดูก L5 หลังจุดแยกของ Common iliac arteries แล้วทอดขึ้นขนานทางขวาของ Aorta เข้าสู่หัวใจห้องบนขวา',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 84,
    tags: ['ivc', 'common-iliac-veins'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-071',
    questionText: 'ระบบหลอดเลือดดำ Azygos system (Azygos, Hemiazygos, Accessory hemiazygos veins) ทำหน้าที่ระบายเลือดดำจากบริเวณใดเข้าสู่ SVC?',
    options: {
      A: 'ผนังทรวงอก (Thoracic wall), ช่องว่างระหว่างซี่โครง, และอวัยวะภายในช่องอก',
      B: 'สมองและกะโหลกศีรษะ',
      C: 'ตับและลำไส้เล็ก',
      D: 'ขาหนีบและต้นขา'
    },
    correctOption: 'A',
    explanation: 'Azygos vein ทอดตัวทางด้านขวาของกระดูกสันหลังอก รับเลือดดำจาก Intercostal veins ของผนังทรวงอกและหลอดอาหาร แล้วโค้งข้ามขั้วปอดขวาเทเข้าสู่ Superior Vena Cava โดยตรง',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 81,
    tags: ['azygos-system', 'thoracic-wall-veins'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-072',
    questionText: 'หลอดเลือดขนาดเล็กที่ทำหน้าที่ส่งเลือดไปเลี้ยงเซลล์ในชั้นนอก (Tunica media และ Adventitia) ของผนังหลอดเลือดขนาดใหญ่ เช่น Aorta เรียกว่าอะไร?',
    options: {
      A: 'Vasa vasorum (หลอดเลือดเลี้ยงหลอดเลือด)',
      B: 'Coronary arteries',
      C: 'Precapillary sphincters',
      D: 'Metarterioles'
    },
    correctOption: 'A',
    explanation: 'Vasa vasorum (Vessels of the vessels) เป็นเครือข่ายหลอดเลือดแดงและดำขนาดจิ๋วที่แทรกตัวอยู่ในชั้น Tunica adventitia เพื่อนำ O2 และสารอาหารไปเลี้ยงเซลล์ผนังหลอดเลือดขนาดใหญ่ที่มีผนังหนาเกินกว่าจะรับอาหารจากการแพร่',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 49,
    tags: ['vasa-vasorum', 'vessel-nutrition'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-073',
    questionText: 'การอุดตันของท่อน้ำเหลือง (Lymphatic obstruction) เช่น จากพยาธิโรคเท้าช้าง (Filariasis) หรือการผ่าตัดเลาะต่อมน้ำเหลือง จะส่งผลให้เกิดพยาธิสภาพข้อใด?',
    options: {
      A: 'Lymphedema (อาการบวมน้ำเหลืองอย่างรุนแรงของเนื้อเยื่อส่วนปลาย)',
      B: 'ความดันโลหิตต่ำเฉียบพลัน',
      C: 'ดีซ่านตัวเหลืองตาเหลือง',
      D: 'เลือดออกไม่หยุด'
    },
    correctOption: 'A',
    explanation: 'เมื่อท่อน้ำเหลืองอุดตัน น้ำและโปรตีนที่ซึมออกจากหลอดเลือดฝอยจะไม่สามารถระบายกลับเข้าสู่ระบบไหลเวียนได้ เกิดการสะสมของ interstitial fluid นำไปสู่ภาวะบวมน้ำเหลือง (Lymphedema)',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 91,
    tags: ['lymphedema', 'lymphatic-obstruction', 'clinical'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-074',
    questionText: 'ต่อมน้ำเหลือง Sentinel lymph node มีความสำคัญอย่างไรในทางคลินิกโรคมะเร็งเต้านม?',
    options: {
      A: 'เป็นต่อมน้ำเหลืองต่อมแรกที่รับการระบายน้ำเหลืองจากเนื้องอก หากตรวจไม่พบเซลล์มะเร็ง โอกาสที่มะเร็งจะแพร่กระจายไปต่อมอื่นจะมีน้อยมาก',
      B: 'เป็นต่อมที่ผลิตฮอร์โมนเอสโตรเจน',
      C: 'เป็นต่อมน้ำเหลืองที่มีขนาดใหญ่ที่สุดในรักแร้',
      D: 'เป็นต่อมน้ำเหลืองที่สร้างเม็ดเลือดขาวชนิดเดียว'
    },
    correctOption: 'A',
    explanation: 'Sentinel node เป็นต่อมน้ำเหลืองด่านแรก (First guardian) ในสายธารน้ำเหลืองจากก้อนมะเร็ง ศัลยแพทย์มักตัดไปตรวจ (Sentinel lymph node biopsy) เพื่อประเมินการแพร่กระจายก่อนตัดสินใจเลาะต่อมน้ำเหลืองทั้งหมด',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 96,
    tags: ['sentinel-node', 'breast-cancer', 'clinical-application'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-075',
    questionText: 'กลุ่มต่อมน้ำเหลืองบริเวณรักแร้ (Axillary lymph nodes) รับน้ำเหลืองจากบริเวณใดเป็นหลัก?',
    options: {
      A: 'เต้านม (ประมาณ 75%), ผนังทรวงอกส่วนบน, และแขนข้างเดียวกัน',
      B: 'ขาทั้งสองข้างและฝีเย็บ',
      C: 'สมองและใบหน้า',
      D: 'ตับและลำไส้'
    },
    correctOption: 'A',
    explanation: 'Axillary lymph nodes รับการระบายน้ำเหลืองมากกว่า 75% จากเต้านม (Mammary gland), รยางค์บน (Upper limb) ทั้งหมด และผนังหน้าอก/หน้าท้องส่วนบนเหนือระดับสะดือ',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 96,
    tags: ['axillary-lymph-nodes', 'breast-drainage'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-076',
    questionText: 'กลุ่มต่อมน้ำเหลืองบริเวณขาหนีบ (Inguinal lymph nodes) ทำหน้าที่รับน้ำเหลืองจากบริเวณใด?',
    options: {
      A: 'รยางค์ล่าง (Lower limb), ผนังหน้าท้องใต้สะดือ, ก้น, และอวัยวะสืบพันธุ์ภายนอก',
      B: 'เต้านมและคอ',
      C: 'ม้ามและกระเพาะอาหาร',
      D: 'หัวใจและปอด'
    },
    correctOption: 'A',
    explanation: 'Inguinal lymph nodes (ทั้งกลุ่ม Superficial และ Deep) กรองน้ำเหลืองจากขาทั้งข้าง, ผนังหน้าท้องส่วนล่างใต้ระดับสะดือ, บริเวณฝีเย็บ (Perineum) และอวัยวะเพศภายนอก',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 96,
    tags: ['inguinal-lymph-nodes', 'lower-limb-drainage'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-077',
    questionText: 'เซลล์เม็ดเลือดขาวชนิดใดที่ทำหน้าที่เป็นเซลล์เม็ดเลือดขาวจำเพาะ (Specific immunity) แบ่งออกเป็น T cells และ B cells?',
    options: {
      A: 'Lymphocytes',
      B: 'Neutrophils',
      C: 'Monocytes',
      D: 'Eosinophils'
    },
    correctOption: 'A',
    explanation: 'Lymphocytes (มีประมาณ 20-25% ของ WBC ทั้งหมด) เป็นเซลล์หลักของระบบภูมิคุ้มกันแบบจำเพาะเจาะจง (Adaptive immunity) มีนิวเคลียสกลมเข้มเกือบเต็มเซลล์ แบ่งเป็น T cells, B cells และ NK cells',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 13,
    tags: ['lymphocytes', 'adaptive-immunity'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-078',
    questionText: 'ในวงจรไหลเวียนเลือดของทารกในครรภ์ (Fetal circulation) หลอดเลือด Ductus arteriosus เชื่อมระหว่างโครงสร้างใดเพื่อลัดเลือดไม่ให้ผ่านปอด?',
    options: {
      A: 'เชื่อมระหว่าง Pulmonary trunk กับ Arch of Aorta (กลายเป็น Ligamentum arteriosum หลังคลอด)',
      B: 'เชื่อมระหว่าง Umbilical vein กับ IVC',
      C: 'เชื่อมระหว่าง Right atrium กับ Left atrium',
      D: 'เชื่อมระหว่าง Carotid artery กับ Jugular vein'
    },
    correctOption: 'A',
    explanation: 'Ductus arteriosus เป็นหลอดเลือดลัดเชื่อมระหว่าง Pulmonary trunk กับ Aorta เพื่อเบี่ยงเบนเลือดดำที่มี O2 ต่ำไม่ให้เข้าสู่ปอดที่ยังไม่ขยายตัว เมื่อทารกหายใจครั้งแรกจะหดตัวกลายเป็น Ligamentum arteriosum',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 37,
    tags: ['ductus-arteriosus', 'fetal-circulation', 'ligamentum-arteriosum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-079',
    questionText: 'หลอดเลือดแดงใดที่นำเลือดดำ (Deoxygenated blood) ออกจากหัวใจ?',
    options: {
      A: 'Pulmonary arteries (หลอดเลือดแดงปอด)',
      B: 'Aorta',
      C: 'Coronary arteries',
      D: 'Carotid arteries'
    },
    correctOption: 'A',
    explanation: 'ข้อยกเว้นสำคัญ! Pulmonary arteries เป็นหลอดเลือดแดงเพียงชนิดเดียวในผู้ใหญ่ที่นำ "เลือดดำ" (O2 ต่ำ) ออกจากหัวใจห้องล่างขวาไปสู่ปอดเพื่อฟอกออกซิเจน',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 27,
    tags: ['pulmonary-arteries', 'deoxygenated-blood', 'exceptions'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-080',
    questionText: 'หลอดเลือดดำใดที่นำเลือดแดง (Oxygenated blood) เข้าสู่หัวใจ?',
    options: {
      A: 'Pulmonary veins (หลอดเลือดดำปอด 4 เส้น)',
      B: 'Superior Vena Cava',
      C: 'Inferior Vena Cava',
      D: 'Jugular veins'
    },
    correctOption: 'A',
    explanation: 'ข้อยกเว้นสำคัญ! Pulmonary veins เป็นหลอดเลือดดำที่นำ "เลือดแดง" (O2 สูง) ที่ฟอกแล้วจากปอดกลับเข้าสู่หัวใจห้องบนซ้าย (Left Atrium)',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 30,
    tags: ['pulmonary-veins', 'oxygenated-blood'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-081',
    questionText: 'ภาวะ Cardiac Tamponade (ภาวะบีบรัดหัวใจเฉียบพลัน) เกิดจากพยาธิสภาพข้อใด?',
    options: {
      A: 'การมีของเหลวหรือเลือดสะสมในช่อง Pericardial cavity ในปริมาณมากจนเพิ่มแรงดันกดเบียดหัวใจ ทำให้ Ventricles ขยายตัวรับเลือดไม่ได้',
      B: 'การติดเชื้อแบคทีเรียที่ลิ้นหัวใจ',
      C: 'การขาดเลือดของกล้ามเนื้อหัวใจ',
      D: 'การเต้นของหัวใจช้าเกินไป'
    },
    correctOption: 'A',
    explanation: 'เมื่อมีของเหลวคั่งใน Pericardial space เกินความจุของ Fibrous pericardium ที่ไม่ยืดหยุ่น จะเกิดแรงดันกดทับบีบห้องหัวใจ (Cardiac Tamponade) เลือดไหลกลับเข้า Atrium ไม่ได้ ความดันตกและถึงแก่ชีวิต',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 17,
    tags: ['cardiac-tamponade', 'pericardial-effusion', 'clinical'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-082',
    questionText: 'แผ่นกั้นระหว่างหัวใจห้องล่างซ้ายและห้องล่างขวา มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Interventricular septum (IVS)',
      B: 'Interatrial septum',
      C: 'Crista terminalis',
      D: 'Sulcus terminalis'
    },
    correctOption: 'A',
    explanation: 'Interventricular septum (IVS) เป็นผนังหนาที่กั้นระหว่าง Left และ Right Ventricles ประกอบด้วยส่วนกล้ามเนื้อหนา (Muscular part) ตอนล่าง และส่วนพังผืดบาง (Membranous part) ตอนบน',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 31,
    tags: ['interventricular-septum', 'septum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-083',
    questionText: 'Moderator band (Septomarginal trabecula) เป็นแถบกล้ามเนื้อพิเศษที่พบเฉพาะในหัวใจห้องใด และมีหน้าที่อะไร?',
    options: {
      A: 'พบใน Right Ventricle ทำหน้าที่นำแขนง Purkinje fibers ของ Right bundle branch ข้ามจาก Septum ไปยัง Anterior papillary muscle',
      B: 'พบใน Left Ventricle ช่วยสร้างความดัน',
      C: 'พบใน Right Atrium กั้นเลือดดำ',
      D: 'พบใน Left Atrium รับเลือดแดง'
    },
    correctOption: 'A',
    explanation: 'Moderator band เป็นสันกล้ามเนื้อข้ามระหว่าง Interventricular septum กับฐานของ Anterior papillary muscle ใน Right Ventricle ช่วยส่งผ่านสัญญาณไฟฟ้าให้ Papillary muscle หดตัวก่อน Ventricle บีบตัวเต็มที่',
    system: systemName,
    topic: 'Cardiac Chambers & Valves',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 28,
    tags: ['moderator-band', 'right-ventricle', 'conduction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-084',
    questionText: 'หลอดเลือดดำ Great Saphenous Vein ทอดตัวผ่านขึ้นมาจากเท้าโดยอยู่ตำแหน่งใดของตาตุ่มข้อเท้า (Malleolus)?',
    options: {
      A: 'อยู่ด้านหน้าต่อตาตุ่มด้านใน (Anterior to Medial Malleolus)',
      B: 'อยู่ด้านหลังต่อตาตุ่มด้านนอก',
      C: 'อยู่ใต้ฝ่าเท้า',
      D: 'อยู่ระหว่างนิ้วเท้า'
    },
    correctOption: 'A',
    explanation: 'Great Saphenous Vein วิ่งพาดขึ้นหน้าตาตุ่มด้านใน (Anterior to medial malleolus) เป็นแลนด์มาร์กสำคัญในการทำ Venous cutdown เพื่อเปิดเส้นเลือดให้สารน้ำในภาวะฉุกเฉินเมื่อหาเส้นอื่นไม่ได้',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 85,
    tags: ['great-saphenous-vein', 'medial-malleolus', 'cutdown'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-085',
    questionText: 'หลอดเลือดแดงใดที่แยกออกมาจาก Brachial artery ที่บริเวณข้อพับแขน แล้ววิ่งลงไปตามด้านนิ้วก้อย (Medial side) ของปลายแขน?',
    options: {
      A: 'Ulnar artery',
      B: 'Radial artery',
      C: 'Axillary artery',
      D: 'Subclavian artery'
    },
    correctOption: 'A',
    explanation: 'Brachial artery แตกออกเป็น 2 แขนงที่ปลายแขน: Radial artery ทางด้าน lateral (นิ้วหัวแม่มือ) และ Ulnar artery ทางด้าน medial (นิ้วก้อย) ซึ่งจะไปรวมกันเป็น Superficial และ Deep palmar arches ที่ฝ่ามือ',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 72,
    tags: ['ulnar-artery', 'forearm-vasculature'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-086',
    questionText: 'หลอดเลือดแดง Femoral artery เป็นการทอดตัวต่อเนื่องของหลอดเลือดแดงใด หลังจากลอดผ่านใต้ Inguinal ligament เข้าสู่ต้นขา?',
    options: {
      A: 'External Iliac artery',
      B: 'Internal Iliac artery',
      C: 'Abdominal Aorta',
      D: 'Celiac artery'
    },
    correctOption: 'A',
    explanation: 'เมื่อหลอดเลือดแดง External Iliac artery วิ่งลอดใต้เอ็นขาหนีบ (Inguinal ligament) เข้าสู่ Femoral triangle ของต้นขา จะเปลี่ยนชื่อเป็น Femoral artery เพื่อเลี้ยงขาทั้งหมด',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 75,
    tags: ['femoral-artery', 'external-iliac', 'inguinal-ligament'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-087',
    questionText: 'หลอดเลือดแดง Dorsalis pedis artery ซึ่งใช้คลำชีพจรที่หลังเท้า เป็นแขนงปลายที่ต่อเนื่องมาจากหลอดเลือดแดงใด?',
    options: {
      A: 'Anterior Tibial artery',
      B: 'Posterior Tibial artery',
      C: 'Fibular / Peroneal artery',
      D: 'Popliteal artery'
    },
    correctOption: 'A',
    explanation: 'Anterior Tibial artery วิ่งลงมาตามหน้าแข้ง เมื่อข้ามข้อเท้าเข้าสู่หลังเท้าจะเปลี่ยนชื่อเป็น Dorsalis pedis artery สามารถคลำชีพจรได้ระหว่างเอ็นเหยียดนิ้วโป้งและนิ้วชี้เท้า',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 76,
    tags: ['dorsalis-pedis', 'anterior-tibial', 'pedal-pulse'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-088',
    questionText: 'หลอดเลือดดำคู่ใดที่รวมตัวกันเป็น Brachiocephalic vein (Innominate vein) ในช่องอก?',
    options: {
      A: 'Internal Jugular vein และ Subclavian vein',
      B: 'External Jugular vein และ Cephalic vein',
      C: 'Azygos vein และ IVC',
      D: 'Femoral vein และ Iliac vein'
    },
    correctOption: 'A',
    explanation: 'ที่บริเวณรอยต่อคอกับอก (Venous angle) หลอดเลือด Internal Jugular vein (จากสมอง) และ Subclavian vein (จากแขน) จะรวมกันกลายเป็น Brachiocephalic vein ซึ่ง Brachiocephalic ซ้ายและขวาจะรวมกันเป็น SVC',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 80,
    tags: ['brachiocephalic-vein', 'internal-jugular', 'subclavian'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-089',
    questionText: 'หลอดเลือดดำ Internal Jugular Vein (IJV) ทอดตัวคู่ขนานกับโครงสร้างใดภายในปลอก Carotid sheath?',
    options: {
      A: 'Common Carotid artery และ Vagus nerve (CN X)',
      B: 'Phrenic nerve และ Subclavian artery',
      C: 'Trachea และ Esophagus',
      D: 'Femoral nerve และ Femoral artery'
    },
    correctOption: 'A',
    explanation: 'ภายใน Carotid sheath บรรจุโครงสร้างสำคัญ 3 อย่าง: 1. Common/Internal carotid artery (อยู่ด้านใน) 2. Internal jugular vein (อยู่ด้านนอก) และ 3. Vagus nerve (CN X อยู่ทางด้านหลังระหว่างเส้นเลือดทั้งสอง)',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 80,
    tags: ['carotid-sheath', 'internal-jugular-vein', 'vagus-nerve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-090',
    questionText: 'เซลล์เม็ดเลือดขาวชนิด Monocytes มีสัดส่วนคิดเป็นประมาณกี่เปอร์เซ็นต์ของเม็ดเลือดขาวทั้งหมดในกระแสเลือดปกติ?',
    options: {
      A: '3 - 8%',
      B: '60 - 70%',
      C: '20 - 25%',
      D: 'น้อยกว่า 0.1%'
    },
    correctOption: 'A',
    explanation: 'Monocyte พบได้ประมาณ 3-8% ของเม็ดเลือดขาวทั้งหมดในกระแสเลือด (อันดับที่สามรองจาก Neutrophils 60-70% และ Lymphocytes 20-25%)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 12,
    tags: ['monocyte-percentage', 'wbc-differential'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-091',
    questionText: 'ขนาดเฉลี่ยของหัวใจมนุษย์ผู้ใหญ่ปกติมีขนาดกว้าง ยาว และหนาประมาณเท่าใด?',
    options: {
      A: 'ยาวประมาณ 12 cm, กว้างประมาณ 9 cm, และหนาประมาณ 6 cm (ขนาดเท่ากำปั้นของผู้เป็นเจ้าของ)',
      B: 'ยาวประมาณ 25 cm, กว้างประมาณ 20 cm',
      C: 'ยาวประมาณ 5 cm, กว้างประมาณ 2 cm',
      D: 'ยาวประมาณ 50 cm'
    },
    correctOption: 'A',
    explanation: 'หัวใจผู้ใหญ่โดยเฉลี่ยมีขนาดยาวประมาณ 12 cm กว้าง 9 cm และหนา 6 cm น้ำหนักประมาณ 250-300 กรัม โดยประมาณเท่ากับขนาดกำปั้นของคนๆ นั้น',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 16,
    tags: ['heart-dimensions', 'heart-size'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-092',
    questionText: 'หลอดเลือดแดงแขนงแรกสุดที่แยกตัวออกจาก Abdominal Aorta ทันทีที่ลอดผ่านกะบังลมคือหลอดเลือดใด?',
    options: {
      A: 'Inferior phrenic arteries (และตามด้วย Celiac trunk)',
      B: 'Renal arteries',
      C: 'Common iliac arteries',
      D: 'Gonadal arteries'
    },
    correctOption: 'A',
    explanation: 'ทันทีที่ Abdominal Aorta ลอดผ่าน aortic hiatus (ระดับ T12) จะให้แขนง Inferior phrenic arteries ไปเลี้ยงกะบังลมด้านล่าง และให้แขนงเดี่ยวขนาดใหญ่แรกคือ Celiac trunk เลี้ยง Foregut',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 74,
    tags: ['abdominal-aorta-branches', 'inferior-phrenic', 'celiac-trunk'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-093',
    questionText: 'ร่องภายนอกของหัวใจที่แบ่งแยกระหว่างหัวใจห้องบน (Atria) และหัวใจห้องล่าง (Ventricles) ซึ่งมีหลอดเลือดโคโรนารีทอดตัวอยู่ มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Coronary sulcus (Atrioventricular groove)',
      B: 'Anterior interventricular sulcus',
      C: 'Posterior interventricular sulcus',
      D: 'Sulcus terminalis'
    },
    correctOption: 'A',
    explanation: 'Coronary sulcus (AV groove) เป็นร่องวงแหวนรอบหัวใจที่คั่นระหว่าง Atria และ Ventricles ภายในเป็นที่ทอดตัวของ Right coronary artery, Circumflex artery, และ Coronary sinus',
    system: systemName,
    topic: 'Heart Wall & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 21,
    tags: ['coronary-sulcus', 'av-groove'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-094',
    questionText: 'ในการนำกระแสไฟฟ้าของหัวใจ ใย Purkinje fibers มีคุณสมบัติเด่นข้อใดที่ทำให้กล้ามเนื้อหัวใจห้องล่างบีบตัวพร้อมกันได้อย่างมีประสิทธิภาพ?',
    options: {
      A: 'มีความเร็วในการนำกระแสไฟฟ้าสูงที่สุด (ประมาณ 4 เมตรต่อวินาที) มี Gap junctions หนาแน่น และมีเส้นผ่านศูนย์กลางขนาดใหญ่',
      B: 'นำกระแสไฟฟ้าช้าที่สุดในร่างกาย',
      C: 'ไม่สามารถส่งกระแสไฟฟ้าได้',
      D: 'ส่งสัญญาณเฉพาะเมื่อหัวใจหยุดเต้น'
    },
    correctOption: 'A',
    explanation: 'Purkinje fibers เป็นเซลล์กล้ามเนื้อหัวใจดัดแปลงที่มีขนาดใหญ่ มีไกลโคเจนสูง และมี Gap junctions จำนวนมาก นำสัญญาณเร็วถึง 1-4 m/s เพื่อให้ผนัง Ventricle หดตัวรีดเลือดพร้อมกันจาก Apex ขึ้นสู่ Base',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 47,
    tags: ['purkinje-fibers', 'conduction-velocity'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-095',
    questionText: 'หลอดเลือดแดง Popliteal artery ตั้งอยู่บริเวณใด และแตกแขนงต่อเป็นหลอดเลือดใด?',
    options: {
      A: 'ตั้งอยู่ในแอ่งพับหลังข้อเข่า (Popliteal fossa) และแตกเป็น Anterior Tibial และ Posterior Tibial arteries',
      B: 'ตั้งอยู่บริเวณข้อศอก',
      C: 'ตั้งอยู่บนใบหน้า',
      D: 'ตั้งอยู่ในทรวงอก'
    },
    correctOption: 'A',
    explanation: 'Femoral artery เมื่อลอดผ่าน Adductor hiatus ของกล้ามเนื้อ adductor magnus เข้าสู่แอ่งข้อพับหลังเข่าจะเปลี่ยนชื่อเป็น Popliteal artery จากนั้นจะแตกเป็น Anterior และ Posterior Tibial arteries',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 76,
    tags: ['popliteal-artery', 'popliteal-fossa'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-096',
    questionText: 'ระบบประสาทซิมพาเทติก (Sympathetic stimulation จาก Cardiac accelerator nerves) ส่งผลต่อหัวใจอย่างไร?',
    options: {
      A: 'เพิ่มอัตราการเต้นของหัวใจ (Heart rate) และเพิ่มแรงบีบตัวของกล้ามเนื้อหัวใจ (Contractility)',
      B: 'ลดอัตราการเต้นของหัวใจลงต่ำกว่า 40 ครั้ง/นาที',
      C: 'ทำให้หัวใจหยุดเต้นชั่วขณะ',
      D: 'ยับยั้งการไหลเวียนเลือดเข้าสู่หัวใจ'
    },
    correctOption: 'A',
    explanation: 'Sympathetic nerves ปล่อย Norepinephrine จับกับ Beta-1 adrenergic receptors บน SA node และ Myocardium ส่งผลเพิ่มทั้งความเร็วในการยิงสัญญาณ (Positive chronotropic) และเพิ่มแรงบีบตัว (Positive inotropic)',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 48,
    tags: ['sympathetic', 'heart-rate', 'contractility'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-097',
    questionText: 'ระบบประสาทพาราซิมพาเทติกผ่านเส้นประสาท Vagus nerve (CN X) ส่งผลหลักต่อหัวใจอย่างไร?',
    options: {
      A: 'ลดอัตราการเต้นของหัวใจ (Decrease heart rate) โดยออกฤทธิ์หลักที่ SA node และ AV node',
      B: 'เพิ่มแรงดันเลือดเป็นสองเท่า',
      C: 'ทำให้หลอดเลือดหัวใจอุดตัน',
      D: 'กระตุ้นให้ลิ้นหัวใจเปิดค้าง'
    },
    correctOption: 'A',
    explanation: 'Vagus nerve (Parasympathetic) ปล่อย Acetylcholine จับกับ Muscarinic (M2) receptors ที่ SA node และ AV node ทำหน้าที่หน่วงเวลาและลดอัตราการเต้นของหัวใจ (Negative chronotropic) ขณะพักผ่อน',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 48,
    tags: ['vagus-nerve', 'parasympathetic', 'bradycardia'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-098',
    questionText: 'หน้าที่สำคัญที่สุดของระบบน้ำเหลือง (Lymphatic System) ในการรักษาสมดุลของสารน้ำในร่างกายคือข้อใด?',
    options: {
      A: 'ดูดซึมสารน้ำและโปรตีนส่วนเกินที่คั่งค้างในเนื้อเยื่อ (ประมาณ 3 ลิตรต่อวัน) ส่งกลับคืนเข้าสู่ระบบไหลเวียนโลหิตทางหลอดเลือดดำ',
      B: 'สร้างน้ำปัสสาวะขับออกนอกร่างกาย',
      C: 'ส่งออกซิเจนไปยังเซลล์กล้ามเนื้อโดยตรง',
      D: 'ควบคุมอุณหภูมิร่างกายให้เย็นลง'
    },
    correctOption: 'A',
    explanation: 'ในแต่ละวัน สารน้ำจากหลอดเลือดฝอยซึมออกสู่ interstitial space มากกว่าที่ดูดกลับได้ประมาณ 3 ลิตร ระบบน้ำเหลืองมีหน้าที่เก็บรวบรวมสารน้ำและโปรตีนส่วนเกินนี้กลับเข้าสู่ระบบไหลเวียนเลือด หากล้มเหลวจะเกิด Edema ทันที',
    system: systemName,
    topic: 'Lymphatic Organs & Circulation',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 89,
    tags: ['lymphatic-function', 'fluid-balance'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-099',
    questionText: 'หลอดเลือดดำ Great Cardiac Vein ทอดตัวคู่ขนานไปกับหลอดเลือดแดงเส้นใดในร่องด้านหน้าของหัวใจ?',
    options: {
      A: 'Anterior Interventricular Artery (LAD)',
      B: 'Right Coronary Artery',
      C: 'Marginal artery',
      D: 'Aorta'
    },
    correctOption: 'A',
    explanation: 'Great Cardiac Vein วิ่งขึ้นตามร่อง anterior interventricular sulcus คู่ขนานไปกับ Anterior Interventricular artery (LAD) ก่อนจะอ้อมไปทางซ้ายเพื่อเทเข้าสู่ Coronary Sinus',
    system: systemName,
    topic: 'Coronary Circulation & Conduction',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 40,
    tags: ['great-cardiac-vein', 'lad-companion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-100',
    questionText: 'Baroreceptors (ตัวรับรู้แรงดันเลือด) ที่สำคัญในการส่งสัญญาณควบคุมความดันโลหิตแบบรีเฟล็กซ์ไปยังสมอง Medulla oblongata ตั้งอยู่ที่ใด?',
    options: {
      A: 'Carotid sinus (ที่โคน Internal Carotid) และ Aortic arch',
      B: 'Pulmonary veins และ Left ventricle',
      C: 'Femoral artery และ Radial artery',
      D: 'Inferior Vena Cava'
    },
    correctOption: 'A',
    explanation: 'Baroreceptors เป็น stretch receptors รับรู้แรงดันเลือด ตั้งอยู่ที่ Carotid sinus (ส่งสัญญาณผ่าน Glossopharyngeal nerve: CN IX) และ Aortic arch (ส่งสัญญาณผ่าน Vagus nerve: CN X) ส่งไปศูนย์ควบคุมใน Medulla เพื่อปรับความดันทันที',
    system: systemName,
    topic: 'Blood Vessels & Hemodynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 70,
    tags: ['baroreceptors', 'carotid-sinus', 'aortic-arch', 'bp-reflex'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

const allCardioQuestions = [...cardioQuestions, ...additionalCardio];

checkDistribution(allCardioQuestions);

const targetFile = path.join(__dirname, '..', 'src', 'data', 'cardioQuestions.ts');
writeQuestionsFile(targetFile, 'cardioQuestions', allCardioQuestions);
