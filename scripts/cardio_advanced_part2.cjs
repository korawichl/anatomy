/**
 * scripts/cardio_advanced_part2.cjs
 * Questions 51 - 100: Coronary Circulation, Vasculature, Systemic/Portal, Lymphatic System
 * Increased complexity by 20-30% with clinical vignettes and high-yield distractors
 */

const systemName = 'Cardiovascular and Lymphatic Systems';
const sourceFile = 'BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf';

const part2 = [
  // 51-65: Coronary Circulation & Myocardial Infarction
  {
    id: 'CARDIO-051',
    questionText: 'หลอดเลือดแดงโคโรนารี (Coronary arteries) ทั้งด้านซ้ายและขวามีจุดกำเนิดทางกายวิภาค (Anatomical origin) ออกมาจากโครงสร้างใดของระบบไหลเวียนโลหิต?',
    options: {
      A: 'Aortic sinuses (Sinuses of Valsalva) ที่โคนของ Ascending aorta เหนือระดับแผ่นลิ้น Aortic valve เล็กน้อย',
      B: 'Aortic arch ร่วมกับ Brachiocephalic artery',
      C: 'Pulmonary trunk เหนือแผ่นลิ้น Pulmonary valve',
      D: 'Left Ventricle โดยตรงผ่านรูเปิดพิเศษใน Myocardium'
    },
    correctOption: 'A',
    explanation: 'Right and Left coronary arteries แตกแขนงออกมาจาก Right และ Left aortic sinuses (Sinuses of Valsalva) บริเวณโคนของ Ascending aorta เหนือต่อแผ่นลิ้น Aortic valve โดยเลือดจะไหลเข้าสู่หลอดเลือดโคโรนารีมากที่สุดในช่วง Ventricular diastole เมื่อลิ้น Aortic valve ปิดลง',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 44,
    tags: ['coronary-arteries', 'aortic-sinus', 'ascending-aorta'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-052',
    questionText: 'ผู้ป่วยชายอายุ 58 ปี มาโรงพยาบาลด้วยอาการเจ็บแน่นหน้าอกรุนแรงเหมือนมีของหนักทับ ร้าวไปที่กรามและแขนซ้าย ตรวจคลื่นไฟฟ้าหัวใจพบ ST-elevation ที่ Lead V1-V4 บ่งชี้ภาวะกล้ามเนื้อหัวใจตายเฉียบพลันบริเวณ Anterior wall ของ Left Ventricle และ Interventricular septum หลอดเลือดโคโรนารีเส้นใดที่เกิดการอุดตันบ่อยที่สุดและเรียกกันว่า "Widow maker"?',
    options: {
      A: 'Anterior Interventricular Artery (Left Anterior Descending: LAD)',
      B: 'Right Coronary Artery (RCA)',
      C: 'Circumflex artery (LCx)',
      D: 'Right Marginal artery'
    },
    correctOption: 'A',
    explanation: 'Anterior Interventricular Artery หรือ LAD เป็นแขนงของ Left Coronary Artery ทอดตัวใน Anterior interventricular sulcus เลี้ยงผนังด้านหน้าของ Ventricles ทั้งสองและ 2/3 ส่วนหน้าของ Interventricular septum เป็นเส้นเลือดที่เกิดการอุดตันบ่อยที่สุด (40-50%) และอันตรายถึงชีวิตมากที่สุดจนได้ฉายาว่า "Widow maker"',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 45,
    tags: ['lad', 'anterior-wall-mi', 'widow-maker', 'clinical-ecg'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-053',
    questionText: 'แขนงของ Left Coronary Artery (LCA) ที่ทอดตัวเลี้ยวไปตามร่อง Coronary sulcus ทางด้านหลังของหัวใจ เพื่อไปเลี้ยงผนังด้านข้าง (Lateral wall) และด้านหลังของ Left Atrium และ Left Ventricle คือหลอดเลือดใด?',
    options: {
      A: 'Circumflex artery (LCx)',
      B: 'Posterior interventricular artery',
      C: 'Right marginal artery',
      D: 'Conus arteriosus branch'
    },
    correctOption: 'A',
    explanation: 'Left Coronary Artery จะแยกออกเป็น 2 แขนงหลัก: 1. Anterior interventricular artery (LAD) ทอดลงด้านหน้าสู่ Apex 2. Circumflex artery (LCx) โค้งไปตาม Coronary sulcus ไปทางด้านหลัง เลี้ยง Left Atrium และผนังด้านข้าง/หลังของ Left Ventricle',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 45,
    tags: ['circumflex-artery', 'lca-branches'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-054',
    questionText: 'หลอดเลือด Right Coronary Artery (RCA) ทอดไปตาม Coronary sulcus ด้านขวา และให้แขนงสำคัญที่ทอดลงมาตามขอบล่างของหัวใจห้องล่างขวาเพื่อไปเลี้ยงผนังด้านข้างของ Right Ventricle คือแขนงใด?',
    options: {
      A: 'Right marginal branch',
      B: 'Circumflex branch',
      C: 'Left anterior descending branch',
      D: 'Great cardiac branch'
    },
    correctOption: 'A',
    explanation: 'Right Coronary Artery (RCA) ให้แขนงสำคัญ 2 แขนง: 1. Right marginal artery ทอดขนานตามขอบล่างของหัวใจเลี้ยง Right Ventricle 2. Posterior interventricular artery (PDA) ทอดใน Posterior interventricular groove เลี้ยงผนังล่างและด้านหลังของ Ventricles',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 46,
    tags: ['rca', 'marginal-artery'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-055',
    questionText: 'ในภาวะ Inferior wall Myocardial Infarction ผู้ป่วยมักมีอาการหัวใจเต้นช้าผิดปกติและเกิด AV block เนื่องจากหลอดเลือดเส้นที่อุดตันทำหน้าที่ส่งเลือดไปเลี้ยง SA node และ AV node หลอดเลือดที่มีพยาธิสภาพในกรณีนี้คือเส้นใด?',
    options: {
      A: 'Right Coronary Artery (RCA) ซึ่งให้แขนง Nodal branches ไปเลี้ยง SA node (ประมาณ 60% ของประชากร) และ AV node (ประมาณ 90% ของประชากร)',
      B: 'Left anterior descending artery',
      C: 'Great cardiac vein',
      D: 'Pulmonary artery'
    },
    correctOption: 'A',
    explanation: 'RCA เลี้ยง Right Atrium, Right Ventricle ผนังด้านล่าง (Inferior/diaphragmatic wall) และให้แขนงไปเลี้ยงระบบนำไฟฟ้าหัวใจ ได้แก่ SA nodal branch (60%) และ AV nodal branch (90%) ดังนั้นเมื่อเกิด Inferior wall MI จาก RCA occlusion ผู้ป่วยจึงมักมีภาวะ Bradycardia หรือ AV nodal block ร่วมด้วย',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 46,
    tags: ['rca-occlusion', 'inferior-mi', 'av-block', 'nodal-artery'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-056',
    questionText: 'หลอดเลือดดำ Great Cardiac Vein ทอดคู่กับหลอดเลือดแดงใด และนำเลือดดำจากกล้ามเนื้อหัวใจไหลไปเทรวมเข้าสู่โครงสร้างใดทางด้านหลังของหัวใจ?',
    options: {
      A: 'ทอดคู่กับ Anterior Interventricular Artery (LAD) ในร่องด้านหน้า แล้วเทเข้าสู่ Coronary Sinus',
      B: 'ทอดคู่กับ Posterior interventricular artery แล้วเทเข้า Inferior Vena Cava',
      C: 'ทอดคู่กับ Aorta แล้วเทเข้าสู่ Left Atrium',
      D: 'ทอดคู่กับ Pulmonary trunk แล้วเทเข้าสู่ปอด'
    },
    correctOption: 'A',
    explanation: 'Great Cardiac Vein ทอดคู่กับ Anterior Interventricular Artery (LAD) ใน Anterior interventricular sulcus รับเลือดดำจากผิวด้านหน้าของ Ventricles ทั้งสอง จากนั้นจะโค้งไปตาม Coronary sulcus ด้านหลังเพื่อเทเข้าสู่ Coronary Sinus',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 48,
    tags: ['great-cardiac-vein', 'coronary-sinus', 'lad'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-057',
    questionText: 'หลอดเลือดดำ Middle Cardiac Vein ทอดตัวอยู่ในร่องใดทางด้านหลังของหัวใจ และทอดตัวคู่ขนานไปกับหลอดเลือดแดงเส้นใด?',
    options: {
      A: 'ทอดอยู่ใน Posterior interventricular sulcus คู่กับ Posterior Interventricular Artery',
      B: 'ทอดอยู่ใน Anterior interventricular sulcus คู่กับ LAD',
      C: 'ทอดอยู่ข้างขอบล่างหัวใจคู่กับ Right marginal artery',
      D: 'ทอดอยู่บน Superior vena cava'
    },
    correctOption: 'A',
    explanation: 'Middle Cardiac Vein ทอดตัวอยู่ใน Posterior interventricular sulcus ทางด้านหลังของหัวใจ คู่กับ Posterior Interventricular Artery (แขนงของ RCA) และนำเลือดดำเทเข้าสู่ Coronary Sinus',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 48,
    tags: ['middle-cardiac-vein', 'posterior-interventricular'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-058',
    questionText: 'กระเปาะหลอดเลือดดำขนาดใหญ่ทางด้านหลังของหัวใจในร่อง Coronary sulcus ที่ทำหน้าที่รวบรวมเลือดดำเกือบทั้งหมดจากกล้ามเนื้อหัวใจเพื่อส่งตรงเข้าสู่ Right Atrium คือโครงสร้างใด?',
    options: {
      A: 'Coronary Sinus',
      B: 'Superior Vena Cava',
      C: 'Inferior Vena Cava',
      D: 'Cisterna Chyli'
    },
    correctOption: 'A',
    explanation: 'Coronary Sinus เป็นแอ่งหลอดเลือดดำกว้างที่อยู่บนผิวด้านหลังของหัวใจใน Coronary sulcus รับเลือดดำจาก Great, Middle, และ Small cardiac veins แล้วเทเข้าสู่ Right Atrium โดยตรงผ่านทาง Coronary sinus orifice (มี Thebesian valve กั้นบางส่วน)',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 47,
    tags: ['coronary-sinus', 'right-atrium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-059',
    questionText: 'การไหลเวียนของเลือดในหลอดเลือดโคโรนารี (Coronary blood flow) แตกต่างจากอวัยวะอื่นในร่างกายอย่างไร โดยเฉพาะในกล้ามเนื้อหัวใจห้องล่างซ้าย?',
    options: {
      A: 'เลือดจะไหลเข้าสู่กล้ามเนื้อหัวใจห้องล่างซ้ายได้มากที่สุดในช่วง Ventricular diastole (หัวใจคลายตัว) เนื่องจากในช่วง Systole ผนังกล้ามเนื้อหัวใจจะบีบตัวแน่นจนกดเบียดหลอดเลือดฝอยโคโรนารีให้ตีบลง',
      B: 'เลือดจะไหลเข้าได้เฉพาะในช่วง Ventricular systole ที่มีความดันสูงสุดเท่านั้น',
      C: 'อัตราการไหลคงที่ตลอดเวลาไม่ขึ้นกับวงรอบการเต้นของหัวใจ',
      D: 'เลือดจะหยุดไหลทั้งหมดเมื่อความดันโลหิตสูงขึ้น'
    },
    correctOption: 'A',
    explanation: 'กล้ามเนื้อหัวใจห้องล่างซ้ายสร้างแรงบีบตัวมหาศาลขณะ Systole ซึ่งบีบกด Intramyocardial coronary vessels ทำให้เลือดแทบไม่สามารถไหลผ่านได้ แต่เมื่อเข้าสู่ระยะ Ventricular diastole ผนังคลายตัว และมีแรงดันย้อนกลับใน Aorta เลือดจึงไหลเข้าสู่ Coronary arteries และ Myocardium ได้อย่างเต็มที่ (ประมาณ 70-80% ของ Coronary flow เกิดใน Diastole)',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 44,
    tags: ['coronary-flow-diastole', 'myocardial-perfusion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-060',
    questionText: 'ผู้ป่วยโรคหลอดเลือดหัวใจตีบมักได้รับการผ่าตัดทำทางเบี่ยงหลอดเลือดหัวใจ (Coronary Artery Bypass Graft: CABG) หลอดเลือดดำและหลอดเลือดแดงของร่างกายที่นิยมนำมาทำ Graft มากที่สุดคือข้อใด?',
    options: {
      A: 'Great saphenous vein (จากขา) และ Internal thoracic artery (Internal mammary artery: LIMA จากผนังทรวงอก)',
      B: 'Femoral artery และ Jugular vein',
      C: 'Brachial artery และ Cephalic vein',
      D: 'Renal artery และ Portal vein'
    },
    correctOption: 'A',
    explanation: 'ในการผ่าตัด CABG หลอดเลือดที่นิยมใช้มากที่สุดคือ 1. Great saphenous vein จากรยางค์ล่าง (เนื่องจากยาวและตัดออกได้โดยไม่กระทบต่อการไหลเวียนหลัก) 2. Left Internal Thoracic Artery (LIMA) จากผนังทรวงอกด้านใน (ซึ่งมีอัตราการเปิดโล่งในระยะยาวดีที่สุด)',
    system: systemName,
    topic: 'Coronary Circulation & Clinical Ischemia',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 50,
    tags: ['cabg', 'great-saphenous-vein', 'internal-thoracic-artery'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 61-75: Blood Vessels Histology & Vascular System
  {
    id: 'CARDIO-061',
    questionText: 'ผนังของหลอดเลือดแดงและหลอดเลือดดำทั่วไปประกอบด้วยชั้นเนื้อเยื่อ 3 ชั้น ลำดับจากชั้นในสุดสัมผัสกับเลือดออกสู่ชั้นนอกสุดข้อใดถูกต้อง?',
    options: {
      A: 'Tunica intima -> Tunica media -> Tunica externa (Tunica adventitia)',
      B: 'Tunica media -> Tunica intima -> Tunica externa',
      C: 'Tunica externa -> Tunica media -> Tunica intima',
      D: 'Tunica intima -> Tunica adventitia -> Tunica media'
    },
    correctOption: 'A',
    explanation: 'ผนังหลอดเลือดเรียงจากในออกนอก: 1. Tunica intima (ชั้นในสุด มี Endothelium และ Internal elastic lamina) 2. Tunica media (ชั้นกลาง ประกอบด้วยกล้ามเนื้อเรียบและ Elastic fibers) 3. Tunica externa/adventitia (ชั้นนอกสุด ประกอบด้วยคอลลาเจนและ Vasa vasorum)',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 52,
    tags: ['vessel-wall-layers', 'tunica-intima-media-adventitia'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-062',
    questionText: 'หลอดเลือดแดงขนาดใหญ่ เช่น Aorta และ Pulmonary trunk จัดเป็นกลุ่ม Elastic arteries (Conducting arteries) ในชั้น Tunica media ของหลอดเลือดกลุ่มนี้มีลักษณะพิเศษทางเนื้อเยื่ออย่างไรที่ช่วยทำหน้าที่ Windkessel effect?',
    options: {
      A: 'มีแผ่นเส้นใยอิลาสติน (Elastic lamellae) เรียงตัวสลับกันจำนวนมากในชั้น Tunica media ทำให้สามารถขยายตัวรับแรงกระแทกของเลือดในจังหวะ Systole และหดตัวดันเลือดไหลต่อเนื่องในจังหวะ Diastole',
      B: 'มีเซลล์กล้ามเนื้อลายหนาแน่นช่วยบีบรูดเลือด',
      C: 'มีลิ้นเปิดปิดภายในท่อตลอดความยาว',
      D: 'ไม่มีชั้น Tunica media เพื่อให้ผนังบางที่สุด'
    },
    correctOption: 'A',
    explanation: 'Elastic arteries (เช่น Aorta) มี Elastic fibers จำนวนมากใน Tunica media ทำหน้าที่เป็นถังรับแรงดัน (Windkessel effect) ยืดขยายตัวรับ Stroke volume ขณะ Systole และหดตัวกลับ (Elastic recoil) ดันเลือดให้ไหลต่อเนื่องไปข้างหน้าในขณะ Diastole ช่วยลดความดันตัวบนและคงความดันตัวล่างไม่ให้ตกเป็นศูนย์',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 53,
    tags: ['elastic-arteries', 'windkessel-effect', 'aorta'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-063',
    questionText: 'หลอดเลือดชนิดใดในระบบไหลเวียนโลหิตที่ทำหน้าที่เป็น Major resistance vessels (ตัวต้านทานหลักของระบบ) ซึ่งมีผลต่อการควบคุมความดันโลหิตทั่วร่างกาย (Systemic blood pressure) มากที่สุดจากการหดและขยายตัวของกล้ามเนื้อเรียบ?',
    options: {
      A: 'Arterioles (หลอดเลือดแดงเล็ก)',
      B: 'Elastic arteries',
      C: 'Large veins',
      D: 'Continuous capillaries'
    },
    correctOption: 'A',
    explanation: 'Arterioles มีสัดส่วนของกล้ามเนื้อเรียบในชั้น Tunica media หนามากเมื่อเทียบกับขนาด Lumen และถูกควบคุมอย่างใกล้ชิดโดยระบบประสาทอัตโนมัติ การเปลี่ยนแปลงขนาดเส้นผ่านศูนย์กลางเพียงเล็กน้อยของ Arterioles จะส่งผลต่อแรงต้านทานส่วนปลาย (Total Peripheral Resistance: TPR) และความดันโลหิตอย่างมหาศาลตามกฎของ Poiseuille',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 54,
    tags: ['arterioles', 'resistance-vessels', 'tpr', 'blood-pressure'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-064',
    questionText: 'หลอดเลือดฝอย (Capillaries) ชนิด Fenestrated capillaries มีลักษณะทางจุลกายวิภาคอย่างไร และพบได้เด่นชัดที่สุดในอวัยวะใด?',
    options: {
      A: 'เซลล์ Endothelial มีรูพรุนขนาดเล็ก (Fenestrations) แต่ยังมี Basement membrane ต่อเนื่อง พบได้ที่ Glomerulus ของไต, ต่อมไร้ท่อ และเยื่อบุทางเดินอาหาร',
      B: 'ไม่มีรูพรุนใดๆ มี Tight junctions แนบสนิท พบที่ Blood-Brain Barrier ในสมอง',
      C: 'มีช่องว่างกว้างมากระหว่างเซลล์และ Basement membrane ไม่สมบูรณ์ พบที่ตับ ม้าม และไขกระดูก',
      D: 'มีชั้นกล้ามเนื้อเรียบ 3 ชั้นล้อมรอบ'
    },
    correctOption: 'A',
    explanation: 'Fenestrated capillaries มีรูพรุน (Pores/Fenestrae ขนาด 60-80 nm) บนผนังเซลล์บุผิว ช่วยให้โมเลกุลขนาดเล็กและของเหลวซึมผ่านได้อย่างรวดเร็ว พบในอวัยวะที่มีการกรองหรือดูดซึมสารสูง เช่น Glomerulus ของไต, เยื่อบุลำไส้เล็ก และต่อมไร้ท่อต่างๆ',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 55,
    tags: ['fenestrated-capillaries', 'renal-glomerulus', 'microcirculation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-065',
    questionText: 'หลอดเลือดฝอยชนิด Sinusoid (Discontinuous capillaries) มีลักษณะเด่นอย่างไร และมีความสัมพันธ์เชิงโครงสร้างและหน้าที่กับอวัยวะใด?',
    options: {
      A: 'มี Lumen กว้าง ผนังเซลล์ Endothelial มีช่องว่างขนาดใหญ่ (Intercellular gaps) และมี Incomplete/absent basement membrane ช่วยให้เซลล์เม็ดเลือดและโปรตีนขนาดใหญ่ผ่านได้ พบที่ตับ (Liver), ม้าม (Spleen) และไขกระดูก (Bone marrow)',
      B: 'ผนังเซลล์ติดกันแน่นไม่มีช่องว่าง พบที่กล้ามเนื้อลายและปอด',
      C: 'มีรูพรุนขนาดเล็กเฉพาะน้ำผ่านได้ พบที่กระจกตา',
      D: 'ผนังประกอบด้วยเซลล์ Schwann ล้อมรอบ'
    },
    correctOption: 'A',
    explanation: 'Sinusoids (Discontinuous capillaries) มีทางเดินคดเคี้ยว รูเปิดกว้าง และเยื่อเบสเมนต์ไม่ต่อเนื่องหรือขาดหายไป ช่วยให้สารโมเลกุลขนาดใหญ่มาก รวมถึงเซลล์เม็ดเลือดที่สร้างขึ้นใหม่สามารถเข้าหรือออกจากกระแสเลือดได้ พบในอวัยวะสร้างและทำลายเม็ดเลือด ได้แก่ ไขกระดูก, ตับ (Liver sinusoids), และม้าม',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 55,
    tags: ['sinusoids', 'discontinuous-capillaries', 'spleen', 'liver', 'bone-marrow'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-066',
    questionText: 'หลอดเลือดกลุ่มใดในระบบไหลเวียนโลหิตที่ทำหน้าที่เป็น Capacitance vessels หรือ Blood reservoir ซึ่งบรรจุเลือดอยู่ถึงประมาณ 60-65% ของปริมาตรเลือดทั้งหมดในร่างกายขณะพัก?',
    options: {
      A: 'Veins and Venules (หลอดเลือดดำและหลอดเลือดดำเล็ก)',
      B: 'Systemic arteries',
      C: 'Capillaries',
      D: 'Heart chambers'
    },
    correctOption: 'A',
    explanation: 'Veins มีผนังบาง มีความยืดหยุ่นสูง (High compliance) และมี Lumen กว้าง ทำให้สามารถกักเก็บปริมาตรเลือดไว้ได้มากถึง 60-65% ของร่างกาย จึงทำหน้าที่เป็น Blood reservoir (Capacitance vessels) เมื่อร่างกายต้องการเลือดเพิ่ม (เช่น ขณะออกกำลังกายหรือตกเลือด) หลอดเลือดดำจะถูกกระตุ้นให้หดตัว (Venoconstriction) เพื่อเพิ่ม Venous return เข้าสู่หัวใจ',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 56,
    tags: ['capacitance-vessels', 'veins', 'blood-reservoir'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-067',
    questionText: 'กลไกสำคัญที่ช่วยให้เลือดดำจากรยางค์ล่างสามารถไหลย้อนแรงโน้มถ่วงกลับเข้าสู่หัวใจห้องบนขวาได้โดยไม่เกิดการไหลย้อนกลับคือข้อใด?',
    options: {
      A: 'การทำงานร่วมกันของ Venous valves (ลิ้นภายในหลอดเลือดดำ) กับ Skeletal muscle pump และ Respiratory pump',
      B: 'แรงสูบฉีดโดยตรงจาก Ventricle ซ้าย',
      C: 'การหดตัวของเซลล์เยื่อบุผิว Endothelium',
      D: 'ความดันในช่องอกที่เป็นบวกตลอดเวลา'
    },
    correctOption: 'A',
    explanation: 'เลือดดำมีความดันต่ำมาก การไหลกลับเข้าสู่หัวใจ (Venous return) จึงต้องอาศัย: 1. Venous valves (ส่วนพับของ Tunica intima ทำหน้าที่กั้นไม่ให้เลือดไหลย้อนกลับ) 2. Skeletal muscle pump (กล้ามเนื้อน่องบีบอัดหลอดเลือดดำขณะก้าวเดิน) 3. Respiratory pump (ความดันในช่องอกลดลงเป็นลบขณะหายใจเข้าช่วยดูดเลือดเข้าสู่ IVC)',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 57,
    tags: ['venous-return', 'venous-valves', 'skeletal-muscle-pump'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-068',
    questionText: 'ผู้ป่วยหญิงมีอาการเส้นเลือดขอดรุนแรงที่ขาทั้งสองข้าง (Varicose veins) พยาธิสภาพทางกายวิภาคเกิดจากความผิดปกติของโครงสร้างใดในหลอดเลือดดำ?',
    options: {
      A: 'ลิ้นในหลอดเลือดดำ (Venous valves) เสื่อมสภาพและปิดไม่สนิท (Incompetent valves) ทำให้เลือดดำไหลย้อนกลับมาคั่งและเพิ่มแรงดันจนผนังหลอดเลือดโป่งพองคดเคี้ยว',
      B: 'การตีบตันของหลอดเลือดแดง Femoral artery',
      C: 'การขาดหายไปของชั้น Tunica adventitia',
      D: 'การสร้างลิ่มเลือดในหลอดเลือดฝอย'
    },
    correctOption: 'A',
    explanation: 'Varicose veins เกิดขึ้นเมื่อ Venous valves ใน Superficial veins (โดยเฉพาะ Great saphenous vein) เกิดการรั่วหรือเสื่อมสภาพ (Valvular incompetence) ส่งผลให้เลือดไหลย้อนลงสู่ส่วนล่างตามแรงโน้มถ่วง เกิดภาวะหลอดเลือดดำคั่ง แรงดันในหลอดเลือดดำสูงขึ้น ผนังหลอดเลือดจึงยืดขยาย โป่งพอง และคดงอ',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 57,
    tags: ['varicose-veins', 'valvular-incompetence', 'saphenous-vein'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-069',
    questionText: 'หลอดเลือดแดงขนาดใหญ่ Aorta เมื่อทอดตัวออกจากหัวใจจะโค้งเป็นรูปตัวยูคว่ำเรียกว่า Aortic Arch แขนงใหญ่ 3 แขนงที่แตกออกจากส่วนโค้งของ Aortic Arch เรียงลำดับจากขวาไปซ้ายคือข้อใด?',
    options: {
      A: 'Brachiocephalic trunk -> Left Common Carotid artery -> Left Subclavian artery',
      B: 'Right Subclavian artery -> Right Common Carotid artery -> Left Subclavian artery',
      C: 'Left Common Carotid artery -> Right Common Carotid artery -> Brachiocephalic trunk',
      D: 'Celiac trunk -> Superior mesenteric artery -> Inferior mesenteric artery'
    },
    correctOption: 'A',
    explanation: 'แขนง 3 เส้นที่แตกออกจาก Aortic Arch จากขวาไปซ้ายตามลำดับ ได้แก่: 1. Brachiocephalic trunk (ซึ่งจะไปแตกแขนงต่อเป็น Right subclavian และ Right common carotid) 2. Left common carotid artery (ไปเลี้ยงศีรษะและสมองด้านซ้าย) 3. Left subclavian artery (ไปเลี้ยงแขนซ้าย)',
    system: systemName,
    topic: 'Major Arteries & Systemic Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 59,
    tags: ['aortic-arch', 'brachiocephalic-trunk', 'carotid', 'subclavian'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-070',
    questionText: 'หลอดเลือดโครงสร้างวงแหวนหลอดเลือดแดงที่ฐานสมอง (Cerebral arterial circle หรือ Circle of Willis) เกิดจากการเชื่อมประสานกัน (Anastomosis) ระหว่างระบบหลอดเลือดคู่ใด?',
    options: {
      A: 'Internal Carotid arteries (ผ่าน Anterior cerebral & Anterior communicating) กับ Vertebral arteries (ผ่าน Basilar, Posterior cerebral & Posterior communicating)',
      B: 'External Carotid arteries กับ Subclavian arteries',
      C: 'Facial arteries กับ Maxillary arteries',
      D: 'Jugular veins กับ Superior sagittal sinus'
    },
    correctOption: 'A',
    explanation: 'Circle of Willis ตั้งอยู่ที่ฐานสมองรอบ Pituitary gland และ Optic chiasm เกิดจากการเชื่อมต่อกันระหว่างระบบ Internal Carotid (Anterior circulation) กับระบบ Vertebrobasilar (Posterior circulation) ผ่าน Anterior communicating artery และคู่ของ Posterior communicating arteries ทำหน้าที่เป็น Collateral circulation ป้องกันเนื้อสมองขาดเลือด',
    system: systemName,
    topic: 'Major Arteries & Systemic Circulation',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 60,
    tags: ['circle-of-willis', 'internal-carotid', 'vertebral-artery'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-071',
    questionText: 'Baroreceptors ที่ทำหน้าที่ตรวจจับการเปลี่ยนแปลงของความดันโลหิต (Blood pressure sensors) และส่งสัญญาณประสาทไปควบคุมที่ศูนย์ในก้านสมอง (Medulla oblongata) ตั้งอยู่ที่ตำแหน่งทางกายวิภาคใดบ้าง?',
    options: {
      A: 'Carotid sinus (ที่โคนของ Internal carotid artery) และ Aortic arch',
      B: 'Subclavian vein และ Jugular bulb',
      C: 'Apex of heart และ Left atrium',
      D: 'Femoral artery และ Popliteal artery'
    },
    correctOption: 'A',
    explanation: 'Baroreceptors เป็น Mechanoreceptors ตรวจจับแรงตึงผนังหลอดเลือด ตั้งอยู่ที่ Carotid sinus (ส่งสัญญาณผ่าน Glossopharyngeal nerve: CN IX) และ Aortic arch (ส่งสัญญาณผ่าน Vagus nerve: CN X) ไปยัง Nucleus tractus solitarius (NTS) ใน Medulla เพื่อควบคุมความดันโลหิตผ่าน Baroreceptor reflex',
    system: systemName,
    topic: 'Blood Vessels Anatomy & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 61,
    tags: ['baroreceptors', 'carotid-sinus', 'aortic-arch', 'cn-ix', 'cn-x'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-072',
    questionText: 'หลอดเลือดแดง Abdominal Aorta จะสิ้นสุดลงที่ระดับกระดูกสันหลังระดับใด โดยแยกแขนงออกเป็นหลอดเลือดคู่ใด?',
    options: {
      A: 'ระดับกระดูกสันหลังส่วนเอวข้อที่ 4 (L4) โดยแยกออกเป็น Right and Left Common Iliac arteries',
      B: 'ระดับกระดูกสันหลังส่วนอกข้อที่ 12 (T12) แยกเป็น Renal arteries',
      C: 'ระดับกระดูกสันหลังส่วนเอวข้อที่ 1 (L1) แยกเป็น Femoral arteries',
      D: 'ระดับกระดูกกระเบนเหน็บข้อที่ 1 (S1) แยกเป็น Internal iliac arteries'
    },
    correctOption: 'A',
    explanation: 'Abdominal aorta ทอดผ่านกะบังลมที่ระดับ T12 (Aortic hiatus) ลงมาจนถึงระดับกระดูกสันหลังระดับ L4 (แนวระนาบของ Iliac crest) จากนั้นจะสิ้นสุดโดยแยกออกเป็น 2 แขนงใหญ่คือ Right Common Iliac Artery และ Left Common Iliac Artery เพื่อไปเลี้ยงเชิงกรานและขาทั้งสองข้าง',
    system: systemName,
    topic: 'Major Arteries & Systemic Circulation',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 62,
    tags: ['abdominal-aorta', 'bifurcation-l4', 'common-iliac'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-073',
    questionText: 'ในระบบไหลเวียนพอร์ทัลของตับ (Hepatic Portal System) หลอดเลือดดำ Hepatic Portal Vein เกิดจากการรวมตัวกันของหลอดเลือดดำใหญ่คู่ใดทางด้านหลังของคอตับอ่อน?',
    options: {
      A: 'Superior Mesenteric Vein (SMV) และ Splenic Vein',
      B: 'Inferior Vena Cava และ Hepatic Vein',
      C: 'Renal Vein และ Femoral Vein',
      D: 'Internal Iliac Vein และ External Iliac Vein'
    },
    correctOption: 'A',
    explanation: 'Hepatic Portal Vein เกิดจากการรวมตัวกันของ Superior Mesenteric Vein (นำเลือดที่มีสารอาหารจากลำไส้เล็กและลำไส้ใหญ่ส่วนต้น) กับ Splenic Vein (ซึ่งรับ Inferior Mesenteric Vein มาก่อนหน้า) ทางด้านหลัง Neck of Pancreas แล้วนำเลือดเข้าสู่ตับเพื่อประมวลผลสารอาหารและกำจัดสารพิษ',
    system: systemName,
    topic: 'Major Veins & Portal System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 64,
    tags: ['hepatic-portal-system', 'smv', 'splenic-vein'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-074',
    questionText: 'เลือดจากระบบ Hepatic Portal System หลังจากผ่านการแลกเปลี่ยนสารและกรองใน Sinusoids ของตับแล้ว จะไหลออกจากเนื้อตับเข้าสู่ระบบไหลเวียนหลักผ่านหลอดเลือดใด?',
    options: {
      A: 'Hepatic veins (หลอดเลือดดำตับ 3 เส้นหลัก) เพื่อเทเข้าสู่ Inferior Vena Cava (IVC)',
      B: 'Celiac trunk เพื่อเทเข้าสู่ Aorta',
      C: 'Bile duct เพื่อเทเข้าสู่ถุงน้ำดี',
      D: 'Portal triad เพื่อเทกลับสู่กระเพาะอาหาร'
    },
    correctOption: 'A',
    explanation: 'เส้นทางไหลของเลือดในตับ: Portal vein + Hepatic artery -> Liver sinusoids (สัมผัส Hepatocytes และ Kupffer cells) -> Central vein -> Hepatic veins (Right, Middle, Left) -> เทเข้าสู่ Inferior Vena Cava (IVC) บริเวณใต้กะบังลม เพื่อกลับสู่หัวใจห้องบนขวา',
    system: systemName,
    topic: 'Major Veins & Portal System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 65,
    tags: ['hepatic-veins', 'liver-sinusoids', 'ivc'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-075',
    questionText: 'หลอดเลือดดำที่อยู่ตื้นบริเวณข้อพับแขน (Cubital fossa) ที่แพทย์และพยาบาลนิยมใช้ในการเจาะเก็บตัวอย่างเลือดส่งตรวจ (Venipuncture) และการให้สารน้ำทางหลอดเลือดมากที่สุดคือหลอดเลือดใด?',
    options: {
      A: 'Median Cubital Vein (ซึ่งเชื่อมระหว่าง Cephalic vein กับ Basilic vein)',
      B: 'Brachial artery',
      C: 'Great saphenous vein',
      D: 'Subclavian vein'
    },
    correctOption: 'A',
    explanation: 'Median Cubital Vein อยู่ในชั้นตื้นใต้ผิวหนังบริเวณ Cubital fossa เชื่อมระหว่าง Cephalic vein (ด้าน Lateral) กับ Basilic vein (ด้าน Medial) เป็นตำแหน่งยอดนิยมที่สุดในการเจาะเลือด (Venipuncture) เนื่องจากขนาดใหญ่ อยู่ตื้น และถูกตรึงด้วย Bicipital aponeurosis ทำให้ไม่เลื่อนหลุดง่าย',
    system: systemName,
    topic: 'Major Veins & Portal System',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 63,
    tags: ['median-cubital-vein', 'venipuncture', 'cubital-fossa'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 76-100: Lymphatic System, Lymph Nodes, Spleen, Thymus & Drainage
  {
    id: 'CARDIO-076',
    questionText: 'หลอดน้ำเหลืองฝอย (Lymphatic capillaries) มีลักษณะโครงสร้างทางกายวิภาคพิเศษที่แตกต่างจากหลอดเลือดฝอยของระบบไหลเวียนโลหิตอย่างไร?',
    options: {
      A: 'มีปลายปิดตัน (Blind-ended) ผนังเซลล์ Endothelial เรียงซ้อนเกยกันคล้ายกระเบื้องมุงหลังคาเกิดเป็น Minivalves เปิดทิศทางเดียว และมี Anchoring filaments ยึดกับคอลลาเจนในเนื้อเยื่อ',
      B: 'มีปลายเปิดเชื่อมต่อโดยตรงกับหลอดเลือดแดง Arterioles',
      C: 'มีผนังกล้ามเนื้อหนากว่าหลอดเลือดแดงเพื่อปั๊มน้ำเหลือง',
      D: 'มีรูพรุนขนาดใหญ่ที่ยอมให้เม็ดเลือดแดงผ่านได้ตลอดเวลา'
    },
    correctOption: 'A',
    explanation: 'Lymphatic capillaries มีปลายปิดตัน (Blind-ended tubes) แทรกอยู่ในช่องว่างระหว่างเซลล์ เซลล์ Endothelium เกยซ้อนกันกลายเป็น One-way minivalves เมื่อแรงดันของเหลวใน Interstitial fluid สูงขึ้นจะดันให้ลิ้นเปิดยอมให้ของเหลว โปรตีน แบคทีเรียเข้าสู่ท่อได้ โดยมี Anchoring filaments ช่วยยึดไม่ให้ท่อแฟบ',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 68,
    tags: ['lymphatic-capillaries', 'blind-ended', 'minivalves', 'anchoring-filaments'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-077',
    questionText: 'หลอดน้ำเหลืองพิเศษที่พบในชั้น Mucosa ของวิลไล (Villi) ในลำไส้เล็ก ทำหน้าที่ดูดซึมไขมันและสารอาหารที่ละลายในไขมันในรูปของไคโลไมครอน (Chylomicrons) มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Lacteals (หลอดน้ำเหลืองแล็กทีล)',
      B: 'Peyer\'s patches',
      C: 'Crypts of Lieberkühn',
      D: 'Brunner\'s glands'
    },
    correctOption: 'A',
    explanation: 'Lacteals เป็นหลอดน้ำเหลืองฝอยปลายตันขนาดใหญ่ที่อยู่ในแกนกลางของแต่ละ Villi ในลำไส้เล็ก ทำหน้าที่ดูดซึมไขมันที่ย่อยแล้วในรูป Chylomicrons ทำให้น้ำเหลืองที่ไหลออกมามีลักษณะขุ่นขาวคล้ายน้ำนม เรียกว่า Chyle',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 69,
    tags: ['lacteals', 'chyle', 'fat-absorption', 'small-intestine'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-078',
    questionText: 'ท่อน้ำเหลืองขนาดใหญ่ที่สุดในร่างกายคือ Thoracic Duct มีจุดกำเนิดทางกายวิภาคเริ่มต้นมาจากถุงพักน้ำเหลืองรูปกระเปาะบริเวณช่องท้องส่วนบนชื่อว่าอะไร และอยู่ที่ระดับกระดูกสันหลังใด?',
    options: {
      A: 'Cisterna Chyli ซึ่งตั้งอยู่ด้านหน้าของกระดูกสันหลังระดับ L1 - L2',
      B: 'Chyle pouch ที่ระดับ T4',
      C: 'Thoracic sinus ที่ระดับ T12',
      D: 'Spleen hilum ที่ระดับ L4'
    },
    correctOption: 'A',
    explanation: 'Thoracic duct เริ่มต้นจากกระเปาะพักน้ำเหลืองขนาดใหญ่ชื่อ Cisterna chyli ซึ่งตั้งอยู่ด้านหน้าของกระดูกสันหลังส่วนเอว L1-L2 ทำหน้าที่รวบรวมน้ำเหลืองจากลำตัวส่วนล่าง ขาทั้งสองข้าง และอวัยวะในช่องท้อง ก่อนจะทอดตัวขึ้นสู่ช่องอกผ่าน Aortic hiatus ของกะบังลม',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 70,
    tags: ['cisterna-chyli', 'thoracic-duct', 'l1-l2'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-079',
    questionText: 'ท่อน้ำเหลือง Thoracic Duct ทำหน้าที่รวบรวมน้ำเหลืองจากบริเวณใดของร่างกาย และนำน้ำเหลืองกลับเข้าสู่ระบบไหลเวียนโลหิตดำที่ตำแหน่งใด?',
    options: {
      A: 'รวบรวมน้ำเหลืองจากร่างกายประมาณ 3 ใน 4 ส่วน (ขาทั้งสองข้าง, ช่องท้อง, ทรวงอกซ้าย, แขนซ้าย, ศีรษะและคอด้านซ้าย) เทเข้าสู่รอยต่อระหว่าง Left Internal Jugular Vein และ Left Subclavian Vein',
      B: 'รวบรวมน้ำเหลืองจากแขนขวาและศีรษะขวา เทเข้า Right Subclavian vein',
      C: 'รวบรวมน้ำเหลืองจากศีรษะทั้งหมดเทเข้า Superior vena cava โดยตรง',
      D: 'รวบรวมน้ำเหลืองเฉพาะจากช่องท้องเทเข้าสู่ Hepatic portal vein'
    },
    correctOption: 'A',
    explanation: 'Thoracic duct รวบรวมน้ำเหลืองจาก 75% ของร่างกาย (ครึ่งล่างทั้งหมด + ครึ่งบนซีกซ้าย) แล้วนำไปเทเข้าสู่กระแสเลือดดำที่ Junction ระหว่าง Left Internal Jugular vein และ Left Subclavian vein (Left venous angle)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 70,
    tags: ['thoracic-duct', 'left-venous-angle', 'lymphatic-drainage'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-080',
    questionText: 'ท่อน้ำเหลือง Right Lymphatic Duct ทำหน้าที่รวบรวมน้ำเหลืองจากบริเวณใดของร่างกาย และนำเข้าสู่ระบบหลอดเลือดดำที่ตำแหน่งใด?',
    options: {
      A: 'รวบรวมน้ำเหลืองจากร่างกายส่วนบนซีกขวา (แขนขวา, ทรวงอกซีกขวา, ศีรษะและคอซีกขวา) เทเข้าสู่รอยต่อระหว่าง Right Internal Jugular Vein และ Right Subclavian Vein',
      B: 'รวบรวมน้ำเหลืองจากขาทั้งสองข้างเทเข้าสู่ Inferior vena cava',
      C: 'รวบรวมน้ำเหลืองจากลำไส้เล็กและตับเทเข้าสู่ Right atrium',
      D: 'รวบรวมน้ำเหลืองจากทั่วร่างกายยกเว้นศีรษะ'
    },
    correctOption: 'A',
    explanation: 'Right Lymphatic Duct มีความยาวเพียงประมาณ 1-2 ซม. รับน้ำเหลืองจากร่างกายเพียง 25% (ศีรษะและคอด้านขวา, แขนขวา, ทรวงอกด้านขวา และปอดขวา) แล้วเทเข้าสู่ Right venous angle (รอยต่อระหว่าง Right internal jugular vein และ Right subclavian vein)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 70,
    tags: ['right-lymphatic-duct', 'right-venous-angle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-081',
    questionText: 'ผู้ป่วยหญิงได้รับการผ่าตัดเต้านมข้างขวาพร้อมเลาะต่อมน้ำเหลืองบริเวณรักแร้ออกทั้งหมด (Axillary lymph node dissection) ต่อมาเกิดภาวะแขนขวาบวมโตเรื้อรัง (Lymphedema) พยาธิกำเนิดของภาวะนี้เกิดจากกลไกทางกายวิภาคใด?',
    options: {
      A: 'การอุดกั้นหรือถูกทำลายของท่อและต่อมน้ำเหลือง ทำให้ของเหลวและโปรตีนในช่องว่างระหว่างเซลล์ไม่สามารถระบายกลับเข้าสู่ระบบไหลเวียนได้ เกิดการสะสมของของเหลวที่มีโปรตีนสูงในเนื้อเยื่อ',
      B: 'การฉีกขาดของหลอดเลือดแดง Brachial artery',
      C: 'การทำงานผิดปกติของลิ้นหัวใจ Tricuspid',
      D: 'การติดเชื้อไวรัสในไขกระดูก'
    },
    correctOption: 'A',
    explanation: 'Lymphedema เกิดจากการขัดขวางทางเดินน้ำเหลือง (Lymphatic obstruction) จากการผ่าตัดหรือฉายรังสี ทำให้ Lymphatic drainage จากแขนหยุดชะงัก โปรตีนและของเหลวคั่งค้างใน Interstitial space ดึงน้ำไว้ตามแรงดึงออสโมติก เกิดอาการบวมตึงเรื้อรังของรยางค์ข้างนั้น',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 71,
    tags: ['lymphedema', 'axillary-dissection', 'lymphatic-obstruction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-082',
    questionText: 'โครงสร้างทางกายวิภาคของต่อมน้ำเหลือง (Lymph node) มีหลอดน้ำเหลืองนำน้ำเหลืองเข้าและออกจากต่อมในลักษณะใด?',
    options: {
      A: 'มี Afferent lymphatic vessels หลายท่อนำน้ำเหลืองเข้าทางด้านนูน (Convex surface) และมี Efferent lymphatic vessel เพียง 1-2 ท่อนำน้ำเหลืองออกทางรอยบุ๋ม (Hilum)',
      B: 'มี Efferent vessels หลายท่อนำเข้าทาง Hilum และ Afferent ท่อเดียวนำออก',
      C: 'มีเฉพาะหลอดเลือดแดงนำน้ำเหลืองเข้า และหลอดเลือดดำนำน้ำเหลืองออก',
      D: 'ไม่มีท่อน้ำเหลืองเข้าหรือออก น้ำเหลืองซึมผ่านแคปซูลโดยตรง'
    },
    correctOption: 'A',
    explanation: 'ต่อมน้ำเหลืองมีท่อน้ำเหลืองเข้า (Afferent lymphatic vessels) จำนวนมากเจาะผ่าน Capsule ด้านนูน แต่น้ำเหลืองที่ผ่านการกรองแล้วจะออกจากต่อมผ่านท่อน้ำเหลืองออก (Efferent lymphatic vessel) เพียง 1 หรือ 2 ท่อทางด้านเว้าหรือรอยบุ๋ม (Hilum) ซึ่งการมีท่อเข้าน้อยกว่าท่อออกช่วยชะลอการไหลให้น้ำเหลืองสัมผัสกับ Macrophages และ Lymphocytes ได้นานขึ้น',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 72,
    tags: ['lymph-node-anatomy', 'afferent-vs-efferent', 'hilum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-083',
    questionText: 'บริเวณชั้นนอกของต่อมน้ำเหลือง (Cortex) มีโครงสร้างทรงกลมที่เรียกว่า Lymphoid follicles (Lymphatic nodules) บริเวณตรงกลางของ Follicle ที่ย้อมติดสีจางเรียกว่า Germinal center เป็นแหล่งที่มีการแบ่งตัวและพัฒนาของเซลล์เม็ดเลือดชนิดใด?',
    options: {
      A: 'B-lymphocytes ที่กำลังแบ่งตัวและพัฒนาไปเป็น Plasma cells และ Memory B cells หลังจากสัมผัสแอนติเจน',
      B: 'T-lymphocytes ที่กำลังเจริญเต็มวัย',
      C: 'เม็ดเลือดแดง Erythroblasts ที่กำลังสร้างฮีโมโกลบิน',
      D: 'เกล็ดเลือด Megakaryocytes'
    },
    correctOption: 'A',
    explanation: 'Germinal centers ในชั้น Cortex ของต่อมน้ำเหลือง เป็นบริเวณที่มีการแบ่งตัวอย่างรวดเร็ว (Proliferation) ของ B-lymphocytes เพื่อเปลี่ยนสภาพเป็น Plasma cells ทำหน้าที่สร้างแอนติบอดี และสร้าง Memory B cells เพื่อจดจำเชื้อโรค ส่วน T-lymphocytes จะพบหนาแน่นในบริเวณ Paracortex (Deep cortex)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 73,
    tags: ['germinal-center', 'b-lymphocytes', 'lymph-node-histology'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-084',
    questionText: 'ม้าม (Spleen) เป็นอวัยวะน้ำเหลืองขนาดใหญ่ที่สุดในร่างกาย ตั้งอยู่ในช่องท้องส่วนบนซ้าย ใต้กะบังลม เนื้อเยื่อของม้ามแบ่งออกเป็น White pulp และ Red pulp บริเวณ White pulp มีลักษณะทางเนื้อเยื่อและหน้าที่อย่างไร?',
    options: {
      A: 'ประกอบด้วยกลุ่มเซลล์เม็ดเลือดขาว Lymphocytes ล้อมรอบหลอดเลือดแดง Central arterioles (PALS) ทำหน้าที่ในระบบภูมิคุ้มกันในการดักจับและตอบสนองต่อแอนติเจนในกระแสเลือด',
      B: 'ประกอบด้วยหลอดเลือดฝอยไซนูซอยด์บรรจุเม็ดเลือดแดงจำนวนมากเพื่อกักเก็บเลือดสำรอง',
      C: 'ทำหน้าที่สร้างน้ำดีและเอนไซม์ย่อยโปรตีน',
      D: 'ประกอบด้วยไขมันสีน้ำตาลทำหน้าที่สร้างความร้อน'
    },
    correctOption: 'A',
    explanation: 'White pulp ของม้ามประกอบด้วยเนื้อเยื่อน้ำเหลืองที่มี T-cells ล้อมรอบ Central arteriole เรียกว่า Periarteriolar Lymphoid Sheath (PALS) และมี Lymphoid follicles ที่อุดมด้วย B-cells ทำหน้าที่ตรวจจับเชื้อโรคและแอนติเจนที่ไหลเวียนมาในกระแสเลือดโดยตรง',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 74,
    tags: ['spleen', 'white-pulp', 'pals', 'immune-function'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-085',
    questionText: 'เนื้อเยื่อส่วน Red pulp ของม้ามประกอบด้วย Splenic cords (Cords of Billroth) และ Splenic sinusoids ทำหน้าที่หลักที่สำคัญที่สุดทางสรีรวิทยาและกายวิภาคคือข้อใด?',
    options: {
      A: 'การตรวจกรองและทำลายเม็ดเลือดแดงที่แก่ชรา หมดอายุขัย (มากกว่า 120 วัน) หรือมีความผิดปกติทางสัณฐานวิทยา โดยอาศัยเซลล์ Macrophages',
      B: 'การคัดเลือกและฝึกฝน T-lymphocytes ให้รู้จักแอนติเจนของตนเอง',
      C: 'การสร้างน้ำย่อยอะไมเลส',
      D: 'การกรองน้ำเหลืองที่มาจากระบบทางเดินอาหาร'
    },
    correctOption: 'A',
    explanation: 'Red pulp ของม้ามประกอบด้วยร่างแหเซลล์และเส้นใยเรติคูลาร์ (Cords of Billroth) เต็มไปด้วย Macrophages ทำหน้าที่เสมือนตะแกรงตรวจกรองเม็ดเลือดแดง เม็ดเลือดแดงที่แก่ (อายุ >120 วัน) ขาดความยืดหยุ่น หรือผิดรูป จะลอดผ่านช่อง Sinusoids ไม่ได้และถูก Macrophages จับกินและรีไซเคิลธาตุเหล็ก (Phagocytosis of aged RBCs)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 75,
    tags: ['red-pulp', 'cords-of-billroth', 'rbc-destruction', 'macrophages'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-086',
    questionText: 'ผู้ป่วยประสบอุบัติเหตุม้ามแตก (Splenic rupture) และได้รับการผ่าตัดตัดม้ามออก (Splenectomy) หลังการผ่าตัดผู้ป่วยจะมีความเสี่ยงสูงขึ้นต่อการติดเชื้อแบคทีเรียกลุ่มใดมากที่สุดตลอดชีวิต?',
    options: {
      A: 'Encapsulated bacteria (แบคทีเรียที่มีแคปซูลหุ้ม เช่น Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae)',
      B: 'Anaerobic bacteria ในลำไส้ใหญ่',
      C: 'แบคทีเรียในช่องปากที่ทำให้เกิดฟันผุ',
      D: 'พยาธิใบไม้ในตับ'
    },
    correctOption: 'A',
    explanation: 'ม้ามเป็นแหล่งสร้าง Opsonin, Properdin และแอนติบอดี IgM ที่สำคัญในการกำจัดแบคทีเรียที่มีแคปซูลหุ้ม (Encapsulated organisms) ผู้ที่ถูกตัดม้ามจึงสูญเสียกลไก Phagocytosis ใน Red pulp และเสี่ยงต่อภาวะ Overwhelming Post-Splenectomy Infection (OPSI) จากเชื้อ S. pneumoniae อย่างรุนแรงจนต้องฉีดวัคซีนป้องกัน',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 75,
    tags: ['splenectomy', 'encapsulated-bacteria', 'opsi', 'pneumococcus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-087',
    questionText: 'ต่อมไทมัส (Thymus gland) ตั้งอยู่ในช่องอกบริเวณ Superior และ Anterior mediastinum มีการเปลี่ยนแปลงตามช่วงอายุของมนุษย์อย่างไร?',
    options: {
      A: 'มีขนาดใหญ่และทำหน้าที่สูงสุดในวัยทารกและวัยเด็ก จากนั้นจะเริ่มฝ่อตัวลงเรื่อยๆ หลังเข้าสู่วัยเจริญพันธุ์ (Thymic involution) โดยเนื้อเยื่อน้ำเหลืองจะถูกแทนที่ด้วยเนื้อเยื่อไขมันและเนื้อเยื่อเกี่ยวพันในวัยผู้ใหญ่',
      B: 'มีขนาดเล็กมากในวัยเด็กและจะเจริญเติบโตขยายใหญ่สุดในวัยชรา',
      C: 'ไม่มีการเปลี่ยนแปลงขนาดตลอดช่วงอายุขัย',
      D: 'จะสลายตัวหมดสิ้นทันทีหลังคลอด 24 ชั่วโมง'
    },
    correctOption: 'A',
    explanation: 'ต่อมไทมัสมีขนาดใหญ่และกิจกรรมการสร้าง T-cells สูงสุดในช่วงทารกจนถึงวัยเด็ก เมื่อเข้าสู่วัยแรกรุ่น (Puberty) อิทธิพลของฮอร์โมนเพศจะทำให้ต่อมไทมัสค่อยๆ ฝ่อเล็กลง (Involution) เนื้อเยื่อน้ำเหลืองถูกแทนที่ด้วย Adipose tissue ในผู้สูงอายุ แต่ยังคงมีเซลล์ทำหน้าที่เหลืออยู่บางส่วน',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 76,
    tags: ['thymus', 'thymic-involution', 'age-changes'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-088',
    questionText: 'โครงสร้างจุลกายวิภาคที่มีลักษณะเป็นชั้นเซลล์เยื่อบุผิวเรียงตัวซ้อนกันเป็นวงกลมคล้ายหัวหอม (Concentric whorls of keratinized epithelial cells) ซึ่งพบเฉพาะในชั้น Medulla ของต่อมไทมัส คือข้อใด?',
    options: {
      A: 'Thymic corpuscles (Hassall\'s corpuscles)',
      B: 'Malpighian corpuscles',
      C: 'Peyer\'s patches',
      D: 'Germinal centers'
    },
    correctOption: 'A',
    explanation: 'Thymic (Hassall\'s) corpuscles เป็นโครงสร้างเอกลักษณ์ที่พบเฉพาะในชั้น Medulla ของต่อมไทมัส เกิดจาก Epithelioreticular cells ชนิด Type VI เรียงตัวซ้อนกันเป็นวงซ้อนคล้ายหัวหอม เชื่อว่าทำหน้าที่หลั่งไซโตไคน์ เช่น TSLP ในการคัดเลือก Regulatory T cells',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 76,
    tags: ['hassalls-corpuscles', 'thymus-medulla', 'epithelioreticular-cells'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-089',
    questionText: 'ต่อมทอนซิลคู่ใดที่มีขนาดใหญ่ที่สุด ตั้งอยู่บริเวณโพรงปากด้านหลังระหว่าง Palatoglossal arch และ Palatopharyngeal arch ซึ่งมักเกิดการอักเสบเป็นหนองบ่อยที่สุด (Acute tonsillitis)?',
    options: {
      A: 'Palatine tonsils (ต่อมทอนซิลพาลาไทน์)',
      B: 'Pharyngeal tonsil (Adenoid)',
      C: 'Lingual tonsils',
      D: 'Tubal tonsils'
    },
    correctOption: 'A',
    explanation: 'Palatine tonsils ตั้งอยู่ใน Tonsillar fossa บริเวณ Oropharynx ระหว่าง Palatoglossal arch ด้านหน้าและ Palatopharyngeal arch ด้านหลัง เป็นต่อมทอนซิลคู่ที่พบการติดเชื้อและการอักเสบบ่อยที่สุด และเป็นตำแหน่งที่ทำผ่าตัด Tonsillectomy',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 77,
    tags: ['palatine-tonsils', 'tonsillitis', 'tonsillar-fossa'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-090',
    questionText: 'ในเด็กที่มีต่อมน้ำเหลืองบริเวณ Nasopharynx โตมากผิดปกติ จนอุดกั้นทางเดินหายใจส่วนบนทำให้ต้องหายใจทางปากและนอนกรน ต่อมน้ำเหลืองที่มีปัญหาดังกล่าวคือต่อมใด?',
    options: {
      A: 'Pharyngeal tonsil (ซึ่งเมื่อโตผิดปกติจะเรียกว่า Adenoids)',
      B: 'Palatine tonsils',
      C: 'Lingual tonsils',
      D: 'Submandibular lymph node'
    },
    correctOption: 'A',
    explanation: 'Pharyngeal tonsil ตั้งอยู่ที่ผนังด้านหลังบนของ Nasopharynx เมื่อเกิดการอักเสบหรือขยายขนาดโตขึ้นจะเรียกว่า Adenoids ส่งผลให้อุดกั้นโพรงจมูกด้านหลัง เด็กต้องหายใจทางปาก เกิด Adenoid hypertrophy นอนกรน และอาจเกิดภาวะ Obstructive sleep apnea (OSA)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 77,
    tags: ['pharyngeal-tonsil', 'adenoids', 'nasopharynx'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-091',
    questionText: 'วงแหวนของเนื้อเยื่อน้ำเหลืองที่เรียงตัวล้อมรอบทางเข้าสู่ระบบทางเดินหายใจและทางเดินอาหารในคอหอย (Pharynx) เพื่อดักจับเชื้อโรคที่เข้าสู่ร่างกายทางปากและจมูก มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Waldeyer\'s tonsillar ring',
      B: 'Circle of Willis',
      C: 'Annulus fibrosus',
      D: 'Peyer\'s ring'
    },
    correctOption: 'A',
    explanation: 'Waldeyer\'s ring ประกอบด้วยเนื้อเยื่อน้ำเหลือง 4 กลุ่มรอบคอหอย ได้แก่: 1. Pharyngeal tonsil (Adenoid) ด้านบน 2. Tubal tonsils สองข้าง 3. Palatine tonsils สองข้าง และ 4. Lingual tonsils ด้านล่างที่โคนลิ้น ทำหน้าที่เป็นด่านหน้าทางภูมิคุ้มกันดักจับเชื้อโรค',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 78,
    tags: ['waldeyers-ring', 'tonsils-pharynx'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-092',
    questionText: 'กลุ่มก้อนเนื้อเยื่อน้ำเหลืองชนิด Mucosa-Associated Lymphoid Tissue (MALT) ที่รวมตัวกันหนาแน่นเป็นหย่อมๆ ขนาดใหญ่ในชั้น Lamina propria และ Submucosa ของลำไส้เล็กส่วนปลาย (Ileum) มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Peyer\'s patches (Aggregated lymphoid nodules)',
      B: 'Brunner\'s glands',
      C: 'Islets of Langerhans',
      D: 'Hassall\'s corpuscles'
    },
    correctOption: 'A',
    explanation: 'Peyer\'s patches เป็นกลุ่มของ Lymphoid follicles ที่พบหนาแน่นที่สุดในชั้น Mucosa และ Submucosa ของลำไส้เล็กส่วน Ileum ทำหน้าที่เฝ้าระวังและป้องกันไม่ให้เชื้อแบคทีเรียจากลำไส้ใหญ่รุกล้ำย้อนกลับเข้ามาในระบบทางเดินอาหารส่วนบน',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 78,
    tags: ['peyers-patches', 'ileum', 'malt'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-093',
    questionText: 'อวัยวะน้ำเหลืองปฐมภูมิ (Primary lymphoid organs) ซึ่งเป็นสถานที่กำเนิดและพัฒนาจนเจริญเต็มวัยของเซลล์ลิมโฟไซต์ประกอบด้วยอวัยวะใดบ้าง?',
    options: {
      A: 'Red bone marrow (ไขกระดูกแดง) และต่อม Thymus',
      B: 'ม้าม (Spleen) และต่อมน้ำเหลือง (Lymph nodes)',
      C: 'ต่อมทอนซิลและไส้ติ่ง',
      D: 'ตับและถุงน้ำดี'
    },
    correctOption: 'A',
    explanation: 'Primary lymphoid organs คืออวัยวะที่ Lymphocytes กำเนิดและพัฒนาจนกลายเป็น Immunocompetent cells ได้แก่ Red bone marrow (สำหรับ B cells) และ Thymus (สำหรับ T cells) ส่วนอวัยวะอื่น เช่น Lymph nodes, Spleen, Tonsils จัดเป็น Secondary lymphoid organs ที่เซลล์ไปทำหน้าที่ตอบสนองต่อแอนติเจน',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 67,
    tags: ['primary-lymphoid-organs', 'bone-marrow', 'thymus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-094',
    questionText: 'อวัยวะใดต่อไปนี้ในร่างกายมนุษย์ที่ไม่มีหลอดน้ำเหลืองฝอย (Lymphatic capillaries) อยู่เลยตามหลักกายวิภาค?',
    options: {
      A: 'ระบบประสาทส่วนกลาง (Central Nervous System: Brain and Spinal cord), กระดูก และกระจกตา (Cornea)',
      B: 'ผิวหนังและเนื้อเยื่อใต้ผิวหนัง',
      C: 'ปอดและกล้ามเนื้อหัวใจ',
      D: 'ลำไส้เล็กและลำไส้ใหญ่'
    },
    correctOption: 'A',
    explanation: 'เนื้อเยื่อที่ไม่มีท่อน้ำเหลือง (Avascular or specialized tissues) ได้แก่: กระจกตา (Cornea), กระดูกอ่อนโปร่งแสง (Hyaline cartilage), ระบบประสาทส่วนกลาง (CNS ซึ่งใช้น้ำไขสันหลัง CSF และ Glymphatic system แทน), ไขกระดูก และเนื้อเยื่อชั้นหนังกำพร้า (Epidermis)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 68,
    tags: ['avascular-tissues', 'no-lymphatics', 'cns', 'cornea'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-095',
    questionText: 'ต่อมน้ำเหลืองบริเวณใดที่ทำหน้าที่รับน้ำเหลืองจากเต้านม (ประมาณ 75%) และเป็นตำแหน่งที่เซลล์มะเร็งเต้านมมักแพร่กระจายไปถึงเป็นด่านแรก (Sentinel lymph nodes)?',
    options: {
      A: 'Axillary lymph nodes (ต่อมน้ำเหลืองบริเวณรักแร้)',
      B: 'Inguinal lymph nodes (ต่อมน้ำเหลืองขาหนีบ)',
      C: 'Cervical lymph nodes (ต่อมน้ำเหลืองที่คอ)',
      D: 'Mesenteric lymph nodes'
    },
    correctOption: 'A',
    explanation: 'น้ำเหลืองมากกว่า 75% จากเนื้อเต้านมจะระบายไปยัง Axillary lymph nodes (กลุ่ม Pectoral, Central, Lateral, Subscapular และ Apical) ดังนั้นในการวินิจฉัยและรักษามะเร็งเต้านม จึงต้องมีการตรวจประเมินต่อมน้ำเหลืองรักแร้ (Sentinel node biopsy) เพื่อดูการแพร่กระจายของมะเร็ง',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 71,
    tags: ['breast-lymphatic-drainage', 'axillary-nodes', 'sentinel-node'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-096',
    questionText: 'ต่อมน้ำเหลืองบริเวณเหนือกระดูกไหปลาร้าซ้ายที่โตและคลำได้ก้อนแข็งไม่เจ็บ (Virchow\'s node หรือ Troisier\'s sign) มีความสำคัญทางคลินิกอย่างไร?',
    options: {
      A: 'บ่งชี้ถึงการแพร่กระจายของมะเร็งในช่องท้อง (เช่น มะเร็งกระเพาะอาหาร หรือมะเร็งตับอ่อน) ผ่านทาง Thoracic duct',
      B: 'บ่งชี้ถึงการติดเชื้อไวรัสหวัดธรรมดาในโพรงจมูก',
      C: 'บ่งชี้ถึงภาวะกระดูกไหปลาร้าหัก',
      D: 'บ่งชี้ถึงการแพร่กระจายของมะเร็งสมองส่วนหน้า'
    },
    correctOption: 'A',
    explanation: 'Virchow\'s node (Supraclavicular lymph node ด้านซ้าย) อยู่ใกล้จุดบรรจบของ Thoracic duct เข้าสู่ Left subclavian vein เมื่อมีมะเร็งในช่องท้องหรืออุ้งเชิงกราน (โดยเฉพาะ Gastric cancer) เซลล์มะเร็งจะหลุดลอยมาตาม Thoracic duct และมาสะสมโตที่ต่อมน้ำเหลืองนี้ เรียกว่า Troisier\'s sign',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 71,
    tags: ['virchows-node', 'gastric-cancer', 'troisiers-sign', 'thoracic-duct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-097',
    questionText: 'การเคลื่อนที่ของน้ำเหลืองภายในหลอดน้ำเหลือง (Lymph flow) ให้ไหลไปข้างหน้าเข้าสู่ระบบหลอดเลือดดำ อาศัยปัจจัยผลักดันทางสรีรวิทยาใดเป็นหลัก?',
    options: {
      A: 'การบีบตัวของกล้ามเนื้อลายรอบข้าง, การเต้นตุบๆ ของหลอดเลือดแดงข้างเคียง, แรงดันลบในช่องอกขณะหายใจเข้า, การหดตัวของกล้ามเนื้อเรียบในผนังท่อน้ำเหลือง และลิ้นเปิดปิดทิศทางเดียวภายในท่อ',
      B: 'แรงสูบฉีดโดยตรงจากหัวใจห้องล่างซ้าย',
      C: 'แรงดันแรงโน้มถ่วงของโลกเพียงอย่างเดียว',
      D: 'แรงดันของอากาศภายนอกร่างกาย'
    },
    correctOption: 'A',
    explanation: 'เนื่องจากระบบน้ำเหลืองไม่มีปั๊มหัวใจของตนเอง การไหลจึงอาศัย: 1. ลิ้นภายในท่อ (Lymphatic valves) บังคับไหลทางเดียว 2. กล้ามเนื้อลายบีบตัว (Skeletal muscle pump) 3. Pulsation ของหลอดเลือดแดงที่ทอดคู่กัน 4. Respiratory pump ในช่องอก 5. การบีบตัวเป็นจังหวะของกล้ามเนื้อเรียบในผนังท่อน้ำเหลืองใหญ่ (Lymphangion contraction)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 69,
    tags: ['lymph-propulsion', 'valves', 'lymphangion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-098',
    questionText: 'โรคเท้าช้าง (Lymphatic Filariasis / Elephantiasis) เกิดจากการติดเชื้อพยาธิตัวกลมชนิด Wuchereria bancrofti เข้าไปอาศัยและทำให้เกิดพยาธิสภาพที่อวัยวะใดของระบบน้ำเหลือง?',
    options: {
      A: 'พยาธิตัวเต็มวัยอาศัยและอุดกั้นหลอดน้ำเหลืองและต่อมน้ำเหลือง (โดยเฉพาะบริเวณขาหนีบ Inguinal nodes) ทำให้เกิดการอักเสบเรื้อรัง พังผืด และน้ำเหลืองคั่งบวมจนขยายขนาดผิดรูป',
      B: 'พยาธิเข้าไปทำลายเซลล์เม็ดเลือดแดงในม้าม',
      C: 'พยาธิเข้าไปกัดกินเยื่อหุ้มหัวใจ Pericardium',
      D: 'พยาธิเข้าไปอุดกั้นลิ้นหัวใจ Mitral valve'
    },
    correctOption: 'A',
    explanation: 'Wuchereria bancrofti มีรังโรคในระบบน้ำเหลือง ตัวพยาธิที่โตเต็มวัยจะอุดตันในท่อน้ำเหลืองและต่อมน้ำเหลือง (โดยเฉพาะ Inguinal lymph nodes) กระตุ้นปฏิกิริยาอักเสบ ก่อให้เกิด Fibrosis ขัดขวางการระบายน้ำเหลืองจากขากลับสู่ร่างกาย เกิดอาการบวมน้ำเหลืองรุนแรง (Elephantiasis) ผิวหนังหนาตัวและติดเชื้อซ้ำซ้อน',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 71,
    tags: ['filariasis', 'elephantiasis', 'wuchereria-bancrofti'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-099',
    questionText: 'ในระบบภูมิคุ้มกันของต่อมน้ำเหลือง เซลล์ทำหน้าที่กรองและเก็บกิน (Phagocytosis) สิ่งแปลกปลอม แบคทีเรีย และเซลล์มะเร็งที่ลอยมากับน้ำเหลืองก่อนที่น้ำเหลืองจะไหลออกจากต่อมคือเซลล์ชนิดใด?',
    options: {
      A: 'Macrophages (แมคโครฟาจ) ซึ่งเรียงตัวเกาะอยู่ตามผนังของ Lymphatic sinuses',
      B: 'Erythrocytes (เม็ดเลือดแดง)',
      C: 'Platelets (เกล็ดเลือด)',
      D: 'Adipocytes (เซลล์ไขมัน)'
    },
    correctOption: 'A',
    explanation: 'ภายใน Sinuses ของต่อมน้ำเหลือง (Subcapsular, Trabecular, และ Medullary sinuses) มีร่างแหเส้นใย Reticular fibers ที่มี Macrophages เกาะอยู่หนาแน่น เมื่อน้ำเหลืองไหลผ่านอย่างช้าๆ Macrophages จะทำหน้าที่ Phagocytosis ดักจับเศษซากเซลล์ จุลชีพ และอนุภาคแปลกปลอมได้มากกว่า 99% ก่อนน้ำเหลืองจะเข้าสู่หลอดน้ำเหลืองนำออก',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 73,
    tags: ['lymph-node-filtration', 'macrophages', 'sinuses'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO-100',
    questionText: 'ข้อใดสรุปหน้าที่หลัก 3 ประการของระบบน้ำเหลือง (Lymphatic System) ต่อร่างกายมนุษย์ได้อย่างถูกต้องและครบถ้วนสมบูรณ์ที่สุด?',
    options: {
      A: '1. รักษาสมดุลของเหลวในเนื้อเยื่อโดยนำ Fluid และโปรตีนส่วนเกินกลับสู่ระบบไหลเวียนโลหิต 2. ดูดซึมไขมันจากทางเดินอาหารผ่าน Lacteals 3. ทำหน้าที่ในระบบภูมิคุ้มกันดักจับเชื้อโรคและกระตุ้นการแบ่งตัวของ Lymphocytes',
      B: '1. สร้างเม็ดเลือดแดง 2. ขนส่งก๊าซคาร์บอนมอนอกไซด์ 3. ผลิตฮอร์โมนอินซูลิน',
      C: '1. ควบคุมอุณหภูมิร่างกาย 2. สร้างสารหล่อลื่นข้อต่อ 3. ผลิตกรดยูริก',
      D: '1. สูบฉีดเลือดด้วยแรงดันสูง 2. แลกเปลี่ยนก๊าซในถุงลม 3. ย่อยสลายโปรตีน'
    },
    correctOption: 'A',
    explanation: 'หน้าที่หลัก 3 ประการของระบบน้ำเหลือง: 1. Fluid balance (ดึงของเหลวส่วนเกินประมาณ 2-3 ลิตร/วัน และโปรตีนที่รั่วซึมจาก Capillaries กลับสู่กระแสเลือดดำ) 2. Lipid absorption (ดูดซึมไขมันและวิตามินละลายในไขมัน A, D, E, K จากลำไส้เล็กผ่าน Lacteals) 3. Defense/Immunity (กรองเชื้อโรคและเป็นแหล่งสร้าง/เพิ่มจำนวน B และ T lymphocytes)',
    system: systemName,
    topic: 'Lymphatic System & Organs',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 66,
    tags: ['lymphatic-functions', 'fluid-balance', 'lipid-absorption', 'immunity'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

module.exports = { part2 };
