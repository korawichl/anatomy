import { Question } from '../types';

export const urinaryQuestions: Question[] = [
  {
    "id": "URINARY-001",
    "questionText": "ข้อใดไม่ใช่หน้าที่หลัก (Primary Function) ของระบบทางเดินปัสสาวะ (Urinary System)?",
    "options": {
      "A": "การสร้างฮอร์โมนอินซูลินเพื่อควบคุมระดับน้ำตาล (Producing insulin for glucose regulation)",
      "B": "การควบคุมความเข้มข้นของไอออนในพลาสมา (Regulating plasma ion concentrations)",
      "C": "การควบคุมปริมาตรและความดันเลือด (Regulating blood volume and blood pressure)",
      "D": "การกำจัดของเสียจากกระบวนการเผาผลาญ (Eliminating organic waste products)"
    },
    "correctOption": "A",
    "explanation": "อินซูลินถูกสร้างจากต่อมตับอ่อน (Pancreas - Beta cells) ไม่ใช่หน้าที่ของไต หน้าที่หลักของไตได้แก่ ควบคุมสมดุลน้ำและความดันเลือด ควบคุมไอออน (Na+, K+, Cl-, Ca2+) และขับของเสีย เช่น ยูเรีย กรดยูริก และครีอะตินิน",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "kidney-functions",
      "homeostasis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-002",
    "questionText": "ของเสียประเภทไนโตรเจนชนิดใดที่เกิดจากการสลายกรดอะมิโน (Catabolism of amino acids)?",
    "options": {
      "A": "Creatinine (ครีอะตินิน)",
      "B": "Urea (ยูเรีย)",
      "C": "Uric acid (กรดยูริก)",
      "D": "Bilirubin (บิลิรูบิน)"
    },
    "correctOption": "B",
    "explanation": "Urea เป็นผลผลิตหลักจากการสลายกรดอะมิโนและโปรตีนในตับ ส่วน Creatinine มาจากการสลาย creatine phosphate ในกล้ามเนื้อ และ Uric acid มาจากการสลาย nucleic acids (เบส purine)",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 4,
    "tags": [
      "metabolic-wastes",
      "urea"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-003",
    "questionText": "ฮอร์โมนชนิดใดที่สร้างจากไตและมีหน้าที่กระตุ้นการสร้างเม็ดเลือดแดงที่ไขกระดูก?",
    "options": {
      "A": "Renin",
      "B": "Calcitriol",
      "C": "Erythropoietin (EPO)",
      "D": "Aldosterone"
    },
    "correctOption": "C",
    "explanation": "Erythropoietin (EPO) สร้างจาก interstitial fibroblasts ในไต เพื่อกระตุ้นไขกระดูก (bone marrow) ในการผลิต RBC เมื่อร่างกายมีภาวะ hypoxia",
    "system": "Urinary System",
    "topic": "Hormones of the Kidney",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "kidney-hormones",
      "erythropoietin"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-004",
    "questionText": "เอนไซม์หรือฮอร์โมนใดที่สร้างจาก Juxtaglomerular (JG) cells มีบทบาทสำคัญในการควบคุมความดันโลหิตผ่านระบบ RAAS?",
    "options": {
      "A": "Angiotensin II",
      "B": "Vasopressin (ADH)",
      "C": "Atrial Natriuretic Peptide (ANP)",
      "D": "Renin"
    },
    "correctOption": "D",
    "explanation": "Renin ถูกหลั่งจาก Juxtaglomerular (granular) cells เมื่อความดันเลือดใน afferent arteriole ลดลง เพื่อเปลี่ยน Angiotensinogen เป็น Angiotensin I ในระบบ RAAS",
    "system": "Urinary System",
    "topic": "Hormones of the Kidney",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 41,
    "tags": [
      "renin",
      "raas",
      "blood-pressure"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-005",
    "questionText": "วิตามินดีในรูปกัมมันต์ (Active form of Vitamin D) ที่สร้างจากไตมีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Calcitriol (1,25-dihydroxycholecalciferol)",
      "B": "Cholecalciferol",
      "C": "Calcitonin",
      "D": "Ergocalciferol"
    },
    "correctOption": "A",
    "explanation": "ไตทำหน้าที่เปลี่ยน 25-hydroxycholecalciferol ให้เป็น Calcitriol ซึ่งเป็น active vitamin D3 ช่วยเพิ่มการดูดซึมแคลเซียมและฟอสเฟตที่ทางเดินอาหาร",
    "system": "Urinary System",
    "topic": "Hormones of the Kidney",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "calcitriol",
      "vitamin-d"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-006",
    "questionText": "ตำแหน่งทางกายวิภาคของไตทั้งสองข้างมีความสัมพันธ์กับกระดูกสันหลังระดับใด?",
    "options": {
      "A": "T8 ถึง T11",
      "B": "T12 ถึง L3",
      "C": "L1 ถึง L5",
      "D": "T10 ถึง L1"
    },
    "correctOption": "B",
    "explanation": "ไตวางตัวอยู่ในช่องหลังเยื่อบุช่องท้อง (Retroperitoneal position) ทอดตัวอยู่ระดับกระดูกสันหลังระดับ T12 ถึง L3 โดยมีกระดูกซี่โครงคู่ที่ 11 และ 12 ช่วยปกป้องส่วนบน",
    "system": "Urinary System",
    "topic": "Position of the Kidneys",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 13,
    "tags": [
      "kidney-position",
      "vertebral-level"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-007",
    "questionText": "เหตุใดไตข้างขวา (Right kidney) จึงอยู่ต่ำกว่าไตข้างซ้าย (Left kidney) เล็กน้อย?",
    "options": {
      "A": "เพราะถูกกระเพาะอาหารกดทับ",
      "B": "เพราะมีม้าม (Spleen) วางตัวอยู่ด้านบน",
      "C": "เพราะมีตับ (Liver) วางตัวอยู่ทางด้านบนขวา",
      "D": "เพราะความยาวของเส้นเลือด Renal artery ขวาสั้นกว่า"
    },
    "correctOption": "C",
    "explanation": "ไตขวาอยู่ต่ำกว่าไตซ้ายประมาณ 1-2 cm เนื่องจากตับขนาดใหญ่ครอบครองพื้นที่บริเวณช่องท้องด้านบนขวา (Right hypochondriac region)",
    "system": "Urinary System",
    "topic": "Position of the Kidneys",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 1,
    "tags": [
      "kidney-position",
      "liver"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-008",
    "questionText": "ชั้นเนื้อเยื่อเกี่ยวพันใดที่หุ้มรอบไตชั้นในสุด ทำหน้าที่ป้องกันการติดเชื้อและการบาดเจ็บทางกายภาพโดยตรง?",
    "options": {
      "A": "Renal fascia (Gerota's fascia)",
      "B": "Adipose capsule / Perirenal fat",
      "C": "Parietal peritoneum",
      "D": "Renal capsule (Fibrous capsule)"
    },
    "correctOption": "D",
    "explanation": "Renal capsule เป็นชั้นพังผืดเหนียวชั้นในสุดที่แนบติดกับเนื้อไต ป้องกันการแพร่กระจายของการติดเชื้อ ส่วน Perirenal fat เป็นชั้นกลางช่วยกันกระแทก และ Renal fascia เป็นชั้นนอกสุดช่วยยึดไต",
    "system": "Urinary System",
    "topic": "Protection of the Kidneys",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 15,
    "tags": [
      "renal-capsule",
      "protective-layers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-009",
    "questionText": "ชั้น Adipose capsule (Perirenal fat) ที่หุ้มไตมีหน้าที่สำคัญที่สุดคืออะไร?",
    "options": {
      "A": "เป็นเบาะไขมันรองรับการกระแทกและช่วยยึดไตให้อยู่กับที่ (Cushion & hold in place)",
      "B": "ช่วยดูดซึมปัสสาวะที่รั่วซึม",
      "C": "ผลิตฮอร์โมนกระตุ้นการกรองของโกลเมอรูลัส",
      "D": "ทำหน้าที่เป็นตัวกรองของเสียส่วนเกิน"
    },
    "correctOption": "A",
    "explanation": "Adipose capsule หรือ Perirenal fat ทำหน้าที่เป็น cushion ดูดซับแรงกระแทกและช่วยยึดไตไว้ใน retroperitoneal space ไม่ให้เลื่อนหลุด (Renal ptosis)",
    "system": "Urinary System",
    "topic": "Protection of the Kidneys",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 15,
    "tags": [
      "perirenal-fat",
      "protective-layers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-010",
    "questionText": "โครงสร้างที่เว้าอยู่ทางด้านในของไต ซึ่งเป็นทางผ่านเข้าออกของหลอดเลือด ท่อไต และเส้นประสาท เรียกว่าอะไร?",
    "options": {
      "A": "Renal pelvis",
      "B": "Renal hilum / Hilus",
      "C": "Renal sinus",
      "D": "Renal column"
    },
    "correctOption": "B",
    "explanation": "Renal hilum (ขั้วไต) เป็นรอยเว้าทางด้าน medial surface ของไต เป็นช่องทางให้ Renal artery, Renal vein, Ureter, น้ำเหลือง และเส้นประสาทเข้าออก",
    "system": "Urinary System",
    "topic": "Surface anatomy of the Kidney",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 17,
    "tags": [
      "renal-hilum",
      "gross-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-011",
    "questionText": "ที่บริเวณ Renal hilum ลำดับโครงสร้างหลักจากด้านหน้าไปด้านหลัง (Anterior to Posterior) ข้อใดเรียงถูกต้อง?",
    "options": {
      "A": "Renal artery -> Renal vein -> Renal pelvis",
      "B": "Renal pelvis -> Renal artery -> Renal vein",
      "C": "Renal vein -> Renal artery -> Renal pelvis (V-A-P)",
      "D": "Renal vein -> Renal pelvis -> Renal artery"
    },
    "correctOption": "C",
    "explanation": "ลำดับโครงสร้างที่ผ่านเข้าออกขั้วไตจากหน้าไปหลังคือ V-A-P: หลอดเลือดดำ Renal vein อยู่หน้าสุด ตามด้วยหลอดเลือดแดง Renal artery อยู่ตรงกลาง และกรวยไต Renal pelvis อยู่หลังสุด",
    "system": "Urinary System",
    "topic": "Surface anatomy of the Kidney",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 17,
    "tags": [
      "renal-hilum",
      "anatomical-relationship"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-012",
    "questionText": "เนื้อไตส่วนใน (Inner region) ที่มีลักษณะเป็นรูปสามเหลี่ยมพีระมิด (Renal pyramids) มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Renal cortex",
      "B": "Renal sinus",
      "C": "Renal columns",
      "D": "Renal medulla"
    },
    "correctOption": "D",
    "explanation": "Renal medulla คือเนื้อไตชั้นใน ประกอบด้วย Renal pyramids ประมาณ 8-18 อัน ซึ่งมีฐานชี้ออกด้านนอกและยอดแหลมชี้เข้าด้านใน",
    "system": "Urinary System",
    "topic": "Internal Structure of the Kidney",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 18,
    "tags": [
      "renal-medulla",
      "internal-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-013",
    "questionText": "ส่วนของเนื้อไตชั้นนอกที่แทรกตัวลงมาระหว่าง Renal pyramids เรียกว่าอะไร?",
    "options": {
      "A": "Renal columns (Columns of Bertin)",
      "B": "Renal papilla",
      "C": "Minor calyces",
      "D": "Major calyces"
    },
    "correctOption": "A",
    "explanation": "Renal columns (of Bertin) เป็นส่วนยื่นของ Renal cortex ที่แทรกตัวลงมาระหว่าง Renal pyramids ในชั้น medulla เพื่อเป็นทางผ่านของหลอดเลือด Interlobar vessels",
    "system": "Urinary System",
    "topic": "Internal Structure of the Kidney",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 24,
    "tags": [
      "renal-columns",
      "cortex"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-014",
    "questionText": "ยอดแหลมของ Renal pyramid ที่เปิดเข้าสู่ Minor calyx มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Renal pelvis",
      "B": "Renal papilla",
      "C": "Renal sinus",
      "D": "Glomerulus"
    },
    "correctOption": "B",
    "explanation": "Renal papilla คือยอดแหลม (apex) ของ renal pyramid ซึ่งมีรูเปิดของ papillary ducts (Ducts of Bellini) หยดน้ำปัสสาวะเข้าสู่ minor calyx",
    "system": "Urinary System",
    "topic": "Internal Structure of the Kidney",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 24,
    "tags": [
      "renal-papilla",
      "minor-calyx"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-015",
    "questionText": "ทิศทางการไหลของปัสสาวะภายในไตหลังจากออกจาก Papillary duct ข้อใดเรียงลำดับถูกต้อง?",
    "options": {
      "A": "Renal pelvis -> Major calyx -> Minor calyx -> Ureter",
      "B": "Major calyx -> Minor calyx -> Renal pelvis -> Ureter",
      "C": "Minor calyx -> Major calyx -> Renal pelvis -> Ureter",
      "D": "Minor calyx -> Renal pelvis -> Major calyx -> Ureter"
    },
    "correctOption": "C",
    "explanation": "น้ำปัสสาวะไหลจาก Papillary ducts -> Minor calyces (รับปัสสาวะจาก papilla) -> รวมกันเป็น Major calyces (2-3 อัน) -> เทรวมกันที่ Renal pelvis (กรวยไต) -> ไหลลงสู่ Ureter",
    "system": "Urinary System",
    "topic": "Internal Structure of the Kidney",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 24,
    "tags": [
      "urine-flow",
      "calyces"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-016",
    "questionText": "หลอดเลือดแดงใดที่โค้งพาดอยู่บริเวณรอยต่อระหว่าง Renal cortex และ Renal medulla (Corticomedullary junction)?",
    "options": {
      "A": "Interlobar artery",
      "B": "Segmental artery",
      "C": "Cortical radiate (Interlobular) artery",
      "D": "Arcuate artery"
    },
    "correctOption": "D",
    "explanation": "Arcuate artery เป็นแขนงที่โค้งพาด (arch) อยู่เหนือฐานของ Renal pyramid บริเวณรอยต่อระหว่าง cortex และ medulla",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "arcuate-artery",
      "renal-vasculature"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-017",
    "questionText": "หลอดเลือดใดที่นำเลือดเข้าสู่กระจุกร่างแหหลอดเลือดฝอย Glomerulus โดยตรง?",
    "options": {
      "A": "Afferent arteriole",
      "B": "Efferent arteriole",
      "C": "Peritubular capillary",
      "D": "Vasa recta"
    },
    "correctOption": "A",
    "explanation": "Afferent arteriole (หลอดเลือดแดงขาเข้า) นำเลือดเข้าสู่ Glomerulus เพื่อกรองน้ำและสารต่างๆ ส่วน Efferent arteriole นำเลือดที่ผ่านการกรองแล้วออกจาก Glomerulus",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "afferent-arteriole",
      "glomerulus"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-018",
    "questionText": "เส้นเลือดฝอยชนิดพิเศษที่มีลักษณะยาวขนานไปกับ Loop of Henle ของ Juxtamedullary nephron ในชั้น Medulla เรียกว่าอะไร?",
    "options": {
      "A": "Peritubular capillaries",
      "B": "Vasa recta",
      "C": "Glomerular capillaries",
      "D": "Interlobular veins"
    },
    "correctOption": "B",
    "explanation": "Vasa recta เป็นเครือข่ายหลอดเลือดฝอยทรงตรงยาวที่แยกออกมาจาก efferent arteriole ของ juxtamedullary nephrons ทำหน้าที่รักษาระดับความเข้มข้นใน medulla (Countercurrent exchanger)",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 30,
    "tags": [
      "vasa-recta",
      "nephron"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-019",
    "questionText": "หน่วยการทำงานที่เล็กที่สุดของไต (Structural and functional unit of the kidney) มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Renal papilla",
      "B": "Neuron",
      "C": "Nephron",
      "D": "Glomerulus"
    },
    "correctOption": "C",
    "explanation": "Nephron (หน่วยไต) คือหน่วยทำงานหลักทางโครงสร้างและหน้าที่ของไต โดยไตแต่ละข้างมีเนฟรอนประมาณ 1 - 1.25 ล้านหน่วย",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 30,
    "tags": [
      "nephron",
      "functional-unit"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-020",
    "questionText": "Renal corpuscle (Malpighian corpuscle) ประกอบด้วยโครงสร้างหลัก 2 ส่วนใด?",
    "options": {
      "A": "Proximal tubule และ Distal tubule",
      "B": "Afferent arteriole และ Efferent arteriole",
      "C": "Loop of Henle และ Collecting duct",
      "D": "Glomerulus และ Bowman's capsule"
    },
    "correctOption": "D",
    "explanation": "Renal corpuscle ประกอบด้วย Glomerulus (กระจุกหลอดเลือดฝอย) และ Bowman's capsule (Glomerular capsule กระเปาะหุ้มสองชั้น) ทำหน้าที่กรองพลาสมา",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 30,
    "tags": [
      "renal-corpuscle",
      "bowmans-capsule"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-021",
    "questionText": "เซลล์ชนิดพิเศษที่มีแขนงยื่นคล้ายเท้า (Pedicels) โอบรอบร่างแหหลอดเลือดฝอย Glomerulus ในชั้น Visceral layer ของ Bowman's capsule คือเซลล์ใด?",
    "options": {
      "A": "Podocytes",
      "B": "Mesangial cells",
      "C": "Macula densa cells",
      "D": "Principal cells"
    },
    "correctOption": "A",
    "explanation": "Podocytes เป็น modified epithelial cells อยู่ที่ visceral layer ของ Bowman's capsule มี pedicels ประสานกันเกิดเป็น filtration slits ช่วยกรองสารโมเลกุลใหญ่ เช่น โปรตีน ไม่ให้รั่วลงปัสสาวะ",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 31,
    "tags": [
      "podocytes",
      "filtration-membrane"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-022",
    "questionText": "เนฟรอนชนิดใดที่มีสัดส่วนประมาณ 85% ของเนฟรอนทั้งหมด มี Loop of Henle สั้น และวางตัวส่วนใหญ่อยู่ในชั้น Renal cortex?",
    "options": {
      "A": "Juxtamedullary nephrons",
      "B": "Cortical nephrons",
      "C": "Medullary nephrons",
      "D": "Collecting nephrons"
    },
    "correctOption": "B",
    "explanation": "Cortical nephrons พบได้ประมาณ 85% มี renal corpuscle อยู่ในชั้นนอกของ cortex และมี loop of Henle สั้นจุ่มลงใน medulla เพียงเล็กน้อย",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 30,
    "tags": [
      "cortical-nephron",
      "types-of-nephrons"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-023",
    "questionText": "Juxtamedullary nephrons มีความสำคัญอย่างยิ่งต่อการทำงานข้อใดของร่างกาย?",
    "options": {
      "A": "การสร้างฮอร์โมนเรนินในปริมาณสูง",
      "B": "การสร้างสารหล่อลื่นในท่อไต",
      "C": "การสร้างความเข้มข้นของปัสสาวะ (Urine concentration) ผ่าน Countercurrent mechanism",
      "D": "การกำจัดเม็ดเลือดแดงที่เสื่อมสภาพ"
    },
    "correctOption": "C",
    "explanation": "Juxtamedullary nephrons (มีประมาณ 15%) มี Loop of Henle ยาวลึกเข้าไปใน renal pyramid ทำงานร่วมกับ Vasa recta เพื่อสร้าง Medullary osmotic gradient สำคัญต่อการดูดกลับน้ำและทำให้น้ำปัสสาวะเข้มข้น",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 30,
    "tags": [
      "juxtamedullary-nephron",
      "urine-concentration"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-024",
    "questionText": "เยื่อบุผิวชนิดใดที่พบบริเวณ Proximal Convoluted Tubule (PCT) และมี Dense microvilli (Brush border) หนาแน่น?",
    "options": {
      "A": "Simple squamous epithelium",
      "B": "Transitional epithelium",
      "C": "Stratified columnar epithelium",
      "D": "Simple cuboidal epithelium with brush border"
    },
    "correctOption": "D",
    "explanation": "PCT บุด้วย Simple cuboidal epithelium ที่มี microvilli จำนวนมาก (brush border) ช่วยเพิ่มพื้นที่ผิวในการดูดซึมสารกลับ (Reabsorption) ได้อย่างมีประสิทธิภาพสูงสุด",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 32,
    "tags": [
      "pct",
      "histology",
      "brush-border"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-025",
    "questionText": "สารชนิดใดที่ถูกดูดกลับอย่างสมบูรณ์ (100% Reabsorption) ภายใต้สภาวะปกติที่บริเวณ Proximal Convoluted Tubule (PCT)?",
    "options": {
      "A": "Glucose และ Amino acids",
      "B": "Urea และ Uric acid",
      "C": "Creatinine และ Bilirubin",
      "D": "Potassium และ Hydrogen ion"
    },
    "correctOption": "A",
    "explanation": "ในภาวะปกติ Glucose และ Amino acids จะถูกดูดกลับเข้ากระแสเลือดเกือบ 100% ที่ PCT ผ่านทางโซเดียมโคทรานสปอร์ตเตอร์ (SGLT) หากไม่เกิน Renal threshold",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 32,
    "tags": [
      "pct-reabsorption",
      "glucose"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-026",
    "questionText": "ส่วนใดของ Loop of Henle ที่ยอมให้น้ำซึมผ่านได้ดี (Permeable to water) แต่แทบไม่ยอมให้เกลือแร่หรือตัวถูกละลายผ่าน?",
    "options": {
      "A": "Ascending limb thick segment (ขาขึ้นส่วนหนา)",
      "B": "Descending limb (ขาลง)",
      "C": "Ascending limb thin segment (ขาขึ้นส่วนบาง)",
      "D": "Macula densa"
    },
    "correctOption": "B",
    "explanation": "Descending limb of loop of Henle ยอมให้น้ำซึมผ่านออกทาง Aquaporin ได้ดีมาก แต่ไม่ยอมให้เกลือไอออนผ่าน ส่งผลให้ของเหลวภายในท่อยิ่งไหลลงยิ่งเข้มข้นขึ้นเรื่อยๆ",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 33,
    "tags": [
      "loop-of-henle",
      "descending-limb"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-027",
    "questionText": "Ascending limb (thick segment) ของ Loop of Henle มีลักษณะการทำงานเฉพาะข้อใด?",
    "options": {
      "A": "ยอมให้น้ำซึมผ่านออกได้อย่างอิสระตามความเข้มข้น",
      "B": "ทำหน้าที่หลั่งกรดยูเรียกลับเข้าท่อไต",
      "C": "ไม่ยอมให้น้ำผ่าน (Impermeable to water) แต่ปั๊ม Na+, K+, Cl- ออกสู่เนื้อเยื่อภายนอก",
      "D": "ทำหน้าที่กรองโปรตีนโมเลกุลขนาดใหญ่"
    },
    "correctOption": "C",
    "explanation": "Thick ascending limb ไม่ยอมให้น้ำซึมผ่าน (water impermeable) แต่มี Na-K-2Cl cotransporter ดึงไอออนออกอย่างแข็งขัน ทำให้ของเหลวที่ผ่านออกจากส่วนนี้มีความเจือจางลง",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 34,
    "tags": [
      "ascending-limb",
      "electrolyte-transport"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-028",
    "questionText": "Distal Convoluted Tubule (DCT) แตกต่างจาก PCT ทางเนื้อเยื่อวิทยา (Histology) อย่างไร?",
    "options": {
      "A": "DCT มีชั้น Microvilli หนาแน่นกว่า PCT",
      "B": "DCT บุด้วย Simple squamous แต่ PCT เป็น Stratified cuboidal",
      "C": "DCT ไม่มีนิวเคลียสของเซลล์",
      "D": "DCT มีเซลล์ขนาดเล็กกว่า ไม่มี Brush border ทำให้เห็น Lumen กว้างและเรียบชัดเจนกว่า"
    },
    "correctOption": "D",
    "explanation": "DCT บุด้วย Simple cuboidal epithelium แต่ไม่มี brush border (short/sparse microvilli) ทำให้ช่องภายในท่อ (lumen) ดูกว้างและขอบเรียบกว่า PCT ชัดเจนเมื่อส่องกล้องจุลทรรศน์",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 32,
    "tags": [
      "dct",
      "histology-comparison"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-029",
    "questionText": "โครงสร้าง Juxtaglomerular Apparatus (JGA) ประกอบด้วยกลุ่มเซลล์สำคัญ 3 ชนิด ข้อใดถูกต้อง?",
    "options": {
      "A": "Macula densa, Juxtaglomerular (JG) cells, Extraglomerular mesangial cells",
      "B": "Podocytes, Endothelial cells, Fibroblasts",
      "C": "Principal cells, Intercalated cells, Parietal cells",
      "D": "Chief cells, Parietal cells, Goblet cells"
    },
    "correctOption": "A",
    "explanation": "JGA ประกอบด้วย 1) Macula densa ในท่อ DCT 2) Juxtaglomerular / Granular cells ในผนัง afferent arteriole และ 3) Extraglomerular mesangial cells (Lacis cells)",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 41,
    "tags": [
      "jga",
      "components"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-030",
    "questionText": "Macula densa cells เป็นเซลล์ที่ดัดแปลงมาจากผนังของท่อส่วนใด และทำหน้าที่อะไร?",
    "options": {
      "A": "ดัดแปลงมาจาก PCT ทำหน้าที่ดูดซึมกลูโคส",
      "B": "ดัดแปลงมาจากผนัง DCT ทำหน้าที่ตรวจวัดความเข้มข้นของโซเดียมคลอไรด์ (Osmoreceptor/Chemoreceptor)",
      "C": "ดัดแปลงมาจาก Loop of Henle ทำหน้าที่ขับน้ำ",
      "D": "ดัดแปลงมาจาก Collecting duct ทำหน้าที่ขับยูเรีย"
    },
    "correctOption": "B",
    "explanation": "Macula densa เป็นกลุ่มเซลล์ทรงสูงหนาแน่นในผนังของท่อ Distal Convoluted Tubule บริเวณที่มาแตะกับ vascular pole ทำหน้าที่รับรู้การเปลี่ยนแปลงความเข้มข้นของ NaCl และอัตราการไหลของ filtrate",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 42,
    "tags": [
      "macula-densa",
      "chemoreceptor"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-031",
    "questionText": "Juxtaglomerular (JG) cells ดัดแปลงมาจากเซลล์ชนิดใดในผนังของหลอดเลือด Afferent arteriole?",
    "options": {
      "A": "Connective tissue fibroblasts",
      "B": "Endothelial cells",
      "C": "Modified smooth muscle cells",
      "D": "Adipocytes"
    },
    "correctOption": "C",
    "explanation": "JG cells เป็นเซลล์กล้ามเนื้อเรียบ (smooth muscle cells) ที่ดัดแปลงตัวใน tunica media ของหลอดเลือดแดงขาเข้า (afferent arteriole) มี secretory granules บรรจุเอนไซม์ Renin",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 42,
    "tags": [
      "jg-cells",
      "smooth-muscle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-032",
    "questionText": "กระบวนการสร้างปัสสาวะ (Formation of Urine) ประกอบด้วย 3 ขั้นตอนสำคัญตามข้อใด?",
    "options": {
      "A": "Filtration, Digestion, Excretion",
      "B": "Hydrolysis, Decarboxylation, Oxidation",
      "C": "Diffusion, Osmosis, Active transport",
      "D": "Glomerular filtration, Tubular reabsorption, Tubular secretion"
    },
    "correctOption": "D",
    "explanation": "การสร้างปัสสาวะประกอบด้วย 3 กระบวนการหลัก ได้แก่ 1) Glomerular filtration (การกรองที่โกลเมอรูลัส) 2) Tubular reabsorption (การดูดซึมกลับที่ท่อไต) และ 3) Tubular secretion (การหลั่งสารเข้าสู่ท่อไต)",
    "system": "Urinary System",
    "topic": "The Formation of Urine",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 45,
    "tags": [
      "urine-formation",
      "three-processes"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-033",
    "questionText": "ในสภาวะปกติ สิ่งใดไม่ควรถูกกรองผ่าน Glomerular filtration membrane ออกมาอยู่ใน Bowman's capsule?",
    "options": {
      "A": "Plasma proteins (Albumin) และ เม็ดเลือดแดง (RBCs)",
      "B": "Sodium และ Potassium ions",
      "C": "Glucose และ กรดอะมิโน",
      "D": "Water และ Urea"
    },
    "correctOption": "A",
    "explanation": "เยื่อกรองโกลเมอรูลัสมีประจุลบและรูขนาดเล็ก (filtration slits) จึงกั้นไม่ให้เซลล์เม็ดเลือดและโปรตีนขนาดใหญ่ เช่น Albumin หลุดออกมา หากตรวจพบในปัสสาวะถือเป็นภาวะผิดปกติ (Proteinuria / Hematuria)",
    "system": "Urinary System",
    "topic": "The Formation of Urine",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 4,
    "tags": [
      "filtration-membrane",
      "proteinuria"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-034",
    "questionText": "อัตราการกรองของไตเฉลี่ยในผู้ใหญ่ปกติ (Glomerular Filtration Rate: GFR) มีค่าประมาณเท่าใด?",
    "options": {
      "A": "10 - 20 mL/min",
      "B": "120 - 125 mL/min (ประมาณ 180 ลิตรต่อวัน)",
      "C": "500 - 600 mL/min",
      "D": "1 - 2 L/min"
    },
    "correctOption": "B",
    "explanation": "GFR เฉลี่ยปกติอยู่ที่ประมาณ 125 mL/min หรือประมาณ 180 ลิตรต่อวัน โดยน้ำกรองกว่า 99% จะถูกดูดซึมกลับเข้าสู่ร่างกาย เหลือขับออกเป็นปัสสาวะเพียง 1.5 - 2 ลิตรต่อวัน",
    "system": "Urinary System",
    "topic": "The Formation of Urine",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 45,
    "tags": [
      "gfr",
      "filtration-rate"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-035",
    "questionText": "สารพิษ ยา (เช่น Penicillin) และ Hydrogen ion (H+) ส่วนเกิน ถูกขับออกจากกระแสเลือดเข้าสู่ท่อไตผ่านกระบวนการใด?",
    "options": {
      "A": "Glomerular filtration",
      "B": "Tubular reabsorption",
      "C": "Tubular secretion (การหลั่งเข้าสู่ท่อไต)",
      "D": "Passive osmosis"
    },
    "correctOption": "C",
    "explanation": "Tubular secretion เป็นการขนส่งสารจาก peritubular capillaries เข้าสู่ lumen ของท่อไตโดยตรง เพื่อขับของเสียส่วนเกิน สารพิษ ยาบางชนิด และปรับสมดุลกรด-ด่างโดยหลั่ง H+ และ K+",
    "system": "Urinary System",
    "topic": "The Formation of Urine",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 45,
    "tags": [
      "tubular-secretion",
      "excretion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-036",
    "questionText": "ท่อไต (Ureter) มีความยาวเฉลี่ยประมาณเท่าใด และทำหน้าที่อะไร?",
    "options": {
      "A": "ความยาว 5 - 10 cm ทำหน้าที่กรองปัสสาวะ",
      "B": "ความยาว 12 - 15 cm ทำหน้าที่หลั่งฮอร์โมนเรนิน",
      "C": "ความยาว 40 - 50 cm ทำหน้าที่กักเก็บปัสสาวะ",
      "D": "ความยาว 25 - 30 cm ทำหน้าที่ลำเลียงปัสสาวะจากกรวยไตสู่กระเพาะปัสสาวะ"
    },
    "correctOption": "D",
    "explanation": "Ureter เป็นท่อยาวประมาณ 25-30 cm ทอดตัวในช่อง retroperitoneal เชื่อมระหว่าง renal pelvis ของไตกับ urinary bladder",
    "system": "Urinary System",
    "topic": "Ureters",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 47,
    "tags": [
      "ureter",
      "dimensions"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-037",
    "questionText": "เยื่อบุผิวชั้นในสุด (Mucosa) ของท่อไต (Ureter) และกระเพาะปัสสาวะ เป็นเนื้อเยื่อชนิดใด?",
    "options": {
      "A": "Transitional epithelium (Urothelium)",
      "B": "Stratified squamous keratinized epithelium",
      "C": "Simple columnar epithelium",
      "D": "Pseudostratified ciliated columnar epithelium"
    },
    "correctOption": "A",
    "explanation": "Transitional epithelium (Urothelium) เป็นเนื้อเยื่อบุผิวชนิดพิเศษที่สามารถยืดขยายและคืนรูปได้ตามปริมาณของเหลว พร้อมป้องกันไม่ให้น้ำปัสสาวะซึมกลับเข้าสู่เนื้อเยื่อ",
    "system": "Urinary System",
    "topic": "Ureter- Cross Section",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 49,
    "tags": [
      "transitional-epithelium",
      "urothelium",
      "ureter"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-038",
    "questionText": "ชั้นกล้ามเนื้อเรียบของท่อไต (Muscularis layer of Ureter) มีการจัดเรียงตัวของเส้นใยกล้ามเนื้ออย่างไรใน 2/3 ส่วนบน?",
    "options": {
      "A": "ชั้นในเป็นวงกลม (Inner circular) ชั้นนอกเป็นแนวยาว (Outer longitudinal)",
      "B": "ชั้นในเป็นแนวยาว (Inner longitudinal) ชั้นนอกเป็นวงกลม (Outer circular)",
      "C": "มีกล้ามเนื้อโครงร่างเรียงขนานกัน 3 ชั้น",
      "D": "มีเพียงกล้ามเนื้อเฉียงชั้นเดียว"
    },
    "correctOption": "B",
    "explanation": "ต่างจากทางเดินอาหาร! ท่อไต (Ureter) มีการเรียงตัวของชั้นกล้ามเนื้อเป็น Inner longitudinal (ชั้นในแนวยาว) และ Outer circular (ชั้นนอกวงกลม) เพื่อบีบตัวแบบ Peristalsis ผลักดันน้ำปัสสาวะลงสู่กระเพาะปัสสาวะ",
    "system": "Urinary System",
    "topic": "Ureter- Cross Section",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 49,
    "tags": [
      "ureter-muscle",
      "histology"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-039",
    "questionText": "กลไกทางกายวิภาคใดที่ช่วยป้องกันไม่ให้น้ำปัสสาวะไหลย้อนกลับ (Vesicoureteral reflux) จากกระเพาะปัสสาวะขึ้นสู่ท่อไต?",
    "options": {
      "A": "มีลิ้นเปิดปิดชนิดกล้ามเนื้อลาย (Skeletal sphincter)",
      "B": "แรงดึงดูดของโลกเพียงอย่างเดียว",
      "C": "ท่อไตแทงทะลุเข้าผนังกระเพาะปัสสาวะในแนวเฉียง (Oblique angle) ทำให้แรงดันปัสสาวะในกระเพาะบีบปิดปากท่อไตตามธรรมชาติ",
      "D": "การมีต่อมเมือกหนาแน่นปิดกั้นปากท่อ"
    },
    "correctOption": "C",
    "explanation": "ท่อไตแทงเข้าผนังกระเพาะปัสสาวะในแนวเฉียง (Oblique angle) เมื่อกระเพาะปัสสาวะมีน้ำปัสสาวะเต็ม แรงดันภายในจะกดเบียดผนังท่อไตให้แบนลง ทำหน้าที่เป็นเสมือนวาล์วธรรมชาติป้องกันการไหลย้อน",
    "system": "Urinary System",
    "topic": "URETERS",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 51,
    "tags": [
      "ureter-valve",
      "vesicoureteral-reflux"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-040",
    "questionText": "ตำแหน่งใดต่อไปนี้เป็นหนึ่งในจุดตีบแคบตามธรรมชาติ 3 จุดของท่อไต (Sites of ureteric constriction) ที่พบนิ่วอุดตันบ่อยที่สุด?",
    "options": {
      "A": "บริเวณหลังต่อมหมวกไต",
      "B": "บริเวณที่ท่อไตพาดผ่านหลอดเลือด Renal vein",
      "C": "บริเวณกึ่งกลางไต",
      "D": "Ureteropelvic junction (รอยต่อระหว่างกรวยไตกับท่อไต)"
    },
    "correctOption": "D",
    "explanation": "จุดตีบแคบตามธรรมชาติ 3 จุดของท่อไต ได้แก่ 1) Ureteropelvic junction (UPJ) 2) บริเวณที่พาดข้าม Iliac vessels ที่ pelvic brim และ 3) Ureterovesical junction (UVJ บริเวณทะลุเข้ากระเพาะปัสสาวะ)",
    "system": "Urinary System",
    "topic": "URETERS",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 54,
    "tags": [
      "ureter-constriction",
      "renal-calculi"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-041",
    "questionText": "บริเวณรูปสามเหลี่ยมเรียบที่ฐานของกระเพาะปัสสาวะ (Base of bladder) ซึ่งมักพบการอักเสบติดเชื้อได้บ่อย มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Trigone",
      "B": "Renal pelvis",
      "C": "Detrusor field",
      "D": "Apex"
    },
    "correctOption": "A",
    "explanation": "Trigone คือบริเวณรูปสามเหลี่ยมที่มีผิวเรียบ (ไม่มี rugae) อยู่ที่ฐานกระเพาะปัสสาวะ กำหนดขอบเขตโดยรูเปิดท่อไต 2 รู (Ureteric orifices) และรูเปิดท่อปัสสาวะ 1 รู (Internal urethral orifice)",
    "system": "Urinary System",
    "topic": "Bladder",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 63,
    "tags": [
      "trigone",
      "urinary-bladder"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-042",
    "questionText": "กล้ามเนื้อเรียบ 3 ชั้นที่สานประสานกันเป็นผนังกระเพาะปัสสาวะ ทำหน้าที่บีบไล่น้ำปัสสาวะออก มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Dartos muscle",
      "B": "Detrusor muscle",
      "C": "Cremaster muscle",
      "D": "Bulbospongiosus muscle"
    },
    "correctOption": "B",
    "explanation": "Detrusor muscle เป็นกล้ามเนื้อเรียบ 3 ชั้น (inner longitudinal, middle circular, outer longitudinal) หดตัวพร้อมกันภายใต้การควบคุมของระบบประสาท Parasympathetic เพื่อขับปัสสาวะ",
    "system": "Urinary System",
    "topic": "Bladder- structure of",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "detrusor-muscle",
      "bladder-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-043",
    "questionText": "รอยพับของเยื่อเมือก (Rugae) ในกระเพาะปัสสาวะมีประโยชน์อย่างไร?",
    "options": {
      "A": "ช่วยในการดูดซึมสารอาหารกลับเข้าสู่กระแสเลือด",
      "B": "ช่วยกรองแบคทีเรียไม่ให้เข้าสู่ท่อปัสสาวะ",
      "C": "ช่วยให้ผนังกระเพาะปัสสาวะยืดขยายออกได้เมื่อมีปริมาณน้ำปัสสาวะเพิ่มขึ้น (Expand without excessive pressure)",
      "D": "ทำหน้าที่สร้างสารหล่อลื่นป้องกันการติดเชื้อ"
    },
    "correctOption": "C",
    "explanation": "Rugae คือรอยพับย่นของเยื่อบุผิวเมื่อกระเพาะปัสสาวะว่างเปล่า และจะคลายตัวราบเรียบลงเมื่อกระเพาะปัสสาวะขยายตัวเพื่อกักเก็บน้ำปัสสาวะได้มากถึง 500-800 mL",
    "system": "Urinary System",
    "topic": "Bladder- structure of",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "rugae",
      "bladder-capacity"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-044",
    "questionText": "หูรูดท่อปัสสาวะชนิดใดที่อยู่ภายใต้การควบคุมของอำนาจจิตใจ (Voluntary control)?",
    "options": {
      "A": "Internal urethral sphincter",
      "B": "Ureteric sphincter",
      "C": "Detrusor sphincter",
      "D": "External urethral sphincter"
    },
    "correctOption": "D",
    "explanation": "External urethral sphincter ประกอบด้วยกล้ามเนื้อลาย (skeletal muscle) อยู่บริเวณ Urogenital diaphragm ถูกควบคุมด้วย somatic nervous system (Pudendal nerve) จึงอยู่ใต้อำนาจจิตใจ",
    "system": "Urinary System",
    "topic": "Urethra- structure of",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 67,
    "tags": [
      "sphincters",
      "voluntary-control"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-045",
    "questionText": "หูรูด Internal urethral sphincter ประกอบด้วยกล้ามเนื้อชนิดใด และควบคุมโดยระบบประสาทใด?",
    "options": {
      "A": "Smooth muscle ควบคุมโดย Autonomic nervous system (Involuntary)",
      "B": "Skeletal muscle ควบคุมโดย Somatic motor nerve",
      "C": "Cardiac muscle ควบคุมโดย Pacemaker cells",
      "D": "Elastic cartilage ควบคุมโดยฮอร์โมนเอสโตรเจน"
    },
    "correctOption": "A",
    "explanation": "Internal urethral sphincter เป็นกล้ามเนื้อเรียบ (smooth muscle) บริเวณคอกระเพาะปัสสาวะ ควบคุมโดยระบบประสาทอัตโนมัติ (Autonomic) อยู่นอกอำนาจจิตใจ (Involuntary)",
    "system": "Urinary System",
    "topic": "Urethra- structure of",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 67,
    "tags": [
      "internal-sphincter",
      "autonomic-control"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-046",
    "questionText": "ท่อปัสสาวะของผู้หญิง (Female urethra) มีความยาวเฉลี่ยประมาณเท่าใด?",
    "options": {
      "A": "1 - 2 cm",
      "B": "3 - 5 cm (ประมาณ 4 cm)",
      "C": "10 - 12 cm",
      "D": "18 - 20 cm"
    },
    "correctOption": "B",
    "explanation": "Female urethra มีความยาวสั้นเพียง 3 - 5 cm (เฉลี่ยประมาณ 4 cm) ทอดตัวตรงจากคอกระเพาะปัสสาวะมาเปิดที่ vestibule ด้านหน้าต่อช่องคลอด",
    "system": "Urinary System",
    "topic": "Female urethra",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 71,
    "tags": [
      "female-urethra",
      "length"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-047",
    "questionText": "เหตุใดผู้หญิงจึงมีความเสี่ยงต่อการติดเชื้อในระบบทางเดินปัสสาวะ (Urinary Tract Infection: UTI) สูงกว่าผู้ชายอย่างมีนัยสำคัญ?",
    "options": {
      "A": "เพราะกระเพาะปัสสาวะมีขนาดเล็กกว่าผู้ชายครึ่งหนึ่ง",
      "B": "เพราะไม่มีภูมิคุ้มกันในน้ำปัสสาวะ",
      "C": "เพราะท่อปัสสาวะสั้นกว่ามากและรูเปิดอยู่ใกล้ช่องคลอดและทวารหนัก (Short urethra close to anus)",
      "D": "เพราะผู้หญิงไม่มีหูรูดกล้ามเนื้อลาย"
    },
    "correctOption": "C",
    "explanation": "ท่อปัสสาวะสตรีสั้นเพียง ~4 cm และรูเปิดภายนอก (External urethral orifice) อยู่ใกล้ทวารหนักและช่องคลอด ทำให้เชื้อแบคทีเรียประจำถิ่น เช่น E. coli เดินทางย้อนขึ้นสู่กระเพาะปัสสาวะได้ง่ายกว่า",
    "system": "Urinary System",
    "topic": "Female urethra",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 58,
    "tags": [
      "uti",
      "female-anatomy",
      "clinical"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-048",
    "questionText": "ท่อปัสสาวะของผู้ชาย (Male urethra) แบ่งออกเป็น 3 ส่วนตามลำดับจากด้านในสู่ด้านนอกข้อใดถูกต้อง?",
    "options": {
      "A": "Membranous -> Prostatic -> Spongy urethra",
      "B": "Prostatic -> Spongy -> Membranous urethra",
      "C": "Spongy -> Prostatic -> Membranous urethra",
      "D": "Prostatic -> Membranous -> Spongy (Penile) urethra"
    },
    "correctOption": "D",
    "explanation": "ลำดับท่อปัสสาวะชายจากในไปนอก: 1) Prostatic urethra (ทะลุผ่านต่อมลูกหมาก) 2) Membranous urethra (ผ่าน urogenital diaphragm สั้นที่สุด) และ 3) Spongy / Penile urethra (ยาวที่สุด อยู่ใน corpus spongiosum)",
    "system": "Urinary System",
    "topic": "Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "male-urethra",
      "urethral-regions"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-049",
    "questionText": "ส่วนใดของท่อปัสสาวะชายที่มีความยาวมากที่สุดและทอดผ่านเนื้อเยื่อแข็งตัวชนิด Corpus spongiosum ขององคชาต?",
    "options": {
      "A": "Spongy (Penile) urethra",
      "B": "Membranous urethra",
      "C": "Prostatic urethra",
      "D": "Navicular urethra"
    },
    "correctOption": "A",
    "explanation": "Spongy (Penile) urethra มีความยาวประมาณ 15 cm ทอดผ่าน corpus spongiosum ไปจนถึงปลาย glans penis เป็นส่วนที่ยาวที่สุดของท่อปัสสาวะชาย",
    "system": "Urinary System",
    "topic": "Urethra",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "spongy-urethra",
      "penis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-050",
    "questionText": "ส่วนใดของท่อปัสสาวะชายที่เป็นทางผ่านร่วมกันของทั้งน้ำปัสสาวะ (Urine) และน้ำอสุจิ (Semen) โดยมี Ejaculatory ducts มาเปิดเข้า?",
    "options": {
      "A": "Membranous urethra",
      "B": "Prostatic urethra",
      "C": "Spongy urethra",
      "D": "Ureteric orifice"
    },
    "correctOption": "B",
    "explanation": "Prostatic urethra ผ่านกลางต่อมลูกหมาก มีท่อหลั่งอสุจิ (Ejaculatory ducts) และต่อมลูกหมากเปิดเข้ามา จึงเป็นจุดบรรจบแรกของระบบสืบพันธุ์และระบบขับถ่ายปัสสาวะในเพศชาย",
    "system": "Urinary System",
    "topic": "Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "prostatic-urethra",
      "male-reproductive-junction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-051",
    "questionText": "สภาวะใดกระตุ้นให้ไตหลั่งฮอร์โมน Erythropoietin (EPO) ออกมาสู่กระแสเลือดมากที่สุด?",
    "options": {
      "A": "ภาวะความดันโลหิตสูงรุนแรง (Severe hypertension)",
      "B": "ภาวะระดับน้ำตาลในเลือดสูง (Hyperglycemia)",
      "C": "ภาวะออกซิเจนในเลือดต่ำ (Hypoxia / low tissue pO2)",
      "D": "ภาวะระดับแคลเซียมในเลือดสูง (Hypercalcemia)"
    },
    "correctOption": "C",
    "explanation": "Hypoxia (ภาวะเนื้อเยื่อขาดออกซิเจน เช่น เลือดจาง หรือขึ้นที่สูง) จะกระตุ้น renal interstitial cells ให้สังเคราะห์และหลั่ง EPO เพื่อเพิ่มการสร้างเม็ดเลือดแดง",
    "system": "Urinary System",
    "topic": "Hormones of the Kidney",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "epo",
      "hypoxia"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-052",
    "questionText": "การควบคุมสมดุลกรด-ด่าง (Acid-Base Balance) ของไตทำได้โดยกลไกใดต่อไปนี้?",
    "options": {
      "A": "การขับเอนไซม์อะไมเลสออกทางปัสสาวะ",
      "B": "การสลายกรดยูริกในชั้นเมดัลลา",
      "C": "การควบคุมระดับกลูโคสในท่อไต",
      "D": "การหลั่งหรือดูดกลับไฮโดรเจนไอออน (H+) และไบคาร์บอเนต (HCO3-)"
    },
    "correctOption": "D",
    "explanation": "ไตช่วยรักษา pH ของเลือดให้อยู่ที่ 7.35-7.45 โดยการหลั่ง H+ ทิ้งในปัสสาวะ และดูดซึมหรือสังเคราะห์ HCO3- (Bicarbonate buffer) กลับคืนสู่กระแสเลือด",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 3,
    "tags": [
      "acid-base",
      "ph-regulation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-053",
    "questionText": "โครงสร้างใดต่อไปนี้ไม่จัดเป็นอวัยวะในระบบทางเดินปัสสาวะ (Urinary System)?",
    "options": {
      "A": "Adrenal gland (ต่อมหมวกไต)",
      "B": "Ureter (ท่อไต)",
      "C": "Kidney (ไต)",
      "D": "Urinary bladder (กระเพาะปัสสาวะ)"
    },
    "correctOption": "A",
    "explanation": "Adrenal gland (ต่อมหมวกไต) วางตัวอยู่บนขั้วบนของไตทั้งสองข้าง แต่จัดอยู่ในระบบต่อมไร้ท่อ (Endocrine system) ทางกายวิภาคไม่ได้จัดเป็นอวัยวะในระบบทางเดินปัสสาวะ",
    "system": "Urinary System",
    "topic": "Functions of the Urinary System",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 5,
    "tags": [
      "adrenal-gland",
      "endocrine-vs-urinary"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-054",
    "questionText": "โพรงภายในไต (Cavity) ที่บรรจุ Renal pelvis, Calyces, หลอดเลือด และไขมัน เรียกว่าอะไร?",
    "options": {
      "A": "Renal cortex",
      "B": "Renal sinus",
      "C": "Renal medulla",
      "D": "Renal hilum"
    },
    "correctOption": "B",
    "explanation": "Renal sinus คือช่องว่างหรือโพรงภายในไตที่ต่อเนื่องมาจาก Hilum ภายในบรรจุ Calyces, Pelvis, หลอดเลือดไต และมี Adipose tissue เติมเต็มช่องว่าง",
    "system": "Urinary System",
    "topic": "Surface anatomy of the Kidney",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 17,
    "tags": [
      "renal-sinus",
      "cavity"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-055",
    "questionText": "Renal fascia (Gerota's fascia) มีหน้าที่สำคัญประการใด?",
    "options": {
      "A": "หุ้มกรวยไตเพื่อสร้างน้ำปัสสาวะ",
      "B": "ทำหน้าที่กรองเม็ดเลือดแดง",
      "C": "เป็นชั้นพังผืดหนาด้านนอกสุดที่ช่วยยึดไตและต่อมหมวกไตเข้ากับผนังช่องท้อง (Anchor to abdominal wall)",
      "D": "เป็นเยื่อบุผิวภายในท่อเนฟรอน"
    },
    "correctOption": "C",
    "explanation": "Renal fascia เป็นชั้น dense fibrous connective tissue นอกสุด ยึดไต ต่อมหมวกไต และ perirenal fat ให้อยู่ติดกับ posterior abdominal wall และโครงสร้างข้างเคียง",
    "system": "Urinary System",
    "topic": "Protection of the Kidneys",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 15,
    "tags": [
      "renal-fascia",
      "gerotas-fascia"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-056",
    "questionText": "Renal lobe (พูของไต) ประกอบด้วยโครงสร้างใดบ้าง?",
    "options": {
      "A": "Trigone และ Detrusor muscle",
      "B": "Nephron จำนวน 1,000 หน่วย",
      "C": "Minor calyx และ Major calyx หนึ่งคู่",
      "D": "Renal pyramid หนึ่งอัน ร่วมกับเนื้อเยื่อ Renal cortex ที่คลุมอยู่ด้านบนและ Renal columns ด้านข้าง"
    },
    "correctOption": "D",
    "explanation": "Renal lobe ประกอบด้วย Renal pyramid 1 อัน พร้อมด้วยเนื้อ Cortex ด้านบน และเนื้อ Columns of Bertin ครึ่งหนึ่งของแต่ละข้างที่ล้อมรอบพีระมิดนั้น",
    "system": "Urinary System",
    "topic": "Internal Structure of the Kidney",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 24,
    "tags": [
      "renal-lobe",
      "lobes-of-kidney"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-057",
    "questionText": "หลอดเลือดแดง Segmental artery แตกแขนงต่อเป็นหลอดเลือดใดที่วิ่งผ่านระหว่าง Renal pyramids ใน Renal columns?",
    "options": {
      "A": "Interlobar artery",
      "B": "Arcuate artery",
      "C": "Cortical radiate artery",
      "D": "Afferent arteriole"
    },
    "correctOption": "A",
    "explanation": "Segmental arteries จะแตกแขนงเป็น Interlobar arteries ซึ่งวิ่งลอดผ่าน renal columns ขึ้นไปตามด้านข้างของ renal pyramids สู่ corticomedullary junction",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "interlobar-artery",
      "arterial-tree"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-058",
    "questionText": "หลอดเลือด Cortical radiate (Interlobular) artery แตกแขนงให้หลอดเลือดใดเพื่อนำเลือดเข้าสู่โกลเมอรูลัส?",
    "options": {
      "A": "Arcuate artery",
      "B": "Afferent arteriole",
      "C": "Efferent arteriole",
      "D": "Peritubular capillary"
    },
    "correctOption": "B",
    "explanation": "Cortical radiate arteries ที่วิ่งขึ้นในเนื้อเยื่อ cortex จะแตกแขนงเล็กๆ ออกมาเป็น Afferent arterioles โดยตรงเพื่อส่งเลือดเข้า Renal corpuscle",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "cortical-radiate",
      "afferent-arteriole"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-059",
    "questionText": "เหตุใดหลอดเลือด Efferent arteriole จึงมีขนาดเส้นผ่านศูนย์กลางเล็กกว่า Afferent arteriole?",
    "options": {
      "A": "เพื่อลดความดันโลหิตภายในไต",
      "B": "เพื่อป้องกันไม่ให้ปัสสาวะไหลย้อนเข้าเส้นเลือดดำ",
      "C": "เพื่อสร้างความต้านทานและเพิ่มความดันไฮโดรสแตติก (Glomerular hydrostatic pressure) ให้อำนวยต่อการกรองสาร",
      "D": "เพื่อเพิ่มอัตราการขับเกลือแร่ทิ้ง"
    },
    "correctOption": "C",
    "explanation": "ขนาดรูหลอดเลือดขาออก (Efferent) ที่แคบกว่าขาเข้า (Afferent) สร้างความดันไฮโดรสแตติกใน Glomerulus ให้สูงถึง ~55 mmHg ซึ่งสูงกว่าหลอดเลือดฝอยทั่วไป จึงผลักดันน้ำและสารผ่านเยื่อกรองได้ดี",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "hemodynamics",
      "glomerular-pressure"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-060",
    "questionText": "ชั้น Parietal layer ของ Bowman's capsule ประกอบด้วยเนื้อเยื่อบุผิวชนิดใด?",
    "options": {
      "A": "Stratified cuboidal epithelium",
      "B": "Simple columnar epithelium",
      "C": "Transitional epithelium",
      "D": "Simple squamous epithelium"
    },
    "correctOption": "D",
    "explanation": "Parietal layer ของ Bowman's capsule เป็นผนังชั้นนอก ประกอบด้วย Simple squamous epithelium ทำหน้าที่เป็นเปลือกหุ้มรอบ Capsular space",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 31,
    "tags": [
      "bowmans-capsule",
      "parietal-layer",
      "histology"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-061",
    "questionText": "ช่องว่างระหว่างผนังด้านนอก (Parietal layer) และด้านใน (Visceral layer) ของ Bowman's capsule ซึ่งรับน้ำกรองแรกเริ่ม เรียกว่าอะไร?",
    "options": {
      "A": "Capsular space (Bowman's space)",
      "B": "Renal sinus",
      "C": "Lumen of Henle",
      "D": "Medullary cavity"
    },
    "correctOption": "A",
    "explanation": "Capsular space (Bowman's space) คือช่องว่างที่รองรับน้ำกรอง (Glomerular filtrate) ที่ผ่านเยื่อกรองเข้ามา ก่อนไหลต่อเนื่องไปยัง Proximal Convoluted Tubule",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 31,
    "tags": [
      "capsular-space",
      "filtrate"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-062",
    "questionText": "เยื่อกรองของโกลเมอรูลัส (Glomerular Filtration Membrane) ประกอบด้วยโครงสร้าง 3 ชั้น ข้อใดเรียงลำดับจากเลือดสู่แคปซูลได้ถูกต้อง?",
    "options": {
      "A": "Filtration slits of podocytes -> Basement membrane -> Fenestrated endothelium",
      "B": "Fenestrated endothelium -> Basement membrane -> Filtration slits of podocytes",
      "C": "Basement membrane -> Fenestrated endothelium -> Macula densa",
      "D": "Simple cuboidal -> Lamina propria -> Muscularis"
    },
    "correctOption": "B",
    "explanation": "เยื่อกรอง 3 ชั้นเรียงจากฝั่งเลือดในหลอดเลือดฝอยออกสู่ช่องว่างแคปซูล: 1) Fenestrated capillary endothelium 2) Dense basement membrane และ 3) Filtration slits ระหว่าง pedicels ของ Podocytes",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 31,
    "tags": [
      "filtration-membrane",
      "histology-layers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-063",
    "questionText": "เซลล์ชนิดใดใน Collecting duct ที่ทำหน้าที่ควบคุมสมดุลน้ำโดยตอบสนองต่อฮอร์โมน ADH (Antidiuretic Hormone)?",
    "options": {
      "A": "Intercalated cells",
      "B": "Juxtaglomerular cells",
      "C": "Principal cells",
      "D": "Macula densa cells"
    },
    "correctOption": "C",
    "explanation": "Principal cells ใน Collecting duct มีตัวรับต่อ ADH ซึ่งกระตุ้นการแทรก Aquaporin-2 channels เพื่อดูดกลับน้ำ และมีตัวรับต่อ Aldosterone เพื่อดูดกลับ Na+ และขับ K+",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 35,
    "tags": [
      "principal-cells",
      "adh",
      "collecting-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-064",
    "questionText": "เซลล์ชนิดใดใน Collecting duct ที่มีบทบาทสำคัญในการควบคุมสมดุลกรด-ด่างโดยการหลั่ง Hydrogen ion (H+)?",
    "options": {
      "A": "Principal cells",
      "B": "Mesangial cells",
      "C": "Podocytes",
      "D": "Intercalated cells (Type A)"
    },
    "correctOption": "D",
    "explanation": "Intercalated cells (โดยเฉพาะ Type A intercalated cells) ทำหน้าที่ขับ H+ ออกสู่ปัสสาวะผ่าน H+-ATPase และดูดกลับ HCO3- เพื่อแก้ไขภาวะเลือดเป็นกรด (Acidosis)",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 35,
    "tags": [
      "intercalated-cells",
      "acid-base"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-065",
    "questionText": "ท่อรวมปัสสาวะหลายๆ ท่อ (Collecting ducts) จะรวมกันเป็นท่อขนาดใหญ่ที่มีชื่อว่าอะไรก่อนหยดลงสู่ Minor calyx?",
    "options": {
      "A": "Papillary duct (Duct of Bellini)",
      "B": "Distal convoluted tubule",
      "C": "Proximal straight tubule",
      "D": "Segmental duct"
    },
    "correctOption": "A",
    "explanation": "Collecting ducts จะรวมตัวกันที่บริเวณปลายพีระมิดเป็น Papillary ducts (Ducts of Bellini) ซึ่งเปิดออกที่ Renal papilla เพื่อหยดปัสสาวะลง Minor calyx",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 24,
    "tags": [
      "papillary-duct",
      "duct-of-bellini"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-066",
    "questionText": "ฮอร์โมน Aldosterone ออกฤทธิ์หลักที่บริเวณใดของหน่วยไต?",
    "options": {
      "A": "Glomerulus และ Bowman's capsule",
      "B": "Distal Convoluted Tubule (DCT) และ Collecting Duct",
      "C": "Descending limb of loop of Henle",
      "D": "Proximal Convoluted Tubule (PCT)"
    },
    "correctOption": "B",
    "explanation": "Aldosterone (จากต่อมหมวกไตชั้นนอก Zona glomerulosa) ออกฤทธิ์ที่ DCT ส่วนปลายและ Collecting duct กระตุ้นการดูดกลับ Na+ และน้ำ และขับ K+ ทิ้งในปัสสาวะ",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 35,
    "tags": [
      "aldosterone",
      "sodium-reabsorption"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-067",
    "questionText": "ฮอร์โมน Parathyroid Hormone (PTH) ออกฤทธิ์กระตุ้นการดูดกลับของไอออนชนิดใดที่ Distal Convoluted Tubule (DCT)?",
    "options": {
      "A": "Sodium ion (Na+)",
      "B": "Potassium ion (K+)",
      "C": "Calcium ion (Ca2+)",
      "D": "Chloride ion (Cl-)"
    },
    "correctOption": "C",
    "explanation": "PTH ออกฤทธิ์ที่ DCT เพื่อกระตุ้นการดูดซึมแคลเซียม (Ca2+) กลับเข้าสู่กระแสเลือด และยับยั้งการดูดกลับฟอสเฟตที่ PCT เพื่อรักษาระดับแคลเซียมในเลือด",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 32,
    "tags": [
      "pth",
      "calcium-reabsorption"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-068",
    "questionText": "Extraglomerular mesangial cells (Lacis cells) ใน JGA มีบทบาทสำคัญในด้านใด?",
    "options": {
      "A": "การสังเคราะห์เม็ดเลือดแดง",
      "B": "การหลั่งเอนไซม์ย่อยโปรตีน",
      "C": "การสร้างเซลล์สืบพันธุ์",
      "D": "การส่งผ่านสัญญาณ (Signal transmission) ระหว่าง Macula densa และ JG cells ผ่าน Gap junctions"
    },
    "correctOption": "D",
    "explanation": "Extraglomerular mesangial cells วางตัวอยู่ในมุมสามเหลี่ยมระหว่าง afferent/efferent arteriole และ macula densa ทำหน้าที่สื่อสารสัญญาณระหว่าง macula densa กับ vascular smooth muscle cells",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 41,
    "tags": [
      "lacis-cells",
      "mesangial-cells"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-069",
    "questionText": "เมื่อ Macula densa ตรวจพบว่าระดับ NaCl ในท่อ DCT ลดลง จะส่งสัญญาณให้เกิดการเปลี่ยนแปลงใด?",
    "options": {
      "A": "กระตุ้นให้ JG cells หลั่ง Renin เพิ่มขึ้น และทำให้ Afferent arteriole ขยายตัว",
      "B": "ยับยั้งการหลั่ง Renin ทันที",
      "C": "บีบให้ Efferent arteriole ขยายตัวและหยุดกรองน้ำ",
      "D": "สั่งให้กระเพาะปัสสาวะบีบตัวขับน้ำทิ้ง"
    },
    "correctOption": "A",
    "explanation": "เมื่อ NaCl หรือ flow ต่ำลง สะท้อนว่าความดันเลือดและ GFR ลดลง Macula densa จะส่งสัญญาณกระตุ้น JG cells ให้หลั่ง Renin เพื่อเปิดการทำงานของ RAAS เพิ่มความดันและ GFR กลับสู่ปกติ",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 42,
    "tags": [
      "macula-densa-feedback",
      "tubuloglomerular-feedback"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-070",
    "questionText": "แรงดันใดเป็นแรงขับเคลื่อนหลักที่ผลักดันให้เกิดการกรองสารออกจากหลอดเลือดฝอย Glomerulus เข้าสู่ Capsular space?",
    "options": {
      "A": "Capsular hydrostatic pressure (CHP)",
      "B": "Glomerular hydrostatic pressure (GHP / GBHP)",
      "C": "Blood colloid osmotic pressure (BCOP)",
      "D": "Atmospheric pressure"
    },
    "correctOption": "B",
    "explanation": "Glomerular hydrostatic pressure (GHP ประมาณ 50-55 mmHg) ซึ่งเป็นแรงดันเลือดในโกลเมอรูลัส เป็นแรงดันบวกหลักที่ดันสารผ่านเยื่อกรอง โดยต้านกับแรงดึงของ BCOP (~30 mmHg) และ CHP (~15 mmHg)",
    "system": "Urinary System",
    "topic": "The Formation of Urine",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 45,
    "tags": [
      "net-filtration-pressure",
      "ghp"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-071",
    "questionText": "การเคลื่อนย้ายของน้ำปัสสาวะภายในท่อไต (Ureter) จากไตลงสู่กระเพาะปัสสาวะอาศัยกลไกใดเป็นหลัก?",
    "options": {
      "A": "แรงโน้มถ่วงของโลกเพียงอย่างเดียว",
      "B": "การพัดโบกของ Cilia ในเยื่อบุผิว",
      "C": "คลื่นการบีบรูดของกล้ามเนื้อเรียบ (Peristaltic waves) ร่วมกับแรงโน้มถ่วงและแรงดันน้ำ",
      "D": "แรงดันจากการหายใจเข้าออก"
    },
    "correctOption": "C",
    "explanation": "ผนังกล้ามเนื้อเรียบของท่อไตจะบีบตัวเป็นระลอกคลื่นแบบ Peristalsis (คล้ายลำไส้) ทุกๆ 10-30 วินาที เพื่อรีดน้ำปัสสาวะลงกระเพาะปัสสาวะ แม้ในท่านอนหรือห้อยหัว",
    "system": "Urinary System",
    "topic": "URETERS",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 47,
    "tags": [
      "ureter-peristalsis",
      "motility"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-072",
    "questionText": "เมื่อเกิดนิ่วในท่อไต (Ureteral stone) อาการปวดร้าว (Referred pain) มักปวดร้าวจากบริเวณบั้นเอวไปสู่ตำแหน่งใด?",
    "options": {
      "A": "ร้าวขึ้นไปที่สะบักและไหล่ขวา",
      "B": "ร้าวลงไปที่ปลายเท้า",
      "C": "ร้าวไปที่กึ่งกลางหน้าอกทะลุหลัง",
      "D": "ร้าวลงไปที่ขาหนีบ (Groin) อวัยวะเพศภายนอก และต้นขาด้านใน"
    },
    "correctOption": "D",
    "explanation": "เส้นประสาทรับความรู้สึกของท่อไตมาจากระดับ T11-L2 เมื่อท่อไตบีบเกร็งจากนิ่ว อาการปวด (Renal/Ureteric colic) จะปวดร้าวจากเอวด้านหลังลงมาตามแนวขาหนีบ (groin) ถุงอัณฑะ หรือแคมใหญ่",
    "system": "Urinary System",
    "topic": "URETERS",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 54,
    "tags": [
      "renal-colic",
      "referred-pain",
      "calculi"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-073",
    "questionText": "ในผู้ชาย อวัยวะใดวางตัวอยู่ใต้กระเพาะปัสสาวะและโอบล้อมรอบคอกระเพาะปัสสาวะและท่อปัสสาวะส่วนต้น?",
    "options": {
      "A": "Prostate gland (ต่อมลูกหมาก)",
      "B": "Seminal vesicle",
      "C": "Bulbourethral gland",
      "D": "Epididymis"
    },
    "correctOption": "A",
    "explanation": "Prostate gland (ต่อมลูกหมาก) ตั้งอยู่ใต้คอกระเพาะปัสสาวะและล้อมรอบ Prostatic urethra โดยตรง เมื่อต่อมลูกหมากโต (BPH) จึงมักกดเบียดท่อปัสสาวะทำให้ปัสสาวะลำบาก",
    "system": "Urinary System",
    "topic": "Bladder",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "prostate",
      "bladder-neck"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-074",
    "questionText": "ในสตรี กระเพาะปัสสาวะวางตัวอยู่ด้านหน้า (Anterior) ต่ออวัยวะใด?",
    "options": {
      "A": "Rectum เพียงอย่างเดียว",
      "B": "Uterus (มดลูก) และ Vagina (ช่องคลอด)",
      "C": "Pubic symphysis",
      "D": "Liver และ Gallbladder"
    },
    "correctOption": "B",
    "explanation": "ในผู้หญิง กระเพาะปัสสาวะวางตัวอยู่หน้ามดลูกและช่องคลอด (Anterior to uterus and vagina) และอยู่หลังกระดูกหัวเหน่า (Pubic symphysis)",
    "system": "Urinary System",
    "topic": "Bladder",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 58,
    "tags": [
      "female-pelvic-anatomy",
      "bladder"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-075",
    "questionText": "รีเฟล็กซ์การขับถ่ายปัสสาวะ (Micturition reflex) เริ่มถูกกระตุ้นเมื่อมีปริมาตรน้ำปัสสาวะในกระเพาะปัสสาวะประมาณเท่าใด?",
    "options": {
      "A": "20 - 50 mL",
      "B": "800 - 1,000 mL",
      "C": "150 - 300 mL",
      "D": "มากกว่า 1,500 mL"
    },
    "correctOption": "C",
    "explanation": "เมื่อปริมาณน้ำปัสสาวะเพิ่มขึ้นถึงประมาณ 150-300 mL ผนังกระเพาะปัสสาวะจะตึงตัว กระตุ้น Stretch receptors ส่งสัญญาณประสาทไปที่ไขสันหลังส่วนกระเบนเหน็บ (S2-S4) ให้เกิดความรู้สึกปวดปัสสาวะ",
    "system": "Urinary System",
    "topic": "Bladder- structure of",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "micturition-reflex",
      "stretch-receptors"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-076",
    "questionText": "ระบบประสาทพาราซิมพาเทติก (Parasympathetic system จาก S2-S4 ผ่าน Pelvic splanchnic nerves) มีผลต่อการขับปัสสาวะอย่างไร?",
    "options": {
      "A": "ทำให้กล้ามเนื้อ Detrusor คลายตัว และบีบหดหูรูดเพื่อกลั้นปัสสาวะ",
      "B": "ทำให้ผนังท่อไตหยุดการบีบตัว",
      "C": "ยับยั้งการสร้างปัสสาวะที่ไต",
      "D": "กระตุ้นให้กล้ามเนื้อ Detrusor หดตัว และทำให้ Internal urethral sphincter คลายตัว (促进排尿 / Voiding)"
    },
    "correctOption": "D",
    "explanation": "Parasympathetic stimulation กระตุ้นการขับถ่ายปัสสาวะ (Micturition) โดยสั่งให้ Detrusor muscle หดตัวบีบไล่ปัสสาวะ และคลายกล้ามเนื้อหูรูดคอกระเพาะปัสสาวะ (Internal urethral sphincter)",
    "system": "Urinary System",
    "topic": "Bladder- structure of",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "parasympathetic",
      "detrusor-contraction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-077",
    "questionText": "ระบบประสาทซิมพาเทติก (Sympathetic system จาก T11-L2 ผ่าน Hypogastric nerves) มีหน้าที่อย่างไรในกระเพาะปัสสาวะ?",
    "options": {
      "A": "ช่วยในการกักเก็บปัสสาวะ (Urine storage) โดยคลายกล้ามเนื้อ Detrusor และหดเกร็ง Internal urethral sphincter",
      "B": "กระตุ้นให้เกิดการปัสสาวะราดทันที",
      "C": "กระตุ้นการกรองของ Glomerulus ให้เพิ่มเป็นสองเท่า",
      "D": "ทำลายเยื่อบุ Urothelium"
    },
    "correctOption": "A",
    "explanation": "Sympathetic tone ทำหน้าที่กักเก็บปัสสาวะ (Fills and stores) โดยคลายกล้ามเนื้อผนัง Detrusor (ผ่าน Beta receptors) และหดรัดหูรูดคอกระเพาะปัสสาวะ (ผ่าน Alpha-1 receptors)",
    "system": "Urinary System",
    "topic": "Bladder- structure of",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "sympathetic",
      "urine-storage"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-078",
    "questionText": "เส้นประสาทใดที่นำคำสั่งจากอำนาจจิตใจ (Somatic motor) ไปควบคุมการขมิบหรือคลายของ External urethral sphincter?",
    "options": {
      "A": "Pelvic nerve",
      "B": "Pudendal nerve (S2-S4)",
      "C": "Vagus nerve",
      "D": "Sciatic nerve"
    },
    "correctOption": "B",
    "explanation": "Pudendal nerve เลี้ยงกล้ามเนื้อลายบริเวณอุ้งเชิงกรานและ perineum รวมถึง External urethral sphincter ทำให้เราสามารถกลั้นปัสสาวะได้ตามความต้องการ",
    "system": "Urinary System",
    "topic": "Urethra- structure of",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 67,
    "tags": [
      "pudendal-nerve",
      "somatic-control"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-079",
    "questionText": "ต่อมใดต่อไปนี้ในเพศชายที่เปิดเข้าสู่ Spongy urethra และทำหน้าที่หลั่งของเหลวเมือกใสเพื่อปรับสภาพความเป็นกรดก่อนการหลั่งน้ำอสุจิ?",
    "options": {
      "A": "Seminal vesicles",
      "B": "Prostate gland",
      "C": "Bulbourethral glands (Cowper's glands)",
      "D": "Adrenal gland"
    },
    "correctOption": "C",
    "explanation": "Bulbourethral (Cowper's) glands เป็นต่อมคู่ขนาดเท่าเมล็ดถั่ว อยู่ใต้ต่อมลูกหมาก เปิดเข้าสู่ spongy urethra หลั่งสารเมือกด่างใสเพื่อล้างและปรับสมดุลกรดในท่อปัสสาวะก่อน ejaculation",
    "system": "Urinary System",
    "topic": "Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "bulbourethral-gland",
      "male-urethra"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-080",
    "questionText": "รูเปิดท่อปัสสาวะภายนอกของเพศหญิง (Female external urethral orifice) ตั้งอยู่บริเวณใด?",
    "options": {
      "A": "อยู่ด้านหลังต่อรูเปิดช่องคลอด (Posterior to vaginal orifice)",
      "B": "อยู่ด้านหลังต่อรูทวารหนัก",
      "C": "อยู่ภายในมดลูก",
      "D": "อยู่ระหว่าง Clitoris และ Vaginal orifice (ด้านหน้าต่อช่องคลอด)"
    },
    "correctOption": "D",
    "explanation": "ในผู้หญิง รูเปิดท่อปัสสาวะภายนอกตั้งอยู่ในร่อง vestibule โดยอยู่ด้านหลัง (posterior) ต่อ clitoris แต่อยู่ด้านหน้า (anterior) ต่อรูเปิดของช่องคลอด (vaginal orifice)",
    "system": "Urinary System",
    "topic": "Female urethra",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 57,
    "tags": [
      "female-perineum",
      "external-urethral-orifice"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-081",
    "questionText": "บริเวณรอยต่อคอกระเพาะปัสสาวะกับท่อปัสสาวะส่วนต้นมีเยื่อบุผิวชนิดใด ก่อนจะค่อยๆ เปลี่ยนเป็น Pseudostratified และ Stratified squamous ที่ปลายท่อ?",
    "options": {
      "A": "Transitional epithelium (Urothelium)",
      "B": "Simple columnar epithelium",
      "C": "Simple cuboidal epithelium",
      "D": "Stratified keratinized epithelium"
    },
    "correctOption": "A",
    "explanation": "ท่อปัสสาวะส่วนต้นใกล้กระเพาะปัสสาวะบุด้วย Transitional epithelium จากนั้นตรงกลางเปลี่ยนเป็น Pseudostratified columnar และปลายท่อเปิดภายนอกเปลี่ยนเป็น Non-keratinized stratified squamous",
    "system": "Urinary System",
    "topic": "Urethra- structure of",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 67,
    "tags": [
      "urethra-epithelium",
      "histology-transition"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-082",
    "questionText": "ภาวะ Nephroptosis (Floating kidney / ไตลอยเลื่อนลง) เกิดจากความผิดปกติของโครงสร้างใด?",
    "options": {
      "A": "การฝ่อลีบของ Podocytes",
      "B": "การลดลงอย่างรวดเร็วของชั้น Adipose capsule (ไขมันพยุงไต) ทำให้ไตหย่อนลงมาในอุ้งเชิงกราน",
      "C": "การขยายตัวของต่อมหมวกไต",
      "D": "การอักเสบของกระเพาะปัสสาวะ"
    },
    "correctOption": "B",
    "explanation": "Nephroptosis เกิดเมื่อไขมันพยุงไต (Perirenal adipose capsule) หรือ Renal fascia หย่อนยาน/ลดลงฮวบฮาบ เช่น ผู้ที่น้ำหนักลดอย่างรวดเร็ว ทำให้ไตเลื่อนต่ำลงและอาจเกิดท่อไตหักงอ (Kinking of ureter)",
    "system": "Urinary System",
    "topic": "Protection of the Kidneys",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 15,
    "tags": [
      "nephroptosis",
      "clinical-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-083",
    "questionText": "ความจุสูงสุดตามธรรมชาติที่กระเพาะปัสสาวะสามารถกักเก็บน้ำปัสสาวะได้โดยไม่ฉีกขาดอยู่ที่ประมาณเท่าใด?",
    "options": {
      "A": "100 - 200 mL",
      "B": "300 - 400 mL",
      "C": "800 - 1,000 mL (อาจขยายได้ถึง 1 ลิตรในภาวะคั่ง)",
      "D": "3,000 mL"
    },
    "correctOption": "C",
    "explanation": "ความจุปกติที่รู้สึกเต็มคือ ~500 mL แต่กระเพาะปัสสาวะสามารถยืดขยายได้สูงสุดถึงประมาณ 800-1,000 mL หากเกินกว่านี้อาจเกิดภาวะกระเพาะปัสสาวะแตกทะลุ (Bladder rupture)",
    "system": "Urinary System",
    "topic": "Bladder",
    "difficulty": "Easy",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "bladder-capacity",
      "retention"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-084",
    "questionText": "การใส่สายสวนปัสสาวะ (Foley catheterization) ในเพศชาย ทำได้ยากกว่าเพศหญิงเนื่องจากสาเหตุใด?",
    "options": {
      "A": "ท่อปัสสาวะชายสั้นเกินไป",
      "B": "ผนังท่อปัสสาวะชายเป็นกระดูกอ่อน",
      "C": "ผู้ชายไม่มีหูรูดท่อปัสสาวะภายนอก",
      "D": "ท่อปัสสาวะชายยาวกว่า มีความโค้งงอ 2 จุด (Curvatures) และต้องผ่านต่อมลูกหมาก"
    },
    "correctOption": "D",
    "explanation": "ท่อปัสสาวะชายมีความยาว 18-20 cm และมีความโค้งงอตามกายวิภาค (Subpubic curvature และ Prepubic curvature) อีกทั้งต้องผ่านต่อมลูกหมาก จึงต้องยกองคชาตทำมุมเพื่อยืดท่อให้ตรงขณะใส่สายสวน",
    "system": "Urinary System",
    "topic": "Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "foley-catheter",
      "nursing-procedure"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-085",
    "questionText": "หลอดเลือดดำ Renal vein ข้างซ้าย (Left renal vein) มีลักษณะเฉพาะทางกายวิภาคที่สำคัญข้อใด?",
    "options": {
      "A": "ยาวกว่าข้างขวา และทอดข้ามหน้า Aorta ใต้หลอดเลือด Superior Mesenteric Artery (SMA)",
      "B": "สั้นกว่าหลอดเลือดดำขวามาก",
      "C": "ไม่มีการรับเลือดจากอวัยวะอื่นเลย",
      "D": "เปิดตรงเข้าสู่ตับ"
    },
    "correctOption": "A",
    "explanation": "Left renal vein ยาวกว่าข้างขวา วิ่งข้ามหน้า Abdominal aorta ใต้จุดแยกของ SMA (อาจเกิดภาวะ Nutcracker syndrome ถูกกดทับได้) และยังรับเลือดจาก Left gonadal vein และ Left suprarenal vein",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "left-renal-vein",
      "nutcracker-syndrome"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-086",
    "questionText": "ในกระบวนการกรองที่โกลเมอรูลัส ประจุไฟฟ้าบนชั้น Basement membrane และ Podocytes มีประจุชนิดใดที่ช่วยผลักไม่ให้ Albumin รั่วซึม?",
    "options": {
      "A": "ประจุบวก (Positive charge)",
      "B": "ประจุลบ (Negative charge จาก Heparan sulfate proteoglycans)",
      "C": "เป็นกลาง (Neutral)",
      "D": "สลับประจุบวกและลบตามจังหวะชีพจร"
    },
    "correctOption": "B",
    "explanation": "Glomerular basement membrane มี Glycoproteins ที่มีประจุลบ (Negative charges) ทำหน้าที่ผลักโปรตีนในพลาสมา เช่น Albumin ซึ่งมีประจุลบเช่นกัน ไม่ให้ผ่านเยื่อกรองออกมา (Charge selectivity)",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 31,
    "tags": [
      "charge-selectivity",
      "basement-membrane"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-087",
    "questionText": "เมื่อสารกรองเดินทางมาถึงปลายท่อสะสม (Collecting duct) สารใดถูกดูดกลับในชั้น Medulla เพื่อช่วยรักษาระดับ Osmolarity ของ Medullary interstitium?",
    "options": {
      "A": "Glucose",
      "B": "Bile salts",
      "C": "Urea",
      "D": "Creatinine"
    },
    "correctOption": "C",
    "explanation": "Urea ประมาณ 50% จะถูกดูดกลับจาก Medullary collecting duct เข้าสู่ interstitium ในชั้น medulla (Urea recycling) เพื่อช่วยสร้างแรงดึงดูดออสโมติกในการดูดซึมน้ำกลับ",
    "system": "Urinary System",
    "topic": "The Formation of Urine",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 4,
    "tags": [
      "urea-recycling",
      "medullary-gradient"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-088",
    "questionText": "ไตได้รับเลือดออกจากหัวใจ (Cardiac Output) ในสภาวะพักคิดเป็นประมาณกี่เปอร์เซ็นต์?",
    "options": {
      "A": "5%",
      "B": "10%",
      "C": "50%",
      "D": "20 - 25% (ประมาณ 1,200 mL/min)"
    },
    "correctOption": "D",
    "explanation": "แม้ไตจะมีน้ำหนักรวมกันเพียงไม่ถึง 1% ของร่างกาย แต่ได้รับเลือดมากถึง 20-25% ของ Cardiac output (ประมาณ 1.2 ลิตรต่อนาที) เพื่อทำหน้าที่กรองของเสียและปรับสมดุลเลือดอย่างต่อเนื่อง",
    "system": "Urinary System",
    "topic": "Blood Supply to Kidneys",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 26,
    "tags": [
      "renal-blood-flow",
      "cardiac-output"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-089",
    "questionText": "ส่วนใดของท่อปัสสาวะชายที่ล้อมรอบด้วย External urethral sphincter โดยตรง?",
    "options": {
      "A": "Membranous urethra",
      "B": "Prostatic urethra",
      "C": "Spongy urethra",
      "D": "Fossa navicularis"
    },
    "correctOption": "A",
    "explanation": "Membranous urethra ทะลุผ่าน Urogenital diaphragm และถูกล้อมรอบด้วยกล้ามเนื้อลายของ External urethral sphincter โดยตรง เป็นส่วนที่สั้นและเปราะบางต่อการบาดเจ็บที่สุด",
    "system": "Urinary System",
    "topic": "Urethra",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "membranous-urethra",
      "external-sphincter"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-090",
    "questionText": "ท่อไตพาดข้าม (Crosses over) หลอดเลือดขนาดใหญ่ใดบริเวณ Pelvic brim ก่อนเข้าสู่อุ้งเชิงกราน?",
    "options": {
      "A": "Femoral artery",
      "B": "Common or External iliac artery",
      "C": "Inferior vena cava",
      "D": "Renal vein"
    },
    "correctOption": "B",
    "explanation": "ท่อไต (Ureter) จะพาดข้ามจุดแยกของ Common iliac artery หรือจุดเริ่มต้นของ External iliac vessels ที่บริเวณ Pelvic brim ซึ่งเป็นจุดตีบแคบจุดที่ 2 ของท่อไต",
    "system": "Urinary System",
    "topic": "URETERS",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 48,
    "tags": [
      "ureter-relations",
      "pelvic-brim",
      "iliac-artery"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-091",
    "questionText": "เมื่อมองภาพตัดขวางของท่อไต ลูเมน (Lumen) ภายในท่อไตมีลักษณะเด่นอย่างไร?",
    "options": {
      "A": "มีลิ้นเปิดปิดคล้ายหลอดเลือดดำทุกๆ 1 cm",
      "B": "เป็นวงกลมแข็งตลอดเวลา",
      "C": "มีลักษณะเป็นรูปดาว (Stellated / Star-shaped lumen) เมื่อไม่มีน้ำปัสสาวะไหลผ่าน",
      "D": "มีขน Cilia ยาวโบกพัดตลอดเวลา"
    },
    "correctOption": "C",
    "explanation": "เนื่องจากการหดตัวของชั้นกล้ามเนื้อเรียบและรอยพับของ Transitional epithelium เมื่อท่อไตว่างเปล่า ภาพตัดขวางจะพบลูเมนเป็นแฉกรูปดาว (Stellate lumen)",
    "system": "Urinary System",
    "topic": "Ureter- Cross Section",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 49,
    "tags": [
      "stellate-lumen",
      "histology-cross-section"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-092",
    "questionText": "เส้นประสาทใดทำหน้าที่ยับยั้ง Micturition reflex ขณะที่สมองส่วน Cerebrum ตัดสินว่ายังไม่ถึงเวลาอันควรในการขับถ่ายปัสสาวะ?",
    "options": {
      "A": "Sciatic nerve",
      "B": "Vagus nerve",
      "C": "Phrenic nerve",
      "D": "การส่งสัญญาณยับยั้งจาก Cerebral cortex และ Pons (Pontine micturition center) ไปกระตุ้น Pudendal nerve ให้เกร็ง External sphincter ไว้"
    },
    "correctOption": "D",
    "explanation": "สมองส่วนหน้า (Cerebral cortex) และ Pontine storage center ควบคุมกลั้นปัสสาวะโดยส่งกระแสประสาทผ่าน Pudendal nerve ให้ขมิบ External urethral sphincter ไว้จนกว่าจะพร้อมขับถ่าย",
    "system": "Urinary System",
    "topic": "Bladder- structure of",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "pontine-center",
      "voluntary-micturition"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-093",
    "questionText": "เนื้อเยื่อชั้นนอกสุดของกระเพาะปัสสาวะบริเวณยอดด้านบน (Superior surface) สัมผัสกับสิ่งใด?",
    "options": {
      "A": "Parietal peritoneum (เยื่อบุช่องท้อง)",
      "B": "ผิวหนังหน้าท้องโดยตรง",
      "C": "กระดูกสันหลังระดับ L5",
      "D": "ไตข้างขวา"
    },
    "correctOption": "A",
    "explanation": "ผิวด้านบนสุด (Superior surface) ของกระเพาะปัสสาวะถูกคลุมด้วย Serosa (Parietal peritoneum) ส่วนผนังด้านอื่นที่อยู่นอกช่องท้องจะถูกหุ้มด้วย Adventitia",
    "system": "Urinary System",
    "topic": "Bladder- structure of",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 64,
    "tags": [
      "bladder-peritoneum",
      "serosa"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-094",
    "questionText": "เซลล์ Macula densa เมื่อตรวจพบการไหลของสารกรองช้าลงและความเข้มข้นของ NaCl ต่ำ จะหลั่งสารกระตุ้นเฉพาะที่ใดไปยัง JG cells?",
    "options": {
      "A": "Histamine",
      "B": "Prostaglandins (PGE2) และ Nitric Oxide (NO)",
      "C": "Insulin",
      "D": "Adrenaline"
    },
    "correctOption": "B",
    "explanation": "Macula densa ปลดปล่อย Prostaglandins (PGE2) เพื่อส่งสัญญาณพาราไครน์ (Paracrine) ไปกระตุ้นเซลล์ Juxtaglomerular ข้างเคียงให้ปล่อย Renin เข้าสู่กระแสเลือด",
    "system": "Urinary System",
    "topic": "Juxtaglomerular Apparatus (JGA)",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 42,
    "tags": [
      "macula-densa",
      "prostaglandins"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-095",
    "questionText": "ปลายขยายของท่อปัสสาวะชายบริเวณ Glans penis ก่อนถึงรูเปิดภายนอก มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Prostatic sinus",
      "B": "Trigone",
      "C": "Navicular fossa (Fossa navicularis)",
      "D": "Renal papilla"
    },
    "correctOption": "C",
    "explanation": "Navicular fossa เป็นส่วนปลายท่อปัสสาวะใน glans penis ที่โป่งพองออกเป็นกระเปาะรูปเรือ บุด้วย stratified squamous epithelium ก่อนถึง external urethral orifice",
    "system": "Urinary System",
    "topic": "Urethra",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 68,
    "tags": [
      "fossa-navicularis",
      "male-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-096",
    "questionText": "ท่อไตมีจุดตีบแคบจุดที่สาม (Third constriction site) ตรงตำแหน่งใด?",
    "options": {
      "A": "บริเวณใต้สะดือ",
      "B": "บริเวณขั้วไต",
      "C": "บริเวณพาดผ่านตับ",
      "D": "Ureterovesical junction (จุดที่ท่อไตทะลุผ่านผนังกระเพาะปัสสาวะ)"
    },
    "correctOption": "D",
    "explanation": "จุดตีบแคบที่สามและแคบที่สุดของท่อไตคือ Ureterovesical junction (UVJ) บริเวณที่ท่อไตเจาะทะลุผ่านกล้ามเนื้อผนังกระเพาะปัสสาวะ เป็นจุดที่นิ่วมักติดค้างมากที่สุด",
    "system": "Urinary System",
    "topic": "URETERS",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 54,
    "tags": [
      "uvj",
      "ureter-constriction"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-097",
    "questionText": "การดูดซึมกลับของน้ำ (Water reabsorption) ส่วนใหญ่ในไตเกิดขึ้นที่บริเวณใด (ประมาณ 65-70%)?",
    "options": {
      "A": "Proximal Convoluted Tubule (PCT)",
      "B": "Distal Convoluted Tubule (DCT)",
      "C": "Collecting Duct",
      "D": "Urinary Bladder"
    },
    "correctOption": "A",
    "explanation": "น้ำส่วนใหญ่ (ประมาณ 65-70%) ถูกดูดกลับแบบ Obligatory water reabsorption ควบคู่กับการดูดซึมเกลือแร่ที่ PCT ตลอดเวลาโดยไม่ต้องพึ่งพาฮอร์โมน",
    "system": "Urinary System",
    "topic": "Nephron-Tubular System",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 32,
    "tags": [
      "pct",
      "water-reabsorption"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-098",
    "questionText": "โครงสร้างใดต่อไปนี้ทำหน้าที่ค้ำจุนกลุ่มหลอดเลือดฝอยใน Glomerulus และมีคุณสมบัติ Phagocytosis กลืนกินเศษสิ่งแปลกปลอม?",
    "options": {
      "A": "Parietal epithelial cells",
      "B": "Intraglomerular mesangial cells",
      "C": "Erythrocytes",
      "D": "Adipocytes"
    },
    "correctOption": "B",
    "explanation": "Intraglomerular mesangial cells แทรกอยู่ระหว่าง capillary loops ทำหน้าที่ค้ำจุนโครงสร้าง ควบคุมเส้นผ่านศูนย์กลางหลอดเลือด และเก็บกินโปรตีนหรือเศษซากที่ติดค้างในเยื่อกรอง",
    "system": "Urinary System",
    "topic": "Nephron",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 31,
    "tags": [
      "mesangial-cells",
      "phagocytosis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-099",
    "questionText": "เอ็นสะดือมัธยันต์ (Median umbilical ligament / Urachus remnant) ทอดตัวเชื่อมระหว่างยอดกระเพาะปัสสาวะ (Apex of bladder) กับโครงสร้างใด?",
    "options": {
      "A": "Rectum",
      "B": "Pubic bone",
      "C": "Umblicus (สะดือ)",
      "D": "Liver"
    },
    "correctOption": "C",
    "explanation": "Median umbilical ligament เป็นพังผืดที่หลงเหลือมาจากท่อ Urachus ในระยะตัวอ่อน ทอดจากยอดของกระเพาะปัสสาวะ (Apex) ขึ้นไปยังสะดือ (Umblicus)",
    "system": "Urinary System",
    "topic": "Bladder",
    "difficulty": "Hard",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 63,
    "tags": [
      "urachus",
      "median-umbilical-ligament"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "URINARY-100",
    "questionText": "การทำงานร่วมกันของ RAAS (Renin-Angiotensin-Aldosterone System) ส่งผลลัพธ์สุทธิต่อระบบไหลเวียนโลหิตและร่างกายอย่างไร?",
    "options": {
      "A": "ลดอัตราการเต้นของหัวใจลงต่ำกว่าปกติ",
      "B": "ลดความดันโลหิตและขับเกลือแร่ออกทั้งหมด",
      "C": "ทำให้ไตหยุดการสร้างปัสสาวะถาวร",
      "D": "เพิ่มการคั่งของน้ำและโซเดียม หลอดเลือดหดตัว ทำให้ความดันโลหิตและปริมาตรเลือดเพิ่มขึ้น (Increase BP & blood volume)"
    },
    "correctOption": "D",
    "explanation": "ระบบ RAAS มีผลให้ Angiotensin II หดหลอดเลือดแดงทั่วร่างกาย และกระตุ้น Aldosterone ให้ดูดกลับ Na+ และน้ำ ส่งผลให้ความดันโลหิตและปริมาตรเลือดในร่างกายเพิ่มสูงขึ้นสู่ระดับสมดุล",
    "system": "Urinary System",
    "topic": "Hormones of the Kidney",
    "difficulty": "Medium",
    "sourceFile": "Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf",
    "sourcePage": 41,
    "tags": [
      "raas",
      "blood-pressure-homeostasis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  }
];
