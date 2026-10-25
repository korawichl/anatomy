import { Question } from '../types';

export const cardioQuestions: Question[] = [
  {
    "id": "CARDIO-001",
    "questionText": "ผู้ป่วยชายไทยน้ำหนัก 70 กิโลกรัม ประสบอุบัติเหตุเสียเลือดไปประมาณ 1,500 มิลลิลิตร ตามหลักกายวิภาคและสรีรวิทยา ปริมาตรเลือดปกติของผู้ป่วยรายนี้มีประมาณเท่าใด และคิดเป็นสัดส่วนเท่าใดของน้ำหนักตัว?",
    "options": {
      "A": "ประมาณ 5.0 - 5.6 ลิตร คิดเป็น 7 - 8% ของน้ำหนักตัว",
      "B": "ประมาณ 3.0 - 3.5 ลิตร คิดเป็น 4 - 5% ของน้ำหนักตัว (คิดเฉพาะปริมาตรพลาสมา)",
      "C": "ประมาณ 10 - 12 ลิตร คิดเป็น 15% ของน้ำหนักตัว (คิดรวมของเหลวนอกเซลล์)",
      "D": "ประมาณ 2.0 - 2.5 ลิตร คิดเป็น 3% ของน้ำหนักตัว"
    },
    "correctOption": "A",
    "explanation": "ในผู้ใหญ่ปกติ ปริมาตรเลือดคิดเป็นประมาณ 7-8% ของน้ำหนักร่างกาย (สำหรับน้ำหนัก 70 กก. จะมีเลือดประมาณ 4.9 - 5.6 ลิตร หรือเฉลี่ย 5 ลิตร) โดยแบ่งเป็น Plasma ประมาณ 55% และ Formed elements (เม็ดเลือดและเกล็ดเลือด) ประมาณ 45%",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 6,
    "tags": [
      "blood-volume",
      "clinical-blood-loss",
      "hematology"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-002",
    "questionText": "เซลล์เม็ดเลือดแดง (Erythrocyte) ที่โตเต็มที่ในกระแสเลือดมีรูปร่างแบบ Biconcave disc และไม่มีนิวเคลียส การปรับเปลี่ยนโครงสร้างทางกายวิภาคนี้มีประโยชน์เชิงกลไกและสรีรวิทยาอย่างไร?",
    "options": {
      "A": "เพื่อลดการใช้ออกซิเจนโดยการสร้างพลังงานผ่านกระบวนการ Oxidative phosphorylation ในไมโทคอนเดรีย",
      "B": "เพิ่มอัตราส่วนพื้นที่ผิวต่อปริมาตร (Surface-to-volume ratio) เพื่อเพิ่มประสิทธิภาพการแพร่ของก๊าซ O2/CO2 และเพิ่มความยืดหยุ่นในการลอดผ่านหลอดเลือดฝอย",
      "C": "เพื่อเพิ่มพื้นที่ในการบรรจุนิวเคลียสและออร์แกเนลล์สำหรับการแบ่งเซลล์แบบไมโทซิสในกระแสเลือด",
      "D": "เพื่อป้องกันไม่ให้ฮีโมโกลบินจับกับก๊าซคาร์บอนมอนอกไซด์ในเนื้อเยื่อส่วนปลาย"
    },
    "correctOption": "B",
    "explanation": "รูปร่าง Biconcave disc (จานเว้าสองด้าน ขนาด 7.5 ไมครอน) ร่วมกับการสลายตัวของนิวเคลียส ไมโทคอนเดรีย และไรโบโซม ทำให้มีพื้นที่ผิวต่อปริมาตรสูง ช่วยให้แลกเปลี่ยนก๊าซได้รวดเร็ว และทำให้เซลล์บิดงอตัว (Deformability) ผ่าน Capillary lumen ขนาด 4-5 ไมครอนได้โดยไม่แตก",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 7,
    "tags": [
      "erythrocyte",
      "biconcave",
      "microcirculation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-003",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [A]] ผู้ป่วยเด็กมีไข้สูง ปวดท้องส่วนล่างขวา ผลตรวจเลือดพบเม็ดเลือดขาวรวม 18,000 cells/mm3 โดยมี Neutrophils 85% ร่วมกับพบ Band form สูงขึ้น (Shift to the left) ลักษณะทางจุลกายวิภาคของ Neutrophil ที่โตเต็มที่คือข้อใด?",
    "options": {
      "A": "นิวเคลียสเป็นรูป 2 พู (Bilobed) และมีแกรนูลขนาดใหญ่ติดสีส้มแดงสดของสี Eosin",
      "B": "นิวเคลียสกลมใหญ่เกือบเต็มเซลล์ มีขอบไซโทพลาสซึมติดสีฟ้าจางๆ เป็นวงแหวนบางๆ",
      "C": "นิวเคลียสแบ่งเป็น 3-5 พู (Lobes) เชื่อมด้วยสายโครมาตินบางๆ และในไซโทพลาสซึมมีแกรนูลขนาดเล็กติดสีชมพูอมม่วงจางๆ",
      "D": "นิวเคลียสเป็นรูปไต (Kidney-shaped) และไม่มีแกรนูลจำเพาะในไซโทพลาสซึม"
    },
    "correctOption": "C",
    "explanation": "Mature Neutrophil (Polymorphonuclear leukocyte: PMN) มีนิวเคลียส 3-5 พู แกรนูลจำเพาะ (Specific granules) ย้อมติดสีม่วงอมชมพูจางๆ ทำหน้าที่ Phagocytosis กำจัดเชื้อแบคทีเรียเฉียบพลัน ส่วนตัวเลือก B คือ Small lymphocyte, ตัวเลือก C คือ Eosinophil, ตัวเลือก D คือ Monocyte\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Hematology (Formed Elements) & Blood Vessel Wall Layers): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [A] (Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 9,
    "tags": [
      "neutrophil",
      "clinical-cbc",
      "appendicitis-shift-left",
      "has-diagram",
      "diagram-blood_cells_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/blood_cells_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/blood_cells_vessels_labeled.svg",
    "imageCaption": "Hematology (Formed Elements) & Blood Vessel Wall Layers — สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Erythrocyte (Biconcave RBC)",
        "thaiName": "เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส",
        "description": "ตำแหน่ง [A] คือ Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส"
      },
      {
        "pin": "B",
        "term": "Neutrophil (3-5 Lobed PMN)",
        "thaiName": "นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก",
        "description": "ตำแหน่ง [B] คือ Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก"
      },
      {
        "pin": "C",
        "term": "Eosinophil (Bilobed Nucleus)",
        "thaiName": "อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)",
        "description": "ตำแหน่ง [C] คือ Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)"
      },
      {
        "pin": "D",
        "term": "Monocyte (Kidney-shaped Nucleus)",
        "thaiName": "โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)",
        "description": "ตำแหน่ง [D] คือ Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)"
      },
      {
        "pin": "E",
        "term": "Tunica Intima (Endothelium)",
        "thaiName": "ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium",
        "description": "ตำแหน่ง [E] คือ Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium"
      },
      {
        "pin": "F",
        "term": "Tunica Media (Smooth Muscle & Elastin)",
        "thaiName": "ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)",
        "description": "ตำแหน่ง [F] คือ Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)"
      }
    ]
  },
  {
    "id": "CARDIO-004",
    "questionText": "ผู้ป่วยโรคหอบหืด (Bronchial asthma) หรือผู้ที่มีการติดเชื้อพยาธิในทางเดินอาหาร จะตรวจพบเม็ดเลือดขาวชนิด Eosinophil ในกระแสเลือดสูงขึ้น เม็ดเลือดขาวชนิดนี้ทำลายพยาธิขนาดใหญ่ด้วยกลไกทางโครงสร้างใด?",
    "options": {
      "A": "การหลั่งสาร Heparin ในปริมาณมหาศาลเพื่อทำให้พยาธิเกิดภาวะเลือดออกในทางเดินอาหาร",
      "B": "การกินพยาธิทั้งตัวเข้าสู่เซลล์ด้วยกระบวนการ Phagocytosis แล้วย่อยด้วย Phagolysosome",
      "C": "การเปลี่ยนรูปเป็น Plasma cells เพื่อหลั่งแอนติบอดีชนิด IgE เข้าจับกับผิวพยาธิโดยตรง",
      "D": "การหลั่งเอนไซม์และสารโปรตีนจากแกรนูลจำเพาะที่ติดสีส้มแดง เช่น Major Basic Protein (MBP) และ Eosinophil Cationic Protein ออกมาทำลายผนังตัวพยาธิภายนอกเซลล์"
    },
    "correctOption": "D",
    "explanation": "เนื่องจากพยาธิมีขนาดใหญ่เกินกว่าที่เม็ดเลือดขาวจะกลืนกินได้ (Cannot be phagocytosed) Eosinophil จึงใช้กลไกการปล่อยสารพิษจาก Specific granules (ย้อมติดสีส้มแดง) ได้แก่ Major Basic Protein, Eosinophil Peroxidase และ Neurotoxin เพื่อทำลาย cuticle และเนื้อเยื่อของพยาธิภายนอกเซลล์",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 10,
    "tags": [
      "eosinophil",
      "parasitic-infection",
      "allergy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-005",
    "questionText": "ในภาวะ Anaphylactic shock จากการแพ้ยาเพนิซิลลินอย่างรุนแรง เม็ดเลือดขาวชนิด Basophil และ Mast cell ปล่อยสารเคมีสื่อกลางใดจากแกรนูลที่ส่งผลให้เกิดการขยายตัวของหลอดเลือดทั่วร่างกาย (Vasodilation) และหลอดลมหดเกร็ง (Bronchoconstriction)?",
    "options": {
      "A": "Histamine และ Leukotrienes ร่วมกับ Heparin",
      "B": "Acetylcholine และ Norepinephrine",
      "C": "Hemoglobin และ Erythropoietin",
      "D": "Albumin และ Fibrinogen"
    },
    "correctOption": "A",
    "explanation": "Basophils มีแกรนูลขนาดใหญ่ติดสีน้ำเงินม่วงเข้ม บรรจุ Histamine ซึ่งทำให้เกิด Vasodilation และเพิ่ม Vascular permeability ส่งผลให้ความดันตก เกิดลมพิษและบวมน้ำ ร่วมกับหลั่ง Heparin ป้องกันการแข็งตัวของเลือด และสาร Leukotrienes ที่ทำให้หลอดลมหดเกร็งอย่างรุนแรง",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 11,
    "tags": [
      "basophil",
      "anaphylaxis",
      "histamine",
      "heparin"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-006",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [B]] เมื่อเกิดการบาดเจ็บและการอักเสบเรื้อรังในเนื้อเยื่อ เม็ดเลือดขาวชนิด Agranulocyte ที่มีขนาดใหญ่ที่สุด (15-20 ไมครอน) นิวเคลียสเว้าเป็นรูปไต จะแทรกตัวผ่านผนังหลอดเลือด (Diapedesis) ออกไปทำหน้าที่เป็นเซลล์ใดในเนื้อเยื่อ?",
    "options": {
      "A": "Plasma cell ทำหน้าที่สร้างและหลั่ง Immunoglobulin เข้าสู่สารคัดหลั่ง",
      "B": "Macrophage ทำหน้าที่กินเชื้อโรค เศษซากเซลล์ และทำหน้าที่เป็น Antigen Presenting Cell (APC)",
      "C": "Mast cell ทำหน้าที่หลั่ง Histamine และ Serotonin",
      "D": "Fibroblast ทำหน้าที่สร้างเฉพาะเส้นใยคอลลาเจนสมานแผล"
    },
    "correctOption": "B",
    "explanation": "Monocyte เป็นเม็ดเลือดขาวขนาดใหญ่ที่สุด นิวเคลียสรูปไต อยู่ในกระแสเลือดเพียง 1-3 วันก่อนเคลื่อนที่ผ่านผนังหลอดเลือดเข้าสู่เนื้อเยื่อแล้วเจริญเปลี่ยนสภาพไปเป็น Macrophage (เช่น Kupffer cells ในตับ, Alveolar macrophages ในปอด, Microglia ในสมอง)\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Hematology (Formed Elements) & Blood Vessel Wall Layers): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [B] (Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 12,
    "tags": [
      "monocyte",
      "macrophage",
      "diapedesis",
      "apc",
      "has-diagram",
      "diagram-blood_cells_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/blood_cells_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/blood_cells_vessels_labeled.svg",
    "imageCaption": "Hematology (Formed Elements) & Blood Vessel Wall Layers — สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Erythrocyte (Biconcave RBC)",
        "thaiName": "เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส",
        "description": "ตำแหน่ง [A] คือ Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส"
      },
      {
        "pin": "B",
        "term": "Neutrophil (3-5 Lobed PMN)",
        "thaiName": "นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก",
        "description": "ตำแหน่ง [B] คือ Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก"
      },
      {
        "pin": "C",
        "term": "Eosinophil (Bilobed Nucleus)",
        "thaiName": "อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)",
        "description": "ตำแหน่ง [C] คือ Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)"
      },
      {
        "pin": "D",
        "term": "Monocyte (Kidney-shaped Nucleus)",
        "thaiName": "โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)",
        "description": "ตำแหน่ง [D] คือ Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)"
      },
      {
        "pin": "E",
        "term": "Tunica Intima (Endothelium)",
        "thaiName": "ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium",
        "description": "ตำแหน่ง [E] คือ Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium"
      },
      {
        "pin": "F",
        "term": "Tunica Media (Smooth Muscle & Elastin)",
        "thaiName": "ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)",
        "description": "ตำแหน่ง [F] คือ Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)"
      }
    ]
  },
  {
    "id": "CARDIO-007",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [C]] ผู้ป่วยโรคตับแข็งระยะท้าย (End-stage Cirrhosis) มักมีอาการบวมน้ำทั่วร่างกาย (Generalized edema) และท้องมาน (Ascites) ความผิดปกตินี้สัมพันธ์กับการสูญเสียหน้าที่ในการสร้างโปรตีนในพลาสมาชนิดใดจากตับมากที่สุด?",
    "options": {
      "A": "Gamma-globulin ซึ่งสร้างจากพลาสมาเซลล์เพื่อเป็นแอนติบอดี",
      "B": "Alpha-globulin ซึ่งทำหน้าที่ขนส่งฮอร์โมนไทรอยด์",
      "C": "Albumin ซึ่งมีหน้าที่หลักในการสร้างและรักษา Colloid osmotic pressure (Oncotic pressure) ของหลอดเลือด",
      "D": "Fibrinogen ซึ่งทำหน้าที่เฉพาะในกระบวนการละลายลิ่มเลือด (Fibrinolysis)"
    },
    "correctOption": "C",
    "explanation": "Albumin เป็นโปรตีนพลาสมาที่มีสัดส่วนมากที่สุด (ประมาณ 60% ของโปรตีนในเลือด) สร้างจากตับ มีบทบาทสำคัญที่สุดในการรักษาระดับแรงดันคอลลอยด์ออสโมติก (Colloid osmotic pressure) เพื่อดึงน้ำไว้ในหลอดเลือด เมื่อตับวายและสร้าง Albumin ลดลง น้ำจึงรั่วซึมออกสู่ช่องว่างระหว่างเซลล์ เกิดภาวะบวมน้ำ (Edema) และท้องมาน (Ascites)\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Hematology (Formed Elements) & Blood Vessel Wall Layers): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [C] (Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 6,
    "tags": [
      "plasma-proteins",
      "albumin",
      "oncotic-pressure",
      "edema",
      "has-diagram",
      "diagram-blood_cells_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/blood_cells_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/blood_cells_vessels_labeled.svg",
    "imageCaption": "Hematology (Formed Elements) & Blood Vessel Wall Layers — สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Erythrocyte (Biconcave RBC)",
        "thaiName": "เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส",
        "description": "ตำแหน่ง [A] คือ Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส"
      },
      {
        "pin": "B",
        "term": "Neutrophil (3-5 Lobed PMN)",
        "thaiName": "นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก",
        "description": "ตำแหน่ง [B] คือ Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก"
      },
      {
        "pin": "C",
        "term": "Eosinophil (Bilobed Nucleus)",
        "thaiName": "อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)",
        "description": "ตำแหน่ง [C] คือ Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)"
      },
      {
        "pin": "D",
        "term": "Monocyte (Kidney-shaped Nucleus)",
        "thaiName": "โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)",
        "description": "ตำแหน่ง [D] คือ Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)"
      },
      {
        "pin": "E",
        "term": "Tunica Intima (Endothelium)",
        "thaiName": "ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium",
        "description": "ตำแหน่ง [E] คือ Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium"
      },
      {
        "pin": "F",
        "term": "Tunica Media (Smooth Muscle & Elastin)",
        "thaiName": "ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)",
        "description": "ตำแหน่ง [F] คือ Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)"
      }
    ]
  },
  {
    "id": "CARDIO-008",
    "questionText": "เกล็ดเลือด (Platelets / Thrombocytes) ที่มีบทบาทในกระบวนการ Hemostasis กำเนิดมาจากส่วนใดของเซลล์ต้นกำเนิดชนิดใดในไขกระดูก?",
    "options": {
      "A": "การแบ่งตัวแบบไมโทซิสของ Mature endothelial cells บริเวณหลอดเลือดฝอย",
      "B": "การสลายตัวของนิวเคลียสจาก Myeloblast ในระหว่างการแบ่งตัว",
      "C": "การแตกตัวของ Erythroblast ที่ไม่สามารถสังเคราะห์ฮีโมโกลบินได้",
      "D": "การหลุดลอกของชิ้นส่วนไซโทพลาสซึม (Cytoplasmic fragments) จากเซลล์ขนาดยักษ์ Megakaryocyte"
    },
    "correctOption": "D",
    "explanation": "เกล็ดเลือดไม่ใช่เซลล์ที่มีนิวเคลียส แต่เป็นชิ้นส่วนไซโทพลาสซึม (ขนาด 2-4 ไมครอน) ที่หลุดออกมาจากเซลล์ขนาดใหญ่ชื่อ Megakaryocyte ในไขกระดูก มีอายุขัยประมาณ 8-10 วัน และถูกทำลายที่ม้ามและตับ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 14,
    "tags": [
      "platelets",
      "megakaryocyte",
      "hemostasis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-009",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [D]] ในกระบวนการห้ามเลือด (Hemostasis) ปัจจัยและขั้นตอนใดที่เกิดขึ้นเป็นลำดับแรกสุดทันทีเมื่อผนังหลอดเลือดเกิดรอยฉีกขาด?",
    "options": {
      "A": "Vascular spasm (การหดเกร็งตัวของกล้ามเนื้อเรียบในผนังหลอดเลือดเพื่อจำกัดการไหลของเลือด)",
      "B": "Platelet plug formation (เกล็ดเลือดรวมกลุ่มอุดรอยรั่ว)",
      "C": "Coagulation cascade (การเปลี่ยน Prothrombin เป็น Thrombin)",
      "D": "Fibrinolysis (การสลายลิ่มเลือดด้วยเอนไซม์ Plasmin)"
    },
    "correctOption": "A",
    "explanation": "ลำดับขั้นตอนของกระบวนการ Hemostasis: 1. Vascular spasm (หลอดเลือดหดเกร็งตัวทันทีจาก Myogenic reflex และ Endothelin) 2. Platelet plug formation (เกล็ดเลือดเกาะกับคอลลาเจนและรวมตัวกันเป็นก้อนอุดชั่วคราว) 3. Coagulation / Blood clotting (การสร้างร่างแห Fibrin เพื่อสร้างลิ่มเลือดถาวร)\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Hematology (Formed Elements) & Blood Vessel Wall Layers): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [D] (Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 15,
    "tags": [
      "hemostasis",
      "vascular-spasm",
      "coagulation",
      "has-diagram",
      "diagram-blood_cells_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/blood_cells_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/blood_cells_vessels_labeled.svg",
    "imageCaption": "Hematology (Formed Elements) & Blood Vessel Wall Layers — สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Erythrocyte (Biconcave RBC)",
        "thaiName": "เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส",
        "description": "ตำแหน่ง [A] คือ Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส"
      },
      {
        "pin": "B",
        "term": "Neutrophil (3-5 Lobed PMN)",
        "thaiName": "นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก",
        "description": "ตำแหน่ง [B] คือ Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก"
      },
      {
        "pin": "C",
        "term": "Eosinophil (Bilobed Nucleus)",
        "thaiName": "อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)",
        "description": "ตำแหน่ง [C] คือ Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)"
      },
      {
        "pin": "D",
        "term": "Monocyte (Kidney-shaped Nucleus)",
        "thaiName": "โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)",
        "description": "ตำแหน่ง [D] คือ Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)"
      },
      {
        "pin": "E",
        "term": "Tunica Intima (Endothelium)",
        "thaiName": "ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium",
        "description": "ตำแหน่ง [E] คือ Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium"
      },
      {
        "pin": "F",
        "term": "Tunica Media (Smooth Muscle & Elastin)",
        "thaiName": "ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)",
        "description": "ตำแหน่ง [F] คือ Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)"
      }
    ]
  },
  {
    "id": "CARDIO-010",
    "questionText": "ผู้ป่วยประสบอุบัติเหตุต้องการรับการให้เลือดฉุกเฉิน ตรวจพบว่าเม็ดเลือดแดงของผู้ป่วยมีทั้ง Antigen A และ Antigen B บนผิวเซลล์ แต่ในซีรัมไม่มีทั้ง Anti-A และ Anti-B แอนติบอดี ผู้ป่วยรายนี้มีหมู่เลือดใด และในทางทฤษฎีสามารถรับเม็ดเลือดแดงจากหมู่เลือดใดได้บ้าง?",
    "options": {
      "A": "หมู่เลือด O สามารถรับเม็ดเลือดแดงได้เฉพาะหมู่ O เท่านั้น",
      "B": "หมู่เลือด AB (Rh-positive) เป็น Universal recipient สามารถรับเม็ดเลือดแดงได้จากทุกหมู่เลือด (A, B, AB, O)",
      "C": "หมู่เลือด A สามารถรับได้เฉพาะหมู่ A และ AB เท่านั้น",
      "D": "หมู่เลือด B สามารถรับได้เฉพาะหมู่ B และ O เท่านั้น"
    },
    "correctOption": "B",
    "explanation": "หมู่เลือด AB มีทั้ง Antigen A และ B บนเยื่อหุ้มเซลล์เม็ดเลือดแดง จึงไม่มี Antibodies (ทั้ง Anti-A และ Anti-B) ในพลาสมา ทำให้ในภาวะฉุกเฉินสามารถรับเม็ดเลือดแดงจากผู้บริจาคหมู่เลือดใดก็ได้ (Universal recipient) โดยไม่เกิดปฏิกิริยา Agglutination จากแอนติบอดีของผู้รับ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 13,
    "tags": [
      "blood-groups",
      "abo-system",
      "universal-recipient"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-011",
    "questionText": "มารดาที่มีหมู่เลือด Rh-negative ตั้งครรภ์ทารกคนที่ 2 ซึ่งมีหมู่เลือด Rh-positive เกิดภาวะ Erythroblastosis fetalis (Hemolytic disease of the newborn) พยาธิกำเนิดของโรคนี้เกิดจากแอนติบอดีชนิดใด และผ่านรกได้อย่างไร?",
    "options": {
      "A": "การส่งผ่านเม็ดเลือดแดงของมารดาเข้าไปอุดกั้นหลอดเลือดสายสะดือของทารก",
      "B": "แอนติบอดี Anti-A ชนิด IgM ที่มีโมเลกุลขนาดใหญ่แทรกผ่านรกเข้าไปกระตุ้นเม็ดเลือดขาวทารก",
      "C": "แอนติบอดี Anti-Rh (Anti-D) ชนิด IgG ที่มารดาสร้างขึ้นจากการสัมผัสเลือดทารกคนแรก สามารถซึมผ่านรกเข้าสู่กระแสเลือดทารกคนที่สองและทำลายเม็ดเลือดแดงของทารก",
      "D": "ทารกสร้างแอนติบอดีออกมาทำลายเม็ดเลือดแดงของมารดาในมดลูก"
    },
    "correctOption": "C",
    "explanation": "Anti-D antibody จัดเป็น IgG ซึ่งเป็นแอนติบอดีที่มีโมเลกุลขนาดเล็ก สามารถซึมผ่านรก (Placental barrier) ได้ เมื่อมารดา Rh-negative เคยสัมผัสเลือด Rh-positive ในครรภ์แรกแล้ว จะเกิด Sensitization และสร้าง Anti-D (IgG) เมื่อตั้งครรภ์ที่สองเป็นทารก Rh-positive แอนติบอดีนี้จะข้ามรกไปจับกับ Antigen D บนผิว RBC ของทารก ทำให้เกิด Hemolysis อย่างรุนแรง",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 13,
    "tags": [
      "rh-factor",
      "erythroblastosis-fetalis",
      "igg-placenta"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-012",
    "questionText": "ในกระบวนการแข็งตัวของเลือด (Blood coagulation) เอนไซม์ Thrombin ทำหน้าที่เปลี่ยนสารตั้งต้นชนิดใดให้กลายเป็นร่างแหที่ไม่ละลายน้ำเพื่อดักจับเม็ดเลือดแดง?",
    "options": {
      "A": "เปลี่ยน Albumin ให้กลายเป็น Globulin",
      "B": "เปลี่ยน Prothrombin ให้กลายเป็น Thromboplastin",
      "C": "เปลี่ยน Plasminogen ให้กลายเป็น Plasmin",
      "D": "เปลี่ยน Fibrinogen (โปรตีนละลายน้ำในพลาสมา) ให้กลายเป็น Fibrin polymers (เส้นใยร่างแหที่ไม่ละลายน้ำ)"
    },
    "correctOption": "D",
    "explanation": "ใน Common pathway ของกระบวนการ Coagulation: Prothrombinase enzyme complex จะเปลี่ยน Prothrombin ให้กลายเป็น Thrombin จากนั้น Thrombin จะเร่งปฏิกิริยาตัดสาย Fibrinogen (ละลายน้ำได้) ให้กลายเป็น Fibrin threads (เส้นใยที่ไม่ละลายน้ำ) ซึ่งจะประสานกับ Factor XIII กลายเป็นร่างแหคลุมก้อนลิ่มเลือด (Clot)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 15,
    "tags": [
      "coagulation",
      "thrombin",
      "fibrinogen",
      "fibrin"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-013",
    "questionText": "ในการเก็บตัวอย่างเลือดส่งตรวจทางห้องปฏิบัติการ เมื่อนำเลือดที่ไม่ได้ใส่สารกันเลือดแข็งมาตั้งทิ้งไว้จนแข็งตัวแล้วนำไปปั่นเหวี่ยง ของเหลวส่วนใสที่แยกตัวออกมาด้านบนเรียกว่าอะไร และมีความแตกต่างจากพลาสมา (Plasma) อย่างไร?",
    "options": {
      "A": "Serum (ซีรัม) ซึ่งแตกต่างจากพลาสมาตรงที่ไม่มีโปรตีนไฟบริโนเจน (Fibrinogen) และสารก่อลิ่มเลือด (Clotting factors) บางชนิดเนื่องจากถูกใช้ไปในการสร้างก้อนลิ่มเลือดแล้ว",
      "B": "Plasma ซึ่งมีส่วนประกอบของ Fibrinogen เข้มข้นกว่าเลือดปกติ 2 เท่า",
      "C": "Buffy coat ซึ่งประกอบด้วยเกล็ดเลือดบริสุทธิ์",
      "D": "Lymph ซึ่งมีไขมันและไคโลไมครอนสูงกว่าพลาสมา"
    },
    "correctOption": "A",
    "explanation": "Serum = Plasma ลบ Fibrinogen และ Clotting factors (เนื่องจากไฟบริโนเจนถูกเปลี่ยนเป็นไฟบรินและจับอยู่ในก้อนลิ่มเลือดด้านล่างหลอดทดลองไปแล้ว) ดังนั้นในซีรัมจึงไม่มีโปรตีนที่ทำให้เกิดการแข็งตัวของเลือดหลงเหลืออยู่",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 6,
    "tags": [
      "serum-vs-plasma",
      "fibrinogen",
      "laboratory"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-014",
    "questionText": "เม็ดเลือดขาวชนิด Lymphocyte แบ่งออกเป็น B cells และ T cells ข้อใดเปรียบเทียบสถานที่พัฒนาจนโตเต็มวัย (Maturation) และหน้าที่ทางกายวิภาค-ภูมิคุ้มกันได้ถูกต้อง?",
    "options": {
      "A": "B cells เจริญที่ม้าม (Spleen) ส่วน T cells เจริญที่ต่อมน้ำเหลือง (Lymph nodes)",
      "B": "B cells เจริญเติบโตเต็มวัยที่ Bone marrow และเปลี่ยนเป็น Plasma cells สร้าง Antibodies ส่วน T cells เคลื่อนที่ไปเจริญเติบโตเต็มวัยที่ต่อม Thymus ทำหน้าที่ในระบบ Cell-mediated immunity",
      "C": "B cells ทำลายเซลล์ติดเชื้อไวรัสโดยตรง ส่วน T cells สร้างเฉพาะฮิสตามีน",
      "D": "ทั้ง B cells และ T cells เจริญเติบโตเต็มวัยและสร้างแอนติบอดีที่ต่อมไทรอยด์"
    },
    "correctOption": "B",
    "explanation": "Lymphocytes ทั้งหมดกำเนิดจากสเต็มเซลล์ในไขกระดูก (Red bone marrow) โดย B cells จะพัฒนาจนเจริญเต็มวัยในไขกระดูก (Bone marrow-derived) รับผิดชอบ Humoral immunity ส่วน T cells จะเคลื่อนตัวผ่านกระแสเลือดไปยังต่อมไทมัส (Thymus-derived) เพื่อรับการคัดเลือกและเจริญเติบโต รับผิดชอบ Cell-mediated immunity",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 12,
    "tags": [
      "lymphocytes",
      "b-cells",
      "t-cells",
      "thymus",
      "bone-marrow"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-015",
    "questionText": "ฮีมาโตคริต (Hematocrit / Packed Cell Volume: PCV) มีความหมายทางคลินิกอย่างไร และค่าปกติในผู้ใหญ่เพศชายและเพศหญิงประมาณเท่าใด?",
    "options": {
      "A": "สัดส่วนของเกล็ดเลือดในหลอดทดลอง โดยมีค่าเฉลี่ย 10-15% ในทั้งสองเพศ",
      "B": "ปริมาณกรดอะมิโนทั้งหมดในซีรัม โดยเพศชาย 20% เพศหญิง 15%",
      "C": "สัดส่วนเปอร์เซ็นต์ปริมาตรของเม็ดเลือดแดงอัดแน่นเทียบกับปริมาตรเลือดทั้งหมด โดยเพศชายปกติประมาณ 40-54% และเพศหญิงประมาณ 37-47%",
      "D": "อัตราการตกตะกอนของเม็ดเลือดแดงใน 1 ชั่วโมง โดยมีค่าปกติเท่ากับ 0%"
    },
    "correctOption": "C",
    "explanation": "Hematocrit (Hct) คือร้อยละของปริมาตรเม็ดเลือดแดงอัดแน่นต่อปริมาตรเลือดรวมหลังจากการปั่นเหวี่ยง (Centrifugation) ในผู้ชายมีค่าเฉลี่ยประมาณ 45% (ช่วง 40-54%) สูงกว่าผู้หญิง (เฉลี่ย 42%, ช่วง 37-47%) เนื่องจากฮอร์โมนเทสโทสเตอโรนกระตุ้นการหลั่ง Erythropoietin จากไตได้มากกว่า",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Components & Hematology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 6,
    "tags": [
      "hematocrit",
      "pcv",
      "clinical-lab"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-016",
    "questionText": "ในการตรวจร่างกายผู้ป่วย แพทย์ทำการคลำหายอดหัวใจ (Apex of the heart) เพื่อประเมินภาวะหัวใจโต (Cardiomegaly) ตำแหน่งทางกายวิภาคพื้นผิว (Surface anatomy) ปกติของ Apex beat อยู่ที่บริเวณใด?",
    "options": {
      "A": "บริเวณใต้ลิ้นปี่ (Subxiphoid area) ตรงแนว Midsternal line",
      "B": "ช่องซี่โครงที่ 2 ด้านขวา (Right 2nd intercostal space) ชิดขอบกระดูกอก",
      "C": "ช่องซี่โครงที่ 3 ด้านซ้าย ชิดขอบกระดูกอก (Left sternal border)",
      "D": "ช่องซี่โครงที่ 5 ด้านซ้าย (Left 5th intercostal space) ตัดกับแนวระนาบกึ่งกลางกระดูกไหปลาร้า (Midclavicular line)"
    },
    "correctOption": "D",
    "explanation": "Apex ของหัวใจเกิดจากปลายของ Left Ventricle ชี้ลงด้านล่าง หน้า และซ้าย ตำแหน่งทางกายวิภาคปกติอยู่ที่ช่องซี่โครงที่ 5 ตัดกับแนวกึ่งกลางกระดูกไหปลาร้าซ้าย (Left 5th ICS, midclavicular line) ห่างจากขอบกระดูกอกประมาณ 7-9 ซม.",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Anatomy & Pericardium",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 18,
    "tags": [
      "apex-beat",
      "surface-anatomy",
      "mediastinum"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-017",
    "questionText": "ผู้ป่วยประสบอุบัติเหตุถูกแทงที่ทรวงอกด้านหน้า มีภาวะ Cardiac tamponade (ของเหลวสะสมในช่องเยื่อหุ้มหัวใจบีบรัดหัวใจ) ช่องว่างทางกายวิภาคที่เกิดการคั่งของเลือดคือช่องใด และอยู่ระหว่างโครงสร้างใด?",
    "options": {
      "A": "Pericardial cavity ซึ่งอยู่ระหว่างชั้น Parietal serous pericardium กับ Visceral serous pericardium (Epicardium)",
      "B": "Pleural cavity ซึ่งอยู่ระหว่าง Fibrous pericardium กับ Endocardium",
      "C": "Mediastinal space ซึ่งอยู่ระหว่าง Myocardium กับ Endocardium",
      "D": "Subepicardial space ซึ่งอยู่ระหว่างชั้นกล้ามเนื้อหัวใจกับลิ้นหัวใจ"
    },
    "correctOption": "A",
    "explanation": "เยื่อหุ้มหัวใจชั้น Serous pericardium มี 2 ชั้น คือ Parietal layer บุติดกับ Fibrous pericardium ด้านนอก และ Visceral layer (Epicardium) บุแนบติดผิวกล้ามเนื้อหัวใจ ช่องว่างเสมือนระหว่างสองชั้นนี้เรียกว่า Pericardial cavity บรรจุ Pericardial fluid ปกติ 15-50 มล. หากมีเลือดหรือน้ำสะสมรวดเร็วจะเกิด Cardiac tamponade บีบขัดขวางการคลายตัวรับเลือดของหัวใจ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Anatomy & Pericardium",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 20,
    "tags": [
      "pericardium",
      "cardiac-tamponade",
      "serous-cavity"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-018",
    "questionText": "เยื่อหุ้มหัวใจชั้นนอกสุด Fibrous pericardium มีลักษณะโครงสร้างทางเนื้อเยื่ออย่างไร และมีบทบาทหน้าที่ทางกลไกป้องกันอย่างไร?",
    "options": {
      "A": "เป็นเนื้อเยื่อบุผิว Simple squamous epithelium สร้างของเหลวหล่อลื่นลดแรงเสียดทาน",
      "B": "เป็นเนื้อเยื่อเกี่ยวพันชนิด Dense irregular connective tissue หนา เหนียว ไม่ยืดหยุ่น ป้องกันไม่ให้หัวใจขยายตัวมากเกินไป (Overfilling) และยึดตรึงหัวใจไว้กับกะบังลมและกระดูกอก",
      "C": "เป็นกล้ามเนื้อเรียบที่ช่วยบีบรูดเลือดออกจากหัวใจห้องบน",
      "D": "เป็นชั้นไขมันหนาทำหน้าที่ผลิตฮอร์โมนชะลอการเต้นของหัวใจ"
    },
    "correctOption": "B",
    "explanation": "Fibrous pericardium เป็นถุงเนื้อเยื่อเกี่ยวพันเหนียวหนา (Dense irregular connective tissue) ไม่มีคุณสมบัติยืดหยุ่น ทำหน้าที่ป้องกันไม่ให้หัวใจพองขยายตัวเกินขีดจำกัด ยึดตรึงหัวใจไว้กับ Central tendon ของกระบังลมและกระดูกอก (Sternopericardial ligaments)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Anatomy & Pericardium",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 19,
    "tags": [
      "fibrous-pericardium",
      "dense-connective-tissue"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-019",
    "questionText": "ผนังของหัวใจ (Heart wall) ประกอบด้วย 3 ชั้น ชั้นใดที่มีความหนามากที่สุด ประกอบด้วยเซลล์กล้ามเนื้อหัวใจที่เรียงตัวเป็นเกลียว และมีคุณสมบัติหดตัวบีบเลือด?",
    "options": {
      "A": "Endocardium",
      "B": "Epicardium (Visceral pericardium)",
      "C": "Myocardium",
      "D": "Fibrous pericardium"
    },
    "correctOption": "C",
    "explanation": "ผนังหัวใจมี 3 ชั้น: 1. Epicardium (ชั้นนอก มีหลอดเลือดโคโรนารีและไขมัน) 2. Myocardium (ชั้นกลาง หนาที่สุด ประกอบด้วย Cardiac muscle cells) 3. Endocardium (ชั้นในสุด เป็น Endothelium ต่อเนื่องกับหลอดเลือดและคลุมผิวลิ้นหัวใจ)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Wall & Histology",
    "difficulty": "Easy",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 22,
    "tags": [
      "heart-wall",
      "myocardium"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-020",
    "questionText": "ผู้ป่วยโรค Infective Endocarditis มีการติดเชื้อแบคทีเรียที่ชั้นในสุดของหัวใจ ทำให้เกิดก้อน Vegetations บนลิ้นหัวใจ ชั้น Endocardium ประกอบด้วยเซลล์ชนิดใด และต่อเนื่องกับโครงสร้างใดของหลอดเลือด?",
    "options": {
      "A": "Dense regular elastic tissue ต่อเนื่องกับกระดูกซี่โครง",
      "B": "Simple cuboidal epithelium ต่อเนื่องกับชั้น Tunica media",
      "C": "Stratified squamous epithelium ต่อเนื่องกับชั้น Tunica adventitia",
      "D": "Endothelium (Simple squamous epithelium) ร่วมกับชั้น Subendothelial connective tissue ซึ่งเรียงตัวต่อเนื่องกับชั้น Tunica intima ของหลอดเลือดขนาดใหญ่"
    },
    "correctOption": "D",
    "explanation": "Endocardium เป็นชั้นเนื้อเยื่อบุผิวชนิด Simple squamous epithelium (Endothelium) บุแนบติดผิวภายในห้องหัวใจทั้งหมด คลุม Trabeculae carneae, Papillary muscles และแผ่นลิ้นหัวใจทั้งหมด โดยเรียงตัวเชื่อมต่อเป็นผืนเดียวกับ Tunica intima ของหลอดเลือดที่เข้าและออกจากหัวใจ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Wall & Histology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 22,
    "tags": [
      "endocardium",
      "infective-endocarditis",
      "tunica-intima"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-021",
    "questionText": "Intercalated discs ที่พบในเซลล์กล้ามเนื้อหัวใจ (Cardiac muscle tissue) ประกอบด้วยรอยต่อระหว่างเซลล์ (Cell junctions) ที่สำคัญ 2 ชนิด โครงสร้างใดทำหน้าที่นำกระแสประสาทและไอออนอย่างรวดเร็วเพื่อให้หัวใจบีบตัวพร้อมกันแบบ Functional syncytium?",
    "options": {
      "A": "Gap junctions (Nexus)",
      "B": "Desmosomes (Macula adherens)",
      "C": "Tight junctions (Zonula occludens)",
      "D": "Hemidesmosomes"
    },
    "correctOption": "A",
    "explanation": "Intercalated discs มี Junctions สำคัญ 2 แบบ: 1. Desmosomes (และ Fascia adherens) ทำหน้าที่ยึดเหนี่ยวเชิงกลไม่ให้เซลล์หลุดออกจากกันขณะบีบตัวแรง 2. Gap junctions (Nexus) ทำหน้าที่เป็นช่องทางผ่านของไอออน (Electrical coupling) ส่งต่อ Action potential ได้รวดเร็ว ทำให้กล้ามเนื้อหัวใจทำงานเสมือนเซลล์เดียวยักษ์ (Functional syncytium)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Wall & Histology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 22,
    "tags": [
      "intercalated-discs",
      "gap-junctions",
      "functional-syncytium"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-022",
    "questionText": "หัวใจตั้งอยู่ในช่องอกบริเวณใด และมีแกนการวางตัวชี้ไปในทิศทางใด?",
    "options": {
      "A": "Anterior mediastinum โดย Base ชี้ไปทางด้านหน้า และ Apex ชี้ไปทางด้านหลัง",
      "B": "Middle mediastinum โดย Base ชี้ไปทางด้านหลัง บน และขวา ส่วน Apex ชี้ไปทางด้านหน้า ล่าง และซ้าย",
      "C": "Superior mediastinum เหนือระดับกระดูกสันหลัง T4",
      "D": "Posterior mediastinum ระหว่างหลอดอาหารกับกระดูกสันหลัง"
    },
    "correctOption": "B",
    "explanation": "หัวใจและถุงเยื่อหุ้มหัวใจตั้งอยู่ใน Middle mediastinum (ส่วนหนึ่งของ Inferior mediastinum) ระหว่างปอดทั้ง 2 ข้าง 2 ใน 3 ของเนื้อหัวใจอยู่ค่อนไปทางซ้ายของ Midsternal line โดยแกนยาวของหัวใจเอียงจาก Base (หลัง-บน-ขวา) ไปสู่ Apex (หน้า-ล่าง-ซ้าย)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Anatomy & Pericardium",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 17,
    "tags": [
      "middle-mediastinum",
      "heart-orientation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-023",
    "questionText": "ผนังกล้ามเนื้อของหัวใจห้องล่างซ้าย (Left Ventricle) มีความหนามากกว่าหัวใจห้องล่างขวา (Right Ventricle) ประมาณ 3 เท่า ความแตกต่างทางโครงสร้างนี้สอดคล้องกับหน้าที่ทางสรีรวิทยาอย่างไร?",
    "options": {
      "A": "Right Ventricle มีลิ้นหัวใจ 3 แฉกจึงต้องการแรงบีบที่น้อยกว่า",
      "B": "Left Ventricle ต้องรับเลือดที่มีปริมาตรมากกว่า Right Ventricle 3 เท่าในแต่ละรอบหัวใจเต้น",
      "C": "Left Ventricle ต้องสร้างแรงดันสูงในการบีบเลือดต้านแรงต้านทานของระบบไหลเวียนทั่วร่างกาย (Systemic circulation: ความดันประมาณ 120 mmHg) ขณะที่ Right Ventricle ปั๊มเลือดไปเฉพาะปอด (Pulmonary circulation: ความดันประมาณ 25 mmHg)",
      "D": "Left Ventricle มีหลอดเลือดดำมากกว่าหลอดเลือดแดงหล่อเลี้ยง"
    },
    "correctOption": "C",
    "explanation": "ปริมาตรเลือดที่บีบออกจากทั้งสองห้องเท่ากัน (Stroke volume เท่ากัน) แต่ Left Ventricle ต้องสูบฉีดเลือดไปยังหลอดเลือดแดงทั่วร่างกายที่มีความต้านทานสูง (Systemic vascular resistance, 120/80 mmHg) ผนังกล้ามเนื้อจึงต้องหนาประมาณ 10-15 มม. ขณะที่ Right Ventricle สูบฉีดเลือดไปปอดที่มีระยะทางสั้นและแรงต้านต่ำ (25/8 mmHg) ผนังจึงหนาเพียง 3-5 มม.",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 31,
    "tags": [
      "left-ventricle",
      "wall-thickness",
      "systemic-circulation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-024",
    "questionText": "โครงสร้างที่เรียกว่า Sulcus หรือร่องบนผิวภายนอกของหัวใจที่เป็นรอยคอดระหว่าง Atria กับ Ventricles และเป็นที่ทอดผ่านของหลอดเลือด Coronary sinus คือข้อใด?",
    "options": {
      "A": "Terminal sulcus",
      "B": "Anterior interventricular sulcus",
      "C": "Posterior interventricular sulcus",
      "D": "Coronary sulcus (Atrioventricular groove)"
    },
    "correctOption": "D",
    "explanation": "Coronary sulcus (AV groove) เป็นร่องวงแหวนที่แบ่งขอบเขตภายนอกระหว่างหัวใจห้องบน (Atria) กับห้องล่าง (Ventricles) เป็นที่อยู่ของ Right coronary artery, Circumflex artery และ Coronary sinus",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Anatomy & Pericardium",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 21,
    "tags": [
      "coronary-sulcus",
      "av-groove"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-025",
    "questionText": "ร่องภายนอกที่แบ่งขอบเขตระหว่าง Left Ventricle และ Right Ventricle ทางด้านหน้าของหัวใจคือข้อใด และมีหลอดเลือดสำคัญคู่ใดทอดผ่านอยู่ภายในร่องนี้?",
    "options": {
      "A": "Anterior interventricular sulcus โดยมี Anterior Interventricular Artery (LAD) และ Great Cardiac Vein ทอดผ่าน",
      "B": "Posterior interventricular sulcus โดยมี Posterior interventricular artery และ Middle cardiac vein ทอดผ่าน",
      "C": "Coronary sulcus โดยมี Small cardiac vein ทอดผ่าน",
      "D": "Terminal sulcus โดยมี Right marginal artery ทอดผ่าน"
    },
    "correctOption": "A",
    "explanation": "Anterior interventricular sulcus ทอดตัวอยู่บนผิวด้านหน้าของหัวใจ แยก RV ออกจาก LV โดยภายในร่องนี้มีเส้นเลือดแดง Anterior Interventricular Artery (Left Anterior Descending: LAD) ทอดคู่กับเส้นเลือดดำ Great Cardiac Vein",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Anatomy & Pericardium",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 21,
    "tags": [
      "anterior-interventricular-sulcus",
      "lad",
      "great-cardiac-vein"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-026",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [A]] หัวใจห้องบนขวา (Right Atrium) ได้รับเลือดที่มีออกซิเจนต่ำ (Deoxygenated blood) กลับเข้าสู่หัวใจผ่านช่องเปิดของหลอดเลือดดำกี่สาย และได้แก่หลอดเลือดใดบ้าง?",
    "options": {
      "A": "4 สาย ได้แก่ Pulmonary veins 4 เส้น",
      "B": "3 สาย ได้แก่ Superior Vena Cava, Inferior Vena Cava และ Coronary Sinus",
      "C": "2 สาย ได้แก่ Superior Vena Cava และ Aorta",
      "D": "1 สาย ได้แก่ Pulmonary trunk"
    },
    "correctOption": "B",
    "explanation": "Right Atrium รับเลือดดำจากทั่วร่างกายผ่าน 3 ช่องเปิดหลัก: 1. Superior Vena Cava (SVC) รับเลือดจากศีรษะ คอ แขน และทรวงอก 2. Inferior Vena Cava (IVC) รับเลือดจากลำตัวส่วนล่าง ท้อง และขา 3. Coronary Sinus รับเลือดดำจากกล้ามเนื้อหัวใจเอง\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Internal Anatomy of the Heart: Chambers, Valves & Great Vessels): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [A] (Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 24,
    "tags": [
      "right-atrium",
      "svc",
      "ivc",
      "coronary-sinus",
      "has-diagram",
      "diagram-heart_chambers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/heart_chambers_exam.svg",
    "labeledImageUrl": "/images/anatomy/heart_chambers_labeled.svg",
    "imageCaption": "Internal Anatomy of the Heart: Chambers, Valves & Great Vessels — ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Superior Vena Cava (SVC)",
        "thaiName": "หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA",
        "description": "ตำแหน่ง [A] คือ Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA"
      },
      {
        "pin": "B",
        "term": "Fossa Ovalis (Interatrial Septum)",
        "thaiName": "รอยบุ๋มรูปไข่ (ซาก Foramen ovale)",
        "description": "ตำแหน่ง [B] คือ Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)"
      },
      {
        "pin": "C",
        "term": "Tricuspid Valve & Chordae Tendineae",
        "thaiName": "ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ",
        "description": "ตำแหน่ง [C] คือ Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ"
      },
      {
        "pin": "D",
        "term": "Interventricular Septum",
        "thaiName": "ผนังกั้นหัวใจห้องล่างซ้าย-ขวา",
        "description": "ตำแหน่ง [D] คือ Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา"
      },
      {
        "pin": "E",
        "term": "Bicuspid (Mitral) Valve",
        "thaiName": "ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV",
        "description": "ตำแหน่ง [E] คือ Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV"
      },
      {
        "pin": "F",
        "term": "Left Ventricular Myocardium",
        "thaiName": "กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)",
        "description": "ตำแหน่ง [F] คือ Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)"
      }
    ]
  },
  {
    "id": "CARDIO-027",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [B]] ในหัวใจห้องบนขวา (Right Atrium) ผนังด้านในแบ่งออกเป็น 2 ส่วน คือส่วนผนังขรุขระด้านหน้าและส่วนผนังเรียบด้านหลัง สันนูนของกล้ามเนื้อที่ทำให้เกิดลักษณะขรุขระคล้ายซี่หวีเรียกว่าอะไร?",
    "options": {
      "A": "Papillary muscles",
      "B": "Trabeculae carneae",
      "C": "Pectinate muscles (Musculi pectinati)",
      "D": "Chordae tendineae"
    },
    "correctOption": "C",
    "explanation": "ใน Right Atrium ผนังด้านหน้าและภายใน Right auricle มีสันกล้ามเนื้อนูนคล้ายซี่หวีเรียกว่า Pectinate muscles โดยแยกออกจากส่วนผนังเรียบด้านหลัง (Sinus venarum) ด้วยสันนูนแนวดิ่งที่เรียกว่า Crista terminalis\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Internal Anatomy of the Heart: Chambers, Valves & Great Vessels): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [B] (Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 25,
    "tags": [
      "pectinate-muscles",
      "right-atrium",
      "crista-terminalis",
      "has-diagram",
      "diagram-heart_chambers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/heart_chambers_exam.svg",
    "labeledImageUrl": "/images/anatomy/heart_chambers_labeled.svg",
    "imageCaption": "Internal Anatomy of the Heart: Chambers, Valves & Great Vessels — ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Superior Vena Cava (SVC)",
        "thaiName": "หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA",
        "description": "ตำแหน่ง [A] คือ Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA"
      },
      {
        "pin": "B",
        "term": "Fossa Ovalis (Interatrial Septum)",
        "thaiName": "รอยบุ๋มรูปไข่ (ซาก Foramen ovale)",
        "description": "ตำแหน่ง [B] คือ Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)"
      },
      {
        "pin": "C",
        "term": "Tricuspid Valve & Chordae Tendineae",
        "thaiName": "ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ",
        "description": "ตำแหน่ง [C] คือ Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ"
      },
      {
        "pin": "D",
        "term": "Interventricular Septum",
        "thaiName": "ผนังกั้นหัวใจห้องล่างซ้าย-ขวา",
        "description": "ตำแหน่ง [D] คือ Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา"
      },
      {
        "pin": "E",
        "term": "Bicuspid (Mitral) Valve",
        "thaiName": "ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV",
        "description": "ตำแหน่ง [E] คือ Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV"
      },
      {
        "pin": "F",
        "term": "Left Ventricular Myocardium",
        "thaiName": "กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)",
        "description": "ตำแหน่ง [F] คือ Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)"
      }
    ]
  },
  {
    "id": "CARDIO-028",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [C]] โครงสร้างรูปไข่บุ๋ม (Oval depression) ที่พบบนผนังกั้นระหว่างหัวใจห้องบน (Interatrial septum) ในหัวใจของผู้ใหญ่คือข้อใด และเป็นโครงสร้างที่หลงเหลือมาจากสิ่งใดในระยะทารกในครรภ์?",
    "options": {
      "A": "Ligamentum teres ซึ่งเป็นซากของ Umbilical vein",
      "B": "Ligamentum arteriosum ซึ่งเป็นซากของ Ductus arteriosus",
      "C": "Fossa navicularis ซึ่งเป็นซากของ Ductus venosus",
      "D": "Fossa ovalis ซึ่งเป็นซากที่ปิดตัวลงของ Foramen ovale"
    },
    "correctOption": "D",
    "explanation": "Fossa ovalis อยู่บน Interatrial septum เกิดจากการปิดตัวของ Foramen ovale ซึ่งเป็นรูลัดเชื่อมระหว่าง RA กับ LA ในทารกในครรภ์เพื่อบายพาสปอดที่ยังไม่ทำงาน หากรูนี้ปิดไม่สนิทหลังคลอดจะทำให้เกิดโรคหัวใจพิการแต่กำเนิดชนิด Atrial Septal Defect (ASD)\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Internal Anatomy of the Heart: Chambers, Valves & Great Vessels): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [C] (Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 25,
    "tags": [
      "fossa-ovalis",
      "foramen-ovale",
      "asd",
      "has-diagram",
      "diagram-heart_chambers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/heart_chambers_exam.svg",
    "labeledImageUrl": "/images/anatomy/heart_chambers_labeled.svg",
    "imageCaption": "Internal Anatomy of the Heart: Chambers, Valves & Great Vessels — ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Superior Vena Cava (SVC)",
        "thaiName": "หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA",
        "description": "ตำแหน่ง [A] คือ Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA"
      },
      {
        "pin": "B",
        "term": "Fossa Ovalis (Interatrial Septum)",
        "thaiName": "รอยบุ๋มรูปไข่ (ซาก Foramen ovale)",
        "description": "ตำแหน่ง [B] คือ Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)"
      },
      {
        "pin": "C",
        "term": "Tricuspid Valve & Chordae Tendineae",
        "thaiName": "ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ",
        "description": "ตำแหน่ง [C] คือ Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ"
      },
      {
        "pin": "D",
        "term": "Interventricular Septum",
        "thaiName": "ผนังกั้นหัวใจห้องล่างซ้าย-ขวา",
        "description": "ตำแหน่ง [D] คือ Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา"
      },
      {
        "pin": "E",
        "term": "Bicuspid (Mitral) Valve",
        "thaiName": "ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV",
        "description": "ตำแหน่ง [E] คือ Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV"
      },
      {
        "pin": "F",
        "term": "Left Ventricular Myocardium",
        "thaiName": "กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)",
        "description": "ตำแหน่ง [F] คือ Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)"
      }
    ]
  },
  {
    "id": "CARDIO-029",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [F]] ผนังภายในของหัวใจห้องล่างขวา (Right Ventricle) และห้องล่างซ้าย (Left Ventricle) มีสันกล้ามเนื้อนูนไขว้ประสานกันเป็นร่างแหจำนวนมาก สันกล้ามเนื้อนี้มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Trabeculae carneae",
      "B": "Pectinate muscles",
      "C": "Papillary muscles",
      "D": "Moderator band"
    },
    "correctOption": "A",
    "explanation": "Trabeculae carneae เป็นสันกล้ามเนื้อนูนคล้ายแท่งเนื้อไขว้กันบนผนังภายในของ Ventricle ทั้งสองห้อง ช่วยป้องกันไม่ให้เกิดแรงดูดติดกันของผนังห้องหัวใจในขณะบีบตัว ส่วน Pectinate muscles พบเฉพาะใน Atria\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Internal Anatomy of the Heart: Chambers, Valves & Great Vessels): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [F] (Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 27,
    "tags": [
      "trabeculae-carneae",
      "ventricles",
      "has-diagram",
      "diagram-heart_chambers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/heart_chambers_exam.svg",
    "labeledImageUrl": "/images/anatomy/heart_chambers_labeled.svg",
    "imageCaption": "Internal Anatomy of the Heart: Chambers, Valves & Great Vessels — ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Superior Vena Cava (SVC)",
        "thaiName": "หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA",
        "description": "ตำแหน่ง [A] คือ Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA"
      },
      {
        "pin": "B",
        "term": "Fossa Ovalis (Interatrial Septum)",
        "thaiName": "รอยบุ๋มรูปไข่ (ซาก Foramen ovale)",
        "description": "ตำแหน่ง [B] คือ Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)"
      },
      {
        "pin": "C",
        "term": "Tricuspid Valve & Chordae Tendineae",
        "thaiName": "ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ",
        "description": "ตำแหน่ง [C] คือ Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ"
      },
      {
        "pin": "D",
        "term": "Interventricular Septum",
        "thaiName": "ผนังกั้นหัวใจห้องล่างซ้าย-ขวา",
        "description": "ตำแหน่ง [D] คือ Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา"
      },
      {
        "pin": "E",
        "term": "Bicuspid (Mitral) Valve",
        "thaiName": "ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV",
        "description": "ตำแหน่ง [E] คือ Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV"
      },
      {
        "pin": "F",
        "term": "Left Ventricular Myocardium",
        "thaiName": "กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)",
        "description": "ตำแหน่ง [F] คือ Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)"
      }
    ]
  },
  {
    "id": "CARDIO-030",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [C]] ผู้ป่วยมีภาวะลิ้นหัวใจ Tricuspid ปลิ้นรั่วรุนแรง (Tricuspid regurgitation) จากการฉีกขาดของเส้นเอ็นยึดลิ้นหัวใจ เส้นใยคอลลาเจนเหนียวที่เชื่อมระหว่างขอบแผ่นลิ้นหัวใจ AV valves กับกล้ามเนื้อ Papillary muscles คือโครงสร้างใด?",
    "options": {
      "A": "Ligamentum arteriosum",
      "B": "Chordae tendineae (เอ็นยึดลิ้นหัวใจ)",
      "C": "Fibrous trigone",
      "D": "Annulus fibrosus"
    },
    "correctOption": "B",
    "explanation": "Chordae tendineae (Heart strings) เป็นสายเอ็นคอลลาเจนเหนียวที่ยึดระหว่างขอบของ Cusp ของ Atrioventricular (AV) valves (ทั้ง Tricuspid และ Mitral) กับปลายของ Papillary muscles ทำหน้าที่ดึงรั้งลิ้นไว้ไม่ให้ปลิ้นกลับเข้าไปใน Atria ในช่วง Ventricular systole\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Internal Anatomy of the Heart: Chambers, Valves & Great Vessels): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [C] (Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 27,
    "tags": [
      "chordae-tendineae",
      "papillary-muscles",
      "tricuspid-regurgitation",
      "has-diagram",
      "diagram-heart_chambers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/heart_chambers_exam.svg",
    "labeledImageUrl": "/images/anatomy/heart_chambers_labeled.svg",
    "imageCaption": "Internal Anatomy of the Heart: Chambers, Valves & Great Vessels — ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Superior Vena Cava (SVC)",
        "thaiName": "หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA",
        "description": "ตำแหน่ง [A] คือ Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA"
      },
      {
        "pin": "B",
        "term": "Fossa Ovalis (Interatrial Septum)",
        "thaiName": "รอยบุ๋มรูปไข่ (ซาก Foramen ovale)",
        "description": "ตำแหน่ง [B] คือ Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)"
      },
      {
        "pin": "C",
        "term": "Tricuspid Valve & Chordae Tendineae",
        "thaiName": "ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ",
        "description": "ตำแหน่ง [C] คือ Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ"
      },
      {
        "pin": "D",
        "term": "Interventricular Septum",
        "thaiName": "ผนังกั้นหัวใจห้องล่างซ้าย-ขวา",
        "description": "ตำแหน่ง [D] คือ Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา"
      },
      {
        "pin": "E",
        "term": "Bicuspid (Mitral) Valve",
        "thaiName": "ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV",
        "description": "ตำแหน่ง [E] คือ Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV"
      },
      {
        "pin": "F",
        "term": "Left Ventricular Myocardium",
        "thaiName": "กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)",
        "description": "ตำแหน่ง [F] คือ Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)"
      }
    ]
  },
  {
    "id": "CARDIO-031",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [E]] ในขณะที่หัวใจห้องล่าง (Ventricles) กำลังบีบตัวดันเลือดออกสู่หลอดเลือดแดงใหญ่ (Ventricular systole) กลไกทางกายวิภาคใดที่ช่วยป้องกันไม่ให้ลิ้น Atrioventricular (AV) valves ปลิ้นถอยหลังเข้าไปในหัวใจห้องบน?",
    "options": {
      "A": "Pectinate muscles ในห้องบนบีบดันแผ่นลิ้นลงด้านล่าง",
      "B": "เลือดในหลอดเลือด Aorta ไหลย้อนกลับลงมาดันแผ่นลิ้นให้ประกบกัน",
      "C": "Papillary muscles หดตัวพร้อมกันเพื่อดึงสายเอ็น Chordae tendineae ให้ตึงรั้งแผ่นลิ้นไว้",
      "D": "ความดันในห้อง Atrium สูงกว่าความดันในห้อง Ventricle"
    },
    "correctOption": "C",
    "explanation": "ขณะ Ventricular systole ความดันใน Ventricle จะพุ่งสูงขึ้นมาก ซึ่งจะผลักให้แผ่นลิ้น AV valves ปิดแนบกัน ในเวลาเดียวกัน Papillary muscles จะหดตัวดึงสาย Chordae tendineae ให้ตึงแน่น ป้องกันไม่ให้ Cusps ปลิ้น (Eversion/Prolapse) เข้าสู่ Atria\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Internal Anatomy of the Heart: Chambers, Valves & Great Vessels): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [E] (Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 28,
    "tags": [
      "papillary-muscles",
      "valve-mechanism",
      "systole",
      "has-diagram",
      "diagram-heart_chambers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/heart_chambers_exam.svg",
    "labeledImageUrl": "/images/anatomy/heart_chambers_labeled.svg",
    "imageCaption": "Internal Anatomy of the Heart: Chambers, Valves & Great Vessels — ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Superior Vena Cava (SVC)",
        "thaiName": "หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA",
        "description": "ตำแหน่ง [A] คือ Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA"
      },
      {
        "pin": "B",
        "term": "Fossa Ovalis (Interatrial Septum)",
        "thaiName": "รอยบุ๋มรูปไข่ (ซาก Foramen ovale)",
        "description": "ตำแหน่ง [B] คือ Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)"
      },
      {
        "pin": "C",
        "term": "Tricuspid Valve & Chordae Tendineae",
        "thaiName": "ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ",
        "description": "ตำแหน่ง [C] คือ Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ"
      },
      {
        "pin": "D",
        "term": "Interventricular Septum",
        "thaiName": "ผนังกั้นหัวใจห้องล่างซ้าย-ขวา",
        "description": "ตำแหน่ง [D] คือ Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา"
      },
      {
        "pin": "E",
        "term": "Bicuspid (Mitral) Valve",
        "thaiName": "ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV",
        "description": "ตำแหน่ง [E] คือ Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV"
      },
      {
        "pin": "F",
        "term": "Left Ventricular Myocardium",
        "thaiName": "กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)",
        "description": "ตำแหน่ง [F] คือ Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)"
      }
    ]
  },
  {
    "id": "CARDIO-032",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [D]] โครงสร้างกล้ามเนื้อชนิดพิเศษที่พาดผ่านช่องภายในหัวใจห้องล่างขวา เชื่อมระหว่าง Interventricular septum กับฐานของ Anterior papillary muscle มีบทบาทนำกระแสไฟฟ้าไปยังผนังห้องล่างขวา คือโครงสร้างใด?",
    "options": {
      "A": "Fossa ovalis",
      "B": "Crista terminalis",
      "C": "Tendon of Todaro",
      "D": "Moderator band (Septomarginal trabecula)"
    },
    "correctOption": "D",
    "explanation": "Moderator band (Septomarginal trabecula) เป็นมัดกล้ามเนื้อและ Purkinje fibers พิเศษที่พบเฉพาะใน Right Ventricle เชื่อมจาก Interventricular septum ไปยัง Anterior papillary muscle ทำหน้าที่เป็นทางลัดนำสัญญาณกระแสประสาท (Right bundle branch) ช่วยให้ Papillary muscle หดตัวประสานเวลากับการบีบตัวของ Ventricle\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Internal Anatomy of the Heart: Chambers, Valves & Great Vessels): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [D] (Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 27,
    "tags": [
      "moderator-band",
      "septomarginal-trabecula",
      "right-ventricle",
      "has-diagram",
      "diagram-heart_chambers"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/heart_chambers_exam.svg",
    "labeledImageUrl": "/images/anatomy/heart_chambers_labeled.svg",
    "imageCaption": "Internal Anatomy of the Heart: Chambers, Valves & Great Vessels — ภาพตัดขวางภายในห้องหัวใจ ลิ้นหัวใจทั้ง 4 และหลอดเลือดใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Superior Vena Cava (SVC)",
        "thaiName": "หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA",
        "description": "ตำแหน่ง [A] คือ Superior Vena Cava (SVC) — หลอดเลือดดำใหญ่ส่วนบนเทเข้า RA"
      },
      {
        "pin": "B",
        "term": "Fossa Ovalis (Interatrial Septum)",
        "thaiName": "รอยบุ๋มรูปไข่ (ซาก Foramen ovale)",
        "description": "ตำแหน่ง [B] คือ Fossa Ovalis (Interatrial Septum) — รอยบุ๋มรูปไข่ (ซาก Foramen ovale)"
      },
      {
        "pin": "C",
        "term": "Tricuspid Valve & Chordae Tendineae",
        "thaiName": "ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ",
        "description": "ตำแหน่ง [C] คือ Tricuspid Valve & Chordae Tendineae — ลิ้นไตรคัสปิดและเอ็นยึดลิ้นหัวใจ"
      },
      {
        "pin": "D",
        "term": "Interventricular Septum",
        "thaiName": "ผนังกั้นหัวใจห้องล่างซ้าย-ขวา",
        "description": "ตำแหน่ง [D] คือ Interventricular Septum — ผนังกั้นหัวใจห้องล่างซ้าย-ขวา"
      },
      {
        "pin": "E",
        "term": "Bicuspid (Mitral) Valve",
        "thaiName": "ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV",
        "description": "ตำแหน่ง [E] คือ Bicuspid (Mitral) Valve — ลิ้นไมทรัล (2 แฉก) กั้น LA กับ LV"
      },
      {
        "pin": "F",
        "term": "Left Ventricular Myocardium",
        "thaiName": "กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)",
        "description": "ตำแหน่ง [F] คือ Left Ventricular Myocardium — กล้ามเนื้อหัวใจห้องล่างซ้าย (หนา 3 เท่า)"
      }
    ]
  },
  {
    "id": "CARDIO-033",
    "questionText": "หัวใจห้องบนซ้าย (Left Atrium) รับเลือดที่มีความเข้มข้นของออกซิเจนสูง (Oxygenated blood) ที่ฟอกแล้วจากปอดผ่านหลอดเลือดใด และมีจำนวนกี่เส้น?",
    "options": {
      "A": "Pulmonary veins จำนวน 4 เส้น (ขวา 2 เส้น และซ้าย 2 เส้น)",
      "B": "Pulmonary arteries จำนวน 2 เส้น",
      "C": "Superior vena cava จำนวน 1 เส้น",
      "D": "Bronchial veins จำนวน 6 เส้น"
    },
    "correctOption": "A",
    "explanation": "Left Atrium รับเลือดแดงที่มีออกซิเจนสูงจากปอดผ่าน Pulmonary veins จำนวน 4 เส้น (Right superior/inferior และ Left superior/inferior pulmonary veins) เข้าสู่ผนังเรียบด้านหลังของ Left Atrium โดยไม่มีลิ้นเปิดปิด",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 29,
    "tags": [
      "left-atrium",
      "pulmonary-veins"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-034",
    "questionText": "ลิ้นหัวใจที่กั้นระหว่างหัวใจห้องบนซ้าย (Left Atrium) กับห้องล่างซ้าย (Left Ventricle) ประกอบด้วยแผ่นลิ้น 2 แฉก และต้องรับแรงดันบีบตัวสูงสุดของหัวใจ มีชื่อเรียกทางการแพทย์ว่าอะไร?",
    "options": {
      "A": "Tricuspid valve",
      "B": "Bicuspid valve หรือ Mitral valve",
      "C": "Aortic semilunar valve",
      "D": "Pulmonary semilunar valve"
    },
    "correctOption": "B",
    "explanation": "Bicuspid valve (มี 2 แฉก: Anterior และ Posterior cusps) หรือ Mitral valve (เนื่องจากรูปร่างคล้ายหมวก Mitre ของบิชอป) กั้นระหว่าง LA กับ LV เป็นลิ้นที่รับแรงดันสูงที่สุดในร่างกาย จึงเกิดภาวะพยาธิสภาพ เช่น Mitral stenosis หรือ Mitral regurgitation ได้บ่อยที่สุด",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 30,
    "tags": [
      "bicuspid-valve",
      "mitral-valve",
      "valvular-heart-disease"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-035",
    "questionText": "ลิ้นหัวใจกลุ่ม Semilunar valves (ได้แก่ Aortic valve และ Pulmonary valve) มีลักษณะทางกายวิภาคและกลไกการปิดแตกต่างจาก Atrioventricular valves อย่างไร?",
    "options": {
      "A": "มีกล้ามเนื้อหูรูดล้อมรอบเหมือน Sphincter คอยบีบรูดปิดกั้น",
      "B": "มีสาย Chordae tendineae ขนาดใหญ่ช่วยดึงให้ปิดในจังหวะหัวใจคลายตัว",
      "C": "ประกอบด้วยแผ่นลิ้นรูปเสี้ยวพระจันทร์ 3 แผ่น คล้ายกระเปาะ (Cusps/Pockets) ไม่มีสาย Chordae tendineae หรือ Papillary muscles โดยปิดเมื่อเลือดในหลอดเลือดใหญ่ไหลย้อนกลับมาขังในกระเปาะขณะ Ventricular diastole",
      "D": "เปิดออกเมื่อหัวใจคลายตัว และปิดสนิทเมื่อหัวใจบีบตัว"
    },
    "correctOption": "C",
    "explanation": "Semilunar valves ประกอบด้วย Cusps รูปเสี้ยวพระจันทร์ 3 ชิ้นรูปถ้วยกระเปาะ ไม่มีเอ็น Chordae tendineae ยึด เมื่อ Ventricles บีบตัว เลือดจะผลักให้ลิ้นเปิดแนบผนัง แต่เมื่อ Ventricles คลายตัว (Diastole) เลือดใน Aorta/Pulmonary trunk จะไหลย้อนกลับมาขังเต็มกระเปาะ (Sinuses) ทำให้ขอบลิ้นแนบชนกันสนิท ป้องกันเลือดไหลย้อนกลับ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 33,
    "tags": [
      "semilunar-valves",
      "aortic-valve",
      "valve-closure-mechanism"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-036",
    "questionText": "เสียงหัวใจเต้นเสียงที่หนึ่ง (First heart sound: S1 หรือ \"LUB\") ทางกายวิภาคและสรีรวิทยาเกิดจากการเปลี่ยนแปลงของโครงสร้างใดในหัวใจ?",
    "options": {
      "A": "การเปิดตัวอย่างรวดเร็วของลิ้น Aortic valve",
      "B": "การปิดของลิ้น Semilunar valves (Aortic และ Pulmonary) เมื่อสิ้นสุดระยะ Ventricular systole",
      "C": "การไหลเชี่ยวกรากของเลือดกระทบผนัง Atrium ขณะออกกำลังกาย",
      "D": "การปิดพร้อมกันของลิ้น Atrioventricular (AV) valves (Tricuspid และ Mitral) เมื่อเริ่มเข้าสู่ระยะ Ventricular systole"
    },
    "correctOption": "D",
    "explanation": "เสียง S1 (\"LUB\") เกิดจากการสั่นสะเทือนของเลือดและผนังหัวใจเมื่อลิ้น AV valves (Mitral และ Tricuspid) ปิดสนิทพร้อมกันในจังหวะเริ่มต้นของการบีบตัวของหัวใจห้องล่าง (Ventricular isovolumetric contraction) สอดคล้องกับตำแหน่ง QRS complex บนคลื่นไฟฟ้าหัวใจ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 34,
    "tags": [
      "heart-sounds",
      "s1",
      "lub",
      "av-valves-closure"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-037",
    "questionText": "เสียงหัวใจเต้นเสียงที่สอง (Second heart sound: S2 หรือ \"DUB\") เกิดขึ้นจากกลไกทางกายวิภาคใด?",
    "options": {
      "A": "การปิดสนิทพร้อมกันของลิ้น Semilunar valves (Aortic valve และ Pulmonary valve) ในช่วงต้นของระยะ Ventricular diastole",
      "B": "การปิดของลิ้น Tricuspid และ Bicuspid valves",
      "C": "การหดตัวของ Papillary muscles ดึง Chordae tendineae",
      "D": "การบีบตัวของหัวใจห้องบน Atria"
    },
    "correctOption": "A",
    "explanation": "เสียง S2 (\"DUB\") เกิดจากการปิดอย่างกะทันหันของ Semilunar valves (Aortic และ Pulmonary valves) เมื่อความดันใน Ventricles ลดลงต่ำกว่าความดันในหลอดเลือด Aorta และ Pulmonary trunk ในจังหวะที่หัวใจห้องล่างเริ่มคลายตัว (Ventricular diastole)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 34,
    "tags": [
      "heart-sounds",
      "s2",
      "dub",
      "semilunar-valves"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-038",
    "questionText": "แพทย์ใช้หูฟัง (Stethoscope) ฟังเสียงลิ้นหัวใจ Aortic valve บริเวณผนังทรวงอก ตำแหน่งฟังตรวจที่ดีที่สุด (Aortic auscultation area) คือบริเวณใด?",
    "options": {
      "A": "ช่องซี่โครงที่ 2 ด้านซ้าย ชิดขอบกระดูกอก (Left 2nd intercostal space)",
      "B": "ช่องซี่โครงที่ 2 ด้านขวา ชิดขอบกระดูกอก (Right 2nd intercostal space, sternal border)",
      "C": "ช่องซี่โครงที่ 5 ด้านซ้าย แนว Midclavicular line (Apex)",
      "D": "ช่องซี่โครงที่ 4-5 ด้านซ้าย ชิดขอบล่างของกระดูกอก"
    },
    "correctOption": "B",
    "explanation": "ตำแหน่งฟังเสียงลิ้นหัวใจบนผนังทรวงอก: 1. Aortic area = Right 2nd ICS ชิดขอบกระดูกอก 2. Pulmonic area = Left 2nd ICS ชิดขอบกระดูกอก 3. Tricuspid area = Left 4th-5th ICS ชิดขอบกระดูกอก 4. Mitral/Apical area = Left 5th ICS แนว Midclavicular line",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 35,
    "tags": [
      "auscultation-areas",
      "aortic-valve",
      "physical-examination"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-039",
    "questionText": "โครงกระดูกเนื้อเยื่อเกี่ยวพันของหัวใจ (Fibrous skeleton of the heart) ซึ่งประกอบด้วยวงแหวนเส้นใยคอลลาเจนหนาแน่นรอบลิ้นหัวใจทั้งสี่ มีบทบาทสำคัญทางสรีรวิทยาและกายวิภาคอย่างไร?",
    "options": {
      "A": "ทำหน้าที่ปล่อยกระแสประสาทอัตโนมัติทดแทน SA node",
      "B": "ทำหน้าที่สร้างเซลล์เม็ดเลือดแดงทดแทนไขกระดูก",
      "C": "ทำหน้าที่เป็นฉนวนกั้นกระแสไฟฟ้า (Electrical insulator) ระหว่าง Atria กับ Ventricles บังคับให้คลื่นไฟฟ้าผ่านได้ทางเดียวคือผ่าน AV bundle และเป็นจุดเกาะยึดของลิ้นหัวใจและกล้ามเนื้อหัวใจ",
      "D": "ทำหน้าที่ป้องกันไม่ให้เลือดแดงผสมกับเลือดดำในปอด"
    },
    "correctOption": "C",
    "explanation": "Fibrous skeleton ประกอบด้วยวงแหวน Anuli fibrosi 4 วงรอบลิ้นหัวใจ ทำหน้าที่สำคัญ 3 ประการ: 1. ยึดตรึงโครงสร้างลิ้นหัวใจไม่ให้บิดเบี้ยว 2. เป็นจุดเกาะยึดของใยกล้ามเนื้อหัวใจ 3. ทำหน้าที่เป็นฉนวนกั้นไฟฟ้า (Electrically insulates Atria from Ventricles) ทำให้การส่งสัญญาณไฟฟ้าจากบนสู่ล่างต้องผ่านทาง AV bundle (Bundle of His) เท่านั้น",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Valves & Mechanism",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 32,
    "tags": [
      "fibrous-skeleton",
      "electrical-insulator",
      "av-bundle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-040",
    "questionText": "ลำดับเส้นทางการไหลเวียนของเลือด (Blood circulation pathway) ผ่านหัวใจและปอดที่ถูกต้องและสมบูรณ์ที่สุดคือข้อใด?",
    "options": {
      "A": "Aorta -> Left Ventricle -> Bicuspid valve -> Left Atrium -> Pulmonary veins -> Lungs",
      "B": "Vena cava -> Left Atrium -> Bicuspid valve -> Left Ventricle -> Lungs -> Right Atrium -> Aorta",
      "C": "Pulmonary veins -> Right Atrium -> Pulmonary trunk -> Lungs -> Left Atrium -> Aorta",
      "D": "Vena cava -> Right Atrium -> Tricuspid valve -> Right Ventricle -> Pulmonary valve -> Pulmonary trunk -> Lungs -> Pulmonary veins -> Left Atrium -> Bicuspid valve -> Left Ventricle -> Aortic valve -> Aorta"
    },
    "correctOption": "D",
    "explanation": "เส้นทางไหลเวียน: เลือดดำจาก Vena cava เข้าสู่ RA -> ผ่าน Tricuspid valve เข้า RV -> ผ่าน Pulmonary semilunar valve สู่ Pulmonary trunk ไปฟอกที่ปอด -> เลือดแดงกลับทาง Pulmonary veins เข้า LA -> ผ่าน Bicuspid (Mitral) valve สู่ LV -> ผ่าน Aortic valve สูบฉีดออกทาง Aorta ไปเลี้ยงทั่วร่างกาย",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Heart Chambers & Internal Anatomy",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 23,
    "tags": [
      "cardiac-circulation-pathway",
      "systemic-pulmonary"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-041",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [A]] ศูนย์กำเนิดจังหวะการเต้นของหัวใจหลัก (Primary Pacemaker of the heart) คือโครงสร้างใด และมีตำแหน่งทางกายวิภาคอยู่ที่ใดในหัวใจ?",
    "options": {
      "A": "Sinoatrial (SA) node ตั้งอยู่ที่ผนังด้านบนของ Right Atrium บริเวณรอยต่อกับ Superior Vena Cava",
      "B": "Atrioventricular (AV) node ตั้งอยู่ที่ยอดของ Left Ventricle",
      "C": "Bundle of His ตั้งอยู่ภายใน Interatrial septum",
      "D": "Purkinje fibers ตั้งอยู่ที่ขอบของลิ้นหัวใจ Mitral"
    },
    "correctOption": "A",
    "explanation": "SA node ตั้งอยู่ที่ผนังด้านบนของ Right Atrium ชิดกับจุดเปิดของ Superior Vena Cava ทำหน้าที่เป็น Primary Pacemaker เนื่องจากมีอัตราการปล่อยกระแสไฟฟ้า (Inherent firing rate) สูงที่สุด คือประมาณ 60-100 ครั้งต่อนาที\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Cardiac Conduction System & Electrocardiogram (ECG) Correlation): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [A] (Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 38,
    "tags": [
      "sa-node",
      "pacemaker",
      "right-atrium",
      "has-diagram",
      "diagram-conduction_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/conduction_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/conduction_system_labeled.svg",
    "imageCaption": "Cardiac Conduction System & Electrocardiogram (ECG) Correlation — ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Sinoatrial (SA) Node",
        "thaiName": "ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)",
        "description": "ตำแหน่ง [A] คือ Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)"
      },
      {
        "pin": "B",
        "term": "Atrioventricular (AV) Node",
        "thaiName": "ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)",
        "description": "ตำแหน่ง [B] คือ Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)"
      },
      {
        "pin": "C",
        "term": "AV Bundle (Bundle of His)",
        "thaiName": "ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton",
        "description": "ตำแหน่ง [C] คือ AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton"
      },
      {
        "pin": "D",
        "term": "Purkinje Fibers",
        "thaiName": "เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)",
        "description": "ตำแหน่ง [D] คือ Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)"
      },
      {
        "pin": "E",
        "term": "P Wave (Atrial Depolarization)",
        "thaiName": "คลื่นกระตุ้นการหดตัวของหัวใจห้องบน",
        "description": "ตำแหน่ง [E] คือ P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน"
      },
      {
        "pin": "F",
        "term": "QRS Complex (Ventricular Depolarization)",
        "thaiName": "คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง",
        "description": "ตำแหน่ง [F] คือ QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง"
      }
    ]
  },
  {
    "id": "CARDIO-042",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [B]] เมื่อกระแสไฟฟ้าเดินทางจาก SA node ผ่านผนังหัวใจห้องบนมาถึง Atrioventricular (AV) node จะเกิดการหน่วงสัญญาณไฟฟ้าช้าลงประมาณ 0.1 วินาที (AV nodal delay) ปรากฏการณ์นี้มีความสำคัญทางสรีรวิทยาอย่างไร?",
    "options": {
      "A": "เพื่อป้องกันไม่ให้กระแสไฟฟ้ากระจายไปยังปอดและกะบังลม",
      "B": "เพื่อให้เวลาแก่หัวใจห้องบน (Atria) ในการบีบตัวส่งเลือดลงสู่ห้องล่าง (Ventricles) ให้เสร็จสิ้นสมบูรณ์ก่อนที่ห้องล่างจะเริ่มบีบตัว",
      "C": "เพื่อลดความดันโลหิตในหลอดเลือด Aorta ให้เท่ากับความดันในปอด",
      "D": "เพื่อให้ลิ้น Semilunar valves เปิดออกก่อนที่ลิ้น AV valves จะปิด"
    },
    "correctOption": "B",
    "explanation": "AV nodal delay (ชะลอสัญญาณประมาณ 0.09-0.12 วินาที) มีความสำคัญอย่างยิ่ง เพื่อให้ Atria มีเวลาบีบตัวผลักเลือดปริมาตรสุดท้าย (Atrial kick) ลงสู่ Ventricles ให้เต็มที่ (Ventricular filling) ก่อนที่ Ventricles จะเริ่มหดเกร็งบีบเลือดออกไป\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Cardiac Conduction System & Electrocardiogram (ECG) Correlation): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [B] (Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 39,
    "tags": [
      "av-node",
      "nodal-delay",
      "atrial-kick",
      "has-diagram",
      "diagram-conduction_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/conduction_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/conduction_system_labeled.svg",
    "imageCaption": "Cardiac Conduction System & Electrocardiogram (ECG) Correlation — ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Sinoatrial (SA) Node",
        "thaiName": "ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)",
        "description": "ตำแหน่ง [A] คือ Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)"
      },
      {
        "pin": "B",
        "term": "Atrioventricular (AV) Node",
        "thaiName": "ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)",
        "description": "ตำแหน่ง [B] คือ Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)"
      },
      {
        "pin": "C",
        "term": "AV Bundle (Bundle of His)",
        "thaiName": "ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton",
        "description": "ตำแหน่ง [C] คือ AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton"
      },
      {
        "pin": "D",
        "term": "Purkinje Fibers",
        "thaiName": "เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)",
        "description": "ตำแหน่ง [D] คือ Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)"
      },
      {
        "pin": "E",
        "term": "P Wave (Atrial Depolarization)",
        "thaiName": "คลื่นกระตุ้นการหดตัวของหัวใจห้องบน",
        "description": "ตำแหน่ง [E] คือ P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน"
      },
      {
        "pin": "F",
        "term": "QRS Complex (Ventricular Depolarization)",
        "thaiName": "คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง",
        "description": "ตำแหน่ง [F] คือ QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง"
      }
    ]
  },
  {
    "id": "CARDIO-043",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [C]] โครงสร้างทางเดินไฟฟ้าเพียงโครงสร้างเดียวที่สามารถนำสัญญาณกระแสไฟฟ้าทะลุผ่านฉนวน Fibrous skeleton จากหัวใจห้องบนลงสู่หัวใจห้องล่างได้คือข้อใด?",
    "options": {
      "A": "Bachmann's bundle",
      "B": "Anterior internodal pathway",
      "C": "Atrioventricular bundle (Bundle of His)",
      "D": "Pectinate muscle bundle"
    },
    "correctOption": "C",
    "explanation": "เนื่องจาก Fibrous skeleton ทำหน้าที่เป็นฉนวนกั้นไฟฟ้าอย่างสมบูรณ์ โครงสร้างเดียวที่สามารถเจาะผ่านฉนวนนี้เพื่อนำ Action potential จาก AV node ใน Atria ลงสู่ Ventricles ได้คือ Bundle of His (AV bundle) ซึ่งจะทอดลงมาที่ยอดของ Interventricular septum\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Cardiac Conduction System & Electrocardiogram (ECG) Correlation): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [C] (AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 40,
    "tags": [
      "bundle-of-his",
      "av-bundle",
      "fibrous-skeleton",
      "has-diagram",
      "diagram-conduction_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/conduction_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/conduction_system_labeled.svg",
    "imageCaption": "Cardiac Conduction System & Electrocardiogram (ECG) Correlation — ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Sinoatrial (SA) Node",
        "thaiName": "ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)",
        "description": "ตำแหน่ง [A] คือ Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)"
      },
      {
        "pin": "B",
        "term": "Atrioventricular (AV) Node",
        "thaiName": "ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)",
        "description": "ตำแหน่ง [B] คือ Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)"
      },
      {
        "pin": "C",
        "term": "AV Bundle (Bundle of His)",
        "thaiName": "ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton",
        "description": "ตำแหน่ง [C] คือ AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton"
      },
      {
        "pin": "D",
        "term": "Purkinje Fibers",
        "thaiName": "เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)",
        "description": "ตำแหน่ง [D] คือ Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)"
      },
      {
        "pin": "E",
        "term": "P Wave (Atrial Depolarization)",
        "thaiName": "คลื่นกระตุ้นการหดตัวของหัวใจห้องบน",
        "description": "ตำแหน่ง [E] คือ P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน"
      },
      {
        "pin": "F",
        "term": "QRS Complex (Ventricular Depolarization)",
        "thaiName": "คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง",
        "description": "ตำแหน่ง [F] คือ QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง"
      }
    ]
  },
  {
    "id": "CARDIO-044",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [D]] เซลล์นำกระแสประสาทขนาดใหญ่ที่มีการสะสมไกลโคเจนสูง และมีอัตราเร็วในการนำสัญญาณไฟฟ้าสูงที่สุดในระบบนำไฟฟ้าของหัวใจ (ประมาณ 4 เมตรต่อวินาที) เพื่อกระจายสัญญาณสู่กล้ามเนื้อ Ventricles คือโครงสร้างใด?",
    "options": {
      "A": "Contractile cardiomyocytes ทั่วไป",
      "B": "SA nodal cells",
      "C": "AV nodal cells",
      "D": "Purkinje fibers (Subendocardial conducting network)"
    },
    "correctOption": "D",
    "explanation": "Purkinje fibers เป็นเซลล์กล้ามเนื้อหัวใจที่ดัดแปลงพิเศษ มีขนาดใหญ่กว่าเซลล์กล้ามเนื้อทั่วไป มี Myofibrils น้อยแต่สะสม Glycogen สูง และมี Gap junctions จำนวนมาก ทำให้นำกระแสไฟฟ้าได้เร็วที่สุด (1-4 m/s) เพื่อให้กล้ามเนื้อ Ventricles ทั้งหมดบีบตัวประสานกันอย่างมีประสิทธิภาพ\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Cardiac Conduction System & Electrocardiogram (ECG) Correlation): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [D] (Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 41,
    "tags": [
      "purkinje-fibers",
      "conduction-velocity",
      "has-diagram",
      "diagram-conduction_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/conduction_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/conduction_system_labeled.svg",
    "imageCaption": "Cardiac Conduction System & Electrocardiogram (ECG) Correlation — ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Sinoatrial (SA) Node",
        "thaiName": "ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)",
        "description": "ตำแหน่ง [A] คือ Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)"
      },
      {
        "pin": "B",
        "term": "Atrioventricular (AV) Node",
        "thaiName": "ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)",
        "description": "ตำแหน่ง [B] คือ Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)"
      },
      {
        "pin": "C",
        "term": "AV Bundle (Bundle of His)",
        "thaiName": "ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton",
        "description": "ตำแหน่ง [C] คือ AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton"
      },
      {
        "pin": "D",
        "term": "Purkinje Fibers",
        "thaiName": "เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)",
        "description": "ตำแหน่ง [D] คือ Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)"
      },
      {
        "pin": "E",
        "term": "P Wave (Atrial Depolarization)",
        "thaiName": "คลื่นกระตุ้นการหดตัวของหัวใจห้องบน",
        "description": "ตำแหน่ง [E] คือ P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน"
      },
      {
        "pin": "F",
        "term": "QRS Complex (Ventricular Depolarization)",
        "thaiName": "คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง",
        "description": "ตำแหน่ง [F] คือ QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง"
      }
    ]
  },
  {
    "id": "CARDIO-045",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [E]] ลำดับการนำสัญญาณไฟฟ้าผ่านระบบ Conduction system ของหัวใจจากจุดกำเนิดไปจนถึงปลายทางข้อใดถูกต้อง?",
    "options": {
      "A": "SA node -> Internodal pathways -> AV node -> AV bundle (Bundle of His) -> Right and Left bundle branches -> Purkinje fibers",
      "B": "AV node -> SA node -> Bundle of His -> Purkinje fibers -> Bundle branches",
      "C": "Purkinje fibers -> Bundle branches -> AV bundle -> AV node -> SA node",
      "D": "SA node -> AV bundle -> AV node -> Purkinje fibers -> Bundle branches"
    },
    "correctOption": "A",
    "explanation": "ลำดับการนำไฟฟ้าของหัวใจที่ถูกต้อง: 1. SA node (Pacemaker) -> 2. Internodal pathways (ใน Atria) -> 3. AV node (หน่วงสัญญาณ) -> 4. Bundle of His (เจาะผ่าน Fibrous skeleton) -> 5. Right & Left bundle branches (ใน Interventricular septum) -> 6. Purkinje fibers (กระจายทั่วผนัง Ventricles)\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Cardiac Conduction System & Electrocardiogram (ECG) Correlation): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [E] (P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 37,
    "tags": [
      "conduction-pathway",
      "sa-to-purkinje",
      "has-diagram",
      "diagram-conduction_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/conduction_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/conduction_system_labeled.svg",
    "imageCaption": "Cardiac Conduction System & Electrocardiogram (ECG) Correlation — ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Sinoatrial (SA) Node",
        "thaiName": "ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)",
        "description": "ตำแหน่ง [A] คือ Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)"
      },
      {
        "pin": "B",
        "term": "Atrioventricular (AV) Node",
        "thaiName": "ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)",
        "description": "ตำแหน่ง [B] คือ Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)"
      },
      {
        "pin": "C",
        "term": "AV Bundle (Bundle of His)",
        "thaiName": "ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton",
        "description": "ตำแหน่ง [C] คือ AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton"
      },
      {
        "pin": "D",
        "term": "Purkinje Fibers",
        "thaiName": "เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)",
        "description": "ตำแหน่ง [D] คือ Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)"
      },
      {
        "pin": "E",
        "term": "P Wave (Atrial Depolarization)",
        "thaiName": "คลื่นกระตุ้นการหดตัวของหัวใจห้องบน",
        "description": "ตำแหน่ง [E] คือ P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน"
      },
      {
        "pin": "F",
        "term": "QRS Complex (Ventricular Depolarization)",
        "thaiName": "คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง",
        "description": "ตำแหน่ง [F] คือ QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง"
      }
    ]
  },
  {
    "id": "CARDIO-046",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [F]] การกระตุ้นประสาทพาราซิมพาเทติก (Parasympathetic innervation) ผ่านทางเส้นประสาทสมองคู่ใดที่ส่งผลให้หัวใจเต้นช้าลง (Negative chronotropic effect) และสารสื่อประสาทชนิดใดที่หลั่งออกมาที่ SA node?",
    "options": {
      "A": "เส้นประสาทสมองคู่ที่ 9 (Glossopharyngeal nerve: CN IX) หลั่งสาร Norepinephrine",
      "B": "เส้นประสาทสมองคู่ที่ 10 (Vagus nerve: CN X) หลั่งสารสื่อประสาท Acetylcholine (ACh)",
      "C": "เส้นประสาทสมองคู่ที่ 11 (Accessory nerve: CN XI) หลั่งสาร Dopamine",
      "D": "เส้นประสาทสมองคู่ที่ 7 (Facial nerve: CN VII) หลั่งสาร Epinephrine"
    },
    "correctOption": "B",
    "explanation": "ระบบ Parasympathetic เลี้ยงหัวใจผ่าน Vagus nerve (CN X) โดยแขนงประสาทจะไปสิ้นสุดที่ SA node และ AV node เป็นหลัก เมื่อถูกกระตุ้นจะหลั่ง Acetylcholine (ACh) จับกับ Muscarinic M2 receptors ส่งผลให้ Hyperpolarization ของเซลล์ ทำให้อัตราการเต้นของหัวใจช้าลง (Bradycardia)\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Cardiac Conduction System & Electrocardiogram (ECG) Correlation): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [F] (QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 42,
    "tags": [
      "vagus-nerve",
      "parasympathetic",
      "acetylcholine",
      "bradycardia",
      "has-diagram",
      "diagram-conduction_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/conduction_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/conduction_system_labeled.svg",
    "imageCaption": "Cardiac Conduction System & Electrocardiogram (ECG) Correlation — ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Sinoatrial (SA) Node",
        "thaiName": "ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)",
        "description": "ตำแหน่ง [A] คือ Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)"
      },
      {
        "pin": "B",
        "term": "Atrioventricular (AV) Node",
        "thaiName": "ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)",
        "description": "ตำแหน่ง [B] คือ Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)"
      },
      {
        "pin": "C",
        "term": "AV Bundle (Bundle of His)",
        "thaiName": "ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton",
        "description": "ตำแหน่ง [C] คือ AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton"
      },
      {
        "pin": "D",
        "term": "Purkinje Fibers",
        "thaiName": "เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)",
        "description": "ตำแหน่ง [D] คือ Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)"
      },
      {
        "pin": "E",
        "term": "P Wave (Atrial Depolarization)",
        "thaiName": "คลื่นกระตุ้นการหดตัวของหัวใจห้องบน",
        "description": "ตำแหน่ง [E] คือ P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน"
      },
      {
        "pin": "F",
        "term": "QRS Complex (Ventricular Depolarization)",
        "thaiName": "คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง",
        "description": "ตำแหน่ง [F] คือ QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง"
      }
    ]
  },
  {
    "id": "CARDIO-047",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [B]] การกระตุ้นระบบประสาทซิมพาเทติก (Sympathetic innervation) มาจากไขสันหลังระดับใด และส่งผลต่อการทำงานของหัวใจอย่างไรผ่านตัวรับชนิดใด?",
    "options": {
      "A": "ไขสันหลังระดับ S2 - S4 หลั่ง Serotonin ทำให้หลอดเลือดหัวใจหดตัว",
      "B": "ไขสันหลังระดับ L1 - L3 หลั่ง Acetylcholine ทำให้หัวใจคลายตัว",
      "C": "ไขสันหลังระดับ T1 - T5 (Sympathetic trunk) หลั่ง Norepinephrine จับกับ Beta-1 adrenergic receptors ทำให้ทั้งอัตราการเต้น (Heart rate) และแรงบีบตัว (Contractility) ของหัวใจเพิ่มขึ้น",
      "D": "ก้านสมองส่วน Medulla หลั่ง GABA ทำให้หัวใจหยุดเต้นชั่วคราว"
    },
    "correctOption": "C",
    "explanation": "Sympathetic preganglionic fibers ออกมาจากไขสันหลังระดับ T1-T5 ไปยัง Sympathetic chain ganglia แล้วส่ง Postganglionic cardiac nerves ไปเลี้ยงทั้ง SA node, AV node และ Myocardium ทั่วทั้งห้องบนและห้องล่าง หลั่ง Norepinephrine จับกับ Beta-1 adrenergic receptors เพิ่มทั้ง Heart rate, Conduction velocity และ Contractility\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Cardiac Conduction System & Electrocardiogram (ECG) Correlation): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [B] (Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 42,
    "tags": [
      "sympathetic-innervation",
      "beta-1-receptors",
      "norepinephrine",
      "has-diagram",
      "diagram-conduction_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/conduction_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/conduction_system_labeled.svg",
    "imageCaption": "Cardiac Conduction System & Electrocardiogram (ECG) Correlation — ระบบนำกระแสไฟฟ้าของหัวใจและกราฟคลื่นไฟฟ้าหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Sinoatrial (SA) Node",
        "thaiName": "ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)",
        "description": "ตำแหน่ง [A] คือ Sinoatrial (SA) Node — ศูนย์กำเนิดจังหวะหลัก (Primary Pacemaker)"
      },
      {
        "pin": "B",
        "term": "Atrioventricular (AV) Node",
        "thaiName": "ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)",
        "description": "ตำแหน่ง [B] คือ Atrioventricular (AV) Node — ปม AV (หน่วงสัญญาณไฟฟ้า 0.1 วินาที)"
      },
      {
        "pin": "C",
        "term": "AV Bundle (Bundle of His)",
        "thaiName": "ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton",
        "description": "ตำแหน่ง [C] คือ AV Bundle (Bundle of His) — ทางเชื่อมไฟฟ้าหนึ่งเดียวที่ทะลุ Fibrous skeleton"
      },
      {
        "pin": "D",
        "term": "Purkinje Fibers",
        "thaiName": "เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)",
        "description": "ตำแหน่ง [D] คือ Purkinje Fibers — เส้นใยเพอร์คินเจ (นำไฟฟ้าเร็วที่สุด 4 m/s)"
      },
      {
        "pin": "E",
        "term": "P Wave (Atrial Depolarization)",
        "thaiName": "คลื่นกระตุ้นการหดตัวของหัวใจห้องบน",
        "description": "ตำแหน่ง [E] คือ P Wave (Atrial Depolarization) — คลื่นกระตุ้นการหดตัวของหัวใจห้องบน"
      },
      {
        "pin": "F",
        "term": "QRS Complex (Ventricular Depolarization)",
        "thaiName": "คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง",
        "description": "ตำแหน่ง [F] คือ QRS Complex (Ventricular Depolarization) — คลื่นกระตุ้นการบีบตัวของหัวใจห้องล่าง"
      }
    ]
  },
  {
    "id": "CARDIO-048",
    "questionText": "หาก SA node เสียหายหรือหยุดทำงาน โครงสร้างใดในระบบนำไฟฟ้าจะเข้ามารับหน้าที่เป็น Pacemaker สำรองอันดับถัดไป (Secondary pacemaker) และจะมีอัตราการปล่อยกระแสไฟฟ้าประมาณเท่าใด?",
    "options": {
      "A": "กล้ามเนื้อ Atrium โดยมีอัตราการเต้น 0 ครั้งต่อนาที",
      "B": "Purkinje fibers โดยมีอัตราการเต้นประมาณ 80 - 100 ครั้งต่อนาที",
      "C": "Bundle of His โดยมีอัตราการเต้นประมาณ 100 - 120 ครั้งต่อนาที",
      "D": "AV node โดยมีอัตราการปล่อยกระแสไฟฟ้าประมาณ 40 - 60 ครั้งต่อนาที"
    },
    "correctOption": "D",
    "explanation": "ระบบนำไฟฟ้ามีลำดับ Pacemaker สำรอง: 1. SA node = 60-100 bpm (Primary) 2. AV node = 40-60 bpm (Secondary, เข้าทำงานแทนเมื่อ SA node ล้มเหลว) 3. Bundle of His และ Purkinje fibers = 20-40 bpm (Tertiary / Ventricular escape rhythm)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 39,
    "tags": [
      "pacemaker-hierarchy",
      "av-node-intrinsic-rate"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-049",
    "questionText": "คลื่น P wave บนกราฟคลื่นไฟฟ้าหัวใจ (Electrocardiogram: ECG) แสดงถึงเหตุการณ์ทางไฟฟ้าและทางกายวิภาคใดของหัวใจ?",
    "options": {
      "A": "Atrial depolarization (การกระจายของกระแสไฟฟ้ากระตุ้นการหดตัวของกล้ามเนื้อหัวใจห้องบน)",
      "B": "Ventricular depolarization (การกระตุ้นหัวใจห้องล่าง)",
      "C": "Ventricular repolarization (การฟื้นตัวของหัวใจห้องล่าง)",
      "D": "Atrial repolarization (การฟื้นตัวของหัวใจห้องบน)"
    },
    "correctOption": "A",
    "explanation": "คลื่นบน ECG: 1. P wave = Atrial depolarization (กระแสไฟฟ้าแพร่ผ่าน Atria) 2. QRS complex = Ventricular depolarization (กระแสไฟฟ้าแพร่ผ่าน Ventricles กลบ Atrial repolarization) 3. T wave = Ventricular repolarization (การฟื้นตัวทางไฟฟ้าของ Ventricles)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 38,
    "tags": [
      "ecg",
      "p-wave",
      "atrial-depolarization"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-050",
    "questionText": "คลื่นกลุ่ม QRS complex บนกราฟ ECG สัมพันธ์กับเหตุการณ์ทางกลศาสตร์ใดของหัวใจที่กำลังจะเกิดขึ้นตามมาทันที?",
    "options": {
      "A": "Atrial systole (การบีบตัวของหัวใจห้องบน)",
      "B": "Ventricular systole (การเริ่มบีบตัวของหัวใจห้องล่างเพื่อฉีดเลือดออกสู่หลอดเลือดแดงใหญ่)",
      "C": "Ventricular diastole (การคลายตัวของหัวใจห้องล่าง)",
      "D": "การปิดของลิ้น Aortic valve"
    },
    "correctOption": "B",
    "explanation": "QRS complex แสดงถึง Ventricular depolarization ซึ่งเป็นสัญญาณทางไฟฟ้าที่เกิดขึ้นก่อนการหดตัวทางกลศาสตร์ (Mechanical contraction) ของกล้ามเนื้อ Ventricles เล็กน้อย ดังนั้นทันทีหลังเกิด QRS complex หัวใจห้องล่างจะเริ่มบีบตัวเข้าสู่ระยะ Ventricular systole",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Cardiac Conduction System",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 38,
    "tags": [
      "qrs-complex",
      "ventricular-systole"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-051",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [A]] หลอดเลือดแดงโคโรนารี (Coronary arteries) ทั้งด้านซ้ายและขวามีจุดกำเนิดทางกายวิภาค (Anatomical origin) ออกมาจากโครงสร้างใดของระบบไหลเวียนโลหิต?",
    "options": {
      "A": "Pulmonary trunk เหนือแผ่นลิ้น Pulmonary valve",
      "B": "Aortic arch ร่วมกับ Brachiocephalic artery",
      "C": "Aortic sinuses (Sinuses of Valsalva) ที่โคนของ Ascending aorta เหนือระดับแผ่นลิ้น Aortic valve เล็กน้อย",
      "D": "Left Ventricle โดยตรงผ่านรูเปิดพิเศษใน Myocardium"
    },
    "correctOption": "C",
    "explanation": "Right and Left coronary arteries แตกแขนงออกมาจาก Right และ Left aortic sinuses (Sinuses of Valsalva) บริเวณโคนของ Ascending aorta เหนือต่อแผ่นลิ้น Aortic valve โดยเลือดจะไหลเข้าสู่หลอดเลือดโคโรนารีมากที่สุดในช่วง Ventricular diastole เมื่อลิ้น Aortic valve ปิดลง\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Coronary Arteries & Cardiac Venous Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [A] (Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 44,
    "tags": [
      "coronary-arteries",
      "aortic-sinus",
      "ascending-aorta",
      "has-diagram",
      "diagram-coronary_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/coronary_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/coronary_vessels_labeled.svg",
    "imageCaption": "Coronary Arteries & Cardiac Venous Drainage — หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Aortic Sinus (Origin of Coronary a.)",
        "thaiName": "จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta",
        "description": "ตำแหน่ง [A] คือ Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta"
      },
      {
        "pin": "B",
        "term": "Right Coronary Artery (RCA)",
        "thaiName": "หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)",
        "description": "ตำแหน่ง [B] คือ Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)"
      },
      {
        "pin": "C",
        "term": "Right Marginal Artery",
        "thaiName": "แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV",
        "description": "ตำแหน่ง [C] คือ Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV"
      },
      {
        "pin": "D",
        "term": "Anterior Interventricular Artery (LAD)",
        "thaiName": "หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)",
        "description": "ตำแหน่ง [D] คือ Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)"
      },
      {
        "pin": "E",
        "term": "Circumflex Artery (LCx)",
        "thaiName": "หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย",
        "description": "ตำแหน่ง [E] คือ Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย"
      },
      {
        "pin": "F",
        "term": "Coronary Sinus & Great Cardiac Vein",
        "thaiName": "แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium",
        "description": "ตำแหน่ง [F] คือ Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium"
      }
    ]
  },
  {
    "id": "CARDIO-052",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [D]] ผู้ป่วยชายอายุ 58 ปี มาโรงพยาบาลด้วยอาการเจ็บแน่นหน้าอกรุนแรงเหมือนมีของหนักทับ ร้าวไปที่กรามและแขนซ้าย ตรวจคลื่นไฟฟ้าหัวใจพบ ST-elevation ที่ Lead V1-V4 บ่งชี้ภาวะกล้ามเนื้อหัวใจตายเฉียบพลันบริเวณ Anterior wall ของ Left Ventricle และ Interventricular septum หลอดเลือดโคโรนารีเส้นใดที่เกิดการอุดตันบ่อยที่สุดและเรียกกันว่า \"Widow maker\"?",
    "options": {
      "A": "Right Marginal artery",
      "B": "Right Coronary Artery (RCA)",
      "C": "Circumflex artery (LCx)",
      "D": "Anterior Interventricular Artery (Left Anterior Descending: LAD)"
    },
    "correctOption": "D",
    "explanation": "Anterior Interventricular Artery หรือ LAD เป็นแขนงของ Left Coronary Artery ทอดตัวใน Anterior interventricular sulcus เลี้ยงผนังด้านหน้าของ Ventricles ทั้งสองและ 2/3 ส่วนหน้าของ Interventricular septum เป็นเส้นเลือดที่เกิดการอุดตันบ่อยที่สุด (40-50%) และอันตรายถึงชีวิตมากที่สุดจนได้ฉายาว่า \"Widow maker\"\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Coronary Arteries & Cardiac Venous Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [D] (Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 45,
    "tags": [
      "lad",
      "anterior-wall-mi",
      "widow-maker",
      "clinical-ecg",
      "has-diagram",
      "diagram-coronary_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/coronary_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/coronary_vessels_labeled.svg",
    "imageCaption": "Coronary Arteries & Cardiac Venous Drainage — หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Aortic Sinus (Origin of Coronary a.)",
        "thaiName": "จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta",
        "description": "ตำแหน่ง [A] คือ Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta"
      },
      {
        "pin": "B",
        "term": "Right Coronary Artery (RCA)",
        "thaiName": "หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)",
        "description": "ตำแหน่ง [B] คือ Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)"
      },
      {
        "pin": "C",
        "term": "Right Marginal Artery",
        "thaiName": "แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV",
        "description": "ตำแหน่ง [C] คือ Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV"
      },
      {
        "pin": "D",
        "term": "Anterior Interventricular Artery (LAD)",
        "thaiName": "หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)",
        "description": "ตำแหน่ง [D] คือ Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)"
      },
      {
        "pin": "E",
        "term": "Circumflex Artery (LCx)",
        "thaiName": "หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย",
        "description": "ตำแหน่ง [E] คือ Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย"
      },
      {
        "pin": "F",
        "term": "Coronary Sinus & Great Cardiac Vein",
        "thaiName": "แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium",
        "description": "ตำแหน่ง [F] คือ Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium"
      }
    ]
  },
  {
    "id": "CARDIO-053",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [E]] แขนงของ Left Coronary Artery (LCA) ที่ทอดตัวเลี้ยวไปตามร่อง Coronary sulcus ทางด้านหลังของหัวใจ เพื่อไปเลี้ยงผนังด้านข้าง (Lateral wall) และด้านหลังของ Left Atrium และ Left Ventricle คือหลอดเลือดใด?",
    "options": {
      "A": "Circumflex artery (LCx)",
      "B": "Posterior interventricular artery",
      "C": "Right marginal artery",
      "D": "Conus arteriosus branch"
    },
    "correctOption": "A",
    "explanation": "Left Coronary Artery จะแยกออกเป็น 2 แขนงหลัก: 1. Anterior interventricular artery (LAD) ทอดลงด้านหน้าสู่ Apex 2. Circumflex artery (LCx) โค้งไปตาม Coronary sulcus ไปทางด้านหลัง เลี้ยง Left Atrium และผนังด้านข้าง/หลังของ Left Ventricle\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Coronary Arteries & Cardiac Venous Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [E] (Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 45,
    "tags": [
      "circumflex-artery",
      "lca-branches",
      "has-diagram",
      "diagram-coronary_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/coronary_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/coronary_vessels_labeled.svg",
    "imageCaption": "Coronary Arteries & Cardiac Venous Drainage — หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Aortic Sinus (Origin of Coronary a.)",
        "thaiName": "จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta",
        "description": "ตำแหน่ง [A] คือ Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta"
      },
      {
        "pin": "B",
        "term": "Right Coronary Artery (RCA)",
        "thaiName": "หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)",
        "description": "ตำแหน่ง [B] คือ Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)"
      },
      {
        "pin": "C",
        "term": "Right Marginal Artery",
        "thaiName": "แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV",
        "description": "ตำแหน่ง [C] คือ Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV"
      },
      {
        "pin": "D",
        "term": "Anterior Interventricular Artery (LAD)",
        "thaiName": "หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)",
        "description": "ตำแหน่ง [D] คือ Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)"
      },
      {
        "pin": "E",
        "term": "Circumflex Artery (LCx)",
        "thaiName": "หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย",
        "description": "ตำแหน่ง [E] คือ Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย"
      },
      {
        "pin": "F",
        "term": "Coronary Sinus & Great Cardiac Vein",
        "thaiName": "แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium",
        "description": "ตำแหน่ง [F] คือ Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium"
      }
    ]
  },
  {
    "id": "CARDIO-054",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [B]] หลอดเลือด Right Coronary Artery (RCA) ทอดไปตาม Coronary sulcus ด้านขวา และให้แขนงสำคัญที่ทอดลงมาตามขอบล่างของหัวใจห้องล่างขวาเพื่อไปเลี้ยงผนังด้านข้างของ Right Ventricle คือแขนงใด?",
    "options": {
      "A": "Circumflex branch",
      "B": "Right marginal branch",
      "C": "Left anterior descending branch",
      "D": "Great cardiac branch"
    },
    "correctOption": "B",
    "explanation": "Right Coronary Artery (RCA) ให้แขนงสำคัญ 2 แขนง: 1. Right marginal artery ทอดขนานตามขอบล่างของหัวใจเลี้ยง Right Ventricle 2. Posterior interventricular artery (PDA) ทอดใน Posterior interventricular groove เลี้ยงผนังล่างและด้านหลังของ Ventricles\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Coronary Arteries & Cardiac Venous Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [B] (Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 46,
    "tags": [
      "rca",
      "marginal-artery",
      "has-diagram",
      "diagram-coronary_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/coronary_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/coronary_vessels_labeled.svg",
    "imageCaption": "Coronary Arteries & Cardiac Venous Drainage — หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Aortic Sinus (Origin of Coronary a.)",
        "thaiName": "จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta",
        "description": "ตำแหน่ง [A] คือ Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta"
      },
      {
        "pin": "B",
        "term": "Right Coronary Artery (RCA)",
        "thaiName": "หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)",
        "description": "ตำแหน่ง [B] คือ Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)"
      },
      {
        "pin": "C",
        "term": "Right Marginal Artery",
        "thaiName": "แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV",
        "description": "ตำแหน่ง [C] คือ Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV"
      },
      {
        "pin": "D",
        "term": "Anterior Interventricular Artery (LAD)",
        "thaiName": "หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)",
        "description": "ตำแหน่ง [D] คือ Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)"
      },
      {
        "pin": "E",
        "term": "Circumflex Artery (LCx)",
        "thaiName": "หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย",
        "description": "ตำแหน่ง [E] คือ Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย"
      },
      {
        "pin": "F",
        "term": "Coronary Sinus & Great Cardiac Vein",
        "thaiName": "แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium",
        "description": "ตำแหน่ง [F] คือ Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium"
      }
    ]
  },
  {
    "id": "CARDIO-055",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [F]] ในภาวะ Inferior wall Myocardial Infarction ผู้ป่วยมักมีอาการหัวใจเต้นช้าผิดปกติและเกิด AV block เนื่องจากหลอดเลือดเส้นที่อุดตันทำหน้าที่ส่งเลือดไปเลี้ยง SA node และ AV node หลอดเลือดที่มีพยาธิสภาพในกรณีนี้คือเส้นใด?",
    "options": {
      "A": "Great cardiac vein",
      "B": "Left anterior descending artery",
      "C": "Right Coronary Artery (RCA) ซึ่งให้แขนง Nodal branches ไปเลี้ยง SA node (ประมาณ 60% ของประชากร) และ AV node (ประมาณ 90% ของประชากร)",
      "D": "Pulmonary artery"
    },
    "correctOption": "C",
    "explanation": "RCA เลี้ยง Right Atrium, Right Ventricle ผนังด้านล่าง (Inferior/diaphragmatic wall) และให้แขนงไปเลี้ยงระบบนำไฟฟ้าหัวใจ ได้แก่ SA nodal branch (60%) และ AV nodal branch (90%) ดังนั้นเมื่อเกิด Inferior wall MI จาก RCA occlusion ผู้ป่วยจึงมักมีภาวะ Bradycardia หรือ AV nodal block ร่วมด้วย\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Coronary Arteries & Cardiac Venous Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [F] (Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 46,
    "tags": [
      "rca-occlusion",
      "inferior-mi",
      "av-block",
      "nodal-artery",
      "has-diagram",
      "diagram-coronary_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/coronary_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/coronary_vessels_labeled.svg",
    "imageCaption": "Coronary Arteries & Cardiac Venous Drainage — หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Aortic Sinus (Origin of Coronary a.)",
        "thaiName": "จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta",
        "description": "ตำแหน่ง [A] คือ Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta"
      },
      {
        "pin": "B",
        "term": "Right Coronary Artery (RCA)",
        "thaiName": "หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)",
        "description": "ตำแหน่ง [B] คือ Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)"
      },
      {
        "pin": "C",
        "term": "Right Marginal Artery",
        "thaiName": "แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV",
        "description": "ตำแหน่ง [C] คือ Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV"
      },
      {
        "pin": "D",
        "term": "Anterior Interventricular Artery (LAD)",
        "thaiName": "หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)",
        "description": "ตำแหน่ง [D] คือ Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)"
      },
      {
        "pin": "E",
        "term": "Circumflex Artery (LCx)",
        "thaiName": "หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย",
        "description": "ตำแหน่ง [E] คือ Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย"
      },
      {
        "pin": "F",
        "term": "Coronary Sinus & Great Cardiac Vein",
        "thaiName": "แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium",
        "description": "ตำแหน่ง [F] คือ Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium"
      }
    ]
  },
  {
    "id": "CARDIO-056",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [D]] หลอดเลือดดำ Great Cardiac Vein ทอดคู่กับหลอดเลือดแดงใด และนำเลือดดำจากกล้ามเนื้อหัวใจไหลไปเทรวมเข้าสู่โครงสร้างใดทางด้านหลังของหัวใจ?",
    "options": {
      "A": "ทอดคู่กับ Pulmonary trunk แล้วเทเข้าสู่ปอด",
      "B": "ทอดคู่กับ Posterior interventricular artery แล้วเทเข้า Inferior Vena Cava",
      "C": "ทอดคู่กับ Aorta แล้วเทเข้าสู่ Left Atrium",
      "D": "ทอดคู่กับ Anterior Interventricular Artery (LAD) ในร่องด้านหน้า แล้วเทเข้าสู่ Coronary Sinus"
    },
    "correctOption": "D",
    "explanation": "Great Cardiac Vein ทอดคู่กับ Anterior Interventricular Artery (LAD) ใน Anterior interventricular sulcus รับเลือดดำจากผิวด้านหน้าของ Ventricles ทั้งสอง จากนั้นจะโค้งไปตาม Coronary sulcus ด้านหลังเพื่อเทเข้าสู่ Coronary Sinus\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Coronary Arteries & Cardiac Venous Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [D] (Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 48,
    "tags": [
      "great-cardiac-vein",
      "coronary-sinus",
      "lad",
      "has-diagram",
      "diagram-coronary_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/coronary_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/coronary_vessels_labeled.svg",
    "imageCaption": "Coronary Arteries & Cardiac Venous Drainage — หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Aortic Sinus (Origin of Coronary a.)",
        "thaiName": "จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta",
        "description": "ตำแหน่ง [A] คือ Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta"
      },
      {
        "pin": "B",
        "term": "Right Coronary Artery (RCA)",
        "thaiName": "หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)",
        "description": "ตำแหน่ง [B] คือ Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)"
      },
      {
        "pin": "C",
        "term": "Right Marginal Artery",
        "thaiName": "แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV",
        "description": "ตำแหน่ง [C] คือ Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV"
      },
      {
        "pin": "D",
        "term": "Anterior Interventricular Artery (LAD)",
        "thaiName": "หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)",
        "description": "ตำแหน่ง [D] คือ Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)"
      },
      {
        "pin": "E",
        "term": "Circumflex Artery (LCx)",
        "thaiName": "หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย",
        "description": "ตำแหน่ง [E] คือ Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย"
      },
      {
        "pin": "F",
        "term": "Coronary Sinus & Great Cardiac Vein",
        "thaiName": "แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium",
        "description": "ตำแหน่ง [F] คือ Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium"
      }
    ]
  },
  {
    "id": "CARDIO-057",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [C]] หลอดเลือดดำ Middle Cardiac Vein ทอดตัวอยู่ในร่องใดทางด้านหลังของหัวใจ และทอดตัวคู่ขนานไปกับหลอดเลือดแดงเส้นใด?",
    "options": {
      "A": "ทอดอยู่ใน Posterior interventricular sulcus คู่กับ Posterior Interventricular Artery",
      "B": "ทอดอยู่ใน Anterior interventricular sulcus คู่กับ LAD",
      "C": "ทอดอยู่ข้างขอบล่างหัวใจคู่กับ Right marginal artery",
      "D": "ทอดอยู่บน Superior vena cava"
    },
    "correctOption": "A",
    "explanation": "Middle Cardiac Vein ทอดตัวอยู่ใน Posterior interventricular sulcus ทางด้านหลังของหัวใจ คู่กับ Posterior Interventricular Artery (แขนงของ RCA) และนำเลือดดำเทเข้าสู่ Coronary Sinus\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Coronary Arteries & Cardiac Venous Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [C] (Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 48,
    "tags": [
      "middle-cardiac-vein",
      "posterior-interventricular",
      "has-diagram",
      "diagram-coronary_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/coronary_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/coronary_vessels_labeled.svg",
    "imageCaption": "Coronary Arteries & Cardiac Venous Drainage — หลอดเลือดแดงโคโรนารี (RCA, LCA, LAD, LCx) และหลอดเลือดดำหัวใจ",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Aortic Sinus (Origin of Coronary a.)",
        "thaiName": "จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta",
        "description": "ตำแหน่ง [A] คือ Aortic Sinus (Origin of Coronary a.) — จุดกำเนิดหลอดเลือดโคโรนารีที่โคน Aorta"
      },
      {
        "pin": "B",
        "term": "Right Coronary Artery (RCA)",
        "thaiName": "หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)",
        "description": "ตำแหน่ง [B] คือ Right Coronary Artery (RCA) — หลอดเลือดโคโรนารีขวา (เลี้ยง RA, RV, SA/AV node)"
      },
      {
        "pin": "C",
        "term": "Right Marginal Artery",
        "thaiName": "แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV",
        "description": "ตำแหน่ง [C] คือ Right Marginal Artery — แขนงมาร์จินัลขวาเลี้ยงผนังด้านข้าง RV"
      },
      {
        "pin": "D",
        "term": "Anterior Interventricular Artery (LAD)",
        "thaiName": "หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)",
        "description": "ตำแหน่ง [D] คือ Anterior Interventricular Artery (LAD) — หลอดเลือด LAD (\"Widow maker\" เลี้ยงผนังหน้า LV)"
      },
      {
        "pin": "E",
        "term": "Circumflex Artery (LCx)",
        "thaiName": "หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย",
        "description": "ตำแหน่ง [E] คือ Circumflex Artery (LCx) — หลอดเลือดเซอร์คัมเฟลกซ์อ้อมไปด้านหลังซ้าย"
      },
      {
        "pin": "F",
        "term": "Coronary Sinus & Great Cardiac Vein",
        "thaiName": "แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium",
        "description": "ตำแหน่ง [F] คือ Coronary Sinus & Great Cardiac Vein — แอ่งรวมเลือดดำหัวใจเทเข้าสู่ Right Atrium"
      }
    ]
  },
  {
    "id": "CARDIO-058",
    "questionText": "กระเปาะหลอดเลือดดำขนาดใหญ่ทางด้านหลังของหัวใจในร่อง Coronary sulcus ที่ทำหน้าที่รวบรวมเลือดดำเกือบทั้งหมดจากกล้ามเนื้อหัวใจเพื่อส่งตรงเข้าสู่ Right Atrium คือโครงสร้างใด?",
    "options": {
      "A": "Superior Vena Cava",
      "B": "Coronary Sinus",
      "C": "Inferior Vena Cava",
      "D": "Cisterna Chyli"
    },
    "correctOption": "B",
    "explanation": "Coronary Sinus เป็นแอ่งหลอดเลือดดำกว้างที่อยู่บนผิวด้านหลังของหัวใจใน Coronary sulcus รับเลือดดำจาก Great, Middle, และ Small cardiac veins แล้วเทเข้าสู่ Right Atrium โดยตรงผ่านทาง Coronary sinus orifice (มี Thebesian valve กั้นบางส่วน)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Easy",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 47,
    "tags": [
      "coronary-sinus",
      "right-atrium"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-059",
    "questionText": "การไหลเวียนของเลือดในหลอดเลือดโคโรนารี (Coronary blood flow) แตกต่างจากอวัยวะอื่นในร่างกายอย่างไร โดยเฉพาะในกล้ามเนื้อหัวใจห้องล่างซ้าย?",
    "options": {
      "A": "อัตราการไหลคงที่ตลอดเวลาไม่ขึ้นกับวงรอบการเต้นของหัวใจ",
      "B": "เลือดจะไหลเข้าได้เฉพาะในช่วง Ventricular systole ที่มีความดันสูงสุดเท่านั้น",
      "C": "เลือดจะไหลเข้าสู่กล้ามเนื้อหัวใจห้องล่างซ้ายได้มากที่สุดในช่วง Ventricular diastole (หัวใจคลายตัว) เนื่องจากในช่วง Systole ผนังกล้ามเนื้อหัวใจจะบีบตัวแน่นจนกดเบียดหลอดเลือดฝอยโคโรนารีให้ตีบลง",
      "D": "เลือดจะหยุดไหลทั้งหมดเมื่อความดันโลหิตสูงขึ้น"
    },
    "correctOption": "C",
    "explanation": "กล้ามเนื้อหัวใจห้องล่างซ้ายสร้างแรงบีบตัวมหาศาลขณะ Systole ซึ่งบีบกด Intramyocardial coronary vessels ทำให้เลือดแทบไม่สามารถไหลผ่านได้ แต่เมื่อเข้าสู่ระยะ Ventricular diastole ผนังคลายตัว และมีแรงดันย้อนกลับใน Aorta เลือดจึงไหลเข้าสู่ Coronary arteries และ Myocardium ได้อย่างเต็มที่ (ประมาณ 70-80% ของ Coronary flow เกิดใน Diastole)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 44,
    "tags": [
      "coronary-flow-diastole",
      "myocardial-perfusion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-060",
    "questionText": "ผู้ป่วยโรคหลอดเลือดหัวใจตีบมักได้รับการผ่าตัดทำทางเบี่ยงหลอดเลือดหัวใจ (Coronary Artery Bypass Graft: CABG) หลอดเลือดดำและหลอดเลือดแดงของร่างกายที่นิยมนำมาทำ Graft มากที่สุดคือข้อใด?",
    "options": {
      "A": "Renal artery และ Portal vein",
      "B": "Femoral artery และ Jugular vein",
      "C": "Brachial artery และ Cephalic vein",
      "D": "Great saphenous vein (จากขา) และ Internal thoracic artery (Internal mammary artery: LIMA จากผนังทรวงอก)"
    },
    "correctOption": "D",
    "explanation": "ในการผ่าตัด CABG หลอดเลือดที่นิยมใช้มากที่สุดคือ 1. Great saphenous vein จากรยางค์ล่าง (เนื่องจากยาวและตัดออกได้โดยไม่กระทบต่อการไหลเวียนหลัก) 2. Left Internal Thoracic Artery (LIMA) จากผนังทรวงอกด้านใน (ซึ่งมีอัตราการเปิดโล่งในระยะยาวดีที่สุด)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Coronary Circulation & Clinical Ischemia",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 50,
    "tags": [
      "cabg",
      "great-saphenous-vein",
      "internal-thoracic-artery"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-061",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [E]] ผนังของหลอดเลือดแดงและหลอดเลือดดำทั่วไปประกอบด้วยชั้นเนื้อเยื่อ 3 ชั้น ลำดับจากชั้นในสุดสัมผัสกับเลือดออกสู่ชั้นนอกสุดข้อใดถูกต้อง?",
    "options": {
      "A": "Tunica intima -> Tunica media -> Tunica externa (Tunica adventitia)",
      "B": "Tunica media -> Tunica intima -> Tunica externa",
      "C": "Tunica externa -> Tunica media -> Tunica intima",
      "D": "Tunica intima -> Tunica adventitia -> Tunica media"
    },
    "correctOption": "A",
    "explanation": "ผนังหลอดเลือดเรียงจากในออกนอก: 1. Tunica intima (ชั้นในสุด มี Endothelium และ Internal elastic lamina) 2. Tunica media (ชั้นกลาง ประกอบด้วยกล้ามเนื้อเรียบและ Elastic fibers) 3. Tunica externa/adventitia (ชั้นนอกสุด ประกอบด้วยคอลลาเจนและ Vasa vasorum)\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Hematology (Formed Elements) & Blood Vessel Wall Layers): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [E] (Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Easy",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 52,
    "tags": [
      "vessel-wall-layers",
      "tunica-intima-media-adventitia",
      "has-diagram",
      "diagram-blood_cells_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/blood_cells_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/blood_cells_vessels_labeled.svg",
    "imageCaption": "Hematology (Formed Elements) & Blood Vessel Wall Layers — สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Erythrocyte (Biconcave RBC)",
        "thaiName": "เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส",
        "description": "ตำแหน่ง [A] คือ Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส"
      },
      {
        "pin": "B",
        "term": "Neutrophil (3-5 Lobed PMN)",
        "thaiName": "นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก",
        "description": "ตำแหน่ง [B] คือ Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก"
      },
      {
        "pin": "C",
        "term": "Eosinophil (Bilobed Nucleus)",
        "thaiName": "อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)",
        "description": "ตำแหน่ง [C] คือ Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)"
      },
      {
        "pin": "D",
        "term": "Monocyte (Kidney-shaped Nucleus)",
        "thaiName": "โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)",
        "description": "ตำแหน่ง [D] คือ Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)"
      },
      {
        "pin": "E",
        "term": "Tunica Intima (Endothelium)",
        "thaiName": "ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium",
        "description": "ตำแหน่ง [E] คือ Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium"
      },
      {
        "pin": "F",
        "term": "Tunica Media (Smooth Muscle & Elastin)",
        "thaiName": "ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)",
        "description": "ตำแหน่ง [F] คือ Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)"
      }
    ]
  },
  {
    "id": "CARDIO-062",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [F]] หลอดเลือดแดงขนาดใหญ่ เช่น Aorta และ Pulmonary trunk จัดเป็นกลุ่ม Elastic arteries (Conducting arteries) ในชั้น Tunica media ของหลอดเลือดกลุ่มนี้มีลักษณะพิเศษทางเนื้อเยื่ออย่างไรที่ช่วยทำหน้าที่ Windkessel effect?",
    "options": {
      "A": "มีเซลล์กล้ามเนื้อลายหนาแน่นช่วยบีบรูดเลือด",
      "B": "มีแผ่นเส้นใยอิลาสติน (Elastic lamellae) เรียงตัวสลับกันจำนวนมากในชั้น Tunica media ทำให้สามารถขยายตัวรับแรงกระแทกของเลือดในจังหวะ Systole และหดตัวดันเลือดไหลต่อเนื่องในจังหวะ Diastole",
      "C": "มีลิ้นเปิดปิดภายในท่อตลอดความยาว",
      "D": "ไม่มีชั้น Tunica media เพื่อให้ผนังบางที่สุด"
    },
    "correctOption": "B",
    "explanation": "Elastic arteries (เช่น Aorta) มี Elastic fibers จำนวนมากใน Tunica media ทำหน้าที่เป็นถังรับแรงดัน (Windkessel effect) ยืดขยายตัวรับ Stroke volume ขณะ Systole และหดตัวกลับ (Elastic recoil) ดันเลือดให้ไหลต่อเนื่องไปข้างหน้าในขณะ Diastole ช่วยลดความดันตัวบนและคงความดันตัวล่างไม่ให้ตกเป็นศูนย์\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Hematology (Formed Elements) & Blood Vessel Wall Layers): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [F] (Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 53,
    "tags": [
      "elastic-arteries",
      "windkessel-effect",
      "aorta",
      "has-diagram",
      "diagram-blood_cells_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/blood_cells_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/blood_cells_vessels_labeled.svg",
    "imageCaption": "Hematology (Formed Elements) & Blood Vessel Wall Layers — สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Erythrocyte (Biconcave RBC)",
        "thaiName": "เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส",
        "description": "ตำแหน่ง [A] คือ Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส"
      },
      {
        "pin": "B",
        "term": "Neutrophil (3-5 Lobed PMN)",
        "thaiName": "นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก",
        "description": "ตำแหน่ง [B] คือ Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก"
      },
      {
        "pin": "C",
        "term": "Eosinophil (Bilobed Nucleus)",
        "thaiName": "อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)",
        "description": "ตำแหน่ง [C] คือ Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)"
      },
      {
        "pin": "D",
        "term": "Monocyte (Kidney-shaped Nucleus)",
        "thaiName": "โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)",
        "description": "ตำแหน่ง [D] คือ Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)"
      },
      {
        "pin": "E",
        "term": "Tunica Intima (Endothelium)",
        "thaiName": "ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium",
        "description": "ตำแหน่ง [E] คือ Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium"
      },
      {
        "pin": "F",
        "term": "Tunica Media (Smooth Muscle & Elastin)",
        "thaiName": "ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)",
        "description": "ตำแหน่ง [F] คือ Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)"
      }
    ]
  },
  {
    "id": "CARDIO-063",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [F]] หลอดเลือดชนิดใดในระบบไหลเวียนโลหิตที่ทำหน้าที่เป็น Major resistance vessels (ตัวต้านทานหลักของระบบ) ซึ่งมีผลต่อการควบคุมความดันโลหิตทั่วร่างกาย (Systemic blood pressure) มากที่สุดจากการหดและขยายตัวของกล้ามเนื้อเรียบ?",
    "options": {
      "A": "Large veins",
      "B": "Elastic arteries",
      "C": "Arterioles (หลอดเลือดแดงเล็ก)",
      "D": "Continuous capillaries"
    },
    "correctOption": "C",
    "explanation": "Arterioles มีสัดส่วนของกล้ามเนื้อเรียบในชั้น Tunica media หนามากเมื่อเทียบกับขนาด Lumen และถูกควบคุมอย่างใกล้ชิดโดยระบบประสาทอัตโนมัติ การเปลี่ยนแปลงขนาดเส้นผ่านศูนย์กลางเพียงเล็กน้อยของ Arterioles จะส่งผลต่อแรงต้านทานส่วนปลาย (Total Peripheral Resistance: TPR) และความดันโลหิตอย่างมหาศาลตามกฎของ Poiseuille\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Hematology (Formed Elements) & Blood Vessel Wall Layers): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [F] (Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 54,
    "tags": [
      "arterioles",
      "resistance-vessels",
      "tpr",
      "blood-pressure",
      "has-diagram",
      "diagram-blood_cells_vessels"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/blood_cells_vessels_exam.svg",
    "labeledImageUrl": "/images/anatomy/blood_cells_vessels_labeled.svg",
    "imageCaption": "Hematology (Formed Elements) & Blood Vessel Wall Layers — สัณฐานวิทยาเม็ดเลือดชนิดต่างๆ และโครงสร้างผนังหลอดเลือด 3 ชั้น",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Erythrocyte (Biconcave RBC)",
        "thaiName": "เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส",
        "description": "ตำแหน่ง [A] คือ Erythrocyte (Biconcave RBC) — เม็ดเลือดแดงรูปจานเว้าสองด้าน ไม่มีนิวเคลียส"
      },
      {
        "pin": "B",
        "term": "Neutrophil (3-5 Lobed PMN)",
        "thaiName": "นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก",
        "description": "ตำแหน่ง [B] คือ Neutrophil (3-5 Lobed PMN) — นิวโทรฟิล (60-70%) กำจัดแบคทีเรียด่านแรก"
      },
      {
        "pin": "C",
        "term": "Eosinophil (Bilobed Nucleus)",
        "thaiName": "อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)",
        "description": "ตำแหน่ง [C] คือ Eosinophil (Bilobed Nucleus) — อีโอซิโนฟิล (แกรนูลสีส้มแดง ทำลายพยาธิ/ภูมิแพ้)"
      },
      {
        "pin": "D",
        "term": "Monocyte (Kidney-shaped Nucleus)",
        "thaiName": "โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)",
        "description": "ตำแหน่ง [D] คือ Monocyte (Kidney-shaped Nucleus) — โมโนไซต์ (ใหญ่ที่สุด เปลี่ยนเป็น Macrophage)"
      },
      {
        "pin": "E",
        "term": "Tunica Intima (Endothelium)",
        "thaiName": "ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium",
        "description": "ตำแหน่ง [E] คือ Tunica Intima (Endothelium) — ผนังชั้นในสุดสัมผัสเลือด ต่อเนื่องกับ Endocardium"
      },
      {
        "pin": "F",
        "term": "Tunica Media (Smooth Muscle & Elastin)",
        "thaiName": "ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)",
        "description": "ตำแหน่ง [F] คือ Tunica Media (Smooth Muscle & Elastin) — ผนังชั้นกลาง (หนาสุดใน Artery ควบคุมความดัน)"
      }
    ]
  },
  {
    "id": "CARDIO-064",
    "questionText": "หลอดเลือดฝอย (Capillaries) ชนิด Fenestrated capillaries มีลักษณะทางจุลกายวิภาคอย่างไร และพบได้เด่นชัดที่สุดในอวัยวะใด?",
    "options": {
      "A": "มีชั้นกล้ามเนื้อเรียบ 3 ชั้นล้อมรอบ",
      "B": "ไม่มีรูพรุนใดๆ มี Tight junctions แนบสนิท พบที่ Blood-Brain Barrier ในสมอง",
      "C": "มีช่องว่างกว้างมากระหว่างเซลล์และ Basement membrane ไม่สมบูรณ์ พบที่ตับ ม้าม และไขกระดูก",
      "D": "เซลล์ Endothelial มีรูพรุนขนาดเล็ก (Fenestrations) แต่ยังมี Basement membrane ต่อเนื่อง พบได้ที่ Glomerulus ของไต, ต่อมไร้ท่อ และเยื่อบุทางเดินอาหาร"
    },
    "correctOption": "D",
    "explanation": "Fenestrated capillaries มีรูพรุน (Pores/Fenestrae ขนาด 60-80 nm) บนผนังเซลล์บุผิว ช่วยให้โมเลกุลขนาดเล็กและของเหลวซึมผ่านได้อย่างรวดเร็ว พบในอวัยวะที่มีการกรองหรือดูดซึมสารสูง เช่น Glomerulus ของไต, เยื่อบุลำไส้เล็ก และต่อมไร้ท่อต่างๆ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 55,
    "tags": [
      "fenestrated-capillaries",
      "renal-glomerulus",
      "microcirculation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-065",
    "questionText": "หลอดเลือดฝอยชนิด Sinusoid (Discontinuous capillaries) มีลักษณะเด่นอย่างไร และมีความสัมพันธ์เชิงโครงสร้างและหน้าที่กับอวัยวะใด?",
    "options": {
      "A": "มี Lumen กว้าง ผนังเซลล์ Endothelial มีช่องว่างขนาดใหญ่ (Intercellular gaps) และมี Incomplete/absent basement membrane ช่วยให้เซลล์เม็ดเลือดและโปรตีนขนาดใหญ่ผ่านได้ พบที่ตับ (Liver), ม้าม (Spleen) และไขกระดูก (Bone marrow)",
      "B": "ผนังเซลล์ติดกันแน่นไม่มีช่องว่าง พบที่กล้ามเนื้อลายและปอด",
      "C": "มีรูพรุนขนาดเล็กเฉพาะน้ำผ่านได้ พบที่กระจกตา",
      "D": "ผนังประกอบด้วยเซลล์ Schwann ล้อมรอบ"
    },
    "correctOption": "A",
    "explanation": "Sinusoids (Discontinuous capillaries) มีทางเดินคดเคี้ยว รูเปิดกว้าง และเยื่อเบสเมนต์ไม่ต่อเนื่องหรือขาดหายไป ช่วยให้สารโมเลกุลขนาดใหญ่มาก รวมถึงเซลล์เม็ดเลือดที่สร้างขึ้นใหม่สามารถเข้าหรือออกจากกระแสเลือดได้ พบในอวัยวะสร้างและทำลายเม็ดเลือด ได้แก่ ไขกระดูก, ตับ (Liver sinusoids), และม้าม",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 55,
    "tags": [
      "sinusoids",
      "discontinuous-capillaries",
      "spleen",
      "liver",
      "bone-marrow"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-066",
    "questionText": "หลอดเลือดกลุ่มใดในระบบไหลเวียนโลหิตที่ทำหน้าที่เป็น Capacitance vessels หรือ Blood reservoir ซึ่งบรรจุเลือดอยู่ถึงประมาณ 60-65% ของปริมาตรเลือดทั้งหมดในร่างกายขณะพัก?",
    "options": {
      "A": "Systemic arteries",
      "B": "Veins and Venules (หลอดเลือดดำและหลอดเลือดดำเล็ก)",
      "C": "Capillaries",
      "D": "Heart chambers"
    },
    "correctOption": "B",
    "explanation": "Veins มีผนังบาง มีความยืดหยุ่นสูง (High compliance) และมี Lumen กว้าง ทำให้สามารถกักเก็บปริมาตรเลือดไว้ได้มากถึง 60-65% ของร่างกาย จึงทำหน้าที่เป็น Blood reservoir (Capacitance vessels) เมื่อร่างกายต้องการเลือดเพิ่ม (เช่น ขณะออกกำลังกายหรือตกเลือด) หลอดเลือดดำจะถูกกระตุ้นให้หดตัว (Venoconstriction) เพื่อเพิ่ม Venous return เข้าสู่หัวใจ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 56,
    "tags": [
      "capacitance-vessels",
      "veins",
      "blood-reservoir"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-067",
    "questionText": "กลไกสำคัญที่ช่วยให้เลือดดำจากรยางค์ล่างสามารถไหลย้อนแรงโน้มถ่วงกลับเข้าสู่หัวใจห้องบนขวาได้โดยไม่เกิดการไหลย้อนกลับคือข้อใด?",
    "options": {
      "A": "การหดตัวของเซลล์เยื่อบุผิว Endothelium",
      "B": "แรงสูบฉีดโดยตรงจาก Ventricle ซ้าย",
      "C": "การทำงานร่วมกันของ Venous valves (ลิ้นภายในหลอดเลือดดำ) กับ Skeletal muscle pump และ Respiratory pump",
      "D": "ความดันในช่องอกที่เป็นบวกตลอดเวลา"
    },
    "correctOption": "C",
    "explanation": "เลือดดำมีความดันต่ำมาก การไหลกลับเข้าสู่หัวใจ (Venous return) จึงต้องอาศัย: 1. Venous valves (ส่วนพับของ Tunica intima ทำหน้าที่กั้นไม่ให้เลือดไหลย้อนกลับ) 2. Skeletal muscle pump (กล้ามเนื้อน่องบีบอัดหลอดเลือดดำขณะก้าวเดิน) 3. Respiratory pump (ความดันในช่องอกลดลงเป็นลบขณะหายใจเข้าช่วยดูดเลือดเข้าสู่ IVC)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 57,
    "tags": [
      "venous-return",
      "venous-valves",
      "skeletal-muscle-pump"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-068",
    "questionText": "ผู้ป่วยหญิงมีอาการเส้นเลือดขอดรุนแรงที่ขาทั้งสองข้าง (Varicose veins) พยาธิสภาพทางกายวิภาคเกิดจากความผิดปกติของโครงสร้างใดในหลอดเลือดดำ?",
    "options": {
      "A": "การสร้างลิ่มเลือดในหลอดเลือดฝอย",
      "B": "การตีบตันของหลอดเลือดแดง Femoral artery",
      "C": "การขาดหายไปของชั้น Tunica adventitia",
      "D": "ลิ้นในหลอดเลือดดำ (Venous valves) เสื่อมสภาพและปิดไม่สนิท (Incompetent valves) ทำให้เลือดดำไหลย้อนกลับมาคั่งและเพิ่มแรงดันจนผนังหลอดเลือดโป่งพองคดเคี้ยว"
    },
    "correctOption": "D",
    "explanation": "Varicose veins เกิดขึ้นเมื่อ Venous valves ใน Superficial veins (โดยเฉพาะ Great saphenous vein) เกิดการรั่วหรือเสื่อมสภาพ (Valvular incompetence) ส่งผลให้เลือดไหลย้อนลงสู่ส่วนล่างตามแรงโน้มถ่วง เกิดภาวะหลอดเลือดดำคั่ง แรงดันในหลอดเลือดดำสูงขึ้น ผนังหลอดเลือดจึงยืดขยาย โป่งพอง และคดงอ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 57,
    "tags": [
      "varicose-veins",
      "valvular-incompetence",
      "saphenous-vein"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-069",
    "questionText": "หลอดเลือดแดงขนาดใหญ่ Aorta เมื่อทอดตัวออกจากหัวใจจะโค้งเป็นรูปตัวยูคว่ำเรียกว่า Aortic Arch แขนงใหญ่ 3 แขนงที่แตกออกจากส่วนโค้งของ Aortic Arch เรียงลำดับจากขวาไปซ้ายคือข้อใด?",
    "options": {
      "A": "Brachiocephalic trunk -> Left Common Carotid artery -> Left Subclavian artery",
      "B": "Right Subclavian artery -> Right Common Carotid artery -> Left Subclavian artery",
      "C": "Left Common Carotid artery -> Right Common Carotid artery -> Brachiocephalic trunk",
      "D": "Celiac trunk -> Superior mesenteric artery -> Inferior mesenteric artery"
    },
    "correctOption": "A",
    "explanation": "แขนง 3 เส้นที่แตกออกจาก Aortic Arch จากขวาไปซ้ายตามลำดับ ได้แก่: 1. Brachiocephalic trunk (ซึ่งจะไปแตกแขนงต่อเป็น Right subclavian และ Right common carotid) 2. Left common carotid artery (ไปเลี้ยงศีรษะและสมองด้านซ้าย) 3. Left subclavian artery (ไปเลี้ยงแขนซ้าย)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Major Arteries & Systemic Circulation",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 59,
    "tags": [
      "aortic-arch",
      "brachiocephalic-trunk",
      "carotid",
      "subclavian"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-070",
    "questionText": "หลอดเลือดโครงสร้างวงแหวนหลอดเลือดแดงที่ฐานสมอง (Cerebral arterial circle หรือ Circle of Willis) เกิดจากการเชื่อมประสานกัน (Anastomosis) ระหว่างระบบหลอดเลือดคู่ใด?",
    "options": {
      "A": "External Carotid arteries กับ Subclavian arteries",
      "B": "Internal Carotid arteries (ผ่าน Anterior cerebral & Anterior communicating) กับ Vertebral arteries (ผ่าน Basilar, Posterior cerebral & Posterior communicating)",
      "C": "Facial arteries กับ Maxillary arteries",
      "D": "Jugular veins กับ Superior sagittal sinus"
    },
    "correctOption": "B",
    "explanation": "Circle of Willis ตั้งอยู่ที่ฐานสมองรอบ Pituitary gland และ Optic chiasm เกิดจากการเชื่อมต่อกันระหว่างระบบ Internal Carotid (Anterior circulation) กับระบบ Vertebrobasilar (Posterior circulation) ผ่าน Anterior communicating artery และคู่ของ Posterior communicating arteries ทำหน้าที่เป็น Collateral circulation ป้องกันเนื้อสมองขาดเลือด",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Major Arteries & Systemic Circulation",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 60,
    "tags": [
      "circle-of-willis",
      "internal-carotid",
      "vertebral-artery"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-071",
    "questionText": "Baroreceptors ที่ทำหน้าที่ตรวจจับการเปลี่ยนแปลงของความดันโลหิต (Blood pressure sensors) และส่งสัญญาณประสาทไปควบคุมที่ศูนย์ในก้านสมอง (Medulla oblongata) ตั้งอยู่ที่ตำแหน่งทางกายวิภาคใดบ้าง?",
    "options": {
      "A": "Apex of heart และ Left atrium",
      "B": "Subclavian vein และ Jugular bulb",
      "C": "Carotid sinus (ที่โคนของ Internal carotid artery) และ Aortic arch",
      "D": "Femoral artery และ Popliteal artery"
    },
    "correctOption": "C",
    "explanation": "Baroreceptors เป็น Mechanoreceptors ตรวจจับแรงตึงผนังหลอดเลือด ตั้งอยู่ที่ Carotid sinus (ส่งสัญญาณผ่าน Glossopharyngeal nerve: CN IX) และ Aortic arch (ส่งสัญญาณผ่าน Vagus nerve: CN X) ไปยัง Nucleus tractus solitarius (NTS) ใน Medulla เพื่อควบคุมความดันโลหิตผ่าน Baroreceptor reflex",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Blood Vessels Anatomy & Histology",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 61,
    "tags": [
      "baroreceptors",
      "carotid-sinus",
      "aortic-arch",
      "cn-ix",
      "cn-x"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-072",
    "questionText": "หลอดเลือดแดง Abdominal Aorta จะสิ้นสุดลงที่ระดับกระดูกสันหลังระดับใด โดยแยกแขนงออกเป็นหลอดเลือดคู่ใด?",
    "options": {
      "A": "ระดับกระดูกกระเบนเหน็บข้อที่ 1 (S1) แยกเป็น Internal iliac arteries",
      "B": "ระดับกระดูกสันหลังส่วนอกข้อที่ 12 (T12) แยกเป็น Renal arteries",
      "C": "ระดับกระดูกสันหลังส่วนเอวข้อที่ 1 (L1) แยกเป็น Femoral arteries",
      "D": "ระดับกระดูกสันหลังส่วนเอวข้อที่ 4 (L4) โดยแยกออกเป็น Right and Left Common Iliac arteries"
    },
    "correctOption": "D",
    "explanation": "Abdominal aorta ทอดผ่านกะบังลมที่ระดับ T12 (Aortic hiatus) ลงมาจนถึงระดับกระดูกสันหลังระดับ L4 (แนวระนาบของ Iliac crest) จากนั้นจะสิ้นสุดโดยแยกออกเป็น 2 แขนงใหญ่คือ Right Common Iliac Artery และ Left Common Iliac Artery เพื่อไปเลี้ยงเชิงกรานและขาทั้งสองข้าง",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Major Arteries & Systemic Circulation",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 62,
    "tags": [
      "abdominal-aorta",
      "bifurcation-l4",
      "common-iliac"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-073",
    "questionText": "ในระบบไหลเวียนพอร์ทัลของตับ (Hepatic Portal System) หลอดเลือดดำ Hepatic Portal Vein เกิดจากการรวมตัวกันของหลอดเลือดดำใหญ่คู่ใดทางด้านหลังของคอตับอ่อน?",
    "options": {
      "A": "Superior Mesenteric Vein (SMV) และ Splenic Vein",
      "B": "Inferior Vena Cava และ Hepatic Vein",
      "C": "Renal Vein และ Femoral Vein",
      "D": "Internal Iliac Vein และ External Iliac Vein"
    },
    "correctOption": "A",
    "explanation": "Hepatic Portal Vein เกิดจากการรวมตัวกันของ Superior Mesenteric Vein (นำเลือดที่มีสารอาหารจากลำไส้เล็กและลำไส้ใหญ่ส่วนต้น) กับ Splenic Vein (ซึ่งรับ Inferior Mesenteric Vein มาก่อนหน้า) ทางด้านหลัง Neck of Pancreas แล้วนำเลือดเข้าสู่ตับเพื่อประมวลผลสารอาหารและกำจัดสารพิษ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Major Veins & Portal System",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 64,
    "tags": [
      "hepatic-portal-system",
      "smv",
      "splenic-vein"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-074",
    "questionText": "เลือดจากระบบ Hepatic Portal System หลังจากผ่านการแลกเปลี่ยนสารและกรองใน Sinusoids ของตับแล้ว จะไหลออกจากเนื้อตับเข้าสู่ระบบไหลเวียนหลักผ่านหลอดเลือดใด?",
    "options": {
      "A": "Celiac trunk เพื่อเทเข้าสู่ Aorta",
      "B": "Hepatic veins (หลอดเลือดดำตับ 3 เส้นหลัก) เพื่อเทเข้าสู่ Inferior Vena Cava (IVC)",
      "C": "Bile duct เพื่อเทเข้าสู่ถุงน้ำดี",
      "D": "Portal triad เพื่อเทกลับสู่กระเพาะอาหาร"
    },
    "correctOption": "B",
    "explanation": "เส้นทางไหลของเลือดในตับ: Portal vein + Hepatic artery -> Liver sinusoids (สัมผัส Hepatocytes และ Kupffer cells) -> Central vein -> Hepatic veins (Right, Middle, Left) -> เทเข้าสู่ Inferior Vena Cava (IVC) บริเวณใต้กะบังลม เพื่อกลับสู่หัวใจห้องบนขวา",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Major Veins & Portal System",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 65,
    "tags": [
      "hepatic-veins",
      "liver-sinusoids",
      "ivc"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-075",
    "questionText": "หลอดเลือดดำที่อยู่ตื้นบริเวณข้อพับแขน (Cubital fossa) ที่แพทย์และพยาบาลนิยมใช้ในการเจาะเก็บตัวอย่างเลือดส่งตรวจ (Venipuncture) และการให้สารน้ำทางหลอดเลือดมากที่สุดคือหลอดเลือดใด?",
    "options": {
      "A": "Great saphenous vein",
      "B": "Brachial artery",
      "C": "Median Cubital Vein (ซึ่งเชื่อมระหว่าง Cephalic vein กับ Basilic vein)",
      "D": "Subclavian vein"
    },
    "correctOption": "C",
    "explanation": "Median Cubital Vein อยู่ในชั้นตื้นใต้ผิวหนังบริเวณ Cubital fossa เชื่อมระหว่าง Cephalic vein (ด้าน Lateral) กับ Basilic vein (ด้าน Medial) เป็นตำแหน่งยอดนิยมที่สุดในการเจาะเลือด (Venipuncture) เนื่องจากขนาดใหญ่ อยู่ตื้น และถูกตรึงด้วย Bicipital aponeurosis ทำให้ไม่เลื่อนหลุดง่าย",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Major Veins & Portal System",
    "difficulty": "Easy",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 63,
    "tags": [
      "median-cubital-vein",
      "venipuncture",
      "cubital-fossa"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-076",
    "questionText": "หลอดน้ำเหลืองฝอย (Lymphatic capillaries) มีลักษณะโครงสร้างทางกายวิภาคพิเศษที่แตกต่างจากหลอดเลือดฝอยของระบบไหลเวียนโลหิตอย่างไร?",
    "options": {
      "A": "มีรูพรุนขนาดใหญ่ที่ยอมให้เม็ดเลือดแดงผ่านได้ตลอดเวลา",
      "B": "มีปลายเปิดเชื่อมต่อโดยตรงกับหลอดเลือดแดง Arterioles",
      "C": "มีผนังกล้ามเนื้อหนากว่าหลอดเลือดแดงเพื่อปั๊มน้ำเหลือง",
      "D": "มีปลายปิดตัน (Blind-ended) ผนังเซลล์ Endothelial เรียงซ้อนเกยกันคล้ายกระเบื้องมุงหลังคาเกิดเป็น Minivalves เปิดทิศทางเดียว และมี Anchoring filaments ยึดกับคอลลาเจนในเนื้อเยื่อ"
    },
    "correctOption": "D",
    "explanation": "Lymphatic capillaries มีปลายปิดตัน (Blind-ended tubes) แทรกอยู่ในช่องว่างระหว่างเซลล์ เซลล์ Endothelium เกยซ้อนกันกลายเป็น One-way minivalves เมื่อแรงดันของเหลวใน Interstitial fluid สูงขึ้นจะดันให้ลิ้นเปิดยอมให้ของเหลว โปรตีน แบคทีเรียเข้าสู่ท่อได้ โดยมี Anchoring filaments ช่วยยึดไม่ให้ท่อแฟบ",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 68,
    "tags": [
      "lymphatic-capillaries",
      "blind-ended",
      "minivalves",
      "anchoring-filaments"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-077",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [F]] หลอดน้ำเหลืองพิเศษที่พบในชั้น Mucosa ของวิลไล (Villi) ในลำไส้เล็ก ทำหน้าที่ดูดซึมไขมันและสารอาหารที่ละลายในไขมันในรูปของไคโลไมครอน (Chylomicrons) มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Lacteals (หลอดน้ำเหลืองแล็กทีล)",
      "B": "Peyer's patches",
      "C": "Crypts of Lieberkühn",
      "D": "Brunner's glands"
    },
    "correctOption": "A",
    "explanation": "Lacteals เป็นหลอดน้ำเหลืองฝอยปลายตันขนาดใหญ่ที่อยู่ในแกนกลางของแต่ละ Villi ในลำไส้เล็ก ทำหน้าที่ดูดซึมไขมันที่ย่อยแล้วในรูป Chylomicrons ทำให้น้ำเหลืองที่ไหลออกมามีลักษณะขุ่นขาวคล้ายน้ำนม เรียกว่า Chyle\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [F] (Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 69,
    "tags": [
      "lacteals",
      "chyle",
      "fat-absorption",
      "small-intestine",
      "has-diagram",
      "diagram-lymphatic_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/lymphatic_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/lymphatic_system_labeled.svg",
    "imageCaption": "Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage — โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Afferent Lymphatic Vessels",
        "thaiName": "ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)",
        "description": "ตำแหน่ง [A] คือ Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)"
      },
      {
        "pin": "B",
        "term": "Germinal Center in Cortex",
        "thaiName": "ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex",
        "description": "ตำแหน่ง [B] คือ Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex"
      },
      {
        "pin": "C",
        "term": "Efferent Lymphatic Vessel at Hilum",
        "thaiName": "ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)",
        "description": "ตำแหน่ง [C] คือ Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)"
      },
      {
        "pin": "D",
        "term": "Splenic White Pulp (Lymphocytes)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)",
        "description": "ตำแหน่ง [D] คือ Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)"
      },
      {
        "pin": "E",
        "term": "Splenic Red Pulp (Cords of Billroth)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)",
        "description": "ตำแหน่ง [E] คือ Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)"
      },
      {
        "pin": "F",
        "term": "Cisterna Chyli & Thoracic Duct",
        "thaiName": "กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct",
        "description": "ตำแหน่ง [F] คือ Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct"
      }
    ]
  },
  {
    "id": "CARDIO-078",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [F]] ท่อน้ำเหลืองขนาดใหญ่ที่สุดในร่างกายคือ Thoracic Duct มีจุดกำเนิดทางกายวิภาคเริ่มต้นมาจากถุงพักน้ำเหลืองรูปกระเปาะบริเวณช่องท้องส่วนบนชื่อว่าอะไร และอยู่ที่ระดับกระดูกสันหลังใด?",
    "options": {
      "A": "Chyle pouch ที่ระดับ T4",
      "B": "Cisterna Chyli ซึ่งตั้งอยู่ด้านหน้าของกระดูกสันหลังระดับ L1 - L2",
      "C": "Thoracic sinus ที่ระดับ T12",
      "D": "Spleen hilum ที่ระดับ L4"
    },
    "correctOption": "B",
    "explanation": "Thoracic duct เริ่มต้นจากกระเปาะพักน้ำเหลืองขนาดใหญ่ชื่อ Cisterna chyli ซึ่งตั้งอยู่ด้านหน้าของกระดูกสันหลังส่วนเอว L1-L2 ทำหน้าที่รวบรวมน้ำเหลืองจากลำตัวส่วนล่าง ขาทั้งสองข้าง และอวัยวะในช่องท้อง ก่อนจะทอดตัวขึ้นสู่ช่องอกผ่าน Aortic hiatus ของกะบังลม\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [F] (Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 70,
    "tags": [
      "cisterna-chyli",
      "thoracic-duct",
      "l1-l2",
      "has-diagram",
      "diagram-lymphatic_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/lymphatic_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/lymphatic_system_labeled.svg",
    "imageCaption": "Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage — โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Afferent Lymphatic Vessels",
        "thaiName": "ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)",
        "description": "ตำแหน่ง [A] คือ Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)"
      },
      {
        "pin": "B",
        "term": "Germinal Center in Cortex",
        "thaiName": "ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex",
        "description": "ตำแหน่ง [B] คือ Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex"
      },
      {
        "pin": "C",
        "term": "Efferent Lymphatic Vessel at Hilum",
        "thaiName": "ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)",
        "description": "ตำแหน่ง [C] คือ Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)"
      },
      {
        "pin": "D",
        "term": "Splenic White Pulp (Lymphocytes)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)",
        "description": "ตำแหน่ง [D] คือ Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)"
      },
      {
        "pin": "E",
        "term": "Splenic Red Pulp (Cords of Billroth)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)",
        "description": "ตำแหน่ง [E] คือ Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)"
      },
      {
        "pin": "F",
        "term": "Cisterna Chyli & Thoracic Duct",
        "thaiName": "กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct",
        "description": "ตำแหน่ง [F] คือ Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct"
      }
    ]
  },
  {
    "id": "CARDIO-079",
    "questionText": "ท่อน้ำเหลือง Thoracic Duct ทำหน้าที่รวบรวมน้ำเหลืองจากบริเวณใดของร่างกาย และนำน้ำเหลืองกลับเข้าสู่ระบบไหลเวียนโลหิตดำที่ตำแหน่งใด?",
    "options": {
      "A": "รวบรวมน้ำเหลืองจากศีรษะทั้งหมดเทเข้า Superior vena cava โดยตรง",
      "B": "รวบรวมน้ำเหลืองจากแขนขวาและศีรษะขวา เทเข้า Right Subclavian vein",
      "C": "รวบรวมน้ำเหลืองจากร่างกายประมาณ 3 ใน 4 ส่วน (ขาทั้งสองข้าง, ช่องท้อง, ทรวงอกซ้าย, แขนซ้าย, ศีรษะและคอด้านซ้าย) เทเข้าสู่รอยต่อระหว่าง Left Internal Jugular Vein และ Left Subclavian Vein",
      "D": "รวบรวมน้ำเหลืองเฉพาะจากช่องท้องเทเข้าสู่ Hepatic portal vein"
    },
    "correctOption": "C",
    "explanation": "Thoracic duct รวบรวมน้ำเหลืองจาก 75% ของร่างกาย (ครึ่งล่างทั้งหมด + ครึ่งบนซีกซ้าย) แล้วนำไปเทเข้าสู่กระแสเลือดดำที่ Junction ระหว่าง Left Internal Jugular vein และ Left Subclavian vein (Left venous angle)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 70,
    "tags": [
      "thoracic-duct",
      "left-venous-angle",
      "lymphatic-drainage"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-080",
    "questionText": "ท่อน้ำเหลือง Right Lymphatic Duct ทำหน้าที่รวบรวมน้ำเหลืองจากบริเวณใดของร่างกาย และนำเข้าสู่ระบบหลอดเลือดดำที่ตำแหน่งใด?",
    "options": {
      "A": "รวบรวมน้ำเหลืองจากทั่วร่างกายยกเว้นศีรษะ",
      "B": "รวบรวมน้ำเหลืองจากขาทั้งสองข้างเทเข้าสู่ Inferior vena cava",
      "C": "รวบรวมน้ำเหลืองจากลำไส้เล็กและตับเทเข้าสู่ Right atrium",
      "D": "รวบรวมน้ำเหลืองจากร่างกายส่วนบนซีกขวา (แขนขวา, ทรวงอกซีกขวา, ศีรษะและคอซีกขวา) เทเข้าสู่รอยต่อระหว่าง Right Internal Jugular Vein และ Right Subclavian Vein"
    },
    "correctOption": "D",
    "explanation": "Right Lymphatic Duct มีความยาวเพียงประมาณ 1-2 ซม. รับน้ำเหลืองจากร่างกายเพียง 25% (ศีรษะและคอด้านขวา, แขนขวา, ทรวงอกด้านขวา และปอดขวา) แล้วเทเข้าสู่ Right venous angle (รอยต่อระหว่าง Right internal jugular vein และ Right subclavian vein)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 70,
    "tags": [
      "right-lymphatic-duct",
      "right-venous-angle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-081",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [A]] ผู้ป่วยหญิงได้รับการผ่าตัดเต้านมข้างขวาพร้อมเลาะต่อมน้ำเหลืองบริเวณรักแร้ออกทั้งหมด (Axillary lymph node dissection) ต่อมาเกิดภาวะแขนขวาบวมโตเรื้อรัง (Lymphedema) พยาธิกำเนิดของภาวะนี้เกิดจากกลไกทางกายวิภาคใด?",
    "options": {
      "A": "การอุดกั้นหรือถูกทำลายของท่อและต่อมน้ำเหลือง ทำให้ของเหลวและโปรตีนในช่องว่างระหว่างเซลล์ไม่สามารถระบายกลับเข้าสู่ระบบไหลเวียนได้ เกิดการสะสมของของเหลวที่มีโปรตีนสูงในเนื้อเยื่อ",
      "B": "การฉีกขาดของหลอดเลือดแดง Brachial artery",
      "C": "การทำงานผิดปกติของลิ้นหัวใจ Tricuspid",
      "D": "การติดเชื้อไวรัสในไขกระดูก"
    },
    "correctOption": "A",
    "explanation": "Lymphedema เกิดจากการขัดขวางทางเดินน้ำเหลือง (Lymphatic obstruction) จากการผ่าตัดหรือฉายรังสี ทำให้ Lymphatic drainage จากแขนหยุดชะงัก โปรตีนและของเหลวคั่งค้างใน Interstitial space ดึงน้ำไว้ตามแรงดึงออสโมติก เกิดอาการบวมตึงเรื้อรังของรยางค์ข้างนั้น\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [A] (Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 71,
    "tags": [
      "lymphedema",
      "axillary-dissection",
      "lymphatic-obstruction",
      "has-diagram",
      "diagram-lymphatic_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/lymphatic_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/lymphatic_system_labeled.svg",
    "imageCaption": "Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage — โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Afferent Lymphatic Vessels",
        "thaiName": "ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)",
        "description": "ตำแหน่ง [A] คือ Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)"
      },
      {
        "pin": "B",
        "term": "Germinal Center in Cortex",
        "thaiName": "ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex",
        "description": "ตำแหน่ง [B] คือ Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex"
      },
      {
        "pin": "C",
        "term": "Efferent Lymphatic Vessel at Hilum",
        "thaiName": "ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)",
        "description": "ตำแหน่ง [C] คือ Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)"
      },
      {
        "pin": "D",
        "term": "Splenic White Pulp (Lymphocytes)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)",
        "description": "ตำแหน่ง [D] คือ Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)"
      },
      {
        "pin": "E",
        "term": "Splenic Red Pulp (Cords of Billroth)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)",
        "description": "ตำแหน่ง [E] คือ Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)"
      },
      {
        "pin": "F",
        "term": "Cisterna Chyli & Thoracic Duct",
        "thaiName": "กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct",
        "description": "ตำแหน่ง [F] คือ Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct"
      }
    ]
  },
  {
    "id": "CARDIO-082",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [B]] โครงสร้างทางกายวิภาคของต่อมน้ำเหลือง (Lymph node) มีหลอดน้ำเหลืองนำน้ำเหลืองเข้าและออกจากต่อมในลักษณะใด?",
    "options": {
      "A": "มี Efferent vessels หลายท่อนำเข้าทาง Hilum และ Afferent ท่อเดียวนำออก",
      "B": "มี Afferent lymphatic vessels หลายท่อนำน้ำเหลืองเข้าทางด้านนูน (Convex surface) และมี Efferent lymphatic vessel เพียง 1-2 ท่อนำน้ำเหลืองออกทางรอยบุ๋ม (Hilum)",
      "C": "มีเฉพาะหลอดเลือดแดงนำน้ำเหลืองเข้า และหลอดเลือดดำนำน้ำเหลืองออก",
      "D": "ไม่มีท่อน้ำเหลืองเข้าหรือออก น้ำเหลืองซึมผ่านแคปซูลโดยตรง"
    },
    "correctOption": "B",
    "explanation": "ต่อมน้ำเหลืองมีท่อน้ำเหลืองเข้า (Afferent lymphatic vessels) จำนวนมากเจาะผ่าน Capsule ด้านนูน แต่น้ำเหลืองที่ผ่านการกรองแล้วจะออกจากต่อมผ่านท่อน้ำเหลืองออก (Efferent lymphatic vessel) เพียง 1 หรือ 2 ท่อทางด้านเว้าหรือรอยบุ๋ม (Hilum) ซึ่งการมีท่อเข้าน้อยกว่าท่อออกช่วยชะลอการไหลให้น้ำเหลืองสัมผัสกับ Macrophages และ Lymphocytes ได้นานขึ้น\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [B] (Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 72,
    "tags": [
      "lymph-node-anatomy",
      "afferent-vs-efferent",
      "hilum",
      "has-diagram",
      "diagram-lymphatic_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/lymphatic_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/lymphatic_system_labeled.svg",
    "imageCaption": "Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage — โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Afferent Lymphatic Vessels",
        "thaiName": "ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)",
        "description": "ตำแหน่ง [A] คือ Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)"
      },
      {
        "pin": "B",
        "term": "Germinal Center in Cortex",
        "thaiName": "ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex",
        "description": "ตำแหน่ง [B] คือ Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex"
      },
      {
        "pin": "C",
        "term": "Efferent Lymphatic Vessel at Hilum",
        "thaiName": "ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)",
        "description": "ตำแหน่ง [C] คือ Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)"
      },
      {
        "pin": "D",
        "term": "Splenic White Pulp (Lymphocytes)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)",
        "description": "ตำแหน่ง [D] คือ Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)"
      },
      {
        "pin": "E",
        "term": "Splenic Red Pulp (Cords of Billroth)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)",
        "description": "ตำแหน่ง [E] คือ Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)"
      },
      {
        "pin": "F",
        "term": "Cisterna Chyli & Thoracic Duct",
        "thaiName": "กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct",
        "description": "ตำแหน่ง [F] คือ Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct"
      }
    ]
  },
  {
    "id": "CARDIO-083",
    "questionText": "บริเวณชั้นนอกของต่อมน้ำเหลือง (Cortex) มีโครงสร้างทรงกลมที่เรียกว่า Lymphoid follicles (Lymphatic nodules) บริเวณตรงกลางของ Follicle ที่ย้อมติดสีจางเรียกว่า Germinal center เป็นแหล่งที่มีการแบ่งตัวและพัฒนาของเซลล์เม็ดเลือดชนิดใด?",
    "options": {
      "A": "เม็ดเลือดแดง Erythroblasts ที่กำลังสร้างฮีโมโกลบิน",
      "B": "T-lymphocytes ที่กำลังเจริญเต็มวัย",
      "C": "B-lymphocytes ที่กำลังแบ่งตัวและพัฒนาไปเป็น Plasma cells และ Memory B cells หลังจากสัมผัสแอนติเจน",
      "D": "เกล็ดเลือด Megakaryocytes"
    },
    "correctOption": "C",
    "explanation": "Germinal centers ในชั้น Cortex ของต่อมน้ำเหลือง เป็นบริเวณที่มีการแบ่งตัวอย่างรวดเร็ว (Proliferation) ของ B-lymphocytes เพื่อเปลี่ยนสภาพเป็น Plasma cells ทำหน้าที่สร้างแอนติบอดี และสร้าง Memory B cells เพื่อจดจำเชื้อโรค ส่วน T-lymphocytes จะพบหนาแน่นในบริเวณ Paracortex (Deep cortex)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 73,
    "tags": [
      "germinal-center",
      "b-lymphocytes",
      "lymph-node-histology"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-084",
    "questionText": "ม้าม (Spleen) เป็นอวัยวะน้ำเหลืองขนาดใหญ่ที่สุดในร่างกาย ตั้งอยู่ในช่องท้องส่วนบนซ้าย ใต้กะบังลม เนื้อเยื่อของม้ามแบ่งออกเป็น White pulp และ Red pulp บริเวณ White pulp มีลักษณะทางเนื้อเยื่อและหน้าที่อย่างไร?",
    "options": {
      "A": "ประกอบด้วยไขมันสีน้ำตาลทำหน้าที่สร้างความร้อน",
      "B": "ประกอบด้วยหลอดเลือดฝอยไซนูซอยด์บรรจุเม็ดเลือดแดงจำนวนมากเพื่อกักเก็บเลือดสำรอง",
      "C": "ทำหน้าที่สร้างน้ำดีและเอนไซม์ย่อยโปรตีน",
      "D": "ประกอบด้วยกลุ่มเซลล์เม็ดเลือดขาว Lymphocytes ล้อมรอบหลอดเลือดแดง Central arterioles (PALS) ทำหน้าที่ในระบบภูมิคุ้มกันในการดักจับและตอบสนองต่อแอนติเจนในกระแสเลือด"
    },
    "correctOption": "D",
    "explanation": "White pulp ของม้ามประกอบด้วยเนื้อเยื่อน้ำเหลืองที่มี T-cells ล้อมรอบ Central arteriole เรียกว่า Periarteriolar Lymphoid Sheath (PALS) และมี Lymphoid follicles ที่อุดมด้วย B-cells ทำหน้าที่ตรวจจับเชื้อโรคและแอนติเจนที่ไหลเวียนมาในกระแสเลือดโดยตรง",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 74,
    "tags": [
      "spleen",
      "white-pulp",
      "pals",
      "immune-function"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-085",
    "questionText": "เนื้อเยื่อส่วน Red pulp ของม้ามประกอบด้วย Splenic cords (Cords of Billroth) และ Splenic sinusoids ทำหน้าที่หลักที่สำคัญที่สุดทางสรีรวิทยาและกายวิภาคคือข้อใด?",
    "options": {
      "A": "การตรวจกรองและทำลายเม็ดเลือดแดงที่แก่ชรา หมดอายุขัย (มากกว่า 120 วัน) หรือมีความผิดปกติทางสัณฐานวิทยา โดยอาศัยเซลล์ Macrophages",
      "B": "การคัดเลือกและฝึกฝน T-lymphocytes ให้รู้จักแอนติเจนของตนเอง",
      "C": "การสร้างน้ำย่อยอะไมเลส",
      "D": "การกรองน้ำเหลืองที่มาจากระบบทางเดินอาหาร"
    },
    "correctOption": "A",
    "explanation": "Red pulp ของม้ามประกอบด้วยร่างแหเซลล์และเส้นใยเรติคูลาร์ (Cords of Billroth) เต็มไปด้วย Macrophages ทำหน้าที่เสมือนตะแกรงตรวจกรองเม็ดเลือดแดง เม็ดเลือดแดงที่แก่ (อายุ >120 วัน) ขาดความยืดหยุ่น หรือผิดรูป จะลอดผ่านช่อง Sinusoids ไม่ได้และถูก Macrophages จับกินและรีไซเคิลธาตุเหล็ก (Phagocytosis of aged RBCs)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 75,
    "tags": [
      "red-pulp",
      "cords-of-billroth",
      "rbc-destruction",
      "macrophages"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-086",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [D]] ผู้ป่วยประสบอุบัติเหตุม้ามแตก (Splenic rupture) และได้รับการผ่าตัดตัดม้ามออก (Splenectomy) หลังการผ่าตัดผู้ป่วยจะมีความเสี่ยงสูงขึ้นต่อการติดเชื้อแบคทีเรียกลุ่มใดมากที่สุดตลอดชีวิต?",
    "options": {
      "A": "Anaerobic bacteria ในลำไส้ใหญ่",
      "B": "Encapsulated bacteria (แบคทีเรียที่มีแคปซูลหุ้ม เช่น Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae)",
      "C": "แบคทีเรียในช่องปากที่ทำให้เกิดฟันผุ",
      "D": "พยาธิใบไม้ในตับ"
    },
    "correctOption": "B",
    "explanation": "ม้ามเป็นแหล่งสร้าง Opsonin, Properdin และแอนติบอดี IgM ที่สำคัญในการกำจัดแบคทีเรียที่มีแคปซูลหุ้ม (Encapsulated organisms) ผู้ที่ถูกตัดม้ามจึงสูญเสียกลไก Phagocytosis ใน Red pulp และเสี่ยงต่อภาวะ Overwhelming Post-Splenectomy Infection (OPSI) จากเชื้อ S. pneumoniae อย่างรุนแรงจนต้องฉีดวัคซีนป้องกัน\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [D] (Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 75,
    "tags": [
      "splenectomy",
      "encapsulated-bacteria",
      "opsi",
      "pneumococcus",
      "has-diagram",
      "diagram-lymphatic_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/lymphatic_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/lymphatic_system_labeled.svg",
    "imageCaption": "Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage — โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Afferent Lymphatic Vessels",
        "thaiName": "ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)",
        "description": "ตำแหน่ง [A] คือ Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)"
      },
      {
        "pin": "B",
        "term": "Germinal Center in Cortex",
        "thaiName": "ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex",
        "description": "ตำแหน่ง [B] คือ Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex"
      },
      {
        "pin": "C",
        "term": "Efferent Lymphatic Vessel at Hilum",
        "thaiName": "ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)",
        "description": "ตำแหน่ง [C] คือ Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)"
      },
      {
        "pin": "D",
        "term": "Splenic White Pulp (Lymphocytes)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)",
        "description": "ตำแหน่ง [D] คือ Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)"
      },
      {
        "pin": "E",
        "term": "Splenic Red Pulp (Cords of Billroth)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)",
        "description": "ตำแหน่ง [E] คือ Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)"
      },
      {
        "pin": "F",
        "term": "Cisterna Chyli & Thoracic Duct",
        "thaiName": "กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct",
        "description": "ตำแหน่ง [F] คือ Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct"
      }
    ]
  },
  {
    "id": "CARDIO-087",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [E]] ต่อมไทมัส (Thymus gland) ตั้งอยู่ในช่องอกบริเวณ Superior และ Anterior mediastinum มีการเปลี่ยนแปลงตามช่วงอายุของมนุษย์อย่างไร?",
    "options": {
      "A": "ไม่มีการเปลี่ยนแปลงขนาดตลอดช่วงอายุขัย",
      "B": "มีขนาดเล็กมากในวัยเด็กและจะเจริญเติบโตขยายใหญ่สุดในวัยชรา",
      "C": "มีขนาดใหญ่และทำหน้าที่สูงสุดในวัยทารกและวัยเด็ก จากนั้นจะเริ่มฝ่อตัวลงเรื่อยๆ หลังเข้าสู่วัยเจริญพันธุ์ (Thymic involution) โดยเนื้อเยื่อน้ำเหลืองจะถูกแทนที่ด้วยเนื้อเยื่อไขมันและเนื้อเยื่อเกี่ยวพันในวัยผู้ใหญ่",
      "D": "จะสลายตัวหมดสิ้นทันทีหลังคลอด 24 ชั่วโมง"
    },
    "correctOption": "C",
    "explanation": "ต่อมไทมัสมีขนาดใหญ่และกิจกรรมการสร้าง T-cells สูงสุดในช่วงทารกจนถึงวัยเด็ก เมื่อเข้าสู่วัยแรกรุ่น (Puberty) อิทธิพลของฮอร์โมนเพศจะทำให้ต่อมไทมัสค่อยๆ ฝ่อเล็กลง (Involution) เนื้อเยื่อน้ำเหลืองถูกแทนที่ด้วย Adipose tissue ในผู้สูงอายุ แต่ยังคงมีเซลล์ทำหน้าที่เหลืออยู่บางส่วน\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [E] (Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 76,
    "tags": [
      "thymus",
      "thymic-involution",
      "age-changes",
      "has-diagram",
      "diagram-lymphatic_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/lymphatic_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/lymphatic_system_labeled.svg",
    "imageCaption": "Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage — โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Afferent Lymphatic Vessels",
        "thaiName": "ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)",
        "description": "ตำแหน่ง [A] คือ Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)"
      },
      {
        "pin": "B",
        "term": "Germinal Center in Cortex",
        "thaiName": "ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex",
        "description": "ตำแหน่ง [B] คือ Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex"
      },
      {
        "pin": "C",
        "term": "Efferent Lymphatic Vessel at Hilum",
        "thaiName": "ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)",
        "description": "ตำแหน่ง [C] คือ Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)"
      },
      {
        "pin": "D",
        "term": "Splenic White Pulp (Lymphocytes)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)",
        "description": "ตำแหน่ง [D] คือ Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)"
      },
      {
        "pin": "E",
        "term": "Splenic Red Pulp (Cords of Billroth)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)",
        "description": "ตำแหน่ง [E] คือ Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)"
      },
      {
        "pin": "F",
        "term": "Cisterna Chyli & Thoracic Duct",
        "thaiName": "กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct",
        "description": "ตำแหน่ง [F] คือ Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct"
      }
    ]
  },
  {
    "id": "CARDIO-088",
    "questionText": "[🖼️ ข้อสอบวิเคราะห์ภาพประกอบกายวิภาค — พิจารณาแผนภาพและจุดชี้ตำแหน่ง [A]–[F] โดยเฉพาะบริเวณตำแหน่ง [C]] โครงสร้างจุลกายวิภาคที่มีลักษณะเป็นชั้นเซลล์เยื่อบุผิวเรียงตัวซ้อนกันเป็นวงกลมคล้ายหัวหอม (Concentric whorls of keratinized epithelial cells) ซึ่งพบเฉพาะในชั้น Medulla ของต่อมไทมัส คือข้อใด?",
    "options": {
      "A": "Germinal centers",
      "B": "Malpighian corpuscles",
      "C": "Peyer's patches",
      "D": "Thymic corpuscles (Hassall's corpuscles)"
    },
    "correctOption": "D",
    "explanation": "Thymic (Hassall's) corpuscles เป็นโครงสร้างเอกลักษณ์ที่พบเฉพาะในชั้น Medulla ของต่อมไทมัส เกิดจาก Epithelioreticular cells ชนิด Type VI เรียงตัวซ้อนกันเป็นวงซ้อนคล้ายหัวหอม เชื่อว่าทำหน้าที่หลั่งไซโตไคน์ เช่น TSLP ในการคัดเลือก Regulatory T cells\n\n📌 สรุปจุดชี้ตำแหน่งในภาพประกอบ (Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage): จุดที่เกี่ยวข้องโดยตรงกับข้อนี้คือตำแหน่ง [C] (Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)) สามารถกดสลับดู \"ภาพเฉลยครบทุกจุด (Master Labeled Diagram)\" ด้านบนเพื่อทบทวนตำแหน่ง [A] ถึง [F] ทั้งหมดได้ทันที",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 76,
    "tags": [
      "hassalls-corpuscles",
      "thymus-medulla",
      "epithelioreticular-cells",
      "has-diagram",
      "diagram-lymphatic_system"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified",
    "imageUrl": "/images/anatomy/lymphatic_system_exam.svg",
    "labeledImageUrl": "/images/anatomy/lymphatic_system_labeled.svg",
    "imageCaption": "Lymph Node Structure, Spleen Pulp & Thoracic Duct Drainage — โครงสร้างต่อมน้ำเหลือง ม้าม (White/Red Pulp) และท่อน้ำเหลืองใหญ่",
    "imageLabels": [
      {
        "pin": "A",
        "term": "Afferent Lymphatic Vessels",
        "thaiName": "ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)",
        "description": "ตำแหน่ง [A] คือ Afferent Lymphatic Vessels — ท่อน้ำเหลืองนำเข้าทางด้านนูน (มีหลายท่อ)"
      },
      {
        "pin": "B",
        "term": "Germinal Center in Cortex",
        "thaiName": "ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex",
        "description": "ตำแหน่ง [B] คือ Germinal Center in Cortex — ศูนย์กลางแบ่งตัวของ B-lymphocytes ในชั้น Cortex"
      },
      {
        "pin": "C",
        "term": "Efferent Lymphatic Vessel at Hilum",
        "thaiName": "ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)",
        "description": "ตำแหน่ง [C] คือ Efferent Lymphatic Vessel at Hilum — ท่อน้ำเหลืองนำออกบริเวณขั้วรอยบุ๋ม (Hilum)"
      },
      {
        "pin": "D",
        "term": "Splenic White Pulp (Lymphocytes)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)",
        "description": "ตำแหน่ง [D] คือ Splenic White Pulp (Lymphocytes) — เนื้อเยื่อม้ามส่วนสีขาว (T & B cells รอบหลอดเลือดแดง)"
      },
      {
        "pin": "E",
        "term": "Splenic Red Pulp (Cords of Billroth)",
        "thaiName": "เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)",
        "description": "ตำแหน่ง [E] คือ Splenic Red Pulp (Cords of Billroth) — เนื้อเยื่อม้ามส่วนสีแดง (ทำลาย RBC ที่หมดอายุ >120 วัน)"
      },
      {
        "pin": "F",
        "term": "Cisterna Chyli & Thoracic Duct",
        "thaiName": "กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct",
        "description": "ตำแหน่ง [F] คือ Cisterna Chyli & Thoracic Duct — กระเปาะพักน้ำเหลืองระดับ L1-L2 ต้นกำเนิด Thoracic duct"
      }
    ]
  },
  {
    "id": "CARDIO-089",
    "questionText": "ต่อมทอนซิลคู่ใดที่มีขนาดใหญ่ที่สุด ตั้งอยู่บริเวณโพรงปากด้านหลังระหว่าง Palatoglossal arch และ Palatopharyngeal arch ซึ่งมักเกิดการอักเสบเป็นหนองบ่อยที่สุด (Acute tonsillitis)?",
    "options": {
      "A": "Palatine tonsils (ต่อมทอนซิลพาลาไทน์)",
      "B": "Pharyngeal tonsil (Adenoid)",
      "C": "Lingual tonsils",
      "D": "Tubal tonsils"
    },
    "correctOption": "A",
    "explanation": "Palatine tonsils ตั้งอยู่ใน Tonsillar fossa บริเวณ Oropharynx ระหว่าง Palatoglossal arch ด้านหน้าและ Palatopharyngeal arch ด้านหลัง เป็นต่อมทอนซิลคู่ที่พบการติดเชื้อและการอักเสบบ่อยที่สุด และเป็นตำแหน่งที่ทำผ่าตัด Tonsillectomy",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 77,
    "tags": [
      "palatine-tonsils",
      "tonsillitis",
      "tonsillar-fossa"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-090",
    "questionText": "ในเด็กที่มีต่อมน้ำเหลืองบริเวณ Nasopharynx โตมากผิดปกติ จนอุดกั้นทางเดินหายใจส่วนบนทำให้ต้องหายใจทางปากและนอนกรน ต่อมน้ำเหลืองที่มีปัญหาดังกล่าวคือต่อมใด?",
    "options": {
      "A": "Palatine tonsils",
      "B": "Pharyngeal tonsil (ซึ่งเมื่อโตผิดปกติจะเรียกว่า Adenoids)",
      "C": "Lingual tonsils",
      "D": "Submandibular lymph node"
    },
    "correctOption": "B",
    "explanation": "Pharyngeal tonsil ตั้งอยู่ที่ผนังด้านหลังบนของ Nasopharynx เมื่อเกิดการอักเสบหรือขยายขนาดโตขึ้นจะเรียกว่า Adenoids ส่งผลให้อุดกั้นโพรงจมูกด้านหลัง เด็กต้องหายใจทางปาก เกิด Adenoid hypertrophy นอนกรน และอาจเกิดภาวะ Obstructive sleep apnea (OSA)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 77,
    "tags": [
      "pharyngeal-tonsil",
      "adenoids",
      "nasopharynx"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-091",
    "questionText": "วงแหวนของเนื้อเยื่อน้ำเหลืองที่เรียงตัวล้อมรอบทางเข้าสู่ระบบทางเดินหายใจและทางเดินอาหารในคอหอย (Pharynx) เพื่อดักจับเชื้อโรคที่เข้าสู่ร่างกายทางปากและจมูก มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Annulus fibrosus",
      "B": "Circle of Willis",
      "C": "Waldeyer's tonsillar ring",
      "D": "Peyer's ring"
    },
    "correctOption": "C",
    "explanation": "Waldeyer's ring ประกอบด้วยเนื้อเยื่อน้ำเหลือง 4 กลุ่มรอบคอหอย ได้แก่: 1. Pharyngeal tonsil (Adenoid) ด้านบน 2. Tubal tonsils สองข้าง 3. Palatine tonsils สองข้าง และ 4. Lingual tonsils ด้านล่างที่โคนลิ้น ทำหน้าที่เป็นด่านหน้าทางภูมิคุ้มกันดักจับเชื้อโรค",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 78,
    "tags": [
      "waldeyers-ring",
      "tonsils-pharynx"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-092",
    "questionText": "กลุ่มก้อนเนื้อเยื่อน้ำเหลืองชนิด Mucosa-Associated Lymphoid Tissue (MALT) ที่รวมตัวกันหนาแน่นเป็นหย่อมๆ ขนาดใหญ่ในชั้น Lamina propria และ Submucosa ของลำไส้เล็กส่วนปลาย (Ileum) มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Hassall's corpuscles",
      "B": "Brunner's glands",
      "C": "Islets of Langerhans",
      "D": "Peyer's patches (Aggregated lymphoid nodules)"
    },
    "correctOption": "D",
    "explanation": "Peyer's patches เป็นกลุ่มของ Lymphoid follicles ที่พบหนาแน่นที่สุดในชั้น Mucosa และ Submucosa ของลำไส้เล็กส่วน Ileum ทำหน้าที่เฝ้าระวังและป้องกันไม่ให้เชื้อแบคทีเรียจากลำไส้ใหญ่รุกล้ำย้อนกลับเข้ามาในระบบทางเดินอาหารส่วนบน",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 78,
    "tags": [
      "peyers-patches",
      "ileum",
      "malt"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-093",
    "questionText": "อวัยวะน้ำเหลืองปฐมภูมิ (Primary lymphoid organs) ซึ่งเป็นสถานที่กำเนิดและพัฒนาจนเจริญเต็มวัยของเซลล์ลิมโฟไซต์ประกอบด้วยอวัยวะใดบ้าง?",
    "options": {
      "A": "Red bone marrow (ไขกระดูกแดง) และต่อม Thymus",
      "B": "ม้าม (Spleen) และต่อมน้ำเหลือง (Lymph nodes)",
      "C": "ต่อมทอนซิลและไส้ติ่ง",
      "D": "ตับและถุงน้ำดี"
    },
    "correctOption": "A",
    "explanation": "Primary lymphoid organs คืออวัยวะที่ Lymphocytes กำเนิดและพัฒนาจนกลายเป็น Immunocompetent cells ได้แก่ Red bone marrow (สำหรับ B cells) และ Thymus (สำหรับ T cells) ส่วนอวัยวะอื่น เช่น Lymph nodes, Spleen, Tonsils จัดเป็น Secondary lymphoid organs ที่เซลล์ไปทำหน้าที่ตอบสนองต่อแอนติเจน",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 67,
    "tags": [
      "primary-lymphoid-organs",
      "bone-marrow",
      "thymus"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-094",
    "questionText": "อวัยวะใดต่อไปนี้ในร่างกายมนุษย์ที่ไม่มีหลอดน้ำเหลืองฝอย (Lymphatic capillaries) อยู่เลยตามหลักกายวิภาค?",
    "options": {
      "A": "ผิวหนังและเนื้อเยื่อใต้ผิวหนัง",
      "B": "ระบบประสาทส่วนกลาง (Central Nervous System: Brain and Spinal cord), กระดูก และกระจกตา (Cornea)",
      "C": "ปอดและกล้ามเนื้อหัวใจ",
      "D": "ลำไส้เล็กและลำไส้ใหญ่"
    },
    "correctOption": "B",
    "explanation": "เนื้อเยื่อที่ไม่มีท่อน้ำเหลือง (Avascular or specialized tissues) ได้แก่: กระจกตา (Cornea), กระดูกอ่อนโปร่งแสง (Hyaline cartilage), ระบบประสาทส่วนกลาง (CNS ซึ่งใช้น้ำไขสันหลัง CSF และ Glymphatic system แทน), ไขกระดูก และเนื้อเยื่อชั้นหนังกำพร้า (Epidermis)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 68,
    "tags": [
      "avascular-tissues",
      "no-lymphatics",
      "cns",
      "cornea"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-095",
    "questionText": "ต่อมน้ำเหลืองบริเวณใดที่ทำหน้าที่รับน้ำเหลืองจากเต้านม (ประมาณ 75%) และเป็นตำแหน่งที่เซลล์มะเร็งเต้านมมักแพร่กระจายไปถึงเป็นด่านแรก (Sentinel lymph nodes)?",
    "options": {
      "A": "Cervical lymph nodes (ต่อมน้ำเหลืองที่คอ)",
      "B": "Inguinal lymph nodes (ต่อมน้ำเหลืองขาหนีบ)",
      "C": "Axillary lymph nodes (ต่อมน้ำเหลืองบริเวณรักแร้)",
      "D": "Mesenteric lymph nodes"
    },
    "correctOption": "C",
    "explanation": "น้ำเหลืองมากกว่า 75% จากเนื้อเต้านมจะระบายไปยัง Axillary lymph nodes (กลุ่ม Pectoral, Central, Lateral, Subscapular และ Apical) ดังนั้นในการวินิจฉัยและรักษามะเร็งเต้านม จึงต้องมีการตรวจประเมินต่อมน้ำเหลืองรักแร้ (Sentinel node biopsy) เพื่อดูการแพร่กระจายของมะเร็ง",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 71,
    "tags": [
      "breast-lymphatic-drainage",
      "axillary-nodes",
      "sentinel-node"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-096",
    "questionText": "ต่อมน้ำเหลืองบริเวณเหนือกระดูกไหปลาร้าซ้ายที่โตและคลำได้ก้อนแข็งไม่เจ็บ (Virchow's node หรือ Troisier's sign) มีความสำคัญทางคลินิกอย่างไร?",
    "options": {
      "A": "บ่งชี้ถึงการแพร่กระจายของมะเร็งสมองส่วนหน้า",
      "B": "บ่งชี้ถึงการติดเชื้อไวรัสหวัดธรรมดาในโพรงจมูก",
      "C": "บ่งชี้ถึงภาวะกระดูกไหปลาร้าหัก",
      "D": "บ่งชี้ถึงการแพร่กระจายของมะเร็งในช่องท้อง (เช่น มะเร็งกระเพาะอาหาร หรือมะเร็งตับอ่อน) ผ่านทาง Thoracic duct"
    },
    "correctOption": "D",
    "explanation": "Virchow's node (Supraclavicular lymph node ด้านซ้าย) อยู่ใกล้จุดบรรจบของ Thoracic duct เข้าสู่ Left subclavian vein เมื่อมีมะเร็งในช่องท้องหรืออุ้งเชิงกราน (โดยเฉพาะ Gastric cancer) เซลล์มะเร็งจะหลุดลอยมาตาม Thoracic duct และมาสะสมโตที่ต่อมน้ำเหลืองนี้ เรียกว่า Troisier's sign",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 71,
    "tags": [
      "virchows-node",
      "gastric-cancer",
      "troisiers-sign",
      "thoracic-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-097",
    "questionText": "การเคลื่อนที่ของน้ำเหลืองภายในหลอดน้ำเหลือง (Lymph flow) ให้ไหลไปข้างหน้าเข้าสู่ระบบหลอดเลือดดำ อาศัยปัจจัยผลักดันทางสรีรวิทยาใดเป็นหลัก?",
    "options": {
      "A": "การบีบตัวของกล้ามเนื้อลายรอบข้าง, การเต้นตุบๆ ของหลอดเลือดแดงข้างเคียง, แรงดันลบในช่องอกขณะหายใจเข้า, การหดตัวของกล้ามเนื้อเรียบในผนังท่อน้ำเหลือง และลิ้นเปิดปิดทิศทางเดียวภายในท่อ",
      "B": "แรงสูบฉีดโดยตรงจากหัวใจห้องล่างซ้าย",
      "C": "แรงดันแรงโน้มถ่วงของโลกเพียงอย่างเดียว",
      "D": "แรงดันของอากาศภายนอกร่างกาย"
    },
    "correctOption": "A",
    "explanation": "เนื่องจากระบบน้ำเหลืองไม่มีปั๊มหัวใจของตนเอง การไหลจึงอาศัย: 1. ลิ้นภายในท่อ (Lymphatic valves) บังคับไหลทางเดียว 2. กล้ามเนื้อลายบีบตัว (Skeletal muscle pump) 3. Pulsation ของหลอดเลือดแดงที่ทอดคู่กัน 4. Respiratory pump ในช่องอก 5. การบีบตัวเป็นจังหวะของกล้ามเนื้อเรียบในผนังท่อน้ำเหลืองใหญ่ (Lymphangion contraction)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 69,
    "tags": [
      "lymph-propulsion",
      "valves",
      "lymphangion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-098",
    "questionText": "โรคเท้าช้าง (Lymphatic Filariasis / Elephantiasis) เกิดจากการติดเชื้อพยาธิตัวกลมชนิด Wuchereria bancrofti เข้าไปอาศัยและทำให้เกิดพยาธิสภาพที่อวัยวะใดของระบบน้ำเหลือง?",
    "options": {
      "A": "พยาธิเข้าไปทำลายเซลล์เม็ดเลือดแดงในม้าม",
      "B": "พยาธิตัวเต็มวัยอาศัยและอุดกั้นหลอดน้ำเหลืองและต่อมน้ำเหลือง (โดยเฉพาะบริเวณขาหนีบ Inguinal nodes) ทำให้เกิดการอักเสบเรื้อรัง พังผืด และน้ำเหลืองคั่งบวมจนขยายขนาดผิดรูป",
      "C": "พยาธิเข้าไปกัดกินเยื่อหุ้มหัวใจ Pericardium",
      "D": "พยาธิเข้าไปอุดกั้นลิ้นหัวใจ Mitral valve"
    },
    "correctOption": "B",
    "explanation": "Wuchereria bancrofti มีรังโรคในระบบน้ำเหลือง ตัวพยาธิที่โตเต็มวัยจะอุดตันในท่อน้ำเหลืองและต่อมน้ำเหลือง (โดยเฉพาะ Inguinal lymph nodes) กระตุ้นปฏิกิริยาอักเสบ ก่อให้เกิด Fibrosis ขัดขวางการระบายน้ำเหลืองจากขากลับสู่ร่างกาย เกิดอาการบวมน้ำเหลืองรุนแรง (Elephantiasis) ผิวหนังหนาตัวและติดเชื้อซ้ำซ้อน",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Hard",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 71,
    "tags": [
      "filariasis",
      "elephantiasis",
      "wuchereria-bancrofti"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-099",
    "questionText": "ในระบบภูมิคุ้มกันของต่อมน้ำเหลือง เซลล์ทำหน้าที่กรองและเก็บกิน (Phagocytosis) สิ่งแปลกปลอม แบคทีเรีย และเซลล์มะเร็งที่ลอยมากับน้ำเหลืองก่อนที่น้ำเหลืองจะไหลออกจากต่อมคือเซลล์ชนิดใด?",
    "options": {
      "A": "Platelets (เกล็ดเลือด)",
      "B": "Erythrocytes (เม็ดเลือดแดง)",
      "C": "Macrophages (แมคโครฟาจ) ซึ่งเรียงตัวเกาะอยู่ตามผนังของ Lymphatic sinuses",
      "D": "Adipocytes (เซลล์ไขมัน)"
    },
    "correctOption": "C",
    "explanation": "ภายใน Sinuses ของต่อมน้ำเหลือง (Subcapsular, Trabecular, และ Medullary sinuses) มีร่างแหเส้นใย Reticular fibers ที่มี Macrophages เกาะอยู่หนาแน่น เมื่อน้ำเหลืองไหลผ่านอย่างช้าๆ Macrophages จะทำหน้าที่ Phagocytosis ดักจับเศษซากเซลล์ จุลชีพ และอนุภาคแปลกปลอมได้มากกว่า 99% ก่อนน้ำเหลืองจะเข้าสู่หลอดน้ำเหลืองนำออก",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 73,
    "tags": [
      "lymph-node-filtration",
      "macrophages",
      "sinuses"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "CARDIO-100",
    "questionText": "ข้อใดสรุปหน้าที่หลัก 3 ประการของระบบน้ำเหลือง (Lymphatic System) ต่อร่างกายมนุษย์ได้อย่างถูกต้องและครบถ้วนสมบูรณ์ที่สุด?",
    "options": {
      "A": "1. สูบฉีดเลือดด้วยแรงดันสูง 2. แลกเปลี่ยนก๊าซในถุงลม 3. ย่อยสลายโปรตีน",
      "B": "1. สร้างเม็ดเลือดแดง 2. ขนส่งก๊าซคาร์บอนมอนอกไซด์ 3. ผลิตฮอร์โมนอินซูลิน",
      "C": "1. ควบคุมอุณหภูมิร่างกาย 2. สร้างสารหล่อลื่นข้อต่อ 3. ผลิตกรดยูริก",
      "D": "1. รักษาสมดุลของเหลวในเนื้อเยื่อโดยนำ Fluid และโปรตีนส่วนเกินกลับสู่ระบบไหลเวียนโลหิต 2. ดูดซึมไขมันจากทางเดินอาหารผ่าน Lacteals 3. ทำหน้าที่ในระบบภูมิคุ้มกันดักจับเชื้อโรคและกระตุ้นการแบ่งตัวของ Lymphocytes"
    },
    "correctOption": "D",
    "explanation": "หน้าที่หลัก 3 ประการของระบบน้ำเหลือง: 1. Fluid balance (ดึงของเหลวส่วนเกินประมาณ 2-3 ลิตร/วัน และโปรตีนที่รั่วซึมจาก Capillaries กลับสู่กระแสเลือดดำ) 2. Lipid absorption (ดูดซึมไขมันและวิตามินละลายในไขมัน A, D, E, K จากลำไส้เล็กผ่าน Lacteals) 3. Defense/Immunity (กรองเชื้อโรคและเป็นแหล่งสร้าง/เพิ่มจำนวน B และ T lymphocytes)",
    "system": "Cardiovascular and Lymphatic Systems",
    "topic": "Lymphatic System & Organs",
    "difficulty": "Medium",
    "sourceFile": "BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf",
    "sourcePage": 66,
    "tags": [
      "lymphatic-functions",
      "fluid-balance",
      "lipid-absorption",
      "immunity"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  }
];
