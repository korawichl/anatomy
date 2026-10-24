/**
 * scripts/digestive_advanced_part1.cjs
 * Questions 1 - 50: GI Histology, Peritoneum, Oral Cavity, Salivary Glands, Esophagus, Stomach
 * Increased complexity by 20-30% with clinical vignettes and high-yield distractors
 */

const systemName = 'Digestive System';
const sourceFile = 'Digestive system_Nartnutda_261024_214326.pdf';

const part1 = [
  // 1-12: Histology of the GI Tract & Enteric Nervous System
  {
    id: 'DIGEST-001',
    questionText: 'ผนังของท่อทางเดินอาหาร (Gastrointestinal tract) โดยทั่วไปประกอบด้วยชั้นเนื้อเยื่อหลัก 4 ชั้น ลำดับจากด้านในลูเมนออกสู่ผิวนอกข้อใดถูกต้อง และชั้นใดเป็นที่อยู่ของหลอดเลือด หลอดน้ำเหลือง และร่างแหประสาท Meissner\'s plexus?',
    options: {
      A: 'Mucosa -> Submucosa -> Muscularis externa -> Serosa / Adventitia โดย Submucosa เป็นที่อยู่ของ Meissner\'s plexus',
      B: 'Submucosa -> Mucosa -> Muscularis externa -> Serosa โดย Mucosa เป็นที่อยู่ของ Meissner\'s plexus',
      C: 'Mucosa -> Muscularis externa -> Submucosa -> Serosa โดย Muscularis เป็นที่อยู่ของ Meissner\'s plexus',
      D: 'Serosa -> Muscularis externa -> Submucosa -> Mucosa โดย Adventitia เป็นที่อยู่ของ Meissner\'s plexus'
    },
    correctOption: 'A',
    explanation: 'ผนังทางเดินอาหารเรียงจากในออกนอก: 1. Mucosa (Epithelium, Lamina propria, Muscularis mucosae) 2. Submucosa (Dense irregular connective tissue มีหลอดเลือด หลอดน้ำเหลือง และ Submucosal/Meissner\'s plexus ควบคุมการหลั่งสาร) 3. Muscularis externa (Inner circular, Outer longitudinal มี Myenteric/Auerbach\'s plexus) 4. Serosa หรือ Adventitia',
    system: systemName,
    topic: 'Histological Structure of the Digestive Tract',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 9,
    tags: ['gi-histology', 'submucosa', 'meissners-plexus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-002',
    questionText: 'ชั้นเยื่อเมือก (Mucosa) ของระบบทางเดินอาหารประกอบด้วยชั้นย่อย 3 ชั้นเรียงจากด้านในสุดออกสู่ด้านนอกข้อใดถูกต้อง?',
    options: {
      A: 'Epithelium -> Lamina propria -> Muscularis mucosae',
      B: 'Lamina propria -> Epithelium -> Muscularis mucosae',
      C: 'Muscularis mucosae -> Lamina propria -> Epithelium',
      D: 'Epithelium -> Submucosa -> Muscularis externa'
    },
    correctOption: 'A',
    explanation: 'ชั้น Mucosa ประกอบด้วย 3 ชั้นย่อย: 1. Epithelium (สัมผัสอาหาร ทำหน้าที่ดูดซึมและหลั่งเมือก) 2. Lamina propria (เนื้อเยื่อเกี่ยวพันหลวม มีหลอดเลือดฝอยและ MALT) 3. Muscularis mucosae (ชั้นกล้ามเนื้อเรียบบางๆ ช่วยขยับรอยพับของเยื่อเมือก)',
    system: systemName,
    topic: 'Histological Structure of the Digestive Tract',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 11,
    tags: ['mucosa', 'lamina-propria', 'muscularis-mucosae'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-003',
    questionText: 'ในผู้ป่วยโรค Hirschsprung\'s disease ทารกแรกเกิดไม่สามารถถ่ายขี้เทา (Meconium) ได้เนื่องจากลำไส้ใหญ่ส่วนปลายขาดเซลล์ปมประสาท (Aganglionosis) ร่างแหประสาท Myenteric plexus (Auerbach\'s plexus) ซึ่งทำหน้าที่ควบคุม Peristalsis ตามปกติจะแทรกตัวอยู่ระหว่างชั้นเนื้อเยื่อใด?',
    options: {
      A: 'แทรกอยู่ระหว่างชั้นกล้ามเนื้อเรียบวงใน (Inner circular layer) และกล้ามเนื้อเรียบแนวยาว (Outer longitudinal layer) ของชั้น Muscularis externa',
      B: 'แทรกอยู่ระหว่างชั้น Mucosa กับชั้น Submucosa',
      C: 'แทรกอยู่ใต้ชั้น Serosa',
      D: 'แทรกอยู่ภายในชั้น Lamina propria'
    },
    correctOption: 'A',
    explanation: 'Myenteric (Auerbach\'s) plexus เป็นส่วนหนึ่งของ Enteric Nervous System ตั้งอยู่ระหว่างชั้น Inner circular และ Outer longitudinal muscle layers ของชั้น Muscularis externa ทำหน้าที่ควบคุมการเคลื่อนไหว (Motility) เช่น Peristalsis และ Segmentation หากขาดเซลล์ประสาทนี้ (Hirschsprung\'s disease) ลำไส้จะไม่คลายตัวและเกิดลำไส้อุดตัน',
    system: systemName,
    topic: 'Histological Structure of the Digestive Tract',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 13,
    tags: ['myenteric-plexus', 'auerbachs-plexus', 'hirschsprungs-disease', 'muscularis-externa'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-004',
    questionText: 'เยื่อบุผิว (Epithelium) ของระบบทางเดินอาหารมีการเปลี่ยนแปลงชนิดของเนื้อเยื่อตามหน้าที่ของแต่ละส่วน ข้อใดจับคู่ระหว่างอวัยวะกับชนิดของเนื้อเยื่อบุผิวได้ถูกต้องและแม่นยำที่สุด?',
    options: {
      A: 'หลอดอาหาร (Esophagus): Non-keratinized stratified squamous epithelium; กระเพาะอาหารและลำไส้เล็ก: Simple columnar epithelium',
      B: 'หลอดอาหาร: Simple columnar epithelium; ลำไส้เล็ก: Stratified squamous epithelium',
      C: 'ช่องปาก: Pseudostratified ciliated columnar epithelium; กระเพาะอาหาร: Transitional epithelium',
      D: 'ลำไส้ใหญ่: Stratified cuboidal epithelium; ทวารหนัก: Simple squamous epithelium'
    },
    correctOption: 'A',
    explanation: 'ส่วนที่ต้องทนต่อแรงเสียดทานจากการกลืนอาหาร (ช่องปาก คอหอย และหลอดอาหาร) จะบุด้วย Non-keratinized stratified squamous epithelium เพื่อป้องกันการสึกหรอ ส่วนที่มีการหลั่งน้ำย่อยและดูดซึมสารอาหาร (กระเพาะอาหาร ลำไส้เล็ก และลำไส้ใหญ่) จะเปลี่ยนเป็น Simple columnar epithelium พร้อมด้วย Goblet cells และ Microvilli',
    system: systemName,
    topic: 'Histological Structure of the Digestive Tract',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 10,
    tags: ['gi-epithelium', 'stratified-squamous', 'simple-columnar'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-005',
    questionText: 'อวัยวะในทางเดินอาหารส่วนที่อยู่นอกช่องเยื่อบุช่องท้อง (Retroperitoneal organs) เช่น หลอดอาหารและลำไส้ตรงส่วนล่าง จะมีผนังชั้นนอกสุดห่อหุ้มเป็นเนื้อเยื่อชนิดใดที่แตกต่างจากกระเพาะอาหาร?',
    options: {
      A: 'Adventitia ซึ่งเป็นเนื้อเยื่อเกี่ยวพันชนิด Areolar connective tissue ที่ไม่มี Mesothelium บุผิวด้านนอก',
      B: 'Serosa ซึ่งมีชั้น Mesothelium ชัดเจน',
      C: 'Peritoneum parietal layer',
      D: 'Dense regular tendon'
    },
    correctOption: 'A',
    explanation: 'อวัยวะ Intraperitoneal จะมีผนังชั้นนอกสุดเป็น Serosa (ประกอบด้วยเนื้อเยื่อเกี่ยวพันบางๆ คลุมด้วย Simple squamous mesothelium หรือ Visceral peritoneum) ส่วนอวัยวะ Retroperitoneal หรือนอกช่องท้อง (เช่น หลอดอาหาร ลำไส้ตรงส่วนล่าง) ผนังจะยึดติดกับเนื้อเยื่อข้างเคียงด้วยชั้น Adventitia (ไม่มี Mesothelium)',
    system: systemName,
    topic: 'Histological Structure of the Digestive Tract',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 14,
    tags: ['serosa-vs-adventitia', 'retroperitoneal-histology'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 6-15: Peritoneum, Mesenteries & Omenta
  {
    id: 'DIGEST-006',
    questionText: 'แผ่นเยื่อบุช่องท้องขนาดใหญ่ที่มีลักษณะเป็นถุงพับสองชั้น ห้อยย้อยลงมาจากขอบโค้งใหญ่ของกระเพาะอาหาร (Greater curvature) คลุมทับลำไส้เล็กคล้ายผ้ากันเปื้อน บรรจุไขมันและหลอดเลือดจำนวนมาก มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Greater Omentum (โอเมนตัมใหญ่ หรือฉายา "Policeman of the abdomen")',
      B: 'Lesser Omentum',
      C: 'Mesentery proper',
      D: 'Falciform ligament'
    },
    correctOption: 'A',
    explanation: 'Greater omentum ห้อยย้อยลงมาจาก Greater curvature ของกระเพาะอาหารลงมาคลุมลำไส้เล็ก แล้ววกกลับขึ้นไปยึดกับ Transverse colon อุดมด้วยไขมันและ Macrophages ทำหน้าที่ห่อหุ้มบริเวณที่มีการติดเชื้อหรือทะลุในช่องท้องเพื่อจำกัดการแพร่กระจาย จึงได้ฉายาว่า "Policeman of the abdomen"',
    system: systemName,
    topic: 'Peritoneum & Related Structures',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 17,
    tags: ['greater-omentum', 'policeman-of-abdomen', 'peritoneum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-007',
    questionText: 'แผ่นเยื่อแขวน Lesser Omentum เชื่อมระหว่างขอบโค้งเล็กของกระเพาะอาหาร (Lesser curvature) และส่วนต้นของ Duodenum เข้ากับผิวด้านล่างของตับ (Liver) ประกอบด้วยเอ็นสำคัญ 2 ส่วนคือข้อใด?',
    options: {
      A: 'Hepatogastric ligament และ Hepatoduodenal ligament',
      B: 'Gastrosplenic ligament และ Splenorenal ligament',
      C: 'Falciform ligament และ Coronary ligament',
      D: 'Phrenicocolic ligament และ Gastrocolic ligament'
    },
    correctOption: 'A',
    explanation: 'Lesser omentum ทอดระหว่างตับกับกระเพาะอาหารและลำไส้เล็กส่วนต้น แบ่งเป็น 2 ส่วน: 1. Hepatogastric ligament (แผ่นบาง เชื่อมตับกับ Lesser curvature) 2. Hepatoduodenal ligament (ขอบอิสระด้านขวาที่หนากว่า เชื่อมตับกับ Duodenum ส่วนต้น และเป็นที่บรรจุ Portal triad)',
    system: systemName,
    topic: 'Peritoneum & Related Structures',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 18,
    tags: ['lesser-omentum', 'hepatogastric', 'hepatoduodenal-ligament'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'CARDIO_DIGEST-008',
    id: 'DIGEST-008',
    questionText: 'ในการผ่าตัดควบคุมภาวะเลือดออกฉุกเฉินในตับ ศัลยแพทย์ทำการกดหนีบโครงสร้าง Portal Triad บริเวณขอบอิสระของ Hepatoduodenal ligament (Pringle maneuver) โครงสร้าง 3 ชนิดที่บรรจุอยู่ภายใน Portal Triad ประกอบด้วยข้อใด?',
    options: {
      A: 'Proper Hepatic Artery, Hepatic Portal Vein และ Common Bile Duct',
      B: 'Inferior Vena Cava, Hepatic Vein และ Cystic Duct',
      C: 'Celiac trunk, Splenic Vein และ Pancreatic Duct',
      D: 'Abdominal Aorta, Renal Artery และ Thoracic Duct'
    },
    correctOption: 'A',
    explanation: 'Portal Triad บรรจุอยู่ในขอบอิสระของ Hepatoduodenal ligament (ส่วนหนึ่งของ Lesser omentum) ประกอบด้วย: 1. Proper hepatic artery (นำเลือดแดงเข้าตับ) 2. Hepatic portal vein (นำเลือดดำที่มีสารอาหารเข้าตับ) 3. Common bile duct (นำน้ำดีออกจากตับ) การทำ Pringle maneuver จะหยุดการไหลเข้าของเลือดสู่ตับทั้งหมดชั่วคราว',
    system: systemName,
    topic: 'Peritoneum & Related Structures',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 18,
    tags: ['portal-triad', 'pringle-maneuver', 'hepatoduodenal-ligament'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-009',
    questionText: 'แผ่นเยื่อแขวนลำไส้รูปพัด (Mesentery proper) ทำหน้าที่ยึดแขวนอวัยวะใดไว้กับผนังช่องท้องด้านหลัง (Posterior abdominal wall) และเป็นทางผ่านของหลอดเลือด Superior Mesenteric vessels?',
    options: {
      A: 'Jejunum และ Ileum',
      B: 'กระเพาะอาหาร (Stomach)',
      C: 'Ascending colon และ Descending colon',
      D: 'ถุงน้ำดี (Gallbladder)'
    },
    correctOption: 'A',
    explanation: 'Mesentery proper (เยื่อแขวนลำไส้รูปพัด) มีรากเกาะ (Root of mesentery) ยาวประมาณ 15 ซม. ทอดเฉียงจากระดับ L2 ด้านซ้ายลงสู่ Right sacroiliac joint ทำหน้าที่ยึดแขวนลำไส้เล็กส่วน Jejunum และ Ileum ไว้กับผนังช่องท้องด้านหลัง เป็นทางทอดผ่านของ Superior mesenteric artery, vein, lymphatics และ nerves',
    system: systemName,
    topic: 'Peritoneum & Related Structures',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 19,
    tags: ['mesentery-proper', 'jejunum', 'ileum', 'sma'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-010',
    questionText: 'อวัยวะในช่องท้องกลุ่มใดจัดเป็น Retroperitoneal organs (อวัยวะที่อยู่นอกหรือหลังเยื่อบุช่องท้อง) ทั้งหมด?',
    options: {
      A: 'ไต (Kidneys), ต่อมหมวกไต (Adrenal glands), ตับอ่อน (Pancreas ยกเว้นหาง), และ Duodenum (ส่วนที่ 2-4)',
      B: 'กระเพาะอาหาร (Stomach), ม้าม (Spleen), และตับ (Liver)',
      C: 'Jejunum, Ileum, และ Transverse colon',
      D: 'Cecum, Appendix, และ Sigmoid colon'
    },
    correctOption: 'A',
    explanation: 'อวัยวะ Retroperitoneal (ตามสูตรจำ SAD PUCKER) ได้แก่ Suprarenal glands, Aorta/IVC, Duodenum (2nd-4th parts), Pancreas (ยกเว้น tail), Ureters, Colon (Ascending & Descending), Kidneys, Esophagus, Rectum อวัยวะเหล่านี้ถูกคลุมด้วยเยื่อบุช่องท้องเฉพาะผิวด้านหน้าเท่านั้น',
    system: systemName,
    topic: 'Peritoneum & Related Structures',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 16,
    tags: ['retroperitoneal-organs', 'pancreas', 'kidneys', 'duodenum'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 11-20: Mouth, Tongue, Teeth & Salivary Glands
  {
    id: 'DIGEST-011',
    questionText: 'ต่อมน้ำลายขนาดใหญ่ที่สุดในร่างกายคือต่อมใด ตั้งอยู่บริเวณใด และท่อน้ำลายของต่อมนี้เจาะเปิดเข้าสู่ช่องปากที่ตำแหน่งใด?',
    options: {
      A: 'Parotid gland ตั้งอยู่หน้าและใต้ใบหู ท่อ Stensen\'s duct เจาะผ่านกล้ามเนื้อ Buccinator เปิดเข้าสู่กระพุ้งแก้มตรงข้ามฟันกรามบนซี่ที่ 2 (Upper 2nd molar)',
      B: 'Submandibular gland ท่อ Wharton\'s duct เปิดใต้โคนลิ้น',
      C: 'Sublingual gland ท่อ Rivinus เปิดที่พื้นปาก',
      D: 'Von Ebner\'s gland เปิดที่ร่อง Circumvallate papillae'
    },
    correctOption: 'A',
    explanation: 'Parotid gland เป็นต่อมน้ำลายขนาดใหญ่ที่สุด ตั้งอยู่หน้าและใต้รูหู (หุ้มด้วย Parotid fascia) หลั่งน้ำลายชนิดใส (Pure serous) มีท่อน้ำลาย Parotid duct (Stensen\'s duct) ทอดข้ามกล้ามเนื้อ Masseter เจาะผ่าน Buccinator ไปเปิดที่กระพุ้งแก้มตรงข้ามฟันกรามบนซี่ที่ 2',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 23,
    tags: ['parotid-gland', 'stensens-duct', 'upper-2nd-molar'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-012',
    questionText: 'ผู้ป่วยเด็กเป็นโรคคางทูม (Mumps) มีการอักเสบและบวมโตของต่อมน้ำลาย Parotid gland ทั้งสองข้าง โครงสร้างทางกายวิภาคที่สำคัญเส้นใดที่ทอดผ่านทะลุเข้าไปในเนื้อของต่อมน้ำลายนี้และอาจเกิดการอักเสบกดทับได้?',
    options: {
      A: 'เส้นประสาทสมองคู่ที่ 7 (Facial nerve: CN VII) ซึ่งแตกแขนง 5 แขนงภายในเนื้อต่อม',
      B: 'เส้นประสาทสมองคู่ที่ 5 (Trigeminal nerve)',
      C: 'เส้นประสาทสมองคู่ที่ 12 (Hypoglossal nerve)',
      D: 'เส้นประสาท Vagus nerve'
    },
    correctOption: 'A',
    explanation: 'โครงสร้างที่ทอดผ่านเนื้อต่อม Parotid gland จากตื้นไปลึก: 1. Facial nerve (CN VII) ซึ่งแยกเป็น 5 แขนงใหญ่เลี้ยงกล้ามเนื้อใบหน้า (Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical) 2. Retromandibular vein 3. External carotid artery การผ่าตัดต่อมพารอติตจึงต้องระมัดระวังไม่ให้เกิด Facial nerve palsy',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 23,
    tags: ['parotid-gland', 'facial-nerve', 'mumps', 'cn-vii'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-013',
    questionText: 'ต่อมน้ำลาย Submandibular gland ผลิตน้ำลายคิดเป็นสัดส่วนมากที่สุดของร่างกายขณะพัก (ประมาณ 65-70%) น้ำลายที่ผลิตมีลักษณะอย่างไร และท่อน้ำลายของต่อมนี้มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'ผลิตน้ำลายแบบผสมโดยเน้นชนิดใส (Mixed, serous-predominant) และส่งผ่านท่อ Wharton\'s duct ไปเปิดที่ Sublingual caruncle ใต้โคนลิ้น',
      B: 'ผลิตน้ำลายเหนียวข้นล้วน ผ่านท่อ Stensen\'s duct',
      C: 'ผลิตน้ำลายใสล้วน ผ่านท่อ Rivinus',
      D: 'ผลิตเฉพาะเอนไซม์เปปซิน'
    },
    correctOption: 'A',
    explanation: 'Submandibular gland ตั้งอยู่ใน Submandibular triangle ใต้แนวกรามล่าง ผลิตน้ำลายปริมาณมากที่สุดขณะพัก (65-70%) เป็นน้ำลายชนิดผสมโดยมี Serous acini มากกว่า Mucous acini (Serous-predominant) ส่งผ่านท่อ Wharton\'s duct (ยาวประมาณ 5 ซม.) ไปเปิดที่ปุ่ม Sublingual caruncle ข้าง Frenulum ใต้ลิ้น',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 24,
    tags: ['submandibular-gland', 'whartons-duct', 'sublingual-caruncle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-014',
    questionText: 'ต่อมน้ำลาย Sublingual gland ตั้งอยู่ใต้เยื่อบุพื้นปากด้านหน้า มีลักษณะทางเนื้อเยื่อและการเปิดของท่อน้ำลายอย่างไร?',
    options: {
      A: 'เป็นต่อมน้ำลายขนาดเล็กที่สุด ผลิตน้ำลายชนิดเมือกเหนียวข้นเป็นหลัก (Predominantly mucous) และเปิดเข้าสู่ใต้ลิ้นผ่านท่อขนาดเล็กจำนวนมากเรียกว่า Ducts of Rivinus',
      B: 'ผลิตน้ำลายใสล้วน ผ่านท่อเดียวขนาดใหญ่ชื่อ Stensen\'s duct',
      C: 'ตั้งอยู่หลังคอหอย ผลิตน้ำย่อยไขมัน',
      D: 'มีเนื้อเยื่อแบบกล้ามเนื้อลายล้วน'
    },
    correctOption: 'A',
    explanation: 'Sublingual gland เป็นต่อมน้ำลายหลักที่มีขนาดเล็กที่สุด อยู่ใต้ลิ้นเหนือกล้ามเนื้อ Mylohyoid หลั่งน้ำลายที่มีมิวซินสูงเหนียวข้น (Predominantly mucous) น้ำลายจะเปิดออกสู่พื้นปากผ่านท่อเล็กๆ 8-20 ท่อ เรียกว่า Ducts of Rivinus (และบางส่วนรวมเป็นท่อใหญ่ Bartholin\'s duct ไปเปิดร่วมกับ Wharton\'s duct)',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 24,
    tags: ['sublingual-gland', 'ducts-of-rivinus', 'mucous-saliva'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-015',
    questionText: 'ปุ่มลิ้น (Lingual papillae) ชนิดใดที่มีจำนวนมากที่สุดบนผิวด้านบนของลิ้น มีลักษณะเป็นหนามรูปกรวย มีเคราติน แต่ "ไม่มีต่อมรับรส" (No taste buds) ทำหน้าที่สร้างแรงเสียดทานช่วยคลุกเคล้าอาหาร?',
    options: {
      A: 'Filiform papillae',
      B: 'Fungiform papillae',
      C: 'Circumvallate papillae',
      D: 'Foliate papillae'
    },
    correctOption: 'A',
    explanation: 'Filiform papillae มีจำนวนมากที่สุด กระจายทั่ว 2/3 ส่วนหน้าของลิ้น เป็นปุ่มขนาดเล็กรูปกรวย ปลายมีเคราตินสีขาว ไม่มี Taste buds ทำหน้าที่รับสัมผัสเชิงกล (Mechanical/Tactile) สร้างแรงเสียดทานเพื่อขยับอาหารขณะเคี้ยว ส่วน Fungiform, Foliate, และ Circumvallate ล้วนมี Taste buds',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 21,
    tags: ['filiform-papillae', 'no-taste-buds', 'tongue-anatomy'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-016',
    questionText: 'ปุ่มลิ้นชนิด Circumvallate (Vallate) papillae มีขนาดใหญ่ที่สุด เรียงตัวเป็นรูปตัววี (V-shaped) อยู่ด้านหน้าของร่องใด และมีต่อมน้ำลายชนิดใดเปิดน้ำลายใสมาชะล้างร่องรอบปุ่ม?',
    options: {
      A: 'เรียงตัวอยู่หน้าต่อ Sulcus terminalis โดยมีต่อมน้ำลายใสของ Von Ebner\'s glands เปิดมาชะล้าง',
      B: 'เรียงตัวอยู่หลังต่อ Lingual tonsil โดยมี Submandibular glands เปิดมาชะล้าง',
      C: 'เรียงตัวรอบขอบลิ้น มี Parotid gland เปิดมาชะล้าง',
      D: 'เรียงตัวที่ปลายลิ้น มี Meibomian glands เปิดมาชะล้าง'
    },
    correctOption: 'A',
    explanation: 'Circumvallate papillae มีขนาดใหญ่ 8-12 ปุ่ม เรียงเป็นแถวรูปตัววี (V-shape) อยู่ด้านหน้า Sulcus terminalis มี Taste buds จำนวนมากอยู่ตามร่องด้านข้างของปุ่ม และมีต่อมน้ำลายใสบริสุทธิ์ชื่อ Serous glands of Von Ebner หลั่งน้ำลายมาชะล้างร่องเพื่อเตรียมรับสารเคมีใหม่',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 22,
    tags: ['circumvallate-papillae', 'sulcus-terminalis', 'von-ebners-glands'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-017',
    questionText: 'การรับความรู้สึกรับรส (Taste sensation) จากตุ่มรับรสของลิ้น 2 ใน 3 ส่วนหน้า (Anterior 2/3 of tongue) ส่งสัญญาณประสาทผ่านทางเส้นประสาทสมองคู่ใด?',
    options: {
      A: 'เส้นประสาทสมองคู่ที่ 7 (Facial nerve: CN VII ผ่าน Chorda tympani)',
      B: 'เส้นประสาทสมองคู่ที่ 9 (Glossopharyngeal nerve: CN IX)',
      C: 'เส้นประสาทสมองคู่ที่ 5 (Trigeminal nerve: CN V3)',
      D: 'เส้นประสาทสมองคู่ที่ 12 (Hypoglossal nerve: CN XII)'
    },
    correctOption: 'A',
    explanation: 'การเลี้ยงประสาทของลิ้น: 1. Anterior 2/3: รับรสโดย CN VII (Chorda tympani), รับความรู้สึกทั่วไป (เจ็บ ร้อน) โดย CN V3 (Lingual nerve) 2. Posterior 1/3: ทั้งรับรสและรับความรู้สึกทั่วไปโดย CN IX (Glossopharyngeal nerve) 3. กล้ามเนื้อลิ้นทั้งหมดเลี้ยงโดย CN XII (Hypoglossal nerve ยกเว้น Palatoglossus)',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 22,
    tags: ['tongue-innervation', 'taste-sensation', 'chorda-tympani', 'cn-vii'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-018',
    questionText: 'สูตรฟันแท้ (Permanent teeth formula) ของมนุษย์ในขากรรไกรแต่ละข้าง (ครึ่งซีกบนหรือล่าง) ประกอบด้วยฟันชนิดต่างๆ รวม 16 ซี่ต่อขากรรไกร ข้อใดเรียงลำดับจากด้านหน้ากึ่งกลางไปสู่ด้านหลังได้ถูกต้อง?',
    options: {
      A: 'Incisors 2, Canine 1, Premolars 2, Molars 3 (2-1-2-3)',
      B: 'Incisors 2, Canine 1, Premolars 0, Molars 2 (2-1-0-2 ซึ่งเป็นฟันน้ำนม)',
      C: 'Incisors 1, Canine 2, Premolars 3, Molars 2',
      D: 'Incisors 3, Canine 1, Premolars 1, Molars 3'
    },
    correctOption: 'A',
    explanation: 'สูตรฟันแท้ของผู้ใหญ่ในแต่ละเสี้ยว (Quadrant) คือ 2-1-2-3 ได้แก่ Central/Lateral Incisors 2 ซี่, Canine (เขี้ยว) 1 ซี่, Premolars (กรามน้อย) 2 ซี่, และ Molars (กรามใหญ่) 3 ซี่ รวม 8 ซี่ต่อเสี้ยว สองข้างรวมเป็น 16 ซี่ต่อขากรรไกร และรวมทั้งหมด 32 ซี่',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 25,
    tags: ['dental-formula', 'permanent-teeth', 'incisors', 'molars'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-019',
    questionText: 'สารประกอบที่มีความแข็งแกร่งมากที่สุดในร่างกายมนุษย์ ซึ่งทำหน้าที่คลุมผิวด้านนอกของตัวฟัน (Crown) ป้องกันการสึกกร่อนจากกรดและการบดเคี้ยวคือข้อใด?',
    options: {
      A: 'Enamel (สารเคลือบฟัน)',
      B: 'Dentin (เนื้อฟัน)',
      C: 'Cementum (สารเคลือบรากฟัน)',
      D: 'Pulp (โพรงประสาทฟัน)'
    },
    correctOption: 'A',
    explanation: 'Enamel (สารเคลือบฟัน) เป็นแร่ธาตุไฮดรอกซีอะพาไทต์ถึง 96-97% เป็นสารที่แข็งที่สุดในร่างกาย คลุมผิวชั้นนอกของ Crown เซลล์ Ameloblasts ที่สร้างสารเคลือบฟันจะสลายไปเมื่อฟันงอกพ้นเหงือก จึงไม่สามารถสร้างทดแทนใหม่ได้หากสึกหรอ',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 26,
    tags: ['enamel', 'tooth-anatomy', 'hydroxyapatite'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-020',
    questionText: 'ข้อต่อทางกายวิภาคชนิด Fibrous joint ชนิดพิเศษที่ยึดรากฟัน (Root of tooth) แน่นสนิทไว้กับเบ้ากระดูกขากรรไกร (Alveolar bone) ผ่านทางเส้นใยเอ็น Periodontal ligament เรียกว่าข้อต่อชนิดใด?',
    options: {
      A: 'Gomphosis (Peg-and-socket joint)',
      B: 'Suture',
      C: 'Syndesmosis',
      D: 'Symphysis'
    },
    correctOption: 'A',
    explanation: 'Gomphosis (Peg-and-socket fibrous joint) เป็นข้อต่อพิเศษที่ตรึงเดือย (รากฟัน) เข้ากับเบ้า (Alveolus) โดยมีเส้นใยคอลลาเจนหนาแน่นของ Periodontal ligament ยึดระหว่าง Cementum ของฟันกับ Alveolar bone ของขากรรไกร ช่วยดูดซับแรงกระแทกขณะเคี้ยว',
    system: systemName,
    topic: 'Mouth, Tongue & Salivary Glands',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 26,
    tags: ['gomphosis', 'periodontal-ligament', 'fibrous-joint'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 21-30: Pharynx & Esophagus
  {
    id: 'DIGEST-021',
    questionText: 'คอหอย (Pharynx) แบ่งออกเป็น 3 ส่วนตามตำแหน่งทางกายวิภาค ส่วนใดของคอหอยที่ทำหน้าที่เป็นทางผ่านร่วมกันของทั้งอาหารและอากาศ (Common passage for food and air)?',
    options: {
      A: 'Oropharynx และ Laryngopharynx',
      B: 'Nasopharynx เท่านั้น',
      C: 'Trachea',
      D: 'Larynx'
    },
    correctOption: 'A',
    explanation: 'Nasopharynx ทำหน้าที่เป็นทางผ่านเฉพาะอากาศเท่านั้น ส่วน Oropharynx (หลังช่องปาก) และ Laryngopharynx/Hypopharynx (หลังกล่องเสียงลงไปถึงหลอดอาหาร) ทำหน้าที่เป็นทางผ่านร่วมของทั้งอาหารที่กลืนลงมาและอากาศที่หายใจผ่าน ทั้งสองส่วนนี้จึงบุด้วย Stratified squamous epithelium',
    system: systemName,
    topic: 'Pharynx & Esophagus',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 27,
    tags: ['oropharynx', 'laryngopharynx', 'food-air-passage'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-022',
    questionText: 'ในระยะ Pharyngeal phase ของกลไกการกลืนอาหาร (Swallowing reflex) โครงสร้างกระดูกอ่อนรูปใบไม้ชนิดใดที่ทำหน้าที่พับเอียงลงมาปิดช่องเปิดของกล่องเสียง (Laryngeal inlet) เพื่อป้องกันไม่ให้อาหารสำลักเข้าสู่หลอดลม?',
    options: {
      A: 'Epiglottis (ฝาปิดกล่องเสียง)',
      B: 'Thyroid cartilage',
      C: 'Cricoid cartilage',
      D: 'Arytenoid cartilage'
    },
    correctOption: 'A',
    explanation: 'ในระหว่าง Pharyngeal stage ของการกลืน (ซึ่งเป็น Involuntary reflex) กล่องเสียงจะถูกยกตัวขึ้นด้านบนและด้านหน้า ดันให้กระดูกอ่อน Epiglottis พับปิด Laryngeal inlet ไว้ พร้อมกับ Vocal cords หดชิดกัน เพื่อป้องกันไม่ให้ก้อนอาหาร (Bolus) ตกลงสู่ Trachea',
    system: systemName,
    topic: 'Pharynx & Esophagus',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 28,
    tags: ['epiglottis', 'swallowing-reflex', 'aspiration-prevention'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-023',
    questionText: 'ชั้นกล้ามเนื้อ Muscularis externa ของหลอดอาหาร (Esophagus) มีการกระจายตัวของชนิดเซลล์กล้ามเนื้อตลอดความยาว 25 เซนติเมตร อย่างไร?',
    options: {
      A: 'ส่วนบน 1/3 เป็นกล้ามเนื้อลายล้วน (Skeletal muscle), ส่วนกลาง 1/3 เป็นกล้ามเนื้อลายผสมกล้ามเนื้อเรียบ, และส่วนล่าง 1/3 เป็นกล้ามเนื้อเรียบล้วน (Smooth muscle)',
      B: 'เป็นกล้ามเนื้อลายล้วนตลอดทั้งท่อ',
      C: 'เป็นกล้ามเนื้อเรียบล้วนตลอดทั้งท่อ',
      D: 'ส่วนบนเป็นกล้ามเนื้อเรียบ ส่วนล่างเป็นกล้ามเนื้อลาย'
    },
    correctOption: 'A',
    explanation: 'Muscularis externa ของหลอดอาหารมีการเปลี่ยนผ่านชนิดของกล้ามเนื้อ: 1. Upper 1/3 = Skeletal muscle (ควบคุมได้บางส่วน) 2. Middle 1/3 = Mixed skeletal and smooth muscle 3. Lower 1/3 = Smooth muscle ล้วน (ควบคุมโดยระบบประสาทอัตโนมัติ Vagus nerve)',
    system: systemName,
    topic: 'Pharynx & Esophagus',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 30,
    tags: ['esophagus-muscularis', 'skeletal-to-smooth-muscle'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-024',
    questionText: 'หลอดอาหารทอดตัวผ่านช่องเปิดของกล้ามเนื้อกะบังลม (Diaphragm) เข้าสู่ช่องท้องที่ระดับกระดูกสันหลังระดับใด และช่องเปิดดังกล่าวมีชื่อว่าอะไร?',
    options: {
      A: 'ระดับกระดูกสันหลังส่วนอกข้อที่ 10 (T10) ผ่านทาง Esophageal hiatus',
      B: 'ระดับ T8 ผ่านทาง Vena caval foramen',
      C: 'ระดับ T12 ผ่านทาง Aortic hiatus',
      D: 'ระดับ L1 ผ่านทาง Foramen ovale'
    },
    correctOption: 'A',
    explanation: 'ช่องเปิดสำคัญบนกะบังลม: 1. Caval opening (T8) สำหรับ IVC 2. Esophageal hiatus (T10) สำหรับ Esophagus และ Vagus nerves 3. Aortic hiatus (T12) สำหรับ Aorta, Thoracic duct และ Azygos vein (สูตรจำ: I 8 10 Eggs At 12)',
    system: systemName,
    topic: 'Pharynx & Esophagus',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 29,
    tags: ['esophageal-hiatus', 't10', 'diaphragm-apertures'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-025',
    questionText: 'ผู้ป่วยโรคกรดไหลย้อนรุนแรง (Gastroesophageal Reflux Disease: GERD) เกิดจากการคลายตัวผิดปกติของ Lower Esophageal Sphincter (LES) การสัมผัสกรดเรื้อรังทำให้เกิดการเปลี่ยนสภาพของเนื้อเยื่อ (Metaplasia) บริเวณรอยต่อ Gastroesophageal junction (Z-line) จากเนื้อเยื่อชนิดใดเป็นชนิดใด (Barrett\'s esophagus)?',
    options: {
      A: 'เปลี่ยนจาก Non-keratinized stratified squamous epithelium กลายเป็น Simple columnar epithelium ที่มี Goblet cells คล้ายเยื่อบุลำไส้',
      B: 'เปลี่ยนจาก Simple columnar กลายเป็น Stratified keratinized epithelium',
      C: 'เปลี่ยนจาก Simple cuboidal กลายเป็น Transitional epithelium',
      D: 'เปลี่ยนจาก Smooth muscle กลายเป็น Skeletal muscle'
    },
    correctOption: 'A',
    explanation: 'Barrett\'s esophagus เป็นภาวะแทรกซ้อนของ GERD เกิด Intestinal metaplasia โดยกรดจากกระเพาะกัดทำลายเซลล์เยื่อบุผิว Stratified squamous ของหลอดอาหาร ร่างกายจึงปรับตัวเปลี่ยนเป็น Simple columnar epithelium พร้อม Goblet cells เพื่อทนกรด ซึ่งภาวะนี้จัดเป็น Precancerous lesion เสี่ยงต่อการเกิด Esophageal adenocarcinoma',
    system: systemName,
    topic: 'Pharynx & Esophagus',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 31,
    tags: ['gerd', 'barretts-esophagus', 'metaplasia', 'z-line'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 26-45: Stomach Anatomy, Histology & Secretory Cells
  {
    id: 'DIGEST-026',
    questionText: 'กระเพาะอาหาร (Stomach) แบ่งออกเป็น 4 ส่วนทางกายวิภาค ส่วนโค้งกระเปาะที่ยื่นนูนขึ้นไปอยู่เหนือระดับของจุดเชื่อมต่อระหว่างหลอดอาหารกับกระเพาะอาหาร (Cardia) ใต้กะบังลมด้านซ้าย มีชื่อเรียกว่าอะไร?',
    options: {
      A: 'Fundus',
      B: 'Body (Corpus)',
      C: 'Pyloric antrum',
      D: 'Cardia'
    },
    correctOption: 'A',
    explanation: 'ส่วนของกระเพาะอาหาร: 1. Cardia (ส่วนต้นล้อมรอบรูเปิดของหลอดอาหาร) 2. Fundus (ส่วนกระเปาะโค้งนูนขึ้นด้านบนซ้ายเหนือแนวระนาบ Cardia มักเป็นที่ขังของแก๊สในกระเพาะที่เห็นบนภาพ X-ray) 3. Body (ส่วนกลางขนาดใหญ่ที่สุด) 4. Pylorus (ส่วนปลายเชื่อมกับ Duodenum)',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 32,
    tags: ['stomach-regions', 'fundus', 'cardia'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-027',
    questionText: 'ชั้นกล้ามเนื้อ Muscularis externa ของกระเพาะอาหารมีความพิเศษแตกต่างจากอวัยวะอื่นในทางเดินอาหารทั้งหมดอย่างไร?',
    options: {
      A: 'มีชั้นกล้ามเนื้อเรียบ 3 ชั้น (เพิ่มชั้นในสุด Inner oblique layer เสริมจาก Middle circular และ Outer longitudinal layers) เพื่อช่วยบดขยี้และคลุกเคล้าอาหารกับน้ำย่อยแบบ 3 มิติ',
      B: 'มีเฉพาะกล้ามเนื้อลายเท่านั้น',
      C: 'มีกล้ามเนื้อเพียงชั้นเดียวเพื่อเพิ่มความจุ',
      D: 'มีแผ่นกระดูกอ่อนแทรกในชั้นกล้ามเนื้อ'
    },
    correctOption: 'A',
    explanation: 'กระเพาะอาหารเป็นอวัยวะเดียวในทางเดินอาหารที่มีกล้ามเนื้อเรียบ 3 ชั้นในชั้น Muscularis externa ได้แก่: 1. Inner oblique layer (ชั้นในสุด ทอดเฉียง ช่วยบดและขยี้อาหาร) 2. Middle circular layer (ชั้นกลาง หนาตัวขึ้นเป็น Pyloric sphincter) 3. Outer longitudinal layer (ชั้นนอกสุด)',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 34,
    tags: ['stomach-muscularis', 'three-muscle-layers', 'inner-oblique'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-028',
    questionText: 'รอยพับของชั้นเยื่อเมือก (Mucosa and Submucosa) ภายในกระเพาะอาหารที่มองเห็นได้ด้วยตาเปล่าในขณะที่กระเพาะอาหารว่างและแฟบลง แต่จะขยายเรียบตึงเมื่อมีอาหารบรรจุอยู่ เรียกว่าอะไร?',
    options: {
      A: 'Rugae (Gastric folds)',
      B: 'Plicae circulares',
      C: 'Villi',
      D: 'Haustra'
    },
    correctOption: 'A',
    explanation: 'Rugae คือรอยพับตามยาวของชั้น Mucosa และ Submucosa ภายในกระเพาะอาหาร ช่วยให้กระเพาะอาหารสามารถยืดขยายตัว (Distension) รองรับปริมาตรอาหารได้มากถึง 1.5 - 2 ลิตรเมื่ออิ่ม และจะหดพับตัวกลับเป็นสันนูนเมื่อกระเพาะว่าง',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Easy',
    sourceFile,
    sourcePage: 33,
    tags: ['rugae', 'gastric-folds', 'stomach-capacity'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-029',
    questionText: 'กล้ามเนื้อหูรูด Pyloric Sphincter เกิดจากการหนาตัวขึ้นของกล้ามเนื้อเรียบชั้นใดของกระเพาะอาหาร และทำหน้าที่ควบคุมสิ่งใด?',
    options: {
      A: 'การหนาตัวของชั้น Middle circular layer ทำหน้าที่ควบคุมการปล่อย Chyme ออกจากกระเพาะอาหารเข้าสู่ Duodenum ทีละน้อย',
      B: 'การหนาตัวของชั้น Outer longitudinal layer',
      C: 'การหนาตัวของชั้น Inner oblique layer',
      D: 'การหนาตัวของ Muscularis mucosae'
    },
    correctOption: 'A',
    explanation: 'Pyloric sphincter เกิดจากการหนาตัวของกล้ามเนื้อเรียบชั้นวงกลม (Middle circular layer) บริเวณปลายสุดของ Pyloric canal ทำหน้าที่เป็นลิ้นกล้ามเนื้อ ควบคุมการเคลื่อนตัวของอาหารกึ่งเหลว (Chyme) ให้ผ่านเข้าสู่ Duodenum ในอัตราที่เหมาะสม และป้องกันการไหลย้อนกลับของน้ำดีจาก Duodenum',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 34,
    tags: ['pyloric-sphincter', 'middle-circular-layer', 'chyme'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-030',
    questionText: 'เซลล์ชนิดใดในต่อมกระเพาะอาหาร (Gastric glands) ที่ทำหน้าที่สร้างและหลั่งกรดไฮโดรคลอริก (HCl) และ Intrinsic Factor?',
    options: {
      A: 'Parietal cells (Oxyntic cells)',
      B: 'Chief cells (Zymogenic cells)',
      C: 'Enteroendocrine G cells',
      D: 'Mucous neck cells'
    },
    correctOption: 'A',
    explanation: 'Parietal (Oxyntic) cells เป็นเซลล์รูปพีระมิดย้อมติดสีชมพูเข้ม (Eosinophilic) พบมากใน Fundic glands มีปั๊ม H+/K+ ATPase ทำหน้าที่หลั่งกรดเกลือ (HCl) สร้างสภาวะ pH 1.5-2.0 และหลั่ง Glycoprotein ชื่อ Intrinsic factor ซึ่งจำเป็นต่อการดูดซึมวิตามิน B12 ที่ปลายลำไส้เล็ก (Ileum)',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 35,
    tags: ['parietal-cells', 'hcl', 'intrinsic-factor', 'oxyntic-cells'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-031',
    questionText: 'ผู้ป่วยผ่าตัดตัดกระเพาะอาหารออกทั้งหมด (Total Gastrectomy) จะเกิดภาวะโลหิตจางชนิด Pernicious anemia (Megaloblastic anemia) พยาธิกำเนิดเกิดจากการขาดสารใดที่สร้างจากเซลล์ในกระเพาะอาหาร?',
    options: {
      A: 'ขาด Intrinsic Factor ที่สร้างจาก Parietal cells ทำให้ไม่สามารถดูดซึมวิตามิน B12 ที่บริเวณ Terminal ileum ได้',
      B: 'ขาด Pepsinogen จาก Chief cells ทำให้ย่อยโปรตีนไม่ได้',
      C: 'ขาดเมือกป้องกันจาก Goblet cells',
      D: 'ขาด Gastrin จาก G cells'
    },
    correctOption: 'A',
    explanation: 'Intrinsic factor สร้างจาก Parietal cells ในกระเพาะอาหาร เมื่อถูกตัดกระเพาะออก ร่างกายจะขาด Intrinsic factor ทำให้วิตามิน B12 ไม่สามารถจับตัวและดูดซึมที่ Terminal ileum ได้ ส่งผลให้การสร้าง DNA ของเซลล์เม็ดเลือดแดงในไขกระดูกล้มเหลว เกิดโรคโลหิตจางเม็ดเลือดขนาดใหญ่ (Pernicious/Megaloblastic anemia)',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 35,
    tags: ['pernicious-anemia', 'gastrectomy', 'intrinsic-factor', 'vitamin-b12'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-032',
    questionText: 'เซลล์ชนิด Chief cells (Peptic/Zymogenic cells) ในต่อมกระเพาะอาหารทำหน้าที่สร้างและหลั่งสารตั้งต้นของเอนไซม์ชนิดใด และสารนี้จะถูกกระตุ้นให้เปลี่ยนเป็นเอนไซม์ที่ทำงานได้ด้วยปัจจัยใด?',
    options: {
      A: 'หลั่ง Pepsinogen ซึ่งจะถูกกระตุ้นให้เปลี่ยนเป็น Active Pepsin โดยกรดไฮโดรคลอริก (HCl) ที่มีสภาวะเป็นกรดจัด',
      B: 'หลั่ง Trypsinogen ซึ่งกระตุ้นด้วย Enterokinase',
      C: 'หลั่ง Amylase ซึ่งกระตุ้นด้วยน้ำลาย',
      D: 'หลั่ง Lipase ซึ่งกระตุ้นด้วยน้ำดี'
    },
    correctOption: 'A',
    explanation: 'Chief cells อยู่ที่ฐานของ Gastric glands ย้อมติดสีม่วงเข้ม (Basophilic) ทำหน้าที่หลั่งเอนไซม์ที่ยังไม่ทำงาน (Proenzyme) คือ Pepsinogen และ Gastric lipase เมื่อ Pepsinogen สัมผัสกับกรด HCl ในลูเมนของกระเพาะอาหาร จะถูกตัดสายเปปไทด์กลายเป็นเอนไซม์ Pepsin ที่ทำงานย่อยโปรตีนได้อย่างเต็มที่',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 36,
    tags: ['chief-cells', 'pepsinogen', 'pepsin', 'zymogen'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-033',
    questionText: 'เซลล์ต่อมไร้ท่อ G cells ซึ่งพบหนาแน่นที่สุดในชั้น Mucosa ของกระเพาะอาหารส่วน Pyloric antrum ทำหน้าที่หลั่งฮอร์โมนชนิดใด และฮอร์โมนนี้มีฤทธิ์กระตุ้นสิ่งใด?',
    options: {
      A: 'หลั่งฮอร์โมน Gastrin เข้าสู่กระแสเลือดเพื่อไปกระตุ้น Parietal cells ให้หลั่งกรด HCl และกระตุ้นการบีบตัวของกระเพาะอาหาร',
      B: 'หลั่งฮอร์โมน Secretin เข้าสู่ช่องปากเพื่อลดกรด',
      C: 'หลั่งฮอร์โมน Cholecystokinin เพื่อยับยั้งตับ',
      D: 'หลั่งฮอร์โมน Insulin เพื่อลดน้ำตาลในลูเมน'
    },
    correctOption: 'A',
    explanation: 'G cells เป็น Enteroendocrine cells ใน Pyloric antrum เมื่อถูกกระตุ้นโดยการยืดขยายของกระเพาะอาหาร (Distension) หรือเปปไทด์ในอาหาร จะหลั่งฮอร์โมน Gastrin ซึมเข้าสู่กระแสเลือดไปจับกับ CCK-B receptors บน Parietal cells และ Enterochromaffin-like (ECL) cells กระตุ้นการหลั่งกรด HCl อย่างรวดเร็ว',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 36,
    tags: ['g-cells', 'gastrin', 'pyloric-antrum', 'acid-secretion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-034',
    questionText: 'กลไกทางกายวิภาคและสรีรวิทยาที่สำคัญที่สุดที่ป้องกันไม่ให้กรดไฮโดรคลอริกและเอนไซม์เปปซินย่อยทำลายผนังกระเพาะอาหารของตนเอง (Gastric mucosal barrier) ประกอบด้วยปัจจัยใดบ้าง?',
    options: {
      A: 'ชั้นเมือกเจลที่มีไบคาร์บอเนตเคลือบผิว (Mucus-bicarbonate barrier), รอยต่อระหว่างเซลล์ที่แนบสนิท (Tight junctions), และการไหลเวียนเลือดที่สมบูรณ์ช่วยผลัดเปลี่ยนเซลล์ใหม่อย่างรวดเร็ว',
      B: 'การมีชั้นกระดูกอ่อนโปร่งแสงคั่นกลาง',
      C: 'การมีสภาวะ pH ในกระเพาะอาหารเป็นด่างอ่อนๆ ตลอดเวลา',
      D: 'การมีชั้นกล้ามเนื้อลายหนาแน่นสะท้อนกรดออกไป'
    },
    correctOption: 'A',
    explanation: 'Gastric mucosal barrier ประกอบด้วย 3 องค์ประกอบหลัก: 1. Insoluble mucus gel หนาที่มีด่าง Bicarbonate (HCO3-) ดักจับกรดไว้ที่ผิว 2. Tight junctions ระหว่างเซลล์บุผิวป้องกันไม่ให้กรดรั่วซึมลงสู่ชั้นล่าง 3. Prostaglandins และ Rich mucosal microcirculation ช่วยซ่อมแซมและผลัดเปลี่ยนเซลล์ใหม่ทุกๆ 3-5 วัน',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 37,
    tags: ['mucosal-barrier', 'tight-junctions', 'bicarbonate', 'peptic-ulcer'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-035',
    questionText: 'หลอดเลือดแดง Celiac Trunk ซึ่งแตกแขนงออกมาจาก Abdominal Aorta เลี้ยงอวัยวะ Foregut ให้แขนงหลัก 3 แขนงเพื่อไปเลี้ยงกระเพาะอาหารและอวัยวะข้างเคียง ได้แก่แขนงใดบ้าง?',
    options: {
      A: 'Left Gastric artery, Splenic artery, และ Common Hepatic artery',
      B: 'Superior Mesenteric artery, Inferior Mesenteric artery, และ Renal artery',
      C: 'Right Gastric artery, Gastroepiploic artery, และ Cystic artery',
      D: 'Internal Iliac artery, Lumbar artery, และ Phrenic artery'
    },
    correctOption: 'A',
    explanation: 'Celiac trunk แตกแขนงออกจาก Abdominal aorta ที่ระดับ T12 ให้ 3 แขนงหลัก: 1. Left Gastric Artery (ไปเลี้ยง Lesser curvature และส่วนล่างของหลอดอาหาร) 2. Splenic Artery (ทอดคดเคี้ยวไปเลี้ยงม้าม ตับอ่อน และ Greater curvature) 3. Common Hepatic Artery (ไปเลี้ยงตับ ถุงน้ำดี และ Duodenum)',
    system: systemName,
    topic: 'Stomach Anatomy & Secretions',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 38,
    tags: ['celiac-trunk', 'left-gastric', 'splenic-artery', 'common-hepatic'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },

  // 36-50: Duodenum, Pancreatic/Biliary Connections & Small Intestine Intro
  {
    id: 'DIGEST-036',
    questionText: 'ลำไส้เล็กส่วนต้น ดูโอดีนัม (Duodenum) มีความยาวประมาณ 25 เซนติเมตร ทอดตัวโค้งเป็นรูปตัว C (C-shaped curve) โอบล้อมรอบส่วนใดของอวัยวะข้างเคียง?',
    options: {
      A: 'หัวของตับอ่อน (Head of the Pancreas)',
      B: 'ม้าม (Spleen)',
      C: 'ไตข้างซ้าย (Left Kidney)',
      D: 'ถุงน้ำดี (Gallbladder)'
    },
    correctOption: 'A',
    explanation: 'Duodenum ทอดโค้งเป็นรูปตัว C โอบล้อมรอบ Head of Pancreas อย่างแนบชิด แบ่งออกเป็น 4 ส่วน (Superior, Descending, Horizontal, และ Ascending) โดยส่วนที่ 2 (Descending part) เป็นตำแหน่งสำคัญที่มีท่อน้ำดีและท่อตับอ่อนมาเปิดร่วมกัน',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 40,
    tags: ['duodenum', 'head-of-pancreas', 'c-shaped-loop'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-037',
    questionText: 'โครงสร้างทางจุลกายวิภาคที่พบได้เฉพาะในชั้นใต้เยื่อเมือก (Submucosa) ของลำไส้เล็กส่วน Duodenum เท่านั้น แต่ไม่พบใน Jejunum และ Ileum ทำหน้าที่หลั่งเมือกด่างเข้มข้นเพื่อปรับกรดจากกระเพาะอาหาร คือโครงสร้างใด?',
    options: {
      A: 'Brunner\'s glands (Duodenal glands)',
      B: 'Peyer\'s patches',
      C: 'Crypts of Lieberkühn',
      D: 'Islets of Langerhans'
    },
    correctOption: 'A',
    explanation: 'Brunner\'s glands (Duodenal glands) เป็นต่อมท่อขดในชั้น Submucosa ที่พบเฉพาะใน Duodenum ทำหน้าที่หลั่งของเหลวเมือกที่เป็นด่างสูง (Bicarbonate-rich mucus, pH 8.1 - 9.3) เพื่อสะเทินกรด HCl จาก Chyme ที่ผ่านลงมาจากกระเพาะอาหาร ปกป้องเยื่อบุลำไส้ไม่ให้เกิดแผลดูโอดีนัม (Duodenal ulcer)',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 41,
    tags: ['brunners-glands', 'duodenum-submucosa', 'bicarbonate-mucus'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-038',
    questionText: 'ท่อน้ำดีร่วม (Common bile duct) และท่อตับอ่อนหลัก (Main pancreatic duct) จะไหลมาบรรจบกันเป็นกระเปาะร่วมชื่อว่าอะไร ก่อนจะเปิดเข้าสู่ผนังด้านในของ Duodenum ส่วน Descending part?',
    options: {
      A: 'Hepatopancreatic ampulla (Ampulla of Vater)',
      B: 'Cystic duct ampulla',
      C: 'Duct of Santorini',
      D: 'Pyloric sphincter'
    },
    correctOption: 'A',
    explanation: 'Main pancreatic duct (Duct of Wirsung) และ Common bile duct จะวิ่งมาบรรจบกันขยายเป็นกระเปาะเรียกว่า Hepatopancreatic ampulla (Ampulla of Vater) ฝังอยู่ในผนังของ Descending duodenum และเปิดออกที่ Major duodenal papilla',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 42,
    tags: ['ampulla-of-vater', 'hepatopancreatic-ampulla', 'common-bile-duct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-039',
    questionText: 'กล้ามเนื้อหูรูดที่ล้อมรอบทางออกของ Hepatopancreatic ampulla ทำหน้าที่ควบคุมการไหลของน้ำดีและน้ำย่อยจากตับอ่อนเข้าสู่ลำไส้เล็ก และป้องกันการไหลย้อนกลับคือกล้ามเนื้อหูรูดใด?',
    options: {
      A: 'Sphincter of Oddi (Hepatopancreatic sphincter)',
      B: 'Pyloric sphincter',
      C: 'Ileocecal sphincter',
      D: 'Lower esophageal sphincter'
    },
    correctOption: 'A',
    explanation: 'Sphincter of Oddi เป็นมัดกล้ามเนื้อเรียบวงแหวนล้อมรอบ Ampulla of Vater ปกติจะหดเกร็งปิดไว้ แต่เมื่ออาหารที่มีไขมันและกรดอะมิโนเข้าสู่ Duodenum จะกระตุ้นการหลั่งฮอร์โมน Cholecystokinin (CCK) ส่งผลให้ Sphincter of Oddi คลายตัว เปิดทางให้น้ำดีและน้ำย่อยตับอ่อนพุ่งเข้าสู่ลำไส้เล็ก',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 42,
    tags: ['sphincter-of-oddi', 'cck', 'bile-flow'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-040',
    questionText: 'ผู้ป่วยมีก้อนนิ่วในถุงน้ำดีหลุดมาติดค้างอุดตันสนิทที่บริเวณ Ampulla of Vater ภาวะนี้จะส่งผลให้เกิดโรคและพยาธิสภาพร่วมกันในอวัยวะใดบ้าง?',
    options: {
      A: 'ดีซ่านจากการอุดกั้นทางเดินน้ำดี (Obstructive jaundice) ร่วมกับตับอ่อนอักเสบเฉียบพลัน (Acute gallstone pancreatitis)',
      B: 'แผลเปื่อยในหลอดอาหารร่วมกับไส้ติ่งอักเสบ',
      C: 'กระเพาะอาหารทะลุร่วมกับไตวายเฉียบพลัน',
      D: 'ม้ามโตและภาวะโลหิตจาง'
    },
    correctOption: 'A',
    explanation: 'เนื่องจาก Ampulla of Vater เป็นทางออกร่วมสุดท้ายของทั้ง Common bile duct และ Main pancreatic duct เมื่อมีนิ่วมาอุดที่นี่ น้ำดีจะไหลลงลำไส้ไม่ได้และล้นเข้าสู่กระแสเลือด เกิด Obstructive jaundice ขณะเดียวกันเอนไซม์จากตับอ่อนไม่สามารถระบายได้และถูกกระตุ้นให้ย่อยเนื้อเยื่อตับอ่อนเอง เกิด Acute pancreatitis รุนแรง',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 43,
    tags: ['gallstone-pancreatitis', 'ampulla-of-vater-obstruction', 'jaundice'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-041',
    questionText: 'เอ็นแขวนเนื้อเยื่อเกี่ยวพันและกล้ามเนื้อเรียบที่ยึดระหว่างจุดต่อ Duodenojejunal flexure เข้ากับกะบังลมด้านหลัง ซึ่งศัลยแพทย์ใช้เป็นจุดสังเกตแบ่งแยกระหว่างทางเดินอาหารส่วนบน (Upper GI tract) กับทางเดินอาหารส่วนล่าง (Lower GI tract) คือเอ็นใด?',
    options: {
      A: 'Suspensory ligament of the Duodenum (Ligament of Treitz)',
      B: 'Falciform ligament',
      C: 'Inguinal ligament',
      D: 'Gastrocolic ligament'
    },
    correctOption: 'A',
    explanation: 'Ligament of Treitz (Suspensory muscle of duodenum) เกาะจาก Right crus ของกะบังลมมายัง Duodenojejunal flexure ทางคลินิกใช้ Ligament of Treitz เป็นแลนด์มาร์กสำคัญแบ่งแยกระหว่าง Upper GI tract (ตั้งแต่ปากถึง Treitz) กับ Lower GI tract (ตั้งแต่ Jejunum ลงไปจนถึงทวารหนัก)',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 40,
    tags: ['ligament-of-treitz', 'duodenojejunal-flexure', 'upper-vs-lower-gi'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-042',
    questionText: 'โครงสร้างทางกายวิภาค 3 ระดับที่ช่วยเพิ่มพื้นที่ผิวในการย่อยและการดูดซึมสารอาหารของลำไส้เล็กให้กว้างขึ้นถึงกว่า 200-300 ตารางเมตร เรียงลำดับจากขนาดใหญ่ที่เห็นด้วยตาเปล่าลงไปสู่ระดับจุลกายวิภาคคือข้อใด?',
    options: {
      A: 'Plicae circulares (Circular folds) -> Villi (วิลไล) -> Microvilli (ไมโครวิลไล / Brush border)',
      B: 'Rugae -> Haustra -> Taeniae coli',
      C: 'Cilia -> Flagella -> Microtubules',
      D: 'Crypts of Lieberkühn -> Lacteals -> Peyer\'s patches'
    },
    correctOption: 'A',
    explanation: 'ลำไส้เล็กเพิ่มพื้นที่ผิวดูดซึม 3 ระดับ: 1. Plicae circulares (วาล์วพับรูปวงกลมถาวร เพิ่มพื้นที่ 3 เท่า) 2. Villi (ส่วนยื่นคล้ายนิ้วมือยาว 0.5-1 มม. เพิ่มพื้นที่ 10 เท่า) 3. Microvilli (ขนเซลล์ขนาดจิ๋วบนผิว Enterocytes รวมกันเป็น Brush border เพิ่มพื้นที่อีก 20 เท่า) รวมกันเพิ่มพื้นที่ผิวกว่า 600 เท่า',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 44,
    tags: ['plicae-circulares', 'villi', 'microvilli', 'surface-area-expansion'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-043',
    questionText: 'ลำไส้เล็กส่วนเจจูนัม (Jejunum) มีลักษณะทางกายวิภาคที่โดดเด่นแตกต่างจากลำไส้เล็กส่วนไอเลียม (Ileum) อย่างไร?',
    options: {
      A: 'มีผนังหนากว่า เส้นผ่านศูนย์กลางกว้างกว่า มีหลอดเลือดมาเลี้ยงมากกว่า (สีแดงสดกว่า), มี Plicae circulares สูงและหนาแน่นกว่า, และมี Vasa recta ขนาดยาวแต่มี Arterial arcades เพียง 1-2 ชั้น',
      B: 'มีผนังบางกว่าและมีไขมันในเยื่อแขวนลำไส้หนาแน่นกว่า',
      C: 'มี Peyer\'s patches หนาแน่นที่สุด',
      D: 'มี Brunner\'s glands ในชั้น Submucosa'
    },
    correctOption: 'A',
    explanation: 'การเปรียบเทียบ Jejunum vs Ileum: Jejunum มีผนังหนา กว้าง หลอดเลือดเลี้ยงมาก (Vascularity สูง) มี Plicae circulares เด่นชัดเพื่อดูดซึมสารอาหาร มี Arterial arcades สั้นๆ 1-2 ชั้นแต่ Vasa recta ยาว ส่วน Ileum ผนังบางกว่า มี Peyer\'s patches หนาแน่น มี Arcades หลายชั้น (4-5 ชั้น) และ Vasa recta สั้น',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 45,
    tags: ['jejunum-vs-ileum', 'arterial-arcades', 'vasa-recta'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-044',
    questionText: 'เซลล์ชนิด Paneth cells ซึ่งตั้งอยู่ที่ก้นของหลอดต่อม Crypts of Lieberkühn ในลำไส้เล็ก ทำหน้าที่สำคัญทางสรีรวิทยาและภูมิคุ้มกันอย่างไร?',
    options: {
      A: 'หลั่งสารต้านจุลชีพ เช่น Lysozyme, Phospholipase A2, และ Defensins เพื่อควบคุมปริมาณแบคทีเรียและปกป้อง Stem cells ในต่อม',
      B: 'หลั่งกรดไฮโดรคลอริกเพื่อย่อยโปรตีน',
      C: 'ดูดซึมไขมันเข้าสู่หลอดน้ำเหลือง',
      D: 'สร้างฮอร์โมนกลูคากอน'
    },
    correctOption: 'A',
    explanation: 'Paneth cells ตั้งอยู่ที่ฐานของ Intestinal crypts (Crypts of Lieberkühn) ภายในไซโทพลาสซึมมีแกรนูลขนาดใหญ่ติดสีชมพูแดง บรรจุเอนไซม์ทำลายแบคทีเรีย ได้แก่ Lysozyme, Alpha-defensins (Cryptdins) ทำหน้าที่ควบคุมจุลชีพในลูเมน และปกป้อง Intestinal stem cells ที่อยู่ข้างเคียง',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 46,
    tags: ['paneth-cells', 'crypts-of-lieberkuhn', 'lysozyme', 'defensins'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-045',
    questionText: 'ลำไส้เล็กส่วนปลาย ไอเลียม (Ileum) มีหน้าที่ดูดซึมสารสำคัญชนิดใดที่มีความจำเพาะสูง ซึ่งหากถูกตัดลำไส้ส่วนนี้ออกจะทำให้สารดังกล่าวไม่สามารถดูดซึมกลับเข้าสู่ร่างกายได้?',
    options: {
      A: 'วิตามิน B12 (ที่จับกับ Intrinsic factor) และเกลือน้ำดี (Bile salts ผ่านกลไก Enterohepatic circulation)',
      B: 'ธาตุเหล็ก (Iron) และแคลเซียม',
      C: 'น้ำตาลกลูโคสและกรดอะมิโนเท่านั้น',
      D: 'ก๊าซออกซิเจนและไนโตรเจน'
    },
    correctOption: 'A',
    explanation: 'Terminal ileum มีบทบาทจำเพาะยิ่งยวด 2 ประการ: 1. ดูดซึม Vitamin B12-Intrinsic Factor complex 2. ดูดซึม Bile salts กลับคืนสู่ตับ (ประมาณ 95% ของน้ำดีถูกดูดกลับที่นี่ในกระบวนการ Enterohepatic circulation) หากตัด Ileum ออก ผู้ป่วยจะขาด B12 ท้องเสียเรื้อรัง และขาดวิตามินที่ละลายในไขมัน',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 47,
    tags: ['terminal-ileum', 'vitamin-b12', 'bile-salts', 'enterohepatic-circulation'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-046',
    questionText: 'ลิ้นที่กั้นระหว่างลำไส้เล็กส่วนปลาย (Ileum) กับลำไส้ใหญ่ส่วนต้น (Cecum) มีชื่อเรียกว่าอะไร และทำหน้าที่ป้องกันสิ่งใด?',
    options: {
      A: 'Ileocecal valve ทำหน้าที่ป้องกันไม่ให้กากอาหารและแบคทีเรียจำนวนมหาศาลจากลำไส้ใหญ่ไหลย้อนกลับเข้าสู่ลำไส้เล็ก',
      B: 'Pyloric valve ป้องกันไม่ให้น้ำย่อยไหลย้อนเข้ากระเพาะ',
      C: 'Anal sphincter ป้องกันอุจจาระเล็ด',
      D: 'Sphincter of Oddi ป้องกันน้ำดีรั่ว'
    },
    correctOption: 'A',
    explanation: 'Ileocecal valve (Bauhin\'s valve) มีขอบพับ 2 แฉกยื่นเข้าไปในโพรง Cecum ทำหน้าที่ปล่อย Chyme จาก Ileum เข้าสู่ Cecum และจะปิดสนิทเมื่อมีแรงดันใน Cecum สูงขึ้น เพื่อป้องกันแบคทีเรียจากลำไส้ใหญ่ไม่ให้ย้อนขึ้นไปรบกวนลำไส้เล็ก (Prevent bacterial overgrowth)',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 48,
    tags: ['ileocecal-valve', 'cecum', 'bacterial-overgrowth-prevention'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-047',
    questionText: 'หลอดเลือดแดง Superior Mesenteric Artery (SMA) แตกแขนงออกจาก Abdominal Aorta ทำหน้าที่ส่งเลือดไปเลี้ยงอวัยวะ Midgut ของระบบทางเดินอาหารตั้งแต่โครงสร้างใดถึงโครงสร้างใด?',
    options: {
      A: 'ตั้งแต่ Duodenum ส่วนล่าง (ใต้ Major papilla) ไปจนถึง 2/3 ส่วนต้นของ Transverse Colon',
      B: 'ตั้งแต่หลอดอาหารลงไปจนถึงกระเพาะอาหาร',
      C: 'ตั้งแต่ 1/3 ส่วนปลายของ Transverse Colon ไปจนถึง Rectum',
      D: 'เลี้ยงเฉพาะตับและม้ามเท่านั้น'
    },
    correctOption: 'A',
    explanation: 'Superior Mesenteric Artery (SMA) เป็นเส้นเลือดแดงของอนุพันธ์ Midgut เลี้ยงตั้งแต่ครึ่งล่างของ Duodenum, Jejunum, Ileum, Cecum, Appendix, Ascending colon ไปจนถึง 2 ใน 3 ส่วนต้นของ Transverse colon',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 49,
    tags: ['sma', 'midgut', 'transverse-colon'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-048',
    questionText: 'ฮอร์โมน Cholecystokinin (CCK) ถูกสร้างและหลั่งจากเซลล์ I cells ในชั้นเยื่อบุของ Duodenum และ Jejunum เมื่อมีสิ่งเร้าใด และมีบทบาททางสรีรวิทยาอย่างไร?',
    options: {
      A: 'หลั่งเมื่อมีกรดไขมันและเปปไทด์ใน Chyme กระตุ้นให้ถุงน้ำดีบีบตัว (Gallbladder contraction), กระตุ้น Acinar cells ของตับอ่อนให้หลั่งเอนไซม์ย่อยอาหาร, และคลายกล้ามเนื้อหูรูด Sphincter of Oddi',
      B: 'หลั่งเมื่อน้ำตาลในเลือดต่ำเพื่อสลายไกลโคเจน',
      C: 'หลั่งเมื่อกระเพาะอาหารว่างเพื่อกระตุ้นความหิว',
      D: 'หลั่งเพื่อยับยั้งการขับปัสสาวะของไต'
    },
    correctOption: 'A',
    explanation: 'Cholecystokinin (CCK) หลั่งจาก I cells ใน Duodenum/Jejunum เพื่อตอบสนองต่อไขมันและโปรตีน ทำหน้าที่หลัก: 1. สั่งให้ Gallbladder บีบตัวส่งน้ำดีเข้มข้นออกมา 2. สั่งให้ Acinar cells ของตับอ่อนหลั่ง Enzyme-rich pancreatic juice 3. คลาย Sphincter of Oddi 4. ชะลอการบีบตัวของกระเพาะอาหาร (Inhibits gastric emptying)',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 43,
    tags: ['cck', 'i-cells', 'gallbladder-contraction', 'pancreatic-enzymes'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-049',
    questionText: 'ฮอร์โมนซีครีติน (Secretin) หลั่งจาก S cells ในชั้น Mucosa ของลำไส้เล็กส่วนต้นเพื่อตอบสนองต่อสภาวะกรด (Acidic chyme) มีหน้าที่สำคัญที่สุดต่ออวัยวะใด?',
    options: {
      A: 'กระตุ้นเซลล์ท่อของตับอ่อน (Pancreatic duct cells) และท่อน้ำดีให้หลั่งสารละลายไบคาร์บอเนต (HCO3- rich fluid) ในปริมาณมหาศาลเพื่อสะเทินกรด',
      B: 'กระตุ้นให้กระเพาะอาหารหลั่งกรดเพิ่มขึ้น',
      C: 'กระตุ้นการดูดซึมกลูโคสที่ลำไส้ใหญ่',
      D: 'กระตุ้นการสร้างเกล็ดเลือดในม้าม'
    },
    correctOption: 'A',
    explanation: 'Secretin ถูกค้นพบเป็นฮอร์โมนแรกของร่างกาย หลั่งจาก S cells เมื่อ pH ใน Duodenum ลดลงต่ำกว่า 4.5 โดย Secretin จะกระตุ้น Pancreatic centroacinar และ ductal cells รวมถึง Cholangiocytes ในตับ ให้หลั่งสารน้ำที่เป็นด่างสูง อุดมด้วย Bicarbonate (HCO3-) ออกมาสะเทินกรดในลำไส้เล็ก',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Hard',
    sourceFile,
    sourcePage: 43,
    tags: ['secretin', 's-cells', 'bicarbonate-secretion', 'pancreatic-duct'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  },
  {
    id: 'DIGEST-050',
    questionText: 'การเคลื่อนไหวของลำไส้เล็กแบบ Segmentation มีความแตกต่างเชิงหน้าที่จากการเคลื่อนไหวแบบ Peristalsis อย่างไร?',
    options: {
      A: 'Segmentation เป็นการหดและคลายตัวสลับกันของกล้ามเนื้อวงเพื่อคลุกเคล้าอาหารกับน้ำย่อยและเพิ่มโอกาสให้สัมผัสเยื่อบุผิวดูดซึมโดยไม่เน้นเคลื่อนที่ไปข้างหน้า ส่วน Peristalsis เป็นคลื่นการบีบรูดเพื่อผลักดันอาหารไปข้างหน้า',
      B: 'Segmentation ใช้เฉพาะกล้ามเนื้อลาย ส่วน Peristalsis ใช้กล้ามเนื้อเรียบ',
      C: 'Segmentation เกิดเฉพาะในกระเพาะอาหาร ส่วน Peristalsis เกิดเฉพาะในหลอดอาหาร',
      D: 'Segmentation เกิดขึ้นเฉพาะเวลาหลับเท่านั้น'
    },
    correctOption: 'A',
    explanation: 'การเคลื่อนไหวของลำไส้เล็กมี 2 รูปแบบหลัก: 1. Segmentation (Mixing contractions): กล้ามเนื้อ Circular หดตัวเป็นปล้องๆ สลับจังหวะ เพื่อคลุกเคล้า Chyme กับเอนไซม์และผลักให้สารอาหารสัมผัสกับ Villi ดูดซึม 2. Peristalsis (Propulsive contractions): คลื่นกล้ามเนื้อบีบด้านหลังและคลายด้านหน้าเพื่อขับเคลื่อนกากอาหารไปข้างหน้าอย่างช้าๆ',
    system: systemName,
    topic: 'Small Intestine Anatomy',
    difficulty: 'Medium',
    sourceFile,
    sourcePage: 44,
    tags: ['segmentation', 'peristalsis', 'motility'],
    createdAt: '2026-10-24',
    updatedAt: '2026-10-24',
    verificationStatus: 'verified'
  }
];

module.exports = { part1 };
