/**
 * scripts/cardio_advanced_part1.cjs
 * Questions 1 - 50: Blood, Pericardium, Heart Wall, Chambers, Valves, Conduction System
 * Increased complexity by 20-30% with clinical vignettes and high-yield distractors
 */

const systemName = 'Cardiovascular and Lymphatic Systems';
const sourceFile = 'BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf';

const part1 = [
  // 1-15: Blood Components, Hematology & Hemostasis
  {
    id: 'CARDIO-001',
    questionText: 'ผู้ป่วยชายไทยน้ำหนัก 70 กิโลกรัม ประสบอุบัติเหตุเสียเลือดไปประมาณ 1,500 มิลลิลิตร ตามหลักกายวิภาคและสรีรวิทยา ปริมาตรเลือดปกติของผู้ป่วยรายนี้มีประมาณเท่าใด และคิดเป็นสัดส่วนเท่าใดของน้ำหนักตัว?',
    options: {
      A: 'ประมาณ 5.0 - 5.6 ลิตร คิดเป็น 7 - 8% ของน้ำหนักตัว',
      B: 'ประมาณ 3.0 - 3.5 ลิตร คิดเป็น 4 - 5% ของน้ำหนักตัว (คิดเฉพาะปริมาตรพลาสมา)',
      C: 'ประมาณ 10 - 12 ลิตร คิดเป็น 15% ของน้ำหนักตัว (คิดรวมของเหลวนอกเซลล์)',
      D: 'ประมาณ 2.0 - 2.5 ลิตร คิดเป็น 3% ของน้ำหนักตัว'
    },
    correctOption: 'A',
    explanation: 'ในผู้ใหญ่ปกติ ปริมาตรเลือดคิดเป็นประมาณ 7-8% ของน้ำหนักร่างกาย (สำหรับน้ำหนัก 70 กก. จะมีเลือดประมาณ 4.9 - 5.6 ลิตร หรือเฉลี่ย 5 ลิตร) โดยแบ่งเป็น Plasma ประมาณ 55% และ Formed elements (เม็ดเลือดและเกล็ดเลือด) ประมาณ 45%',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 6,
    tags: ['blood-volume', 'clinical-blood-loss', 'hematology'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-002',
    questionText: 'เซลล์เม็ดเลือดแดง (Erythrocyte) ที่โตเต็มที่ในกระแสเลือดมีรูปร่างแบบ Biconcave disc และไม่มีนิวเคลียส การปรับเปลี่ยนโครงสร้างทางกายวิภาคนี้มีประโยชน์เชิงกลไกและสรีรวิทยาอย่างไร?',
    options: {
      A: 'เพิ่มอัตราส่วนพื้นที่ผิวต่อปริมาตร (Surface-to-volume ratio) เพื่อเพิ่มประสิทธิภาพการแพร่ของก๊าซ O2/CO2 และเพิ่มความยืดหยุ่นในการลอดผ่านหลอดเลือดฝอย',
      B: 'เพื่อลดการใช้ออกซิเจนโดยการสร้างพลังงานผ่านกระบวนการ Oxidative phosphorylation ในไมโทคอนเดรีย',
      C: 'เพื่อเพิ่มพื้นที่ในการบรรจุนิวเคลียสและออร์แกเนลล์สำหรับการแบ่งเซลล์แบบไมโทซิสในกระแสเลือด',
      D: 'เพื่อป้องกันไม่ให้ฮีโมโกลบินจับกับก๊าซคาร์บอนมอนอกไซด์ในเนื้อเยื่อส่วนปลาย'
    },
    correctOption: 'A',
    explanation: 'รูปร่าง Biconcave disc (จานเว้าสองด้าน ขนาด 7.5 ไมครอน) ร่วมกับการสลายตัวของนิวเคลียส ไมโทคอนเดรีย และไรโบโซม ทำให้มีพื้นที่ผิวต่อปริมาตรสูง ช่วยให้แลกเปลี่ยนก๊าซได้รวดเร็ว และทำให้เซลล์บิดงอตัว (Deformability) ผ่าน Capillary lumen ขนาด 4-5 ไมครอนได้โดยไม่แตก',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 7,
    tags: ['erythrocyte', 'biconcave', 'microcirculation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-003',
    questionText: 'ผู้ป่วยเด็กมีไข้สูง ปวดท้องส่วนล่างขวา ผลตรวจเลือดพบเม็ดเลือดขาวรวม 18,000 cells/mm3 โดยมี Neutrophils 85% ร่วมกับพบ Band form สูงขึ้น (Shift to the left) ลักษณะทางจุลกายวิภาคของ Neutrophil ที่โตเต็มที่คือข้อใด?',
    options: {
      A: 'นิวเคลียสแบ่งเป็น 3-5 พู (Lobes) เชื่อมด้วยสายโครมาตินบางๆ และในไซโทพลาสซึมมีแกรนูลขนาดเล็กติดสีชมพูอมม่วงจางๆ',
      B: 'นิวเคลียสกลมใหญ่เกือบเต็มเซลล์ มีขอบไซโทพลาสซึมติดสีฟ้าจางๆ เป็นวงแหวนบางๆ',
      C: 'นิวเคลียสเป็นรูป 2 พู (Bilobed) และมีแกรนูลขนาดใหญ่ติดสีส้มแดงสดของสี Eosin',
      D: 'นิวเคลียสเป็นรูปไต (Kidney-shaped) และไม่มีแกรนูลจำเพาะในไซโทพลาสซึม'
    },
    correctOption: 'A',
    explanation: 'Mature Neutrophil (Polymorphonuclear leukocyte: PMN) มีนิวเคลียส 3-5 พู แกรนูลจำเพาะ (Specific granules) ย้อมติดสีม่วงอมชมพูจางๆ ทำหน้าที่ Phagocytosis กำจัดเชื้อแบคทีเรียเฉียบพลัน ส่วนตัวเลือก B คือ Small lymphocyte, ตัวเลือก C คือ Eosinophil, ตัวเลือก D คือ Monocyte',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 9,
    tags: ['neutrophil', 'clinical-cbc', 'appendicitis-shift-left'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-004',
    questionText: 'ผู้ป่วยโรคหอบหืด (Bronchial asthma) หรือผู้ที่มีการติดเชื้อพยาธิในทางเดินอาหาร จะตรวจพบเม็ดเลือดขาวชนิด Eosinophil ในกระแสเลือดสูงขึ้น เม็ดเลือดขาวชนิดนี้ทำลายพยาธิขนาดใหญ่ด้วยกลไกทางโครงสร้างใด?',
    options: {
      A: 'การหลั่งเอนไซม์และสารโปรตีนจากแกรนูลจำเพาะที่ติดสีส้มแดง เช่น Major Basic Protein (MBP) และ Eosinophil Cationic Protein ออกมาทำลายผนังตัวพยาธิภายนอกเซลล์',
      B: 'การกินพยาธิทั้งตัวเข้าสู่เซลล์ด้วยกระบวนการ Phagocytosis แล้วย่อยด้วย Phagolysosome',
      C: 'การเปลี่ยนรูปเป็น Plasma cells เพื่อหลั่งแอนติบอดีชนิด IgE เข้าจับกับผิวพยาธิโดยตรง',
      D: 'การหลั่งสาร Heparin ในปริมาณมหาศาลเพื่อทำให้พยาธิเกิดภาวะเลือดออกในทางเดินอาหาร'
    },
    correctOption: 'A',
    explanation: 'เนื่องจากพยาธิมีขนาดใหญ่เกินกว่าที่เม็ดเลือดขาวจะกลืนกินได้ (Cannot be phagocytosed) Eosinophil จึงใช้กลไกการปล่อยสารพิษจาก Specific granules (ย้อมติดสีส้มแดง) ได้แก่ Major Basic Protein, Eosinophil Peroxidase และ Neurotoxin เพื่อทำลาย cuticle และเนื้อเยื่อของพยาธิภายนอกเซลล์',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 10,
    tags: ['eosinophil', 'parasitic-infection', 'allergy'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-005',
    questionText: 'ในภาวะ Anaphylactic shock จากการแพ้ยาเพนิซิลลินอย่างรุนแรง เม็ดเลือดขาวชนิด Basophil และ Mast cell ปล่อยสารเคมีสื่อกลางใดจากแกรนูลที่ส่งผลให้เกิดการขยายตัวของหลอดเลือดทั่วร่างกาย (Vasodilation) และหลอดลมหดเกร็ง (Bronchoconstriction)?',
    options: {
      A: 'Histamine และ Leukotrienes ร่วมกับ Heparin',
      B: 'Acetylcholine และ Norepinephrine',
      C: 'Hemoglobin และ Erythropoietin',
      D: 'Albumin และ Fibrinogen'
    },
    correctOption: 'A',
    explanation: 'Basophils มีแกรนูลขนาดใหญ่ติดสีน้ำเงินม่วงเข้ม บรรจุ Histamine ซึ่งทำให้เกิด Vasodilation และเพิ่ม Vascular permeability ส่งผลให้ความดันตก เกิดลมพิษและบวมน้ำ ร่วมกับหลั่ง Heparin ป้องกันการแข็งตัวของเลือด และสาร Leukotrienes ที่ทำให้หลอดลมหดเกร็งอย่างรุนแรง',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 11,
    tags: ['basophil', 'anaphylaxis', 'histamine', 'heparin'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-006',
    questionText: 'เมื่อเกิดการบาดเจ็บและการอักเสบเรื้อรังในเนื้อเยื่อ เม็ดเลือดขาวชนิด Agranulocyte ที่มีขนาดใหญ่ที่สุด (15-20 ไมครอน) นิวเคลียสเว้าเป็นรูปไต จะแทรกตัวผ่านผนังหลอดเลือด (Diapedesis) ออกไปทำหน้าที่เป็นเซลล์ใดในเนื้อเยื่อ?',
    options: {
      A: 'Macrophage ทำหน้าที่กินเชื้อโรค เศษซากเซลล์ และทำหน้าที่เป็น Antigen Presenting Cell (APC)',
      B: 'Plasma cell ทำหน้าที่สร้างและหลั่ง Immunoglobulin เข้าสู่สารคัดหลั่ง',
      C: 'Mast cell ทำหน้าที่หลั่ง Histamine และ Serotonin',
      D: 'Fibroblast ทำหน้าที่สร้างเฉพาะเส้นใยคอลลาเจนสมานแผล'
    },
    correctOption: 'A',
    explanation: 'Monocyte เป็นเม็ดเลือดขาวขนาดใหญ่ที่สุด นิวเคลียสรูปไต อยู่ในกระแสเลือดเพียง 1-3 วันก่อนเคลื่อนที่ผ่านผนังหลอดเลือดเข้าสู่เนื้อเยื่อแล้วเจริญเปลี่ยนสภาพไปเป็น Macrophage (เช่น Kupffer cells ในตับ, Alveolar macrophages ในปอด, Microglia ในสมอง)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 12,
    tags: ['monocyte', 'macrophage', 'diapedesis', 'apc'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-007',
    questionText: 'ผู้ป่วยโรคตับแข็งระยะท้าย (End-stage Cirrhosis) มักมีอาการบวมน้ำทั่วร่างกาย (Generalized edema) และท้องมาน (Ascites) ความผิดปกตินี้สัมพันธ์กับการสูญเสียหน้าที่ในการสร้างโปรตีนในพลาสมาชนิดใดจากตับมากที่สุด?',
    options: {
      A: 'Albumin ซึ่งมีหน้าที่หลักในการสร้างและรักษา Colloid osmotic pressure (Oncotic pressure) ของหลอดเลือด',
      B: 'Alpha-globulin ซึ่งทำหน้าที่ขนส่งฮอร์โมนไทรอยด์',
      C: 'Gamma-globulin ซึ่งสร้างจากพลาสมาเซลล์เพื่อเป็นแอนติบอดี',
      D: 'Fibrinogen ซึ่งทำหน้าที่เฉพาะในกระบวนการละลายลิ่มเลือด (Fibrinolysis)'
    },
    correctOption: 'A',
    explanation: 'Albumin เป็นโปรตีนพลาสมาที่มีสัดส่วนมากที่สุด (ประมาณ 60% ของโปรตีนในเลือด) สร้างจากตับ มีบทบาทสำคัญที่สุดในการรักษาระดับแรงดันคอลลอยด์ออสโมติก (Colloid osmotic pressure) เพื่อดึงน้ำไว้ในหลอดเลือด เมื่อตับวายและสร้าง Albumin ลดลง น้ำจึงรั่วซึมออกสู่ช่องว่างระหว่างเซลล์ เกิดภาวะบวมน้ำ (Edema) และท้องมาน (Ascites)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 6,
    tags: ['plasma-proteins', 'albumin', 'oncotic-pressure', 'edema'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-008',
    questionText: 'เกล็ดเลือด (Platelets / Thrombocytes) ที่มีบทบาทในกระบวนการ Hemostasis กำเนิดมาจากส่วนใดของเซลล์ต้นกำเนิดชนิดใดในไขกระดูก?',
    options: {
      A: 'การหลุดลอกของชิ้นส่วนไซโทพลาสซึม (Cytoplasmic fragments) จากเซลล์ขนาดยักษ์ Megakaryocyte',
      B: 'การสลายตัวของนิวเคลียสจาก Myeloblast ในระหว่างการแบ่งตัว',
      C: 'การแตกตัวของ Erythroblast ที่ไม่สามารถสังเคราะห์ฮีโมโกลบินได้',
      D: 'การแบ่งตัวแบบไมโทซิสของ Mature endothelial cells บริเวณหลอดเลือดฝอย'
    },
    correctOption: 'A',
    explanation: 'เกล็ดเลือดไม่ใช่เซลล์ที่มีนิวเคลียส แต่เป็นชิ้นส่วนไซโทพลาสซึม (ขนาด 2-4 ไมครอน) ที่หลุดออกมาจากเซลล์ขนาดใหญ่ชื่อ Megakaryocyte ในไขกระดูก มีอายุขัยประมาณ 8-10 วัน และถูกทำลายที่ม้ามและตับ',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 14,
    tags: ['platelets', 'megakaryocyte', 'hemostasis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-009',
    questionText: 'ในกระบวนการห้ามเลือด (Hemostasis) ปัจจัยและขั้นตอนใดที่เกิดขึ้นเป็นลำดับแรกสุดทันทีเมื่อผนังหลอดเลือดเกิดรอยฉีกขาด?',
    options: {
      A: 'Vascular spasm (การหดเกร็งตัวของกล้ามเนื้อเรียบในผนังหลอดเลือดเพื่อจำกัดการไหลของเลือด)',
      B: 'Platelet plug formation (เกล็ดเลือดรวมกลุ่มอุดรอยรั่ว)',
      C: 'Coagulation cascade (การเปลี่ยน Prothrombin เป็น Thrombin)',
      D: 'Fibrinolysis (การสลายลิ่มเลือดด้วยเอนไซม์ Plasmin)'
    },
    correctOption: 'A',
    explanation: 'ลำดับขั้นตอนของกระบวนการ Hemostasis: 1. Vascular spasm (หลอดเลือดหดเกร็งตัวทันทีจาก Myogenic reflex และ Endothelin) 2. Platelet plug formation (เกล็ดเลือดเกาะกับคอลลาเจนและรวมตัวกันเป็นก้อนอุดชั่วคราว) 3. Coagulation / Blood clotting (การสร้างร่างแห Fibrin เพื่อสร้างลิ่มเลือดถาวร)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 15,
    tags: ['hemostasis', 'vascular-spasm', 'coagulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-010',
    questionText: 'ผู้ป่วยประสบอุบัติเหตุต้องการรับการให้เลือดฉุกเฉิน ตรวจพบว่าเม็ดเลือดแดงของผู้ป่วยมีทั้ง Antigen A และ Antigen B บนผิวเซลล์ แต่ในซีรัมไม่มีทั้ง Anti-A และ Anti-B แอนติบอดี ผู้ป่วยรายนี้มีหมู่เลือดใด และในทางทฤษฎีสามารถรับเม็ดเลือดแดงจากหมู่เลือดใดได้บ้าง?',
    options: {
      A: 'หมู่เลือด AB (Rh-positive) เป็น Universal recipient สามารถรับเม็ดเลือดแดงได้จากทุกหมู่เลือด (A, B, AB, O)',
      B: 'หมู่เลือด O สามารถรับเม็ดเลือดแดงได้เฉพาะหมู่ O เท่านั้น',
      C: 'หมู่เลือด A สามารถรับได้เฉพาะหมู่ A และ AB เท่านั้น',
      D: 'หมู่เลือด B สามารถรับได้เฉพาะหมู่ B และ O เท่านั้น'
    },
    correctOption: 'A',
    explanation: 'หมู่เลือด AB มีทั้ง Antigen A และ B บนเยื่อหุ้มเซลล์เม็ดเลือดแดง จึงไม่มี Antibodies (ทั้ง Anti-A และ Anti-B) ในพลาสมา ทำให้ในภาวะฉุกเฉินสามารถรับเม็ดเลือดแดงจากผู้บริจาคหมู่เลือดใดก็ได้ (Universal recipient) โดยไม่เกิดปฏิกิริยา Agglutination จากแอนติบอดีของผู้รับ',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 13,
    tags: ['blood-groups', 'abo-system', 'universal-recipient'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-011',
    questionText: 'มารดาที่มีหมู่เลือด Rh-negative ตั้งครรภ์ทารกคนที่ 2 ซึ่งมีหมู่เลือด Rh-positive เกิดภาวะ Erythroblastosis fetalis (Hemolytic disease of the newborn) พยาธิกำเนิดของโรคนี้เกิดจากแอนติบอดีชนิดใด และผ่านรกได้อย่างไร?',
    options: {
      A: 'แอนติบอดี Anti-Rh (Anti-D) ชนิด IgG ที่มารดาสร้างขึ้นจากการสัมผัสเลือดทารกคนแรก สามารถซึมผ่านรกเข้าสู่กระแสเลือดทารกคนที่สองและทำลายเม็ดเลือดแดงของทารก',
      B: 'แอนติบอดี Anti-A ชนิด IgM ที่มีโมเลกุลขนาดใหญ่แทรกผ่านรกเข้าไปกระตุ้นเม็ดเลือดขาวทารก',
      C: 'การส่งผ่านเม็ดเลือดแดงของมารดาเข้าไปอุดกั้นหลอดเลือดสายสะดือของทารก',
      D: 'ทารกสร้างแอนติบอดีออกมาทำลายเม็ดเลือดแดงของมารดาในมดลูก'
    },
    correctOption: 'A',
    explanation: 'Anti-D antibody จัดเป็น IgG ซึ่งเป็นแอนติบอดีที่มีโมเลกุลขนาดเล็ก สามารถซึมผ่านรก (Placental barrier) ได้ เมื่อมารดา Rh-negative เคยสัมผัสเลือด Rh-positive ในครรภ์แรกแล้ว จะเกิด Sensitization และสร้าง Anti-D (IgG) เมื่อตั้งครรภ์ที่สองเป็นทารก Rh-positive แอนติบอดีนี้จะข้ามรกไปจับกับ Antigen D บนผิว RBC ของทารก ทำให้เกิด Hemolysis อย่างรุนแรง',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 13,
    tags: ['rh-factor', 'erythroblastosis-fetalis', 'igg-placenta'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-012',
    questionText: 'ในกระบวนการแข็งตัวของเลือด (Blood coagulation) เอนไซม์ Thrombin ทำหน้าที่เปลี่ยนสารตั้งต้นชนิดใดให้กลายเป็นร่างแหที่ไม่ละลายน้ำเพื่อดักจับเม็ดเลือดแดง?',
    options: {
      A: 'เปลี่ยน Fibrinogen (โปรตีนละลายน้ำในพลาสมา) ให้กลายเป็น Fibrin polymers (เส้นใยร่างแหที่ไม่ละลายน้ำ)',
      B: 'เปลี่ยน Prothrombin ให้กลายเป็น Thromboplastin',
      C: 'เปลี่ยน Plasminogen ให้กลายเป็น Plasmin',
      D: 'เปลี่ยน Albumin ให้กลายเป็น Globulin'
    },
    correctOption: 'A',
    explanation: 'ใน Common pathway ของกระบวนการ Coagulation: Prothrombinase enzyme complex จะเปลี่ยน Prothrombin ให้กลายเป็น Thrombin จากนั้น Thrombin จะเร่งปฏิกิริยาตัดสาย Fibrinogen (ละลายน้ำได้) ให้กลายเป็น Fibrin threads (เส้นใยที่ไม่ละลายน้ำ) ซึ่งจะประสานกับ Factor XIII กลายเป็นร่างแหคลุมก้อนลิ่มเลือด (Clot)',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 15,
    tags: ['coagulation', 'thrombin', 'fibrinogen', 'fibrin'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-013',
    questionText: 'ในการเก็บตัวอย่างเลือดส่งตรวจทางห้องปฏิบัติการ เมื่อนำเลือดที่ไม่ได้ใส่สารกันเลือดแข็งมาตั้งทิ้งไว้จนแข็งตัวแล้วนำไปปั่นเหวี่ยง ของเหลวส่วนใสที่แยกตัวออกมาด้านบนเรียกว่าอะไร และมีความแตกต่างจากพลาสมา (Plasma) อย่างไร?',
    options: {
      A: 'Serum (ซีรัม) ซึ่งแตกต่างจากพลาสมาตรงที่ไม่มีโปรตีนไฟบริโนเจน (Fibrinogen) และสารก่อลิ่มเลือด (Clotting factors) บางชนิดเนื่องจากถูกใช้ไปในการสร้างก้อนลิ่มเลือดแล้ว',
      B: 'Plasma ซึ่งมีส่วนประกอบของ Fibrinogen เข้มข้นกว่าเลือดปกติ 2 เท่า',
      C: 'Buffy coat ซึ่งประกอบด้วยเกล็ดเลือดบริสุทธิ์',
      D: 'Lymph ซึ่งมีไขมันและไคโลไมครอนสูงกว่าพลาสมา'
    },
    correctOption: 'A',
    explanation: 'Serum = Plasma ลบ Fibrinogen และ Clotting factors (เนื่องจากไฟบริโนเจนถูกเปลี่ยนเป็นไฟบรินและจับอยู่ในก้อนลิ่มเลือดด้านล่างหลอดทดลองไปแล้ว) ดังนั้นในซีรัมจึงไม่มีโปรตีนที่ทำให้เกิดการแข็งตัวของเลือดหลงเหลืออยู่',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 6,
    tags: ['serum-vs-plasma', 'fibrinogen', 'laboratory'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-014',
    questionText: 'เม็ดเลือดขาวชนิด Lymphocyte แบ่งออกเป็น B cells และ T cells ข้อใดเปรียบเทียบสถานที่พัฒนาจนโตเต็มวัย (Maturation) และหน้าที่ทางกายวิภาค-ภูมิคุ้มกันได้ถูกต้อง?',
    options: {
      A: 'B cells เจริญเติบโตเต็มวัยที่ Bone marrow และเปลี่ยนเป็น Plasma cells สร้าง Antibodies ส่วน T cells เคลื่อนที่ไปเจริญเติบโตเต็มวัยที่ต่อม Thymus ทำหน้าที่ในระบบ Cell-mediated immunity',
      B: 'B cells เจริญที่ม้าม (Spleen) ส่วน T cells เจริญที่ต่อมน้ำเหลือง (Lymph nodes)',
      C: 'B cells ทำลายเซลล์ติดเชื้อไวรัสโดยตรง ส่วน T cells สร้างเฉพาะฮิสตามีน',
      D: 'ทั้ง B cells และ T cells เจริญเติบโตเต็มวัยและสร้างแอนติบอดีที่ต่อมไทรอยด์'
    },
    correctOption: 'A',
    explanation: 'Lymphocytes ทั้งหมดกำเนิดจากสเต็มเซลล์ในไขกระดูก (Red bone marrow) โดย B cells จะพัฒนาจนเจริญเต็มวัยในไขกระดูก (Bone marrow-derived) รับผิดชอบ Humoral immunity ส่วน T cells จะเคลื่อนตัวผ่านกระแสเลือดไปยังต่อมไทมัส (Thymus-derived) เพื่อรับการคัดเลือกและเจริญเติบโต รับผิดชอบ Cell-mediated immunity',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 12,
    tags: ['lymphocytes', 'b-cells', 't-cells', 'thymus', 'bone-marrow'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-015',
    questionText: 'ฮีมาโตคริต (Hematocrit / Packed Cell Volume: PCV) มีความหมายทางคลินิกอย่างไร และค่าปกติในผู้ใหญ่เพศชายและเพศหญิงประมาณเท่าใด?',
    options: {
      A: 'สัดส่วนเปอร์เซ็นต์ปริมาตรของเม็ดเลือดแดงอัดแน่นเทียบกับปริมาตรเลือดทั้งหมด โดยเพศชายปกติประมาณ 40-54% และเพศหญิงประมาณ 37-47%',
      B: 'ปริมาณกรดอะมิโนทั้งหมดในซีรัม โดยเพศชาย 20% เพศหญิง 15%',
      C: 'สัดส่วนของเกล็ดเลือดในหลอดทดลอง โดยมีค่าเฉลี่ย 10-15% ในทั้งสองเพศ',
      D: 'อัตราการตกตะกอนของเม็ดเลือดแดงใน 1 ชั่วโมง โดยมีค่าปกติเท่ากับ 0%'
    },
    correctOption: 'A',
    explanation: 'Hematocrit (Hct) คือร้อยละของปริมาตรเม็ดเลือดแดงอัดแน่นต่อปริมาตรเลือดรวมหลังจากการปั่นเหวี่ยง (Centrifugation) ในผู้ชายมีค่าเฉลี่ยประมาณ 45% (ช่วง 40-54%) สูงกว่าผู้หญิง (เฉลี่ย 42%, ช่วง 37-47%) เนื่องจากฮอร์โมนเทสโทสเตอโรนกระตุ้นการหลั่ง Erythropoietin จากไตได้มากกว่า',
    system: systemName,
    topic: 'Blood Components & Hematology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 6,
    tags: ['hematocrit', 'pcv', 'clinical-lab'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 16-25: Heart Location, Mediastinum, Pericardium & Cardiac Wall
  {
    id: 'CARDIO-016',
    questionText: 'ในการตรวจร่างกายผู้ป่วย แพทย์ทำการคลำหายอดหัวใจ (Apex of the heart) เพื่อประเมินภาวะหัวใจโต (Cardiomegaly) ตำแหน่งทางกายวิภาคพื้นผิว (Surface anatomy) ปกติของ Apex beat อยู่ที่บริเวณใด?',
    options: {
      A: 'ช่องซี่โครงที่ 5 ด้านซ้าย (Left 5th intercostal space) ตัดกับแนวระนาบกึ่งกลางกระดูกไหปลาร้า (Midclavicular line)',
      B: 'ช่องซี่โครงที่ 2 ด้านขวา (Right 2nd intercostal space) ชิดขอบกระดูกอก',
      C: 'ช่องซี่โครงที่ 3 ด้านซ้าย ชิดขอบกระดูกอก (Left sternal border)',
      D: 'บริเวณใต้ลิ้นปี่ (Subxiphoid area) ตรงแนว Midsternal line'
    },
    correctOption: 'A',
    explanation: 'Apex ของหัวใจเกิดจากปลายของ Left Ventricle ชี้ลงด้านล่าง หน้า และซ้าย ตำแหน่งทางกายวิภาคปกติอยู่ที่ช่องซี่โครงที่ 5 ตัดกับแนวกึ่งกลางกระดูกไหปลาร้าซ้าย (Left 5th ICS, midclavicular line) ห่างจากขอบกระดูกอกประมาณ 7-9 ซม.',
    system: systemName,
    topic: 'Heart Anatomy & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 18,
    tags: ['apex-beat', 'surface-anatomy', 'mediastinum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-017',
    questionText: 'ผู้ป่วยประสบอุบัติเหตุถูกแทงที่ทรวงอกด้านหน้า มีภาวะ Cardiac tamponade (ของเหลวสะสมในช่องเยื่อหุ้มหัวใจบีบรัดหัวใจ) ช่องว่างทางกายวิภาคที่เกิดการคั่งของเลือดคือช่องใด และอยู่ระหว่างโครงสร้างใด?',
    options: {
      A: 'Pericardial cavity ซึ่งอยู่ระหว่างชั้น Parietal serous pericardium กับ Visceral serous pericardium (Epicardium)',
      B: 'Pleural cavity ซึ่งอยู่ระหว่าง Fibrous pericardium กับ Endocardium',
      C: 'Mediastinal space ซึ่งอยู่ระหว่าง Myocardium กับ Endocardium',
      D: 'Subepicardial space ซึ่งอยู่ระหว่างชั้นกล้ามเนื้อหัวใจกับลิ้นหัวใจ'
    },
    correctOption: 'A',
    explanation: 'เยื่อหุ้มหัวใจชั้น Serous pericardium มี 2 ชั้น คือ Parietal layer บุติดกับ Fibrous pericardium ด้านนอก และ Visceral layer (Epicardium) บุแนบติดผิวกล้ามเนื้อหัวใจ ช่องว่างเสมือนระหว่างสองชั้นนี้เรียกว่า Pericardial cavity บรรจุ Pericardial fluid ปกติ 15-50 มล. หากมีเลือดหรือน้ำสะสมรวดเร็วจะเกิด Cardiac tamponade บีบขัดขวางการคลายตัวรับเลือดของหัวใจ',
    system: systemName,
    topic: 'Heart Anatomy & Pericardium',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 20,
    tags: ['pericardium', 'cardiac-tamponade', 'serous-cavity'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-018',
    questionText: 'เยื่อหุ้มหัวใจชั้นนอกสุด Fibrous pericardium มีลักษณะโครงสร้างทางเนื้อเยื่ออย่างไร และมีบทบาทหน้าที่ทางกลไกป้องกันอย่างไร?',
    options: {
      A: 'เป็นเนื้อเยื่อเกี่ยวพันชนิด Dense irregular connective tissue หนา เหนียว ไม่ยืดหยุ่น ป้องกันไม่ให้หัวใจขยายตัวมากเกินไป (Overfilling) และยึดตรึงหัวใจไว้กับกะบังลมและกระดูกอก',
      B: 'เป็นเนื้อเยื่อบุผิว Simple squamous epithelium สร้างของเหลวหล่อลื่นลดแรงเสียดทาน',
      C: 'เป็นกล้ามเนื้อเรียบที่ช่วยบีบรูดเลือดออกจากหัวใจห้องบน',
      D: 'เป็นชั้นไขมันหนาทำหน้าที่ผลิตฮอร์โมนชะลอการเต้นของหัวใจ'
    },
    correctOption: 'A',
    explanation: 'Fibrous pericardium เป็นถุงเนื้อเยื่อเกี่ยวพันเหนียวหนา (Dense irregular connective tissue) ไม่มีคุณสมบัติยืดหยุ่น ทำหน้าที่ป้องกันไม่ให้หัวใจพองขยายตัวเกินขีดจำกัด ยึดตรึงหัวใจไว้กับ Central tendon ของกระบังลมและกระดูกอก (Sternopericardial ligaments)',
    system: systemName,
    topic: 'Heart Anatomy & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 19,
    tags: ['fibrous-pericardium', 'dense-connective-tissue'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-019',
    questionText: 'ผนังของหัวใจ (Heart wall) ประกอบด้วย 3 ชั้น ชั้นใดที่มีความหนามากที่สุด ประกอบด้วยเซลล์กล้ามเนื้อหัวใจที่เรียงตัวเป็นเกลียว และมีคุณสมบัติหดตัวบีบเลือด?',
    options: {
      A: 'Myocardium',
      B: 'Epicardium (Visceral pericardium)',
      C: 'Endocardium',
      D: 'Fibrous pericardium'
    },
    correctOption: 'A',
    explanation: 'ผนังหัวใจมี 3 ชั้น: 1. Epicardium (ชั้นนอก มีหลอดเลือดโคโรนารีและไขมัน) 2. Myocardium (ชั้นกลาง หนาที่สุด ประกอบด้วย Cardiac muscle cells) 3. Endocardium (ชั้นในสุด เป็น Endothelium ต่อเนื่องกับหลอดเลือดและคลุมผิวลิ้นหัวใจ)',
    system: systemName,
    topic: 'Heart Wall & Histology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 22,
    tags: ['heart-wall', 'myocardium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-020',
    questionText: 'ผู้ป่วยโรค Infective Endocarditis มีการติดเชื้อแบคทีเรียที่ชั้นในสุดของหัวใจ ทำให้เกิดก้อน Vegetations บนลิ้นหัวใจ ชั้น Endocardium ประกอบด้วยเซลล์ชนิดใด และต่อเนื่องกับโครงสร้างใดของหลอดเลือด?',
    options: {
      A: 'Endothelium (Simple squamous epithelium) ร่วมกับชั้น Subendothelial connective tissue ซึ่งเรียงตัวต่อเนื่องกับชั้น Tunica intima ของหลอดเลือดขนาดใหญ่',
      B: 'Simple cuboidal epithelium ต่อเนื่องกับชั้น Tunica media',
      C: 'Stratified squamous epithelium ต่อเนื่องกับชั้น Tunica adventitia',
      D: 'Dense regular elastic tissue ต่อเนื่องกับกระดูกซี่โครง'
    },
    correctOption: 'A',
    explanation: 'Endocardium เป็นชั้นเนื้อเยื่อบุผิวชนิด Simple squamous epithelium (Endothelium) บุแนบติดผิวภายในห้องหัวใจทั้งหมด คลุม Trabeculae carneae, Papillary muscles และแผ่นลิ้นหัวใจทั้งหมด โดยเรียงตัวเชื่อมต่อเป็นผืนเดียวกับ Tunica intima ของหลอดเลือดที่เข้าและออกจากหัวใจ',
    system: systemName,
    topic: 'Heart Wall & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 22,
    tags: ['endocardium', 'infective-endocarditis', 'tunica-intima'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-021',
    questionText: 'Intercalated discs ที่พบในเซลล์กล้ามเนื้อหัวใจ (Cardiac muscle tissue) ประกอบด้วยรอยต่อระหว่างเซลล์ (Cell junctions) ที่สำคัญ 2 ชนิด โครงสร้างใดทำหน้าที่นำกระแสประสาทและไอออนอย่างรวดเร็วเพื่อให้หัวใจบีบตัวพร้อมกันแบบ Functional syncytium?',
    options: {
      A: 'Gap junctions (Nexus)',
      B: 'Desmosomes (Macula adherens)',
      C: 'Tight junctions (Zonula occludens)',
      D: 'Hemidesmosomes'
    },
    correctOption: 'A',
    explanation: 'Intercalated discs มี Junctions สำคัญ 2 แบบ: 1. Desmosomes (และ Fascia adherens) ทำหน้าที่ยึดเหนี่ยวเชิงกลไม่ให้เซลล์หลุดออกจากกันขณะบีบตัวแรง 2. Gap junctions (Nexus) ทำหน้าที่เป็นช่องทางผ่านของไอออน (Electrical coupling) ส่งต่อ Action potential ได้รวดเร็ว ทำให้กล้ามเนื้อหัวใจทำงานเสมือนเซลล์เดียวยักษ์ (Functional syncytium)',
    system: systemName,
    topic: 'Heart Wall & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 22,
    tags: ['intercalated-discs', 'gap-junctions', 'functional-syncytium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-022',
    questionText: 'หัวใจตั้งอยู่ในช่องอกบริเวณใด และมีแกนการวางตัวชี้ไปในทิศทางใด?',
    options: {
      A: 'Middle mediastinum โดย Base ชี้ไปทางด้านหลัง บน และขวา ส่วน Apex ชี้ไปทางด้านหน้า ล่าง และซ้าย',
      B: 'Anterior mediastinum โดย Base ชี้ไปทางด้านหน้า และ Apex ชี้ไปทางด้านหลัง',
      C: 'Superior mediastinum เหนือระดับกระดูกสันหลัง T4',
      D: 'Posterior mediastinum ระหว่างหลอดอาหารกับกระดูกสันหลัง'
    },
    correctOption: 'A',
    explanation: 'หัวใจและถุงเยื่อหุ้มหัวใจตั้งอยู่ใน Middle mediastinum (ส่วนหนึ่งของ Inferior mediastinum) ระหว่างปอดทั้ง 2 ข้าง 2 ใน 3 ของเนื้อหัวใจอยู่ค่อนไปทางซ้ายของ Midsternal line โดยแกนยาวของหัวใจเอียงจาก Base (หลัง-บน-ขวา) ไปสู่ Apex (หน้า-ล่าง-ซ้าย)',
    system: systemName,
    topic: 'Heart Anatomy & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 17,
    tags: ['middle-mediastinum', 'heart-orientation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-023',
    questionText: 'ผนังกล้ามเนื้อของหัวใจห้องล่างซ้าย (Left Ventricle) มีความหนามากกว่าหัวใจห้องล่างขวา (Right Ventricle) ประมาณ 3 เท่า ความแตกต่างทางโครงสร้างนี้สอดคล้องกับหน้าที่ทางสรีรวิทยาอย่างไร?',
    options: {
      A: 'Left Ventricle ต้องสร้างแรงดันสูงในการบีบเลือดต้านแรงต้านทานของระบบไหลเวียนทั่วร่างกาย (Systemic circulation: ความดันประมาณ 120 mmHg) ขณะที่ Right Ventricle ปั๊มเลือดไปเฉพาะปอด (Pulmonary circulation: ความดันประมาณ 25 mmHg)',
      B: 'Left Ventricle ต้องรับเลือดที่มีปริมาตรมากกว่า Right Ventricle 3 เท่าในแต่ละรอบหัวใจเต้น',
      C: 'Right Ventricle มีลิ้นหัวใจ 3 แฉกจึงต้องการแรงบีบที่น้อยกว่า',
      D: 'Left Ventricle มีหลอดเลือดดำมากกว่าหลอดเลือดแดงหล่อเลี้ยง'
    },
    correctOption: 'A',
    explanation: 'ปริมาตรเลือดที่บีบออกจากทั้งสองห้องเท่ากัน (Stroke volume เท่ากัน) แต่ Left Ventricle ต้องสูบฉีดเลือดไปยังหลอดเลือดแดงทั่วร่างกายที่มีความต้านทานสูง (Systemic vascular resistance, 120/80 mmHg) ผนังกล้ามเนื้อจึงต้องหนาประมาณ 10-15 มม. ขณะที่ Right Ventricle สูบฉีดเลือดไปปอดที่มีระยะทางสั้นและแรงต้านต่ำ (25/8 mmHg) ผนังจึงหนาเพียง 3-5 มม.',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 31,
    tags: ['left-ventricle', 'wall-thickness', 'systemic-circulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-024',
    questionText: 'โครงสร้างที่เรียกว่า Sulcus หรือร่องบนผิวภายนอกของหัวใจที่เป็นรอยคอดระหว่าง Atria กับ Ventricles และเป็นที่ทอดผ่านของหลอดเลือด Coronary sinus คือข้อใด?',
    options: {
      A: 'Coronary sulcus (Atrioventricular groove)',
      B: 'Anterior interventricular sulcus',
      C: 'Posterior interventricular sulcus',
      D: 'Terminal sulcus'
    },
    correctOption: 'A',
    explanation: 'Coronary sulcus (AV groove) เป็นร่องวงแหวนที่แบ่งขอบเขตภายนอกระหว่างหัวใจห้องบน (Atria) กับห้องล่าง (Ventricles) เป็นที่อยู่ของ Right coronary artery, Circumflex artery และ Coronary sinus',
    system: systemName,
    topic: 'Heart Anatomy & Pericardium',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 21,
    tags: ['coronary-sulcus', 'av-groove'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-025',
    questionText: 'ร่องภายนอกที่แบ่งขอบเขตระหว่าง Left Ventricle และ Right Ventricle ทางด้านหน้าของหัวใจคือข้อใด และมีหลอดเลือดสำคัญคู่ใดทอดผ่านอยู่ภายในร่องนี้?',
    options: {
      A: 'Anterior interventricular sulcus โดยมี Anterior Interventricular Artery (LAD) และ Great Cardiac Vein ทอดผ่าน',
      B: 'Posterior interventricular sulcus โดยมี Posterior interventricular artery และ Middle cardiac vein ทอดผ่าน',
      C: 'Coronary sulcus โดยมี Small cardiac vein ทอดผ่าน',
      D: 'Terminal sulcus โดยมี Right marginal artery ทอดผ่าน'
    },
    correctOption: 'A',
    explanation: 'Anterior interventricular sulcus ทอดตัวอยู่บนผิวด้านหน้าของหัวใจ แยก RV ออกจาก LV โดยภายในร่องนี้มีเส้นเลือดแดง Anterior Interventricular Artery (Left Anterior Descending: LAD) ทอดคู่กับเส้นเลือดดำ Great Cardiac Vein',
    system: systemName,
    topic: 'Heart Anatomy & Pericardium',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 21,
    tags: ['anterior-interventricular-sulcus', 'lad', 'great-cardiac-vein'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 26-45: Heart Chambers, Internal Anatomy, Valves & Blood Flow
  {
    id: 'CARDIO-026',
    questionText: 'หัวใจห้องบนขวา (Right Atrium) ได้รับเลือดที่มีออกซิเจนต่ำ (Deoxygenated blood) กลับเข้าสู่หัวใจผ่านช่องเปิดของหลอดเลือดดำกี่สาย และได้แก่หลอดเลือดใดบ้าง?',
    options: {
      A: '3 สาย ได้แก่ Superior Vena Cava, Inferior Vena Cava และ Coronary Sinus',
      B: '4 สาย ได้แก่ Pulmonary veins 4 เส้น',
      C: '2 สาย ได้แก่ Superior Vena Cava และ Aorta',
      D: '1 สาย ได้แก่ Pulmonary trunk'
    },
    correctOption: 'A',
    explanation: 'Right Atrium รับเลือดดำจากทั่วร่างกายผ่าน 3 ช่องเปิดหลัก: 1. Superior Vena Cava (SVC) รับเลือดจากศีรษะ คอ แขน และทรวงอก 2. Inferior Vena Cava (IVC) รับเลือดจากลำตัวส่วนล่าง ท้อง และขา 3. Coronary Sinus รับเลือดดำจากกล้ามเนื้อหัวใจเอง',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 24,
    tags: ['right-atrium', 'svc', 'ivc', 'coronary-sinus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-027',
    questionText: 'ในหัวใจห้องบนขวา (Right Atrium) ผนังด้านในแบ่งออกเป็น 2 ส่วน คือส่วนผนังขรุขระด้านหน้าและส่วนผนังเรียบด้านหลัง สันนูนของกล้ามเนื้อที่ทำให้เกิดลักษณะขรุขระคล้ายซี่หวีเรียกว่าอะไร?',
    options: {
      A: 'Pectinate muscles (Musculi pectinati)',
      B: 'Trabeculae carneae',
      C: 'Papillary muscles',
      D: 'Chordae tendineae'
    },
    correctOption: 'A',
    explanation: 'ใน Right Atrium ผนังด้านหน้าและภายใน Right auricle มีสันกล้ามเนื้อนูนคล้ายซี่หวีเรียกว่า Pectinate muscles โดยแยกออกจากส่วนผนังเรียบด้านหลัง (Sinus venarum) ด้วยสันนูนแนวดิ่งที่เรียกว่า Crista terminalis',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 25,
    tags: ['pectinate-muscles', 'right-atrium', 'crista-terminalis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-028',
    questionText: 'โครงสร้างรูปไข่บุ๋ม (Oval depression) ที่พบบนผนังกั้นระหว่างหัวใจห้องบน (Interatrial septum) ในหัวใจของผู้ใหญ่คือข้อใด และเป็นโครงสร้างที่หลงเหลือมาจากสิ่งใดในระยะทารกในครรภ์?',
    options: {
      A: 'Fossa ovalis ซึ่งเป็นซากที่ปิดตัวลงของ Foramen ovale',
      B: 'Ligamentum arteriosum ซึ่งเป็นซากของ Ductus arteriosus',
      C: 'Fossa navicularis ซึ่งเป็นซากของ Ductus venosus',
      D: 'Ligamentum teres ซึ่งเป็นซากของ Umbilical vein'
    },
    correctOption: 'A',
    explanation: 'Fossa ovalis อยู่บน Interatrial septum เกิดจากการปิดตัวของ Foramen ovale ซึ่งเป็นรูลัดเชื่อมระหว่าง RA กับ LA ในทารกในครรภ์เพื่อบายพาสปอดที่ยังไม่ทำงาน หากรูนี้ปิดไม่สนิทหลังคลอดจะทำให้เกิดโรคหัวใจพิการแต่กำเนิดชนิด Atrial Septal Defect (ASD)',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 25,
    tags: ['fossa-ovalis', 'foramen-ovale', 'asd'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-029',
    questionText: 'ผนังภายในของหัวใจห้องล่างขวา (Right Ventricle) และห้องล่างซ้าย (Left Ventricle) มีสันกล้ามเนื้อนูนไขว้ประสานกันเป็นร่างแหจำนวนมาก สันกล้ามเนื้อนี้มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Trabeculae carneae',
      B: 'Pectinate muscles',
      C: 'Papillary muscles',
      D: 'Moderator band'
    },
    correctOption: 'A',
    explanation: 'Trabeculae carneae เป็นสันกล้ามเนื้อนูนคล้ายแท่งเนื้อไขว้กันบนผนังภายในของ Ventricle ทั้งสองห้อง ช่วยป้องกันไม่ให้เกิดแรงดูดติดกันของผนังห้องหัวใจในขณะบีบตัว ส่วน Pectinate muscles พบเฉพาะใน Atria',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 27,
    tags: ['trabeculae-carneae', 'ventricles'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-030',
    questionText: 'ผู้ป่วยมีภาวะลิ้นหัวใจ Tricuspid ปลิ้นรั่วรุนแรง (Tricuspid regurgitation) จากการฉีกขาดของเส้นเอ็นยึดลิ้นหัวใจ เส้นใยคอลลาเจนเหนียวที่เชื่อมระหว่างขอบแผ่นลิ้นหัวใจ AV valves กับกล้ามเนื้อ Papillary muscles คือโครงสร้างใด?',
    options: {
      A: 'Chordae tendineae (เอ็นยึดลิ้นหัวใจ)',
      B: 'Ligamentum arteriosum',
      C: 'Fibrous trigone',
      D: 'Annulus fibrosus'
    },
    correctOption: 'A',
    explanation: 'Chordae tendineae (Heart strings) เป็นสายเอ็นคอลลาเจนเหนียวที่ยึดระหว่างขอบของ Cusp ของ Atrioventricular (AV) valves (ทั้ง Tricuspid และ Mitral) กับปลายของ Papillary muscles ทำหน้าที่ดึงรั้งลิ้นไว้ไม่ให้ปลิ้นกลับเข้าไปใน Atria ในช่วง Ventricular systole',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 27,
    tags: ['chordae-tendineae', 'papillary-muscles', 'tricuspid-regurgitation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-031',
    questionText: 'ในขณะที่หัวใจห้องล่าง (Ventricles) กำลังบีบตัวดันเลือดออกสู่หลอดเลือดแดงใหญ่ (Ventricular systole) กลไกทางกายวิภาคใดที่ช่วยป้องกันไม่ให้ลิ้น Atrioventricular (AV) valves ปลิ้นถอยหลังเข้าไปในหัวใจห้องบน?',
    options: {
      A: 'Papillary muscles หดตัวพร้อมกันเพื่อดึงสายเอ็น Chordae tendineae ให้ตึงรั้งแผ่นลิ้นไว้',
      B: 'เลือดในหลอดเลือด Aorta ไหลย้อนกลับลงมาดันแผ่นลิ้นให้ประกบกัน',
      C: 'Pectinate muscles ในห้องบนบีบดันแผ่นลิ้นลงด้านล่าง',
      D: 'ความดันในห้อง Atrium สูงกว่าความดันในห้อง Ventricle'
    },
    correctOption: 'A',
    explanation: 'ขณะ Ventricular systole ความดันใน Ventricle จะพุ่งสูงขึ้นมาก ซึ่งจะผลักให้แผ่นลิ้น AV valves ปิดแนบกัน ในเวลาเดียวกัน Papillary muscles จะหดตัวดึงสาย Chordae tendineae ให้ตึงแน่น ป้องกันไม่ให้ Cusps ปลิ้น (Eversion/Prolapse) เข้าสู่ Atria',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 28,
    tags: ['papillary-muscles', 'valve-mechanism', 'systole'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-032',
    questionText: 'โครงสร้างกล้ามเนื้อชนิดพิเศษที่พาดผ่านช่องภายในหัวใจห้องล่างขวา เชื่อมระหว่าง Interventricular septum กับฐานของ Anterior papillary muscle มีบทบาทนำกระแสไฟฟ้าไปยังผนังห้องล่างขวา คือโครงสร้างใด?',
    options: {
      A: 'Moderator band (Septomarginal trabecula)',
      B: 'Crista terminalis',
      C: 'Tendon of Todaro',
      D: 'Fossa ovalis'
    },
    correctOption: 'A',
    explanation: 'Moderator band (Septomarginal trabecula) เป็นมัดกล้ามเนื้อและ Purkinje fibers พิเศษที่พบเฉพาะใน Right Ventricle เชื่อมจาก Interventricular septum ไปยัง Anterior papillary muscle ทำหน้าที่เป็นทางลัดนำสัญญาณกระแสประสาท (Right bundle branch) ช่วยให้ Papillary muscle หดตัวประสานเวลากับการบีบตัวของ Ventricle',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 27,
    tags: ['moderator-band', 'septomarginal-trabecula', 'right-ventricle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-033',
    questionText: 'หัวใจห้องบนซ้าย (Left Atrium) รับเลือดที่มีความเข้มข้นของออกซิเจนสูง (Oxygenated blood) ที่ฟอกแล้วจากปอดผ่านหลอดเลือดใด และมีจำนวนกี่เส้น?',
    options: {
      A: 'Pulmonary veins จำนวน 4 เส้น (ขวา 2 เส้น และซ้าย 2 เส้น)',
      B: 'Pulmonary arteries จำนวน 2 เส้น',
      C: 'Superior vena cava จำนวน 1 เส้น',
      D: 'Bronchial veins จำนวน 6 เส้น'
    },
    correctOption: 'A',
    explanation: 'Left Atrium รับเลือดแดงที่มีออกซิเจนสูงจากปอดผ่าน Pulmonary veins จำนวน 4 เส้น (Right superior/inferior และ Left superior/inferior pulmonary veins) เข้าสู่ผนังเรียบด้านหลังของ Left Atrium โดยไม่มีลิ้นเปิดปิด',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 29,
    tags: ['left-atrium', 'pulmonary-veins'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-034',
    questionText: 'ลิ้นหัวใจที่กั้นระหว่างหัวใจห้องบนซ้าย (Left Atrium) กับห้องล่างซ้าย (Left Ventricle) ประกอบด้วยแผ่นลิ้น 2 แฉก และต้องรับแรงดันบีบตัวสูงสุดของหัวใจ มีชื่อเรียกทางการแพทย์ว่าอะไร?',
    options: {
      A: 'Bicuspid valve หรือ Mitral valve',
      B: 'Tricuspid valve',
      C: 'Aortic semilunar valve',
      D: 'Pulmonary semilunar valve'
    },
    correctOption: 'A',
    explanation: 'Bicuspid valve (มี 2 แฉก: Anterior และ Posterior cusps) หรือ Mitral valve (เนื่องจากรูปร่างคล้ายหมวก Mitre ของบิชอป) กั้นระหว่าง LA กับ LV เป็นลิ้นที่รับแรงดันสูงที่สุดในร่างกาย จึงเกิดภาวะพยาธิสภาพ เช่น Mitral stenosis หรือ Mitral regurgitation ได้บ่อยที่สุด',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 30,
    tags: ['bicuspid-valve', 'mitral-valve', 'valvular-heart-disease'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-035',
    questionText: 'ลิ้นหัวใจกลุ่ม Semilunar valves (ได้แก่ Aortic valve และ Pulmonary valve) มีลักษณะทางกายวิภาคและกลไกการปิดแตกต่างจาก Atrioventricular valves อย่างไร?',
    options: {
      A: 'ประกอบด้วยแผ่นลิ้นรูปเสี้ยวพระจันทร์ 3 แผ่น คล้ายกระเปาะ (Cusps/Pockets) ไม่มีสาย Chordae tendineae หรือ Papillary muscles โดยปิดเมื่อเลือดในหลอดเลือดใหญ่ไหลย้อนกลับมาขังในกระเปาะขณะ Ventricular diastole',
      B: 'มีสาย Chordae tendineae ขนาดใหญ่ช่วยดึงให้ปิดในจังหวะหัวใจคลายตัว',
      C: 'มีกล้ามเนื้อหูรูดล้อมรอบเหมือน Sphincter คอยบีบรูดปิดกั้น',
      D: 'เปิดออกเมื่อหัวใจคลายตัว และปิดสนิทเมื่อหัวใจบีบตัว'
    },
    correctOption: 'A',
    explanation: 'Semilunar valves ประกอบด้วย Cusps รูปเสี้ยวพระจันทร์ 3 ชิ้นรูปถ้วยกระเปาะ ไม่มีเอ็น Chordae tendineae ยึด เมื่อ Ventricles บีบตัว เลือดจะผลักให้ลิ้นเปิดแนบผนัง แต่เมื่อ Ventricles คลายตัว (Diastole) เลือดใน Aorta/Pulmonary trunk จะไหลย้อนกลับมาขังเต็มกระเปาะ (Sinuses) ทำให้ขอบลิ้นแนบชนกันสนิท ป้องกันเลือดไหลย้อนกลับ',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 33,
    tags: ['semilunar-valves', 'aortic-valve', 'valve-closure-mechanism'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-036',
    questionText: 'เสียงหัวใจเต้นเสียงที่หนึ่ง (First heart sound: S1 หรือ "LUB") ทางกายวิภาคและสรีรวิทยาเกิดจากการเปลี่ยนแปลงของโครงสร้างใดในหัวใจ?',
    options: {
      A: 'การปิดพร้อมกันของลิ้น Atrioventricular (AV) valves (Tricuspid และ Mitral) เมื่อเริ่มเข้าสู่ระยะ Ventricular systole',
      B: 'การปิดของลิ้น Semilunar valves (Aortic และ Pulmonary) เมื่อสิ้นสุดระยะ Ventricular systole',
      C: 'การไหลเชี่ยวกรากของเลือดกระทบผนัง Atrium ขณะออกกำลังกาย',
      D: 'การเปิดตัวอย่างรวดเร็วของลิ้น Aortic valve'
    },
    correctOption: 'A',
    explanation: 'เสียง S1 ("LUB") เกิดจากการสั่นสะเทือนของเลือดและผนังหัวใจเมื่อลิ้น AV valves (Mitral และ Tricuspid) ปิดสนิทพร้อมกันในจังหวะเริ่มต้นของการบีบตัวของหัวใจห้องล่าง (Ventricular isovolumetric contraction) สอดคล้องกับตำแหน่ง QRS complex บนคลื่นไฟฟ้าหัวใจ',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 34,
    tags: ['heart-sounds', 's1', 'lub', 'av-valves-closure'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-037',
    questionText: 'เสียงหัวใจเต้นเสียงที่สอง (Second heart sound: S2 หรือ "DUB") เกิดขึ้นจากกลไกทางกายวิภาคใด?',
    options: {
      A: 'การปิดสนิทพร้อมกันของลิ้น Semilunar valves (Aortic valve และ Pulmonary valve) ในช่วงต้นของระยะ Ventricular diastole',
      B: 'การปิดของลิ้น Tricuspid และ Bicuspid valves',
      C: 'การหดตัวของ Papillary muscles ดึง Chordae tendineae',
      D: 'การบีบตัวของหัวใจห้องบน Atria'
    },
    correctOption: 'A',
    explanation: 'เสียง S2 ("DUB") เกิดจากการปิดอย่างกะทันหันของ Semilunar valves (Aortic และ Pulmonary valves) เมื่อความดันใน Ventricles ลดลงต่ำกว่าความดันในหลอดเลือด Aorta และ Pulmonary trunk ในจังหวะที่หัวใจห้องล่างเริ่มคลายตัว (Ventricular diastole)',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 34,
    tags: ['heart-sounds', 's2', 'dub', 'semilunar-valves'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-038',
    questionText: 'แพทย์ใช้หูฟัง (Stethoscope) ฟังเสียงลิ้นหัวใจ Aortic valve บริเวณผนังทรวงอก ตำแหน่งฟังตรวจที่ดีที่สุด (Aortic auscultation area) คือบริเวณใด?',
    options: {
      A: 'ช่องซี่โครงที่ 2 ด้านขวา ชิดขอบกระดูกอก (Right 2nd intercostal space, sternal border)',
      B: 'ช่องซี่โครงที่ 2 ด้านซ้าย ชิดขอบกระดูกอก (Left 2nd intercostal space)',
      C: 'ช่องซี่โครงที่ 5 ด้านซ้าย แนว Midclavicular line (Apex)',
      D: 'ช่องซี่โครงที่ 4-5 ด้านซ้าย ชิดขอบล่างของกระดูกอก'
    },
    correctOption: 'A',
    explanation: 'ตำแหน่งฟังเสียงลิ้นหัวใจบนผนังทรวงอก: 1. Aortic area = Right 2nd ICS ชิดขอบกระดูกอก 2. Pulmonic area = Left 2nd ICS ชิดขอบกระดูกอก 3. Tricuspid area = Left 4th-5th ICS ชิดขอบกระดูกอก 4. Mitral/Apical area = Left 5th ICS แนว Midclavicular line',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 35,
    tags: ['auscultation-areas', 'aortic-valve', 'physical-examination'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-039',
    questionText: 'โครงกระดูกเนื้อเยื่อเกี่ยวพันของหัวใจ (Fibrous skeleton of the heart) ซึ่งประกอบด้วยวงแหวนเส้นใยคอลลาเจนหนาแน่นรอบลิ้นหัวใจทั้งสี่ มีบทบาทสำคัญทางสรีรวิทยาและกายวิภาคอย่างไร?',
    options: {
      A: 'ทำหน้าที่เป็นฉนวนกั้นกระแสไฟฟ้า (Electrical insulator) ระหว่าง Atria กับ Ventricles บังคับให้คลื่นไฟฟ้าผ่านได้ทางเดียวคือผ่าน AV bundle และเป็นจุดเกาะยึดของลิ้นหัวใจและกล้ามเนื้อหัวใจ',
      B: 'ทำหน้าที่สร้างเซลล์เม็ดเลือดแดงทดแทนไขกระดูก',
      C: 'ทำหน้าที่ปล่อยกระแสประสาทอัตโนมัติทดแทน SA node',
      D: 'ทำหน้าที่ป้องกันไม่ให้เลือดแดงผสมกับเลือดดำในปอด'
    },
    correctOption: 'A',
    explanation: 'Fibrous skeleton ประกอบด้วยวงแหวน Anuli fibrosi 4 วงรอบลิ้นหัวใจ ทำหน้าที่สำคัญ 3 ประการ: 1. ยึดตรึงโครงสร้างลิ้นหัวใจไม่ให้บิดเบี้ยว 2. เป็นจุดเกาะยึดของใยกล้ามเนื้อหัวใจ 3. ทำหน้าที่เป็นฉนวนกั้นไฟฟ้า (Electrically insulates Atria from Ventricles) ทำให้การส่งสัญญาณไฟฟ้าจากบนสู่ล่างต้องผ่านทาง AV bundle (Bundle of His) เท่านั้น',
    system: systemName,
    topic: 'Heart Valves & Mechanism',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 32,
    tags: ['fibrous-skeleton', 'electrical-insulator', 'av-bundle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-040',
    questionText: 'ลำดับเส้นทางการไหลเวียนของเลือด (Blood circulation pathway) ผ่านหัวใจและปอดที่ถูกต้องและสมบูรณ์ที่สุดคือข้อใด?',
    options: {
      A: 'Vena cava -> Right Atrium -> Tricuspid valve -> Right Ventricle -> Pulmonary valve -> Pulmonary trunk -> Lungs -> Pulmonary veins -> Left Atrium -> Bicuspid valve -> Left Ventricle -> Aortic valve -> Aorta',
      B: 'Vena cava -> Left Atrium -> Bicuspid valve -> Left Ventricle -> Lungs -> Right Atrium -> Aorta',
      C: 'Pulmonary veins -> Right Atrium -> Pulmonary trunk -> Lungs -> Left Atrium -> Aorta',
      D: 'Aorta -> Left Ventricle -> Bicuspid valve -> Left Atrium -> Pulmonary veins -> Lungs'
    },
    correctOption: 'A',
    explanation: 'เส้นทางไหลเวียน: เลือดดำจาก Vena cava เข้าสู่ RA -> ผ่าน Tricuspid valve เข้า RV -> ผ่าน Pulmonary semilunar valve สู่ Pulmonary trunk ไปฟอกที่ปอด -> เลือดแดงกลับทาง Pulmonary veins เข้า LA -> ผ่าน Bicuspid (Mitral) valve สู่ LV -> ผ่าน Aortic valve สูบฉีดออกทาง Aorta ไปเลี้ยงทั่วร่างกาย',
    system: systemName,
    topic: 'Heart Chambers & Internal Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 23,
    tags: ['cardiac-circulation-pathway', 'systemic-pulmonary'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 41-50: Cardiac Conduction System & Innervation
  {
    id: 'CARDIO-041',
    questionText: 'ศูนย์กำเนิดจังหวะการเต้นของหัวใจหลัก (Primary Pacemaker of the heart) คือโครงสร้างใด และมีตำแหน่งทางกายวิภาคอยู่ที่ใดในหัวใจ?',
    options: {
      A: 'Sinoatrial (SA) node ตั้งอยู่ที่ผนังด้านบนของ Right Atrium บริเวณรอยต่อกับ Superior Vena Cava',
      B: 'Atrioventricular (AV) node ตั้งอยู่ที่ยอดของ Left Ventricle',
      C: 'Bundle of His ตั้งอยู่ภายใน Interatrial septum',
      D: 'Purkinje fibers ตั้งอยู่ที่ขอบของลิ้นหัวใจ Mitral'
    },
    correctOption: 'A',
    explanation: 'SA node ตั้งอยู่ที่ผนังด้านบนของ Right Atrium ชิดกับจุดเปิดของ Superior Vena Cava ทำหน้าที่เป็น Primary Pacemaker เนื่องจากมีอัตราการปล่อยกระแสไฟฟ้า (Inherent firing rate) สูงที่สุด คือประมาณ 60-100 ครั้งต่อนาที',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 38,
    tags: ['sa-node', 'pacemaker', 'right-atrium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-042',
    questionText: 'เมื่อกระแสไฟฟ้าเดินทางจาก SA node ผ่านผนังหัวใจห้องบนมาถึง Atrioventricular (AV) node จะเกิดการหน่วงสัญญาณไฟฟ้าช้าลงประมาณ 0.1 วินาที (AV nodal delay) ปรากฏการณ์นี้มีความสำคัญทางสรีรวิทยาอย่างไร?',
    options: {
      A: 'เพื่อให้เวลาแก่หัวใจห้องบน (Atria) ในการบีบตัวส่งเลือดลงสู่ห้องล่าง (Ventricles) ให้เสร็จสิ้นสมบูรณ์ก่อนที่ห้องล่างจะเริ่มบีบตัว',
      B: 'เพื่อป้องกันไม่ให้กระแสไฟฟ้ากระจายไปยังปอดและกะบังลม',
      C: 'เพื่อลดความดันโลหิตในหลอดเลือด Aorta ให้เท่ากับความดันในปอด',
      D: 'เพื่อให้ลิ้น Semilunar valves เปิดออกก่อนที่ลิ้น AV valves จะปิด'
    },
    correctOption: 'A',
    explanation: 'AV nodal delay (ชะลอสัญญาณประมาณ 0.09-0.12 วินาที) มีความสำคัญอย่างยิ่ง เพื่อให้ Atria มีเวลาบีบตัวผลักเลือดปริมาตรสุดท้าย (Atrial kick) ลงสู่ Ventricles ให้เต็มที่ (Ventricular filling) ก่อนที่ Ventricles จะเริ่มหดเกร็งบีบเลือดออกไป',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 39,
    tags: ['av-node', 'nodal-delay', 'atrial-kick'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-043',
    questionText: 'โครงสร้างทางเดินไฟฟ้าเพียงโครงสร้างเดียวที่สามารถนำสัญญาณกระแสไฟฟ้าทะลุผ่านฉนวน Fibrous skeleton จากหัวใจห้องบนลงสู่หัวใจห้องล่างได้คือข้อใด?',
    options: {
      A: 'Atrioventricular bundle (Bundle of His)',
      B: 'Anterior internodal pathway',
      C: 'Bachmann\'s bundle',
      D: 'Pectinate muscle bundle'
    },
    correctOption: 'A',
    explanation: 'เนื่องจาก Fibrous skeleton ทำหน้าที่เป็นฉนวนกั้นไฟฟ้าอย่างสมบูรณ์ โครงสร้างเดียวที่สามารถเจาะผ่านฉนวนนี้เพื่อนำ Action potential จาก AV node ใน Atria ลงสู่ Ventricles ได้คือ Bundle of His (AV bundle) ซึ่งจะทอดลงมาที่ยอดของ Interventricular septum',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 40,
    tags: ['bundle-of-his', 'av-bundle', 'fibrous-skeleton'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-044',
    questionText: 'เซลล์นำกระแสประสาทขนาดใหญ่ที่มีการสะสมไกลโคเจนสูง และมีอัตราเร็วในการนำสัญญาณไฟฟ้าสูงที่สุดในระบบนำไฟฟ้าของหัวใจ (ประมาณ 4 เมตรต่อวินาที) เพื่อกระจายสัญญาณสู่กล้ามเนื้อ Ventricles คือโครงสร้างใด?',
    options: {
      A: 'Purkinje fibers (Subendocardial conducting network)',
      B: 'SA nodal cells',
      C: 'AV nodal cells',
      D: 'Contractile cardiomyocytes ทั่วไป'
    },
    correctOption: 'A',
    explanation: 'Purkinje fibers เป็นเซลล์กล้ามเนื้อหัวใจที่ดัดแปลงพิเศษ มีขนาดใหญ่กว่าเซลล์กล้ามเนื้อทั่วไป มี Myofibrils น้อยแต่สะสม Glycogen สูง และมี Gap junctions จำนวนมาก ทำให้นำกระแสไฟฟ้าได้เร็วที่สุด (1-4 m/s) เพื่อให้กล้ามเนื้อ Ventricles ทั้งหมดบีบตัวประสานกันอย่างมีประสิทธิภาพ',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 41,
    tags: ['purkinje-fibers', 'conduction-velocity'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-045',
    questionText: 'ลำดับการนำสัญญาณไฟฟ้าผ่านระบบ Conduction system ของหัวใจจากจุดกำเนิดไปจนถึงปลายทางข้อใดถูกต้อง?',
    options: {
      A: 'SA node -> Internodal pathways -> AV node -> AV bundle (Bundle of His) -> Right and Left bundle branches -> Purkinje fibers',
      B: 'AV node -> SA node -> Bundle of His -> Purkinje fibers -> Bundle branches',
      C: 'Purkinje fibers -> Bundle branches -> AV bundle -> AV node -> SA node',
      D: 'SA node -> AV bundle -> AV node -> Purkinje fibers -> Bundle branches'
    },
    correctOption: 'A',
    explanation: 'ลำดับการนำไฟฟ้าของหัวใจที่ถูกต้อง: 1. SA node (Pacemaker) -> 2. Internodal pathways (ใน Atria) -> 3. AV node (หน่วงสัญญาณ) -> 4. Bundle of His (เจาะผ่าน Fibrous skeleton) -> 5. Right & Left bundle branches (ใน Interventricular septum) -> 6. Purkinje fibers (กระจายทั่วผนัง Ventricles)',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 37,
    tags: ['conduction-pathway', 'sa-to-purkinje'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-046',
    questionText: 'การกระตุ้นประสาทพาราซิมพาเทติก (Parasympathetic innervation) ผ่านทางเส้นประสาทสมองคู่ใดที่ส่งผลให้หัวใจเต้นช้าลง (Negative chronotropic effect) และสารสื่อประสาทชนิดใดที่หลั่งออกมาที่ SA node?',
    options: {
      A: 'เส้นประสาทสมองคู่ที่ 10 (Vagus nerve: CN X) หลั่งสารสื่อประสาท Acetylcholine (ACh)',
      B: 'เส้นประสาทสมองคู่ที่ 9 (Glossopharyngeal nerve: CN IX) หลั่งสาร Norepinephrine',
      C: 'เส้นประสาทสมองคู่ที่ 11 (Accessory nerve: CN XI) หลั่งสาร Dopamine',
      D: 'เส้นประสาทสมองคู่ที่ 7 (Facial nerve: CN VII) หลั่งสาร Epinephrine'
    },
    correctOption: 'A',
    explanation: 'ระบบ Parasympathetic เลี้ยงหัวใจผ่าน Vagus nerve (CN X) โดยแขนงประสาทจะไปสิ้นสุดที่ SA node และ AV node เป็นหลัก เมื่อถูกกระตุ้นจะหลั่ง Acetylcholine (ACh) จับกับ Muscarinic M2 receptors ส่งผลให้ Hyperpolarization ของเซลล์ ทำให้อัตราการเต้นของหัวใจช้าลง (Bradycardia)',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 42,
    tags: ['vagus-nerve', 'parasympathetic', 'acetylcholine', 'bradycardia'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-047',
    questionText: 'การกระตุ้นระบบประสาทซิมพาเทติก (Sympathetic innervation) มาจากไขสันหลังระดับใด และส่งผลต่อการทำงานของหัวใจอย่างไรผ่านตัวรับชนิดใด?',
    options: {
      A: 'ไขสันหลังระดับ T1 - T5 (Sympathetic trunk) หลั่ง Norepinephrine จับกับ Beta-1 adrenergic receptors ทำให้ทั้งอัตราการเต้น (Heart rate) และแรงบีบตัว (Contractility) ของหัวใจเพิ่มขึ้น',
      B: 'ไขสันหลังระดับ L1 - L3 หลั่ง Acetylcholine ทำให้หัวใจคลายตัว',
      C: 'ไขสันหลังระดับ S2 - S4 หลั่ง Serotonin ทำให้หลอดเลือดหัวใจหดตัว',
      D: 'ก้านสมองส่วน Medulla หลั่ง GABA ทำให้หัวใจหยุดเต้นชั่วคราว'
    },
    correctOption: 'A',
    explanation: 'Sympathetic preganglionic fibers ออกมาจากไขสันหลังระดับ T1-T5 ไปยัง Sympathetic chain ganglia แล้วส่ง Postganglionic cardiac nerves ไปเลี้ยงทั้ง SA node, AV node และ Myocardium ทั่วทั้งห้องบนและห้องล่าง หลั่ง Norepinephrine จับกับ Beta-1 adrenergic receptors เพิ่มทั้ง Heart rate, Conduction velocity และ Contractility',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 42,
    tags: ['sympathetic-innervation', 'beta-1-receptors', 'norepinephrine'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-048',
    questionText: 'หาก SA node เสียหายหรือหยุดทำงาน โครงสร้างใดในระบบนำไฟฟ้าจะเข้ามารับหน้าที่เป็น Pacemaker สำรองอันดับถัดไป (Secondary pacemaker) และจะมีอัตราการปล่อยกระแสไฟฟ้าประมาณเท่าใด?',
    options: {
      A: 'AV node โดยมีอัตราการปล่อยกระแสไฟฟ้าประมาณ 40 - 60 ครั้งต่อนาที',
      B: 'Purkinje fibers โดยมีอัตราการเต้นประมาณ 80 - 100 ครั้งต่อนาที',
      C: 'Bundle of His โดยมีอัตราการเต้นประมาณ 100 - 120 ครั้งต่อนาที',
      D: 'กล้ามเนื้อ Atrium โดยมีอัตราการเต้น 0 ครั้งต่อนาที'
    },
    correctOption: 'A',
    explanation: 'ระบบนำไฟฟ้ามีลำดับ Pacemaker สำรอง: 1. SA node = 60-100 bpm (Primary) 2. AV node = 40-60 bpm (Secondary, เข้าทำงานแทนเมื่อ SA node ล้มเหลว) 3. Bundle of His และ Purkinje fibers = 20-40 bpm (Tertiary / Ventricular escape rhythm)',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 39,
    tags: ['pacemaker-hierarchy', 'av-node-intrinsic-rate'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-049',
    questionText: 'คลื่น P wave บนกราฟคลื่นไฟฟ้าหัวใจ (Electrocardiogram: ECG) แสดงถึงเหตุการณ์ทางไฟฟ้าและทางกายวิภาคใดของหัวใจ?',
    options: {
      A: 'Atrial depolarization (การกระจายของกระแสไฟฟ้ากระตุ้นการหดตัวของกล้ามเนื้อหัวใจห้องบน)',
      B: 'Ventricular depolarization (การกระตุ้นหัวใจห้องล่าง)',
      C: 'Ventricular repolarization (การฟื้นตัวของหัวใจห้องล่าง)',
      D: 'Atrial repolarization (การฟื้นตัวของหัวใจห้องบน)'
    },
    correctOption: 'A',
    explanation: 'คลื่นบน ECG: 1. P wave = Atrial depolarization (กระแสไฟฟ้าแพร่ผ่าน Atria) 2. QRS complex = Ventricular depolarization (กระแสไฟฟ้าแพร่ผ่าน Ventricles กลบ Atrial repolarization) 3. T wave = Ventricular repolarization (การฟื้นตัวทางไฟฟ้าของ Ventricles)',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 38,
    tags: ['ecg', 'p-wave', 'atrial-depolarization'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-050',
    questionText: 'คลื่นกลุ่ม QRS complex บนกราฟ ECG สัมพันธ์กับเหตุการณ์ทางกลศาสตร์ใดของหัวใจที่กำลังจะเกิดขึ้นตามมาทันที?',
    options: {
      A: 'Ventricular systole (การเริ่มบีบตัวของหัวใจห้องล่างเพื่อฉีดเลือดออกสู่หลอดเลือดแดงใหญ่)',
      B: 'Atrial systole (การบีบตัวของหัวใจห้องบน)',
      C: 'Ventricular diastole (การคลายตัวของหัวใจห้องล่าง)',
      D: 'การปิดของลิ้น Aortic valve'
    },
    correctOption: 'A',
    explanation: 'QRS complex แสดงถึง Ventricular depolarization ซึ่งเป็นสัญญาณทางไฟฟ้าที่เกิดขึ้นก่อนการหดตัวทางกลศาสตร์ (Mechanical contraction) ของกล้ามเนื้อ Ventricles เล็กน้อย ดังนั้นทันทีหลังเกิด QRS complex หัวใจห้องล่างจะเริ่มบีบตัวเข้าสู่ระยะ Ventricular systole',
    system: systemName,
    topic: 'Cardiac Conduction System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 38,
    tags: ['qrs-complex', 'ventricular-systole'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

module.exports = { part1 };
