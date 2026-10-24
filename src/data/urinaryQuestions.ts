import { Question } from '../types';

export const urinaryQuestions: Question[] = [
  {
    "id": "URINARY-001",
    "questionText": "ผู้ป่วยโรคไตวายเรื้อรังระยะสุดท้าย (End-Stage Renal Disease: ESRD) มักมีภาวะแทรกซ้อนคือโรคโลหิตจางรุนแรง (Severe anemia) ร่วมกับโรคกระดูกพรุนและระดับแคลเซียมในเลือดต่ำ ความผิดปกตินี้สัมพันธ์กับการสูญเสียหน้าที่ต่อมไร้ท่อ (Endocrine functions) ในการผลิตฮอร์โมน 2 ชนิดใดจากไต?",
    "options": {
      "A": "Erythropoietin (EPO) ซึ่งกระตุ้นการสร้างเม็ดเลือดแดงในไขกระดูก และ Calcitriol (1,25-dihydroxyvitamin D3) ซึ่งช่วยดูดซึมแคลเซียมที่ลำไส้เล็ก",
      "B": "Renin และ Aldosterone",
      "C": "Insulin และ Glucagon",
      "D": "Parathyroid hormone และ Calcitonin"
    },
    "correctOption": "A",
    "explanation": "ไตมีหน้าที่ต่อมไร้ท่อสำคัญ 2 ประการ: 1. สร้างฮอร์โมน Erythropoietin (EPO) จาก Peritubular interstitial fibroblasts เพื่อกระตุ้นไขกระดูกสร้าง RBCs เมื่อไตวายจึงขาด EPO เกิดภาวะโลหิตจาง (Normocytic normochromic anemia) 2. ทำหน้าที่เติมหมู่ไฮดรอกซิลขั้นสุดท้ายสร้าง Calcitriol (Active Vitamin D3) เพื่อดูดซึม Ca2+ ที่ลำไส้ เมื่อขาดจึงเกิดภาวะ Renal osteodystrophy",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "kidney-endocrine-functions",
      "erythropoietin",
      "calcitriol",
      "esrd-anemia"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-002",
    "questionText": "ของเสียประเภทไนโตรเจน (Nitrogenous wastes) 3 ชนิดหลักที่ไตต้องกำจัดออกทางปัสสาวะ ได้แก่ ยูเรีย (Urea), ครีอะตินิน (Creatinine), และกรดยูริก (Uric acid) ข้อใดระบุแหล่งกำเนิดทางชีวเคมีของสารทั้งสามได้ถูกต้อง?",
    "options": {
      "A": "Urea เกิดจากการสลายกรดไขมัน; Creatinine เกิดจากการสลายกลูโคส; Uric acid เกิดจากการสลายฮีโมโกลบิน",
      "B": "Urea เกิดจากการสลายกรดอะมิโนและโปรตีนในตับ; Creatinine เกิดจากการสลาย Creatine phosphate ในกล้ามเนื้อลาย; Uric acid เกิดจากการสลายเบส Purine ของกรดนิวคลีอิก (DNA/RNA)",
      "C": "Urea เกิดจากเม็ดเลือดแดง; Creatinine เกิดจากตับอ่อน; Uric acid เกิดจากต่อมไทรอยด์",
      "D": "ทั้งสามชนิดเกิดจากการสลายคอเลสเตอรอลในลำไส้ใหญ่"
    },
    "correctOption": "B",
    "explanation": "ของเสียไนโตรเจนในปัสสาวะ: 1. Urea (มีปริมาณมากที่สุด ประมาณ 21 กรัม/วัน) เกิดจากการทำ Deamination ของกรดอะมิโนในตับ 2. Creatinine (ประมาณ 1.8 กรัม/วัน) เกิดจากการแตกตัวของ Creatine phosphate ในกล้ามเนื้อ ซึ่งเป็นดัชนีวัดการทำงานของไตที่ดีเพราะสร้างคงที่ 3. Uric acid (ประมาณ 0.5 กรัม/วัน) เกิดจากการสลาย Purine bases หากขับไม่ออกจะตกผลึกเป็นโรคเกาต์ (Gout)",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 4,
    "tags": [
      "nitrogenous-wastes",
      "urea",
      "creatinine",
      "uric-acid"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-003",
    "questionText": "ในภาวะที่ร่างกายมีภาวะเลือดเป็นกรด (Metabolic acidosis, pH < 7.35) ท่อหน่วยไต (Renal tubules) จะมีกลไกทางสรีรวิทยาอย่างไรเพื่อปรับสมดุลกรด-ด่างของร่างกายกลับคืนสู่ค่าปกติ?",
    "options": {
      "A": "หยุดการกรองที่ Glomerulus ทั้งหมด",
      "B": "ดูดกลับ H+ ทั้งหมดเข้าสู่กระแสเลือดและขับ HCO3- ทิ้ง",
      "C": "ขับไอออนไฮโดรเจนส่วนเกิน (Secretion of H+) ออกไปกับปัสสาวะ พร้อมกับดูดซึมกลับและสร้างสารละลายไบคาร์บอเนตใหม่ (Reabsorption and generation of new HCO3-) เข้าสู่กระแสเลือด",
      "D": "ขับสารน้ำตาลกลูโคสออกทางปัสสาวะ"
    },
    "correctOption": "C",
    "explanation": "ไตควบคุมสมดุลกรด-ด่างในระยะยาว: เมื่อเกิดภาวะ Acidosis เซลล์ Intercalated cells Type A ใน Collecting duct และเซลล์ใน PCT จะขับ H+ ออกสู่ปัสสาวะ (ผ่าน H+-ATPase และ Na+/H+ exchanger) โดยจับกับแอมโมเนีย (NH3 -> NH4+) และฟอสเฟต พร้อมกับดูดซึมและสังเคราะห์ HCO3- ใหม่กลับเข้ากระแสเลือดเพื่อเพิ่ม pH",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "acid-base-balance",
      "hydrogen-secretion",
      "bicarbonate-reabsorption"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-004",
    "questionText": "ในภาวะอดอาหารเป็นเวลานาน (Prolonged starvation) ไตสามารถทำหน้าที่สังเคราะห์กลูโคสขึ้นมาใหม่จากสารตั้งต้นที่ไม่ใช่คาร์โบไฮเดรต (เช่น กรดอะมิโน Glutamine) เพื่อส่งเข้าสู่กระแสเลือดได้ถึง 20-40% กระบวนการนี้เรียกว่าอะไร?",
    "options": {
      "A": "Lipogenesis",
      "B": "Glycogenolysis",
      "C": "Glycolysis",
      "D": "Gluconeogenesis"
    },
    "correctOption": "D",
    "explanation": "นอกเหนือจากตับแล้ว ไต (โดยเฉพาะเซลล์ของ Proximal Convoluted Tubule) มีเอนไซม์สำหรับกระบวนการ Gluconeogenesis (เช่น Glucose-6-phosphatase) สามารถสังเคราะห์กลูโคสใหม่จากสารตั้งต้น Glutamine และ Lactate ในช่วงที่อดอาหารเป็นเวลานานเพื่อรักษาระดับน้ำตาลในเลือดให้แก่สมอง",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 4,
    "tags": [
      "gluconeogenesis",
      "fasting-metabolism",
      "kidney-functions"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-005",
    "questionText": "ไตทั้งสองข้างตั้งอยู่ในช่องท้องบริเวณใด สัมพันธ์กับแนวกระดูกสันหลังระดับใด และเหตุใดไตข้างขวาจึงอยู่ในตำแหน่งที่ต่ำกว่าไตข้างซ้ายประมาณ 1.5 - 2 เซนติเมตร?",
    "options": {
      "A": "ตั้งอยู่ในช่องว่างหลังเยื่อบุช่องท้อง (Retroperitoneal space) บริเวณระดับกระดูกสันหลัง T12 ถึง L3 โดยไตขวาอยู่ต่ำกว่าเนื่องจากมีพูขวาขนาดใหญ่ของตับ (Liver) เบียดอยู่ด้านบน",
      "B": "ตั้งอยู่ในช่องเยื่อบุช่องท้อง (Intraperitoneal) ที่ระดับ C7 ถึง T4",
      "C": "ตั้งอยู่ในอุ้งเชิงกรานข้างกระเพาะปัสสาวะ",
      "D": "ไตซ้ายอยู่ต่ำกว่าไตขวาเนื่องจากมีม้ามกดทับ"
    },
    "correctOption": "A",
    "explanation": "ไตเป็นอวัยวะ Retroperitoneal ตั้งอยู่สองข้างของกระดูกสันหลังช่วง T12 ถึง L3 โดยขั้วบนของไตขวาอยู่ที่ระดับซี่โครงที่ 12 ส่วนไตซ้ายอยู่ที่ระดับซี่โครงที่ 11 ไตข้างขวาจะอยู่ต่ำกว่าไตข้างซ้ายเล็กน้อย (ประมาณ 1.5-2 ซม.) เนื่องจากตับซึ่งมีขนาดใหญ่อยู่ทางขวาเบียดกดลงมา",
    "system": "Urinary System",
    "topic": "Kidney Gross Anatomy & Position",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 5,
    "tags": [
      "kidney-position",
      "retroperitoneal",
      "t12-l3",
      "liver-relation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-006",
    "questionText": "เนื้อเยื่อเกี่ยวพันที่ทำหน้าที่ห่อหุ้มและปกป้องไตแบ่งออกเป็น 3 ชั้น ลำดับจากชั้นในสุดแนบชิดผิวไตออกสู่ชั้นนอกสุดข้อใดถูกต้อง?",
    "options": {
      "A": "Renal fascia -> Adipose capsule -> Renal capsule",
      "B": "Renal capsule (Fibrous capsule) -> Adipose capsule (Perirenal fat) -> Renal fascia (Gerota's fascia)",
      "C": "Perirenal fat -> Renal capsule -> Renal fascia",
      "D": "Serosa -> Muscularis -> Mucosa"
    },
    "correctOption": "B",
    "explanation": "ชั้นห่อหุ้มไตเรียงจากในออกนอก: 1. Renal (Fibrous) capsule (ชั้นในสุด แนบติดผิวไต ป้องกันการบาดเจ็บและการติดเชื้อลุกลาม) 2. Adipose capsule / Perirenal fat (ชั้นกลาง เป็นไขมันหนาช่วยกันกระแทกและยึดไตให้อยู่กับที่) 3. Renal fascia / Gerota's fascia (ชั้นนอกสุด เป็นแผ่นพังผืดเหนียวตรึงไตและต่อมหมวกไตเข้ากับผนังช่องท้อง)",
    "system": "Urinary System",
    "topic": "Kidney Gross Anatomy & Position",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 6,
    "tags": [
      "renal-capsule",
      "perirenal-fat",
      "renal-fascia",
      "gerotas-fascia"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-007",
    "questionText": "ในผู้ป่วยที่มีภาวะน้ำหนักตัวลดลงอย่างรวดเร็วและรุนแรง อาจเกิดภาวะไตเลื่อนหลุดลงสู่ช่องเชิงกราน (Renal ptosis / Nephroptosis) ซึ่งอาจทำให้ท่อไตหักพับและเกิดการอุดตันของปัสสาวะ ภาวะนี้เกิดจากการสูญเสียเนื้อเยื่อห่อหุ้มไตชั้นใด?",
    "options": {
      "A": "Renal cortex",
      "B": "Renal fibrous capsule",
      "C": "Adipose capsule (Perirenal fat pad) ที่ทำหน้าที่เป็นเบาะไขมันค้ำจุนพยุงตำแหน่งไต",
      "D": "Glomerular basement membrane"
    },
    "correctOption": "C",
    "explanation": "Adipose capsule (Perirenal fat) เป็นก้อนไขมันหนาที่โอบล้อมรอบไต ทำหน้าที่ค้ำจุนพยุงไตให้อยู่ในตำแหน่งปกติทางกายวิภาค หากน้ำหนักลดลงอย่างรวดเร็ว (เช่น ภาวะ Anorexia nervosa หรือโรคมะเร็ง) ก้อนไขมันนี้จะสลายไป ทำให้ไตเลื่อนหล่นลงล่าง (Nephroptosis / Floating kidney) ส่งผลให้ Ureter บิดงอ (Kinking) เกิดภาวะ Hydronephrosis",
    "system": "Urinary System",
    "topic": "Kidney Gross Anatomy & Position",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 6,
    "tags": [
      "nephroptosis",
      "renal-ptosis",
      "perirenal-fat",
      "hydronephrosis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-008",
    "questionText": "บริเวณรอยเว้าทางด้านในของไตเรียกว่า ขั้วไต (Renal Hilum) เป็นทางเข้าออกของโครงสร้างสำคัญ 3 ชนิด ลำดับการเรียงตัวของโครงสร้างดังกล่าวจาก \"ด้านหน้าไปด้านหลัง\" (Anterior to Posterior) ข้อใดถูกต้อง?",
    "options": {
      "A": "Ureter -> Renal Vein -> Renal Artery",
      "B": "Renal Artery -> Renal Vein -> Renal Pelvis",
      "C": "Renal Pelvis -> Renal Artery -> Renal Vein",
      "D": "Renal Vein (หน้าสุด) -> Renal Artery (ตรงกลาง) -> Renal Pelvis / Ureter (หลังสุด) [สูตรจำ V-A-P]"
    },
    "correctOption": "D",
    "explanation": "ที่บริเวณ Renal Hilum โครงสร้างหลักเรียงลำดับจากหน้าไปหลัง (Anteroposterior relation) คือ: 1. Renal Vein อยู่หน้าสุด 2. Renal Artery อยู่ตรงกลาง 3. Renal Pelvis (ซึ่งจะทอดต่อเนื่องลงไปเป็น Ureter) อยู่ด้านหลังสุด จำง่ายๆ ว่า V-A-P (Vein, Artery, Pelvis)",
    "system": "Urinary System",
    "topic": "Kidney Gross Anatomy & Position",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 7,
    "tags": [
      "renal-hilum",
      "hilum-relations",
      "vein-artery-pelvis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-009",
    "questionText": "เนื้อไตส่วนเปลือกนอก (Renal Cortex) มีส่วนที่แทรกตัวลึกลงมาคั่นระหว่างพีระมิดไต (Renal pyramids) แต่ละอันในชั้น Medulla ส่วนของเนื้อไตชั้นนอกที่แทรกเข้ามานี้มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Renal columns (Columns of Bertin)",
      "B": "Renal papillae",
      "C": "Minor calyces",
      "D": "Medullary rays"
    },
    "correctOption": "A",
    "explanation": "Renal columns (Columns of Bertin) คือส่วนของเนื้อไตชั้น Renal cortex ที่ยื่นแทรกลงมาในชั้น Renal medulla ระหว่างพีระมิดไตแต่ละอัน เป็นทางทอดผ่านของหลอดเลือด Interlobar arteries และ Interlobar veins",
    "system": "Urinary System",
    "topic": "Kidney Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 8,
    "tags": [
      "renal-columns",
      "columns-of-bertin",
      "renal-cortex"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-010",
    "questionText": "เนื้อไตชั้นใน Renal Medulla ประกอบด้วยพีระมิดรูปกรวยไต (Renal pyramids) จำนวนประมาณ 8-18 อัน โดยส่วนปลายยอดแหลมของพีระมิดที่ชี้เข้าหาขั้วไตมีชื่อเรียกว่าอะไร และทำหน้าที่ปล่อยน้ำปัสสาวะเข้าสู่โครงสร้างใด?",
    "options": {
      "A": "Renal pelvis ซึ่งปล่อยเข้า Ureter",
      "B": "Renal papilla ซึ่งปล่อยน้ำปัสสาวะออกจากท่อ Collecting ducts เข้าสู่กรวยไตย่อย Minor calyx",
      "C": "Major calyx ซึ่งปล่อยเข้าสู่กระเพาะปัสสาวะ",
      "D": "Renal hilum ซึ่งปล่อยเข้าสู่ Renal vein"
    },
    "correctOption": "B",
    "explanation": "ยอดแหลมของแต่ละ Renal pyramid เรียกว่า Renal papilla บนผิวมีรูเปิดเล็กๆ (Area cribrosa) ของ Papillary ducts (Ducts of Bellini) ทำหน้าที่ปล่อยน้ำปัสสาวะที่สร้างเสร็จสมบูรณ์แล้วเข้าสู่ Minor calyx (โดย Minor calyx แต่ละอันจะประกบครอบ Renal papilla เอาไว้)",
    "system": "Urinary System",
    "topic": "Kidney Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 9,
    "tags": [
      "renal-papilla",
      "minor-calyx",
      "ducts-of-bellini"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-011",
    "questionText": "ลำดับเส้นทางการไหลของน้ำปัสสาวะ (Urine flow pathway) ภายในไตตั้งแต่จุดปลายของท่อไตจนกระทั่งออกจากขั้วไตสู่ท่อไตข้อใดถูกต้อง?",
    "options": {
      "A": "Renal pelvis -> Major calyx -> Minor calyx -> Papillary duct -> Ureter",
      "B": "Major calyx -> Minor calyx -> Renal pelvis -> Papillary duct -> Ureter",
      "C": "Papillary duct -> Minor calyx -> Major calyx -> Renal pelvis -> Ureter",
      "D": "Collecting duct -> Renal pelvis -> Major calyx -> Minor calyx -> Ureter"
    },
    "correctOption": "C",
    "explanation": "เส้นทางการไหลของปัสสาวะ: 1. Papillary duct (ที่ยอด Renal papilla) -> 2. Minor calyx (กรวยไตย่อย 8-18 อัน) -> 3. รวมตัวกันเป็น Major calyx (กรวยไตใหญ่ 2-3 อัน) -> 4. เทรวมเข้าสู่ Renal pelvis (แอ่งกรวยไตใหญ่รูปกรวย) -> 5. ไหลออกจากขั้วไตเข้าสู่ Ureter ไปยังกระเพาะปัสสาวะ",
    "system": "Urinary System",
    "topic": "Kidney Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 9,
    "tags": [
      "urine-flow-pathway",
      "calyces",
      "renal-pelvis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-012",
    "questionText": "ไตทั้งสองข้างได้รับปริมาณเลือดที่สูบฉีดออกจากหัวใจ (Cardiac Output) สูงถึงประมาณกี่เปอร์เซ็นต์ และมีอัตราการไหลเวียนของเลือดผ่านไต (Renal Blood Flow: RBF) ประมาณเท่าใดในภาวะพัก?",
    "options": {
      "A": "ประมาณ 10% ของ Cardiac output หรือประมาณ 500 มล./นาที",
      "B": "ประมาณ 5% ของ Cardiac output หรือประมาณ 250 มล./นาที",
      "C": "ประมาณ 50% ของ Cardiac output หรือประมาณ 2,500 มล./นาที",
      "D": "ประมาณ 20 - 25% ของ Cardiac output หรือคิดเป็นอัตราการไหลประมาณ 1,200 มิลลิลิตรต่อนาที"
    },
    "correctOption": "D",
    "explanation": "แม้ไตทั้งสองข้างจะมีน้ำหนักรวมกันไม่ถึง 0.5% ของน้ำหนักตัว แต่ได้รับเลือดมากถึง 20-25% ของ Resting Cardiac Output (ประมาณ 1,200 มล./นาที) ซึ่งการไหลเวียนที่สูงมหาศาลนี้ไม่ได้เป็นไปเพื่อตอบสนองความต้องการเมแทบอลิซึมของเนื้อไตเอง แต่เพื่อทำหน้าที่กรองและปรับสมดุลของพลาสมาทั่วร่างกายอย่างต่อเนื่อง",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 10,
    "tags": [
      "renal-blood-flow",
      "rbf",
      "cardiac-output-fraction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-013",
    "questionText": "ลำดับการแตกแขนงของหลอดเลือดแดงภายในไตจาก Renal Artery เข้าสู่หน่วยกรอง Glomerulus ข้อใดเรียงลำดับได้อย่างถูกต้องตามหลักกายวิภาค?",
    "options": {
      "A": "Renal artery -> Segmental arteries -> Interlobar arteries -> Arcuate arteries -> Cortical radiate (Interlobular) arteries -> Afferent arterioles -> Glomerular capillaries",
      "B": "Renal artery -> Arcuate arteries -> Segmental arteries -> Afferent arterioles",
      "C": "Renal artery -> Interlobular arteries -> Interlobar arteries -> Efferent arterioles",
      "D": "Renal artery -> Glomerular capillaries -> Afferent arterioles -> Arcuate arteries"
    },
    "correctOption": "A",
    "explanation": "การแตกแขนงของหลอดเลือดแดงในไต: 1. Renal artery -> 2. Segmental arteries (5 เส้นที่ขั้วไต) -> 3. Interlobar arteries (ทอดใน Renal columns) -> 4. Arcuate arteries (โค้งขนานกับฐานของพีระมิดไตที่รอยต่อ Cortex-Medulla) -> 5. Cortical radiate / Interlobular arteries (ทอดตรงขึ้นสู่ Cortex) -> 6. Afferent arterioles นำเลือดเข้าสู่ Glomerulus",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 11,
    "tags": [
      "renal-artery-branching",
      "arcuate-artery",
      "afferent-arteriole"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-014",
    "questionText": "หลอดเลือดแดง Arcuate Arteries มีลักษณะทางกายวิภาคและการทอดตัวที่เป็นเอกลักษณ์อย่างไรในเนื้อไต?",
    "options": {
      "A": "ทอดตัวในแนวดิ่งแทรกอยู่ใน Renal columns",
      "B": "ทอดตัวโค้งขนานไปตามแนวรอยต่อระหว่าง Renal Cortex และ Renal Medulla บริเวณฐานของ Renal pyramids",
      "C": "ทอดตัวลึกลงสู่ Renal papilla",
      "D": "ทอดตัวอยู่ภายนอกถุง Renal fascia"
    },
    "correctOption": "B",
    "explanation": "Arcuate arteries ทอดตัวโค้งเป็นรูปคันศร (Arching pattern) ขนานไปตามรอยต่อ Corticomedullary junction ที่ฐานของ Renal pyramids ให้แขนง Cortical radiate (Interlobular) arteries พุ่งตรงขึ้นสู่ชั้น Cortex",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 11,
    "tags": [
      "arcuate-arteries",
      "corticomedullary-junction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-015",
    "questionText": "ระบบหลอดเลือดของหน่วยไตมีความพิเศษแตกต่างจากอวัยวะทั่วไปในร่างกายคือ กลุ่มหลอดเลือดฝอย Glomerular capillaries วางตัวแทรกอยู่ระหว่างหลอดเลือดชนิดใดทั้งขาเข้าและขาออก?",
    "options": {
      "A": "อยู่ระหว่างหลอดเลือดดำสองเส้น",
      "B": "อยู่ระหว่างหลอดเลือดแดง Afferent arteriole กับหลอดเลือดดำ Venule",
      "C": "อยู่ระหว่างหลอดเลือดแดงสองเส้น คือ Afferent arteriole (ขาเข้า) และ Efferent arteriole (ขาออก) ซึ่งเป็นระบบหลอดเลือดแดงแบบ Arterial portal system",
      "D": "อยู่ระหว่างท่อน้ำเหลืองกับหลอดเลือดแดง"
    },
    "correctOption": "C",
    "explanation": "โดยทั่วไป Capillaries จะเชื่อมระหว่าง Arteriole กับ Venule แต่ใน Glomerulus กลุ่มหลอดเลือดฝอยจะอยู่ระหว่าง Arterioles 2 เส้น คือ Afferent arteriole และ Efferent arteriole การที่ทั้งสองด้านเป็นหลอดเลือดแดงที่มีกล้ามเนื้อเรียบ ทำให้ไตสามารถปรับขนาดเส้นผ่านศูนย์กลางเพื่อควบคุมความดันอุทกสถิต (Glomerular Hydrostatic Pressure: GHP) ให้สูงคงที่ที่ประมาณ 55 mmHg เพื่อการกรองได้อย่างแม่นยำ",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 12,
    "tags": [
      "afferent-efferent-arterioles",
      "portal-system-kidney",
      "ghp"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-016",
    "questionText": "หน่วยทำงานเชิงโครงสร้างและหน้าที่พื้นฐานของไต (Functional unit of the kidney) คือโครงสร้างใด และในไตแต่ละข้างของผู้ใหญ่ปกติมีโครงสร้างนี้ประมาณกี่ล้านหน่วย?",
    "options": {
      "A": "Collecting duct โดยมี 50,000 หน่วย",
      "B": "Renal pyramid โดยมี 500,000 หน่วย",
      "C": "Major calyx โดยมี 100,000 หน่วย",
      "D": "Nephron (หน่วยไต) โดยมีจำนวนประมาณ 1.0 ถึง 1.25 ล้านหน่วยต่อไตหนึ่งข้าง"
    },
    "correctOption": "D",
    "explanation": "Nephron เป็นหน่วยการทำงานที่เล็กที่สุดของไตที่สามารถสร้างปัสสาวะได้ ในไตแต่ละข้างมีเนฟรอนประมาณ 1 - 1.25 ล้านหน่วย (รวมสองข้างประมาณ 2 - 2.5 ล้านหน่วย) ร่างกายไม่สามารถสร้างเนฟรอนใหม่ทดแทนได้เมื่อถูกทำลาย",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 13,
    "tags": [
      "nephron",
      "functional-unit",
      "nephron-count"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-017",
    "questionText": "หน่วยไต (Nephron) ประกอบด้วยส่วนสำคัญ 2 ส่วนหลัก ได้แก่ Renal Corpuscle (มัลพิเกียนคอร์ปัสเซิล) และ Renal Tubule (ท่อหน่วยไต) ส่วนของ Renal Corpuscle ประกอบด้วยโครงสร้างใดบ้าง?",
    "options": {
      "A": "Glomerulus (กระจุกหลอดเลือดฝอย) และ Bowman's capsule (Glomerular capsule ถุงหุ้มโกลเมอรูลัส)",
      "B": "Proximal tubule และ Distal tubule",
      "C": "Loop of Henle และ Collecting duct",
      "D": "Afferent arteriole และ Efferent arteriole"
    },
    "correctOption": "A",
    "explanation": "Renal Corpuscle (Malpighian corpuscle) ทำหน้าที่กรองพลาสมา ประกอบด้วย 2 ส่วน: 1. Glomerulus: กระจุกหลอดเลือดฝอยชนิดมีรูพรุน (Fenestrated capillaries) ประมาณ 20-40 ลูป 2. Bowman's capsule: ถุงเยื่อสองชั้นรูปถ้วยที่โอบอุ้ม Glomerulus เอาไว้เพื่อรับน้ำกรอง (Filtrate)",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 14,
    "tags": [
      "renal-corpuscle",
      "glomerulus",
      "bowmans-capsule"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-018",
    "questionText": "ถุงหุ้มโกลเมอรูลัส (Bowman's capsule) ประกอบด้วยผนัง 2 ชั้น ชั้นในสุด (Visceral layer) แนบชิดกับผนังหลอดเลือดฝอยของโกลเมอรูลัส ประกอบด้วยเซลล์ชนิดพิเศษที่มีแขนงเท้ายื่นออกไปหุ้มหลอดเลือดฝอย เซลล์ดังกล่าวมีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Mesangial cells",
      "B": "Podocytes (เซลล์มีเท้า)",
      "C": "Juxtaglomerular cells",
      "D": "Macula densa cells"
    },
    "correctOption": "B",
    "explanation": "Bowman's capsule มี 2 ชั้น: ชั้นนอก Parietal layer บุด้วย Simple squamous epithelium ชั้นใน Visceral layer ประกอบด้วยเซลล์รูปร่างพิเศษชื่อ Podocytes ซึ่งมี Primary processes แตกแขนงย่อยออกเป็น Foot processes (Pedicels) ไปโอบรัดรอบ Glomerular capillaries เกิดเป็นร่องกรอง (Filtration slits)",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 15,
    "tags": [
      "podocytes",
      "visceral-layer",
      "pedicels",
      "filtration-slits"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-019",
    "questionText": "แผงกั้นการกรองของโกลเมอรูลัส (Glomerular Filtration Membrane / Barrier) ประกอบด้วยชั้นเนื้อเยื่อ 3 ชั้นที่เรียงซ้อนกันเพื่อคัดกรองสารตามขนาดและประจุไฟฟ้า ข้อใดเรียงลำดับจากด้านในลูเมนของหลอดเลือดฝอยออกสู่ช่องว่างแคปซูลได้ถูกต้อง?",
    "options": {
      "A": "GBM -> Endothelium -> Parietal epithelium",
      "B": "Podocytes -> GBM -> Endothelium",
      "C": "Fenestrated capillary endothelium -> Glomerular basement membrane (GBM) -> Filtration slits (Slit diaphragms) ระหว่าง Pedicels ของ Podocytes",
      "D": "Endothelium -> Mesangial matrix -> Tubule epithelium"
    },
    "correctOption": "C",
    "explanation": "Filtration barrier ประกอบด้วย 3 ชั้นจากในออกนอก: 1. Fenestrated endothelium ของหลอดเลือดฝอย (มีรูพรุน 70-100 nm กันเซลล์เม็ดเลือด) 2. Glomerular Basement Membrane (GBM: มีประจุลบของ Heparan sulfate กันโปรตีนที่มีประจุลบ) 3. Filtration slit diaphragms ระหว่างแขนงเท้า Pedicels ของ Podocytes (ช่องกว้าง 20-30 nm คัดกรองโมเลกุลขนาดเล็ก)",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 16,
    "tags": [
      "filtration-barrier",
      "gbm",
      "fenestrations",
      "podocyte-slits"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-020",
    "questionText": "ผู้ป่วยโรคไตอักเสบชนิด Nephrotic syndrome มีอาการบวมน้ำทั่วร่างกายและตรวจปัสสาวะพบไข่ขาวรั่วปริมาณมหาศาล (Massive proteinuria / Albuminuria) พยาธิสภาพหลักทางจุลกายวิภาคเกิดจากความเสียหายของโครงสร้างและประจุไฟฟ้าใดใน Glomerular filtration barrier?",
    "options": {
      "A": "การหดตัวของ Tunica adventitia",
      "B": "การฉีกขาดของ Renal pelvis",
      "C": "การอุดตันของ Collecting duct",
      "D": "การสูญเสียประจุลบ (Negative electrostatic charges) ของ Heparan sulfate ในชั้น Glomerular Basement Membrane ร่วมกับการหลุดลอกหรือฝ่อแบนของ Podocyte foot processes (Effacement of pedicels)"
    },
    "correctOption": "D",
    "explanation": "ในภาวะปกติ โปรตีน Albumin แม้จะมีขนาดเส้นผ่านศูนย์กลางเล็กพอที่จะผ่านรูพรุนได้ แต่ไม่สามารถผ่านการกรองออกมาได้เนื่องจาก Albumin มีประจุลบ จึงถูกผลักโดยประจุลบของ Heparan sulfate proteoglycans ใน GBM (Charge-selective barrier) เมื่อเกิดโรคไตเนโฟรติก มีการสูญเสียประจุลบร่วมกับ Podocyte effacement อัลบูมินจึงรั่วหลุดออกมาในปัสสาวะ เกิด Proteinuria รุนแรง",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 16,
    "tags": [
      "nephrotic-syndrome",
      "proteinuria",
      "negative-charge-barrier",
      "podocyte-effacement"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-021",
    "questionText": "เซลล์ชนิด Mesangial cells (Intraglomerular mesangial cells) ซึ่งแทรกตัวอยู่ระหว่างลูปหลอดเลือดฝอยของ Glomerulus ทำหน้าที่สำคัญทางสรีรวิทยาและกายวิภาคอย่างไร?",
    "options": {
      "A": "ทำหน้าที่ค้ำจุนเชิงกลแก่ลูปหลอดเลือดฝอย, มีคุณสมบัติหดตัวได้ (Contractile ability) เพื่อปรับพื้นที่ผิวและควบคุมอัตราการกรอง, และทำหน้าที่ Phagocytosis ดักจับโปรตีนและ Immune complexes ที่ติดค้างในตะแกรงกรอง",
      "B": "ทำหน้าที่สร้างและหลั่งฮอร์โมนอินซูลิน",
      "C": "ทำหน้าที่ดูดกลับน้ำตาลกลูโคสทั้งหมด",
      "D": "ทำหน้าที่สร้างน้ำปัสสาวะโดยตรง"
    },
    "correctOption": "A",
    "explanation": "Mesangial cells เป็นเซลล์ที่มีความสำคัญ 3 ด้าน: 1. Structural support ค้ำจุน Glomerular capillary loops 2. Phagocytosis เก็บกินโมเลกุลขนาดใหญ่และ Immune complexes ทำความสะอาด Basement membrane 3. มี Myofilaments สามารถหดตัวตามการกระตุ้นของ Angiotensin II ช่วยลดพื้นที่ผิวการกรองเพื่อควบคุม GFR",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 15,
    "tags": [
      "mesangial-cells",
      "phagocytosis",
      "gfr-regulation",
      "contractility"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-022",
    "questionText": "ท่อหน่วยไตส่วนต้น (Proximal Convoluted Tubule: PCT) มีลักษณะทางจุลกายวิภาคศาสตร์ที่ปรับตัวเพื่อรองรับหน้าที่การดูดซึมกลับสารปริมาณมหาศาล (Massive reabsorption) อย่างไร?",
    "options": {
      "A": "เป็นเซลล์แบนบาง Simple squamous เพื่อให้สารผ่านแบบ Passive diffusion อย่างเดียว",
      "B": "เซลล์บุผิวเป็น Simple cuboidal epithelium ที่มี Microvilli ยาวและหนาแน่นมากเกิดเป็น Brush border ทางผิวด้านใน และมีไมโทคอนเดรียจำนวนมากที่ Basolateral invaginations เพื่อสร้าง ATP สำหรับ Active transport",
      "C": "เป็น Stratified columnar epithelium หนา 5 ชั้น",
      "D": "ไม่มี Microvilli แต่มี Cilia โบกพัด"
    },
    "correctOption": "B",
    "explanation": "PCT เป็นส่วนที่มีการดูดซึมสารกลับมากที่สุด (65-70% ของน้ำและโซเดียม, 100% ของกลูโคสและกรดอะมิโน) เซลล์จึงมี Dense brush border (Microvilli) เพิ่มพื้นที่ผิวดูดซึม และมีรอยพับ Basolateral interdigitations อุดมไปด้วย Mitochondria เพื่อผลิตพลังงานขับเคลื่อน Na+/K+ ATPase pumps",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 17,
    "tags": [
      "pct-histology",
      "brush-border",
      "microvilli",
      "active-transport"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-023",
    "questionText": "สารชนิดใดต่อไปนี้ภายใต้สภาวะร่างกายปกติ จะถูกดูดซึมกลับเข้าสู่กระแสเลือดเกือบ 100% บริเวณท่อหน่วยไตส่วนต้น (Proximal Convoluted Tubule: PCT) จนไม่เหลือหลุดรอดออกมาในปัสสาวะ?",
    "options": {
      "A": "ไอออนไฮโดรเจน และแอมโมเนียม",
      "B": "Urea และ Creatinine",
      "C": "Glucose (กลูโคส) และ Amino acids (กรดอะมิโน) โดยอาศัยโปรตีนตัวพา Sodium-Glucose Cotransporter (SGLT2 และ SGLT1)",
      "D": "ยาเพนิซิลลินและสารพิษ"
    },
    "correctOption": "C",
    "explanation": "ที่ PCT สารอาหารที่มีค่าต่อร่างกาย ได้แก่ Glucose (เกือบ 100%), Amino acids (เกือบ 100%), และโปรตีนโมเลกุลเล็กที่หลุดรอดมา จะถูกดูดซึมกลับอย่างสมบูรณ์โดยอาศัยกระบวนการ Secondary active transport ร่วมกับโซเดียม (เช่น SGLT2) หากระดับน้ำตาลในเลือดเกินขีดจำกัด (Renal threshold ~180 mg/dL) จึงจะเกิด Glycosuria รั่วออกมาในปัสสาวะ",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 17,
    "tags": [
      "pct-reabsorption",
      "glucose-reabsorption",
      "sglt2",
      "renal-threshold"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-024",
    "questionText": "ห่วงเฮนเลขาลง (Descending limb of the Loop of Henle) มีคุณสมบัติความสามารถในการซึมผ่าน (Permeability) ของผนังท่ออย่างไรที่สอดคล้องกับกลไกสร้างปัสสาวะเข้มข้น?",
    "options": {
      "A": "มีการปั๊มน้ำออกด้วย ATP",
      "B": "ยอมให้เฉพาะโซเดียมผ่าน แต่ไม่ยอมให้น้ำผ่าน",
      "C": "ไม่ยอมให้ทั้งน้ำและโซเดียมซึมผ่านเลย",
      "D": "ยอมให้น้ำซึมผ่านได้อย่างอิสระสูง (Highly permeable to water ผ่าน Aquaporin-1) แต่แทบไม่ยอมให้โซเดียมคลอไรด์หรือสารละลายซึมผ่าน (Impermeable to solutes)"
    },
    "correctOption": "D",
    "explanation": "Descending limb (โดยเฉพาะ Thin descending limb) มีท่อ Aquaporin-1 หนาแน่น ยอมให้น้ำออสโมซิสออกจากลูเมนเข้าสู่ Interstitium ที่มีความเข้มข้นสูงได้อย่างอิสระ แต่ไม่ยอมให้ NaCl ซึมผ่าน ทำให้ของเหลวภายในท่อมีความเข้มข้น (Osmolality) สูงขึ้นเรื่อยๆ จนสูงสุดที่จุดวกกลับก้นห่วง (ประมาณ 1,200 mOsm/kg)",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 18,
    "tags": [
      "descending-limb",
      "permeable-to-water",
      "countercurrent-multiplier"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-025",
    "questionText": "ห่วงเฮนเลขากลับส่วนหนา (Thick Ascending Limb: TAL of Loop of Henle) มีคุณสมบัติทางสรีรวิทยาและโปรตีนตัวพาชนิดใดที่ทำหน้าที่ปั๊มไอออน และเป็นเป้าหมายของยาขับปัสสาวะกลุ่ม Loop diuretics (เช่น Furosemide)?",
    "options": {
      "A": "ผนังท่อ \"ไม่ยอมให้น้ำซึมผ่านอย่างสมบูรณ์ (Impermeable to water)\" แต่มีการปั๊มไอออนอย่างแข็งขันผ่าน Na+/K+/2Cl- cotransporter (NKCC2)",
      "B": "ยอมให้น้ำผ่านได้ดีผ่านช่องทาง Aquaporin-2",
      "C": "มีการหลั่งโซเดียมเข้าสู่ลูเมน",
      "D": "มีตัวรับ Aldosterone receptor ควบคุมการดูดซึมกลูโคส"
    },
    "correctOption": "A",
    "explanation": "Thick Ascending Limb (TAL) มีคุณสมบัติสำคัญยิ่งยวด: ผนังท่อไม่ยอมให้น้ำผ่านได้เลย (Water-impermeable) แต่เซลล์ใช้พลังงาน ATP ปั๊มไอออน Na+, K+, และ 2Cl- ออกจากลูเมนเข้าสู่เนื้อเยื่อ Medullary interstitium ผ่านตัวพา NKCC2 ยาขับปัสสาวะ Furosemide จะออกฤทธิ์ยับยั้งตัวพานี้ ทำให้ไอออนไม่ถูกดูดกลับและดึงน้ำขับออกเป็นปัสสาวะปริมาณมาก",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 19,
    "tags": [
      "thick-ascending-limb",
      "nkcc2",
      "furosemide",
      "loop-diuretics",
      "water-impermeable"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-026",
    "questionText": "ท่อหน่วยไตส่วนปลาย (Distal Convoluted Tubule: DCT) มีเซลล์บุผิวเป็น Simple cuboidal ที่มีลักษณะทางเนื้อเยื่อแตกต่างจาก PCT อย่างไร?",
    "options": {
      "A": "เซลล์ของ DCT มี Brush border หนาแน่นกว่า PCT ถึง 3 เท่า",
      "B": "เซลล์ของ DCT มี Microvilli สั้นและเบาบางมาก จึง \"ไม่มี Brush border\" เห็นลูเมนภายในท่อเรียบและกว้างชัดเจนกว่า PCT",
      "C": "DCT ประกอบด้วยกล้ามเนื้อเรียบ 3 ชั้น",
      "D": "DCT บุด้วย Stratified squamous epithelium"
    },
    "correctOption": "B",
    "explanation": "เมื่อส่องดูด้วยกล้องจุลทรรศน์: DCT เซลล์เป็น Simple cuboidal มี Microvilli สั้นๆ เพียงเล็กน้อย ไม่มี Brush border ขอบด้านในลูเมนจึงเรียบ ชัดเจน และกว้างกว่า PCT เซลล์ย้อมติดสีชมพูจางกว่า (Basophilic กว่าเล็กน้อย) ทำหน้าที่ปรับความเข้มข้นไอออนขั้นสุดท้าย",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 20,
    "tags": [
      "dct-histology",
      "no-brush-border",
      "pct-vs-dct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-027",
    "questionText": "ฮอร์โมนพาราไทรอยด์ (Parathyroid Hormone: PTH) ออกฤทธิ์กระตุ้นการดูดซึมกลับของแคลเซียมไอออน (Ca2+ reabsorption) ที่ท่อหน่วยไตส่วนใดมากที่สุด?",
    "options": {
      "A": "Descending limb of Loop of Henle",
      "B": "Proximal Convoluted Tubule (PCT)",
      "C": "Distal Convoluted Tubule (DCT)",
      "D": "Collecting duct"
    },
    "correctOption": "C",
    "explanation": "PTH ทำหน้าที่เพิ่มระดับแคลเซียมในกระแสเลือด โดยออกฤทธิ์กระตุ้นช่องแคลเซียม TRPV5 และ Calbindin ที่บริเวณ Distal Convoluted Tubule (DCT) และส่วนต้นของ Connecting tubule ส่งผลให้มีการดูดกลับ Ca2+ เพิ่มขึ้น ขณะเดียวกัน PTH จะยับยั้งการดูดกลับฟอสเฟตที่ PCT เพื่อขับฟอสเฟตทิ้งทางปัสสาวะ",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 20,
    "tags": [
      "pth",
      "calcium-reabsorption",
      "dct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-028",
    "questionText": "ท่อรวมน้ำปัสสาวะ (Collecting Duct) ประกอบด้วยเซลล์หลัก 2 ชนิด เซลล์ชนิด Principal cells (P cells) มีบทบาทสรีรวิทยาและตอบสนองต่อฮอร์โมนชนิดใด?",
    "options": {
      "A": "ทำหน้าที่กรองเม็ดเลือดแดง",
      "B": "ทำหน้าที่ควบคุมสมดุลกรด-ด่างโดยการหลั่งไบคาร์บอเนต",
      "C": "ทำหน้าที่สร้างฮอร์โมนอินซูลิน",
      "D": "ทำหน้าที่ดูดซึม Na+ และน้ำกลับ พร้อมกับขับ K+ ออกสู่ท่อ โดยตอบสนองต่อฮอร์โมน Aldosterone และฮอร์โมน Antidiuretic Hormone (ADH / Vasopressin)"
    },
    "correctOption": "D",
    "explanation": "Collecting duct มีเซลล์ 2 ชนิด: 1. Principal cells (P cells, มีจำนวนมากที่สุด): มีตัวรับของ Aldosterone (กระตุ้นปั๊ม ENaC ดูดซึม Na+ และขับ K+) และตัวรับ V2 ของ ADH (แทรกช่อง Aquaporin-2 ดูดซึมน้ำกลับ) 2. Intercalated cells (I cells): ควบคุมสมดุลกรด-ด่าง (Type A ขับ H+, Type B ขับ HCO3-)",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 21,
    "tags": [
      "principal-cells",
      "aldosterone",
      "adh",
      "collecting-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-029",
    "questionText": "ฮอร์โมนแอนติไดอูเรติก (Antidiuretic Hormone: ADH หรือ Vasopressin) ควบคุมการดูดซึมน้ำกลับที่ Collecting duct โดยกระตุ้นการเคลื่อนย้ายของช่องทางผ่านน้ำชนิดใดไปแทรกบนเยื่อหุ้มเซลล์ด้านลูเมน (Apical membrane)?",
    "options": {
      "A": "Aquaporin-2 (AQP2)",
      "B": "Aquaporin-1 (AQP1)",
      "C": "SGLT2",
      "D": "GLUT4"
    },
    "correctOption": "A",
    "explanation": "ADH สร้างจากไฮโปทาลามัส หลั่งจากต่อมใต้สมองส่วนหลัง เมื่อจับกับ V2 receptors บน Principal cells จะกระตุ้นสัญญาณผ่าน cAMP ทำให้ถุง Vesicles ที่บรรจุช่องน้ำ Aquaporin-2 เคลื่อนตัวไปเชื่อมรวม (Exocytosis) กับ Apical membrane ยอมให้น้ำออสโมซิสกลับคืนสู่กระแสเลือด ปัสสาวะจึงมีปริมาณลดลงและเข้มข้นขึ้น",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 21,
    "tags": [
      "adh",
      "aquaporin-2",
      "water-conservation",
      "vasopressin"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-030",
    "questionText": "ผู้ป่วยโรคเบาจืดชนิด Neurogenic (Central) Diabetes Insipidus ร่างกายไม่สามารถหลั่งฮอร์โมน ADH ได้ ส่งผลกระทบต่อลักษณะของน้ำปัสสาวะและสรีรวิทยาทางเดินปัสสาวะอย่างไร?",
    "options": {
      "A": "ปัสสาวะไม่ออกเลย (Anuria)",
      "B": "ปัสสาวะออกในปริมาณมหาศาล (10 - 20 ลิตรต่อวัน) และปัสสาวะเจือจางมาก (Very low specific gravity / Hypotonic urine)",
      "C": "ปัสสาวะมีรสหวานจากน้ำตาลรั่ว",
      "D": "ปัสสาวะมีสีขุ่นข้นจากเม็ดเลือดขาว"
    },
    "correctOption": "B",
    "explanation": "เมื่อขาด ADH ท่อ Collecting duct จะไม่ยอมให้น้ำซึมผ่านได้เลย (Water-impermeable) ทำให้น้ำที่เหลือจากการกรองไม่ถูกดูดซึมกลับ ผู้ป่วยจึงปัสสาวะบ่อยและปริมาณมากผิดปกติ (Polyuria 10-20 L/day) ปัสสาวะเจือจางเหมือนน้ำเปล่า (Osmolality < 100 mOsm/kg) และกระหายน้ำตลอดเวลา (Polydipsia)",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 21,
    "tags": [
      "diabetes-insipidus",
      "polyuria",
      "adh-deficiency"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-031",
    "questionText": "หน่วยไตในร่างกายแบ่งออกเป็น Cortical nephrons และ Juxtamedullary nephrons ข้อใดเปรียบเทียบสัดส่วนและลักษณะทางกายวิภาคของเนฟรอนทั้งสองชนิดได้ถูกต้อง?",
    "options": {
      "A": "Cortical nephrons มีเฉพาะในเด็ก ส่วน Juxtamedullary มีเฉพาะในผู้ใหญ่",
      "B": "Cortical nephrons มี 15% ส่วน Juxtamedullary มี 85%",
      "C": "Cortical nephrons มีประมาณ 85% มี Loop of Henle สั้นและจมอยู่ในชั้นนอกของ Medulla; ส่วน Juxtamedullary nephrons มีประมาณ 15% มี Renal corpuscle อยู่ชิดรอยต่อ และมี Loop of Henle ยาวลึกเข้าไปถึงก้น Medulla",
      "D": "ทั้งสองชนิดมีสัดส่วนเท่ากันและมีความยาวของห่วงเฮนเลเท่ากันทุกประการ"
    },
    "correctOption": "C",
    "explanation": "เนฟรอนแบ่งเป็น 2 ชนิด: 1. Cortical nephrons (ประมาณ 85%): Glomerulus อยู่ในชั้นนอกของ Cortex มีห่วงเฮนเลสั้น ทอดลงไปใน Medulla เพียงเล็กน้อย ล้อมรอบด้วย Peritubular capillaries 2. Juxtamedullary nephrons (ประมาณ 15%): Glomerulus อยู่ลึกชิดขอบ Medulla มีห่วงเฮนเลยาวมากทอดลึกถึงยอด Renal papilla ล้อมรอบด้วย Vasa recta มีบทบาทสำคัญที่สุดในการสร้างสภาวะความเข้มข้นสูงของ Medulla",
    "system": "Urinary System",
    "topic": "Cortical vs Juxtamedullary Nephrons",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 22,
    "tags": [
      "cortical-nephrons",
      "juxtamedullary-nephrons",
      "loop-of-henle-length"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-032",
    "questionText": "หลอดเลือดฝอยเส้นตรง (Vasa Recta) เป็นโครงสร้างหลอดเลือดพิเศษที่แตกแขนงออกมาจาก Efferent arteriole ของเนฟรอนชนิดใด และทำหน้าที่สำคัญอย่างไร?",
    "options": {
      "A": "เป็นหลอดเลือดดำที่ไม่มีการแลกเปลี่ยนสาร",
      "B": "แตกออกมาจาก Cortical nephrons เพื่อไปเลี้ยงกระเพาะอาหาร",
      "C": "ทอดอยู่รอบ Bowman's capsule เพื่อรับแรงดันสูง",
      "D": "แตกออกมาจาก Efferent arteriole ของ Juxtamedullary nephrons ทอดตัวขนานคู่กับห่วงเฮนเลยาว ทำหน้าที่ในระบบ Countercurrent Exchanger เพื่อคงสภาพความเข้มข้นสูงของ Medullary osmotic gradient"
    },
    "correctOption": "D",
    "explanation": "Vasa recta เป็นร่างแหหลอดเลือดฝอยยาวรูปตัวยู (Hairpin loop) ที่แตกแขนงมาจาก Efferent arteriole ของ Juxtamedullary nephrons โดยเฉพาะ ทอดขนานแนบชิดกับ Long loop of Henle ทำหน้าที่เป็น Countercurrent Exchanger ลำเลียงสารอาหารและออกซิเจนไปเลี้ยงเนื้อไตชั้น Medulla และดึงน้ำกลับเข้ากระแสเลือดอย่างช้าๆ โดยไม่ชะล้าง (Without washing out) สารละลายเกลือและยูเรียใน Medulla",
    "system": "Urinary System",
    "topic": "Cortical vs Juxtamedullary Nephrons",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 23,
    "tags": [
      "vasa-recta",
      "countercurrent-exchanger",
      "juxtamedullary-nephron"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-033",
    "questionText": "กลไก Countercurrent Multiplier System ที่ทำให้เนื้อเยื่อ Renal Medulla มีความเข้มข้นของออสโมลาริตีสูงขึ้นเรื่อยๆ จาก 300 mOsm/kg ที่เปลือกนอกไปจนถึง 1,200 mOsm/kg ที่ยอดปิรามิด อาศัยการทำงานประสานกันของโครงสร้างใด?",
    "options": {
      "A": "การไหลสวนทางกันของของเหลวใน Descending limb (ยอมให้น้ำออก) และ Ascending limb (ปั๊ม NaCl ออกแต่ไม่ยอมให้น้ำผ่าน) ของ Loop of Henle ใน Juxtamedullary nephrons ร่วมกับการหมุนเวียนของ Urea",
      "B": "การบีบตัวของกล้ามเนื้อหัวใจห้องล่างซ้าย",
      "C": "การทำงานของ Glomerular filtration barrier",
      "D": "การหดเกร็งของกล้ามเนื้อกระเพาะปัสสาวะ"
    },
    "correctOption": "A",
    "explanation": "Countercurrent Multiplier อาศัย: 1. ทิศทางการไหลของของเหลวในห่วงเฮนเลขาลงและขาขึ้นที่สวนทางกัน 2. คุณสมบัติของ Descending limb ที่ยอมให้น้ำออกอย่างเดียว ทำให้ของเหลวยิ่งลงลึกยิ่งเข้มข้น 3. Thick ascending limb ที่ปั๊ม NaCl ออกสู่ Interstitial fluid ตลอดเวลาแต่ไม่ยอมให้น้ำออก 4. การรีไซเคิลของ Urea จากท่อรวม ช่วยสะสมความเข้มข้นใน Medulla สูงถึง 1,200 mOsm/L",
    "system": "Urinary System",
    "topic": "Cortical vs Juxtamedullary Nephrons",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 24,
    "tags": [
      "countercurrent-multiplier",
      "medullary-gradient",
      "urea-recycling"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-034",
    "questionText": "หลอดเลือดฝอยรอบท่อหน่วยไต Peritubular Capillaries ซึ่งแตกแขนงมาจาก Efferent arteriole ในชั้น Renal Cortex มีลักษณะทางสรีรวิทยาของแรงดันอย่างไรที่เอื้ออำนวยต่อการดูดซึมสารกลับเข้าสู่กระแสเลือด?",
    "options": {
      "A": "มีความดันอุทกสถิตสูงมากเพื่อผลักดันสารออก",
      "B": "มีความดันอุทกสถิตต่ำ (Low hydrostatic pressure) แต่มีแรงดันคอลลอยด์ออสโมติกสูงมาก (High colloid osmotic / oncotic pressure) จึงเกิดแรงดึงดูดของเหลวและสารอาหารกลับเข้าสู่หลอดเลือดได้อย่างรวดเร็ว",
      "C": "ไม่มีโปรตีนในหลอดเลือดเลย",
      "D": "มีแรงดันเท่ากับความดันใน Aorta"
    },
    "correctOption": "B",
    "explanation": "เนื่องจากเลือดที่ออกจาก Glomerulus สูญเสียน้ำพลาสมาไปในการกรองถึง 20% ทำให้โปรตีนในเลือดมีความเข้มข้นสูงมาก เลือดที่เข้าสู่ Peritubular capillaries จึงมี Oncotic pressure สูงมาก (ประมาณ 32 mmHg) ขณะที่มี Hydrostatic pressure ต่ำมาก (เพียง 8-10 mmHg) ผลต่างแรงดันนี้ก่อให้เกิดแรงดึงสุทธิ (Net reabsorption pressure) ดูดสารน้ำและเกลือแร่กลับเข้าสู่กระแสเลือดอย่างมีประสิทธิภาพ",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 12,
    "tags": [
      "peritubular-capillaries",
      "high-oncotic-pressure",
      "reabsorption-mechanics"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-035",
    "questionText": "ในทางกายวิภาคศาสตร์ เส้นผ่านศูนย์กลางของหลอดเลือด Afferent arteriole (ขาเข้า) มีขนาดกว้างกว่า Efferent arteriole (ขาออก) ของโกลเมอรูลัส ลักษณะทางกายวิภาคนี้มีประโยชน์อย่างไร?",
    "options": {
      "A": "เพื่อให้ออกซิเจนในเลือดลดลง",
      "B": "เพื่อลดความดันในโกลเมอรูลัสไม่ให้แตก",
      "C": "สร้างแรงต้านทานที่ทางออก ทำให้เกิดแรงดันอุทกสถิตของเลือดใน Glomerular capillaries สูงคงที่ (ประมาณ 55 mmHg) ซึ่งจำเป็นต่อการผลักดันให้เกิดกระบวนการกรองพลาสมา",
      "D": "เพื่อป้องกันไม่ให้เม็ดเลือดแดงเข้าสู่ไต"
    },
    "correctOption": "C",
    "explanation": "ขนาดของ Afferent arteriole ที่ใหญ่กว่า Efferent arteriole ทำให้เกิด \"Bottleneck effect\" เลือดไหลเข้าได้ง่ายแต่ไหลออกได้ยาก ส่งผลให้เกิดแรงดันน้ำในกระจุกหลอดเลือดฝอย Glomerular Hydrostatic Pressure (GHP) สูงถึง 55 mmHg (เทียบกับ Capillaries ทั่วไปในร่างกายที่มีแรงดันเพียง 18-30 mmHg) ซึ่งแรงดันที่สูงนี้คือแรงขับเคลื่อนหลักในการกรองพลาสมา",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 14,
    "tags": [
      "afferent-vs-efferent-diameter",
      "bottleneck-effect",
      "ghp-55mmhg"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-036",
    "questionText": "โครงสร้าง Juxtaglomerular Apparatus (JGA) เป็นโครงสร้างควบคุมความดันโลหิตและอัตราการกรองของไต เกิดจากการสัมผัสกันระหว่างโครงสร้างคู่ใดของหน่วยไต?",
    "options": {
      "A": "Bowman's capsule กับ Ureter",
      "B": "Proximal tubule กับ Loop of Henle",
      "C": "Collecting duct กับ Renal papilla",
      "D": "ส่วนต้นของ Distal Convoluted Tubule (DCT) กับขั้วหลอดเลือด Afferent และ Efferent arterioles ของเนฟรอนเดียวกัน"
    },
    "correctOption": "D",
    "explanation": "JGA เกิดจากการที่ท่อหน่วยไตส่วนต้นของ DCT ทอดตัววกกลับมาแตะชิดกับขั้วหลอดเลือด (Vascular pole) ของ Renal corpuscle เดียวกัน ระหว่าง Afferent arteriole และ Efferent arteriole ทำหน้าที่เป็น Sensor ตรวจสอบคุณสมบัติของของเหลวในท่อและควบคุมอัตราการกรอง (Tubuloglomerular feedback)",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 25,
    "tags": [
      "jga",
      "vascular-pole",
      "dct-contact"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-037",
    "questionText": "กลุ่มเซลล์ชนิด Macula Densa ซึ่งเป็นส่วนประกอบหนึ่งของ JGA ตั้งอยู่ที่ผนังของท่อใด และทำหน้าที่เป็นตัวรับรู้ (Sensor) ตรวจจับสิ่งใด?",
    "options": {
      "A": "ตั้งอยู่ที่ผนังของท่อ Distal Convoluted Tubule (DCT) ทำหน้าที่เป็น Chemoreceptors/Osmoreceptors ตรวจจับความเข้มข้นของโซเดียมและคลอไรด์ (NaCl concentration) และอัตราการไหลของของเหลวในท่อ",
      "B": "ตั้งอยู่ที่ผนังหลอดเลือดแดง ทำหน้าที่ตรวจจับออกซิเจน",
      "C": "ตั้งอยู่ที่กระเพาะปัสสาวะ ตรวจจับแรงตึงตัว",
      "D": "ตั้งอยู่ที่ Loop of Henle ตรวจจับกลูโคส"
    },
    "correctOption": "A",
    "explanation": "Macula densa เป็นกลุ่มเซลล์รูปทรงกระบอกสูงเรียงตัวเบียดกันแน่น นิวเคลียสติดสีเข้ม อยู่บนผนังของ DCT ด้านที่ชิดกับ Afferent arteriole ทำหน้าที่ตรวจวัดความเข้มข้นของไอออน Na+ และ Cl- ใน Filtrate ที่ไหลผ่าน หาก NaCl ต่ำลง บ่งชี้ว่า GFR ต่ำ เซลล์จะส่งสัญญาณเคมี (Adenosine / Nitric oxide) ไปสั่งให้ JG cells หลั่ง Renin",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "macula-densa",
      "nacl-sensor",
      "dct-wall",
      "chemoreceptors"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-038",
    "questionText": "เซลล์ชนิด Juxtaglomerular cells (JG cells หรือ Granular cells) ซึ่งทำหน้าที่สร้าง เก็บสะสม และหลั่งเอนไซม์เรนิน (Renin) ดัดแปลงมาจากเซลล์ชนิดใดและตั้งอยู่ที่โครงสร้างใด?",
    "options": {
      "A": "ดัดแปลงมาจากเซลล์เยื่อบุผิวของ Bowman's capsule",
      "B": "ดัดแปลงมาจากเซลล์กล้ามเนื้อเรียบ (Modified smooth muscle cells) ในชั้น Tunica media ของผนังหลอดเลือด Afferent arteriole",
      "C": "ดัดแปลงมาจากเซลล์เม็ดเลือดขาวในหลอดเลือดดำ",
      "D": "ดัดแปลงมาจากเซลล์ประสาทซิมพาเทติก"
    },
    "correctOption": "B",
    "explanation": "Juxtaglomerular (Granular) cells เป็นเซลล์กล้ามเนื้อเรียบที่ดัดแปลงเป็นพิเศษ อยู่ในผนังของ Afferent arteriole (ใกล้ Glomerulus) ภายในมีแกรนูลบรรจุเอนไซม์ Renin เซลล์นี้ทำหน้าที่เป็น Baroreceptors วัดแรงดันเลือดโดยตรง หากความดันเลือดใน Affiole ลดลง หรือได้รับการกระตุ้นจาก Macula densa หรือ Sympathetic nerves จะหลั่ง Renin ออกสู่กระแสเลือดทันที",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "jg-cells",
      "granular-cells",
      "renin",
      "afferent-arteriole-smooth-muscle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-039",
    "questionText": "ในระบบ Renin-Angiotensin-Aldosterone System (RAAS) เอนไซม์เรนิน (Renin) ที่หลั่งออกจากไตทำหน้าที่เร่งปฏิกิริยาเคมีใดในกระแสเลือด?",
    "options": {
      "A": "เปลี่ยน Angiotensin II ให้กลายเป็น Aldosterone",
      "B": "เปลี่ยน Angiotensin I ให้กลายเป็น Angiotensin II โดยตรง",
      "C": "เปลี่ยนโปรตีนตั้งต้น Angiotensinogen (ที่สร้างจากตับ) ให้กลายเป็น Angiotensin I (เปปไทด์ 10 กรดอะมิโน)",
      "D": "เปลี่ยน Prothrombin เป็น Thrombin"
    },
    "correctOption": "C",
    "explanation": "เมื่อความดันเลือดตก ไตหลั่ง Renin เข้าสู่กระแสเลือด Renin จะทำหน้าที่ตัดพันธะของ Angiotensinogen (โปรตีนพลาสมาที่สร้างจากตับ) เปลี่ยนให้กลายเป็น Angiotensin I ซึ่งยังไม่มีฤทธิ์หดหลอดเลือด จากนั้น Angiotensin I จะไหลผ่านหลอดเลือดฝอยของปอดและไตเพื่อเปลี่ยนเป็น Angiotensin II ต่อไป",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 27,
    "tags": [
      "raas",
      "renin",
      "angiotensinogen",
      "angiotensin-i"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-040",
    "questionText": "เอนไซม์ Angiotensin-Converting Enzyme (ACE) ซึ่งพบหนาแน่นที่สุดบนเยื่อบุหลอดเลือดฝอยของปอด (Pulmonary capillaries) และไต ทำหน้าที่ใดในระบบ RAAS?",
    "options": {
      "A": "เปลี่ยนแองจิโอเทนซิโนเจนเป็นเรนิน",
      "B": "สลายฮอร์โมน Aldosterone ทิ้ง",
      "C": "เปลี่ยนเรนินให้กลายเป็นอินซูลิน",
      "D": "เปลี่ยน Angiotensin I ให้กลายเป็น Angiotensin II ซึ่งมีฤทธิ์หดหลอดเลือดรุนแรง"
    },
    "correctOption": "D",
    "explanation": "Angiotensin-Converting Enzyme (ACE) ตรึงอยู่บน Endothelial cell membrane ของหลอดเลือดฝอยในปอด ทำหน้าที่ตัดกรดอะมิโน 2 ตัวออกจาก Angiotensin I กลายเป็น Angiotensin II ซึ่งเป็นฮอร์โมนที่มีฤทธิ์หดหลอดเลือดแดงทั่วร่างกายอย่างทรงพลัง (Potent vasoconstrictor) ยาลดความดันกลุ่ม ACE inhibitors (เช่น Enalapril) ออกฤทธิ์ยับยั้งเอนไซม์นี้",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 27,
    "tags": [
      "ace",
      "angiotensin-converting-enzyme",
      "angiotensin-ii",
      "ace-inhibitors"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-041",
    "questionText": "ฮอร์โมน Angiotensin II ส่งผลต่อระบบไหลเวียนโลหิตและร่างกายเพื่อเพิ่มความดันโลหิตผ่านกลไกหลายประการ ข้อใดไม่ใช่ฤทธิ์ทางสรีรวิทยาของ Angiotensin II?",
    "options": {
      "A": "การขยายตัวของหลอดเลือดแดงทั่วร่างกายอย่างรุนแรงทำให้ความดันโลหิตลดลง",
      "B": "การหดตัวของหลอดเลือดแดงทั่วร่างกาย (Systemic vasoconstriction) ทำให้ Total Peripheral Resistance เพิ่มขึ้น",
      "C": "กระตุ้นต่อมหมวกไตชั้นนอก (Adrenal cortex) ให้หลั่งฮอร์โมน Aldosterone",
      "D": "กระตุ้นศูนย์ควบคุมความกระหายน้ำในไฮโปทาลามัส (Thirst center) และกระตุ้นการหลั่ง ADH"
    },
    "correctOption": "A",
    "explanation": "Angiotensin II มีฤทธิ์เพิ่มความดันโลหิตอย่างรอบด้าน: 1. ทำหน้าที่เป็น Potent vasoconstrictor หดหลอดเลือดแดงอย่างแรง (ไม่ใช่ขยายหลอดเลือด) 2. สั่งต่อมหมวกไตหลั่ง Aldosterone เพื่อดูดซึม Na+ และน้ำกลับ 3. หดตัว Efferent arteriole เพื่อรักษา GFR 4. กระตุ้นต่อมใต้สมองหลั่ง ADH 5. กระตุ้นความกระหายน้ำ (Thirst) เพื่อเพิ่มปริมาตรเลือด",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 28,
    "tags": [
      "angiotensin-ii-effects",
      "vasoconstriction",
      "aldosterone-stimulation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-042",
    "questionText": "ฮอร์โมนอัลโดสเตอโรน (Aldosterone) สร้างและหลั่งมาจากต่อมหมวกไตชั้นใด และออกฤทธิ์ที่ท่อไตส่วนใดในการควบคุมอิเล็กโทรไลต์?",
    "options": {
      "A": "สร้างจาก Adrenal medulla ออกฤทธิ์ที่ Glomerulus",
      "B": "สร้างจากชั้น Zona glomerulosa ของต่อมหมวกไตชั้นนอก ออกฤทธิ์ที่ Late DCT และ Collecting duct ในการดูดซึม Na+ และน้ำกลับเข้ากระแสเลือด พร้อมกับขับ K+ ทิ้งทางปัสสาวะ",
      "C": "สร้างจาก Zona fasciculata ออกฤทธิ์ที่ Loop of Henle",
      "D": "สร้างจากต่อมไทรอยด์ ออกฤทธิ์ที่กระเพาะปัสสาวะ"
    },
    "correctOption": "B",
    "explanation": "Aldosterone (Mineralocorticoid) สังเคราะห์จากชั้นนอกสุดของต่อมหมวกไต (Zona glomerulosa) ออกฤทธิ์ผ่าน Nuclear mineralocorticoid receptors ใน Principal cells ของ Late DCT และ Cortical Collecting Duct เพิ่มการสร้าง Na+/K+ ATPase pumps และ ENaC channels ดูดกลับโซเดียมและน้ำตามแรงดึงออสโมติก พร้อมกับขับโพแทสเซียม (K+) ทิ้งไปกับปัสสาวะ",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 28,
    "tags": [
      "aldosterone",
      "zona-glomerulosa",
      "sodium-retention",
      "potassium-excretion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-043",
    "questionText": "ฮอร์โมน Atrial Natriuretic Peptide (ANP) ซึ่งหลั่งจากเซลล์กล้ามเนื้อหัวใจห้องบนขวาเมื่อมีภาวะปริมาตรเลือดเกินและผนังหัวใจขยายตัว (Atrial stretch) มีฤทธิ์ต้านการทำงานของระบบ RAAS อย่างไรที่ไต?",
    "options": {
      "A": "กระตุ้นการหลั่งเรนินเพิ่มขึ้น 2 เท่า",
      "B": "กระตุ้นให้ไตเก็บกักโซเดียมและน้ำเพิ่มขึ้น",
      "C": "ยับยั้งการหลั่ง Renin และ Aldosterone, ขยาย Afferent arteriole และหด Efferent arteriole เพื่อเพิ่ม GFR, และยับยั้งการดูดซึมกลับของโซเดียม ขับทั้งเกลือและน้ำทิ้งทางปัสสาวะ (Natriuresis and Diuresis)",
      "D": "ทำให้หัวใจห้องบนหยุดเต้นชั่วคราว"
    },
    "correctOption": "C",
    "explanation": "ANP ทำงานตรงข้ามกับ RAAS และ ADH อย่างสิ้นเชิง: เมื่อความดันและปริมาตรเลือดสูงเกิน ผนัง Atrium ตึงจะหลั่ง ANP เพื่อ: 1. ยับยั้งการหลั่ง Renin, Aldosterone และ ADH 2. ยับยั้ง Na+ reabsorption ที่ Collecting duct 3. เพิ่ม GFR โดยขยาย Afferent และหด Efferent arterioles เพื่อขับโซเดียม (Natriuresis) และขับน้ำ (Diuresis) ทิ้งทางปัสสาวะ ลดปริมาตรและความดันเลือด",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 29,
    "tags": [
      "anp",
      "atrial-natriuretic-peptide",
      "natriuresis",
      "diuresis",
      "raas-antagonist"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-044",
    "questionText": "อัตราการกรองของไต (Glomerular Filtration Rate: GFR) ในผู้ใหญ่สุขภาพดีเพศชายและเพศหญิงมีค่าเฉลี่ยปกติประมาณเท่าใดต่อวัน?",
    "options": {
      "A": "ประมาณ 1.5 ลิตรต่อวันเท่ากับปริมาณปัสสาวะ",
      "B": "ประมาณ 10 มล./นาที หรือ 15 ลิตรต่อวัน",
      "C": "ประมาณ 500 มล./นาที หรือ 700 ลิตรต่อวัน",
      "D": "ประมาณ 125 มิลลิลิตรต่อนาที (mL/min) ในเพศชาย และ 105 mL/min ในเพศหญิง คิดเป็นปริมาตรน้ำกรองรวมประมาณ 180 ลิตรต่อวัน"
    },
    "correctOption": "D",
    "explanation": "GFR คือปริมาตรของน้ำกรอง (Filtrate) ทั้งหมดที่สร้างขึ้นจากเนฟรอนของไตทั้งสองข้างรวมกันใน 1 นาที มีค่าเฉลี่ยประมาณ 125 mL/min (หรือ 180 ลิตรต่อวันในผู้ชาย และ 150 ลิตรต่อวันในผู้หญิง) โดยน้ำกรอง 180 ลิตรนี้จะถูกดูดซึมกลับเข้าสู่กระแสเลือดถึงกว่า 99% เหลือขับถ่ายออกเป็นน้ำปัสสาวะจริงเพียงวันละประมาณ 1 - 1.5 ลิตร (น้อยกว่า 1%)",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 30,
    "tags": [
      "gfr",
      "125-ml-min",
      "180-liters-per-day",
      "reabsorption-fraction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-045",
    "questionText": "แรงดันสุทธิในการกรองของโกลเมอรูลัส (Net Filtration Pressure: NFP) คำนวณได้จากผลลัพธ์ของแรงดัน 3 ชนิดตามสมการ NFP = GHP - (CHP + BCOP) หากกำหนดให้ GHP = 55 mmHg, CHP = 15 mmHg, และ BCOP = 30 mmHg ค่า NFP ปกติจะมีค่าเท่าใด?",
    "options": {
      "A": "10 mmHg ซึ่งเป็นแรงดันสุทธิที่เป็นบวกและเพียงพอที่จะผลักดันให้เกิดการกรองพลาสมาเข้าสู่ Bowman's space",
      "B": "55 mmHg",
      "C": "100 mmHg",
      "D": "0 mmHg"
    },
    "correctOption": "A",
    "explanation": "การคำนวณ NFP: 1. แรงดันผลักออก (Outward pressure): Glomerular Hydrostatic Pressure (GHP) = 55 mmHg 2. แรงดันต้านทาน (Inward pressures): Capsular Hydrostatic Pressure (CHP) = 15 mmHg + Blood Colloid Osmotic Pressure (BCOP) = 30 mmHg (รวมต้าน 45 mmHg) ดังนั้น NFP = 55 - (15 + 30) = +10 mmHg หากความดันเลือดตกลงจน NFP ต่ำกว่าศูนย์ ไตจะหยุดการกรองทันที (Anuria)",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 31,
    "tags": [
      "nfp",
      "net-filtration-pressure",
      "ghp",
      "chp",
      "bcop",
      "starling-forces"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-046",
    "questionText": "กลไกการควบคุมอัตราการกรองของไตด้วยตนเอง (Renal Autoregulation) ผ่าน Myogenic mechanism มีการตอบสนองอย่างไรเมื่อความดันโลหิตในร่างกาย (Systemic BP) สูงขึ้นอย่างกะทันหัน?",
    "options": {
      "A": "Afferent arteriole จะขยายตัวกว้างขึ้นเพื่อให้เลือดไหลผ่านได้เร็ว",
      "B": "เซลล์กล้ามเนื้อเรียบในผนัง Afferent arteriole จะถูกยืดขยายตัวและตอบสนองด้วยการหดตัวลงโดยอัตโนมัติ (Vasoconstriction) เพื่อจำกัดแรงดันและปริมาณเลือดไม่ให้พุ่งเข้าทำลายโกลเมอรูลัส",
      "C": "Efferent arteriole จะหดตัวตีบลงสนิท",
      "D": "ไตจะส่งสัญญาณไปหยุดการเต้นของหัวใจ"
    },
    "correctOption": "B",
    "explanation": "Myogenic mechanism เป็นคุณสมบัติเฉพาะของกล้ามเนื้อเรียบหลอดเลือด: เมื่อความดันเลือดสูงขึ้น แรงดันจะยืดผนัง Afferent arteriole ทำให้ Stretch-activated Ca2+ channels เปิด เซลล์กล้ามเนื้อเรียบจึงหดตัว (Vasoconstriction) เพิ่มแรงต้านทาน ช่วยคงความดัน GHP ในโกลเมอรูลัสและ GFR ให้คงที่อยู่ในช่วงความดัน Mean Arterial Pressure 80-180 mmHg",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 32,
    "tags": [
      "myogenic-mechanism",
      "autoregulation",
      "afferent-vasoconstriction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-047",
    "questionText": "การขับสารออกทางท่อหน่วยไต (Tubular Secretion) มีบทบาทสำคัญในการกำจัดสารกลุ่มใดออกจากร่างกายเข้าสู่น้ำปัสสาวะ?",
    "options": {
      "A": "กำจัดโปรตีนอัลบูมินและฮีโมโกลบิน",
      "B": "กำจัดน้ำตาลกลูโคสและกรดอะมิโน",
      "C": "กำจัดไอออนไฮโดรเจนส่วนเกิน (H+), โพแทสเซียม (K+), สารแอมโมเนีย (NH4+), สารเมแทบอไลต์ของยา (เช่น Penicillin, Aspirin) และสารแปลกปลอม (Xenobiotics)",
      "D": "กำจัดเซลล์เม็ดเลือดแดงที่แก่ชรา"
    },
    "correctOption": "C",
    "explanation": "Tubular secretion เป็นกระบวนการที่สารใน Peritubular capillaries หรือเซลล์ท่อไตถูกลำเลียงเข้าสู่ Tubular lumen ตรงข้ามกับ Reabsorption เพื่อ: 1. กำจัดยาและสารพิษ (ผ่าน Organic anion/cation transporters) 2. กำจัดของเสียที่ไม่ได้ถูกกรอง 3. ควบคุมสมดุล K+ (หลั่งที่ Collecting duct) 4. ควบคุม pH เลือด (หลั่ง H+ ออกไป)",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 33,
    "tags": [
      "tubular-secretion",
      "potassium-excretion",
      "drug-elimination",
      "h-secretion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-048",
    "questionText": "กระบวนการดูดซึมน้ำกลับที่ท่อหน่วยไตแบ่งออกเป็น Obligatory water reabsorption และ Facultative water reabsorption ข้อใดเปรียบเทียบทั้งสองกลไกได้ถูกต้อง?",
    "options": {
      "A": "ทั้งสองแบบเกิดขึ้นเฉพาะในกระเพาะปัสสาวะ",
      "B": "Obligatory ถูกควบคุมโดย ADH ส่วน Facultative เกิดขึ้นเองตามธรรมชาติ",
      "C": "Obligatory เกิดขึ้นเฉพาะเวลานอนหลับ ส่วน Facultative เกิดขึ้นขณะออกกำลังกาย",
      "D": "Obligatory (ประมาณ 85%) เกิดขึ้นคงที่ที่ PCT และ Descending Loop of Henle ตามแรงดึงออสโมติกของโซเดียมโดยไม่ขึ้นกับฮอร์โมน; ส่วน Facultative (ประมาณ 10-15%) เกิดขึ้นที่ DCT และ Collecting duct ภายใต้การควบคุมของฮอร์โมน ADH ตามความต้องการของร่างกาย"
    },
    "correctOption": "D",
    "explanation": "1. Obligatory water reabsorption (85% ของน้ำกรอง): น้ำถูกบังคับให้ดูดกลับตามการดูดกลับของ Solutes (NaCl) ผ่าน Aquaporin-1 ใน PCT และ Henle's loop เสมอ 2. Facultative water reabsorption (10-15%): เป็นการดูดซึมน้ำกลับแบบ \"ยืดหยุ่นปรับได้\" ใน Late DCT และ Collecting duct ขึ้นอยู่กับภาวะขาดน้ำของร่างกาย โดยถูกสั่งการผ่านฮอร์โมน ADH (ผ่าน Aquaporin-2)",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 34,
    "tags": [
      "obligatory-vs-facultative",
      "water-reabsorption",
      "adh-regulation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-049",
    "questionText": "สารชนิดใดที่นิยมนำมาใช้ในการตรวจวัดอัตราการกรองของไตที่แม่นยำที่สุดในทางคลินิก (Gold standard marker for GFR) เนื่องจากมีคุณสมบัติถูกกรองผ่าน Glomerulus ได้อย่างอิสระ แต่ \"ไม่มีการดูดซึมกลับและไม่มีการหลั่งเพิ่ม\" เลยในท่อไต?",
    "options": {
      "A": "Inulin (โพลีแซ็กคาไรด์จากพืช) ในการทดลอง หรือ Creatinine (สารจากร่างกายที่ใช้บ่อยในเวชปฏิบัติ)",
      "B": "Glucose",
      "C": "Sodium ion",
      "D": "Albumin"
    },
    "correctOption": "A",
    "explanation": "Inulin เป็นสารเชิงอุดมคติ (Gold standard) ในการวัด GFR เพราะถูกกรองผ่าน Glomerulus ได้อิสระ 100% แต่ไม่ถูกดูดกลับ (No reabsorption), ไม่ถูกหลั่งเพิ่ม (No secretion), และไม่ถูกสร้างหรือทำลายในไต ปริมาณอินูลินที่กรองจึงเท่ากับปริมาณที่ขับออกในปัสสาวะพอดี (Cinulin = GFR) ในทางคลินิกใช้ Creatinine แทนเนื่องจากไม่ต้องฉีดสารเข้าหลอดเลือด",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 35,
    "tags": [
      "inulin-clearance",
      "creatinine-clearance",
      "gfr-measurement",
      "gold-standard"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-050",
    "questionText": "ในน้ำปัสสาวะของคนปกติ สารใดต่อไปนี้ที่ไม่ควรตรวจพบเลย (Negative) และหากตรวจพบในปัสสาวะจะถือว่าเป็นภาวะผิดปกติทางพยาธิสภาพ?",
    "options": {
      "A": "Urea และ Creatinine",
      "B": "Glucose (กลูโคส), Protein/Albumin (โปรตีนไข่ขาว), Red blood cells (เม็ดเลือดแดง), และ Ketone bodies",
      "C": "Uric acid และโซเดียม",
      "D": "น้ำและโพแทสเซียม"
    },
    "correctOption": "B",
    "explanation": "ปัสสาวะปกติประกอบด้วยน้ำ 95% ยูเรีย ครีอะตินิน กรดยูริก และเกลือแร่ Na+, K+, Cl- สารที่ \"ผิดปกติหากตรวจพบ\" ได้แก่: 1. Glucose (Glycosuria: เบาหวาน) 2. Protein (Proteinuria: โรคไตอักเสบ) 3. RBCs (Hematuria: นิ่ว เนื้องอก ติดเชื้อ) 4. Ketones (Ketonuria: ภาวะกรดคีโตนในเบาหวาน) 5. Bilirubin (โรคตับหรือท่อน้ำดีอุดตัน) 6. WBCs/Pus (Pyuria: ติดเชื้อทางเดินปัสสาวะ)",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 36,
    "tags": [
      "abnormal-urine-components",
      "urinalysis",
      "glucosuria",
      "proteinuria"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-051",
    "questionText": "ท่อไต (Ureter) มีความยาวประมาณ 25-30 เซนติเมตร ทอดตัวลงสู่ช่องเชิงกรานในตำแหน่งใด และผนังของท่อไตประกอบด้วยชั้นเนื้อเยื่อ 3 ชั้นใดบ้าง?",
    "options": {
      "A": "ทอดตัวอยู่หน้ากระดูกอก ผนังประกอบด้วยกล้ามเนื้อลายล้วน",
      "B": "ทอดตัวในช่องท้องแบบ Intraperitoneal มีชั้น Serosa บุผิวนอก",
      "C": "ทอดตัวอยู่ในช่องว่างหลังเยื่อบุช่องท้อง (Retroperitoneal) ผนังประกอบด้วย Mucosa (Transitional epithelium), Muscularis (Inner longitudinal, Outer circular), และ Adventitia",
      "D": "ทอดตัวอยู่ภายในหลอดเลือดดำ Vena cava"
    },
    "correctOption": "C",
    "explanation": "Ureter ทอดตัวอยู่ใน Retroperitoneum วางตัวบนกล้ามเนื้อ Psoas major ทอดข้าม Pelvic brim บริเวณ Bifurcation ของ Common iliac vessels ผนังมี 3 ชั้น: 1. Mucosa (Transitional epithelium / Urothelium ยืดหยุ่นได้ดี) 2. Muscularis (เรียงตัวตรงข้ามกับทางเดินอาหาร คือ วงในเป็นแนวยาว Inner longitudinal, วงนอกเป็นวงกลม Outer circular) 3. Adventitia",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 38,
    "tags": [
      "ureter-anatomy",
      "retroperitoneal",
      "transitional-epithelium",
      "ureter-muscularis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-052",
    "questionText": "น้ำปัสสาวะเดินทางจากกรวยไต (Renal pelvis) ลงสู่กระเพาะปัสสาวะผ่านท่อไต (Ureter) ได้อย่างไร โดยเฉพาะในท่านอนราบที่ไม่มีแรงโน้มถ่วงช่วยดึงดูด?",
    "options": {
      "A": "การทำงานของ Cilia ในท่อไต",
      "B": "แรงสูบฉีดจากหัวใจโดยตรง",
      "C": "การไหลตามแรงโน้มถ่วงของโลกเพียงอย่างเดียว",
      "D": "การบีบรูดเป็นคลื่นของกล้ามเนื้อเรียบในผนังท่อไต (Peristaltic contractions) ร่วมกับแรงดันอุทกสถิตของน้ำปัสสาวะ"
    },
    "correctOption": "D",
    "explanation": "Ureter มีเซลล์ Pacemaker ใน Renal pelvis ที่สร้างสัญญาณไฟฟ้ากระตุ้นให้เกิดคลื่นบีบรูด Peristalsis ของกล้ามเนื้อเรียบในผนังท่อไตทุกๆ 10-30 วินาที คลื่นนี้จะบีบดันปัสสาวะเป็นช่วงๆ (Squirts) ลงสู่กระเพาะปัสสาวะ ทำให้ปัสสาวะไหลได้ตามปกติแม้ในท่านอนหงายหรือในสภาวะแรงโน้มถ่วงเป็นศูนย์",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 38,
    "tags": [
      "ureteric-peristalsis",
      "urine-propulsion",
      "smooth-muscle-waves"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-053",
    "questionText": "ท่อไต (Ureter) มีจุดคอดแคบตามธรรมชาติทางกายวิภาค 3 ตำแหน่ง (Three physiological constrictions) ซึ่งเป็นจุดที่ก้อนนิ่วในไตมักเลื่อนมาติดค้างและทำให้เกิดอาการปวดเกร็งรุนแรง (Renal colic) ตำแหน่งทั้งสามได้แก่บริเวณใดบ้าง?",
    "options": {
      "A": "1. Ureteropelvic junction (UPJ รอยต่อกรวยไตกับท่อไต) 2. Crossing of the pelvic brim / Iliac vessels (จุดข้ามขอบเชิงกรานและเส้นเลือดอีเลียก) 3. Ureterovesical junction (UVJ จุดเจาะทะลุเข้าผนังกระเพาะปัสสาวะ)",
      "B": "1. ขั้วไต 2. สะดือ 3. รูเปิดทวารหนัก",
      "C": "1. Renal papilla 2. Inguinal canal 3. Urethral orifice",
      "D": "1. Subclavian crossing 2. Pylorus 3. Appendix"
    },
    "correctOption": "A",
    "explanation": "จุดคอดแคบ 3 จุดของ Ureter ที่พบนิ่วติดบ่อยที่สุด: 1. Ureteropelvic Junction (UPJ): จุดที่ Renal pelvis สอบเล็กลงกลายเป็น Ureter 2. Pelvic Brim: จุดที่ท่อไตทอดข้าม Common/External Iliac artery เข้าสู่ช่องเชิงกราน 3. Ureterovesical Junction (UVJ): จุดที่แคบที่สุด โดยท่อไตเจาะเฉียงผ่านผนังกล้ามเนื้อ Detrusor ของกระเพาะปัสสาวะ",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 39,
    "tags": [
      "ureteric-constrictions",
      "upj",
      "pelvic-brim",
      "uvj",
      "renal-colic"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-054",
    "questionText": "กลไกทางกายวิภาคใดที่ช่วยป้องกันไม่ให้น้ำปัสสาวะจากกระเพาะปัสสาวะไหลย้อนกลับขึ้นสู่ท่อไตและไต (Vesicoureteral reflux: VUR) ในขณะที่กระเพาะปัสสาวะกำลังบีบตัวปัสสาวะออกอย่างรุนแรง?",
    "options": {
      "A": "มีลิ้นหัวใจ Tricuspid กั้นอยู่ที่ปลายท่อไต",
      "B": "ท่อไตทอดตัวเจาะทะลุผนังกระเพาะปัสสาวะในแนวเฉียง (Oblique intramural tunnel) ทำให้เมื่อกระเพาะปัสสาวะเต็มหรือบีบตัว แรงดันในกระเพาะจะกดบีบปลายท่อไตให้แบนปิดสนิทเสมือนเป็นลิ้นทางเดียว (Physiological one-way valve)",
      "C": "มีกล้ามเนื้อหูรูดโครงกระดูกที่ควบคุมได้",
      "D": "ปัสสาวะมีความหนาแน่นสูงกว่าน้ำจึงไม่ลอยขึ้น"
    },
    "correctOption": "B",
    "explanation": "Ureter วิ่งเจาะทะลุผนังกล้ามเนื้อกระเพาะปัสสาวะในแนวเฉียง (Oblique intramural course ยาวประมาณ 1.5-2 ซม.) เมื่อกระเพาะปัสสาวะเต็มไปด้วยปัสสาวะ หรือในขณะกล้ามเนื้อ Detrusor บีบตัวขับถ่าย แรงดันภายในกระเพาะจะกดเบียดปลายท่อไตส่วน Intramural ให้แบนแนบสนิท ป้องกันไม่ให้ปัสสาวะไหลย้อนกลับ (Vesicoureteral reflux: VUR) ซึ่งช่วยป้องกันการติดเชื้อกรวยไตอักเสบ (Pyelonephritis)",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 39,
    "tags": [
      "oblique-intramural-tunnel",
      "vesicoureteral-reflux",
      "one-way-valve"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-055",
    "questionText": "กระเพาะปัสสาวะ (Urinary Bladder) ตั้งอยู่ในช่องเชิงกราน (Pelvic cavity) มีความสัมพันธ์ทางกายวิภาคกับอวัยวะข้างเคียงในเพศชายและเพศหญิงแตกต่างกันอย่างไร?",
    "options": {
      "A": "ทั้งสองเพศอยู่เหนือกระดูกเชิงกรานและติดกับตับ",
      "B": "ในเพศหญิงอยู่หลังมดลูก ส่วนในเพศชายอยู่ใต้ต่อมลูกหมาก",
      "C": "ในเพศชายตั้งอยู่ด้านหน้าของลำไส้ตรง (Rectum) และอยู่เหนือต่อมลูกหมาก (Prostate gland); ส่วนในเพศหญิงตั้งอยู่ด้านหน้าของมดลูก (Uterus) และช่องคลอด (Vagina)",
      "D": "ในเพศชายอยู่หลังทวารหนัก"
    },
    "correctOption": "C",
    "explanation": "กายวิภาคสัมพันธ์ของกระเพาะปัสสาวะ: ในเพศชาย ฐานกระเพาะปัสสาวะอยู่เหนือต่อมลูกหมาก (Prostate) และอยู่หน้าต่อ Rectum (มี Rectovesical pouch คั่น) ส่วนในเพศหญิง กระเพาะปัสสาวะอยู่ด้านหน้าและด้านล่างต่อมดลูก (Uterus) และผนังหน้าช่องคลอด (Vagina) โดยมี Vesicouterine pouch คั่น ทำให้เมื่อมดลูกขยายตัวขณะตั้งครรภ์จะกดเบียดกระเพาะปัสสาวะทำให้ปัสสาวะบ่อย",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 40,
    "tags": [
      "bladder-anatomy",
      "male-vs-female-pelvis",
      "prostate",
      "uterus-relation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-056",
    "questionText": "บริเวณรูปสามเหลี่ยมเรียบบริเวณฐานภายในของกระเพาะปัสสาวะ (Trigone of the urinary bladder) มีจุดมุมทั้งสาม (Three angles) สอดคล้องกับโครงสร้างรูเปิดใด?",
    "options": {
      "A": "รูเปิดของต่อมลูกหมากสามรู",
      "B": "รูเปิดของไตทั้งสองข้างกับรูทวารหนัก",
      "C": "รูเปิดของหลอดเลือดแดงสองเส้นกับรูเปิดหลอดเลือดดำ",
      "D": "มุมบนสองข้างสอดคล้องกับรูเปิดของท่อไตทั้งสอง (Ureteral orifices) และมุมล่างหน้าสอดคล้องกับรูเปิดภายในของท่อปัสสาวะ (Internal urethral orifice)"
    },
    "correctOption": "D",
    "explanation": "Trigone เป็นพื้นที่รูปสามเหลี่ยมเรียบที่ฐานด้านล่างของกระเพาะปัสสาวะ ไม่มีรอยย่น Rugae: มุมบน-ซ้ายและมุมบน-ขวาเป็นรูเปิดของท่อไตทั้งสอง (Ureteral openings) เชื่อมกันด้วยสัน Interureteric crest และมุมล่างตรงกลางเป็นรูเปิดของท่อปัสสาวะ (Internal urethral orifice) บริเวณนี้มีความไวต่อการติดเชื้อและตรวจพบมะเร็งบ่อย",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 41,
    "tags": [
      "trigone",
      "ureteral-openings",
      "internal-urethral-orifice"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-057",
    "questionText": "ผนังกล้ามเนื้อหนาของกระเพาะปัสสาวะประกอบด้วยกล้ามเนื้อเรียบ 3 ชั้นสานประสานกันเป็นร่างแหตาข่าย กล้ามเนื้อนี้มีชื่อเรียกว่าอะไร และมีบทบาทอย่างไรในการขับถ่ายปัสสาวะ?",
    "options": {
      "A": "Detrusor muscle ทำหน้าที่คลายตัวเพื่อกักเก็บปัสสาวะ และหดตัวพร้อมกันทั้งผืนเพื่อบีบไล่น้ำปัสสาวะออกทางท่อปัสสาวะเมื่อได้รับการกระตุ้นจากระบบประสาทพาราซิมพาเทติก",
      "B": "Dartos muscle",
      "C": "Cremaster muscle",
      "D": "Pectinate muscle"
    },
    "correctOption": "A",
    "explanation": "Detrusor muscle ประกอบด้วยกล้ามเนื้อเรียบ 3 ชั้น (Inner longitudinal, Middle circular, Outer longitudinal) สานกันเป็นร่างแห เมื่อปัสสาวะสะสมเต็ม เส้นประสาท Parasympathetic (Pelvic splanchnic nerves S2-S4) จะกระตุ้น Muscarinic M3 receptors ทำให้ Detrusor บีบตัวพร้อมกันทุกทิศทางสร้างแรงดันขับปัสสาวะออกอย่างรวดเร็ว",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 42,
    "tags": [
      "detrusor-muscle",
      "bladder-smooth-muscle",
      "parasympathetic-m3"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-058",
    "questionText": "เนื้อเยื่อบุผิว (Epithelium) ที่บุภายในกระเพาะปัสสาวะและท่อไตคือชนิดใด และมีคุณสมบัติพิเศษทางกายวิภาคศาสตร์อย่างไรในการรองรับการขยายตัว?",
    "options": {
      "A": "Simple squamous epithelium",
      "B": "Transitional epithelium (Urothelium) ซึ่งเซลล์ชั้นบนสุดเป็น Dome-shaped (Umbrella cells) ที่สามารถเลื่อนไถลและแบนลงเมื่อกระเพาะปัสสาวะขยายตัวรับน้ำปัสสาวะ",
      "C": "Pseudostratified ciliated columnar epithelium",
      "D": "Stratified keratinized squamous epithelium"
    },
    "correctOption": "B",
    "explanation": "Transitional epithelium (Urothelium) เป็นเนื้อเยื่อบุผิวชนิดพิเศษที่พบเฉพาะในทางเดินปัสสาวะ (Calicos, Pelvis, Ureter, Bladder): เมื่อกระเพาะปัสสาวะแฟบ เซลล์ชั้นบนจะมีรูปโดมกลม (Umbrella cells) หนาประมาณ 5-6 ชั้น แต่เมื่อมีปัสสาวะเต็มขยายตึง เซลล์จะเลื่อนไถลปรับตัวแบนลงเหลือเพียง 2-3 ชั้นโดยไม่ฉีกขาด พร้อมกับมี Uroplakin plaques ป้องกันการรั่วซึมของปัสสาวะที่มีกรดและยูเรีย",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 43,
    "tags": [
      "transitional-epithelium",
      "urothelium",
      "umbrella-cells",
      "uroplakin"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-059",
    "questionText": "กระเพาะปัสสาวะของผู้ใหญ่ปกติมีความจุปัสสาวะเฉลี่ยประมาณเท่าใด และเมื่อมีปริมาตรปัสสาวะสะสมถึงประมาณเท่าใดจะเริ่มรู้สึกกระตุ้นให้ปวดปัสสาวะเป็นครั้งแรก (First urge to void)?",
    "options": {
      "A": "มีความจุ 3,000 มล. และเริ่มปวดเมื่อ 1,500 มล.",
      "B": "มีความจุ 100 มล. และเริ่มปวดเมื่อ 50 มล.",
      "C": "มีความจุเฉลี่ยประมาณ 500 - 800 มิลลิลิตร และจะเริ่มส่งสัญญาณกระตุ้นความรู้สึกปวดปัสสาวะครั้งแรกเมื่อมีปริมาตรประมาณ 150 - 200 มิลลิลิตร",
      "D": "มีความจุ 50 มล. และเริ่มปวดเมื่อ 10 มล."
    },
    "correctOption": "C",
    "explanation": "กระเพาะปัสสาวะมี Physiological capacity ประมาณ 400-500 มล. (และสามารถขยายรองรับได้สูงสุด 800-1,000 มล. ในภาวะกลั้น) โดย Stretch receptors บนผนัง Detrusor จะเริ่มส่งสัญญาณกระตุ้นการรับรู้เข้าสู่ไขสันหลังเมื่อมีปัสสาวะสะสมประมาณ 150-200 มล. (First urge) และจะรู้สึกปวดแน่นอย่างชัดเจนเมื่อถึง 300-400 มล.",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 42,
    "tags": [
      "bladder-capacity",
      "first-urge-to-void",
      "micturition-threshold"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-060",
    "questionText": "ท่อปัสสาวะของเพศหญิง (Female urethra) มีความยาวทางกายวิภาคประมาณเท่าใด และลักษณะทางกายวิภาคนี้สัมพันธ์กับการเกิดโรคติดเชื้อในระบบทางเดินปัสสาวะ (Urinary Tract Infection: UTI) อย่างไร?",
    "options": {
      "A": "ท่อปัสสาวะสั้นทำให้ไม่สามารถกลั้นปัสสาวะได้",
      "B": "ยาวประมาณ 20 เซนติเมตร ทำให้ไม่เคยเกิดการติดเชื้อ",
      "C": "ยาวเท่ากับเพศชายพอดี",
      "D": "ยาวเพียงประมาณ 3 - 5 เซนติเมตร (สั้นกว่าเพศชายมาก) และรูเปิดอยู่ใกล้กับช่องคลอดและทวารหนัก ทำให้เชื้อแบคทีเรีย (โดยเฉพาะ E. coli) สามารถเดินทางผ่านท่อปัสสาวะเข้าสู่กระเพาะปัสสาวะได้ง่าย ส่งผลให้เพศหญิงเป็นโรคกระเพาะปัสสาวะอักเสบ (Cystitis) ได้บ่อยกว่าเพศชาย"
    },
    "correctOption": "D",
    "explanation": "ท่อปัสสาวะเพศหญิงสั้นมาก (ยาวเพียง 3.5 - 4 ซม.) ทอดตรงจาก Bladder neck ไปเปิดที่ External urethral orifice ใน Vestibule ด้านหน้าต่อช่องคลอด ทางเดินที่สั้นร่วมกับตำแหน่งที่อยู่ใกล้ชิดกับทวารหนักซึ่งเป็นแหล่งสะสมของแบคทีเรียจากอุจจาระ (เช่น E. coli) ทำให้เชื้อสามารถเล็ดลอดเข้าสู่กระเพาะปัสสาวะได้ง่ายกว่าเพศชายหลายเท่า",
    "system": "Urinary System",
    "topic": "Anatomical Differences Between Males and Females",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 45,
    "tags": [
      "female-urethra",
      "short-urethra",
      "uti-predisposition",
      "cystitis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-061",
    "questionText": "ท่อปัสสาวะของเพศชาย (Male urethra) มีความยาวเฉลี่ยประมาณ 18-20 เซนติเมตร แบ่งออกเป็น 3 ส่วนตามตำแหน่งทางกายวิภาค เรียงลำดับจากกระเพาะปัสสาวะออกสู่ปลายอวัยวะเพศข้อใดถูกต้อง?",
    "options": {
      "A": "Prostatic urethra -> Membranous urethra -> Spongy (Penile) urethra",
      "B": "Spongy urethra -> Membranous urethra -> Prostatic urethra",
      "C": "Membranous urethra -> Prostatic urethra -> Penile urethra",
      "D": "Prostatic urethra -> Penile urethra -> Membranous urethra"
    },
    "correctOption": "A",
    "explanation": "ท่อปัสสาวะเพศชายแบ่งเป็น 3 ส่วน: 1. Prostatic urethra (ยาว ~3 ซม. ทอดผ่านเนื้อต่อมลูกหมาก) 2. Membranous urethra (สั้นที่สุดและแคบที่สุด ~1-2 ซม. ทอดผ่าน Urogenital diaphragm และหุ้มด้วย External urethral sphincter) 3. Spongy / Penile urethra (ยาวที่สุด ~15 ซม. ทอดใน Corpus spongiosum ขององคชาต)",
    "system": "Urinary System",
    "topic": "Anatomical Differences Between Males and Females",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 46,
    "tags": [
      "male-urethra-divisions",
      "prostatic",
      "membranous",
      "spongy-urethra"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-062",
    "questionText": "ท่อปัสสาวะเพศชายส่วน Prostatic Urethra มีโครงสร้างทางเดินสืบพันธุ์ใดมาเปิดเชื่อมต่อเข้าด้วยกัน ทำให้ท่อปัสสาวะทำหน้าที่เป็นทางผ่านร่วมกันของทั้งปัสสาวะและน้ำอสุจิ?",
    "options": {
      "A": "Ureter ทั้งสองข้าง",
      "B": "ท่อฉีดอสุจิ (Ejaculatory ducts 2 ท่อ) เปิดที่ Seminal colliculus ร่วมกับท่อเปิดของต่อมลูกหมาก (Prostatic ducts)",
      "C": "Seminiferous tubules โดยตรง",
      "D": "Epididymis โดยตรง"
    },
    "correctOption": "B",
    "explanation": "บนผนังด้านหลังของ Prostatic urethra มีสันนูนชื่อ Urethral crest และปุ่ม Seminal colliculus (Verumontanum) ซึ่งเป็นจุดเปิดของ Ejaculatory ducts ทั้งสองข้าง (ที่นำอสุจิและน้ำเลี้ยงจาก Seminal vesicles) และมีร่อง Prostatic sinuses เป็นจุดเปิดของท่อน้ำเมือกจากต่อมลูกหมาก ทำให้ท่อปัสสาวะเพศชายเป็นทางผ่านร่วมของทั้งระบบขับถ่ายและระบบสืบพันธุ์ (Urogenital tract)",
    "system": "Urinary System",
    "topic": "Anatomical Differences Between Males and Females",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 47,
    "tags": [
      "prostatic-urethra",
      "ejaculatory-ducts",
      "seminal-colliculus",
      "verumontanum"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-063",
    "questionText": "ท่อปัสสาวะเพศชายส่วน Membranous Urethra ทอดตัวผ่านแผ่นกล้ามเนื้ออุ้งเชิงกราน (Urogenital diaphragm) และถูกโอบล้อมรอบด้วยกล้ามเนื้อหูรูดชนิดใดที่มีการควบคุมภายใต้อำนาจจิตใจ?",
    "options": {
      "A": "Bulbospongiosus muscle",
      "B": "Internal urethral sphincter (กล้ามเนื้อเรียบ)",
      "C": "External urethral sphincter (กล้ามเนื้อลาย Skeletal muscle ควบคุมผ่าน Pudendal nerve)",
      "D": "Detrusor sphincter"
    },
    "correctOption": "C",
    "explanation": "Membranous urethra ทอดผ่าน Deep perineal pouch (Urogenital diaphragm) ถูกล้อมรอบด้วย External urethral sphincter ซึ่งเป็นกล้ามเนื้อลายรูปวงแหวน ทำหน้าที่เป็นหูรูดกลั้นปัสสาวะที่ควบคุมได้ตามความตั้งใจ (Voluntary somatic control) ผ่านทางแขนงของเส้นประสาท Pudendal nerve (S2-S4)",
    "system": "Urinary System",
    "topic": "Anatomical Differences Between Males and Females",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 47,
    "tags": [
      "membranous-urethra",
      "external-urethral-sphincter",
      "pudendal-nerve",
      "voluntary-control"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-064",
    "questionText": "ท่อปัสสาวะเพศชายส่วน Spongy (Penile) Urethra ทอดตัวอยู่ภายในแกนเนื้อเยื่อที่แข็งตัวได้ (Erectile tissue) ชนิดใดขององคชาต และมีต่อมขับเมือกใดเปิดเข้าสู่ท่อส่วนนี้?",
    "options": {
      "A": "ทอดตัวอยู่ใน Prepuce",
      "B": "ทอดตัวอยู่ใน Corpus Cavernosum และรับท่อเปิดจากต่อมลูกหมาก",
      "C": "ทอดตัวอยู่เหนือ Tunica albuginea",
      "D": "ทอดตัวอยู่ภายใน Corpus Spongiosum และได้รับท่อเปิดจากต่อม Bulbourethral glands (Cowper's glands)"
    },
    "correctOption": "D",
    "explanation": "Spongy (Penile) urethra ทอดตัวอยู่ตรงแกนกลางของแท่งเนื้อเยื่อ Corpus spongiosum ด้านล่างขององคชาต (ไม่ได้อยู่ใน Corpora cavernosa ด้านบน) เพื่อป้องกันไม่ให้ท่อปัสสาวะถูกกดแบนขณะแข็งตัว โดยมีท่อของ Bulbourethral (Cowper's) glands เปิดเข้าสู่ส่วนต้นของ Spongy urethra เพื่อหลั่งของเหลวเมือกด่างหล่อลื่นและสะเทินกรด",
    "system": "Urinary System",
    "topic": "Anatomical Differences Between Males and Females",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 48,
    "tags": [
      "spongy-urethra",
      "corpus-spongiosum",
      "bulbourethral-glands",
      "cowpers-glands"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-065",
    "questionText": "ผู้ป่วยชายสูงอายุ 68 ปี มีอาการปัสสาวะลำบาก ลำปัสสาวะไม่พุ่ง ปัสสาวะสะดุด และต้องเบ่ง ปัสสาวะบ่อยตอนกลางคืน แพทย์ตรวจพบโรคต่อมลูกหมากโต (Benign Prostatic Hyperplasia: BPH) พยาธิสภาพนี้เกิดการกดทับท่อปัสสาวะส่วนใด?",
    "options": {
      "A": "Prostatic urethra เนื่องจากต่อมลูกหมากเจริญเติบโตโอบรัดรอบท่อปัสสาวะส่วนนี้โดยตรง",
      "B": "Membranous urethra",
      "C": "Spongy urethra",
      "D": "Ureter ส่วนต้น"
    },
    "correctOption": "A",
    "explanation": "Prostatic urethra เป็นท่อปัสสาวะส่วนที่ทอดทะลุผ่านเนื้อต่อมลูกหมาก (โดยเฉพาะบริเวณ Transition zone) เมื่อผู้ชายมีอายุมากขึ้น อิทธิพลของ Dihydrotestosterone (DHT) จะทำให้เซลล์ต่อมลูกหมากแบ่งตัวขยายใหญ่ (BPH) เกิดการบีบกดเบียดท่อ Prostatic urethra ให้ตีบแคบลง ขัดขวางทางเดินน้ำปัสสาวะ เกิดอาการ Lower Urinary Tract Symptoms (LUTS)",
    "system": "Urinary System",
    "topic": "Anatomical Differences Between Males and Females",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 46,
    "tags": [
      "bph",
      "prostatic-urethra-compression",
      "benign-prostatic-hyperplasia"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-066",
    "questionText": "ในรีเฟล็กซ์การขับถ่ายปัสสาวะ (Micturition Reflex) ระบบประสาทพาราซิมพาเทติก (Parasympathetic nervous system) ส่งกระแสประสาทผ่านทางเส้นประสาทใดมาควบคุม และมีผลสั่งการอย่างไรต่อกล้ามเนื้อกระเพาะปัสสาวะและหูรูด?",
    "options": {
      "A": "ส่งผ่าน Sympathetic chain สั่งให้ Detrusor คลายตัว",
      "B": "ส่งผ่าน Pelvic splanchnic nerves (ระดับไขสันหลัง S2 - S4) สั่งให้กล้ามเนื้อ Detrusor muscle หดตัวบีบปัสสาวะ พร้อมกับสั่งให้ Internal urethral sphincter คลายตัวเปิดออก",
      "C": "ส่งผ่าน Vagus nerve สั่งให้กล้ามเนื้อหน้าท้องหดเกร็ง",
      "D": "ส่งผ่าน Pudendal nerve สั่งให้ไตหยุดกรอง"
    },
    "correctOption": "B",
    "explanation": "Parasympathetic stimulation (ผ่าน Pelvic splanchnic nerves, S2-S4) คือ \"ระบบขับถ่ายปัสสาวะ\": Acetylcholine จับกับ Muscarinic M3 receptors บนผนังกระเพาะปัสสาวะ สั่งให้ Detrusor muscle บีบตัวรุนแรง พร้อมกับยับยั้งและคลายตัวกล้ามเนื้อเรียบ Internal urethral sphincter เพื่อเปิดทางให้น้ำปัสสาวะไหลออก",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 44,
    "tags": [
      "micturition-reflex",
      "parasympathetic",
      "pelvic-splanchnic-nerves",
      "detrusor-contraction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-067",
    "questionText": "ระบบประสาทซิมพาเทติก (Sympathetic nervous system) จากไขสันหลังระดับ T11 - L2 ส่งผ่าน Hypogastric nerves มาทำหน้าที่ใดในกระเพาะปัสสาวะระหว่างช่วงระยะกักเก็บปัสสาวะ (Storage phase)?",
    "options": {
      "A": "สั่งให้ไตขับน้ำออกมากขึ้น",
      "B": "สั่งให้บีบปัสสาวะออกทันที",
      "C": "สั่งให้กล้ามเนื้อ Detrusor muscle คลายตัว (ผ่าน Beta-2/Beta-3 adrenergic receptors) และสั่งให้ Internal urethral sphincter หดตัวแน่น (ผ่าน Alpha-1 adrenergic receptors) เพื่อกักเก็บปัสสาวะไว้",
      "D": "ยับยั้งการไหลเวียนเลือดเข้าสู่ท่อไต"
    },
    "correctOption": "C",
    "explanation": "Sympathetic stimulation (ผ่าน Hypogastric nerves, T11-L2) คือ \"ระบบกลั้นปัสสาวะ/กักเก็บ\": Norepinephrine จับกับ Beta-3 receptors ทำให้ Detrusor คลายตัว (ขยายความจุกระเพาะปัสสาวะ) และจับกับ Alpha-1 receptors สั่งให้ Internal urethral sphincter หดตัวแน่นสนิท ป้องกันไม่ให้ปัสสาวะเล็ดออกมา",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 44,
    "tags": [
      "sympathetic-storage-phase",
      "hypogastric-nerve",
      "internal-sphincter-contraction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-068",
    "questionText": "ศูนย์ควบคุมการขับถ่ายปัสสาวะระดับสูงในสมองส่วนก้านสมอง (Brainstem) ที่ทำหน้าที่ประสานสัญญาณระหว่างกล้ามเนื้อ Detrusor และหูรูดท่อปัสสาวะคือศูนย์ใด?",
    "options": {
      "A": "Inferior colliculus",
      "B": "Medulla oblongata respiratory center",
      "C": "Substantia nigra ใน Midbrain",
      "D": "Pontine Micturition Center (Barrington's nucleus ในสมองส่วน Pons)"
    },
    "correctOption": "D",
    "explanation": "Pontine Micturition Center (PMC หรือ Barrington's nucleus) ตั้งอยู่ในส่วน Pons ของก้านสมอง ทำหน้าที่เป็นสวิตช์ประสานงานหลัก (Coordinator) เมื่อสมองส่วนหน้า (Cerebral cortex) อนุญาตให้ปัสสาวะ PMC จะส่งสัญญาณลงมาสั่งกระตุ้น Parasympathetic และยับยั้ง Sympathetic กับ Pudendal nerve ทำให้ Detrusor บีบตัวพร้อมกับ Sphincters ทั้งหมดคลายตัวพร้อมกันอย่างกลมกลืน (Detrusor-sphincter coordination)",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 44,
    "tags": [
      "pontine-micturition-center",
      "pmc",
      "pons",
      "detrusor-sphincter-coordination"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-069",
    "questionText": "หากบุคคลต้องการ \"กลั้นปัสสาวะไว้ก่อน\" เมื่อยังไม่สะดวกในการเข้าห้องน้ำ สมองส่วนหน้า Cerebral cortex จะส่งสัญญาณสั่งการผ่านระบบประสาทกายวิภาคเส้นใดเพื่อสั่งให้กล้ามเนื้อหูรูดส่วนใดหดรัดตัวแน่นขึ้น?",
    "options": {
      "A": "ส่งสัญญาณผ่าน Somatic motor fibers ในเส้นประสาท Pudendal nerve สั่งให้ External urethral sphincter หดตัวแน่นภายใต้อำนาจจิตใจ",
      "B": "ส่งผ่าน Vagus nerve สั่งปิดท่อไต",
      "C": "ส่งผ่าน Pelvic splanchnic nerve สั่งคลายกระเพาะปัสสาวะ",
      "D": "ส่งผ่าน Phrenic nerve สั่งให้กะบังลมหดตัว"
    },
    "correctOption": "A",
    "explanation": "การควบคุมภายใต้อำนาจจิตใจ (Voluntary micturition inhibition): สัญญาณจาก Cerebral cortex และ Medial frontal micturition center จะส่งผ่าน Corticospinal tract ไปยัง Onuf's nucleus ในไขสันหลังระดับ S2-S4 และส่งผ่าน Pudendal nerve สั่งให้กล้ามเนื้อลาย External urethral sphincter หดเกร็งตัวแน่นขึ้น เอาชนะแรงดันของ Detrusor ชั่วคราวเพื่อกลั้นปัสสาวะไว้",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 45,
    "tags": [
      "voluntary-retention",
      "pudendal-nerve",
      "external-sphincter"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-070",
    "questionText": "ผู้ป่วยอุบัติเหตุได้รับบาดเจ็บไขสันหลังขาดระดับกระดูกสันหลังส่วนอก (Complete spinal cord transection เหนือระดับ S2) หลังพ้นระยะ Spinal shock จะเกิดภาวะกระเพาะปัสสาวะทำงานผิดปกติแบบใด (Neurogenic bladder)?",
    "options": {
      "A": "Atonic bladder ที่กระเพาะปัสสาวะไม่บีบตัวตลอดชีวิต",
      "B": "Automatic / Spastic neurogenic bladder (กระเพาะปัสสาวะบีบตัวแบบรีเฟล็กซ์อัตโนมัติเองเมื่อมีปัสสาวะเต็ม โดยผู้ป่วยไม่สามารถรับรู้ความรู้สึกปวดและไม่สามารถควบคุมกลั้นได้ตามความตั้งใจ)",
      "C": "ไตหยุดสร้างปัสสาวะ",
      "D": "น้ำปัสสาวะไหลย้อนเข้าสู่หัวใจ"
    },
    "correctOption": "B",
    "explanation": "เมื่อไขสันหลังขาดเหนือระดับ Sacral micturition center (S2-S4): วงรีเฟล็กซ์ระหว่างกระเพาะปัสสาวะกับไขสันหลังยังสมบูรณ์ แต่ขาดการควบคุมจากสมองส่วนบน (PMC และ Cortex) ส่งผลให้เมื่อปัสสาวะสะสมจนถึงขีดจำกัด กระเพาะปัสสาวะจะบีบตัวขับออกเองโดยอัตโนมัติ (Spastic/Reflex neurogenic bladder) โดยผู้ป่วยไม่รู้สึกปวดและสั่งกลั้นไม่ได้",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 45,
    "tags": [
      "spastic-bladder",
      "neurogenic-bladder",
      "spinal-cord-injury"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-071",
    "questionText": "โรคนิ่วในระบบทางเดินปัสสาวะ (Nephrolithiasis / Urolithiasis) ชนิดของผลึกนิ่วที่พบได้บ่อยที่สุดในประชากรมนุษย์ (ประมาณ 70 - 80%) คือผลึกนิ่วชนิดใด?",
    "options": {
      "A": "Struvite (Magnesium ammonium phosphate)",
      "B": "Uric acid (ผลึกกรดยูริก)",
      "C": "Calcium oxalate (ผลึกแคลเซียมออกซาเลต)",
      "D": "Cystine"
    },
    "correctOption": "C",
    "explanation": "ก้อนนิ่วในทางเดินปัสสาวะส่วนใหญ่ (70-80%) เป็นนิ่วกลุ่มแคลเซียม โดยชนิดที่พบบ่อยที่สุดคือ Calcium oxalate (และ Calcium phosphate) มักเกิดจากการดื่มน้ำน้อย ปัสสาวะเข้มข้น และมีระดับแคลเซียมหรือออกซาเลตในปัสสาวะสูง สามารถมองเห็นได้บนภาพถ่ายรังสีเอกซเรย์ (Radiopaque)",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 49,
    "tags": [
      "nephrolithiasis",
      "calcium-oxalate-stones",
      "renal-calculi"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-072",
    "questionText": "นิ่วชนิดเขากวาง (Staghorn calculi หรือ Struvite stones) ซึ่งขยายขนาดใหญ่จนหล่อเต็มกรวยไตและ Calyces ทั้งหมด มักมีสาเหตุเกี่ยวข้องกับการติดเชื้อแบคทีเรียกลุ่มใดในระบบทางเดินปัสสาวะ?",
    "options": {
      "A": "เชื้อพยาธิใบไม้",
      "B": "เชื้อรา Candida albicans",
      "C": "ไวรัสไข้หวัดใหญ่",
      "D": "แบคทีเรียที่สร้างเอนไซม์ Urease (Urease-producing bacteria เช่น Proteus mirabilis หรือ Klebsiella) ซึ่งเปลี่ยนยูเรียให้กลายเป็นแอมโมเนีย ทำให้น้ำปัสสาวะมีสภาวะเป็นด่างจัด"
    },
    "correctOption": "D",
    "explanation": "Struvite stones (Magnesium Ammonium Phosphate) เกิดจากการติดเชื้อเรื้อรังของแบคทีเรียกลุ่ม Urease-producing bacteria (โดยเฉพาะ Proteus mirabilis) เอนไซม์ Urease จะย่อยสลาย Urea กลายเป็น Ammonia และ Carbon dioxide ทำให้ปัสสาวะกลายเป็นด่างจัด (pH > 7.2) ส่งผลให้แมกนีเซียม แอมโมเนียม และฟอสเฟตตกตะกอนรวมกันเป็นก้อนนิ่วยักษ์รูปเขากวาง (Staghorn calculus)",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 49,
    "tags": [
      "struvite-stones",
      "staghorn-calculi",
      "proteus-mirabilis",
      "urease"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-073",
    "questionText": "เมื่อก้อนนิ่วขนาด 6 มิลลิเมตรหลุดจากกรวยไตลงมาติดค้างในท่อไต (Ureter) ผู้ป่วยจะมีอาการปวดแบบ Renal colic ซึ่งมีลักษณะอาการปวดร้าว (Referred pain) ไปตามแนวทอดตัวของเส้นประสาทไปสู่บริเวณใด?",
    "options": {
      "A": "ปวดบิดเกร็งรุนแรงบริเวณบั้นเอว (Flank) ร้าวลงมาตามแนวขาหนีบ (Groin), หัวหน่าว และไปยังอวัยวะเพศภายนอก (Scrotum ในเพศชาย หรือ Labia majora ในเพศหญิง)",
      "B": "ปวดร้าวขึ้นไปที่ศีรษะและต้นคอ",
      "C": "ปวดร้าวลงที่ปลายนิ้วมือ",
      "D": "ปวดเฉพาะที่ข้อเท้าทั้งสองข้าง"
    },
    "correctOption": "A",
    "explanation": "Renal colic เกิดจากท่อไตบีบเกร็งอย่างรุนแรงต้านการอุดตันของนิ่ว เส้นประสาทรับความรู้สึกเจ็บปวด (Visceral afferents) วิ่งเข้าสู่ไขสันหลังระดับ T11 - L2 ร่วมกับ Somatic nerves ทำให้เกิดอาการปวดร้าว (Referred pain) จากบั้นเอวด้านหลังลงมาตามผนังหน้าท้องสู่ขาหนีบ (Groin), บริเวณถุงอัณฑะ หรือแคมใหญ่ (ตามแนวทอดของ Ilioinguinal และ Genitofemoral nerves)",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 49,
    "tags": [
      "renal-colic",
      "referred-pain",
      "t11-l2",
      "ilioinguinal-nerve"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-074",
    "questionText": "ในการฟอกเลือดด้วยเครื่องไตเทียม (Hemodialysis) สำหรับผู้ป่วยไตวาย กระบวนการขจัดของเสียไนโตรเจน (Urea, Creatinine) และน้ำส่วนเกินออกจากเลือดอาศัยหลักการทางฟิสิกส์และสรีรวิทยาใดผ่านเยื่อเลือกผ่านกึ่งซึมได้ (Semipermeable membrane)?",
    "options": {
      "A": "Active transport โดยใช้ ATP จากเครื่องไตเทียม",
      "B": "Diffusion (การแพร่ของโมเลกุลของเสียจากบริเวณที่มีความเข้มข้นสูงในเลือดสู่ Dialysate) และ Ultrafiltration (การกรองน้ำส่วนเกินด้วยความดัน Hydrostatic)",
      "C": "Phagocytosis ของเม็ดเลือดขาวเทียม",
      "D": "การระเหยของน้ำออกจากพลาสมา"
    },
    "correctOption": "B",
    "explanation": "Hemodialysis อาศัย 2 กลไกหลัก: 1. Diffusion (การแพร่ตามความเข้มข้น): ของเสียที่มีโมเลกุลเล็ก (Urea, Creatinine, โพแทสเซียมส่วนเกิน) ในเลือดจะแพร่ผ่านรูพรุนของเยื่อ Semipermeable membrane เข้าสู่น้ำยาไตเทียม (Dialysate) ที่ไม่มีของเสีย 2. Ultrafiltration (การพาด้วยแรงดัน): ใช้แรงดันข้ามเยื่อกรอง (Transmembrane pressure) ดึงน้ำส่วนเกินออกจากพลาสมาของผู้ป่วย",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 4,
    "tags": [
      "hemodialysis",
      "diffusion",
      "ultrafiltration",
      "dialysate"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-075",
    "questionText": "ในขั้นตอนการผ่าตัดปลูกถ่ายไต (Kidney Transplantation) ไตใหม่ของผู้บริจาคมักถูกนำไปปลูกฝังไว้ที่บริเวณทางกายวิภาคใดของผู้รับ?",
    "options": {
      "A": "นำไปต่อเข้ากับหลอดเลือด Aorta ในช่องอก",
      "B": "นำไปใส่แทนที่ตำแหน่งไตเดิมในบั้นเอวหลังจากผ่าตัดตัดไตเก่าออก",
      "C": "ในช่องอุ้งเชิงกรานส่วนหน้าบริเวณ แอ่งกระดูกสะโพก (Iliac fossa ด้านขวาหรือซ้าย) นอกช่องเยื่อบุช่องท้อง โดยต่อหลอดเลือดไตเข้ากับ External Iliac vessels และต่อท่อไตใหม่เข้ากระเพาะปัสสาวะโดยตรง",
      "D": "นำไปเย็บติดกับตับ"
    },
    "correctOption": "C",
    "explanation": "การผ่าตัด Renal transplantation ส่วนใหญ่มักไม่ต้องตัดไตเดิมออก (Heterotopic transplantation) โดยจะนำไตใหม่ไปวางไว้ที่ Iliac fossa (มักเลือกข้างขวาเนื่องจาก External iliac vein อยู่ตื้นกว่า) เชื่อมหลอดเลือด Renal artery/vein เข้ากับ External iliac artery/vein และนำ Ureter ใหม่ไปเย็บเปิดเข้าสู่กระเพาะปัสสาวะ (Ureteroneocystostomy) ซึ่งสะดวกต่อการผ่าตัดและลดความเสี่ยง",
    "system": "Urinary System",
    "topic": "Kidney Gross Anatomy & Position",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 5,
    "tags": [
      "renal-transplantation",
      "iliac-fossa",
      "external-iliac-vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-076",
    "questionText": "เซลล์ชนิดใดในไตที่ทำหน้าที่สังเคราะห์และหลั่งฮอร์โมน Erythropoietin (EPO) เพื่อตอบสนองต่อภาวะออกซิเจนในเนื้อเยื่อลดลง (Renal hypoxia)?",
    "options": {
      "A": "Principal cells ในท่อรวม",
      "B": "Podocytes ใน Bowman's capsule",
      "C": "Juxtaglomerular cells ในหลอดเลือดแดง",
      "D": "Interstitial fibroblasts (Peritubular interstitial cells) บริเวณรอบๆ ท่อหน่วยไตในชั้น Renal Cortex"
    },
    "correctOption": "D",
    "explanation": "Erythropoietin (EPO) ประมาณ 85-90% ของร่างกายถูกสังเคราะห์จาก Peritubular interstitial cells (Fibroblast-like cells) ที่แทรกอยู่ในเนื้อไตชั้น Cortex เมื่อเซลล์ตรวจพบภาวะ Hypoxia โปรตีน Hypoxia-Inducible Factor (HIF-2alpha) จะกระตุ้นการแสดงออกของยีน EPO ส่งฮอร์โมนเข้ากระแสเลือดไปกระตุ้น Proerythroblasts ในไขกระดูก",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "erythropoietin-synthesis",
      "interstitial-fibroblasts",
      "hypoxia-inducible-factor"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-077",
    "questionText": "ในกระบวนการเปลี่ยนรูปวิตามินดี เอนไซม์ 1-alpha-hydroxylase ซึ่งทำหน้าที่เปลี่ยน 25-hydroxyvitamin D3 ให้กลายเป็น Calcitriol (1,25-dihydroxyvitamin D3) ซึ่งเป็นรูปที่ทำงานได้ของวิตามินดี พบได้ที่เซลล์ของโครงสร้างใดในไต?",
    "options": {
      "A": "Proximal Convoluted Tubule (PCT)",
      "B": "Glomerulus",
      "C": "Loop of Henle",
      "D": "Renal papilla"
    },
    "correctOption": "A",
    "explanation": "เอนไซม์ 1-alpha-hydroxylase (CYP27B1) อยู่ที่ไมโทคอนเดรียของเซลล์เยื่อบุผิว Proximal Convoluted Tubule (PCT) ในไต ทำหน้าที่เติมหมู่ -OH ที่ตำแหน่งคาร์บอนที่ 1 กลายเป็น Calcitriol ฮอร์โมนนี้ถูกกระตุ้นโดย PTH และภาวะฟอสเฟตต่ำ เพื่อช่วยดูดซึมแคลเซียมและฟอสเฟตที่ทางเดินอาหาร",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "1-alpha-hydroxylase",
      "calcitriol-synthesis",
      "pct-mitochondria"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-078",
    "questionText": "เซลล์ชนิด Extraglomerular Mesangial cells (Lacis cells หรือ Polkissen) ซึ่งเป็นองค์ประกอบหนึ่งของ JGA ตั้งอยู่บริเวณใดและทำหน้าที่อย่างไร?",
    "options": {
      "A": "ตั้งอยู่ภายใน Bowman's space ทำหน้าที่กรองโปรตีน",
      "B": "ตั้งอยู่ในช่องว่างรูปสามเหลี่ยมระหว่าง Afferent arteriole, Efferent arteriole และ Macula densa มี Gap junctions เชื่อมต่อระหว่างเซลล์ ทำหน้าที่ส่งผ่านสัญญาณไฟฟ้าระหว่าง Macula densa กับ JG cells",
      "C": "ตั้งอยู่ที่ยอดของ Renal pyramid ทำหน้าที่บีบรูดปัสสาวะ",
      "D": "ตั้งอยู่ในกระเพาะปัสสาวะ"
    },
    "correctOption": "B",
    "explanation": "Extraglomerular mesangial cells (Lacis cells / Goormaghtigh cells) ตั้งอยู่นอกโกลเมอรูลัส ตรงช่องว่างระหว่างหลอดเลือด Afferent, Efferent และ Macula densa เซลล์มี Gap junctions หนาแน่น ทำหน้าที่เป็นตัวกลางถ่ายทอดสัญญาณประสาทและโมเลกุลสื่อสารระหว่าง Macula densa กับ Juxtaglomerular cells เพื่อประสานการหลั่ง Renin และการหดขยายหลอดเลือด",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 25,
    "tags": [
      "extraglomerular-mesangial-cells",
      "lacis-cells",
      "gap-junctions-jga"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-079",
    "questionText": "โครงสร้างทางกายวิภาคของท่อไตส่วนปลายที่เชื่อมต่อเข้ากับกระเพาะปัสสาวะ (Ureterovesical junction) หากมีข้อบกพร่องแต่กำเนิดโดยท่อไตทอดทะลุผนังเป็นแนวตั้งฉากตรงๆ แทนที่จะเป็นแนวเฉียง จะทำให้เกิดโรคใดในเด็กเล็ก?",
    "options": {
      "A": "ปัสสาวะไม่ออกอย่างถาวร",
      "B": "นิ่วในถุงน้ำดี",
      "C": "Vesicoureteral Reflux (VUR) ซึ่งทำให้น้ำปัสสาวะไหลย้อนกลับขึ้นไปทำลายเนื้อไตและเกิดการติดเชื้อกรวยไตอักเสบซ้ำซาก",
      "D": "กระเพาะปัสสาวะแตก"
    },
    "correctOption": "C",
    "explanation": "Primary Vesicoureteral Reflux (VUR) เกิดจากความผิดปกติแต่กำเนิดของ Intramural ureter ที่สั้นเกินไปหรือทอดทะลุผนัง Detrusor เป็นมุมชันแทนที่จะเป็นแนวเฉียงยาว เมื่อกระเพาะปัสสาวะบีบตัว ปลายท่อไตจึงไม่ถูกกดปิด ทำให้น้ำปัสสาวะพุ่งย้อนกลับขึ้นไปตาม Ureter เข้าสู่ไต นำพาแบคทีเรียขึ้นไปทำลายเนื้อไตจนเกิดไตวายในเด็ก",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 39,
    "tags": [
      "vesicoureteral-reflux",
      "vur",
      "congenital-urinary-defect"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-080",
    "questionText": "เมื่อผู้ป่วยได้รับการสวนคาสายสวนปัสสาวะ (Foley catheterization) ลูกโป่งของสายสวน (Retention balloon) จะถูกสูบน้ำกลั่นเข้าไปพองตัวเพื่อตรึงสายสวนให้อยู่ในตำแหน่งใดของระบบทางเดินปัสสาวะ?",
    "options": {
      "A": "ภายในต่อมลูกหมาก",
      "B": "ภายในท่อปัสสาวะส่วน Membranous urethra",
      "C": "ภายในท่อไตส่วนล่าง",
      "D": "ภายในโพรงกระเพาะปัสสาวะ (Urinary bladder lumen) เหนือระดับของ Internal urethral orifice เล็กน้อย"
    },
    "correctOption": "D",
    "explanation": "บอลลูนของสายสวน Foley catheter (บรรจุน้ำกลั่นปลอดเชื้อ 5-10 มล.) ต้องอยู่ในโพรงกระเพาะปัสสาวะเหนือต่อ Internal urethral orifice อย่างสมบูรณ์ เพื่อทำหน้าที่ขัดขวางไม่ให้สายสวนเลื่อนหลุดออกมา หากสูบบอลลูนในขณะที่สายยังค้างอยู่ใน Urethra (โดยเฉพาะ Prostatic/Membranous urethra) จะทำให้ท่อปัสสาวะฉีกขาดและมีเลือดออกรุนแรง",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 40,
    "tags": [
      "foley-catheter",
      "retention-balloon",
      "urinary-bladder-lumen"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-081",
    "questionText": "เซลล์ชนิด Intercalated cells Type B ในท่อ Collecting duct มีบทบาทตอบสนองต่อสภาวะด่างในร่างกาย (Metabolic alkalosis) อย่างไร?",
    "options": {
      "A": "หลั่งไอออนไบคาร์บอเนต (HCO3- secretion) ออกสู่ลูเมนของท่อปัสสาวะผ่านตัวแลกเปลี่ยน Pendrin และดูดซึม H+ กลับเข้าสู่กระแสเลือดเพื่อลดความเป็นด่างของเลือด",
      "B": "หลั่งกรดเกลือออกมาทำลายแบคทีเรีย",
      "C": "ดูดกลับน้ำตาลกลูโคส",
      "D": "หลั่งฮอร์โมนเรนิน"
    },
    "correctOption": "A",
    "explanation": "Intercalated cells Type B มีขั้วเซลล์ตรงข้ามกับ Type A: มีตัวแลกเปลี่ยน Cl-/HCO3- exchanger (Pendrin) อยู่ที่ Apical membrane ทำหน้าที่ขับไอออนไบคาร์บอเนต (HCO3-) ออกทิ้งในปัสสาวะ และมี H+-ATPase อยู่ที่ Basolateral membrane ดูดซึม H+ กลับเข้าสู่เลือด จึงเป็นกลไกหลักในการแก้ไขภาวะเลือดเป็นด่าง (Alkalosis)",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 21,
    "tags": [
      "intercalated-cells-type-b",
      "pendrin",
      "bicarbonate-secretion",
      "alkalosis-correction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-082",
    "questionText": "ในทางจุลกายวิภาคศาสตร์ รูปร่างของเซลล์เยื่อบุผิว (Epithelial cells) ของห่วงเฮนเลขาลงส่วนบาง (Thin descending limb) และห่วงเฮนเลขากลับส่วนบาง (Thin ascending limb) จัดเป็นเนื้อเยื่อบุผิวชนิดใด?",
    "options": {
      "A": "Simple cuboidal epithelium มี Brush border",
      "B": "Simple squamous epithelium (เซลล์เยื่อบุผิวรูปแผ่นแบนชั้นเดียว บางเฉียบ)",
      "C": "Stratified squamous epithelium",
      "D": "Transitional epithelium"
    },
    "correctOption": "B",
    "explanation": "Thin limbs of the Loop of Henle (ทั้งขาลงและขาขึ้นส่วนบาง) มีผนังที่บางมาก ประกอบด้วย Simple squamous epithelium ชั้นเดียวที่มีความหนาเพียง 1-2 ไมครอน เพื่อเอื้อต่อการแพร่ผ่านของน้ำและสารละลายตามแรงขับเคลื่อนออสโมติกในชั้น Medulla",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 18,
    "tags": [
      "thin-limb-histology",
      "simple-squamous",
      "loop-of-henle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-083",
    "questionText": "หลอดเลือด Interlobular (Cortical radiate) veins ในเนื้อไตชั้นนอก จะนำเลือดดำไหลมารวมกันเทเข้าสู่หลอดเลือดดำใดที่ทอดโค้งขนานกับฐานของพีระมิดไต?",
    "options": {
      "A": "Renal vein",
      "B": "Interlobar veins",
      "C": "Arcuate veins",
      "D": "Segmental veins"
    },
    "correctOption": "C",
    "explanation": "การไหลเวียนของเลือดดำในไต: เลือดจาก Peritubular capillaries และ Stellate veins ไหลเข้า Cortical radiate (Interlobular) veins -> ไหลเทเข้า Arcuate veins (ทอดโค้งที่รอยต่อ Cortex-Medulla) -> ไหลเข้า Interlobar veins (ใน Renal columns) -> รวมเป็น Renal vein เข้าสู่ IVC (ไตไม่มี Segmental veins ในระบบหลอดเลือดดำ)",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 11,
    "tags": [
      "renal-venous-drainage",
      "arcuate-veins",
      "interlobular-veins"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-084",
    "questionText": "ยาในกลุ่ม Thiazide diuretics (เช่น Hydrochlorothiazide) ออกฤทธิ์ยับยั้งโปรตีนตัวพา Na+/Cl- cotransporter (NCCT) ที่ท่อหน่วยไตส่วนใดในการลดความดันโลหิต?",
    "options": {
      "A": "Collecting duct",
      "B": "Thick ascending limb of Henle",
      "C": "Proximal Convoluted Tubule",
      "D": "ส่วนต้นของ Distal Convoluted Tubule (Early DCT)"
    },
    "correctOption": "D",
    "explanation": "Thiazide diuretics ออกฤทธิ์ยับยั้งตัวพา Na+/Cl- cotransporter (NCCT) ที่ฝังอยู่บน Apical membrane ของเซลล์ในส่วนต้นของ Distal Convoluted Tubule (Early DCT) ส่งผลให้โซเดียมและคลอไรด์ไม่ถูกดูดซึมกลับและดึงน้ำขับออกไปกับปัสสาวะ นิยมใช้เป็นยารักษาโรคความดันโลหิตสูงเป็นอันดับแรก",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 20,
    "tags": [
      "thiazide-diuretics",
      "early-dct",
      "ncct-cotransporter"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-085",
    "questionText": "กระเพาะปัสสาวะด้านบนถูกปกคลุมด้วยเยื่อบุช่องท้องชนิด Visceral Peritoneum เมื่อกระเพาะปัสสาวะขยายตัวขึ้นเต็มที่จะเกิดการเปลี่ยนแปลงตำแหน่งสัมพันธ์กับผนังหน้าท้องอย่างไรที่มีประโยชน์ในการทำหัตถการทางการแพทย์?",
    "options": {
      "A": "กระเพาะปัสสาวะจะดันตัวโป่งขึ้นเหนือแนวขอบกระดูกหัวหน่าว (Pubic crest) เข้าสู่ช่องท้องส่วนล่าง ดันเยื่อบุช่องท้องให้ยกสูงขึ้น ทำให้แพทย์สามารถใช้เข็มเจาะดูดปัสสาวะเหนือหัวหน่าว (Suprapubic cystostomy) ได้โดยตรงโดยไม่ต้องแทงทะลุเข้าช่องเยื่อบุช่องท้อง",
      "B": "กระเพาะปัสสาวะจะยุบตัวลงไปในกระดูกก้นกบ",
      "C": "กระเพาะปัสสาวะจะเคลื่อนที่ไปอยู่หลังตับ",
      "D": "กระเพาะปัสสาวะจะบิดตัว 180 องศา"
    },
    "correctOption": "A",
    "explanation": "เมื่อกระเพาะปัสสาวะว่างจะซ่อนตัวอยู่ใน True pelvis หลัง Pubic symphysis แต่เมื่อมีปัสสาวะเต็ม (Distended bladder) ยอด Apex จะโป่งลอยพ้นขอบบนของกระดูกหัวหน่าวขึ้นมาอยู่ชิดกับผนังหน้าท้องส่วนล่าง (Anterior abdominal wall) โดยดัน Peritoneal reflection ให้ร่นขึ้นไปข้างบน แพทย์จึงสามารถทำหัตถการ Suprapubic puncture/catheterization ได้อย่างปลอดภัยโดยไม่เสี่ยงต่อการเจาะทะลุลำไส้หรือเกิด Peritonitis",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 40,
    "tags": [
      "suprapubic-cystostomy",
      "distended-bladder-position",
      "extraperitoneal-puncture"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-086",
    "questionText": "โครงสร้างเส้นเอ็น Median Umbilical Ligament ซึ่งยึดระหว่างยอดของกระเพาะปัสสาวะ (Apex of the bladder) กับสะดือ (Umbilicus) เป็นซากที่หลงเหลือมาจากโครงสร้างทางคัพภวิทยาใดในระยะทารก?",
    "options": {
      "A": "Umbilical vein",
      "B": "Urachus (ท่อเชื่อมต่อระหว่างถุง Allantois กับ Bladder ในทารก)",
      "C": "Ductus arteriosus",
      "D": "Vitelline duct"
    },
    "correctOption": "B",
    "explanation": "Median umbilical ligament เป็นสายเส้นเอ็นเนื้อเยื่อเกี่ยวพันตรงกึ่งกลางผนังหน้าท้อง ทอดจาก Apex of bladder ขึ้นไปเกาะที่ Umbilicus เกิดจากการฝ่อตันของท่อ Urachus (ซึ่งในตัวอ่อนเชื่อมระหว่าง Allantois กับ Cloaca/Bladder) หากท่อนี้ไม่ปิดสนิทแต่กำเนิดจะเกิดภาวะ Patent urachus ทำให้มีน้ำปัสสาวะรั่วซึมไหลออกทางสะดือ",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 41,
    "tags": [
      "median-umbilical-ligament",
      "urachus",
      "patent-urachus"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-087",
    "questionText": "ท่อรวมน้ำปัสสาวะส่วนปลายสุดที่ทอดตัวผ่านยอดของ Renal Papilla มีชื่อเรียกว่าอะไร และบุด้วยเนื้อเยื่อบุผิวชนิดใด?",
    "options": {
      "A": "Ureter บุด้วย Transitional epithelium",
      "B": "PCT บุด้วย Simple cuboidal",
      "C": "Papillary ducts (Ducts of Bellini) บุด้วยเซลล์ Simple columnar epithelium ทรงสูง",
      "D": "Bowman's capsule บุด้วย Simple squamous"
    },
    "correctOption": "C",
    "explanation": "หลายๆ Cortical และ Medullary collecting ducts จะไหลมารวมกันเป็นท่อขนาดใหญ่เส้นผ่านศูนย์กลางกว้างขึ้น เรียกว่า Papillary ducts (Ducts of Bellini) บุด้วย Simple columnar epithelium เซลล์ทรงสูง ทอดทะลุเปิดออกที่ยอด Renal papilla บริเวณ Area cribrosa นำปัสสาวะเข้าสู่ Minor calyx",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 21,
    "tags": [
      "papillary-ducts",
      "ducts-of-bellini",
      "renal-papilla-epithelium"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-088",
    "questionText": "กล้ามเนื้อหูรูดท่อปัสสาวะภายใน (Internal Urethral Sphincter) มีลักษณะทางกายวิภาคและระบบประสาทที่ควบคุมอย่างไร?",
    "options": {
      "A": "ควบคุมโดยเส้นประสาทสมองคู่ที่ 12",
      "B": "เป็นกล้ามเนื้อลายที่ควบคุมได้ตามความตั้งใจ",
      "C": "เป็นแผ่นกระดูกอ่อนยืดหยุ่น",
      "D": "เป็นกล้ามเนื้อเรียบ (Smooth muscle) ที่เป็นส่วนต่อของ Detrusor muscle บริเวณคอกระเพาะปัสสาวะ (Bladder neck) ทำงานอยู่นอกอำนาจจิตใจ (Involuntary) ควบคุมโดยระบบประสาทอัตโนมัติ Autonomic nervous system"
    },
    "correctOption": "D",
    "explanation": "Internal urethral sphincter ตั้งอยู่ที่ Bladder neck รอบรูเปิดท่อปัสสาวะด้านใน เกิดจากการเรียงตัวของกล้ามเนื้อเรียบ (Smooth muscle) ของ Detrusor ทำงานโดยอัตโนมัติ (Involuntary): Sympathetic ควบคุมการหดรัดตัวกลั้นไว้ขณะพัก และป้องกันการหลั่งอสุจิย้อนกลับเข้ากระเพาะปัสสาวะ (Retrograde ejaculation) ในเพศชาย ขณะที่ Parasympathetic ควบคุมการคลายตัวเพื่อปัสสาวะ",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 43,
    "tags": [
      "internal-urethral-sphincter",
      "bladder-neck",
      "involuntary-smooth-muscle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-089",
    "questionText": "ในผู้ป่วยโรคความดันโลหิตสูงที่มีภาวะ Renal Artery Stenosis (หลอดเลือดแดงไตตีบข้างเดียวจากคราบไขมัน) เหตุใดไตข้างที่ตีบจึงกระตุ้นให้เกิดความดันโลหิตสูงรุนแรงทั่วร่างกาย (Renovascular hypertension)?",
    "options": {
      "A": "การตีบของหลอดเลือดทำให้ความดันและปริมาณเลือดที่เข้าสู่ Glomerulus ข้างนั้นลดลง JG cells จึงเข้าใจผิดว่าร่างกายมีความดันโลหิตต่ำ จึงหลั่งเอนไซม์เรนิน (Renin) ออกมาในปริมาณมหาศาล กระตุ้นระบบ RAAS ให้บีบหลอดเลือดทั่วร่างกาย",
      "B": "ไตข้างนั้นสร้างฮอร์โมนอินซูลินมากเกินไป",
      "C": "ไตข้างนั้นหยุดการกรองน้ำตาลกลูโคส",
      "D": "เกิดการอุดตันของท่อไตทำให้ปัสสาวะคั่ง"
    },
    "correctOption": "A",
    "explanation": "Renal artery stenosis ทำให้ Perfusion pressure ไปยัง Afferent arteriole ของไตข้างนั้นลดลงอย่างมาก กลไก Baroreceptors ของ Juxtaglomerular (JG) cells จะถูกกระตุ้นให้หลั่ง Renin ออกมาอย่างต่อเนื่อง ก่อให้เกิดการสร้าง Angiotensin II และ Aldosterone ในระดับสูง ส่งผลให้เกิด Vasoconstriction และกักเก็บน้ำ/เกลือทั่วร่างกาย เกิดภาวะ Renovascular hypertension",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 28,
    "tags": [
      "renovascular-hypertension",
      "renal-artery-stenosis",
      "hyperreninemia",
      "raas-activation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-090",
    "questionText": "กระบวนการ Tubuloglomerular Feedback (TGF) ซึ่งเป็นกลไก Autoregulation ภายในหน่วยไต ทำงานอย่างไรเมื่ออัตราการกรอง GFR สูงเกินไป?",
    "options": {
      "A": "Macula densa สั่งให้หัวใจเต้นเร็วขึ้น",
      "B": "น้ำกรองไหลผ่านท่อเร็วเกินไป ทำให้การดูดซึม Na+ และ Cl- กลับไม่ทัน ส่งผลให้ Macula densa ตรวจพบความเข้มข้นของ NaCl สูง จึงหลั่งสาร Adenosine/ATP ไปสั่งให้ Afferent arteriole หดตัว (Vasoconstriction) เพื่อลด GHP และดึง GFR กลับลงมาสู่ค่าปกติ",
      "C": "Efferent arteriole จะขยายตัว 10 เท่า",
      "D": "Bowman's capsule จะปิดตัวลงสนิท"
    },
    "correctOption": "B",
    "explanation": "Tubuloglomerular Feedback (TGF): เมื่อ GFR สูงขึ้น อัตราการไหลของ Filtrate ในท่อไตจะเร็วมากจนเซลล์ดูดซึม NaCl กลับไม่ทัน ของเหลวที่มาถึง Macula densa ใน DCT จึงมี NaCl สูง เซลล์ Macula densa รับรู้ผ่านตัวพา NKCC2 แล้วหลั่ง Adenosine ออกมาจับกับ A1 receptors บนเซลล์กล้ามเนื้อเรียบของ Afferent arteriole ทำให้เกิด Vasoconstriction เลือดเข้า Glomerulus ลดลง GFR จึงลดลงสู่ระดับปกติ",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "tubuloglomerular-feedback",
      "tgf",
      "macula-densa",
      "adenosine",
      "afferent-constriction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-091",
    "questionText": "ในขั้นตอนการกรองพลาสมาที่ Glomerulus ปัจจัยทางกายวิภาคและชีวโมเลกุลข้อใดเป็นตัวกำหนดว่าสารชนิดใดจะสามารถผ่านตัวกรอง (Filtration barrier) ออกไปได้?",
    "options": {
      "A": "ระดับอุณหภูมิของเลือดในไต",
      "B": "สีของสารและความหนาแน่นของเซลล์",
      "C": "ขนาดโมเลกุล (Molecular size: เส้นผ่านศูนย์กลาง < 4 nm ผ่านได้อิสระ, > 8 nm ผ่านไม่ได้) และประจุไฟฟ้าของโมเลกุล (Electrical charge: สารประจุบวกและเป็นกลางผ่านได้ง่ายกว่าสารประจุลบ)",
      "D": "เฉพาะสารที่มีธาตุเหล็กเป็นองค์ประกอบ"
    },
    "correctOption": "C",
    "explanation": "Glomerular filter มีคุณสมบัติคัดกรอง 2 แบบ: 1. Size selectivity: รูพรุน Endothelial fenestrae (70-90 nm), รูตาข่าย GBM (4-8 nm) และ Filtration slits (4-14 nm) ยอมให้น้ำ ไอออน กลูโคส กรดอะมิโน ยูเรีย ผ่านได้อิสระ แต่กั้นเซลล์เม็ดเลือด 2. Charge selectivity: สารประจุบวก (Cationic) จะผ่านได้ดีที่สุด ตามด้วยประจุเป็นกลาง ส่วนสารประจุลบ (Anionic เช่น Albumin) จะถูกผลักโดยประจุลบของ GBM",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 16,
    "tags": [
      "size-selectivity",
      "charge-selectivity",
      "filtration-dynamics"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-092",
    "questionText": "โครงสร้างใดใน Renal Medulla ที่ทำหน้าที่ลำเลียงน้ำปัสสาวะที่ผ่านการปรับความเข้มข้นขั้นสุดท้ายแล้วจากเนฟรอนหลายๆ ตัวมารวมกันเพื่อมุ่งหน้าสู่ยอด Renal papilla?",
    "options": {
      "A": "Afferent arteriole",
      "B": "Loop of Henle",
      "C": "Proximal tubule",
      "D": "Medullary Collecting Duct (ท่อรวมส่วนเมดัลลา)"
    },
    "correctOption": "D",
    "explanation": "Cortical collecting ducts จากเนฟรอนหลายพันหน่วยจะทอดตัวลงมาในชั้น Medulla กลายเป็น Medullary collecting ducts ซึ่งเป็นตำแหน่งที่มีการตอบสนองต่อ ADH สูงสุดในการดึงน้ำกลับครั้งสุดท้าย และมีการดูดซึม Urea กลับเข้าสู่ Interstitium เพื่อรักษาสภาพความเข้มข้นของ Medulla",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 21,
    "tags": [
      "medullary-collecting-duct",
      "urea-reabsorption",
      "urine-concentration"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-093",
    "questionText": "เมื่อตรวจปัสสาวะพบเม็ดเลือดแดงที่มีรูปร่างบิดเบี้ยวผิดรูป (Dysmorphic RBCs) ร่วมกับตรวจพบ Red Blood Cell Casts ในปัสสาวะ บ่งชี้ว่าตำแหน่งที่มีพยาธิสภาพเลือดออกอยู่ในโครงสร้างใดของระบบทางเดินปัสสาวะ?",
    "options": {
      "A": "Glomerulus ในเนื้อไต (Glomerular bleeding เช่น โรค Glomerulonephritis)",
      "B": "กระเพาะปัสสาวะ (Cystitis)",
      "C": "ท่อปัสสาวะส่วนปลาย",
      "D": "ต่อมลูกหมาก"
    },
    "correctOption": "A",
    "explanation": "Dysmorphic RBCs (เซลล์เม็ดเลือดแดงบิดเบี้ยว รูปร่างคล้ายหูมิกกี้เมาส์ Acanthocytes) เกิดจากการที่ RBCs ถูกบีบอัดเบียดผ่านรอยฉีกขาดของ Glomerular basement membrane และสัมผัสกับ Osmolality ที่เปลี่ยนแปลงตลอดความยาวท่อไต ร่วมกับการพบ RBC Casts (เม็ดเลือดแดงเกาะรวมกับ Tamm-Horsfall protein ในท่อไต) บ่งชี้ชัดเจนว่าเป็น Glomerular hematuria",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 16,
    "tags": [
      "dysmorphic-rbcs",
      "rbc-casts",
      "glomerulonephritis",
      "glomerular-hematuria"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-094",
    "questionText": "หลอดเลือดดำ Renal Vein ข้างซ้าย (Left Renal Vein) มีลักษณะทางกายวิภาคที่ยาวกว่าหลอดเลือดดำไตข้างขวา และทอดข้ามผ่านโครงสร้างสำคัญใดก่อนเทเข้าสู่ Inferior Vena Cava?",
    "options": {
      "A": "ทอดตัวข้ามหลังกระดูกสันหลัง",
      "B": "ทอดตัวข้ามด้านหน้าของ Abdominal Aorta โดยลอดอยู่ใต้จุดแตกแขนงของ Superior Mesenteric Artery (SMA)",
      "C": "ทอดตัวอยู่เหนือกระเพาะอาหาร",
      "D": "ทอดตัวผ่านกะบังลม"
    },
    "correctOption": "B",
    "explanation": "Left renal vein มีความยาวมากกว่าข้างขวา (ประมาณ 7.5 ซม. เทียบกับ 2.5 ซม.) โดยทอดตัวข้ามด้านหน้า Abdominal aorta และลอดอยู่ใต้มุมแหลมของ Superior mesenteric artery (SMA) หากมุมนี้แคบลงจะเกิดการกดทับ Left renal vein เรียกว่า Nutcracker syndrome ทำให้ผู้ป่วยมีอาการปวดเอวซ้ายและปัสสาวะเป็นเลือด",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 10,
    "tags": [
      "left-renal-vein",
      "nutcracker-syndrome",
      "sma-crossing",
      "aorta-relation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-095",
    "questionText": "หลอดเลือดดำของลูกอัณฑะข้างซ้าย (Left Testicular vein ในเพศชาย) และหลอดเลือดดำต่อมหมวกไตข้างซ้าย (Left Suprarenal vein) เทเลือดดำเข้าสู่โครงสร้างใด ซึ่งแตกต่างจากข้างขวา?",
    "options": {
      "A": "เทเข้าสู่ Hepatic portal vein",
      "B": "เทเข้าสู่ Inferior Vena Cava โดยตรง",
      "C": "เทเข้าสู่ Left Renal Vein ในแนวตั้งฉาก ก่อนจะไหลต่อไปยัง IVC",
      "D": "เทเข้าสู่ Renal artery"
    },
    "correctOption": "C",
    "explanation": "ความไม่สมมาตรของหลอดเลือดดำ: ทางด้านขวา Right testicular vein และ Right suprarenal vein เทตรงเข้าสู่ IVC แต่ทางด้านซ้าย Left testicular vein และ Left suprarenal vein จะเทเข้าสู่ Left Renal Vein เป็นมุมฉาก 90 องศา ทำให้แรงดันต้านสูงกว่า เป็นสาเหตุที่เพศชายมักพบเส้นเลือดขอดที่ถุงอัณฑะ (Varicocele) ข้างซ้ายบ่อยกว่าข้างขวาอย่างมาก",
    "system": "Urinary System",
    "topic": "Kidney Blood Supply",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 10,
    "tags": [
      "left-testicular-vein",
      "left-suprarenal-vein",
      "varicocele",
      "left-renal-vein"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-096",
    "questionText": "ต่อมหมวกไต (Adrenal / Suprarenal glands) ตั้งอยู่บนขั้วบนของไตทั้งสองข้าง โดยบรรจุอยู่ร่วมกับไตภายในชั้นเนื้อเยื่อเกี่ยวพันชนิดใด?",
    "options": {
      "A": "บรรจุอยู่ในถุงเยื่อหุ้มหัวใจ",
      "B": "อยู่นอก Renal fascia และมีกระดูกซี่โครงกั้นกลาง",
      "C": "ฝังอยู่ภายในเนื้อไตชั้น Renal cortex",
      "D": "บรรจุอยู่ร่วมกันภายในชั้น Renal fascia (Gerota's fascia) และถูกห่อหุ้มด้วย Perirenal fat"
    },
    "correctOption": "D",
    "explanation": "ต่อมหมวกไตตั้งอยู่บนขั้วบนของไตแต่ละข้าง โดยบรรจุอยู่ภายในช่องเดียวกันของ Renal fascia (Gerota's fascia) และรายล้อมด้วย Perirenal fat แต่จะมีแผ่นกั้นบางๆ (Thin septum) แยกต่อมหมวกไตออกจากไต ทำให้เมื่อไตเลื่อนหลุดลงล่าง (Nephroptosis) หรือเมื่อผ่าตัดตัดไตออก ต่อมหมวกไตจะยังคงเกาะติดอยู่ที่เดิมใต้กะบังลม",
    "system": "Urinary System",
    "topic": "Kidney Gross Anatomy & Position",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 6,
    "tags": [
      "adrenal-glands",
      "gerotas-fascia",
      "perirenal-fat"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-097",
    "questionText": "ส่วนประกอบของโปรตีนที่มีความจำเพาะสูงที่สร้างจากเซลล์เยื่อบุผิวของ Thick Ascending Limb of Henle ซึ่งทำหน้าที่เป็นโครงร่างโปรตีนพื้นฐานในการฟอร์มตัวของแท่งแคสต์ (Urinary Casts) ในน้ำปัสสาวะคือโปรตีนชนิดใด?",
    "options": {
      "A": "Tamm-Horsfall protein (Uromodulin)",
      "B": "Albumin",
      "C": "Fibrinogen",
      "D": "Immunoglobulin G"
    },
    "correctOption": "A",
    "explanation": "Tamm-Horsfall protein (Uromodulin) เป็น Glycoprotein ชนิดพิเศษที่สังเคราะห์และหลั่งเฉพาะจากเซลล์ของ Thick Ascending Limb (TAL) และส่วนต้นของ DCT ทำหน้าที่ป้องกันการเกาะติดของเชื้อแบคทีเรียและป้องกันการตกผลึกของนิ่ว เมื่อปัสสาวะมีความเข้มข้นสูงหรือเป็นกรด โปรตีนนี้จะแข็งตัวเป็นเจลกลายเป็น Hyaline casts ซึ่งเป็นโครงร่างพื้นฐานของแคสต์ทุกชนิดในปัสสาวะ",
    "system": "Urinary System",
    "topic": "Nephron Structure & Histology",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 19,
    "tags": [
      "tamm-horsfall-protein",
      "uromodulin",
      "urinary-casts",
      "thick-ascending-limb"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-098",
    "questionText": "ในทางจุลกายวิภาคศาสตร์ พื้นผิวด้านในสุดของเซลล์ Umbrella cells ในชั้นเยื่อบุ Urothelium ของกระเพาะปัสสาวะ มีโครงสร้างแข็งแรงพิเศษที่ประกอบด้วยโปรตีนหนาแน่น (Asymmetric unit membrane) เรียกว่าอะไร ซึ่งทำหน้าที่ป้องกันไม่ให้ปัสสาวะที่มีกรดยูเรียซึมเข้าทำลายเนื้อเยื่อ?",
    "options": {
      "A": "Keratin lamellae",
      "B": "Uroplakin plaques (Urothelial plaques)",
      "C": "Mucin droplets",
      "D": "Microvillar border"
    },
    "correctOption": "B",
    "explanation": "Umbrella cells ในชั้นผิวของ Transitional epithelium มีโครงสร้าง Apical membrane หนาเป็นพิเศษ เรียกว่า Urothelial plaques (Uroplakins: UP Ia, Ib, II, IIIa) สานกันเป็นแผ่นผลึกรูปหกเหลี่ยม ทำหน้าที่เป็น Permeability barrier ที่แข็งแกร่งที่สุดในร่างกาย ป้องกันไม่ให้น้ำ ปัสสาวะ ยูเรีย และโปรตอนรั่วซึมข้ามเยื่อบุผิวกลับเข้าสู่กระแสเลือด",
    "system": "Urinary System",
    "topic": "Ureters, Bladder & Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 43,
    "tags": [
      "uroplakins",
      "urothelial-plaques",
      "umbrella-cells-barrier"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-099",
    "questionText": "ความดันโลหิตภายในหลอดเลือดแดงของไตหากตกลงต่ำกว่าค่า Mean Arterial Pressure (MAP) เท่าใด จะทำให้กลไก Renal Autoregulation สูญเสียประสิทธิภาพ ส่งผลให้ความดันการกรอง NFP ลดลงจนไตหยุดการสร้างน้ำปัสสาวะ (Anuria) และเกิดภาวะไตวายเฉียบพลันแบบ Prerenal Acute Kidney Injury?",
    "options": {
      "A": "ต่ำกว่า 150 mmHg",
      "B": "ต่ำกว่า 120 mmHg",
      "C": "ต่ำกว่า 80 mmHg (หรือ Systolic BP ต่ำกว่า 70-80 mmHg)",
      "D": "ต่ำกว่า 200 mmHg"
    },
    "correctOption": "C",
    "explanation": "กลไก Renal Autoregulation สามารถรักษาระดับ GFR ให้คงที่ได้เฉพาะเมื่อ Mean Arterial Pressure (MAP) อยู่ในช่วง 80 ถึง 180 mmHg เท่านั้น หากความดันเลือดตกลงอย่างรุนแรง (เช่น เสียเลือด ช็อก หรือขาดน้ำรุนแรง จน MAP < 80 mmHg หรือ Systolic BP < 70 mmHg) กลไกขยาย Afferent arteriole จะไม่สามารถชดเชยได้อีกต่อไป ส่งผลให้ Glomerular Hydrostatic Pressure ตกฮวบ NFP กลายเป็นศูนย์ เกิดภาวะปัสสาวะไม่ออก (Oliguria/Anuria) และเกิด Prerenal AKI",
    "system": "Urinary System",
    "topic": "Urine Formation & Filtration Dynamics",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 32,
    "tags": [
      "autoregulation-limits",
      "map-80-180",
      "prerenal-aki",
      "anuria"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-100",
    "questionText": "ข้อใดสรุปหน้าที่ของระบบทางเดินปัสสาวะ (Urinary System) ในการรักษาสมดุลของสภาพแวดล้อมภายในร่างกาย (Homeostasis) ได้อย่างถูกต้อง ลึกซึ้ง และสมบูรณ์ที่สุด?",
    "options": {
      "A": "1. สูบฉีดเลือดไปยังปอด 2. สร้างสารเคลือบฟัน 3. หลั่งน้ำลาย 4. ควบคุมการนอนหลับ",
      "B": "1. สร้างเม็ดเลือดขาว 2. ย่อยอาหารประเภทไขมัน 3. แลกเปลี่ยนก๊าซคาร์บอนมอนอกไซด์ 4. ผลิตฮอร์โมนเพศ",
      "C": "1. สร้างน้ำดี 2. ควบคุมอุณหภูมิร่างกายด้วยเหงื่อ 3. ผลิตเอนไซม์เปปซิน 4. ดูดซึมวิตามินซีในช่องปาก",
      "D": "1. ขับถ่ายของเสียจากเมแทบอลิซึม (Urea, Creatinine, Uric acid) 2. ควบคุมปริมาตรและความดันเลือดผ่านระบบ RAAS และ ADH 3. ควบคุมสมดุลของเหลวและอิเล็กโทรไลต์ (Na+, K+, Ca2+, Cl-) 4. รักษาสมดุลกรด-ด่างผ่านการขับ H+ และสร้าง HCO3- 5. ทำหน้าที่ต่อมไร้ท่อสร้าง Erythropoietin (กระตุ้นไขกระดูก) และ Calcitriol (กระตุ้นดูดซึมแคลเซียม) 6. สังเคราะห์กลูโคสใหม่ในภาวะอดอาหาร"
    },
    "correctOption": "D",
    "explanation": "ระบบทางเดินปัสสาวะเป็นระบบหลักในการธำรงดุล (Homeostasis) ของร่างกาย โดยทำหน้าที่สำคัญ 6 ประการ: 1. ขจัดของเสียสารอินทรีย์ไนโตรเจน 2. ควบคุมปริมาตรเลือดและความดันโลหิต 3. ควบคุมความเข้มข้นของไอออนในพลาสมา 4. รักษาความสมดุลของ pH ในเลือด 5. บทบาทต่อมไร้ท่อ (EPO และ Calcitriol) 6. Gluconeogenesis ในภาวะอดอาหาร",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 2,
    "tags": [
      "urinary-system-homeostasis-summary",
      "kidney-functions-comprehensive"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  }
];
