/**
 * scripts/digestive_advanced_part2.cjs
 * Questions 51 - 100: Large Intestine, Appendix, Rectum, Anal Canal, Liver, Gallbladder, Pancreas
 * Increased complexity by 20-30% with clinical vignettes and high-yield distractors
 */

const systemName = 'Digestive System';
const sourceFile = 'Digestive system_Nartnutda_261024_214326.pdf';

const part2 = [
  // 51-65: Large Intestine Anatomy, Appendix & Anorectum
  {
    id: 'DIGEST-051',
    questionText: 'ลำไส้ใหญ่ (Large Intestine) มีลักษณะโครงสร้างทางกายวิภาคภายนอกที่เด่นชัด 3 ประการซึ่งใช้แยกความแตกต่างจากลำไส้เล็กได้อย่างชัดเจน ข้อใดคือโครงสร้าง 3 ประการดังกล่าว?',
    options: {
      A: 'Taeniae coli (แถบกล้ามเนื้อแนวยาว 3 แถบ), Haustra (กระพุ้งโป่งพองเป็นปล้องๆ), และ Epiploic appendages (ถุงไขมันเล็กๆ ห้อยจากเยื่อบุผิว)',
      B: 'Villi, Plicae circulares, และ Lacteals',
      C: 'Brunner\'s glands, Peyer\'s patches, และ Rugae',
      D: 'Crypts of Lieberkühn, Microvilli, และ Cilia'
    },
    correctOption: 'A',
    explanation: 'ลักษณะเฉพาะของลำไส้ใหญ่ (Colon) มี 3 อย่าง: 1. Taeniae coli: การรวมตัวของกล้ามเนื้อเรียบชั้นนอก (Outer longitudinal muscle) เป็นแถบแบน 3 แถบ 2. Haustra: กระเปาะหรือกระพุ้งที่เกิดจากการที่ Taeniae coli สั้นกว่าความยาวลำไส้ 3. Omental/Epiploic appendages: ติ่งถุงเยื่อบุช่องท้องที่บรรจุหย่อมไขมันห้อยตามแนว Taeniae coli',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 51,
    tags: ['taeniae-coli', 'haustra', 'epiploic-appendages', 'large-intestine-features'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-052',
    questionText: 'ผู้ป่วยชายอายุ 22 ปี มีอาการปวดท้องรอบสะดือก่อนย้ายมาปวดรุนแรงที่บริเวณท้องน้อยด้านล่างขวา (Right lower quadrant) ตรวจร่างกายพบกดเจ็บชัดเจนที่จุด McBurney\'s point ตำแหน่งทางกายวิภาคของจุด McBurney\'s point อยู่ที่ใด?',
    options: {
      A: 'อยู่ที่ 1/3 ทางด้านข้าง (Lateral 1/3) บนเส้นสมมติที่ลากเชื่อมระหว่าง สะดือ (Umbilicus) กับ Anterior Superior Iliac Spine (ASIS) ด้านขวา',
      B: 'อยู่ที่กึ่งกลางระหว่างสะดือกับกระดูกหัวหน่าว (Pubic symphysis)',
      C: 'อยู่ที่ใต้ชายโครงขวาตัดกับ Midclavicular line',
      D: 'อยู่ที่ 1/3 ด้านในติดกับสะดือ'
    },
    correctOption: 'A',
    explanation: 'McBurney\'s point เป็นแลนด์มาร์กสำคัญทางศัลยกรรมในการวินิจฉัยไส้ติ่งอักเสบเฉียบพลัน (Acute appendicitis) อยู่ที่ตำแหน่ง 1 ใน 3 จาก ASIS ด้านขวา บนเส้นที่ลากระหว่าง Right ASIS กับ Umbilicus ซึ่งตรงกับตำแหน่งโคนของ Appendix (Base of the appendix) ที่แยกออกจาก Cecum',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 53,
    tags: ['mcburneys-point', 'appendicitis', 'appendix-base', 'asis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-053',
    questionText: 'ไส้ติ่ง (Vermiform appendix) มีจุดโคน (Base) เริ่มต้นติดอยู่กับ Cecum บริเวณใด และศัลยแพทย์สามารถหาโคนของไส้ติ่งในระหว่างการผ่าตัดได้อย่างไร?',
    options: {
      A: 'อยู่ที่จุดรวมตัวบรรจบกันของแถบกล้ามเนื้อ Taeniae coli ทั้ง 3 แถบบริเวณผนังด้านหลังและด้านในของ Cecum',
      B: 'อยู่ที่กึ่งกลางของ Ileocecal valve',
      C: 'อยู่ที่ด้านหน้าของ Rectum',
      D: 'อยู่ที่บริเวณ Hepatic flexure'
    },
    correctOption: 'A',
    explanation: 'โคนของ Vermiform appendix (Base of appendix) จะเกาะอยู่ที่ขอบ Posteromedial ของ Cecum ใต้ต่อ Ileocecal junction ประมาณ 2 ซม. โดยเป็นจุดบรรจบกันของแถบกล้ามเนื้อ Taeniae coli ทั้ง 3 เส้น (Taenia libera, mesocolica, omentalis) ศัลยแพทย์จึงใช้การตามรอยแถบ Taenia coli เพื่อหาโคนของไส้ติ่ง',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 52,
    tags: ['appendix-base', 'taeniae-coli-convergence', 'cecum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-054',
    questionText: 'ส่วนโค้งหักมุมของลำไส้ใหญ่บริเวณใต้ผิวด้านล่างของตับ (Right colic flexure) และส่วนโค้งหักมุมบริเวณใต้ผิวด้านล่างของม้าม (Left colic flexure) มีชื่อเรียกทางการแพทย์ว่าอะไร และส่วนใดอยู่ในระดับสูงกว่า?',
    options: {
      A: 'Hepatic flexure และ Splenic flexure โดย Splenic flexure อยู่ในระดับที่สูงกว่าและชิดด้านหลังมากกว่า',
      B: 'Duodenal flexure และ Sigmoid flexure',
      C: 'Hepatic flexure อยู่สูงกว่า Splenic flexure',
      D: 'Colic angle ทั้งสองข้างอยู่ในระนาบเดียวกันพอดี'
    },
    correctOption: 'A',
    explanation: '1. Right colic (Hepatic) flexure เชื่อมระหว่าง Ascending colon กับ Transverse colon อยู่ใต้ตับ 2. Left colic (Splenic) flexure เชื่อมระหว่าง Transverse colon กับ Descending colon อยู่ใต้ม้าม โดย Splenic flexure จะอยู่สูงกว่าและลึกกว่า Hepatic flexure เนื่องจากตับขนาดใหญ่ด้านขวาเบียดกดให้ Hepatic flexure อยู่ต่ำกว่า',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 54,
    tags: ['hepatic-flexure', 'splenic-flexure', 'colon-anatomy'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-055',
    questionText: 'ลำไส้ใหญ่ส่วนคดเคี้ยวรูปตัวเอส (Sigmoid Colon) แขวนตัวอยู่ในอุ้งเชิงกรานด้วยแผ่นเยื่อแขวนที่มีชื่อว่าอะไร และเป็นส่วนที่มีความเสี่ยงต่อการเกิดภาวะลำไส้บิดเกลียว (Volvulus) สูงที่สุดเพราะเหตุใด?',
    options: {
      A: 'Sigmoid mesocolon ซึ่งมีความยาวและเคลื่อนที่ได้อย่างอิสระ ทำให้มีโอกาสหมุนบิดตัวรอบรากของเยื่อแขวนได้ง่าย',
      B: 'Mesentery proper ซึ่งยึดแน่นกับกระดูกสันหลัง',
      C: 'Greater omentum ซึ่งมีไขมันหนัก',
      D: 'Falciform ligament'
    },
    correctOption: 'A',
    explanation: 'Sigmoid colon แขวนตัวอยู่ด้วย Sigmoid mesocolon รูปตัว V คว่ำ มีความยาวและความเป็นอิสระในการเคลื่อนไหวสูง (Intraperitoneal mobility) ทำให้ในผู้สูงอายุหรือผู้ที่มีอาการท้องผูกเรื้อรัง อาจเกิดภาวะ Sigmoid volvulus (ลำไส้บิดเกลียวรอบแกน mesocolon) เกิดการอุดตันของทางเดินอาหารและขาดเลือดเฉุกเฉิน',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 55,
    tags: ['sigmoid-colon', 'sigmoid-mesocolon', 'volvulus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-056',
    questionText: 'ชั้นเยื่อบุผิว (Mucosa) ของลำไส้ใหญ่แตกต่างจากลำไส้เล็กอย่างชัดเจนในแง่จุลกายวิภาคศาสตร์อย่างไร?',
    options: {
      A: 'ลำไส้ใหญ่ "ไม่มี Villi และไม่มี Plicae circulares" แต่มีต่อม Tubular crypts of Lieberkühn ลึกและตรง อุดมไปด้วยเซลล์ Goblet cells ผลิตเมือกหล่อลื่นจำนวนมหาศาล',
      B: 'ลำไส้ใหญ่มี Villi สูงและแตกแขนงมากกว่าลำไส้เล็ก',
      C: 'ลำไส้ใหญ่บุด้วย Stratified squamous epithelium ตลอดทั้งท่อ',
      D: 'ลำไส้ใหญ่ไม่มีเซลล์ Goblet cells เลย'
    },
    correctOption: 'A',
    explanation: 'เยื่อบุของลำไส้ใหญ่ไม่มี Villi และไม่มี Circular folds เนื่องจากหน้าที่หลักไม่ใช่การดูดซึมสารอาหาร แต่เป็นดูดซึมน้ำและอิเล็กโทรไลต์กลับคืน จึงมี Crypts of Lieberkühn ทรงกระบอกตรง เรียงตัวชิดกันหนาแน่น และมี Goblet cells จำนวนมากที่สุดในทางเดินอาหารเพื่อสร้างเมือก (Mucus) หล่อลื่นการเคลื่อนที่ของก้อนอุจจาระแข็ง',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 56,
    tags: ['large-intestine-histology', 'no-villi', 'goblet-cells', 'crypts'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-057',
    questionText: 'หน้าที่ทางสรีรวิทยาและกายวิภาคที่สำคัญที่สุดของลำไส้ใหญ่ (Large Intestine) ต่อการรักษาสมดุลของร่างกายคือข้อใด?',
    options: {
      A: 'การดูดซึมน้ำ (ประมาณ 1.0 - 1.5 ลิตร/วัน) และเกลือแร่ (Na+, Cl-) กลับคืนสู่กระแสเลือด, การสร้างอุจจาระอัดแน่น, และการสังเคราะห์วิตามิน K และ B complex โดย Normal flora',
      B: 'การย่อยโปรตีนด้วยกรดเข้มข้น',
      C: 'การสร้างน้ำดีและเอนไซม์ย่อยไขมัน',
      D: 'การดูดซึมวิตามิน B12 ร่วมกับ Intrinsic factor'
    },
    correctOption: 'A',
    explanation: 'หน้าที่หลักของลำไส้ใหญ่: 1. Water & Electrolyte reabsorption (ดูดซึมน้ำกลับประมาณ 90% ของของเหลวที่เข้ามา เพื่อทำให้อุจจาระกึ่งแข็ง) 2. Feces formation & storage 3. Vitamin synthesis (แบคทีเรียกลุ่ม Colonic microflora เช่น E. coli ช่วยสังเคราะห์ Vitamin K ที่จำเป็นต่อการแข็งตัวของเลือด และ Biotin, Vitamin B5)',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 50,
    tags: ['colonic-functions', 'water-absorption', 'vitamin-k-synthesis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-058',
    questionText: 'หลอดเลือดแดง Inferior Mesenteric Artery (IMA) แตกแขนงออกจาก Abdominal Aorta ที่ระดับกระดูกสันหลัง L3 เลี้ยงอวัยวะอนุพันธ์ Hindgut ได้แก่อวัยวะใดบ้าง?',
    options: {
      A: '1/3 ส่วนปลายของ Transverse Colon, Descending Colon, Sigmoid Colon, และส่วนบนของ Rectum (Superior Rectal Artery)',
      B: 'Cecum, Appendix, และ Ascending Colon',
      C: 'Duodenum และ Jejunum',
      D: 'กระเพาะอาหารและตับอ่อน'
    },
    correctOption: 'A',
    explanation: 'Inferior Mesenteric Artery (IMA) เลี้ยงอนุพันธ์ของ Hindgut ได้แก่: ปลาย 1/3 ของ Transverse colon (ผ่าน Left colic artery), Descending colon, Sigmoid colon (ผ่าน Sigmoid arteries) และสิ้นสุดเป็น Superior Rectal Artery ไปเลี้ยงส่วนบนของ Rectum',
    system: systemName,
    topic: 'Large Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 57,
    tags: ['ima', 'hindgut', 'descending-colon', 'superior-rectal-artery'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-059',
    questionText: 'ในทวารหนัก เส้น Pectinate line (Dentate line) เป็นรอยต่อสำคัญทางคัพภวิทยา (Embryological junction) ที่แบ่งแยกความแตกต่างด้านกายวิภาคและคลินิก ข้อใดเปรียบเทียบบริเวณเหนือต่อ Pectinate line กับใต้ต่อ Pectinate line ได้ถูกต้อง?',
    options: {
      A: 'เหนือเส้นบุด้วย Simple columnar epithelium, เลี้ยงด้วยระบบประสาทอัตโนมัติ Autonomic (ไม่เจ็บปวดต่อการสัมผัส), และเกิดริดสีดวงทวารภายใน (Internal hemorrhoids); ใต้เส้นบุด้วย Stratified squamous, เลี้ยงด้วย Somatic pudendal nerve (เจ็บปวดรุนแรง), และเกิดริดสีดวงภายนอก (External hemorrhoids)',
      B: 'เหนือเส้นเลี้ยงด้วยเส้นประสาท Somatic ส่วนใต้เส้นเลี้ยงด้วย Autonomic',
      C: 'เหนือเส้นบุด้วยเนื้อเยื่อกระดูกอ่อน ส่วนใต้เส้นบุด้วยเยื่อเมือก',
      D: 'ไม่มีความแตกต่างกันทั้งระบบประสาทและหลอดเลือด'
    },
    correctOption: 'A',
    explanation: 'Pectinate line เป็นรอยต่อระหว่าง Endoderm (Hindgut) กับ Ectoderm (Proctodeum): 1. Above line: Simple columnar epithelium, หลอดเลือดดำเทเข้า Portal system (Superior rectal v.), ประสาท Autonomic ( visceral sensation ไม่เจ็บปวด จึงมัดยางริดสีดวงภายในได้) 2. Below line: Stratified squamous epithelium, หลอดเลือดดำเทเข้า Caval system (Inferior rectal v.), เลี้ยงโดย Somatic Pudendal nerve (เจ็บปวดเฉียบพลัน ไวต่อสัมผัส)',
    system: systemName,
    topic: 'Rectum & Anal Canal',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 58,
    tags: ['pectinate-line', 'dentate-line', 'internal-vs-external-hemorrhoids', 'pudendal-nerve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-060',
    questionText: 'กล้ามเนื้อหูรูดทวารหนักมี 2 ชั้น ข้อใดเปรียบเทียบระหว่าง Internal Anal Sphincter กับ External Anal Sphincter ในแง่ชนิดของกล้ามเนื้อและการควบคุมการทำงานได้ถูกต้อง?',
    options: {
      A: 'Internal anal sphincter เป็นกล้ามเนื้อเรียบ (Smooth muscle) ทำงานอยู่นอกอำนาจจิตใจ (Involuntary) ควบคุมโดย Autonomic nervous system; External anal sphincter เป็นกล้ามเนื้อลาย (Skeletal muscle) ทำงานภายใต้อำนาจจิตใจ (Voluntary) ควบคุมโดย Pudendal nerve',
      B: 'Internal เป็นกล้ามเนื้อลาย ส่วน External เป็นกล้ามเนื้อเรียบ',
      C: 'ทั้งสองชั้นเป็นกล้ามเนื้อลายที่ควบคุมได้เองตลอดเวลา',
      D: 'ทั้งสองชั้นเป็นกล้ามเนื้อเรียบที่อยู่นอกอำนาจจิตใจ'
    },
    correctOption: 'A',
    explanation: '1. Internal anal sphincter เกิดจากการหนาตัวของกล้ามเนื้อเรียบชั้นวงกลม (Circular smooth muscle) ของทวารหนัก ควบคุมโดย Autonomic (Sympathetic ช่วยหดตัวกลั้น, Parasympathetic ช่วยคลายตัวขับถ่าย) อยู่นอกอำนาจจิตใจ 2. External anal sphincter เป็นกล้ามเนื้อลาย (Skeletal muscle) ส่วนหนึ่งของ Pelvic diaphragm ควบคุมภายใต้อำนาจจิตใจ (Voluntary control) ผ่าน Somatic nerve (Pudendal nerve: S2-S4)',
    system: systemName,
    topic: 'Rectum & Anal Canal',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 59,
    tags: ['internal-anal-sphincter', 'external-anal-sphincter', 'defecation-reflex', 'pudendal-nerve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 61-80: Liver Anatomy, Histology & Biliary System
  {
    id: 'DIGEST-061',
    questionText: 'ตับ (Liver) เป็นต่อมขนาดใหญ่ที่สุดในร่างกาย ตั้งอยู่ในช่องท้องส่วนบนขวา (Right hypochondrium และ Epigastrium) แบ่งออกเป็น 4 พู (Lobes) ทางกายวิภาค ได้แก่พูใดบ้าง?',
    options: {
      A: 'Right lobe, Left lobe, Caudate lobe (ด้านหลังบน), และ Quadrate lobe (ด้านล่างหน้าถัดจากถุงน้ำดี)',
      B: 'Anterior lobe, Posterior lobe, Superior lobe, และ Inferior lobe',
      C: 'Medial lobe, Lateral lobe, Dorsal lobe, และ Ventral lobe',
      D: 'Cranial lobe, Caudal lobe, Apical lobe, และ Basal lobe'
    },
    correctOption: 'A',
    explanation: 'ตับแบ่งตามกายวิภาคศาสตร์มหภาคเป็น 4 Lobes: 1. Right lobe (ขนาดใหญ่ที่สุด) 2. Left lobe (แยกจาก Right lobe ด้วย Falciform ligament) 3. Caudate lobe (อยู่ผิวด้านหลัง ระหว่าง IVC กับ Fossa for ductus venosus) 4. Quadrate lobe (อยู่ผิวด้านล่าง ระหว่างถุงน้ำดีกับ Ligamentum teres hepatis)',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 61,
    tags: ['liver-lobes', 'caudate-lobe', 'quadrate-lobe'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-062',
    questionText: 'แผ่นเอ็นรูปเคียว Falciform Ligament ทำหน้าที่ยึดตับไว้กับผนังหน้าท้องและกะบังลม ที่ขอบล่างอิสระของเอ็นนี้มีโครงสร้างเส้นเอ็นกลม Ligamentum Teres Hepatis (Round ligament of the liver) ซึ่งเป็นโครงสร้างที่หลงเหลือมาจากสิ่งใดในระยะทารกในครรภ์?',
    options: {
      A: 'หลอดเลือดดำสะดือ (Obliterated Left Umbilical Vein)',
      B: 'หลอดเลือดแดงสายสะดือ (Umbilical artery)',
      C: 'Ductus arteriosus',
      D: 'Ductus venosus'
    },
    correctOption: 'A',
    explanation: 'Ligamentum teres hepatis (Round ligament of liver) ทอดอยู่ที่ขอบล่างอิสระของ Falciform ligament เกิดจากการตีบตันและกลายเป็นพังผืดของ Left Umbilical Vein ภายหลังการคลอด ซึ่งในครรภ์เคยทำหน้าที่นำเลือดที่มีออกซิเจนสูงจากรกเข้าสู่ตัวทารก',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 62,
    tags: ['falciform-ligament', 'ligamentum-teres', 'umbilical-vein-remnant'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-063',
    questionText: 'หน่วยโครงสร้างเชิงฟังก์ชันพื้นฐานของตับคือ พูตับคลาสสิก (Classic Hepatic Lobule) มีลักษณะรูปร่างเป็นรูปหกเหลี่ยม (Hexagonal prism) มีโครงสร้างเส้นเลือดใดทอดผ่านอยู่ที่แกนกลางของพูตับพอดี?',
    options: {
      A: 'Central vein (หลอดเลือดดำศูนย์กลางพูตับ)',
      B: 'Hepatic portal vein',
      C: 'Proper hepatic artery',
      D: 'Bile canaliculus'
    },
    correctOption: 'A',
    explanation: 'Classic Hepatic Lobule มีรูปร่างเป็นปริซึมหกเหลี่ยม มี Central vein อยู่ตรงแกนกลาง มีแผ่นเซลล์ตับ (Hepatocyte plates) เรียงตัวแผ่ออกเป็นแนวรัศมีคล้ายซี่ล้อเกวียน โดยที่มุมทั้งหกของหกเหลี่ยมจะเป็นที่ตั้งของ Portal canals (Portal triads)',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 63,
    tags: ['classic-hepatic-lobule', 'central-vein', 'hexagonal-prism'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-064',
    questionText: 'ทิศทางการไหลเวียนของเลือดและน้ำดีภายในเนื้อตับ (Hepatic lobule) สัมพันธ์กับ Central vein และ Portal triad อย่างไร?',
    options: {
      A: 'เลือด (จาก Portal vein และ Hepatic artery) ไหลเข้าสู่ Sinusoids มุ่งหน้า "เข้าหา" Central vein ตรงกลาง ส่วนน้ำดี (Bile) ไหลผ่าน Bile canaliculi ในทิศทางตรงกันข้าม มุ่งหน้า "ออกจาก" ศูนย์กลางไปสู่ Bile ductules ที่ Portal triad',
      B: 'ทั้งเลือดและน้ำดีไหลเข้าหา Central vein ในทิศทางเดียวกัน',
      C: 'น้ำดีไหลจาก Central vein ออกไปเลี้ยงกระเพาะอาหาร',
      D: 'เลือดไหลออกจาก Central vein ไปยังมุมของหกเหลี่ยม'
    },
    correctOption: 'A',
    explanation: 'ทิศทางการไหลในตับเป็นแบบสวนทางกัน (Counter-current): เลือดผสมระหว่าง Portal vein (75%) และ Hepatic artery (25%) จะไหลผ่าน Sinusoids จากมุมของพู (Portal triad) เข้าสู่แกนกลาง (Central vein) ขณะที่น้ำดีที่สร้างโดย Hepatocytes จะถูกหลั่งเข้าสู่ Bile canaliculi แล้วไหลจากแกนกลางออกสู่ท่อน้ำดีที่มุม (Bile ductule at Portal triad)',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 64,
    tags: ['hepatic-blood-flow', 'counter-current-bile-flow', 'portal-triad-to-central-vein'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-065',
    questionText: 'เซลล์แมคโครฟาจประจำที่ (Resident macrophages) ที่อาศัยอยู่ภายในหลอดเลือดฝอย Sinusoids ของตับ ทำหน้าที่ตรวจจับและทำลายแบคทีเรีย เศษซากเซลล์ และสารพิษที่มาจากทางเดินอาหารคือเซลล์ชนิดใด?',
    options: {
      A: 'Kupffer cells (Stellate macrophages)',
      B: 'Ito cells (Hepatic stellate cells)',
      C: 'Hepatocytes',
      D: 'Endothelial cells'
    },
    correctOption: 'A',
    explanation: 'Kupffer cells (Stellate macrophages) เป็นเซลล์ในระบบ Mononuclear phagocyte เกาะติดอยู่ตามผนังของ Hepatic sinusoids ทำหน้าที่เก็บกินเชื้อแบคทีเรียที่เล็ดลอดมาจากลำไส้ผ่านทาง Portal vein เม็ดเลือดแดงที่ผิดปกติ และอนุภาคสิ่งแปลกปลอมได้อย่างมีประสิทธิภาพสูง',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 65,
    tags: ['kupffer-cells', 'hepatic-macrophages', 'sinusoids'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-066',
    questionText: 'เซลล์ชนิด Hepatic Stellate Cells (Ito cells) ซึ่งตั้งอยู่ในช่องว่างใต้เยื่อบุโพรงไซนูซอยด์ (Space of Disse) มีบทบาทสรีรวิทยาปกติในการสะสมสารใด และในภาวะตับอักเสบเรื้อรังมีบทบาททำให้เกิดพยาธิสภาพใด?',
    options: {
      A: 'ในภาวะปกติทำหน้าที่สะสมวิตามิน A (Fat-soluble Vitamin A storage) และในภาวะตับอักเสบเรื้อรังจะเปลี่ยนรูปเป็น Myofibroblasts หลั่งเส้นใยคอลลาเจนจนเกิดพังผืดในตับ (Liver Cirrhosis)',
      B: 'ทำหน้าที่สร้างฮีโมโกลบิน และทำให้เกิดโรคตับแข็ง',
      C: 'ทำหน้าที่หลั่งเอนไซม์เปปซิน',
      D: 'ทำหน้าที่กำจัดยูเรีย'
    },
    correctOption: 'A',
    explanation: 'Ito cells (Hepatic stellate cells) อยู่ใน Perisinusoidal space (Space of Disse) สภาวะปกติเก็บสะสม Vitamin A ถึง 80% ของร่างกาย แต่เมื่อตับได้รับบาดเจ็บเรื้อรัง (เช่น จากแอลกอฮอล์หรือไวรัสตับอักเสบ) เซลล์จะถูกกระตุ้นเปลี่ยนเป็น Myofibroblasts สร้าง Collagen Type I และ III ก่อให้เกิด Fibrosis และ Liver cirrhosis',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 65,
    tags: ['ito-cells', 'hepatic-stellate-cells', 'vitamin-a-storage', 'cirrhosis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-067',
    questionText: 'ลำดับเส้นทางทางเดินน้ำดี (Biliary tree pathway) ตั้งแต่จุดเริ่มต้นการสร้างจากเซลล์ตับจนกระทั่งไหลออกสู่ท่อน้ำดีใหญ่ข้อใดถูกต้อง?',
    options: {
      A: 'Hepatocytes -> Bile canaliculi -> Canals of Hering -> Interlobular bile ductules (in portal triad) -> Right and Left Hepatic ducts -> Common Hepatic duct',
      B: 'Gallbladder -> Central vein -> Common bile duct -> Liver',
      C: 'Cystic duct -> Pancreatic duct -> Hepatic duct -> Duodenum',
      D: 'Hepatocytes -> Portal vein -> Hepatic vein -> Common bile duct'
    },
    correctOption: 'A',
    explanation: 'เส้นทางน้ำดี: 1. Hepatocytes สังเคราะห์น้ำดี 2. หลั่งเข้าสู่ Bile canaliculi (ร่องเล็กๆ ระหว่างเซลล์ตับ) 3. ไหลเข้า Canals of Hering 4. เข้าสู่ Interlobular bile ducts ใน Portal triad 5. รวมกันเป็น Right & Left hepatic ducts 6. ไหลมารวมเป็น Common hepatic duct ออกจากขั้วตับ (Porta hepatis)',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 66,
    tags: ['biliary-tree', 'bile-canaliculi', 'common-hepatic-duct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-068',
    questionText: 'ท่อน้ำดีร่วม Common Bile Duct (Ductus choledochus) เกิดจากการรวมตัวกันของท่อน้ำดี 2 ท่อใด?',
    options: {
      A: 'Common Hepatic Duct (จากตับ) รวมกับ Cystic Duct (จากถุงน้ำดี)',
      B: 'Right Hepatic Duct รวมกับ Left Hepatic Duct',
      C: 'Pancreatic Duct รวมกับ Parotid Duct',
      D: 'Hepatic Portal Vein รวมกับ Celiac Trunk'
    },
    correctOption: 'A',
    explanation: 'Common Bile Duct (ท่อน้ำดีร่วม ยาวประมาณ 7.5 ซม.) เกิดจากการบรรจบกันของ Common Hepatic Duct (ที่นำน้ำดีสดจากตับ) กับ Cystic Duct (ที่ต่อกับถุงน้ำดี) จากนั้นจะทอดลงมาทางด้านหลังของ Duodenum และหัวตับอ่อน เพื่อไปเปิดเข้าสู่ Duodenum',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 67,
    tags: ['common-bile-duct', 'cystic-duct', 'common-hepatic-duct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-069',
    questionText: 'ถุงน้ำดี (Gallbladder) ตั้งอยู่บนผิวด้านล่างของตับ (Visceral surface) มีหน้าที่ทางสรีรวิทยาที่สำคัญที่สุดคือข้อใด?',
    options: {
      A: 'กักเก็บน้ำดี (Storage) และดูดซึมน้ำและอิเล็กโทรไลต์ออกเพื่อทำให้น้ำดีเข้มข้นขึ้น 5 ถึง 10 เท่า (Concentration of bile)',
      B: 'สร้างน้ำดีขึ้นมาใหม่ทั้งหมด',
      C: 'ย่อยโปรตีนและไขมันในถุงน้ำดี',
      D: 'สร้างฮอร์โมนอินซูลินและกลูคากอน'
    },
    correctOption: 'A',
    explanation: 'ถุงน้ำดีไม่ได้ทำหน้าที่สร้างน้ำดี (น้ำดีสร้างจากตับ Hepatocytes ตลอด 24 ชม.) แต่ทำหน้าที่เป็นอ่างกักเก็บน้ำดีสำรอง (กักเก็บได้ 30-50 มล.) และมีเยื่อบุ Simple columnar epithelium ดึงน้ำและเกลือแร่กลับ ทำให้สารน้ำดีมีความเข้มข้นขึ้นถึง 5-10 เท่า เพื่อเตรียมพร้อมฉีดออกเมื่อรับประทานอาหารมัน',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 68,
    tags: ['gallbladder-functions', 'bile-storage', 'bile-concentration'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-070',
    questionText: 'ผู้ป่วยหญิงมีอาการปวดเกร็งรุนแรงที่ใต้ชายโครงขวา ร้าวไปที่สะบักขวา หลังรับประทานอาหารมื้อที่มีไขมันสูง ตรวจอัลตราซาวด์พบนิ่วในถุงน้ำดี (Cholelithiasis) องค์ประกอบหลักของก้อนนิ่วในถุงน้ำดีที่พบได้บ่อยที่สุด (ประมาณ 80%) เกิดจากการตกตะกอนของสารใด?',
    options: {
      A: 'Cholesterol (คอเลสเตอรอลตกผลึกเนื่องจากอัตราส่วนของเกลือน้ำดีและเลซิตินไม่สมดุล)',
      B: 'Calcium oxalate',
      C: 'Uric acid',
      D: 'Sodium bicarbonate'
    },
    correctOption: 'A',
    explanation: 'Cholesterol gallstones เป็นชนิดของนิ่วในถุงน้ำดีที่พบมากที่สุด (ประมาณ 75-80%) เกิดจากภาวะที่น้ำดีมีคอเลสเตอรอลอิ่มตัวเกิน (Supersaturated bile) ร่วมกับมีเกลือน้ำดี (Bile salts) และฟอสโฟลิพิด (Lecithin) ไม่เพียงพอที่จะละลายคอเลสเตอรอลให้อยู่ในรูป Micelles ได้ จึงเกิดการตกผลึกเป็นเม็ดนิ่ว',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 69,
    tags: ['cholelithiasis', 'cholesterol-stones', 'gallbladder-stones'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 71-85: Pancreas Anatomy, Exocrine & Endocrine Histology
  {
    id: 'DIGEST-071',
    questionText: 'ตับอ่อน (Pancreas) จัดเป็นต่อมผสม (Mixed gland) โดยโครงสร้างเนื้อเยื่อส่วนใหญ่ประมาณ 98-99% ทำหน้าที่เป็นต่อมมีท่อ (Exocrine pancreas) เซลล์หน่วยย่อยที่ทำหน้าที่สร้างเอนไซม์ย่อยอาหารคือเซลล์ชนิดใด?',
    options: {
      A: 'Acinar cells (จัดกลุ่มกันเป็นรูปถุง Acini บรรจุ Zymogen granules)',
      B: 'Islets of Langerhans',
      C: 'Hepatocytes',
      D: 'Goblet cells'
    },
    correctOption: 'A',
    explanation: 'เนื้อเยื่อส่วน Exocrine ของตับอ่อนประกอบด้วย Pancreatic acini ซึ่งสร้างขึ้นจาก Acinar cells ทรงพีระมิด ภายในบรรจุ Zymogen granules ทำหน้าที่ผลิตและหลั่งเอนไซม์ย่อยอาหารหลัก 3 หมู่ (Amylase, Lipase, Proteases เช่น Trypsinogen, Chymotrypsinogen) เข้าสู่ระบบท่อน้ำย่อยตับอ่อน',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 71,
    tags: ['exocrine-pancreas', 'acinar-cells', 'zymogen-granules'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-072',
    questionText: 'เหตุใดเอนไซม์ย่อยโปรตีนที่สร้างจาก Acinar cells ของตับอ่อน เช่น Trypsinogen และ Chymotrypsinogen จึงไม่ย่อยทำลายเนื้อเยื่อตับอ่อนเองในขณะที่ถูกสร้างและสะสมอยู่?',
    options: {
      A: 'ถูกสร้างและหลั่งออกมาในรูปของสารตั้งต้นที่ยังไม่ทำงาน (Inactive proenzymes / Zymogens) และมี Pancreatic Secretory Trypsin Inhibitor (PSTI) บรรจุอยู่ด้วย',
      B: 'เพราะในตับอ่อนมีอุณหภูมิติดลบ',
      C: 'เพราะเอนไซม์ตับอ่อนทำงานได้เฉพาะเมื่อมีกรด HCl ในตับอ่อน',
      D: 'เพราะตับอ่อนไม่มีโปรตีนเป็นส่วนประกอบ'
    },
    correctOption: 'A',
    explanation: 'กลไกป้องกันการย่อยตัวเอง (Autodigestion prevention): 1. เอนไซม์ย่อยโปรตีนถูกสังเคราะห์ในรูป Inactive zymogens (เช่น Trypsinogen) 2. บรรจุใน Zymogen granules ที่มีเยื่อหุ้มหนา 3. มี Trypsin inhibitor ป้องกันการกระตุ้นก่อนเวลา โดย Trypsinogen จะถูกกระตุ้นเป็น Active Trypsin ก็ต่อเมื่อไหลไปสัมผัสกับเอนไซม์ Enteropeptidase (Enterokinase) บนผนัง Duodenum เท่านั้น',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 72,
    tags: ['zymogens', 'trypsinogen', 'enteropeptidase', 'pancreatitis-prevention'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-073',
    questionText: 'เอนไซม์ชนิดใดบนเยื่อบุ Brush border ของลำไส้เล็กส่วนต้น (Duodenum) ที่ทำหน้าที่ตัดสายเปปไทด์ของ Trypsinogen จากตับอ่อนให้กลายเป็น Active Trypsin ซึ่งจะไปกระตุ้น Zymogens อื่นๆ ทั้งหมดต่อไป?',
    options: {
      A: 'Enteropeptidase (Enterokinase)',
      B: 'Pepsin',
      C: 'Amylase',
      D: 'Lipase'
    },
    correctOption: 'A',
    explanation: 'Enteropeptidase (เดิมเรียก Enterokinase) เป็นเอนไซม์ที่ตรึงอยู่บน Microvilli ของ Duodenal enterocytes เมื่อสัมผัสกับ Pancreatic juice จะตัดสาย Hexapeptide ของ Trypsinogen ให้กลายเป็น Trypsin จากนั้น Trypsin จะทำหน้าที่เป็น Master activator ไปเร่งกระตุ้น Chymotrypsinogen, Procarboxypeptidase, และ Proelastase ให้กลายเป็น Active enzymes พร้อมย่อยอาหาร',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 72,
    tags: ['enteropeptidase', 'enterokinase', 'trypsin-activation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-074',
    questionText: 'ตับอ่อนส่วนไร้ท่อ (Endocrine pancreas) คิดเป็นประมาณ 1-2% ของเนื้อเยื่อตับอ่อนทั้งหมด รวมตัวกันเป็นเกาะเซลล์ขนาดเล็กเรียกว่า Islets of Langerhans เซลล์ชนิด Beta cells (บีตาเซลล์) ทำหน้าที่สร้างและหลั่งฮอร์โมนชนิดใด?',
    options: {
      A: 'Insulin (อินซูลิน) เพื่อลดระดับน้ำตาลในกระแสเลือดโดยนำกลูโคสเข้าสู่เซลล์',
      B: 'Glucagon (กลูคากอน) เพื่อเพิ่มระดับน้ำตาลในเลือด',
      C: 'Somatostatin (โซมาโตสแตติน)',
      D: 'Pancreatic polypeptide (PP)'
    },
    correctOption: 'A',
    explanation: 'ใน Islets of Langerhans ประกอบด้วย: 1. Beta cells (ประมาณ 70%): หลั่งฮอร์โมน Insulin ช่วยนำกลูโคสเข้าสู่กล้ามเนื้อและไขมัน สังเคราะห์ไกลโคเจน ลดน้ำตาลในเลือด 2. Alpha cells (20%): หลั่ง Glucagon สลายไกลโคเจนเพิ่มน้ำตาลในเลือด 3. Delta cells (5%): หลั่ง Somatostatin ยับยั้งทั้งอินซูลินและกลูคากอน',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 73,
    tags: ['islets-of-langerhans', 'beta-cells', 'insulin', 'alpha-cells', 'glucagon'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-075',
    questionText: 'ส่วนหางของตับอ่อน (Tail of the Pancreas) ทอดตัวไปสิ้นสุดทางกายวิภาคชิดติดกับอวัยวะใด และบรรจุอยู่ในเอ็นเยื่อบุช่องท้องชนิดใด?',
    options: {
      A: 'ชิดติดกับขั้วของม้าม (Hilum of the Spleen) โดยบรรจุอยู่ใน Splenorenal (Lienorenal) ligament',
      B: 'ชิดติดกับถุงน้ำดี',
      C: 'ชิดติดกับไส้ติ่ง',
      D: 'ชิดติดกับกระเพาะปัสสาวะ'
    },
    correctOption: 'A',
    explanation: 'Tail of pancreas เป็นส่วนเดียวของตับอ่อนที่จัดเป็น Intraperitoneal structure โดยทอดตัวเข้าไปแตะชิดกับ Hilum ของม้าม และบรรจุอยู่ภายใน Splenorenal (Lienorenal) ligament ร่วมกับหลอดเลือด Splenic vessels ในการผ่าตัดตัดม้าม (Splenectomy) ศัลยแพทย์จึงต้องระวังไม่ให้เกิดการบาดเจ็บต่อหางของตับอ่อน',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 70,
    tags: ['tail-of-pancreas', 'splenic-hilum', 'splenorenal-ligament'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 76-100: Comprehensive Digestive System Integration & Clinical Cases
  {
    id: 'DIGEST-076',
    questionText: 'กระบวนการย่อยสารอาหารประเภทคาร์โบไฮเดรต (Carbohydrate digestion) ในร่างกายมนุษย์เริ่มต้นขึ้นเป็นครั้งแรกที่อวัยวะใด โดยอาศัยเอนไซม์ชนิดใด?',
    options: {
      A: 'ในช่องปาก (Oral cavity) โดยอาศัยเอนไซม์ Salivary amylase (Ptyalin)',
      B: 'ในกระเพาะอาหาร โดยอาศัยเอนไซม์ Pepsin',
      C: 'ในลำไส้เล็ก โดยอาศัย Lactase',
      D: 'ในหลอดอาหาร โดยอาศัย Amylase จากหลอดอาหาร'
    },
    correctOption: 'A',
    explanation: 'การย่อยแป้งเริ่มต้นขึ้นทันทีในช่องปากขณะบดเคี้ยวอาหาร โดยเอนไซม์ Salivary alpha-amylase (Ptyalin) ซึ่งสร้างจากต่อมน้ำลาย (โดยเฉพาะ Parotid gland) จะย่อยแป้ง (Starch/Glycogen) ให้กลายเป็นโอลิโกแซ็กคาไรด์และมอลโทส จนกระทั่งอาหารถูกกลืนลงกระเพาะอาหาร กรด HCl จะทำให้เอนไซม์นี้หมดฤทธิ์ลง',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 23,
    tags: ['salivary-amylase', 'ptyalin', 'carbohydrate-digestion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-077',
    questionText: 'กระบวนการย่อยโปรตีน (Protein digestion) เริ่มต้นขึ้นเป็นครั้งแรกที่อวัยวะใดของระบบทางเดินอาหาร?',
    options: {
      A: 'กระเพาะอาหาร (Stomach) โดยเอนไซม์ Pepsin ร่วมกับกรดไฮโดรคลอริก',
      B: 'ช่องปาก โดยน้ำลาย',
      C: 'หลอดอาหาร โดยเมือก',
      D: 'ลำไส้ใหญ่ โดยแบคทีเรีย'
    },
    correctOption: 'A',
    explanation: 'ในช่องปากและหลอดอาหารไม่มีเอนไซม์ย่อยโปรตีน การย่อยโปรตีนเริ่มต้นขึ้นเป็นครั้งแรกในกระเพาะอาหาร เมื่อ Pepsinogen จาก Chief cells ถูกกรด HCl จาก Parietal cells กระตุ้นให้กลายเป็น Active Pepsin ทำหน้าที่ย่อยพันธะเปปไทด์ของโปรตีนสายยาวให้กลายเป็น Polypeptides และ Oligopeptides ขนาดเล็กลง',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 36,
    tags: ['protein-digestion', 'stomach', 'pepsin'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-078',
    questionText: 'น้ำดี (Bile) ที่สร้างจากตับไม่มีเอนไซม์ย่อยอาหารอยู่เลย แต่น้ำดีมีความจำเป็นอย่างยิ่งต่อการย่อยไขมันในทางเดินอาหารผ่านกลไกใด?',
    options: {
      A: 'Emulsification (การทำให้อนุภาคไขมันแตกตัวเป็นละอองหยดขนาดเล็ก เพื่อเพิ่มพื้นที่ผิวสัมผัสให้เอนไซม์ Pancreatic lipase เข้าย่อยสลายได้ง่ายขึ้น)',
      B: 'การเปลี่ยนไขมันให้กลายเป็นน้ำตาลกลูโคสโดยตรง',
      C: 'การสร้างความเย็นทำให้ไขมันแข็งตัวตกตะกอน',
      D: 'การยับยั้งการทำงานของเอนไซม์ไลเปส'
    },
    correctOption: 'A',
    explanation: 'น้ำดีประกอบด้วย Bile salts, Phospholipids (Lecithin), และ Cholesterol ซึ่งมีคุณสมบัติเป็นสารลดแรงตึงผิว (Amphipathic molecules) ช่วยลดแรงตึงผิวของก้อนไขมันขนาดใหญ่ แตกตัวออกเป็นละอองไขมันขนาดเล็กจิ๋ว (Emulsification) เพิ่มพื้นที่ผิวให้ Pancreatic lipase สามารถเข้าตัดพันธะ Triglycerides ได้อย่างรวดเร็ว',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 66,
    tags: ['bile-functions', 'emulsification', 'lipid-digestion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-079',
    questionText: 'ในกระบวนการดูดซึมไขมันที่ผนังลำไส้เล็ก กรดไขมันอิสระและโมโนกลีเซอไรด์จะถูกนำมารวมตัวใหม่ภายในเซลล์เยื่อบุผิว แล้วประกอบรวมเข้ากับโปรตีนกลายเป็นอนุภาคชนิดใดก่อนจะถูกหลั่งเข้าสู่หลอดน้ำเหลืองแล็กทีล (Lacteals)?',
    options: {
      A: 'Chylomicrons (ไคโลไมครอน)',
      B: 'Very Low Density Lipoproteins (VLDL)',
      C: 'High Density Lipoproteins (HDL)',
      D: 'Micelles'
    },
    correctOption: 'A',
    explanation: 'ภายใน Enterocytes: กรดไขมันและ Monoglycerides จะถูก Resynthesized เป็น Triglycerides ใน Smooth ER แล้วนำไปรวมกับ Cholesterol, Phospholipids และ Apolipoproteins กลายเป็นหยดไขมันชนิด Chylomicrons จากนั้นจะถูกหลั่งออกจากเซลล์โดย Exocytosis เข้าสู่หลอดน้ำเหลือง Lacteals (เนื่องจากมีขนาดใหญ่เกินกว่าจะเข้าหลอดเลือดฝอยได้)',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 47,
    tags: ['chylomicrons', 'fat-absorption', 'lacteals'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-080',
    questionText: 'หลอดเลือดดำที่ทำหน้าที่ระบายเลือดออกจากทางเดินอาหารในช่องท้องเพื่อส่งเข้าสู่ตับ มีชื่อว่าอะไร และทำไมเลือดจากทางเดินอาหารจึงต้องผ่านตับก่อนเข้าสู่หัวใจ?',
    options: {
      A: 'Hepatic Portal Vein เพื่อให้ตับทำหน้าที่ประมวลผล กักเก็บสารอาหารที่ดูดซึมมา และกำจัดสารพิษ ยา หรือแบคทีเรียแปลกปลอม (First-pass metabolism & detoxification)',
      B: 'Inferior Vena Cava เพื่อส่งสารอาหารตรงสู่สมองทันที',
      C: 'Aorta เพื่อสูบฉีดเลือดไปยังไต',
      D: 'Celiac vein เพื่อไปสร้างเม็ดเลือดแดง'
    },
    correctOption: 'A',
    explanation: 'Hepatic Portal System ลำเลียงเลือดดำจากกระเพาะอาหาร ลำไส้เล็ก ลำไส้ใหญ่ ม้าม และตับอ่อนเข้าสู่ตับโดยตรงทาง Hepatic Portal Vein เพื่อให้เซลล์ตับ (Hepatocytes) และเซลล์ Kupffer cells ได้ทำหน้าที่: 1. กรองดักจับเชื้อโรค 2. สลายสารพิษและยา (First-pass effect) 3. สังเคราะห์ไกลโคเจนและควบคุมระดับสารอาหารก่อนปล่อยสู่ระบบไหลเวียนร่างกาย',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 64,
    tags: ['hepatic-portal-vein', 'first-pass-metabolism', 'detoxification'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-081',
    questionText: 'ผู้ป่วยโรคตับแข็งที่มีภาวะความดันในระบบพอร์ทัลสูง (Portal Hypertension) มักเกิดการขยายตัวโป่งพองของหลอดเลือดดำที่รอยต่อพอร์ทัลกับระบบดำหลัก (Portosystemic anastomoses) บริเวณหลอดอาหารส่วนล่างจนเสี่ยงต่อการแตกเสียชีวิต เรียกว่าภาวะใด?',
    options: {
      A: 'Esophageal varices (หลอดเลือดขอดในหลอดอาหาร เกิดจากการเชื่อมกันของ Left gastric vein กับ Azygos vein)',
      B: 'Caput medusae ที่ขาหนีบ',
      C: 'Hemorrhoids ในกระเพาะอาหาร',
      D: 'Aortic aneurysm'
    },
    correctOption: 'A',
    explanation: 'บริเวณรอยต่อ Gastroesophageal junction เป็นจุด Portosystemic anastomosis ระหว่าง Left gastric vein (ระบบ Portal) กับ Esophageal tributaries ของ Azygos vein (ระบบ Systemic) เมื่อเกิด Portal hypertension เลือดจะไหลย้อนกลับผ่านจุดเชื่อมนี้ ทำให้หลอดเลือดดำใต้เยื่อบุหลอดอาหารโป่งพองเป็น Esophageal varices ซึ่งหากแตกจะทำให้เกิดอาเจียนเป็นเลือดสดปริมาณมหาศาล (Massive hematemesis)',
    system: systemName,
    topic: 'Pharynx & Esophagus',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 31,
    tags: ['esophageal-varices', 'portal-hypertension', 'portosystemic-anastomosis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-082',
    questionText: 'บริเวณรอยต่อ Portosystemic Anastomoses รอบสะดือ (Umbilicus) เมื่อมีความดันในระบบพอร์ทัลสูง จะเห็นหลอดเลือดดำใต้ผิวหนังรอบสะดือโป่งพองคดเคี้ยวแผ่เป็นรัศมีคล้ายหัวงูเมดูซ่า เรียกว่า Caput Medusae เกิดจากการเชื่อมกันของหลอดเลือดคู่ใด?',
    options: {
      A: 'Paraumbilical veins (ระบบ Portal) กับ Superficial Epigastric veins (ระบบ Systemic)',
      B: 'Hepatic vein กับ Renal vein',
      C: 'Splenic vein กับ Iliac vein',
      D: 'Left gastric vein กับ IVC'
    },
    correctOption: 'A',
    explanation: 'Caput Medusae เกิดจากการขยายตัวของ Paraumbilical veins (ทอดตาม Ligamentum teres hepatis ในระบบ Portal) ที่มาเชื่อมต่อกับ Superficial epigastric veins และ Superior/Inferior epigastric veins (ระบบ Systemic) บริเวณผนังหน้าท้องรอบสะดือ',
    system: systemName,
    topic: 'Peritoneum & Related Structures',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 64,
    tags: ['caput-medusae', 'paraumbilical-veins', 'portal-hypertension'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-083',
    questionText: 'โครงสร้างใดต่อไปนี้ทำหน้าที่ดูดซึมน้ำและสารอาหารส่วนใหญ่ (ประมาณ 85-90% ของปริมาณทั้งหมด) ในระบบทางเดินอาหาร?',
    options: {
      A: 'ลำไส้เล็ก (Small Intestine โดยเฉพาะ Jejunum)',
      B: 'กระเพาะอาหาร (Stomach)',
      C: 'ลำไส้ใหญ่ (Large Intestine)',
      D: 'หลอดอาหาร (Esophagus)'
    },
    correctOption: 'A',
    explanation: 'ลำไส้เล็ก (Small intestine) เป็นอวัยวะที่มีการย่อยทางเคมีและการดูดซึมสารอาหารมากที่สุดถึง 90% ของสารอาหารทั้งหมด (รวมถึงคาร์โบไฮเดรต โปรตีน ไขมัน วิตามิน แร่ธาตุ และน้ำส่วนใหญ่) เนื่องจากมีโครงสร้าง Plicae circulares, Villi, และ Microvilli ที่ให้พื้นที่ผิวสัมผัสมหาศาล',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 44,
    tags: ['nutrient-absorption', 'small-intestine-primary-site'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-084',
    questionText: 'ในสภาวะที่ไม่มีอาหาร (Fasting state) ระบบทางเดินอาหารจะเกิดการหดตัวเป็นคลื่นกวาดล้างกากอาหารและเศษแบคทีเรียที่คั่งค้างจากกระเพาะอาหารลงสู่ลำไส้เล็กทุกๆ 90-120 นาที คลื่นการบีบตัวนี้เรียกว่าอะไรและควบคุมโดยฮอร์โมนใด?',
    options: {
      A: 'Migrating Motor Complex (MMC) ควบคุมโดยฮอร์โมน Motilin',
      B: 'Peristalsis ควบคุมโดยฮอร์โมน Insulin',
      C: 'Segmentation ควบคุมโดยฮอร์โมน Gastrin',
      D: 'Haustral churning ควบคุมโดยฮอร์โมน Glucagon'
    },
    correctOption: 'A',
    explanation: 'Migrating Motor Complex (MMC) เป็นรูปแบบการบีบตัวของกล้ามเนื้อทางเดินอาหารแบบคลื่นลูกคลื่นเป็นระยะในช่วงที่ท้องว่าง (Interdigestive state) เริ่มจากกระเพาะอาหารและเคลื่อนที่ไปตามลำไส้เล็ก ทำหน้าที่เสมือน "Housekeeper" กวาดล้างเศษอาหารและแบคทีเรียลงสู่ลำไส้ใหญ่ โดยถูกกระตุ้นโดยฮอร์โมน Motilin จาก M cells ใน Duodenum/Jejunum',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 44,
    tags: ['migrating-motor-complex', 'mmc', 'motilin', 'housekeeper-contractions'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-085',
    questionText: 'ฟันน้ำนม (Deciduous / Primary teeth) ของเด็กมีจำนวนทั้งหมดกี่ซี่ และฟันชนิดใดที่ไม่พบเลยในชุดฟันน้ำนม?',
    options: {
      A: 'มีทั้งหมด 20 ซี่ และ "ไม่มีฟันกรามน้อย (Premolars)" เลยในชุดฟันน้ำนม',
      B: 'มีทั้งหมด 32 ซี่ และไม่มีฟันเขี้ยว',
      C: 'มีทั้งหมด 24 ซี่ และไม่มีฟันตัด',
      D: 'มีทั้งหมด 16 ซี่ และไม่มีฟันกรามแท้'
    },
    correctOption: 'A',
    explanation: 'ฟันน้ำนมมีทั้งหมด 20 ซี่ (เสี้ยวละ 5 ซี่: สูตร 2-1-0-2 ได้แก่ Incisors 2, Canine 1, Molars 2) โดยในชุดฟันน้ำนมจะ "ไม่มีฟันกรามน้อย (Premolars)" เมื่อฟันแท้งอกขึ้นมา ฟันกรามน้อยแท้ (Premolars) จะขึ้นมาแทนที่ตำแหน่งของฟันกรามน้ำนม (Deciduous molars)',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 25,
    tags: ['deciduous-teeth', 'no-premolars', 'dental-anatomy'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-086',
    questionText: 'กระดูกขากรรไกรล่าง (Mandible) เคลื่อนไหวในกระบวนการบดเคี้ยวอาหารด้วยการทำงานของกลุ่มกล้ามเนื้อเคี้ยว (Muscles of mastication) กล้ามเนื้อกลุ่มนี้เลี้ยงด้วยเส้นประสาทสมองคู่ใด?',
    options: {
      A: 'Mandibular nerve (CN V3 ซึ่งเป็นแขนงที่ 3 ของ Trigeminal nerve)',
      B: 'Facial nerve (CN VII)',
      C: 'Hypoglossal nerve (CN XII)',
      D: 'Glossopharyngeal nerve (CN IX)'
    },
    correctOption: 'A',
    explanation: 'Muscles of mastication ทั้ง 4 มัด (Masseter, Temporalis, Medial pterygoid, Lateral pterygoid) มีต้นกำเนิดจาก 1st Pharyngeal arch จึงเลี้ยงด้วย Mandibular nerve (CN V3 แขนงของ Trigeminal nerve) ส่วน Facial nerve (CN VII) เลี้ยงกล้ามเนื้อแสดงสีหน้า (Muscles of facial expression)',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 20,
    tags: ['muscles-of-mastication', 'cn-v3', 'mandibular-nerve'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-087',
    questionText: 'ร่องรูปตัววีบนผิวด้านบนของลิ้นที่แบ่งแยกระหว่าง 2/3 ส่วนหน้าของลิ้น (Oral part) กับ 1/3 ส่วนหลังของลิ้น (Pharyngeal part) คือข้อใด และที่ปลายยอดของตัววีมีหลุมบุ๋มชื่ออะไร?',
    options: {
      A: 'Sulcus terminalis โดยที่ปลายยอดมีหลุม Foramen Cecum',
      B: 'Median sulcus โดยที่ปลายยอดมี Lingual tonsil',
      C: 'Terminal line โดยมี Fossa ovalis',
      D: 'Glossoepiglottic fold โดยมี Vallecula'
    },
    correctOption: 'A',
    explanation: 'Sulcus terminalis เป็นร่องรูปตัว V คว่ำบนผิวด้านบนของลิ้น แบ่งลิ้นออกเป็น Anterior 2/3 (Body) และ Posterior 1/3 (Root) โดยที่มุมยอดกึ่งกลางของร่องตัว V มีหลุมบุ๋มเรียกว่า Foramen Cecum ซึ่งเป็นจุดกำเนิดทางคัพภวิทยาของ Thyroglossal duct ในการสร้างต่อมไทรอยด์',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 21,
    tags: ['sulcus-terminalis', 'foramen-cecum', 'tongue-development'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-088',
    questionText: 'สารคัดหลั่งน้ำลาย (Saliva) ประกอบด้วยสารใดที่มีคุณสมบัติทำลายผนังเซลล์ของแบคทีเรีย และแอนติบอดีชนิดใดที่ทำหน้าที่เป็นด่านหน้าทางภูมิคุ้มกันในช่องปาก?',
    options: {
      A: 'เอนไซม์ Lysozyme และแอนติบอดีชนิด Secretory IgA',
      B: 'เอนไซม์ Pepsin และแอนติบอดีชนิด IgG',
      C: 'เอนไซม์ Trypsin และแอนติบอดีชนิด IgE',
      D: 'กรดเกลือและฮิสตามีน'
    },
    correctOption: 'A',
    explanation: 'น้ำลายมีบทบาทสำคัญในการป้องกันการติดเชื้อในช่องปาก: 1. Lysozyme ย่อยผนังเซลล์แบคทีเรีย 2. Secretory IgA (sIgA) ดักจับเชื้อโรคไม่ให้เกาะติดเยื่อบุผิว 3. Lactoferrin แย่งจับธาตุเหล็กไม่ให้แบคทีเรียเจริญเติบโต 4. Bicarbonate ช่วยปรับสะเทินกรดจากแบคทีเรียป้องกันฟันผุ',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 23,
    tags: ['saliva-components', 'lysozyme', 'secretory-iga'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-089',
    questionText: 'เมื่อเกิดการกระตุ้นระบบประสาทพาราซิมพาเทติก (Parasympathetic stimulation) ต่อต่อมน้ำลายผ่านทางเส้นประสาทสมองคู่ที่ 7 และ 9 จะส่งผลต่อการหลั่งน้ำลายอย่างไร?',
    options: {
      A: 'กระตุ้นให้หลั่งน้ำลายชนิดใสปริมาณมาก อุดมด้วยน้ำและเอนไซม์ (Profuse watery saliva)',
      B: 'ยับยั้งการหลั่งน้ำลายจนเกิดภาวะปากแห้งสนิท',
      C: 'หลั่งน้ำลายเหนียวข้นที่มีมิวซินสูงเพียงเล็กน้อย',
      D: 'ไม่มีผลต่อการหลั่งน้ำลาย'
    },
    correctOption: 'A',
    explanation: 'ระบบ Parasympathetic (ผ่าน CN VII เลี้ยง Submandibular/Sublingual และ CN IX เลี้ยง Parotid) กระตุ้นให้เกิด Vasodilation และสั่งให้ Acinar cells หลั่งน้ำลายใสปริมาณมาก (Watery enzyme-rich saliva) เพื่อช่วยในการเคี้ยวและกลืน ส่วน Sympathetic จะทำให้หลอดเลือดหดตัวและหลั่งน้ำลายเหนียวข้นปริมาณน้อย',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 24,
    tags: ['parasympathetic-salivation', 'cn-vii', 'cn-ix', 'watery-saliva'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-090',
    questionText: 'ร่องแคบๆ ระหว่างริมฝีปากและแก้มกับแนวฟันและเหงือกด้านใน เรียกว่าบริเวณใดของช่องปาก?',
    options: {
      A: 'Oral vestibule',
      B: 'Oral cavity proper',
      C: 'Fauces',
      D: 'Gingival sulcus'
    },
    correctOption: 'A',
    explanation: 'ช่องปากแบ่งออกเป็น 2 ส่วน: 1. Oral vestibule คือช่องแคบๆ ระหว่างริมฝีปาก/แก้มด้านนอก กับฟันและเหงือกด้านใน (เป็นที่เปิดของท่อน้ำลาย Parotid duct) 2. Oral cavity proper คือช่องปากแท้จริงที่อยู่ด้านในของแนวฟัน เข้าไปจนถึง Oropharyngeal isthmus',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 20,
    tags: ['oral-vestibule', 'oral-cavity-proper'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-091',
    questionText: 'ท่อตับอ่อนเสริม (Accessory pancreatic duct หรือ Duct of Santorini) หากมีอยู่ตามความผันแปรทางกายวิภาค จะเปิดเข้าสู่ Duodenum ที่ตำแหน่งใด?',
    options: {
      A: 'Minor duodenal papilla ซึ่งอยู่เหนือกว่า Major duodenal papilla ประมาณ 2 ซม.',
      B: 'Major duodenal papilla ร่วมกับท่อน้ำดีใหญ่',
      C: 'Pyloric sphincter',
      D: 'Duodenojejunal flexure'
    },
    correctOption: 'A',
    explanation: 'Accessory pancreatic duct (Duct of Santorini) เป็นท่อระบายน้ำย่อยจากส่วนบนของ Head of pancreas จะทอดตัวไปเปิดเข้าสู่ผนัง Duodenum ที่ Minor duodenal papilla ซึ่งตั้งอยู่เหนือกว่า Major duodenal papilla ประมาณ 2 เซนติเมตร',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 71,
    tags: ['duct-of-santorini', 'minor-duodenal-papilla', 'accessory-pancreatic-duct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-092',
    questionText: 'สารสำคัญชนิดใดในน้ำดีที่ทำหน้าที่กำจัดของเสียจากกระบวนการแตกสลายของฮีโมโกลบินในเม็ดเลือดแดงที่หมดอายุขัย และหากเกิดการคั่งในเลือดจะทำให้ผิวหนังและตาขาวเปลี่ยนเป็นสีเหลือง (Jaundice)?',
    options: {
      A: 'Bilirubin (บิลิรูบิน)',
      B: 'Bile salts',
      C: 'Cholesterol',
      D: 'Lecithin'
    },
    correctOption: 'A',
    explanation: 'Bilirubin เป็นรงควัตถุสีเหลืองส้ม (Bile pigment) ซึ่งเป็นของเสียขั้นสุดท้ายจากการสลาย Heme ของฮีโมโกลบินในเม็ดเลือดแดงที่ม้ามและตับ ตับจะนำ Unconjugated bilirubin มาทำ Conjugation กับ Glucuronic acid กลายเป็น Conjugated bilirubin แล้วขับออกทางน้ำดี หากท่อน้ำดีอุดตันหรือตับทำงานบกพร่องจะเกิดภาวะดีซ่าน (Jaundice/Icterus)',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 66,
    tags: ['bilirubin', 'bile-pigments', 'jaundice', 'heme-catabolism'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-093',
    questionText: 'ในกระบวนการ Defecation reflex เมื่อก้อนอุจจาระเคลื่อนตัวเข้าสู่ Rectum จะกระตุ้น Stretch receptors ส่งสัญญาณประสาทพาราซิมพาเทติกผ่านทางไขสันหลังระดับใดมาสั่งการให้เกิดการถ่ายอุจจาระ?',
    options: {
      A: 'ระดับไขสันหลังส่วนกระเบนเหน็บ S2, S3, S4 (Pelvic splanchnic nerves)',
      B: 'ระดับไขสันหลังส่วนอก T1 - T5',
      C: 'ระดับไขสันหลังส่วนเอว L1 - L2',
      D: 'ระดับเส้นประสาทสมองคู่ที่ 10 (Vagus nerve)'
    },
    correctOption: 'A',
    explanation: 'Defecation reflex ควบคุมโดย Parasympathetic center ในไขสันหลังระดับ S2-S4 เมื่อ Rectum ขยายตัว สัญญาณจะวิ่งผ่าน Sensory fibers เข้าสู่ไขสันหลัง S2-S4 และส่งสัญญาณ Parasympathetic กลับมาตาม Pelvic splanchnic nerves สั่งให้ผนัง Sigmoid colon และ Rectum บีบตัวรุนแรง พร้อมกับสั่งคลาย Internal anal sphincter',
    system: systemName,
    topic: 'Rectum & Anal Canal',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 60,
    tags: ['defecation-reflex', 's2-s4', 'pelvic-splanchnic-nerves'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-094',
    questionText: 'ชั้นเยื่อบุ Mucosa ของกระเพาะอาหารมีเซลล์ Surface mucous cells ทำหน้าที่หลั่งสารชนิดใดที่มีความหนาแน่นสูงเพื่อปกป้องเซลล์จากการสัมผัสกับอาหารและกรด?',
    options: {
      A: 'Insoluble alkaline mucus (เมือกด่างที่ไม่ละลายน้ำ อุดมด้วย Bicarbonate และ Mucin)',
      B: 'กรดไฮโดรคลอริกเข้มข้น',
      C: 'เอนไซม์เปปซินบริสุทธิ์',
      D: 'น้ำเกลือไอโซโทนิก'
    },
    correctOption: 'A',
    explanation: 'Surface mucous cells บุคลุมผิวหน้าทั้งหมดของกระเพาะอาหารและ Gastric pits หลั่งเมือกชนิดพิเศษที่ไม่ละลายน้ำ (Insoluble viscid alkaline mucus) หนาประมาณ 1-1.5 มม. ซึ่งมีประจุลบดักจับ HCO3- ไว้ที่ผิว ช่วยรักษาค่า pH ติดผิวเซลล์ให้อยู่ที่ประมาณ 7 แม้ในโพรงกระเพาะจะมี pH 1.5-2.0 ก็ตาม',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 33,
    tags: ['surface-mucous-cells', 'alkaline-mucus', 'gastric-pit'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-095',
    questionText: 'หลอดเลือดแดงคู่ใดที่แตกแขนงมาจาก Celiac Trunk และ Superior Mesenteric Artery แล้วมาเชื่อมประสานกันรอบส่วนหัวของตับอ่อนและ Duodenum?',
    options: {
      A: 'Superior และ Inferior Pancreaticoduodenal arteries',
      B: 'Right และ Left Gastric arteries',
      C: 'Splenic และ Renal arteries',
      D: 'Cystic และ Hepatic arteries'
    },
    correctOption: 'A',
    explanation: 'Superior Pancreaticoduodenal artery (แขนงจาก Gastroduodenal a. ในระบบ Celiac trunk) วิ่งมาเชื่อมประสาน (Anastomosis) กับ Inferior Pancreaticoduodenal artery (แขนงจาก SMA) เกิดเป็นวงหลอดเลือดล้อมรอบ C-loop ของ Duodenum และ Head of Pancreas ซึ่งเป็นจุดเชื่อมต่อการไหลเวียนระหว่าง Foregut และ Midgut',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 70,
    tags: ['pancreaticoduodenal-arteries', 'foregut-midgut-anastomosis'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-096',
    questionText: 'โครงสร้างทางเดินอาหารส่วนใดที่มีบทบาทสำคัญที่สุดในการดูดซึมวิตามินที่ละลายในไขมัน (Vitamins A, D, E, K)?',
    options: {
      A: 'ลำไส้เล็กส่วนต้นและส่วนกลาง (Duodenum และ Jejunum) ร่วมกับการทำงานของน้ำดีและ Pancreatic lipase',
      B: 'กระเพาะอาหาร',
      C: 'ลำไส้ใหญ่ส่วน Sigmoid',
      D: 'หลอดอาหาร'
    },
    correctOption: 'A',
    explanation: 'วิตามินที่ละลายในไขมัน (Fat-soluble vitamins: A, D, E, K) ต้องอาศัยเกลือน้ำดีในการฟอร์มตัวเป็น Micelles และถูกดูดซึมพร้อมกับกรดไขมันในลำไส้เล็ก (โดยเฉพาะ Duodenum และ Jejunum) หากผู้ป่วยมีโรคท่อน้ำดีอุดตันหรือโรคตับอ่อน จะเกิดภาวะขาดวิตามินกลุ่มนี้ตามมา',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 47,
    tags: ['fat-soluble-vitamins', 'micelles', 'jejunum-absorption'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-097',
    questionText: 'ในทางเดินอาหาร เซลล์ Enterochromaffin-like cells (ECL cells) ในชั้นต่อมกระเพาะอาหาร ทำหน้าที่หลั่งสารเคมีสื่อกลางใดเพื่อไปกระตุ้น Parietal cells ให้หลั่งกรด HCl ผ่านทาง H2 receptors?',
    options: {
      A: 'Histamine (ฮิสตามีน)',
      B: 'Serotonin',
      C: 'Somatostatin',
      D: 'Acetylcholine'
    },
    correctOption: 'A',
    explanation: 'ECL cells ตั้งอยู่ใกล้ชิดกับ Parietal cells ในกระเพาะอาหาร เมื่อถูกกระตุ้นโดยฮอร์โมน Gastrin หรือเส้นประสาท Vagus จะหลั่ง Histamine ออกมาจับกับ Histamine H2 receptors บน Parietal cells กระตุ้นการหลั่งกรด HCl อย่างรวดเร็ว (ยาในกลุ่ม H2-blockers เช่น Cimetidine/Ranitidine ออกฤทธิ์ยับยั้งตัวรับนี้)',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 35,
    tags: ['ecl-cells', 'histamine', 'h2-receptor', 'parietal-activation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-098',
    questionText: 'เอนไซม์ย่อยไขมันในช่องปาก Lingual Lipase ถูกสร้างและหลั่งออกมาจากต่อมใด และมีคุณสมบัติพิเศษอย่างไรในการทำงาน?',
    options: {
      A: 'หลั่งจากต่อม Serous glands of Von Ebner บริเวณโคนลิ้น และสามารถทำงานย่อยไขมันได้ดีต่อเนื่องแม้ในสภาวะที่เป็นกรดของกระเพาะอาหาร',
      B: 'หลั่งจากต่อม Parotid และทำงานได้เฉพาะในสภาวะด่าง',
      C: 'หลั่งจากต่อมน้ำลาย Sublingual และย่อยเฉพาะโปรตีน',
      D: 'หลั่งจากกระพุ้งแก้ม'
    },
    correctOption: 'A',
    explanation: 'Lingual lipase สร้างจาก Von Ebner\'s serous glands ที่โคนลิ้น แม้จะหลั่งในช่องปากแต่มีคุณสมบัติทนกรด (Optimum pH 3.5-6.0) จึงไม่ถูกทำลายโดยกรดในกระเพาะอาหาร และทำหน้าที่ย่อย Triglycerides ร่วมกับ Gastric lipase ต่อเนื่องในกระเพาะอาหาร โดยเฉพาะในทารกแรกเกิดที่ดื่มนมแม่',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 23,
    tags: ['lingual-lipase', 'von-ebners-glands', 'acid-stable-lipase'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-099',
    questionText: 'โครงสร้างใดทำหน้าที่ควบคุมการเคลื่อนไหวและการหลั่งของระบบทางเดินอาหารโดยอัตโนมัติ โดยมีจำนวนเซลล์ประสาทมากกว่า 100 ล้านเซลล์ จนได้รับฉายาว่า "สมองที่สองของร่างกาย" (The second brain)?',
    options: {
      A: 'Enteric Nervous System (ENS ประกอบด้วย Myenteric และ Submucosal plexuses)',
      B: 'Central Nervous System',
      C: 'Sympathetic chain ganglia',
      D: 'Somatic motor system'
    },
    correctOption: 'A',
    explanation: 'Enteric Nervous System (ENS) เป็นเครือข่ายร่างแหเซลล์ประสาทอิสระที่ฝังตัวอยู่ในผนังทางเดินอาหารตั้งแต่หลอดอาหารจนถึงทวารหนัก ประกอบด้วย Myenteric (Auerbach\'s) plexus และ Submucosal (Meissner\'s) plexus สามารถควบคุม Reflexes ของการเคลื่อนไหว การหลั่ง และการไหลเวียนเลือดได้ด้วยตนเองแม้ถูกตัดขาดจากสมอง',
    system: systemName,
    topic: 'Histological Structure of the Digestive Tract',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 13,
    tags: ['enteric-nervous-system', 'ens', 'second-brain', 'myenteric-submucosal'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-100',
    questionText: 'ข้อใดสรุปหน้าที่สำคัญของตับ (Liver) ต่อกระบวนการเมแทบอลิซึมและการรักษาสมดุลของร่างกายได้อย่างถูกต้องและครอบคลุมที่สุด?',
    options: {
      A: '1. สร้างน้ำดีช่วยย่อยไขมัน 2. ควบคุมระดับน้ำตาลโดยสะสม Glycogen และสังเคราะห์กลูโคส (Gluconeogenesis) 3. สังเคราะห์โปรตีนพลาสมา (Albumin, Clotting factors) 4. เปลี่ยนแอมโมเนียเป็นยูเรีย และทำลายสารพิษ/ยา 5. สะสมวิตามินและแร่ธาตุ (A, D, B12, Iron)',
      B: '1. ผลิตกรดไฮโดรคลอริก 2. สร้างเม็ดเลือดขาวชนิดนิวโทรฟิล 3. ควบคุมการบีบตัวของหัวใจ',
      C: '1. ดูดซึมก๊าซคาร์บอนไดออกไซด์ 2. ขับปัสสาวะ 3. สร้างเอนไซม์เปปซิน',
      D: '1. กรองน้ำเหลือง 2. ผลิตฮอร์โมนไทรอยด์ 3. ย่อยแป้งในช่องปาก'
    },
    correctOption: 'A',
    explanation: 'ตับเป็นอวัยวะที่มีกิจกรรมทางชีวเคมีสูงที่สุดในร่างกาย ทำหน้าที่กว่า 500 อย่าง ได้แก่: ผลิตน้ำดี (Bile production), เมแทบอลิซึมของคาร์โบไฮเดรต/ไขมัน/โปรตีน, การสร้าง Albumin และ Clotting factors I, II, VII, IX, X, Urea cycle (เปลี่ยนแอมโมเนียมีพิษเป็นยูเรีย), Detoxification สลายยา/สารพิษ, และเป็นแหล่งสะสม Glycogen, Iron, และวิตามิน A, D, B12',
    system: systemName,
    topic: 'Liver, Gallbladder & Pancreas',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 60,
    tags: ['liver-functions-summary', 'metabolism', 'albumin-synthesis', 'urea-cycle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

module.exports = { part2 };
