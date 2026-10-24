/**
 * scripts/urinary_advanced_part2.cjs
 * Questions 51 - 100: Ureters, Bladder, Urethra Male vs Female, Micturition Reflex, Nephrolithiasis & Clinical Cases
 * Increased complexity by 20-30% with clinical vignettes and high-yield distractors
 */

const systemName = 'Urinary System';
const sourceFile = 'Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf';

const part2 = [
  // 51-65: Ureters Anatomy, Histology & Constriction Sites
  {
    id: 'URINARY-051',
    questionText: 'ท่อไต (Ureter) มีความยาวประมาณ 25-30 เซนติเมตร ทอดตัวลงสู่ช่องเชิงกรานในตำแหน่งใด และผนังของท่อไตประกอบด้วยชั้นเนื้อเยื่อ 3 ชั้นใดบ้าง?',
    options: {
      A: 'ทอดตัวอยู่ในช่องว่างหลังเยื่อบุช่องท้อง (Retroperitoneal) ผนังประกอบด้วย Mucosa (Transitional epithelium), Muscularis (Inner longitudinal, Outer circular), และ Adventitia',
      B: 'ทอดตัวในช่องท้องแบบ Intraperitoneal มีชั้น Serosa บุผิวนอก',
      C: 'ทอดตัวอยู่หน้ากระดูกอก ผนังประกอบด้วยกล้ามเนื้อลายล้วน',
      D: 'ทอดตัวอยู่ภายในหลอดเลือดดำ Vena cava'
    },
    correctOption: 'A',
    explanation: 'Ureter ทอดตัวอยู่ใน Retroperitoneum วางตัวบนกล้ามเนื้อ Psoas major ทอดข้าม Pelvic brim บริเวณ Bifurcation ของ Common iliac vessels ผนังมี 3 ชั้น: 1. Mucosa (Transitional epithelium / Urothelium ยืดหยุ่นได้ดี) 2. Muscularis (เรียงตัวตรงข้ามกับทางเดินอาหาร คือ วงในเป็นแนวยาว Inner longitudinal, วงนอกเป็นวงกลม Outer circular) 3. Adventitia',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 38,
    tags: ['ureter-anatomy', 'retroperitoneal', 'transitional-epithelium', 'ureter-muscularis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-052',
    questionText: 'น้ำปัสสาวะเดินทางจากกรวยไต (Renal pelvis) ลงสู่กระเพาะปัสสาวะผ่านท่อไต (Ureter) ได้อย่างไร โดยเฉพาะในท่านอนราบที่ไม่มีแรงโน้มถ่วงช่วยดึงดูด?',
    options: {
      A: 'การบีบรูดเป็นคลื่นของกล้ามเนื้อเรียบในผนังท่อไต (Peristaltic contractions) ร่วมกับแรงดันอุทกสถิตของน้ำปัสสาวะ',
      B: 'แรงสูบฉีดจากหัวใจโดยตรง',
      C: 'การไหลตามแรงโน้มถ่วงของโลกเพียงอย่างเดียว',
      D: 'การทำงานของ Cilia ในท่อไต'
    },
    correctOption: 'A',
    explanation: 'Ureter มีเซลล์ Pacemaker ใน Renal pelvis ที่สร้างสัญญาณไฟฟ้ากระตุ้นให้เกิดคลื่นบีบรูด Peristalsis ของกล้ามเนื้อเรียบในผนังท่อไตทุกๆ 10-30 วินาที คลื่นนี้จะบีบดันปัสสาวะเป็นช่วงๆ (Squirts) ลงสู่กระเพาะปัสสาวะ ทำให้ปัสสาวะไหลได้ตามปกติแม้ในท่านอนหงายหรือในสภาวะแรงโน้มถ่วงเป็นศูนย์',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 38,
    tags: ['ureteric-peristalsis', 'urine-propulsion', 'smooth-muscle-waves'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-053',
    questionText: 'ท่อไต (Ureter) มีจุดคอดแคบตามธรรมชาติทางกายวิภาค 3 ตำแหน่ง (Three physiological constrictions) ซึ่งเป็นจุดที่ก้อนนิ่วในไตมักเลื่อนมาติดค้างและทำให้เกิดอาการปวดเกร็งรุนแรง (Renal colic) ตำแหน่งทั้งสามได้แก่บริเวณใดบ้าง?',
    options: {
      A: '1. Ureteropelvic junction (UPJ รอยต่อกรวยไตกับท่อไต) 2. Crossing of the pelvic brim / Iliac vessels (จุดข้ามขอบเชิงกรานและเส้นเลือดอีเลียก) 3. Ureterovesical junction (UVJ จุดเจาะทะลุเข้าผนังกระเพาะปัสสาวะ)',
      B: '1. ขั้วไต 2. สะดือ 3. รูเปิดทวารหนัก',
      C: '1. Renal papilla 2. Inguinal canal 3. Urethral orifice',
      D: '1. Subclavian crossing 2. Pylorus 3. Appendix'
    },
    correctOption: 'A',
    explanation: 'จุดคอดแคบ 3 จุดของ Ureter ที่พบนิ่วติดบ่อยที่สุด: 1. Ureteropelvic Junction (UPJ): จุดที่ Renal pelvis สอบเล็กลงกลายเป็น Ureter 2. Pelvic Brim: จุดที่ท่อไตทอดข้าม Common/External Iliac artery เข้าสู่ช่องเชิงกราน 3. Ureterovesical Junction (UVJ): จุดที่แคบที่สุด โดยท่อไตเจาะเฉียงผ่านผนังกล้ามเนื้อ Detrusor ของกระเพาะปัสสาวะ',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 39,
    tags: ['ureteric-constrictions', 'upj', 'pelvic-brim', 'uvj', 'renal-colic'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-054',
    questionText: 'กลไกทางกายวิภาคใดที่ช่วยป้องกันไม่ให้น้ำปัสสาวะจากกระเพาะปัสสาวะไหลย้อนกลับขึ้นสู่ท่อไตและไต (Vesicoureteral reflux: VUR) ในขณะที่กระเพาะปัสสาวะกำลังบีบตัวปัสสาวะออกอย่างรุนแรง?',
    options: {
      A: 'ท่อไตทอดตัวเจาะทะลุผนังกระเพาะปัสสาวะในแนวเฉียง (Oblique intramural tunnel) ทำให้เมื่อกระเพาะปัสสาวะเต็มหรือบีบตัว แรงดันในกระเพาะจะกดบีบปลายท่อไตให้แบนปิดสนิทเสมือนเป็นลิ้นทางเดียว (Physiological one-way valve)',
      B: 'มีลิ้นหัวใจ Tricuspid กั้นอยู่ที่ปลายท่อไต',
      C: 'มีกล้ามเนื้อหูรูดโครงกระดูกที่ควบคุมได้',
      D: 'ปัสสาวะมีความหนาแน่นสูงกว่าน้ำจึงไม่ลอยขึ้น'
    },
    correctOption: 'A',
    explanation: 'Ureter วิ่งเจาะทะลุผนังกล้ามเนื้อกระเพาะปัสสาวะในแนวเฉียง (Oblique intramural course ยาวประมาณ 1.5-2 ซม.) เมื่อกระเพาะปัสสาวะเต็มไปด้วยปัสสาวะ หรือในขณะกล้ามเนื้อ Detrusor บีบตัวขับถ่าย แรงดันภายในกระเพาะจะกดเบียดปลายท่อไตส่วน Intramural ให้แบนแนบสนิท ป้องกันไม่ให้ปัสสาวะไหลย้อนกลับ (Vesicoureteral reflux: VUR) ซึ่งช่วยป้องกันการติดเชื้อกรวยไตอักเสบ (Pyelonephritis)',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 39,
    tags: ['oblique-intramural-tunnel', 'vesicoureteral-reflux', 'one-way-valve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-055',
    questionText: 'กระเพาะปัสสาวะ (Urinary Bladder) ตั้งอยู่ในช่องเชิงกราน (Pelvic cavity) มีความสัมพันธ์ทางกายวิภาคกับอวัยวะข้างเคียงในเพศชายและเพศหญิงแตกต่างกันอย่างไร?',
    options: {
      A: 'ในเพศชายตั้งอยู่ด้านหน้าของลำไส้ตรง (Rectum) และอยู่เหนือต่อมลูกหมาก (Prostate gland); ส่วนในเพศหญิงตั้งอยู่ด้านหน้าของมดลูก (Uterus) และช่องคลอด (Vagina)',
      B: 'ในเพศหญิงอยู่หลังมดลูก ส่วนในเพศชายอยู่ใต้ต่อมลูกหมาก',
      C: 'ทั้งสองเพศอยู่เหนือกระดูกเชิงกรานและติดกับตับ',
      D: 'ในเพศชายอยู่หลังทวารหนัก'
    },
    correctOption: 'A',
    explanation: 'กายวิภาคสัมพันธ์ของกระเพาะปัสสาวะ: ในเพศชาย ฐานกระเพาะปัสสาวะอยู่เหนือต่อมลูกหมาก (Prostate) และอยู่หน้าต่อ Rectum (มี Rectovesical pouch คั่น) ส่วนในเพศหญิง กระเพาะปัสสาวะอยู่ด้านหน้าและด้านล่างต่อมดลูก (Uterus) และผนังหน้าช่องคลอด (Vagina) โดยมี Vesicouterine pouch คั่น ทำให้เมื่อมดลูกขยายตัวขณะตั้งครรภ์จะกดเบียดกระเพาะปัสสาวะทำให้ปัสสาวะบ่อย',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 40,
    tags: ['bladder-anatomy', 'male-vs-female-pelvis', 'prostate', 'uterus-relation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-056',
    questionText: 'บริเวณรูปสามเหลี่ยมเรียบบริเวณฐานภายในของกระเพาะปัสสาวะ (Trigone of the urinary bladder) มีจุดมุมทั้งสาม (Three angles) สอดคล้องกับโครงสร้างรูเปิดใด?',
    options: {
      A: 'มุมบนสองข้างสอดคล้องกับรูเปิดของท่อไตทั้งสอง (Ureteral orifices) และมุมล่างหน้าสอดคล้องกับรูเปิดภายในของท่อปัสสาวะ (Internal urethral orifice)',
      B: 'รูเปิดของไตทั้งสองข้างกับรูทวารหนัก',
      C: 'รูเปิดของหลอดเลือดแดงสองเส้นกับรูเปิดหลอดเลือดดำ',
      D: 'รูเปิดของต่อมลูกหมากสามรู'
    },
    correctOption: 'A',
    explanation: 'Trigone เป็นพื้นที่รูปสามเหลี่ยมเรียบที่ฐานด้านล่างของกระเพาะปัสสาวะ ไม่มีรอยย่น Rugae: มุมบน-ซ้ายและมุมบน-ขวาเป็นรูเปิดของท่อไตทั้งสอง (Ureteral openings) เชื่อมกันด้วยสัน Interureteric crest และมุมล่างตรงกลางเป็นรูเปิดของท่อปัสสาวะ (Internal urethral orifice) บริเวณนี้มีความไวต่อการติดเชื้อและตรวจพบมะเร็งบ่อย',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 41,
    tags: ['trigone', 'ureteral-openings', 'internal-urethral-orifice'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-057',
    questionText: 'ผนังกล้ามเนื้อหนาของกระเพาะปัสสาวะประกอบด้วยกล้ามเนื้อเรียบ 3 ชั้นสานประสานกันเป็นร่างแหตาข่าย กล้ามเนื้อนี้มีชื่อเรียกว่าอะไร และมีบทบาทอย่างไรในการขับถ่ายปัสสาวะ?',
    options: {
      A: 'Detrusor muscle ทำหน้าที่คลายตัวเพื่อกักเก็บปัสสาวะ และหดตัวพร้อมกันทั้งผืนเพื่อบีบไล่น้ำปัสสาวะออกทางท่อปัสสาวะเมื่อได้รับการกระตุ้นจากระบบประสาทพาราซิมพาเทติก',
      B: 'Dartos muscle',
      C: 'Cremaster muscle',
      D: 'Pectinate muscle'
    },
    correctOption: 'A',
    explanation: 'Detrusor muscle ประกอบด้วยกล้ามเนื้อเรียบ 3 ชั้น (Inner longitudinal, Middle circular, Outer longitudinal) สานกันเป็นร่างแห เมื่อปัสสาวะสะสมเต็ม เส้นประสาท Parasympathetic (Pelvic splanchnic nerves S2-S4) จะกระตุ้น Muscarinic M3 receptors ทำให้ Detrusor บีบตัวพร้อมกันทุกทิศทางสร้างแรงดันขับปัสสาวะออกอย่างรวดเร็ว',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 42,
    tags: ['detrusor-muscle', 'bladder-smooth-muscle', 'parasympathetic-m3'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-058',
    questionText: 'เนื้อเยื่อบุผิว (Epithelium) ที่บุภายในกระเพาะปัสสาวะและท่อไตคือชนิดใด และมีคุณสมบัติพิเศษทางกายวิภาคศาสตร์อย่างไรในการรองรับการขยายตัว?',
    options: {
      A: 'Transitional epithelium (Urothelium) ซึ่งเซลล์ชั้นบนสุดเป็น Dome-shaped (Umbrella cells) ที่สามารถเลื่อนไถลและแบนลงเมื่อกระเพาะปัสสาวะขยายตัวรับน้ำปัสสาวะ',
      B: 'Simple squamous epithelium',
      C: 'Pseudostratified ciliated columnar epithelium',
      D: 'Stratified keratinized squamous epithelium'
    },
    correctOption: 'A',
    explanation: 'Transitional epithelium (Urothelium) เป็นเนื้อเยื่อบุผิวชนิดพิเศษที่พบเฉพาะในทางเดินปัสสาวะ (Calicos, Pelvis, Ureter, Bladder): เมื่อกระเพาะปัสสาวะแฟบ เซลล์ชั้นบนจะมีรูปโดมกลม (Umbrella cells) หนาประมาณ 5-6 ชั้น แต่เมื่อมีปัสสาวะเต็มขยายตึง เซลล์จะเลื่อนไถลปรับตัวแบนลงเหลือเพียง 2-3 ชั้นโดยไม่ฉีกขาด พร้อมกับมี Uroplakin plaques ป้องกันการรั่วซึมของปัสสาวะที่มีกรดและยูเรีย',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 43,
    tags: ['transitional-epithelium', 'urothelium', 'umbrella-cells', 'uroplakin'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-059',
    questionText: 'กระเพาะปัสสาวะของผู้ใหญ่ปกติมีความจุปัสสาวะเฉลี่ยประมาณเท่าใด และเมื่อมีปริมาตรปัสสาวะสะสมถึงประมาณเท่าใดจะเริ่มรู้สึกกระตุ้นให้ปวดปัสสาวะเป็นครั้งแรก (First urge to void)?',
    options: {
      A: 'มีความจุเฉลี่ยประมาณ 500 - 800 มิลลิลิตร และจะเริ่มส่งสัญญาณกระตุ้นความรู้สึกปวดปัสสาวะครั้งแรกเมื่อมีปริมาตรประมาณ 150 - 200 มิลลิลิตร',
      B: 'มีความจุ 100 มล. และเริ่มปวดเมื่อ 50 มล.',
      C: 'มีความจุ 3,000 มล. และเริ่มปวดเมื่อ 1,500 มล.',
      D: 'มีความจุ 50 มล. และเริ่มปวดเมื่อ 10 มล.'
    },
    correctOption: 'A',
    explanation: 'กระเพาะปัสสาวะมี Physiological capacity ประมาณ 400-500 มล. (และสามารถขยายรองรับได้สูงสุด 800-1,000 มล. ในภาวะกลั้น) โดย Stretch receptors บนผนัง Detrusor จะเริ่มส่งสัญญาณกระตุ้นการรับรู้เข้าสู่ไขสันหลังเมื่อมีปัสสาวะสะสมประมาณ 150-200 มล. (First urge) และจะรู้สึกปวดแน่นอย่างชัดเจนเมื่อถึง 300-400 มล.',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 42,
    tags: ['bladder-capacity', 'first-urge-to-void', 'micturition-threshold'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-060',
    questionText: 'ท่อปัสสาวะของเพศหญิง (Female urethra) มีความยาวทางกายวิภาคประมาณเท่าใด และลักษณะทางกายวิภาคนี้สัมพันธ์กับการเกิดโรคติดเชื้อในระบบทางเดินปัสสาวะ (Urinary Tract Infection: UTI) อย่างไร?',
    options: {
      A: 'ยาวเพียงประมาณ 3 - 5 เซนติเมตร (สั้นกว่าเพศชายมาก) และรูเปิดอยู่ใกล้กับช่องคลอดและทวารหนัก ทำให้เชื้อแบคทีเรีย (โดยเฉพาะ E. coli) สามารถเดินทางผ่านท่อปัสสาวะเข้าสู่กระเพาะปัสสาวะได้ง่าย ส่งผลให้เพศหญิงเป็นโรคกระเพาะปัสสาวะอักเสบ (Cystitis) ได้บ่อยกว่าเพศชาย',
      B: 'ยาวประมาณ 20 เซนติเมตร ทำให้ไม่เคยเกิดการติดเชื้อ',
      C: 'ยาวเท่ากับเพศชายพอดี',
      D: 'ท่อปัสสาวะสั้นทำให้ไม่สามารถกลั้นปัสสาวะได้'
    },
    correctOption: 'A',
    explanation: 'ท่อปัสสาวะเพศหญิงสั้นมาก (ยาวเพียง 3.5 - 4 ซม.) ทอดตรงจาก Bladder neck ไปเปิดที่ External urethral orifice ใน Vestibule ด้านหน้าต่อช่องคลอด ทางเดินที่สั้นร่วมกับตำแหน่งที่อยู่ใกล้ชิดกับทวารหนักซึ่งเป็นแหล่งสะสมของแบคทีเรียจากอุจจาระ (เช่น E. coli) ทำให้เชื้อสามารถเล็ดลอดเข้าสู่กระเพาะปัสสาวะได้ง่ายกว่าเพศชายหลายเท่า',
    system: systemName,
    topic: 'Anatomical Differences Between Males and Females',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 45,
    tags: ['female-urethra', 'short-urethra', 'uti-predisposition', 'cystitis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-061',
    questionText: 'ท่อปัสสาวะของเพศชาย (Male urethra) มีความยาวเฉลี่ยประมาณ 18-20 เซนติเมตร แบ่งออกเป็น 3 ส่วนตามตำแหน่งทางกายวิภาค เรียงลำดับจากกระเพาะปัสสาวะออกสู่ปลายอวัยวะเพศข้อใดถูกต้อง?',
    options: {
      A: 'Prostatic urethra -> Membranous urethra -> Spongy (Penile) urethra',
      B: 'Spongy urethra -> Membranous urethra -> Prostatic urethra',
      C: 'Membranous urethra -> Prostatic urethra -> Penile urethra',
      D: 'Prostatic urethra -> Penile urethra -> Membranous urethra'
    },
    correctOption: 'A',
    explanation: 'ท่อปัสสาวะเพศชายแบ่งเป็น 3 ส่วน: 1. Prostatic urethra (ยาว ~3 ซม. ทอดผ่านเนื้อต่อมลูกหมาก) 2. Membranous urethra (สั้นที่สุดและแคบที่สุด ~1-2 ซม. ทอดผ่าน Urogenital diaphragm และหุ้มด้วย External urethral sphincter) 3. Spongy / Penile urethra (ยาวที่สุด ~15 ซม. ทอดใน Corpus spongiosum ขององคชาต)',
    system: systemName,
    topic: 'Anatomical Differences Between Males and Females',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 46,
    tags: ['male-urethra-divisions', 'prostatic', 'membranous', 'spongy-urethra'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-062',
    questionText: 'ท่อปัสสาวะเพศชายส่วน Prostatic Urethra มีโครงสร้างทางเดินสืบพันธุ์ใดมาเปิดเชื่อมต่อเข้าด้วยกัน ทำให้ท่อปัสสาวะทำหน้าที่เป็นทางผ่านร่วมกันของทั้งปัสสาวะและน้ำอสุจิ?',
    options: {
      A: 'ท่อฉีดอสุจิ (Ejaculatory ducts 2 ท่อ) เปิดที่ Seminal colliculus ร่วมกับท่อเปิดของต่อมลูกหมาก (Prostatic ducts)',
      B: 'Ureter ทั้งสองข้าง',
      C: 'Seminiferous tubules โดยตรง',
      D: 'Epididymis โดยตรง'
    },
    correctOption: 'A',
    explanation: 'บนผนังด้านหลังของ Prostatic urethra มีสันนูนชื่อ Urethral crest และปุ่ม Seminal colliculus (Verumontanum) ซึ่งเป็นจุดเปิดของ Ejaculatory ducts ทั้งสองข้าง (ที่นำอสุจิและน้ำเลี้ยงจาก Seminal vesicles) และมีร่อง Prostatic sinuses เป็นจุดเปิดของท่อน้ำเมือกจากต่อมลูกหมาก ทำให้ท่อปัสสาวะเพศชายเป็นทางผ่านร่วมของทั้งระบบขับถ่ายและระบบสืบพันธุ์ (Urogenital tract)',
    system: systemName,
    topic: 'Anatomical Differences Between Males and Females',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 47,
    tags: ['prostatic-urethra', 'ejaculatory-ducts', 'seminal-colliculus', 'verumontanum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-063',
    questionText: 'ท่อปัสสาวะเพศชายส่วน Membranous Urethra ทอดตัวผ่านแผ่นกล้ามเนื้ออุ้งเชิงกราน (Urogenital diaphragm) และถูกโอบล้อมรอบด้วยกล้ามเนื้อหูรูดชนิดใดที่มีการควบคุมภายใต้อำนาจจิตใจ?',
    options: {
      A: 'External urethral sphincter (กล้ามเนื้อลาย Skeletal muscle ควบคุมผ่าน Pudendal nerve)',
      B: 'Internal urethral sphincter (กล้ามเนื้อเรียบ)',
      C: 'Bulbospongiosus muscle',
      D: 'Detrusor sphincter'
    },
    correctOption: 'A',
    explanation: 'Membranous urethra ทอดผ่าน Deep perineal pouch (Urogenital diaphragm) ถูกล้อมรอบด้วย External urethral sphincter ซึ่งเป็นกล้ามเนื้อลายรูปวงแหวน ทำหน้าที่เป็นหูรูดกลั้นปัสสาวะที่ควบคุมได้ตามความตั้งใจ (Voluntary somatic control) ผ่านทางแขนงของเส้นประสาท Pudendal nerve (S2-S4)',
    system: systemName,
    topic: 'Anatomical Differences Between Males and Females',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 47,
    tags: ['membranous-urethra', 'external-urethral-sphincter', 'pudendal-nerve', 'voluntary-control'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-064',
    questionText: 'ท่อปัสสาวะเพศชายส่วน Spongy (Penile) Urethra ทอดตัวอยู่ภายในแกนเนื้อเยื่อที่แข็งตัวได้ (Erectile tissue) ชนิดใดขององคชาต และมีต่อมขับเมือกใดเปิดเข้าสู่ท่อส่วนนี้?',
    options: {
      A: 'ทอดตัวอยู่ภายใน Corpus Spongiosum และได้รับท่อเปิดจากต่อม Bulbourethral glands (Cowper\'s glands)',
      B: 'ทอดตัวอยู่ใน Corpus Cavernosum และรับท่อเปิดจากต่อมลูกหมาก',
      C: 'ทอดตัวอยู่เหนือ Tunica albuginea',
      D: 'ทอดตัวอยู่ใน Prepuce'
    },
    correctOption: 'A',
    explanation: 'Spongy (Penile) urethra ทอดตัวอยู่ตรงแกนกลางของแท่งเนื้อเยื่อ Corpus spongiosum ด้านล่างขององคชาต (ไม่ได้อยู่ใน Corpora cavernosa ด้านบน) เพื่อป้องกันไม่ให้ท่อปัสสาวะถูกกดแบนขณะแข็งตัว โดยมีท่อของ Bulbourethral (Cowper\'s) glands เปิดเข้าสู่ส่วนต้นของ Spongy urethra เพื่อหลั่งของเหลวเมือกด่างหล่อลื่นและสะเทินกรด',
    system: systemName,
    topic: 'Anatomical Differences Between Males and Females',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 48,
    tags: ['spongy-urethra', 'corpus-spongiosum', 'bulbourethral-glands', 'cowpers-glands'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-065',
    questionText: 'ผู้ป่วยชายสูงอายุ 68 ปี มีอาการปัสสาวะลำบาก ลำปัสสาวะไม่พุ่ง ปัสสาวะสะดุด และต้องเบ่ง ปัสสาวะบ่อยตอนกลางคืน แพทย์ตรวจพบโรคต่อมลูกหมากโต (Benign Prostatic Hyperplasia: BPH) พยาธิสภาพนี้เกิดการกดทับท่อปัสสาวะส่วนใด?',
    options: {
      A: 'Prostatic urethra เนื่องจากต่อมลูกหมากเจริญเติบโตโอบรัดรอบท่อปัสสาวะส่วนนี้โดยตรง',
      B: 'Membranous urethra',
      C: 'Spongy urethra',
      D: 'Ureter ส่วนต้น'
    },
    correctOption: 'A',
    explanation: 'Prostatic urethra เป็นท่อปัสสาวะส่วนที่ทอดทะลุผ่านเนื้อต่อมลูกหมาก (โดยเฉพาะบริเวณ Transition zone) เมื่อผู้ชายมีอายุมากขึ้น อิทธิพลของ Dihydrotestosterone (DHT) จะทำให้เซลล์ต่อมลูกหมากแบ่งตัวขยายใหญ่ (BPH) เกิดการบีบกดเบียดท่อ Prostatic urethra ให้ตีบแคบลง ขัดขวางทางเดินน้ำปัสสาวะ เกิดอาการ Lower Urinary Tract Symptoms (LUTS)',
    system: systemName,
    topic: 'Anatomical Differences Between Males and Females',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 46,
    tags: ['bph', 'prostatic-urethra-compression', 'benign-prostatic-hyperplasia'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 66-80: Micturition Reflex & Neural Control
  {
    id: 'URINARY-066',
    questionText: 'ในรีเฟล็กซ์การขับถ่ายปัสสาวะ (Micturition Reflex) ระบบประสาทพาราซิมพาเทติก (Parasympathetic nervous system) ส่งกระแสประสาทผ่านทางเส้นประสาทใดมาควบคุม และมีผลสั่งการอย่างไรต่อกล้ามเนื้อกระเพาะปัสสาวะและหูรูด?',
    options: {
      A: 'ส่งผ่าน Pelvic splanchnic nerves (ระดับไขสันหลัง S2 - S4) สั่งให้กล้ามเนื้อ Detrusor muscle หดตัวบีบปัสสาวะ พร้อมกับสั่งให้ Internal urethral sphincter คลายตัวเปิดออก',
      B: 'ส่งผ่าน Sympathetic chain สั่งให้ Detrusor คลายตัว',
      C: 'ส่งผ่าน Vagus nerve สั่งให้กล้ามเนื้อหน้าท้องหดเกร็ง',
      D: 'ส่งผ่าน Pudendal nerve สั่งให้ไตหยุดกรอง'
    },
    correctOption: 'A',
    explanation: 'Parasympathetic stimulation (ผ่าน Pelvic splanchnic nerves, S2-S4) คือ "ระบบขับถ่ายปัสสาวะ": Acetylcholine จับกับ Muscarinic M3 receptors บนผนังกระเพาะปัสสาวะ สั่งให้ Detrusor muscle บีบตัวรุนแรง พร้อมกับยับยั้งและคลายตัวกล้ามเนื้อเรียบ Internal urethral sphincter เพื่อเปิดทางให้น้ำปัสสาวะไหลออก',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 44,
    tags: ['micturition-reflex', 'parasympathetic', 'pelvic-splanchnic-nerves', 'detrusor-contraction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-067',
    questionText: 'ระบบประสาทซิมพาเทติก (Sympathetic nervous system) จากไขสันหลังระดับ T11 - L2 ส่งผ่าน Hypogastric nerves มาทำหน้าที่ใดในกระเพาะปัสสาวะระหว่างช่วงระยะกักเก็บปัสสาวะ (Storage phase)?',
    options: {
      A: 'สั่งให้กล้ามเนื้อ Detrusor muscle คลายตัว (ผ่าน Beta-2/Beta-3 adrenergic receptors) และสั่งให้ Internal urethral sphincter หดตัวแน่น (ผ่าน Alpha-1 adrenergic receptors) เพื่อกักเก็บปัสสาวะไว้',
      B: 'สั่งให้บีบปัสสาวะออกทันที',
      C: 'สั่งให้ไตขับน้ำออกมากขึ้น',
      D: 'ยับยั้งการไหลเวียนเลือดเข้าสู่ท่อไต'
    },
    correctOption: 'A',
    explanation: 'Sympathetic stimulation (ผ่าน Hypogastric nerves, T11-L2) คือ "ระบบกลั้นปัสสาวะ/กักเก็บ": Norepinephrine จับกับ Beta-3 receptors ทำให้ Detrusor คลายตัว (ขยายความจุกระเพาะปัสสาวะ) และจับกับ Alpha-1 receptors สั่งให้ Internal urethral sphincter หดตัวแน่นสนิท ป้องกันไม่ให้ปัสสาวะเล็ดออกมา',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 44,
    tags: ['sympathetic-storage-phase', 'hypogastric-nerve', 'internal-sphincter-contraction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-068',
    questionText: 'ศูนย์ควบคุมการขับถ่ายปัสสาวะระดับสูงในสมองส่วนก้านสมอง (Brainstem) ที่ทำหน้าที่ประสานสัญญาณระหว่างกล้ามเนื้อ Detrusor และหูรูดท่อปัสสาวะคือศูนย์ใด?',
    options: {
      A: 'Pontine Micturition Center (Barrington\'s nucleus ในสมองส่วน Pons)',
      B: 'Medulla oblongata respiratory center',
      C: 'Substantia nigra ใน Midbrain',
      D: 'Inferior colliculus'
    },
    correctOption: 'A',
    explanation: 'Pontine Micturition Center (PMC หรือ Barrington\'s nucleus) ตั้งอยู่ในส่วน Pons ของก้านสมอง ทำหน้าที่เป็นสวิตช์ประสานงานหลัก (Coordinator) เมื่อสมองส่วนหน้า (Cerebral cortex) อนุญาตให้ปัสสาวะ PMC จะส่งสัญญาณลงมาสั่งกระตุ้น Parasympathetic และยับยั้ง Sympathetic กับ Pudendal nerve ทำให้ Detrusor บีบตัวพร้อมกับ Sphincters ทั้งหมดคลายตัวพร้อมกันอย่างกลมกลืน (Detrusor-sphincter coordination)',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 44,
    tags: ['pontine-micturition-center', 'pmc', 'pons', 'detrusor-sphincter-coordination'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-069',
    questionText: 'หากบุคคลต้องการ "กลั้นปัสสาวะไว้ก่อน" เมื่อยังไม่สะดวกในการเข้าห้องน้ำ สมองส่วนหน้า Cerebral cortex จะส่งสัญญาณสั่งการผ่านระบบประสาทกายวิภาคเส้นใดเพื่อสั่งให้กล้ามเนื้อหูรูดส่วนใดหดรัดตัวแน่นขึ้น?',
    options: {
      A: 'ส่งสัญญาณผ่าน Somatic motor fibers ในเส้นประสาท Pudendal nerve สั่งให้ External urethral sphincter หดตัวแน่นภายใต้อำนาจจิตใจ',
      B: 'ส่งผ่าน Vagus nerve สั่งปิดท่อไต',
      C: 'ส่งผ่าน Pelvic splanchnic nerve สั่งคลายกระเพาะปัสสาวะ',
      D: 'ส่งผ่าน Phrenic nerve สั่งให้กะบังลมหดตัว'
    },
    correctOption: 'A',
    explanation: 'การควบคุมภายใต้อำนาจจิตใจ (Voluntary micturition inhibition): สัญญาณจาก Cerebral cortex และ Medial frontal micturition center จะส่งผ่าน Corticospinal tract ไปยัง Onuf\'s nucleus ในไขสันหลังระดับ S2-S4 และส่งผ่าน Pudendal nerve สั่งให้กล้ามเนื้อลาย External urethral sphincter หดเกร็งตัวแน่นขึ้น เอาชนะแรงดันของ Detrusor ชั่วคราวเพื่อกลั้นปัสสาวะไว้',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 45,
    tags: ['voluntary-retention', 'pudendal-nerve', 'external-sphincter'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-070',
    questionText: 'ผู้ป่วยอุบัติเหตุได้รับบาดเจ็บไขสันหลังขาดระดับกระดูกสันหลังส่วนอก (Complete spinal cord transection เหนือระดับ S2) หลังพ้นระยะ Spinal shock จะเกิดภาวะกระเพาะปัสสาวะทำงานผิดปกติแบบใด (Neurogenic bladder)?',
    options: {
      A: 'Automatic / Spastic neurogenic bladder (กระเพาะปัสสาวะบีบตัวแบบรีเฟล็กซ์อัตโนมัติเองเมื่อมีปัสสาวะเต็ม โดยผู้ป่วยไม่สามารถรับรู้ความรู้สึกปวดและไม่สามารถควบคุมกลั้นได้ตามความตั้งใจ)',
      B: 'Atonic bladder ที่กระเพาะปัสสาวะไม่บีบตัวตลอดชีวิต',
      C: 'ไตหยุดสร้างปัสสาวะ',
      D: 'น้ำปัสสาวะไหลย้อนเข้าสู่หัวใจ'
    },
    correctOption: 'A',
    explanation: 'เมื่อไขสันหลังขาดเหนือระดับ Sacral micturition center (S2-S4): วงรีเฟล็กซ์ระหว่างกระเพาะปัสสาวะกับไขสันหลังยังสมบูรณ์ แต่ขาดการควบคุมจากสมองส่วนบน (PMC และ Cortex) ส่งผลให้เมื่อปัสสาวะสะสมจนถึงขีดจำกัด กระเพาะปัสสาวะจะบีบตัวขับออกเองโดยอัตโนมัติ (Spastic/Reflex neurogenic bladder) โดยผู้ป่วยไม่รู้สึกปวดและสั่งกลั้นไม่ได้',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 45,
    tags: ['spastic-bladder', 'neurogenic-bladder', 'spinal-cord-injury'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 71-85: Nephrolithiasis, Dialysis & Renal Pathology
  {
    id: 'URINARY-071',
    questionText: 'โรคนิ่วในระบบทางเดินปัสสาวะ (Nephrolithiasis / Urolithiasis) ชนิดของผลึกนิ่วที่พบได้บ่อยที่สุดในประชากรมนุษย์ (ประมาณ 70 - 80%) คือผลึกนิ่วชนิดใด?',
    options: {
      A: 'Calcium oxalate (ผลึกแคลเซียมออกซาเลต)',
      B: 'Uric acid (ผลึกกรดยูริก)',
      C: 'Struvite (Magnesium ammonium phosphate)',
      D: 'Cystine'
    },
    correctOption: 'A',
    explanation: 'ก้อนนิ่วในทางเดินปัสสาวะส่วนใหญ่ (70-80%) เป็นนิ่วกลุ่มแคลเซียม โดยชนิดที่พบบ่อยที่สุดคือ Calcium oxalate (และ Calcium phosphate) มักเกิดจากการดื่มน้ำน้อย ปัสสาวะเข้มข้น และมีระดับแคลเซียมหรือออกซาเลตในปัสสาวะสูง สามารถมองเห็นได้บนภาพถ่ายรังสีเอกซเรย์ (Radiopaque)',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 49,
    tags: ['nephrolithiasis', 'calcium-oxalate-stones', 'renal-calculi'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-072',
    questionText: 'นิ่วชนิดเขากวาง (Staghorn calculi หรือ Struvite stones) ซึ่งขยายขนาดใหญ่จนหล่อเต็มกรวยไตและ Calyces ทั้งหมด มักมีสาเหตุเกี่ยวข้องกับการติดเชื้อแบคทีเรียกลุ่มใดในระบบทางเดินปัสสาวะ?',
    options: {
      A: 'แบคทีเรียที่สร้างเอนไซม์ Urease (Urease-producing bacteria เช่น Proteus mirabilis หรือ Klebsiella) ซึ่งเปลี่ยนยูเรียให้กลายเป็นแอมโมเนีย ทำให้น้ำปัสสาวะมีสภาวะเป็นด่างจัด',
      B: 'เชื้อรา Candida albicans',
      C: 'ไวรัสไข้หวัดใหญ่',
      D: 'เชื้อพยาธิใบไม้'
    },
    correctOption: 'A',
    explanation: 'Struvite stones (Magnesium Ammonium Phosphate) เกิดจากการติดเชื้อเรื้อรังของแบคทีเรียกลุ่ม Urease-producing bacteria (โดยเฉพาะ Proteus mirabilis) เอนไซม์ Urease จะย่อยสลาย Urea กลายเป็น Ammonia และ Carbon dioxide ทำให้ปัสสาวะกลายเป็นด่างจัด (pH > 7.2) ส่งผลให้แมกนีเซียม แอมโมเนียม และฟอสเฟตตกตะกอนรวมกันเป็นก้อนนิ่วยักษ์รูปเขากวาง (Staghorn calculus)',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 49,
    tags: ['struvite-stones', 'staghorn-calculi', 'proteus-mirabilis', 'urease'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-073',
    questionText: 'เมื่อก้อนนิ่วขนาด 6 มิลลิเมตรหลุดจากกรวยไตลงมาติดค้างในท่อไต (Ureter) ผู้ป่วยจะมีอาการปวดแบบ Renal colic ซึ่งมีลักษณะอาการปวดร้าว (Referred pain) ไปตามแนวทอดตัวของเส้นประสาทไปสู่บริเวณใด?',
    options: {
      A: 'ปวดบิดเกร็งรุนแรงบริเวณบั้นเอว (Flank) ร้าวลงมาตามแนวขาหนีบ (Groin), หัวหน่าว และไปยังอวัยวะเพศภายนอก (Scrotum ในเพศชาย หรือ Labia majora ในเพศหญิง)',
      B: 'ปวดร้าวขึ้นไปที่ศีรษะและต้นคอ',
      C: 'ปวดร้าวลงที่ปลายนิ้วมือ',
      D: 'ปวดเฉพาะที่ข้อเท้าทั้งสองข้าง'
    },
    correctOption: 'A',
    explanation: 'Renal colic เกิดจากท่อไตบีบเกร็งอย่างรุนแรงต้านการอุดตันของนิ่ว เส้นประสาทรับความรู้สึกเจ็บปวด (Visceral afferents) วิ่งเข้าสู่ไขสันหลังระดับ T11 - L2 ร่วมกับ Somatic nerves ทำให้เกิดอาการปวดร้าว (Referred pain) จากบั้นเอวด้านหลังลงมาตามผนังหน้าท้องสู่ขาหนีบ (Groin), บริเวณถุงอัณฑะ หรือแคมใหญ่ (ตามแนวทอดของ Ilioinguinal และ Genitofemoral nerves)',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 49,
    tags: ['renal-colic', 'referred-pain', 't11-l2', 'ilioinguinal-nerve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-074',
    questionText: 'ในการฟอกเลือดด้วยเครื่องไตเทียม (Hemodialysis) สำหรับผู้ป่วยไตวาย กระบวนการขจัดของเสียไนโตรเจน (Urea, Creatinine) และน้ำส่วนเกินออกจากเลือดอาศัยหลักการทางฟิสิกส์และสรีรวิทยาใดผ่านเยื่อเลือกผ่านกึ่งซึมได้ (Semipermeable membrane)?',
    options: {
      A: 'Diffusion (การแพร่ของโมเลกุลของเสียจากบริเวณที่มีความเข้มข้นสูงในเลือดสู่ Dialysate) และ Ultrafiltration (การกรองน้ำส่วนเกินด้วยความดัน Hydrostatic)',
      B: 'Active transport โดยใช้ ATP จากเครื่องไตเทียม',
      C: 'Phagocytosis ของเม็ดเลือดขาวเทียม',
      D: 'การระเหยของน้ำออกจากพลาสมา'
    },
    correctOption: 'A',
    explanation: 'Hemodialysis อาศัย 2 กลไกหลัก: 1. Diffusion (การแพร่ตามความเข้มข้น): ของเสียที่มีโมเลกุลเล็ก (Urea, Creatinine, โพแทสเซียมส่วนเกิน) ในเลือดจะแพร่ผ่านรูพรุนของเยื่อ Semipermeable membrane เข้าสู่น้ำยาไตเทียม (Dialysate) ที่ไม่มีของเสีย 2. Ultrafiltration (การพาด้วยแรงดัน): ใช้แรงดันข้ามเยื่อกรอง (Transmembrane pressure) ดึงน้ำส่วนเกินออกจากพลาสมาของผู้ป่วย',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 4,
    tags: ['hemodialysis', 'diffusion', 'ultrafiltration', 'dialysate'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-075',
    questionText: 'ในขั้นตอนการผ่าตัดปลูกถ่ายไต (Kidney Transplantation) ไตใหม่ของผู้บริจาคมักถูกนำไปปลูกฝังไว้ที่บริเวณทางกายวิภาคใดของผู้รับ?',
    options: {
      A: 'ในช่องอุ้งเชิงกรานส่วนหน้าบริเวณ แอ่งกระดูกสะโพก (Iliac fossa ด้านขวาหรือซ้าย) นอกช่องเยื่อบุช่องท้อง โดยต่อหลอดเลือดไตเข้ากับ External Iliac vessels และต่อท่อไตใหม่เข้ากระเพาะปัสสาวะโดยตรง',
      B: 'นำไปใส่แทนที่ตำแหน่งไตเดิมในบั้นเอวหลังจากผ่าตัดตัดไตเก่าออก',
      C: 'นำไปต่อเข้ากับหลอดเลือด Aorta ในช่องอก',
      D: 'นำไปเย็บติดกับตับ'
    },
    correctOption: 'A',
    explanation: 'การผ่าตัด Renal transplantation ส่วนใหญ่มักไม่ต้องตัดไตเดิมออก (Heterotopic transplantation) โดยจะนำไตใหม่ไปวางไว้ที่ Iliac fossa (มักเลือกข้างขวาเนื่องจาก External iliac vein อยู่ตื้นกว่า) เชื่อมหลอดเลือด Renal artery/vein เข้ากับ External iliac artery/vein และนำ Ureter ใหม่ไปเย็บเปิดเข้าสู่กระเพาะปัสสาวะ (Ureteroneocystostomy) ซึ่งสะดวกต่อการผ่าตัดและลดความเสี่ยง',
    system: systemName,
    topic: 'Kidney Gross Anatomy & Position',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 5,
    tags: ['renal-transplantation', 'iliac-fossa', 'external-iliac-vessels'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 76-100: Comprehensive Urinary Integration & Advanced Physiology
  {
    id: 'URINARY-076',
    questionText: 'เซลล์ชนิดใดในไตที่ทำหน้าที่สังเคราะห์และหลั่งฮอร์โมน Erythropoietin (EPO) เพื่อตอบสนองต่อภาวะออกซิเจนในเนื้อเยื่อลดลง (Renal hypoxia)?',
    options: {
      A: 'Interstitial fibroblasts (Peritubular interstitial cells) บริเวณรอบๆ ท่อหน่วยไตในชั้น Renal Cortex',
      B: 'Podocytes ใน Bowman\'s capsule',
      C: 'Juxtaglomerular cells ในหลอดเลือดแดง',
      D: 'Principal cells ในท่อรวม'
    },
    correctOption: 'A',
    explanation: 'Erythropoietin (EPO) ประมาณ 85-90% ของร่างกายถูกสังเคราะห์จาก Peritubular interstitial cells (Fibroblast-like cells) ที่แทรกอยู่ในเนื้อไตชั้น Cortex เมื่อเซลล์ตรวจพบภาวะ Hypoxia โปรตีน Hypoxia-Inducible Factor (HIF-2alpha) จะกระตุ้นการแสดงออกของยีน EPO ส่งฮอร์โมนเข้ากระแสเลือดไปกระตุ้น Proerythroblasts ในไขกระดูก',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 3,
    tags: ['erythropoietin-synthesis', 'interstitial-fibroblasts', 'hypoxia-inducible-factor'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-077',
    questionText: 'ในกระบวนการเปลี่ยนรูปวิตามินดี เอนไซม์ 1-alpha-hydroxylase ซึ่งทำหน้าที่เปลี่ยน 25-hydroxyvitamin D3 ให้กลายเป็น Calcitriol (1,25-dihydroxyvitamin D3) ซึ่งเป็นรูปที่ทำงานได้ของวิตามินดี พบได้ที่เซลล์ของโครงสร้างใดในไต?',
    options: {
      A: 'Proximal Convoluted Tubule (PCT)',
      B: 'Glomerulus',
      C: 'Loop of Henle',
      D: 'Renal papilla'
    },
    correctOption: 'A',
    explanation: 'เอนไซม์ 1-alpha-hydroxylase (CYP27B1) อยู่ที่ไมโทคอนเดรียของเซลล์เยื่อบุผิว Proximal Convoluted Tubule (PCT) ในไต ทำหน้าที่เติมหมู่ -OH ที่ตำแหน่งคาร์บอนที่ 1 กลายเป็น Calcitriol ฮอร์โมนนี้ถูกกระตุ้นโดย PTH และภาวะฟอสเฟตต่ำ เพื่อช่วยดูดซึมแคลเซียมและฟอสเฟตที่ทางเดินอาหาร',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 3,
    tags: ['1-alpha-hydroxylase', 'calcitriol-synthesis', 'pct-mitochondria'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-078',
    questionText: 'เซลล์ชนิด Extraglomerular Mesangial cells (Lacis cells หรือ Polkissen) ซึ่งเป็นองค์ประกอบหนึ่งของ JGA ตั้งอยู่บริเวณใดและทำหน้าที่อย่างไร?',
    options: {
      A: 'ตั้งอยู่ในช่องว่างรูปสามเหลี่ยมระหว่าง Afferent arteriole, Efferent arteriole และ Macula densa มี Gap junctions เชื่อมต่อระหว่างเซลล์ ทำหน้าที่ส่งผ่านสัญญาณไฟฟ้าระหว่าง Macula densa กับ JG cells',
      B: 'ตั้งอยู่ภายใน Bowman\'s space ทำหน้าที่กรองโปรตีน',
      C: 'ตั้งอยู่ที่ยอดของ Renal pyramid ทำหน้าที่บีบรูดปัสสาวะ',
      D: 'ตั้งอยู่ในกระเพาะปัสสาวะ'
    },
    correctOption: 'A',
    explanation: 'Extraglomerular mesangial cells (Lacis cells / Goormaghtigh cells) ตั้งอยู่นอกโกลเมอรูลัส ตรงช่องว่างระหว่างหลอดเลือด Afferent, Efferent และ Macula densa เซลล์มี Gap junctions หนาแน่น ทำหน้าที่เป็นตัวกลางถ่ายทอดสัญญาณประสาทและโมเลกุลสื่อสารระหว่าง Macula densa กับ Juxtaglomerular cells เพื่อประสานการหลั่ง Renin และการหดขยายหลอดเลือด',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 25,
    tags: ['extraglomerular-mesangial-cells', 'lacis-cells', 'gap-junctions-jga'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-079',
    questionText: 'โครงสร้างทางกายวิภาคของท่อไตส่วนปลายที่เชื่อมต่อเข้ากับกระเพาะปัสสาวะ (Ureterovesical junction) หากมีข้อบกพร่องแต่กำเนิดโดยท่อไตทอดทะลุผนังเป็นแนวตั้งฉากตรงๆ แทนที่จะเป็นแนวเฉียง จะทำให้เกิดโรคใดในเด็กเล็ก?',
    options: {
      A: 'Vesicoureteral Reflux (VUR) ซึ่งทำให้น้ำปัสสาวะไหลย้อนกลับขึ้นไปทำลายเนื้อไตและเกิดการติดเชื้อกรวยไตอักเสบซ้ำซาก',
      B: 'นิ่วในถุงน้ำดี',
      C: 'ปัสสาวะไม่ออกอย่างถาวร',
      D: 'กระเพาะปัสสาวะแตก'
    },
    correctOption: 'A',
    explanation: 'Primary Vesicoureteral Reflux (VUR) เกิดจากความผิดปกติแต่กำเนิดของ Intramural ureter ที่สั้นเกินไปหรือทอดทะลุผนัง Detrusor เป็นมุมชันแทนที่จะเป็นแนวเฉียงยาว เมื่อกระเพาะปัสสาวะบีบตัว ปลายท่อไตจึงไม่ถูกกดปิด ทำให้น้ำปัสสาวะพุ่งย้อนกลับขึ้นไปตาม Ureter เข้าสู่ไต นำพาแบคทีเรียขึ้นไปทำลายเนื้อไตจนเกิดไตวายในเด็ก',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 39,
    tags: ['vesicoureteral-reflux', 'vur', 'congenital-urinary-defect'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-080',
    questionText: 'เมื่อผู้ป่วยได้รับการสวนคาสายสวนปัสสาวะ (Foley catheterization) ลูกโป่งของสายสวน (Retention balloon) จะถูกสูบน้ำกลั่นเข้าไปพองตัวเพื่อตรึงสายสวนให้อยู่ในตำแหน่งใดของระบบทางเดินปัสสาวะ?',
    options: {
      A: 'ภายในโพรงกระเพาะปัสสาวะ (Urinary bladder lumen) เหนือระดับของ Internal urethral orifice เล็กน้อย',
      B: 'ภายในท่อปัสสาวะส่วน Membranous urethra',
      C: 'ภายในท่อไตส่วนล่าง',
      D: 'ภายในต่อมลูกหมาก'
    },
    correctOption: 'A',
    explanation: 'บอลลูนของสายสวน Foley catheter (บรรจุน้ำกลั่นปลอดเชื้อ 5-10 มล.) ต้องอยู่ในโพรงกระเพาะปัสสาวะเหนือต่อ Internal urethral orifice อย่างสมบูรณ์ เพื่อทำหน้าที่ขัดขวางไม่ให้สายสวนเลื่อนหลุดออกมา หากสูบบอลลูนในขณะที่สายยังค้างอยู่ใน Urethra (โดยเฉพาะ Prostatic/Membranous urethra) จะทำให้ท่อปัสสาวะฉีกขาดและมีเลือดออกรุนแรง',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 40,
    tags: ['foley-catheter', 'retention-balloon', 'urinary-bladder-lumen'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-081',
    questionText: 'เซลล์ชนิด Intercalated cells Type B ในท่อ Collecting duct มีบทบาทตอบสนองต่อสภาวะด่างในร่างกาย (Metabolic alkalosis) อย่างไร?',
    options: {
      A: 'หลั่งไอออนไบคาร์บอเนต (HCO3- secretion) ออกสู่ลูเมนของท่อปัสสาวะผ่านตัวแลกเปลี่ยน Pendrin และดูดซึม H+ กลับเข้าสู่กระแสเลือดเพื่อลดความเป็นด่างของเลือด',
      B: 'หลั่งกรดเกลือออกมาทำลายแบคทีเรีย',
      C: 'ดูดกลับน้ำตาลกลูโคส',
      D: 'หลั่งฮอร์โมนเรนิน'
    },
    correctOption: 'A',
    explanation: 'Intercalated cells Type B มีขั้วเซลล์ตรงข้ามกับ Type A: มีตัวแลกเปลี่ยน Cl-/HCO3- exchanger (Pendrin) อยู่ที่ Apical membrane ทำหน้าที่ขับไอออนไบคาร์บอเนต (HCO3-) ออกทิ้งในปัสสาวะ และมี H+-ATPase อยู่ที่ Basolateral membrane ดูดซึม H+ กลับเข้าสู่เลือด จึงเป็นกลไกหลักในการแก้ไขภาวะเลือดเป็นด่าง (Alkalosis)',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 21,
    tags: ['intercalated-cells-type-b', 'pendrin', 'bicarbonate-secretion', 'alkalosis-correction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-082',
    questionText: 'ในทางจุลกายวิภาคศาสตร์ รูปร่างของเซลล์เยื่อบุผิว (Epithelial cells) ของห่วงเฮนเลขาลงส่วนบาง (Thin descending limb) และห่วงเฮนเลขากลับส่วนบาง (Thin ascending limb) จัดเป็นเนื้อเยื่อบุผิวชนิดใด?',
    options: {
      A: 'Simple squamous epithelium (เซลล์เยื่อบุผิวรูปแผ่นแบนชั้นเดียว บางเฉียบ)',
      B: 'Simple cuboidal epithelium มี Brush border',
      C: 'Stratified squamous epithelium',
      D: 'Transitional epithelium'
    },
    correctOption: 'A',
    explanation: 'Thin limbs of the Loop of Henle (ทั้งขาลงและขาขึ้นส่วนบาง) มีผนังที่บางมาก ประกอบด้วย Simple squamous epithelium ชั้นเดียวที่มีความหนาเพียง 1-2 ไมครอน เพื่อเอื้อต่อการแพร่ผ่านของน้ำและสารละลายตามแรงขับเคลื่อนออสโมติกในชั้น Medulla',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 18,
    tags: ['thin-limb-histology', 'simple-squamous', 'loop-of-henle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-083',
    questionText: 'หลอดเลือด Interlobular (Cortical radiate) veins ในเนื้อไตชั้นนอก จะนำเลือดดำไหลมารวมกันเทเข้าสู่หลอดเลือดดำใดที่ทอดโค้งขนานกับฐานของพีระมิดไต?',
    options: {
      A: 'Arcuate veins',
      B: 'Interlobar veins',
      C: 'Renal vein',
      D: 'Segmental veins'
    },
    correctOption: 'A',
    explanation: 'การไหลเวียนของเลือดดำในไต: เลือดจาก Peritubular capillaries และ Stellate veins ไหลเข้า Cortical radiate (Interlobular) veins -> ไหลเทเข้า Arcuate veins (ทอดโค้งที่รอยต่อ Cortex-Medulla) -> ไหลเข้า Interlobar veins (ใน Renal columns) -> รวมเป็น Renal vein เข้าสู่ IVC (ไตไม่มี Segmental veins ในระบบหลอดเลือดดำ)',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 11,
    tags: ['renal-venous-drainage', 'arcuate-veins', 'interlobular-veins'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-084',
    questionText: 'ยาในกลุ่ม Thiazide diuretics (เช่น Hydrochlorothiazide) ออกฤทธิ์ยับยั้งโปรตีนตัวพา Na+/Cl- cotransporter (NCCT) ที่ท่อหน่วยไตส่วนใดในการลดความดันโลหิต?',
    options: {
      A: 'ส่วนต้นของ Distal Convoluted Tubule (Early DCT)',
      B: 'Thick ascending limb of Henle',
      C: 'Proximal Convoluted Tubule',
      D: 'Collecting duct'
    },
    correctOption: 'A',
    explanation: 'Thiazide diuretics ออกฤทธิ์ยับยั้งตัวพา Na+/Cl- cotransporter (NCCT) ที่ฝังอยู่บน Apical membrane ของเซลล์ในส่วนต้นของ Distal Convoluted Tubule (Early DCT) ส่งผลให้โซเดียมและคลอไรด์ไม่ถูกดูดซึมกลับและดึงน้ำขับออกไปกับปัสสาวะ นิยมใช้เป็นยารักษาโรคความดันโลหิตสูงเป็นอันดับแรก',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 20,
    tags: ['thiazide-diuretics', 'early-dct', 'ncct-cotransporter'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-085',
    questionText: 'กระเพาะปัสสาวะด้านบนถูกปกคลุมด้วยเยื่อบุช่องท้องชนิด Visceral Peritoneum เมื่อกระเพาะปัสสาวะขยายตัวขึ้นเต็มที่จะเกิดการเปลี่ยนแปลงตำแหน่งสัมพันธ์กับผนังหน้าท้องอย่างไรที่มีประโยชน์ในการทำหัตถการทางการแพทย์?',
    options: {
      A: 'กระเพาะปัสสาวะจะดันตัวโป่งขึ้นเหนือแนวขอบกระดูกหัวหน่าว (Pubic crest) เข้าสู่ช่องท้องส่วนล่าง ดันเยื่อบุช่องท้องให้ยกสูงขึ้น ทำให้แพทย์สามารถใช้เข็มเจาะดูดปัสสาวะเหนือหัวหน่าว (Suprapubic cystostomy) ได้โดยตรงโดยไม่ต้องแทงทะลุเข้าช่องเยื่อบุช่องท้อง',
      B: 'กระเพาะปัสสาวะจะยุบตัวลงไปในกระดูกก้นกบ',
      C: 'กระเพาะปัสสาวะจะเคลื่อนที่ไปอยู่หลังตับ',
      D: 'กระเพาะปัสสาวะจะบิดตัว 180 องศา'
    },
    correctOption: 'A',
    explanation: 'เมื่อกระเพาะปัสสาวะว่างจะซ่อนตัวอยู่ใน True pelvis หลัง Pubic symphysis แต่เมื่อมีปัสสาวะเต็ม (Distended bladder) ยอด Apex จะโป่งลอยพ้นขอบบนของกระดูกหัวหน่าวขึ้นมาอยู่ชิดกับผนังหน้าท้องส่วนล่าง (Anterior abdominal wall) โดยดัน Peritoneal reflection ให้ร่นขึ้นไปข้างบน แพทย์จึงสามารถทำหัตถการ Suprapubic puncture/catheterization ได้อย่างปลอดภัยโดยไม่เสี่ยงต่อการเจาะทะลุลำไส้หรือเกิด Peritonitis',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 40,
    tags: ['suprapubic-cystostomy', 'distended-bladder-position', 'extraperitoneal-puncture'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-086',
    questionText: 'โครงสร้างเส้นเอ็น Median Umbilical Ligament ซึ่งยึดระหว่างยอดของกระเพาะปัสสาวะ (Apex of the bladder) กับสะดือ (Umbilicus) เป็นซากที่หลงเหลือมาจากโครงสร้างทางคัพภวิทยาใดในระยะทารก?',
    options: {
      A: 'Urachus (ท่อเชื่อมต่อระหว่างถุง Allantois กับ Bladder ในทารก)',
      B: 'Umbilical vein',
      C: 'Ductus arteriosus',
      D: 'Vitelline duct'
    },
    correctOption: 'A',
    explanation: 'Median umbilical ligament เป็นสายเส้นเอ็นเนื้อเยื่อเกี่ยวพันตรงกึ่งกลางผนังหน้าท้อง ทอดจาก Apex of bladder ขึ้นไปเกาะที่ Umbilicus เกิดจากการฝ่อตันของท่อ Urachus (ซึ่งในตัวอ่อนเชื่อมระหว่าง Allantois กับ Cloaca/Bladder) หากท่อนี้ไม่ปิดสนิทแต่กำเนิดจะเกิดภาวะ Patent urachus ทำให้มีน้ำปัสสาวะรั่วซึมไหลออกทางสะดือ',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 41,
    tags: ['median-umbilical-ligament', 'urachus', 'patent-urachus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-087',
    questionText: 'ท่อรวมน้ำปัสสาวะส่วนปลายสุดที่ทอดตัวผ่านยอดของ Renal Papilla มีชื่อเรียกว่าอะไร และบุด้วยเนื้อเยื่อบุผิวชนิดใด?',
    options: {
      A: 'Papillary ducts (Ducts of Bellini) บุด้วยเซลล์ Simple columnar epithelium ทรงสูง',
      B: 'PCT บุด้วย Simple cuboidal',
      C: 'Ureter บุด้วย Transitional epithelium',
      D: 'Bowman\'s capsule บุด้วย Simple squamous'
    },
    correctOption: 'A',
    explanation: 'หลายๆ Cortical และ Medullary collecting ducts จะไหลมารวมกันเป็นท่อขนาดใหญ่เส้นผ่านศูนย์กลางกว้างขึ้น เรียกว่า Papillary ducts (Ducts of Bellini) บุด้วย Simple columnar epithelium เซลล์ทรงสูง ทอดทะลุเปิดออกที่ยอด Renal papilla บริเวณ Area cribrosa นำปัสสาวะเข้าสู่ Minor calyx',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 21,
    tags: ['papillary-ducts', 'ducts-of-bellini', 'renal-papilla-epithelium'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-088',
    questionText: 'กล้ามเนื้อหูรูดท่อปัสสาวะภายใน (Internal Urethral Sphincter) มีลักษณะทางกายวิภาคและระบบประสาทที่ควบคุมอย่างไร?',
    options: {
      A: 'เป็นกล้ามเนื้อเรียบ (Smooth muscle) ที่เป็นส่วนต่อของ Detrusor muscle บริเวณคอกระเพาะปัสสาวะ (Bladder neck) ทำงานอยู่นอกอำนาจจิตใจ (Involuntary) ควบคุมโดยระบบประสาทอัตโนมัติ Autonomic nervous system',
      B: 'เป็นกล้ามเนื้อลายที่ควบคุมได้ตามความตั้งใจ',
      C: 'เป็นแผ่นกระดูกอ่อนยืดหยุ่น',
      D: 'ควบคุมโดยเส้นประสาทสมองคู่ที่ 12'
    },
    correctOption: 'A',
    explanation: 'Internal urethral sphincter ตั้งอยู่ที่ Bladder neck รอบรูเปิดท่อปัสสาวะด้านใน เกิดจากการเรียงตัวของกล้ามเนื้อเรียบ (Smooth muscle) ของ Detrusor ทำงานโดยอัตโนมัติ (Involuntary): Sympathetic ควบคุมการหดรัดตัวกลั้นไว้ขณะพัก และป้องกันการหลั่งอสุจิย้อนกลับเข้ากระเพาะปัสสาวะ (Retrograde ejaculation) ในเพศชาย ขณะที่ Parasympathetic ควบคุมการคลายตัวเพื่อปัสสาวะ',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 43,
    tags: ['internal-urethral-sphincter', 'bladder-neck', 'involuntary-smooth-muscle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-089',
    questionText: 'ในผู้ป่วยโรคความดันโลหิตสูงที่มีภาวะ Renal Artery Stenosis (หลอดเลือดแดงไตตีบข้างเดียวจากคราบไขมัน) เหตุใดไตข้างที่ตีบจึงกระตุ้นให้เกิดความดันโลหิตสูงรุนแรงทั่วร่างกาย (Renovascular hypertension)?',
    options: {
      A: 'การตีบของหลอดเลือดทำให้ความดันและปริมาณเลือดที่เข้าสู่ Glomerulus ข้างนั้นลดลง JG cells จึงเข้าใจผิดว่าร่างกายมีความดันโลหิตต่ำ จึงหลั่งเอนไซม์เรนิน (Renin) ออกมาในปริมาณมหาศาล กระตุ้นระบบ RAAS ให้บีบหลอดเลือดทั่วร่างกาย',
      B: 'ไตข้างนั้นสร้างฮอร์โมนอินซูลินมากเกินไป',
      C: 'ไตข้างนั้นหยุดการกรองน้ำตาลกลูโคส',
      D: 'เกิดการอุดตันของท่อไตทำให้ปัสสาวะคั่ง'
    },
    correctOption: 'A',
    explanation: 'Renal artery stenosis ทำให้ Perfusion pressure ไปยัง Afferent arteriole ของไตข้างนั้นลดลงอย่างมาก กลไก Baroreceptors ของ Juxtaglomerular (JG) cells จะถูกกระตุ้นให้หลั่ง Renin ออกมาอย่างต่อเนื่อง ก่อให้เกิดการสร้าง Angiotensin II และ Aldosterone ในระดับสูง ส่งผลให้เกิด Vasoconstriction และกักเก็บน้ำ/เกลือทั่วร่างกาย เกิดภาวะ Renovascular hypertension',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 28,
    tags: ['renovascular-hypertension', 'renal-artery-stenosis', 'hyperreninemia', 'raas-activation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-090',
    questionText: 'กระบวนการ Tubuloglomerular Feedback (TGF) ซึ่งเป็นกลไก Autoregulation ภายในหน่วยไต ทำงานอย่างไรเมื่ออัตราการกรอง GFR สูงเกินไป?',
    options: {
      A: 'น้ำกรองไหลผ่านท่อเร็วเกินไป ทำให้การดูดซึม Na+ และ Cl- กลับไม่ทัน ส่งผลให้ Macula densa ตรวจพบความเข้มข้นของ NaCl สูง จึงหลั่งสาร Adenosine/ATP ไปสั่งให้ Afferent arteriole หดตัว (Vasoconstriction) เพื่อลด GHP และดึง GFR กลับลงมาสู่ค่าปกติ',
      B: 'Macula densa สั่งให้หัวใจเต้นเร็วขึ้น',
      C: 'Efferent arteriole จะขยายตัว 10 เท่า',
      D: 'Bowman\'s capsule จะปิดตัวลงสนิท'
    },
    correctOption: 'A',
    explanation: 'Tubuloglomerular Feedback (TGF): เมื่อ GFR สูงขึ้น อัตราการไหลของ Filtrate ในท่อไตจะเร็วมากจนเซลล์ดูดซึม NaCl กลับไม่ทัน ของเหลวที่มาถึง Macula densa ใน DCT จึงมี NaCl สูง เซลล์ Macula densa รับรู้ผ่านตัวพา NKCC2 แล้วหลั่ง Adenosine ออกมาจับกับ A1 receptors บนเซลล์กล้ามเนื้อเรียบของ Afferent arteriole ทำให้เกิด Vasoconstriction เลือดเข้า Glomerulus ลดลง GFR จึงลดลงสู่ระดับปกติ',
    system: systemName,
    topic: 'Juxtaglomerular Apparatus (JGA)',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 26,
    tags: ['tubuloglomerular-feedback', 'tgf', 'macula-densa', 'adenosine', 'afferent-constriction'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-091',
    questionText: 'ในขั้นตอนการกรองพลาสมาที่ Glomerulus ปัจจัยทางกายวิภาคและชีวโมเลกุลข้อใดเป็นตัวกำหนดว่าสารชนิดใดจะสามารถผ่านตัวกรอง (Filtration barrier) ออกไปได้?',
    options: {
      A: 'ขนาดโมเลกุล (Molecular size: เส้นผ่านศูนย์กลาง < 4 nm ผ่านได้อิสระ, > 8 nm ผ่านไม่ได้) และประจุไฟฟ้าของโมเลกุล (Electrical charge: สารประจุบวกและเป็นกลางผ่านได้ง่ายกว่าสารประจุลบ)',
      B: 'สีของสารและความหนาแน่นของเซลล์',
      C: 'ระดับอุณหภูมิของเลือดในไต',
      D: 'เฉพาะสารที่มีธาตุเหล็กเป็นองค์ประกอบ'
    },
    correctOption: 'A',
    explanation: 'Glomerular filter มีคุณสมบัติคัดกรอง 2 แบบ: 1. Size selectivity: รูพรุน Endothelial fenestrae (70-90 nm), รูตาข่าย GBM (4-8 nm) และ Filtration slits (4-14 nm) ยอมให้น้ำ ไอออน กลูโคส กรดอะมิโน ยูเรีย ผ่านได้อิสระ แต่กั้นเซลล์เม็ดเลือด 2. Charge selectivity: สารประจุบวก (Cationic) จะผ่านได้ดีที่สุด ตามด้วยประจุเป็นกลาง ส่วนสารประจุลบ (Anionic เช่น Albumin) จะถูกผลักโดยประจุลบของ GBM',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 16,
    tags: ['size-selectivity', 'charge-selectivity', 'filtration-dynamics'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-092',
    questionText: 'โครงสร้างใดใน Renal Medulla ที่ทำหน้าที่ลำเลียงน้ำปัสสาวะที่ผ่านการปรับความเข้มข้นขั้นสุดท้ายแล้วจากเนฟรอนหลายๆ ตัวมารวมกันเพื่อมุ่งหน้าสู่ยอด Renal papilla?',
    options: {
      A: 'Medullary Collecting Duct (ท่อรวมส่วนเมดัลลา)',
      B: 'Loop of Henle',
      C: 'Proximal tubule',
      D: 'Afferent arteriole'
    },
    correctOption: 'A',
    explanation: 'Cortical collecting ducts จากเนฟรอนหลายพันหน่วยจะทอดตัวลงมาในชั้น Medulla กลายเป็น Medullary collecting ducts ซึ่งเป็นตำแหน่งที่มีการตอบสนองต่อ ADH สูงสุดในการดึงน้ำกลับครั้งสุดท้าย และมีการดูดซึม Urea กลับเข้าสู่ Interstitium เพื่อรักษาสภาพความเข้มข้นของ Medulla',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 21,
    tags: ['medullary-collecting-duct', 'urea-reabsorption', 'urine-concentration'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-093',
    questionText: 'เมื่อตรวจปัสสาวะพบเม็ดเลือดแดงที่มีรูปร่างบิดเบี้ยวผิดรูป (Dysmorphic RBCs) ร่วมกับตรวจพบ Red Blood Cell Casts ในปัสสาวะ บ่งชี้ว่าตำแหน่งที่มีพยาธิสภาพเลือดออกอยู่ในโครงสร้างใดของระบบทางเดินปัสสาวะ?',
    options: {
      A: 'Glomerulus ในเนื้อไต (Glomerular bleeding เช่น โรค Glomerulonephritis)',
      B: 'กระเพาะปัสสาวะ (Cystitis)',
      C: 'ท่อปัสสาวะส่วนปลาย',
      D: 'ต่อมลูกหมาก'
    },
    correctOption: 'A',
    explanation: 'Dysmorphic RBCs (เซลล์เม็ดเลือดแดงบิดเบี้ยว รูปร่างคล้ายหูมิกกี้เมาส์ Acanthocytes) เกิดจากการที่ RBCs ถูกบีบอัดเบียดผ่านรอยฉีกขาดของ Glomerular basement membrane และสัมผัสกับ Osmolality ที่เปลี่ยนแปลงตลอดความยาวท่อไต ร่วมกับการพบ RBC Casts (เม็ดเลือดแดงเกาะรวมกับ Tamm-Horsfall protein ในท่อไต) บ่งชี้ชัดเจนว่าเป็น Glomerular hematuria',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 16,
    tags: ['dysmorphic-rbcs', 'rbc-casts', 'glomerulonephritis', 'glomerular-hematuria'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-094',
    questionText: 'หลอดเลือดดำ Renal Vein ข้างซ้าย (Left Renal Vein) มีลักษณะทางกายวิภาคที่ยาวกว่าหลอดเลือดดำไตข้างขวา และทอดข้ามผ่านโครงสร้างสำคัญใดก่อนเทเข้าสู่ Inferior Vena Cava?',
    options: {
      A: 'ทอดตัวข้ามด้านหน้าของ Abdominal Aorta โดยลอดอยู่ใต้จุดแตกแขนงของ Superior Mesenteric Artery (SMA)',
      B: 'ทอดตัวข้ามหลังกระดูกสันหลัง',
      C: 'ทอดตัวอยู่เหนือกระเพาะอาหาร',
      D: 'ทอดตัวผ่านกะบังลม'
    },
    correctOption: 'A',
    explanation: 'Left renal vein มีความยาวมากกว่าข้างขวา (ประมาณ 7.5 ซม. เทียบกับ 2.5 ซม.) โดยทอดตัวข้ามด้านหน้า Abdominal aorta และลอดอยู่ใต้มุมแหลมของ Superior mesenteric artery (SMA) หากมุมนี้แคบลงจะเกิดการกดทับ Left renal vein เรียกว่า Nutcracker syndrome ทำให้ผู้ป่วยมีอาการปวดเอวซ้ายและปัสสาวะเป็นเลือด',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 10,
    tags: ['left-renal-vein', 'nutcracker-syndrome', 'sma-crossing', 'aorta-relation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-095',
    questionText: 'หลอดเลือดดำของลูกอัณฑะข้างซ้าย (Left Testicular vein ในเพศชาย) และหลอดเลือดดำต่อมหมวกไตข้างซ้าย (Left Suprarenal vein) เทเลือดดำเข้าสู่โครงสร้างใด ซึ่งแตกต่างจากข้างขวา?',
    options: {
      A: 'เทเข้าสู่ Left Renal Vein ในแนวตั้งฉาก ก่อนจะไหลต่อไปยัง IVC',
      B: 'เทเข้าสู่ Inferior Vena Cava โดยตรง',
      C: 'เทเข้าสู่ Hepatic portal vein',
      D: 'เทเข้าสู่ Renal artery'
    },
    correctOption: 'A',
    explanation: 'ความไม่สมมาตรของหลอดเลือดดำ: ทางด้านขวา Right testicular vein และ Right suprarenal vein เทตรงเข้าสู่ IVC แต่ทางด้านซ้าย Left testicular vein และ Left suprarenal vein จะเทเข้าสู่ Left Renal Vein เป็นมุมฉาก 90 องศา ทำให้แรงดันต้านสูงกว่า เป็นสาเหตุที่เพศชายมักพบเส้นเลือดขอดที่ถุงอัณฑะ (Varicocele) ข้างซ้ายบ่อยกว่าข้างขวาอย่างมาก',
    system: systemName,
    topic: 'Kidney Blood Supply',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 10,
    tags: ['left-testicular-vein', 'left-suprarenal-vein', 'varicocele', 'left-renal-vein'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-096',
    questionText: 'ต่อมหมวกไต (Adrenal / Suprarenal glands) ตั้งอยู่บนขั้วบนของไตทั้งสองข้าง โดยบรรจุอยู่ร่วมกับไตภายในชั้นเนื้อเยื่อเกี่ยวพันชนิดใด?',
    options: {
      A: 'บรรจุอยู่ร่วมกันภายในชั้น Renal fascia (Gerota\'s fascia) และถูกห่อหุ้มด้วย Perirenal fat',
      B: 'อยู่นอก Renal fascia และมีกระดูกซี่โครงกั้นกลาง',
      C: 'ฝังอยู่ภายในเนื้อไตชั้น Renal cortex',
      D: 'บรรจุอยู่ในถุงเยื่อหุ้มหัวใจ'
    },
    correctOption: 'A',
    explanation: 'ต่อมหมวกไตตั้งอยู่บนขั้วบนของไตแต่ละข้าง โดยบรรจุอยู่ภายในช่องเดียวกันของ Renal fascia (Gerota\'s fascia) และรายล้อมด้วย Perirenal fat แต่จะมีแผ่นกั้นบางๆ (Thin septum) แยกต่อมหมวกไตออกจากไต ทำให้เมื่อไตเลื่อนหลุดลงล่าง (Nephroptosis) หรือเมื่อผ่าตัดตัดไตออก ต่อมหมวกไตจะยังคงเกาะติดอยู่ที่เดิมใต้กะบังลม',
    system: systemName,
    topic: 'Kidney Gross Anatomy & Position',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 6,
    tags: ['adrenal-glands', 'gerotas-fascia', 'perirenal-fat'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-097',
    questionText: 'ส่วนประกอบของโปรตีนที่มีความจำเพาะสูงที่สร้างจากเซลล์เยื่อบุผิวของ Thick Ascending Limb of Henle ซึ่งทำหน้าที่เป็นโครงร่างโปรตีนพื้นฐานในการฟอร์มตัวของแท่งแคสต์ (Urinary Casts) ในน้ำปัสสาวะคือโปรตีนชนิดใด?',
    options: {
      A: 'Tamm-Horsfall protein (Uromodulin)',
      B: 'Albumin',
      C: 'Fibrinogen',
      D: 'Immunoglobulin G'
    },
    correctOption: 'A',
    explanation: 'Tamm-Horsfall protein (Uromodulin) เป็น Glycoprotein ชนิดพิเศษที่สังเคราะห์และหลั่งเฉพาะจากเซลล์ของ Thick Ascending Limb (TAL) และส่วนต้นของ DCT ทำหน้าที่ป้องกันการเกาะติดของเชื้อแบคทีเรียและป้องกันการตกผลึกของนิ่ว เมื่อปัสสาวะมีความเข้มข้นสูงหรือเป็นกรด โปรตีนนี้จะแข็งตัวเป็นเจลกลายเป็น Hyaline casts ซึ่งเป็นโครงร่างพื้นฐานของแคสต์ทุกชนิดในปัสสาวะ',
    system: systemName,
    topic: 'Nephron Structure & Histology',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 19,
    tags: ['tamm-horsfall-protein', 'uromodulin', 'urinary-casts', 'thick-ascending-limb'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-098',
    questionText: 'ในทางจุลกายวิภาคศาสตร์ พื้นผิวด้านในสุดของเซลล์ Umbrella cells ในชั้นเยื่อบุ Urothelium ของกระเพาะปัสสาวะ มีโครงสร้างแข็งแรงพิเศษที่ประกอบด้วยโปรตีนหนาแน่น (Asymmetric unit membrane) เรียกว่าอะไร ซึ่งทำหน้าที่ป้องกันไม่ให้ปัสสาวะที่มีกรดยูเรียซึมเข้าทำลายเนื้อเยื่อ?',
    options: {
      A: 'Uroplakin plaques (Urothelial plaques)',
      B: 'Keratin lamellae',
      C: 'Mucin droplets',
      D: 'Microvillar border'
    },
    correctOption: 'A',
    explanation: 'Umbrella cells ในชั้นผิวของ Transitional epithelium มีโครงสร้าง Apical membrane หนาเป็นพิเศษ เรียกว่า Urothelial plaques (Uroplakins: UP Ia, Ib, II, IIIa) สานกันเป็นแผ่นผลึกรูปหกเหลี่ยม ทำหน้าที่เป็น Permeability barrier ที่แข็งแกร่งที่สุดในร่างกาย ป้องกันไม่ให้น้ำ ปัสสาวะ ยูเรีย และโปรตอนรั่วซึมข้ามเยื่อบุผิวกลับเข้าสู่กระแสเลือด',
    system: systemName,
    topic: 'Ureters, Bladder & Urethra',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 43,
    tags: ['uroplakins', 'urothelial-plaques', 'umbrella-cells-barrier'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-099',
    questionText: 'ความดันโลหิตภายในหลอดเลือดแดงของไตหากตกลงต่ำกว่าค่า Mean Arterial Pressure (MAP) เท่าใด จะทำให้กลไก Renal Autoregulation สูญเสียประสิทธิภาพ ส่งผลให้ความดันการกรอง NFP ลดลงจนไตหยุดการสร้างน้ำปัสสาวะ (Anuria) และเกิดภาวะไตวายเฉียบพลันแบบ Prerenal Acute Kidney Injury?',
    options: {
      A: 'ต่ำกว่า 80 mmHg (หรือ Systolic BP ต่ำกว่า 70-80 mmHg)',
      B: 'ต่ำกว่า 120 mmHg',
      C: 'ต่ำกว่า 150 mmHg',
      D: 'ต่ำกว่า 200 mmHg'
    },
    correctOption: 'A',
    explanation: 'กลไก Renal Autoregulation สามารถรักษาระดับ GFR ให้คงที่ได้เฉพาะเมื่อ Mean Arterial Pressure (MAP) อยู่ในช่วง 80 ถึง 180 mmHg เท่านั้น หากความดันเลือดตกลงอย่างรุนแรง (เช่น เสียเลือด ช็อก หรือขาดน้ำรุนแรง จน MAP < 80 mmHg หรือ Systolic BP < 70 mmHg) กลไกขยาย Afferent arteriole จะไม่สามารถชดเชยได้อีกต่อไป ส่งผลให้ Glomerular Hydrostatic Pressure ตกฮวบ NFP กลายเป็นศูนย์ เกิดภาวะปัสสาวะไม่ออก (Oliguria/Anuria) และเกิด Prerenal AKI',
    system: systemName,
    topic: 'Urine Formation & Filtration Dynamics',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 32,
    tags: ['autoregulation-limits', 'map-80-180', 'prerenal-aki', 'anuria'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'URINARY-100',
    questionText: 'ข้อใดสรุปหน้าที่ของระบบทางเดินปัสสาวะ (Urinary System) ในการรักษาสมดุลของสภาพแวดล้อมภายในร่างกาย (Homeostasis) ได้อย่างถูกต้อง ลึกซึ้ง และสมบูรณ์ที่สุด?',
    options: {
      A: '1. ขับถ่ายของเสียจากเมแทบอลิซึม (Urea, Creatinine, Uric acid) 2. ควบคุมปริมาตรและความดันเลือดผ่านระบบ RAAS และ ADH 3. ควบคุมสมดุลของเหลวและอิเล็กโทรไลต์ (Na+, K+, Ca2+, Cl-) 4. รักษาสมดุลกรด-ด่างผ่านการขับ H+ และสร้าง HCO3- 5. ทำหน้าที่ต่อมไร้ท่อสร้าง Erythropoietin (กระตุ้นไขกระดูก) และ Calcitriol (กระตุ้นดูดซึมแคลเซียม) 6. สังเคราะห์กลูโคสใหม่ในภาวะอดอาหาร',
      B: '1. สร้างเม็ดเลือดขาว 2. ย่อยอาหารประเภทไขมัน 3. แลกเปลี่ยนก๊าซคาร์บอนมอนอกไซด์ 4. ผลิตฮอร์โมนเพศ',
      C: '1. สร้างน้ำดี 2. ควบคุมอุณหภูมิร่างกายด้วยเหงื่อ 3. ผลิตเอนไซม์เปปซิน 4. ดูดซึมวิตามินซีในช่องปาก',
      D: '1. สูบฉีดเลือดไปยังปอด 2. สร้างสารเคลือบฟัน 3. หลั่งน้ำลาย 4. ควบคุมการนอนหลับ'
    },
    correctOption: 'A',
    explanation: 'ระบบทางเดินปัสสาวะเป็นระบบหลักในการธำรงดุล (Homeostasis) ของร่างกาย โดยทำหน้าที่สำคัญ 6 ประการ: 1. ขจัดของเสียสารอินทรีย์ไนโตรเจน 2. ควบคุมปริมาตรเลือดและความดันโลหิต 3. ควบคุมความเข้มข้นของไอออนในพลาสมา 4. รักษาความสมดุลของ pH ในเลือด 5. บทบาทต่อมไร้ท่อ (EPO และ Calcitriol) 6. Gluconeogenesis ในภาวะอดอาหาร',
    system: systemName,
    topic: 'Functions of the Urinary System',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 2,
    tags: ['urinary-system-homeostasis-summary', 'kidney-functions-comprehensive'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

module.exports = { part2 };
