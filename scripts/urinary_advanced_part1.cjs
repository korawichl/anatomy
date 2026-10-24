/**
 * scripts/urinary_advanced_part1.cjs
 * Questions 1 - 50: Kidney Functions, Gross Anatomy, Internal Structure, Nephron Histology, Glomerulus & Tubules
 * Increased complexity by 20-30% with clinical vignettes and high-yield distractors
 */

const systemName = 'Urinary System';
const sourceFile = 'Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf';

const part1 = [
  // 1-12: Kidney Functions, Homeostasis & Endocrine Roles
  {
    id: 'URINARY-001',
    questionText: 'ผู้ป่วยโรคไตวายเรื้อรังระยะสุดท้าย (End-Stage Renal Disease: ESRD) มักมีภาวะแทรกซ้อนคือโรคโลหิตจางรุนแรง (Severe anemia) ร่วมกับโรคกระดูกพรุนและระดับแคลเซียมในเลือดต่ำ ความผิดปกตินี้สัมพันธ์กับการสูญเสียหน้าที่ต่อมไร้ท่อ (Endocrine functions) ในการผลิตฮอร์โมน 2 ชนิดใดจากไต?',
    options: {
      A: 'Erythropoietin (EPO) ซึ่งกระตุ้นการสร้างเม็ดเลือดแดงในไขกระดูก และ Calcitriol (1,25-dihydroxyvitamin D3) ซึ่งช่วยดูดซึมแคลเซียมที่ลำไส้เล็ก',
      B: 'Renin และ Aldosterone',
      C: 'Insulin และ Glucagon',
      D: 'Parathyroid hormone และ Calcitonin'
    },
    correctOption: 'A',
    explanation: 'ไตมีหน้าที่ต่อมไร้ท่อสำคัญ 2 ประการ: 1. สร้างฮอร์โมน Erythropoietin (EPO) จาก Peritubular interstitial fibroblasts เพื่อกระตุ้นไขกระดูกสร้าง RBCs เมื่อไตวายจึงขาด EPO เกิดภาวะโลหิตจาง (Normocytic normochromic anemia) 2. ทำหน้าที่เติมหมู่ไฮดรอกซิลขั้นสุดท้ายสร้าง Calcitriol (Active Vitamin D3) เพื่อดูดซึม Ca2+ ที่ลำไส้ เมื่อขาดจึงเกิดภาวะ Renal osteodystrophy',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 3,
    tags: ['kidney-endocrine-functions', 'erythropoietin', 'calcitriol', 'esrd-anemia'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-002',
    questionText: 'ของเสียประเภทไนโตรเจน (Nitrogenous wastes) 3 ชนิดหลักที่ไตต้องกำจัดออกทางปัสสาวะ ได้แก่ ยูเรีย (Urea), ครีอะตินิน (Creatinine), และกรดยูริก (Uric acid) ข้อใดระบุแหล่งกำเนิดทางชีวเคมีของสารทั้งสามได้ถูกต้อง?',
    options: {
      A: 'Urea เกิดจากการสลายกรดอะมิโนและโปรตีนในตับ; Creatinine เกิดจากการสลาย Creatine phosphate ในกล้ามเนื้อลาย; Uric acid เกิดจากการสลายเบส Purine ของกรดนิวคลีอิก (DNA/RNA)',
      B: 'Urea เกิดจากการสลายกรดไขมัน; Creatinine เกิดจากการสลายกลูโคส; Uric acid เกิดจากการสลายฮีโมโกลบิน',
      C: 'Urea เกิดจากเม็ดเลือดแดง; Creatinine เกิดจากตับอ่อน; Uric acid เกิดจากต่อมไทรอยด์',
      D: 'ทั้งสามชนิดเกิดจากการสลายคอเลสเตอรอลในลำไส้ใหญ่'
    },
    correctOption: 'A',
    explanation: 'ของเสียไนโตรเจนในปัสสาวะ: 1. Urea (มีปริมาณมากที่สุด ประมาณ 21 กรัม/วัน) เกิดจากการทำ Deamination ของกรดอะมิโนในตับ 2. Creatinine (ประมาณ 1.8 กรัม/วัน) เกิดจากการแตกตัวของ Creatine phosphate ในกล้ามเนื้อ ซึ่งเป็นดัชนีวัดการทำงานของไตที่ดีเพราะสร้างคงที่ 3. Uric acid (ประมาณ 0.5 กรัม/วัน) เกิดจากการสลาย Purine bases หากขับไม่ออกจะตกผลึกเป็นโรคเกาต์ (Gout)',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 4,
    tags: ['nitrogenous-wastes', 'urea', 'creatinine', 'uric-acid'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-003',
    questionText: 'ในภาวะที่ร่างกายมีภาวะเลือดเป็นกรด (Metabolic acidosis, pH < 7.35) ท่อหน่วยไต (Renal tubules) จะมีกลไกทางสรีรวิทยาอย่างไรเพื่อปรับสมดุลกรด-ด่างของร่างกายกลับคืนสู่ค่าปกติ?',
    options: {
      A: 'ขับไอออนไฮโดรเจนส่วนเกิน (Secretion of H+) ออกไปกับปัสสาวะ พร้อมกับดูดซึมกลับและสร้างสารละลายไบคาร์บอเนตใหม่ (Reabsorption and generation of new HCO3-) เข้าสู่กระแสเลือด',
      B: 'ดูดกลับ H+ ทั้งหมดเข้าสู่กระแสเลือดและขับ HCO3- ทิ้ง',
      C: 'หยุดการกรองที่ Glomerulus ทั้งหมด',
      D: 'ขับสารน้ำตาลกลูโคสออกทางปัสสาวะ'
    },
    correctOption: 'A',
    explanation: 'ไตควบคุมสมดุลกรด-ด่างในระยะยาว: เมื่อเกิดภาวะ Acidosis เซลล์ Intercalated cells Type A ใน Collecting duct และเซลล์ใน PCT จะขับ H+ ออกสู่ปัสสาวะ (ผ่าน H+-ATPase และ Na+/H+ exchanger) โดยจับกับแอมโมเนีย (NH3 -> NH4+) และฟอสเฟต พร้อมกับดูดซึมและสังเคราะห์ HCO3- ใหม่กลับเข้ากระแสเลือดเพื่อเพิ่ม pH',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 3,
    tags: ['acid-base-balance', 'hydrogen-secretion', 'bicarbonate-reabsorption'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-004',
    questionText: 'ในภาวะอดอาหารเป็นเวลานาน (Prolonged starvation) ไตสามารถทำหน้าที่สังเคราะห์กลูโคสขึ้นมาใหม่จากสารตั้งต้นที่ไม่ใช่คาร์โบไฮเดรต (เช่น กรดอะมิโน Glutamine) เพื่อส่งเข้าสู่กระแสเลือดได้ถึง 20-40% กระบวนการนี้เรียกว่าอะไร?',
    options: {
      A: 'Gluconeogenesis',
      B: 'Glycogenolysis',
      C: 'Glycolysis',
      D: 'Lipogenesis'
    },
    correctOption: 'A',
    explanation: 'นอกเหนือจากตับแล้ว ไต (โดยเฉพาะเซลล์ของ Proximal Convoluted Tubule) มีเอนไซม์สำหรับกระบวนการ Gluconeogenesis (เช่น Glucose-6-phosphatase) สามารถสังเคราะห์กลูโคสใหม่จากสารตั้งต้น Glutamine และ Lactate ในช่วงที่อดอาหารเป็นเวลานานเพื่อรักษาระดับน้ำตาลในเลือดให้แก่สมอง',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 4,
    tags: ['gluconeogenesis', 'fasting-metabolism', 'kidney-functions'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 5-15: Gross Anatomy of the Kidneys, Position & Protective Layers
  {
    id: 'URINARY-005',
    questionText: 'ไตทั้งสองข้างตั้งอยู่ในช่องท้องบริเวณใด สัมพันธ์กับแนวกระดูกสันหลังระดับใด และเหตุใดไตข้างขวาจึงอยู่ในตำแหน่งที่ต่ำกว่าไตข้างซ้ายประมาณ 1.5 - 2 เซนติเมตร?',
    options: {
      A: 'ตั้งอยู่ในช่องว่างหลังเยื่อบุช่องท้อง (Retroperitoneal space) บริเวณระดับกระดูกสันหลัง T12 ถึง L3 โดยไตขวาอยู่ต่ำกว่าเนื่องจากมีพูขวาขนาดใหญ่ของตับ (Liver) เบียดอยู่ด้านบน',
      B: 'ตั้งอยู่ในช่องเยื่อบุช่องท้อง (Intraperitoneal) ที่ระดับ C7 ถึง T4',
      C: 'ตั้งอยู่ในอุ้งเชิงกรานข้างกระเพาะปัสสาวะ',
      D: 'ไตซ้ายอยู่ต่ำกว่าไตขวาเนื่องจากมีม้ามกดทับ'
    },
    correctOption: 'A',
    explanation: 'ไตเป็นอวัยวะ Retroperitoneal ตั้งอยู่สองข้างของกระดูกสันหลังช่วง T12 ถึง L3 โดยขั้วบนของไตขวาอยู่ที่ระดับซี่โครงที่ 12 ส่วนไตซ้ายอยู่ที่ระดับซี่โครงที่ 11 ไตข้างขวาจะอยู่ต่ำกว่าไตข้างซ้ายเล็กน้อย (ประมาณ 1.5-2 ซม.) เนื่องจากตับซึ่งมีขนาดใหญ่อยู่ทางขวาเบียดกดลงมา',
    system: systemName,
    topic: 'Kidney Gross Anatomy & Position',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 5,
    tags: ['kidney-position', 'retroperitoneal', 't12-l3', 'liver-relation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-006',
    questionText: 'เนื้อเยื่อเกี่ยวพันที่ทำหน้าที่ห่อหุ้มและปกป้องไตแบ่งออกเป็น 3 ชั้น ลำดับจากชั้นในสุดแนบชิดผิวไตออกสู่ชั้นนอกสุดข้อใดถูกต้อง?',
    options: {
      A: 'Renal capsule (Fibrous capsule) -> Adipose capsule (Perirenal fat) -> Renal fascia (Gerota\'s fascia)',
      B: 'Renal fascia -> Adipose capsule -> Renal capsule',
      C: 'Perirenal fat -> Renal capsule -> Renal fascia',
      D: 'Serosa -> Muscularis -> Mucosa'
    },
    correctOption: 'A',
    explanation: 'ชั้นห่อหุ้มไตเรียงจากในออกนอก: 1. Renal (Fibrous) capsule (ชั้นในสุด แนบติดผิวไต ป้องกันการบาดเจ็บและการติดเชื้อลุกลาม) 2. Adipose capsule / Perirenal fat (ชั้นกลาง เป็นไขมันหนาช่วยกันกระแทกและยึดไตให้อยู่กับที่) 3. Renal fascia / Gerota\'s fascia (ชั้นนอกสุด เป็นแผ่นพังผืดเหนียวตรึงไตและต่อมหมวกไตเข้ากับผนังช่องท้อง)',
    system: systemName,
    topic: 'Kidney Gross Anatomy & Position',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 6,
    tags: ['renal-capsule', 'perirenal-fat', 'renal-fascia', 'gerotas-fascia'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-007',
    questionText: 'ในผู้ป่วยที่มีภาวะน้ำหนักตัวลดลงอย่างรวดเร็วและรุนแรง อาจเกิดภาวะไตเลื่อนหลุดลงสู่ช่องเชิงกราน (Renal ptosis / Nephroptosis) ซึ่งอาจทำให้ท่อไตหักพับและเกิดการอุดตันของปัสสาวะ ภาวะนี้เกิดจากการสูญเสียเนื้อเยื่อห่อหุ้มไตชั้นใด?',
    options: {
      A: 'Adipose capsule (Perirenal fat pad) ที่ทำหน้าที่เป็นเบาะไขมันค้ำจุนพยุงตำแหน่งไต',
      B: 'Renal fibrous capsule',
      C: 'Renal cortex',
      D: 'Glomerular basement membrane'
    },
    correctOption: 'A',
    explanation: 'Adipose capsule (Perirenal fat) เป็นก้อนไขมันหนาที่โอบล้อมรอบไต ทำหน้าที่ค้ำจุนพยุงไตให้อยู่ในตำแหน่งปกติทางกายวิภาค หากน้ำหนักลดลงอย่างรวดเร็ว (เช่น ภาวะ Anorexia nervosa หรือโรคมะเร็ง) ก้อนไขมันนี้จะสลายไป ทำให้ไตเลื่อนหล่นลงล่าง (Nephroptosis / Floating kidney) ส่งผลให้ Ureter บิดงอ (Kinking) เกิดภาวะ Hydronephrosis',
    system: systemName,
    topic: 'Kidney Gross Anatomy & Position',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 6,
    tags: ['nephroptosis', 'renal-ptosis', 'perirenal-fat', 'hydronephrosis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-008',
    questionText: 'บริเวณรอยเว้าทางด้านในของไตเรียกว่า ขั้วไต (Renal Hilum) เป็นทางเข้าออกของโครงสร้างสำคัญ 3 ชนิด ลำดับการเรียงตัวของโครงสร้างดังกล่าวจาก "ด้านหน้าไปด้านหลัง" (Anterior to Posterior) ข้อใดถูกต้อง?',
    options: {
      A: 'Renal Vein (หน้าสุด) -> Renal Artery (ตรงกลาง) -> Renal Pelvis / Ureter (หลังสุด) [สูตรจำ V-A-P]',
      B: 'Renal Artery -> Renal Vein -> Renal Pelvis',
      C: 'Renal Pelvis -> Renal Artery -> Renal Vein',
      D: 'Ureter -> Renal Vein -> Renal Artery'
    },
    correctOption: 'A',
    explanation: 'ที่บริเวณ Renal Hilum โครงสร้างหลักเรียงลำดับจากหน้าไปหลัง (Anteroposterior relation) คือ: 1. Renal Vein อยู่หน้าสุด 2. Renal Artery อยู่ตรงกลาง 3. Renal Pelvis (ซึ่งจะทอดต่อเนื่องลงไปเป็น Ureter) อยู่ด้านหลังสุด จำง่ายๆ ว่า V-A-P (Vein, Artery, Pelvis)',
    system: systemName,
    topic: 'Kidney Gross Anatomy & Position',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 7,
    tags: ['renal-hilum', 'hilum-relations', 'vein-artery-pelvis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-009',
    questionText: 'เนื้อไตส่วนเปลือกนอก (Renal Cortex) มีส่วนที่แทรกตัวลึกลงมาคั่นระหว่างพีระมิดไต (Renal pyramids) แต่ละอันในชั้น Medulla ส่วนของเนื้อไตชั้นนอกที่แทรกเข้ามานี้มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Renal columns (Columns of Bertin)',
      B: 'Renal papillae',
      C: 'Minor calyces',
      D: 'Medullary rays'
    },
    correctOption: 'A',
    explanation: 'Renal columns (Columns of Bertin) คือส่วนของเนื้อไตชั้น Renal cortex ที่ยื่นแทรกลงมาในชั้น Renal medulla ระหว่างพีระมิดไตแต่ละอัน เป็นทางทอดผ่านของหลอดเลือด Interlobar arteries และ Interlobar veins',
    system: systemName,
    topic: 'Kidney Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 8,
    tags: ['renal-columns', 'columns-of-bertin', 'renal-cortex'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-010',
    questionText: 'เนื้อไตชั้นใน Renal Medulla ประกอบด้วยพีระมิดรูปกรวยไต (Renal pyramids) จำนวนประมาณ 8-18 อัน โดยส่วนปลายยอดแหลมของพีระมิดที่ชี้เข้าหาขั้วไตมีชื่อเรียกว่าอะไร และทำหน้าที่ปล่อยน้ำปัสสาวะเข้าสู่โครงสร้างใด?',
    options: {
      A: 'Renal papilla ซึ่งปล่อยน้ำปัสสาวะออกจากท่อ Collecting ducts เข้าสู่กรวยไตย่อย Minor calyx',
      B: 'Renal pelvis ซึ่งปล่อยเข้า Ureter',
      C: 'Major calyx ซึ่งปล่อยเข้าสู่กระเพาะปัสสาวะ',
      D: 'Renal hilum ซึ่งปล่อยเข้าสู่ Renal vein'
    },
    correctOption: 'A',
    explanation: 'ยอดแหลมของแต่ละ Renal pyramid เรียกว่า Renal papilla บนผิวมีรูเปิดเล็กๆ (Area cribrosa) ของ Papillary ducts (Ducts of Bellini) ทำหน้าที่ปล่อยน้ำปัสสาวะที่สร้างเสร็จสมบูรณ์แล้วเข้าสู่ Minor calyx (โดย Minor calyx แต่ละอันจะประกบครอบ Renal papilla เอาไว้)',
    system: systemName,
    topic: 'Kidney Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 9,
    tags: ['renal-papilla', 'minor-calyx', 'ducts-of-bellini'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-011',
    questionText: 'ลำดับเส้นทางการไหลของน้ำปัสสาวะ (Urine flow pathway) ภายในไตตั้งแต่จุดปลายของท่อไตจนกระทั่งออกจากขั้วไตสู่ท่อไตข้อใดถูกต้อง?',
    options: {
      A: 'Papillary duct -> Minor calyx -> Major calyx -> Renal pelvis -> Ureter',
      B: 'Major calyx -> Minor calyx -> Renal pelvis -> Papillary duct -> Ureter',
      C: 'Renal pelvis -> Major calyx -> Minor calyx -> Papillary duct -> Ureter',
      D: 'Collecting duct -> Renal pelvis -> Major calyx -> Minor calyx -> Ureter'
    },
    correctOption: 'A',
    explanation: 'เส้นทางการไหลของปัสสาวะ: 1. Papillary duct (ที่ยอด Renal papilla) -> 2. Minor calyx (กรวยไตย่อย 8-18 อัน) -> 3. รวมตัวกันเป็น Major calyx (กรวยไตใหญ่ 2-3 อัน) -> 4. เทรวมเข้าสู่ Renal pelvis (แอ่งกรวยไตใหญ่รูปกรวย) -> 5. ไหลออกจากขั้วไตเข้าสู่ Ureter ไปยังกระเพาะปัสสาวะ',
    system: systemName,
    topic: 'Kidney Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 9,
    tags: ['urine-flow-pathway', 'calyces', 'renal-pelvis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-012',
    questionText: 'ไตทั้งสองข้างได้รับปริมาณเลือดที่สูบฉีดออกจากหัวใจ (Cardiac Output) สูงถึงประมาณกี่เปอร์เซ็นต์ และมีอัตราการไหลเวียนของเลือดผ่านไต (Renal Blood Flow: RBF) ประมาณเท่าใดในภาวะพัก?',
    options: {
      A: 'ประมาณ 20 - 25% ของ Cardiac output หรือคิดเป็นอัตราการไหลประมาณ 1,200 มิลลิลิตรต่อนาที',
      B: 'ประมาณ 5% ของ Cardiac output หรือประมาณ 250 มล./นาที',
      C: 'ประมาณ 50% ของ Cardiac output หรือประมาณ 2,500 มล./นาที',
      D: 'ประมาณ 10% ของ Cardiac output หรือประมาณ 500 มล./นาที'
    },
    correctOption: 'A',
    explanation: 'แม้ไตทั้งสองข้างจะมีน้ำหนักรวมกันไม่ถึง 0.5% ของน้ำหนักตัว แต่ได้รับเลือดมากถึง 20-25% ของ Resting Cardiac Output (ประมาณ 1,200 มล./นาที) ซึ่งการไหลเวียนที่สูงมหาศาลนี้ไม่ได้เป็นไปเพื่อตอบสนองความต้องการเมแทบอลิซึมของเนื้อไตเอง แต่เพื่อทำหน้าที่กรองและปรับสมดุลของพลาสมาทั่วร่างกายอย่างต่อเนื่อง',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 10,
    tags: ['renal-blood-flow', 'rbf', 'cardiac-output-fraction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-013',
    questionText: 'ลำดับการแตกแขนงของหลอดเลือดแดงภายในไตจาก Renal Artery เข้าสู่หน่วยกรอง Glomerulus ข้อใดเรียงลำดับได้อย่างถูกต้องตามหลักกายวิภาค?',
    options: {
      A: 'Renal artery -> Segmental arteries -> Interlobar arteries -> Arcuate arteries -> Cortical radiate (Interlobular) arteries -> Afferent arterioles -> Glomerular capillaries',
      B: 'Renal artery -> Arcuate arteries -> Segmental arteries -> Afferent arterioles',
      C: 'Renal artery -> Interlobular arteries -> Interlobar arteries -> Efferent arterioles',
      D: 'Renal artery -> Glomerular capillaries -> Afferent arterioles -> Arcuate arteries'
    },
    correctOption: 'A',
    explanation: 'การแตกแขนงของหลอดเลือดแดงในไต: 1. Renal artery -> 2. Segmental arteries (5 เส้นที่ขั้วไต) -> 3. Interlobar arteries (ทอดใน Renal columns) -> 4. Arcuate arteries (โค้งขนานกับฐานของพีระมิดไตที่รอยต่อ Cortex-Medulla) -> 5. Cortical radiate / Interlobular arteries (ทอดตรงขึ้นสู่ Cortex) -> 6. Afferent arterioles นำเลือดเข้าสู่ Glomerulus',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 11,
    tags: ['renal-artery-branching', 'arcuate-artery', 'afferent-arteriole'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-014',
    questionText: 'หลอดเลือดแดง Arcuate Arteries มีลักษณะทางกายวิภาคและการทอดตัวที่เป็นเอกลักษณ์อย่างไรในเนื้อไต?',
    options: {
      A: 'ทอดตัวโค้งขนานไปตามแนวรอยต่อระหว่าง Renal Cortex และ Renal Medulla บริเวณฐานของ Renal pyramids',
      B: 'ทอดตัวในแนวดิ่งแทรกอยู่ใน Renal columns',
      C: 'ทอดตัวลึกลงสู่ Renal papilla',
      D: 'ทอดตัวอยู่ภายนอกถุง Renal fascia'
    },
    correctOption: 'A',
    explanation: 'Arcuate arteries ทอดตัวโค้งเป็นรูปคันศร (Arching pattern) ขนานไปตามรอยต่อ Corticomedullary junction ที่ฐานของ Renal pyramids ให้แขนง Cortical radiate (Interlobular) arteries พุ่งตรงขึ้นสู่ชั้น Cortex',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 11,
    tags: ['arcuate-arteries', 'corticomedullary-junction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-015',
    questionText: 'ระบบหลอดเลือดของหน่วยไตมีความพิเศษแตกต่างจากอวัยวะทั่วไปในร่างกายคือ กลุ่มหลอดเลือดฝอย Glomerular capillaries วางตัวแทรกอยู่ระหว่างหลอดเลือดชนิดใดทั้งขาเข้าและขาออก?',
    options: {
      A: 'อยู่ระหว่างหลอดเลือดแดงสองเส้น คือ Afferent arteriole (ขาเข้า) และ Efferent arteriole (ขาออก) ซึ่งเป็นระบบหลอดเลือดแดงแบบ Arterial portal system',
      B: 'อยู่ระหว่างหลอดเลือดแดง Afferent arteriole กับหลอดเลือดดำ Venule',
      C: 'อยู่ระหว่างหลอดเลือดดำสองเส้น',
      D: 'อยู่ระหว่างท่อน้ำเหลืองกับหลอดเลือดแดง'
    },
    correctOption: 'A',
    explanation: 'โดยทั่วไป Capillaries จะเชื่อมระหว่าง Arteriole กับ Venule แต่ใน Glomerulus กลุ่มหลอดเลือดฝอยจะอยู่ระหว่าง Arterioles 2 เส้น คือ Afferent arteriole และ Efferent arteriole การที่ทั้งสองด้านเป็นหลอดเลือดแดงที่มีกล้ามเนื้อเรียบ ทำให้ไตสามารถปรับขนาดเส้นผ่านศูนย์กลางเพื่อควบคุมความดันอุทกสถิต (Glomerular Hydrostatic Pressure: GHP) ให้สูงคงที่ที่ประมาณ 55 mmHg เพื่อการกรองได้อย่างแม่นยำ',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 12,
    tags: ['afferent-efferent-arterioles', 'portal-system-kidney', 'ghp'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 16-35: Nephron Anatomy, Renal Corpuscle, Glomerular Filtration Barrier & Podocytes
  {
    id: 'URINARY-016',
    questionText: 'หน่วยทำงานเชิงโครงสร้างและหน้าที่พื้นฐานของไต (Functional unit of the kidney) คือโครงสร้างใด และในไตแต่ละข้างของผู้ใหญ่ปกติมีโครงสร้างนี้ประมาณกี่ล้านหน่วย?',
    options: {
      A: 'Nephron (หน่วยไต) โดยมีจำนวนประมาณ 1.0 ถึง 1.25 ล้านหน่วยต่อไตหนึ่งข้าง',
      B: 'Renal pyramid โดยมี 500,000 หน่วย',
      C: 'Major calyx โดยมี 100,000 หน่วย',
      D: 'Collecting duct โดยมี 50,000 หน่วย'
    },
    correctOption: 'A',
    explanation: 'Nephron เป็นหน่วยการทำงานที่เล็กที่สุดของไตที่สามารถสร้างปัสสาวะได้ ในไตแต่ละข้างมีเนฟรอนประมาณ 1 - 1.25 ล้านหน่วย (รวมสองข้างประมาณ 2 - 2.5 ล้านหน่วย) ร่างกายไม่สามารถสร้างเนฟรอนใหม่ทดแทนได้เมื่อถูกทำลาย',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 13,
    tags: ['nephron', 'functional-unit', 'nephron-count'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-017',
    questionText: 'หน่วยไต (Nephron) ประกอบด้วยส่วนสำคัญ 2 ส่วนหลัก ได้แก่ Renal Corpuscle (มัลพิเกียนคอร์ปัสเซิล) และ Renal Tubule (ท่อหน่วยไต) ส่วนของ Renal Corpuscle ประกอบด้วยโครงสร้างใดบ้าง?',
    options: {
      A: 'Glomerulus (กระจุกหลอดเลือดฝอย) และ Bowman\'s capsule (Glomerular capsule ถุงหุ้มโกลเมอรูลัส)',
      B: 'Proximal tubule และ Distal tubule',
      C: 'Loop of Henle และ Collecting duct',
      D: 'Afferent arteriole และ Efferent arteriole'
    },
    correctOption: 'A',
    explanation: 'Renal Corpuscle (Malpighian corpuscle) ทำหน้าที่กรองพลาสมา ประกอบด้วย 2 ส่วน: 1. Glomerulus: กระจุกหลอดเลือดฝอยชนิดมีรูพรุน (Fenestrated capillaries) ประมาณ 20-40 ลูป 2. Bowman\'s capsule: ถุงเยื่อสองชั้นรูปถ้วยที่โอบอุ้ม Glomerulus เอาไว้เพื่อรับน้ำกรอง (Filtrate)',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 14,
    tags: ['renal-corpuscle', 'glomerulus', 'bowmans-capsule'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-018',
    questionText: 'ถุงหุ้มโกลเมอรูลัส (Bowman\'s capsule) ประกอบด้วยผนัง 2 ชั้น ชั้นในสุด (Visceral layer) แนบชิดกับผนังหลอดเลือดฝอยของโกลเมอรูลัส ประกอบด้วยเซลล์ชนิดพิเศษที่มีแขนงเท้ายื่นออกไปหุ้มหลอดเลือดฝอย เซลล์ดังกล่าวมีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Podocytes (เซลล์มีเท้า)',
      B: 'Mesangial cells',
      C: 'Juxtaglomerular cells',
      D: 'Macula densa cells'
    },
    correctOption: 'A',
    explanation: 'Bowman\'s capsule มี 2 ชั้น: ชั้นนอก Parietal layer บุด้วย Simple squamous epithelium ชั้นใน Visceral layer ประกอบด้วยเซลล์รูปร่างพิเศษชื่อ Podocytes ซึ่งมี Primary processes แตกแขนงย่อยออกเป็น Foot processes (Pedicels) ไปโอบรัดรอบ Glomerular capillaries เกิดเป็นร่องกรอง (Filtration slits)',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 15,
    tags: ['podocytes', 'visceral-layer', 'pedicels', 'filtration-slits'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-019',
    questionText: 'แผงกั้นการกรองของโกลเมอรูลัส (Glomerular Filtration Membrane / Barrier) ประกอบด้วยชั้นเนื้อเยื่อ 3 ชั้นที่เรียงซ้อนกันเพื่อคัดกรองสารตามขนาดและประจุไฟฟ้า ข้อใดเรียงลำดับจากด้านในลูเมนของหลอดเลือดฝอยออกสู่ช่องว่างแคปซูลได้ถูกต้อง?',
    options: {
      A: 'Fenestrated capillary endothelium -> Glomerular basement membrane (GBM) -> Filtration slits (Slit diaphragms) ระหว่าง Pedicels ของ Podocytes',
      B: 'Podocytes -> GBM -> Endothelium',
      C: 'GBM -> Endothelium -> Parietal epithelium',
      D: 'Endothelium -> Mesangial matrix -> Tubule epithelium'
    },
    correctOption: 'A',
    explanation: 'Filtration barrier ประกอบด้วย 3 ชั้นจากในออกนอก: 1. Fenestrated endothelium ของหลอดเลือดฝอย (มีรูพรุน 70-100 nm กันเซลล์เม็ดเลือด) 2. Glomerular Basement Membrane (GBM: มีประจุลบของ Heparan sulfate กันโปรตีนที่มีประจุลบ) 3. Filtration slit diaphragms ระหว่างแขนงเท้า Pedicels ของ Podocytes (ช่องกว้าง 20-30 nm คัดกรองโมเลกุลขนาดเล็ก)',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 16,
    tags: ['filtration-barrier', 'gbm', 'fenestrations', 'podocyte-slits'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-020',
    questionText: 'ผู้ป่วยโรคไตอักเสบชนิด Nephrotic syndrome มีอาการบวมน้ำทั่วร่างกายและตรวจปัสสาวะพบไข่ขาวรั่วปริมาณมหาศาล (Massive proteinuria / Albuminuria) พยาธิสภาพหลักทางจุลกายวิภาคเกิดจากความเสียหายของโครงสร้างและประจุไฟฟ้าใดใน Glomerular filtration barrier?',
    options: {
      A: 'การสูญเสียประจุลบ (Negative electrostatic charges) ของ Heparan sulfate ในชั้น Glomerular Basement Membrane ร่วมกับการหลุดลอกหรือฝ่อแบนของ Podocyte foot processes (Effacement of pedicels)',
      B: 'การฉีกขาดของ Renal pelvis',
      C: 'การอุดตันของ Collecting duct',
      D: 'การหดตัวของ Tunica adventitia'
    },
    correctOption: 'A',
    explanation: 'ในภาวะปกติ โปรตีน Albumin แม้จะมีขนาดเส้นผ่านศูนย์กลางเล็กพอที่จะผ่านรูพรุนได้ แต่ไม่สามารถผ่านการกรองออกมาได้เนื่องจาก Albumin มีประจุลบ จึงถูกผลักโดยประจุลบของ Heparan sulfate proteoglycans ใน GBM (Charge-selective barrier) เมื่อเกิดโรคไตเนโฟรติก มีการสูญเสียประจุลบร่วมกับ Podocyte effacement อัลบูมินจึงรั่วหลุดออกมาในปัสสาวะ เกิด Proteinuria รุนแรง',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 16,
    tags: ['nephrotic-syndrome', 'proteinuria', 'negative-charge-barrier', 'podocyte-effacement'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-021',
    questionText: 'เซลล์ชนิด Mesangial cells (Intraglomerular mesangial cells) ซึ่งแทรกตัวอยู่ระหว่างลูปหลอดเลือดฝอยของ Glomerulus ทำหน้าที่สำคัญทางสรีรวิทยาและกายวิภาคอย่างไร?',
    options: {
      A: 'ทำหน้าที่ค้ำจุนเชิงกลแก่ลูปหลอดเลือดฝอย, มีคุณสมบัติหดตัวได้ (Contractile ability) เพื่อปรับพื้นที่ผิวและควบคุมอัตราการกรอง, และทำหน้าที่ Phagocytosis ดักจับโปรตีนและ Immune complexes ที่ติดค้างในตะแกรงกรอง',
      B: 'ทำหน้าที่สร้างและหลั่งฮอร์โมนอินซูลิน',
      C: 'ทำหน้าที่ดูดกลับน้ำตาลกลูโคสทั้งหมด',
      D: 'ทำหน้าที่สร้างน้ำปัสสาวะโดยตรง'
    },
    correctOption: 'A',
    explanation: 'Mesangial cells เป็นเซลล์ที่มีความสำคัญ 3 ด้าน: 1. Structural support ค้ำจุน Glomerular capillary loops 2. Phagocytosis เก็บกินโมเลกุลขนาดใหญ่และ Immune complexes ทำความสะอาด Basement membrane 3. มี Myofilaments สามารถหดตัวตามการกระตุ้นของ Angiotensin II ช่วยลดพื้นที่ผิวการกรองเพื่อควบคุม GFR',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 15,
    tags: ['mesangial-cells', 'phagocytosis', 'gfr-regulation', 'contractility'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-022',
    questionText: 'ท่อหน่วยไตส่วนต้น (Proximal Convoluted Tubule: PCT) มีลักษณะทางจุลกายวิภาคศาสตร์ที่ปรับตัวเพื่อรองรับหน้าที่การดูดซึมกลับสารปริมาณมหาศาล (Massive reabsorption) อย่างไร?',
    options: {
      A: 'เซลล์บุผิวเป็น Simple cuboidal epithelium ที่มี Microvilli ยาวและหนาแน่นมากเกิดเป็น Brush border ทางผิวด้านใน และมีไมโทคอนเดรียจำนวนมากที่ Basolateral invaginations เพื่อสร้าง ATP สำหรับ Active transport',
      B: 'เป็นเซลล์แบนบาง Simple squamous เพื่อให้สารผ่านแบบ Passive diffusion อย่างเดียว',
      C: 'เป็น Stratified columnar epithelium หนา 5 ชั้น',
      D: 'ไม่มี Microvilli แต่มี Cilia โบกพัด'
    },
    correctOption: 'A',
    explanation: 'PCT เป็นส่วนที่มีการดูดซึมสารกลับมากที่สุด (65-70% ของน้ำและโซเดียม, 100% ของกลูโคสและกรดอะมิโน) เซลล์จึงมี Dense brush border (Microvilli) เพิ่มพื้นที่ผิวดูดซึม และมีรอยพับ Basolateral interdigitations อุดมไปด้วย Mitochondria เพื่อผลิตพลังงานขับเคลื่อน Na+/K+ ATPase pumps',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 17,
    tags: ['pct-histology', 'brush-border', 'microvilli', 'active-transport'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-023',
    questionText: 'สารชนิดใดต่อไปนี้ภายใต้สภาวะร่างกายปกติ จะถูกดูดซึมกลับเข้าสู่กระแสเลือดเกือบ 100% บริเวณท่อหน่วยไตส่วนต้น (Proximal Convoluted Tubule: PCT) จนไม่เหลือหลุดรอดออกมาในปัสสาวะ?',
    options: {
      A: 'Glucose (กลูโคส) และ Amino acids (กรดอะมิโน) โดยอาศัยโปรตีนตัวพา Sodium-Glucose Cotransporter (SGLT2 และ SGLT1)',
      B: 'Urea และ Creatinine',
      C: 'ไอออนไฮโดรเจน และแอมโมเนียม',
      D: 'ยาเพนิซิลลินและสารพิษ'
    },
    correctOption: 'A',
    explanation: 'ที่ PCT สารอาหารที่มีค่าต่อร่างกาย ได้แก่ Glucose (เกือบ 100%), Amino acids (เกือบ 100%), และโปรตีนโมเลกุลเล็กที่หลุดรอดมา จะถูกดูดซึมกลับอย่างสมบูรณ์โดยอาศัยกระบวนการ Secondary active transport ร่วมกับโซเดียม (เช่น SGLT2) หากระดับน้ำตาลในเลือดเกินขีดจำกัด (Renal threshold ~180 mg/dL) จึงจะเกิด Glycosuria รั่วออกมาในปัสสาวะ',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 17,
    tags: ['pct-reabsorption', 'glucose-reabsorption', 'sglt2', 'renal-threshold'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-024',
    questionText: 'ห่วงเฮนเลขาลง (Descending limb of the Loop of Henle) มีคุณสมบัติความสามารถในการซึมผ่าน (Permeability) ของผนังท่ออย่างไรที่สอดคล้องกับกลไกสร้างปัสสาวะเข้มข้น?',
    options: {
      A: 'ยอมให้น้ำซึมผ่านได้อย่างอิสระสูง (Highly permeable to water ผ่าน Aquaporin-1) แต่แทบไม่ยอมให้โซเดียมคลอไรด์หรือสารละลายซึมผ่าน (Impermeable to solutes)',
      B: 'ยอมให้เฉพาะโซเดียมผ่าน แต่ไม่ยอมให้น้ำผ่าน',
      C: 'ไม่ยอมให้ทั้งน้ำและโซเดียมซึมผ่านเลย',
      D: 'มีการปั๊มน้ำออกด้วย ATP'
    },
    correctOption: 'A',
    explanation: 'Descending limb (โดยเฉพาะ Thin descending limb) มีท่อ Aquaporin-1 หนาแน่น ยอมให้น้ำออสโมซิสออกจากลูเมนเข้าสู่ Interstitium ที่มีความเข้มข้นสูงได้อย่างอิสระ แต่ไม่ยอมให้ NaCl ซึมผ่าน ทำให้ของเหลวภายในท่อมีความเข้มข้น (Osmolality) สูงขึ้นเรื่อยๆ จนสูงสุดที่จุดวกกลับก้นห่วง (ประมาณ 1,200 mOsm/kg)',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 18,
    tags: ['descending-limb', 'permeable-to-water', 'countercurrent-multiplier'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-025',
    questionText: 'ห่วงเฮนเลขากลับส่วนหนา (Thick Ascending Limb: TAL of Loop of Henle) มีคุณสมบัติทางสรีรวิทยาและโปรตีนตัวพาชนิดใดที่ทำหน้าที่ปั๊มไอออน และเป็นเป้าหมายของยาขับปัสสาวะกลุ่ม Loop diuretics (เช่น Furosemide)?',
    options: {
      A: 'ผนังท่อ "ไม่ยอมให้น้ำซึมผ่านอย่างสมบูรณ์ (Impermeable to water)" แต่มีการปั๊มไอออนอย่างแข็งขันผ่าน Na+/K+/2Cl- cotransporter (NKCC2)',
      B: 'ยอมให้น้ำผ่านได้ดีผ่านช่องทาง Aquaporin-2',
      C: 'มีการหลั่งโซเดียมเข้าสู่ลูเมน',
      D: 'มีตัวรับ Aldosterone receptor ควบคุมการดูดซึมกลูโคส'
    },
    correctOption: 'A',
    explanation: 'Thick Ascending Limb (TAL) มีคุณสมบัติสำคัญยิ่งยวด: ผนังท่อไม่ยอมให้น้ำผ่านได้เลย (Water-impermeable) แต่เซลล์ใช้พลังงาน ATP ปั๊มไอออน Na+, K+, และ 2Cl- ออกจากลูเมนเข้าสู่เนื้อเยื่อ Medullary interstitium ผ่านตัวพา NKCC2 ยาขับปัสสาวะ Furosemide จะออกฤทธิ์ยับยั้งตัวพานี้ ทำให้ไอออนไม่ถูกดูดกลับและดึงน้ำขับออกเป็นปัสสาวะปริมาณมาก',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 19,
    tags: ['thick-ascending-limb', 'nkcc2', 'furosemide', 'loop-diuretics', 'water-impermeable'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-026',
    questionText: 'ท่อหน่วยไตส่วนปลาย (Distal Convoluted Tubule: DCT) มีเซลล์บุผิวเป็น Simple cuboidal ที่มีลักษณะทางเนื้อเยื่อแตกต่างจาก PCT อย่างไร?',
    options: {
      A: 'เซลล์ของ DCT มี Microvilli สั้นและเบาบางมาก จึง "ไม่มี Brush border" เห็นลูเมนภายในท่อเรียบและกว้างชัดเจนกว่า PCT',
      B: 'เซลล์ของ DCT มี Brush border หนาแน่นกว่า PCT ถึง 3 เท่า',
      C: 'DCT ประกอบด้วยกล้ามเนื้อเรียบ 3 ชั้น',
      D: 'DCT บุด้วย Stratified squamous epithelium'
    },
    correctOption: 'A',
    explanation: 'เมื่อส่องดูด้วยกล้องจุลทรรศน์: DCT เซลล์เป็น Simple cuboidal มี Microvilli สั้นๆ เพียงเล็กน้อย ไม่มี Brush border ขอบด้านในลูเมนจึงเรียบ ชัดเจน และกว้างกว่า PCT เซลล์ย้อมติดสีชมพูจางกว่า (Basophilic กว่าเล็กน้อย) ทำหน้าที่ปรับความเข้มข้นไอออนขั้นสุดท้าย',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 20,
    tags: ['dct-histology', 'no-brush-border', 'pct-vs-dct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-027',
    questionText: 'ฮอร์โมนพาราไทรอยด์ (Parathyroid Hormone: PTH) ออกฤทธิ์กระตุ้นการดูดซึมกลับของแคลเซียมไอออน (Ca2+ reabsorption) ที่ท่อหน่วยไตส่วนใดมากที่สุด?',
    options: {
      A: 'Distal Convoluted Tubule (DCT)',
      B: 'Proximal Convoluted Tubule (PCT)',
      C: 'Descending limb of Loop of Henle',
      D: 'Collecting duct'
    },
    correctOption: 'A',
    explanation: 'PTH ทำหน้าที่เพิ่มระดับแคลเซียมในกระแสเลือด โดยออกฤทธิ์กระตุ้นช่องแคลเซียม TRPV5 และ Calbindin ที่บริเวณ Distal Convoluted Tubule (DCT) และส่วนต้นของ Connecting tubule ส่งผลให้มีการดูดกลับ Ca2+ เพิ่มขึ้น ขณะเดียวกัน PTH จะยับยั้งการดูดกลับฟอสเฟตที่ PCT เพื่อขับฟอสเฟตทิ้งทางปัสสาวะ',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 20,
    tags: ['pth', 'calcium-reabsorption', 'dct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-028',
    questionText: 'ท่อรวมน้ำปัสสาวะ (Collecting Duct) ประกอบด้วยเซลล์หลัก 2 ชนิด เซลล์ชนิด Principal cells (P cells) มีบทบาทสรีรวิทยาและตอบสนองต่อฮอร์โมนชนิดใด?',
    options: {
      A: 'ทำหน้าที่ดูดซึม Na+ และน้ำกลับ พร้อมกับขับ K+ ออกสู่ท่อ โดยตอบสนองต่อฮอร์โมน Aldosterone และฮอร์โมน Antidiuretic Hormone (ADH / Vasopressin)',
      B: 'ทำหน้าที่ควบคุมสมดุลกรด-ด่างโดยการหลั่งไบคาร์บอเนต',
      C: 'ทำหน้าที่สร้างฮอร์โมนอินซูลิน',
      D: 'ทำหน้าที่กรองเม็ดเลือดแดง'
    },
    correctOption: 'A',
    explanation: 'Collecting duct มีเซลล์ 2 ชนิด: 1. Principal cells (P cells, มีจำนวนมากที่สุด): มีตัวรับของ Aldosterone (กระตุ้นปั๊ม ENaC ดูดซึม Na+ และขับ K+) และตัวรับ V2 ของ ADH (แทรกช่อง Aquaporin-2 ดูดซึมน้ำกลับ) 2. Intercalated cells (I cells): ควบคุมสมดุลกรด-ด่าง (Type A ขับ H+, Type B ขับ HCO3-)',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 21,
    tags: ['principal-cells', 'aldosterone', 'adh', 'collecting-duct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-029',
    questionText: 'ฮอร์โมนแอนติไดอูเรติก (Antidiuretic Hormone: ADH หรือ Vasopressin) ควบคุมการดูดซึมน้ำกลับที่ Collecting duct โดยกระตุ้นการเคลื่อนย้ายของช่องทางผ่านน้ำชนิดใดไปแทรกบนเยื่อหุ้มเซลล์ด้านลูเมน (Apical membrane)?',
    options: {
      A: 'Aquaporin-2 (AQP2)',
      B: 'Aquaporin-1 (AQP1)',
      C: 'SGLT2',
      D: 'GLUT4'
    },
    correctOption: 'A',
    explanation: 'ADH สร้างจากไฮโปทาลามัส หลั่งจากต่อมใต้สมองส่วนหลัง เมื่อจับกับ V2 receptors บน Principal cells จะกระตุ้นสัญญาณผ่าน cAMP ทำให้ถุง Vesicles ที่บรรจุช่องน้ำ Aquaporin-2 เคลื่อนตัวไปเชื่อมรวม (Exocytosis) กับ Apical membrane ยอมให้น้ำออสโมซิสกลับคืนสู่กระแสเลือด ปัสสาวะจึงมีปริมาณลดลงและเข้มข้นขึ้น',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 21,
    tags: ['adh', 'aquaporin-2', 'water-conservation', 'vasopressin'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-030',
    questionText: 'ผู้ป่วยโรคเบาจืดชนิด Neurogenic (Central) Diabetes Insipidus ร่างกายไม่สามารถหลั่งฮอร์โมน ADH ได้ ส่งผลกระทบต่อลักษณะของน้ำปัสสาวะและสรีรวิทยาทางเดินปัสสาวะอย่างไร?',
    options: {
      A: 'ปัสสาวะออกในปริมาณมหาศาล (10 - 20 ลิตรต่อวัน) และปัสสาวะเจือจางมาก (Very low specific gravity / Hypotonic urine)',
      B: 'ปัสสาวะไม่ออกเลย (Anuria)',
      C: 'ปัสสาวะมีรสหวานจากน้ำตาลรั่ว',
      D: 'ปัสสาวะมีสีขุ่นข้นจากเม็ดเลือดขาว'
    },
    correctOption: 'A',
    explanation: 'เมื่อขาด ADH ท่อ Collecting duct จะไม่ยอมให้น้ำซึมผ่านได้เลย (Water-impermeable) ทำให้น้ำที่เหลือจากการกรองไม่ถูกดูดซึมกลับ ผู้ป่วยจึงปัสสาวะบ่อยและปริมาณมากผิดปกติ (Polyuria 10-20 L/day) ปัสสาวะเจือจางเหมือนน้ำเปล่า (Osmolality < 100 mOsm/kg) และกระหายน้ำตลอดเวลา (Polydipsia)',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 21,
    tags: ['diabetes-insipidus', 'polyuria', 'adh-deficiency'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 31-40: Cortical vs Juxtamedullary Nephrons & Blood Vessels
  {
    id: 'URINARY-031',
    questionText: 'หน่วยไตในร่างกายแบ่งออกเป็น Cortical nephrons และ Juxtamedullary nephrons ข้อใดเปรียบเทียบสัดส่วนและลักษณะทางกายวิภาคของเนฟรอนทั้งสองชนิดได้ถูกต้อง?',
    options: {
      A: 'Cortical nephrons มีประมาณ 85% มี Loop of Henle สั้นและจมอยู่ในชั้นนอกของ Medulla; ส่วน Juxtamedullary nephrons มีประมาณ 15% มี Renal corpuscle อยู่ชิดรอยต่อ และมี Loop of Henle ยาวลึกเข้าไปถึงก้น Medulla',
      B: 'Cortical nephrons มี 15% ส่วน Juxtamedullary มี 85%',
      C: 'Cortical nephrons มีเฉพาะในเด็ก ส่วน Juxtamedullary มีเฉพาะในผู้ใหญ่',
      D: 'ทั้งสองชนิดมีสัดส่วนเท่ากันและมีความยาวของห่วงเฮนเลเท่ากันทุกประการ'
    },
    correctOption: 'A',
    explanation: 'เนฟรอนแบ่งเป็น 2 ชนิด: 1. Cortical nephrons (ประมาณ 85%): Glomerulus อยู่ในชั้นนอกของ Cortex มีห่วงเฮนเลสั้น ทอดลงไปใน Medulla เพียงเล็กน้อย ล้อมรอบด้วย Peritubular capillaries 2. Juxtamedullary nephrons (ประมาณ 15%): Glomerulus อยู่ลึกชิดขอบ Medulla มีห่วงเฮนเลยาวมากทอดลึกถึงยอด Renal papilla ล้อมรอบด้วย Vasa recta มีบทบาทสำคัญที่สุดในการสร้างสภาวะความเข้มข้นสูงของ Medulla',
    system: systemName,
    topic: 'Cortical vs Juxtamedullary Nephrons',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 22,
    tags: ['cortical-nephrons', 'juxtamedullary-nephrons', 'loop-of-henle-length'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-032',
    questionText: 'หลอดเลือดฝอยเส้นตรง (Vasa Recta) เป็นโครงสร้างหลอดเลือดพิเศษที่แตกแขนงออกมาจาก Efferent arteriole ของเนฟรอนชนิดใด และทำหน้าที่สำคัญอย่างไร?',
    options: {
      A: 'แตกออกมาจาก Efferent arteriole ของ Juxtamedullary nephrons ทอดตัวขนานคู่กับห่วงเฮนเลยาว ทำหน้าที่ในระบบ Countercurrent Exchanger เพื่อคงสภาพความเข้มข้นสูงของ Medullary osmotic gradient',
      B: 'แตกออกมาจาก Cortical nephrons เพื่อไปเลี้ยงกระเพาะอาหาร',
      C: 'ทอดอยู่รอบ Bowman\'s capsule เพื่อรับแรงดันสูง',
      D: 'เป็นหลอดเลือดดำที่ไม่มีการแลกเปลี่ยนสาร'
    },
    correctOption: 'A',
    explanation: 'Vasa recta เป็นร่างแหหลอดเลือดฝอยยาวรูปตัวยู (Hairpin loop) ที่แตกแขนงมาจาก Efferent arteriole ของ Juxtamedullary nephrons โดยเฉพาะ ทอดขนานแนบชิดกับ Long loop of Henle ทำหน้าที่เป็น Countercurrent Exchanger ลำเลียงสารอาหารและออกซิเจนไปเลี้ยงเนื้อไตชั้น Medulla และดึงน้ำกลับเข้ากระแสเลือดอย่างช้าๆ โดยไม่ชะล้าง (Without washing out) สารละลายเกลือและยูเรียใน Medulla',
    system: systemName,
    topic: 'Cortical vs Juxtamedullary Nephrons',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 23,
    tags: ['vasa-recta', 'countercurrent-exchanger', 'juxtamedullary-nephron'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-033',
    questionText: 'กลไก Countercurrent Multiplier System ที่ทำให้เนื้อเยื่อ Renal Medulla มีความเข้มข้นของออสโมลาริตีสูงขึ้นเรื่อยๆ จาก 300 mOsm/kg ที่เปลือกนอกไปจนถึง 1,200 mOsm/kg ที่ยอดปิรามิด อาศัยการทำงานประสานกันของโครงสร้างใด?',
    options: {
      A: 'การไหลสวนทางกันของของเหลวใน Descending limb (ยอมให้น้ำออก) และ Ascending limb (ปั๊ม NaCl ออกแต่ไม่ยอมให้น้ำผ่าน) ของ Loop of Henle ใน Juxtamedullary nephrons ร่วมกับการหมุนเวียนของ Urea',
      B: 'การบีบตัวของกล้ามเนื้อหัวใจห้องล่างซ้าย',
      C: 'การทำงานของ Glomerular filtration barrier',
      D: 'การหดเกร็งของกล้ามเนื้อกระเพาะปัสสาวะ'
    },
    correctOption: 'A',
    explanation: 'Countercurrent Multiplier อาศัย: 1. ทิศทางการไหลของของเหลวในห่วงเฮนเลขาลงและขาขึ้นที่สวนทางกัน 2. คุณสมบัติของ Descending limb ที่ยอมให้น้ำออกอย่างเดียว ทำให้ของเหลวยิ่งลงลึกยิ่งเข้มข้น 3. Thick ascending limb ที่ปั๊ม NaCl ออกสู่ Interstitial fluid ตลอดเวลาแต่ไม่ยอมให้น้ำออก 4. การรีไซเคิลของ Urea จากท่อรวม ช่วยสะสมความเข้มข้นใน Medulla สูงถึง 1,200 mOsm/L',
    system: systemName,
    topic: 'Cortical vs Juxtamedullary Nephrons',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 24,
    tags: ['countercurrent-multiplier', 'medullary-gradient', 'urea-recycling'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-034',
    questionText: 'หลอดเลือดฝอยรอบท่อหน่วยไต Peritubular Capillaries ซึ่งแตกแขนงมาจาก Efferent arteriole ในชั้น Renal Cortex มีลักษณะทางสรีรวิทยาของแรงดันอย่างไรที่เอื้ออำนวยต่อการดูดซึมสารกลับเข้าสู่กระแสเลือด?',
    options: {
      A: 'มีความดันอุทกสถิตต่ำ (Low hydrostatic pressure) แต่มีแรงดันคอลลอยด์ออสโมติกสูงมาก (High colloid osmotic / oncotic pressure) จึงเกิดแรงดึงดูดของเหลวและสารอาหารกลับเข้าสู่หลอดเลือดได้อย่างรวดเร็ว',
      B: 'มีความดันอุทกสถิตสูงมากเพื่อผลักดันสารออก',
      C: 'ไม่มีโปรตีนในหลอดเลือดเลย',
      D: 'มีแรงดันเท่ากับความดันใน Aorta'
    },
    correctOption: 'A',
    explanation: 'เนื่องจากเลือดที่ออกจาก Glomerulus สูญเสียน้ำพลาสมาไปในการกรองถึง 20% ทำให้โปรตีนในเลือดมีความเข้มข้นสูงมาก เลือดที่เข้าสู่ Peritubular capillaries จึงมี Oncotic pressure สูงมาก (ประมาณ 32 mmHg) ขณะที่มี Hydrostatic pressure ต่ำมาก (เพียง 8-10 mmHg) ผลต่างแรงดันนี้ก่อให้เกิดแรงดึงสุทธิ (Net reabsorption pressure) ดูดสารน้ำและเกลือแร่กลับเข้าสู่กระแสเลือดอย่างมีประสิทธิภาพ',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 12,
    tags: ['peritubular-capillaries', 'high-oncotic-pressure', 'reabsorption-mechanics'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-035',
    questionText: 'ในทางกายวิภาคศาสตร์ เส้นผ่านศูนย์กลางของหลอดเลือด Afferent arteriole (ขาเข้า) มีขนาดกว้างกว่า Efferent arteriole (ขาออก) ของโกลเมอรูลัส ลักษณะทางกายวิภาคนี้มีประโยชน์อย่างไร?',
    options: {
      A: 'สร้างแรงต้านทานที่ทางออก ทำให้เกิดแรงดันอุทกสถิตของเลือดใน Glomerular capillaries สูงคงที่ (ประมาณ 55 mmHg) ซึ่งจำเป็นต่อการผลักดันให้เกิดกระบวนการกรองพลาสมา',
      B: 'เพื่อลดความดันในโกลเมอรูลัสไม่ให้แตก',
      C: 'เพื่อให้ออกซิเจนในเลือดลดลง',
      D: 'เพื่อป้องกันไม่ให้เม็ดเลือดแดงเข้าสู่ไต'
    },
    correctOption: 'A',
    explanation: 'ขนาดของ Afferent arteriole ที่ใหญ่กว่า Efferent arteriole ทำให้เกิด "Bottleneck effect" เลือดไหลเข้าได้ง่ายแต่ไหลออกได้ยาก ส่งผลให้เกิดแรงดันน้ำในกระจุกหลอดเลือดฝอย Glomerular Hydrostatic Pressure (GHP) สูงถึง 55 mmHg (เทียบกับ Capillaries ทั่วไปในร่างกายที่มีแรงดันเพียง 18-30 mmHg) ซึ่งแรงดันที่สูงนี้คือแรงขับเคลื่อนหลักในการกรองพลาสมา',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 14,
    tags: ['afferent-vs-efferent-diameter', 'bottleneck-effect', 'ghp-55mmhg'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 36-50: Juxtaglomerular Apparatus (JGA) & RAAS System
  {
    id: 'URINARY-036',
    questionText: 'โครงสร้าง Juxtaglomerular Apparatus (JGA) เป็นโครงสร้างควบคุมความดันโลหิตและอัตราการกรองของไต เกิดจากการสัมผัสกันระหว่างโครงสร้างคู่ใดของหน่วยไต?',
    options: {
      A: 'ส่วนต้นของ Distal Convoluted Tubule (DCT) กับขั้วหลอดเลือด Afferent และ Efferent arterioles ของเนฟรอนเดียวกัน',
      B: 'Proximal tubule กับ Loop of Henle',
      C: 'Collecting duct กับ Renal papilla',
      D: 'Bowman\'s capsule กับ Ureter'
    },
    correctOption: 'A',
    explanation: 'JGA เกิดจากการที่ท่อหน่วยไตส่วนต้นของ DCT ทอดตัววกกลับมาแตะชิดกับขั้วหลอดเลือด (Vascular pole) ของ Renal corpuscle เดียวกัน ระหว่าง Afferent arteriole และ Efferent arteriole ทำหน้าที่เป็น Sensor ตรวจสอบคุณสมบัติของของเหลวในท่อและควบคุมอัตราการกรอง (Tubuloglomerular feedback)',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 25,
    tags: ['jga', 'vascular-pole', 'dct-contact'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-037',
    questionText: 'กลุ่มเซลล์ชนิด Macula Densa ซึ่งเป็นส่วนประกอบหนึ่งของ JGA ตั้งอยู่ที่ผนังของท่อใด และทำหน้าที่เป็นตัวรับรู้ (Sensor) ตรวจจับสิ่งใด?',
    options: {
      A: 'ตั้งอยู่ที่ผนังของท่อ Distal Convoluted Tubule (DCT) ทำหน้าที่เป็น Chemoreceptors/Osmoreceptors ตรวจจับความเข้มข้นของโซเดียมและคลอไรด์ (NaCl concentration) และอัตราการไหลของของเหลวในท่อ',
      B: 'ตั้งอยู่ที่ผนังหลอดเลือดแดง ทำหน้าที่ตรวจจับออกซิเจน',
      C: 'ตั้งอยู่ที่กระเพาะปัสสาวะ ตรวจจับแรงตึงตัว',
      D: 'ตั้งอยู่ที่ Loop of Henle ตรวจจับกลูโคส'
    },
    correctOption: 'A',
    explanation: 'Macula densa เป็นกลุ่มเซลล์รูปทรงกระบอกสูงเรียงตัวเบียดกันแน่น นิวเคลียสติดสีเข้ม อยู่บนผนังของ DCT ด้านที่ชิดกับ Afferent arteriole ทำหน้าที่ตรวจวัดความเข้มข้นของไอออน Na+ และ Cl- ใน Filtrate ที่ไหลผ่าน หาก NaCl ต่ำลง บ่งชี้ว่า GFR ต่ำ เซลล์จะส่งสัญญาณเคมี (Adenosine / Nitric oxide) ไปสั่งให้ JG cells หลั่ง Renin',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 26,
    tags: ['macula-densa', 'nacl-sensor', 'dct-wall', 'chemoreceptors'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-038',
    questionText: 'เซลล์ชนิด Juxtaglomerular cells (JG cells หรือ Granular cells) ซึ่งทำหน้าที่สร้าง เก็บสะสม และหลั่งเอนไซม์เรนิน (Renin) ดัดแปลงมาจากเซลล์ชนิดใดและตั้งอยู่ที่โครงสร้างใด?',
    options: {
      A: 'ดัดแปลงมาจากเซลล์กล้ามเนื้อเรียบ (Modified smooth muscle cells) ในชั้น Tunica media ของผนังหลอดเลือด Afferent arteriole',
      B: 'ดัดแปลงมาจากเซลล์เยื่อบุผิวของ Bowman\'s capsule',
      C: 'ดัดแปลงมาจากเซลล์เม็ดเลือดขาวในหลอดเลือดดำ',
      D: 'ดัดแปลงมาจากเซลล์ประสาทซิมพาเทติก'
    },
    correctOption: 'A',
    explanation: 'Juxtaglomerular (Granular) cells เป็นเซลล์กล้ามเนื้อเรียบที่ดัดแปลงเป็นพิเศษ อยู่ในผนังของ Afferent arteriole (ใกล้ Glomerulus) ภายในมีแกรนูลบรรจุเอนไซม์ Renin เซลล์นี้ทำหน้าที่เป็น Baroreceptors วัดแรงดันเลือดโดยตรง หากความดันเลือดใน Affiole ลดลง หรือได้รับการกระตุ้นจาก Macula densa หรือ Sympathetic nerves จะหลั่ง Renin ออกสู่กระแสเลือดทันที',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 26,
    tags: ['jg-cells', 'granular-cells', 'renin', 'afferent-arteriole-smooth-muscle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-039',
    questionText: 'ในระบบ Renin-Angiotensin-Aldosterone System (RAAS) เอนไซม์เรนิน (Renin) ที่หลั่งออกจากไตทำหน้าที่เร่งปฏิกิริยาเคมีใดในกระแสเลือด?',
    options: {
      A: 'เปลี่ยนโปรตีนตั้งต้น Angiotensinogen (ที่สร้างจากตับ) ให้กลายเป็น Angiotensin I (เปปไทด์ 10 กรดอะมิโน)',
      B: 'เปลี่ยน Angiotensin I ให้กลายเป็น Angiotensin II โดยตรง',
      C: 'เปลี่ยน Angiotensin II ให้กลายเป็น Aldosterone',
      D: 'เปลี่ยน Prothrombin เป็น Thrombin'
    },
    correctOption: 'A',
    explanation: 'เมื่อความดันเลือดตก ไตหลั่ง Renin เข้าสู่กระแสเลือด Renin จะทำหน้าที่ตัดพันธะของ Angiotensinogen (โปรตีนพลาสมาที่สร้างจากตับ) เปลี่ยนให้กลายเป็น Angiotensin I ซึ่งยังไม่มีฤทธิ์หดหลอดเลือด จากนั้น Angiotensin I จะไหลผ่านหลอดเลือดฝอยของปอดและไตเพื่อเปลี่ยนเป็น Angiotensin II ต่อไป',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 27,
    tags: ['raas', 'renin', 'angiotensinogen', 'angiotensin-i'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-040',
    questionText: 'เอนไซม์ Angiotensin-Converting Enzyme (ACE) ซึ่งพบหนาแน่นที่สุดบนเยื่อบุหลอดเลือดฝอยของปอด (Pulmonary capillaries) และไต ทำหน้าที่ใดในระบบ RAAS?',
    options: {
      A: 'เปลี่ยน Angiotensin I ให้กลายเป็น Angiotensin II ซึ่งมีฤทธิ์หดหลอดเลือดรุนแรง',
      B: 'สลายฮอร์โมน Aldosterone ทิ้ง',
      C: 'เปลี่ยนเรนินให้กลายเป็นอินซูลิน',
      D: 'เปลี่ยนแองจิโอเทนซิโนเจนเป็นเรนิน'
    },
    correctOption: 'A',
    explanation: 'Angiotensin-Converting Enzyme (ACE) ตรึงอยู่บน Endothelial cell membrane ของหลอดเลือดฝอยในปอด ทำหน้าที่ตัดกรดอะมิโน 2 ตัวออกจาก Angiotensin I กลายเป็น Angiotensin II ซึ่งเป็นฮอร์โมนที่มีฤทธิ์หดหลอดเลือดแดงทั่วร่างกายอย่างทรงพลัง (Potent vasoconstrictor) ยาลดความดันกลุ่ม ACE inhibitors (เช่น Enalapril) ออกฤทธิ์ยับยั้งเอนไซม์นี้',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 27,
    tags: ['ace', 'angiotensin-converting-enzyme', 'angiotensin-ii', 'ace-inhibitors'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-041',
    questionText: 'ฮอร์โมน Angiotensin II ส่งผลต่อระบบไหลเวียนโลหิตและร่างกายเพื่อเพิ่มความดันโลหิตผ่านกลไกหลายประการ ข้อใดไม่ใช่ฤทธิ์ทางสรีรวิทยาของ Angiotensin II?',
    options: {
      A: 'การขยายตัวของหลอดเลือดแดงทั่วร่างกายอย่างรุนแรงทำให้ความดันโลหิตลดลง',
      B: 'การหดตัวของหลอดเลือดแดงทั่วร่างกาย (Systemic vasoconstriction) ทำให้ Total Peripheral Resistance เพิ่มขึ้น',
      C: 'กระตุ้นต่อมหมวกไตชั้นนอก (Adrenal cortex) ให้หลั่งฮอร์โมน Aldosterone',
      D: 'กระตุ้นศูนย์ควบคุมความกระหายน้ำในไฮโปทาลามัส (Thirst center) และกระตุ้นการหลั่ง ADH'
    },
    correctOption: 'A',
    explanation: 'Angiotensin II มีฤทธิ์เพิ่มความดันโลหิตอย่างรอบด้าน: 1. ทำหน้าที่เป็น Potent vasoconstrictor หดหลอดเลือดแดงอย่างแรง (ไม่ใช่ขยายหลอดเลือด) 2. สั่งต่อมหมวกไตหลั่ง Aldosterone เพื่อดูดซึม Na+ และน้ำกลับ 3. หดตัว Efferent arteriole เพื่อรักษา GFR 4. กระตุ้นต่อมใต้สมองหลั่ง ADH 5. กระตุ้นความกระหายน้ำ (Thirst) เพื่อเพิ่มปริมาตรเลือด',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 28,
    tags: ['angiotensin-ii-effects', 'vasoconstriction', 'aldosterone-stimulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-042',
    questionText: 'ฮอร์โมนอัลโดสเตอโรน (Aldosterone) สร้างและหลั่งมาจากต่อมหมวกไตชั้นใด และออกฤทธิ์ที่ท่อไตส่วนใดในการควบคุมอิเล็กโทรไลต์?',
    options: {
      A: 'สร้างจากชั้น Zona glomerulosa ของต่อมหมวกไตชั้นนอก ออกฤทธิ์ที่ Late DCT และ Collecting duct ในการดูดซึม Na+ และน้ำกลับเข้ากระแสเลือด พร้อมกับขับ K+ ทิ้งทางปัสสาวะ',
      B: 'สร้างจาก Adrenal medulla ออกฤทธิ์ที่ Glomerulus',
      C: 'สร้างจาก Zona fasciculata ออกฤทธิ์ที่ Loop of Henle',
      D: 'สร้างจากต่อมไทรอยด์ ออกฤทธิ์ที่กระเพาะปัสสาวะ'
    },
    correctOption: 'A',
    explanation: 'Aldosterone (Mineralocorticoid) สังเคราะห์จากชั้นนอกสุดของต่อมหมวกไต (Zona glomerulosa) ออกฤทธิ์ผ่าน Nuclear mineralocorticoid receptors ใน Principal cells ของ Late DCT และ Cortical Collecting Duct เพิ่มการสร้าง Na+/K+ ATPase pumps และ ENaC channels ดูดกลับโซเดียมและน้ำตามแรงดึงออสโมติก พร้อมกับขับโพแทสเซียม (K+) ทิ้งไปกับปัสสาวะ',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 28,
    tags: ['aldosterone', 'zona-glomerulosa', 'sodium-retention', 'potassium-excretion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-043',
    questionText: 'ฮอร์โมน Atrial Natriuretic Peptide (ANP) ซึ่งหลั่งจากเซลล์กล้ามเนื้อหัวใจห้องบนขวาเมื่อมีภาวะปริมาตรเลือดเกินและผนังหัวใจขยายตัว (Atrial stretch) มีฤทธิ์ต้านการทำงานของระบบ RAAS อย่างไรที่ไต?',
    options: {
      A: 'ยับยั้งการหลั่ง Renin และ Aldosterone, ขยาย Afferent arteriole และหด Efferent arteriole เพื่อเพิ่ม GFR, และยับยั้งการดูดซึมกลับของโซเดียม ขับทั้งเกลือและน้ำทิ้งทางปัสสาวะ (Natriuresis and Diuresis)',
      B: 'กระตุ้นให้ไตเก็บกักโซเดียมและน้ำเพิ่มขึ้น',
      C: 'กระตุ้นการหลั่งเรนินเพิ่มขึ้น 2 เท่า',
      D: 'ทำให้หัวใจห้องบนหยุดเต้นชั่วคราว'
    },
    correctOption: 'A',
    explanation: 'ANP ทำงานตรงข้ามกับ RAAS และ ADH อย่างสิ้นเชิง: เมื่อความดันและปริมาตรเลือดสูงเกิน ผนัง Atrium ตึงจะหลั่ง ANP เพื่อ: 1. ยับยั้งการหลั่ง Renin, Aldosterone และ ADH 2. ยับยั้ง Na+ reabsorption ที่ Collecting duct 3. เพิ่ม GFR โดยขยาย Afferent และหด Efferent arterioles เพื่อขับโซเดียม (Natriuresis) และขับน้ำ (Diuresis) ทิ้งทางปัสสาวะ ลดปริมาตรและความดันเลือด',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 29,
    tags: ['anp', 'atrial-natriuretic-peptide', 'natriuresis', 'diuresis', 'raas-antagonist'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-044',
    questionText: 'อัตราการกรองของไต (Glomerular Filtration Rate: GFR) ในผู้ใหญ่สุขภาพดีเพศชายและเพศหญิงมีค่าเฉลี่ยปกติประมาณเท่าใดต่อวัน?',
    options: {
      A: 'ประมาณ 125 มิลลิลิตรต่อนาที (mL/min) ในเพศชาย และ 105 mL/min ในเพศหญิง คิดเป็นปริมาตรน้ำกรองรวมประมาณ 180 ลิตรต่อวัน',
      B: 'ประมาณ 10 มล./นาที หรือ 15 ลิตรต่อวัน',
      C: 'ประมาณ 500 มล./นาที หรือ 700 ลิตรต่อวัน',
      D: 'ประมาณ 1.5 ลิตรต่อวันเท่ากับปริมาณปัสสาวะ'
    },
    correctOption: 'A',
    explanation: 'GFR คือปริมาตรของน้ำกรอง (Filtrate) ทั้งหมดที่สร้างขึ้นจากเนฟรอนของไตทั้งสองข้างรวมกันใน 1 นาที มีค่าเฉลี่ยประมาณ 125 mL/min (หรือ 180 ลิตรต่อวันในผู้ชาย และ 150 ลิตรต่อวันในผู้หญิง) โดยน้ำกรอง 180 ลิตรนี้จะถูกดูดซึมกลับเข้าสู่กระแสเลือดถึงกว่า 99% เหลือขับถ่ายออกเป็นน้ำปัสสาวะจริงเพียงวันละประมาณ 1 - 1.5 ลิตร (น้อยกว่า 1%)',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 30,
    tags: ['gfr', '125-ml-min', '180-liters-per-day', 'reabsorption-fraction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-045',
    questionText: 'แรงดันสุทธิในการกรองของโกลเมอรูลัส (Net Filtration Pressure: NFP) คำนวณได้จากผลลัพธ์ของแรงดัน 3 ชนิดตามสมการ NFP = GHP - (CHP + BCOP) หากกำหนดให้ GHP = 55 mmHg, CHP = 15 mmHg, และ BCOP = 30 mmHg ค่า NFP ปกติจะมีค่าเท่าใด?',
    options: {
      A: '10 mmHg ซึ่งเป็นแรงดันสุทธิที่เป็นบวกและเพียงพอที่จะผลักดันให้เกิดการกรองพลาสมาเข้าสู่ Bowman\'s space',
      B: '55 mmHg',
      C: '100 mmHg',
      D: '0 mmHg'
    },
    correctOption: 'A',
    explanation: 'การคำนวณ NFP: 1. แรงดันผลักออก (Outward pressure): Glomerular Hydrostatic Pressure (GHP) = 55 mmHg 2. แรงดันต้านทาน (Inward pressures): Capsular Hydrostatic Pressure (CHP) = 15 mmHg + Blood Colloid Osmotic Pressure (BCOP) = 30 mmHg (รวมต้าน 45 mmHg) ดังนั้น NFP = 55 - (15 + 30) = +10 mmHg หากความดันเลือดตกลงจน NFP ต่ำกว่าศูนย์ ไตจะหยุดการกรองทันที (Anuria)',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 31,
    tags: ['nfp', 'net-filtration-pressure', 'ghp', 'chp', 'bcop', 'starling-forces'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-046',
    questionText: 'กลไกการควบคุมอัตราการกรองของไตด้วยตนเอง (Renal Autoregulation) ผ่าน Myogenic mechanism มีการตอบสนองอย่างไรเมื่อความดันโลหิตในร่างกาย (Systemic BP) สูงขึ้นอย่างกะทันหัน?',
    options: {
      A: 'เซลล์กล้ามเนื้อเรียบในผนัง Afferent arteriole จะถูกยืดขยายตัวและตอบสนองด้วยการหดตัวลงโดยอัตโนมัติ (Vasoconstriction) เพื่อจำกัดแรงดันและปริมาณเลือดไม่ให้พุ่งเข้าทำลายโกลเมอรูลัส',
      B: 'Afferent arteriole จะขยายตัวกว้างขึ้นเพื่อให้เลือดไหลผ่านได้เร็ว',
      C: 'Efferent arteriole จะหดตัวตีบลงสนิท',
      D: 'ไตจะส่งสัญญาณไปหยุดการเต้นของหัวใจ'
    },
    correctOption: 'A',
    explanation: 'Myogenic mechanism เป็นคุณสมบัติเฉพาะของกล้ามเนื้อเรียบหลอดเลือด: เมื่อความดันเลือดสูงขึ้น แรงดันจะยืดผนัง Afferent arteriole ทำให้ Stretch-activated Ca2+ channels เปิด เซลล์กล้ามเนื้อเรียบจึงหดตัว (Vasoconstriction) เพิ่มแรงต้านทาน ช่วยคงความดัน GHP ในโกลเมอรูลัสและ GFR ให้คงที่อยู่ในช่วงความดัน Mean Arterial Pressure 80-180 mmHg',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 32,
    tags: ['myogenic-mechanism', 'autoregulation', 'afferent-vasoconstriction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-047',
    questionText: 'การขับสารออกทางท่อหน่วยไต (Tubular Secretion) มีบทบาทสำคัญในการกำจัดสารกลุ่มใดออกจากร่างกายเข้าสู่น้ำปัสสาวะ?',
    options: {
      A: 'กำจัดไอออนไฮโดรเจนส่วนเกิน (H+), โพแทสเซียม (K+), สารแอมโมเนีย (NH4+), สารเมแทบอไลต์ของยา (เช่น Penicillin, Aspirin) และสารแปลกปลอม (Xenobiotics)',
      B: 'กำจัดน้ำตาลกลูโคสและกรดอะมิโน',
      C: 'กำจัดโปรตีนอัลบูมินและฮีโมโกลบิน',
      D: 'กำจัดเซลล์เม็ดเลือดแดงที่แก่ชรา'
    },
    correctOption: 'A',
    explanation: 'Tubular secretion เป็นกระบวนการที่สารใน Peritubular capillaries หรือเซลล์ท่อไตถูกลำเลียงเข้าสู่ Tubular lumen ตรงข้ามกับ Reabsorption เพื่อ: 1. กำจัดยาและสารพิษ (ผ่าน Organic anion/cation transporters) 2. กำจัดของเสียที่ไม่ได้ถูกกรอง 3. ควบคุมสมดุล K+ (หลั่งที่ Collecting duct) 4. ควบคุม pH เลือด (หลั่ง H+ ออกไป)',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 33,
    tags: ['tubular-secretion', 'potassium-excretion', 'drug-elimination', 'h-secretion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-048',
    questionText: 'กระบวนการดูดซึมน้ำกลับที่ท่อหน่วยไตแบ่งออกเป็น Obligatory water reabsorption และ Facultative water reabsorption ข้อใดเปรียบเทียบทั้งสองกลไกได้ถูกต้อง?',
    options: {
      A: 'Obligatory (ประมาณ 85%) เกิดขึ้นคงที่ที่ PCT และ Descending Loop of Henle ตามแรงดึงออสโมติกของโซเดียมโดยไม่ขึ้นกับฮอร์โมน; ส่วน Facultative (ประมาณ 10-15%) เกิดขึ้นที่ DCT และ Collecting duct ภายใต้การควบคุมของฮอร์โมน ADH ตามความต้องการของร่างกาย',
      B: 'Obligatory ถูกควบคุมโดย ADH ส่วน Facultative เกิดขึ้นเองตามธรรมชาติ',
      C: 'Obligatory เกิดขึ้นเฉพาะเวลานอนหลับ ส่วน Facultative เกิดขึ้นขณะออกกำลังกาย',
      D: 'ทั้งสองแบบเกิดขึ้นเฉพาะในกระเพาะปัสสาวะ'
    },
    correctOption: 'A',
    explanation: '1. Obligatory water reabsorption (85% ของน้ำกรอง): น้ำถูกบังคับให้ดูดกลับตามการดูดกลับของ Solutes (NaCl) ผ่าน Aquaporin-1 ใน PCT และ Henle\'s loop เสมอ 2. Facultative water reabsorption (10-15%): เป็นการดูดซึมน้ำกลับแบบ "ยืดหยุ่นปรับได้" ใน Late DCT และ Collecting duct ขึ้นอยู่กับภาวะขาดน้ำของร่างกาย โดยถูกสั่งการผ่านฮอร์โมน ADH (ผ่าน Aquaporin-2)',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 34,
    tags: ['obligatory-vs-facultative', 'water-reabsorption', 'adh-regulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-049',
    questionText: 'สารชนิดใดที่นิยมนำมาใช้ในการตรวจวัดอัตราการกรองของไตที่แม่นยำที่สุดในทางคลินิก (Gold standard marker for GFR) เนื่องจากมีคุณสมบัติถูกกรองผ่าน Glomerulus ได้อย่างอิสระ แต่ "ไม่มีการดูดซึมกลับและไม่มีการหลั่งเพิ่ม" เลยในท่อไต?',
    options: {
      A: 'Inulin (โพลีแซ็กคาไรด์จากพืช) ในการทดลอง หรือ Creatinine (สารจากร่างกายที่ใช้บ่อยในเวชปฏิบัติ)',
      B: 'Glucose',
      C: 'Sodium ion',
      D: 'Albumin'
    },
    correctOption: 'A',
    explanation: 'Inulin เป็นสารเชิงอุดมคติ (Gold standard) ในการวัด GFR เพราะถูกกรองผ่าน Glomerulus ได้อิสระ 100% แต่ไม่ถูกดูดกลับ (No reabsorption), ไม่ถูกหลั่งเพิ่ม (No secretion), และไม่ถูกสร้างหรือทำลายในไต ปริมาณอินูลินที่กรองจึงเท่ากับปริมาณที่ขับออกในปัสสาวะพอดี (Cinulin = GFR) ในทางคลินิกใช้ Creatinine แทนเนื่องจากไม่ต้องฉีดสารเข้าหลอดเลือด',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 35,
    tags: ['inulin-clearance', 'creatinine-clearance', 'gfr-measurement', 'gold-standard'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-050',
    questionText: 'ในน้ำปัสสาวะของคนปกติ สารใดต่อไปนี้ที่ไม่ควรตรวจพบเลย (Negative) และหากตรวจพบในปัสสาวะจะถือว่าเป็นภาวะผิดปกติทางพยาธิสภาพ?',
    options: {
      A: 'Glucose (กลูโคส), Protein/Albumin (โปรตีนไข่ขาว), Red blood cells (เม็ดเลือดแดง), และ Ketone bodies',
      B: 'Urea และ Creatinine',
      C: 'Uric acid และโซเดียม',
      D: 'น้ำและโพแทสเซียม'
    },
    correctOption: 'A',
    explanation: 'ปัสสาวะปกติประกอบด้วยน้ำ 95% ยูเรีย ครีอะตินิน กรดยูริก และเกลือแร่ Na+, K+, Cl- สารที่ "ผิดปกติหากตรวจพบ" ได้แก่: 1. Glucose (Glycosuria: เบาหวาน) 2. Protein (Proteinuria: โรคไตอักเสบ) 3. RBCs (Hematuria: นิ่ว เนื้องอก ติดเชื้อ) 4. Ketones (Ketonuria: ภาวะกรดคีโตนในเบาหวาน) 5. Bilirubin (โรคตับหรือท่อน้ำดีอุดตัน) 6. WBCs/Pus (Pyuria: ติดเชื้อทางเดินปัสสาวะ)',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 36,
    tags: ['abnormal-urine-components', 'urinalysis', 'glucosuria', 'proteinuria'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

module.exports = { part1 };
