import { Question } from '../types';

export const digestiveQuestions: Question[] = [
  {
    "id": "DIGEST-001",
    "questionText": "ผนังของท่อทางเดินอาหาร (Gastrointestinal tract) โดยทั่วไปประกอบด้วยชั้นเนื้อเยื่อหลัก 4 ชั้น ลำดับจากด้านในลูเมนออกสู่ผิวนอกข้อใดถูกต้อง และชั้นใดเป็นที่อยู่ของหลอดเลือด หลอดน้ำเหลือง และร่างแหประสาท Meissner's plexus?",
    "options": {
      "A": "Mucosa -> Submucosa -> Muscularis externa -> Serosa / Adventitia โดย Submucosa เป็นที่อยู่ของ Meissner's plexus",
      "B": "Submucosa -> Mucosa -> Muscularis externa -> Serosa โดย Mucosa เป็นที่อยู่ของ Meissner's plexus",
      "C": "Mucosa -> Muscularis externa -> Submucosa -> Serosa โดย Muscularis เป็นที่อยู่ของ Meissner's plexus",
      "D": "Serosa -> Muscularis externa -> Submucosa -> Mucosa โดย Adventitia เป็นที่อยู่ของ Meissner's plexus"
    },
    "correctOption": "A",
    "explanation": "ผนังทางเดินอาหารเรียงจากในออกนอก: 1. Mucosa (Epithelium, Lamina propria, Muscularis mucosae) 2. Submucosa (Dense irregular connective tissue มีหลอดเลือด หลอดน้ำเหลือง และ Submucosal/Meissner's plexus ควบคุมการหลั่งสาร) 3. Muscularis externa (Inner circular, Outer longitudinal มี Myenteric/Auerbach's plexus) 4. Serosa หรือ Adventitia",
    "system": "Digestive System",
    "topic": "Histological Structure of the Digestive Tract",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 9,
    "tags": [
      "gi-histology",
      "submucosa",
      "meissners-plexus"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-002",
    "questionText": "ชั้นเยื่อเมือก (Mucosa) ของระบบทางเดินอาหารประกอบด้วยชั้นย่อย 3 ชั้นเรียงจากด้านในสุดออกสู่ด้านนอกข้อใดถูกต้อง?",
    "options": {
      "A": "Lamina propria -> Epithelium -> Muscularis mucosae",
      "B": "Epithelium -> Lamina propria -> Muscularis mucosae",
      "C": "Muscularis mucosae -> Lamina propria -> Epithelium",
      "D": "Epithelium -> Submucosa -> Muscularis externa"
    },
    "correctOption": "B",
    "explanation": "ชั้น Mucosa ประกอบด้วย 3 ชั้นย่อย: 1. Epithelium (สัมผัสอาหาร ทำหน้าที่ดูดซึมและหลั่งเมือก) 2. Lamina propria (เนื้อเยื่อเกี่ยวพันหลวม มีหลอดเลือดฝอยและ MALT) 3. Muscularis mucosae (ชั้นกล้ามเนื้อเรียบบางๆ ช่วยขยับรอยพับของเยื่อเมือก)",
    "system": "Digestive System",
    "topic": "Histological Structure of the Digestive Tract",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 11,
    "tags": [
      "mucosa",
      "lamina-propria",
      "muscularis-mucosae"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-003",
    "questionText": "ในผู้ป่วยโรค Hirschsprung's disease ทารกแรกเกิดไม่สามารถถ่ายขี้เทา (Meconium) ได้เนื่องจากลำไส้ใหญ่ส่วนปลายขาดเซลล์ปมประสาท (Aganglionosis) ร่างแหประสาท Myenteric plexus (Auerbach's plexus) ซึ่งทำหน้าที่ควบคุม Peristalsis ตามปกติจะแทรกตัวอยู่ระหว่างชั้นเนื้อเยื่อใด?",
    "options": {
      "A": "แทรกอยู่ใต้ชั้น Serosa",
      "B": "แทรกอยู่ระหว่างชั้น Mucosa กับชั้น Submucosa",
      "C": "แทรกอยู่ระหว่างชั้นกล้ามเนื้อเรียบวงใน (Inner circular layer) และกล้ามเนื้อเรียบแนวยาว (Outer longitudinal layer) ของชั้น Muscularis externa",
      "D": "แทรกอยู่ภายในชั้น Lamina propria"
    },
    "correctOption": "C",
    "explanation": "Myenteric (Auerbach's) plexus เป็นส่วนหนึ่งของ Enteric Nervous System ตั้งอยู่ระหว่างชั้น Inner circular และ Outer longitudinal muscle layers ของชั้น Muscularis externa ทำหน้าที่ควบคุมการเคลื่อนไหว (Motility) เช่น Peristalsis และ Segmentation หากขาดเซลล์ประสาทนี้ (Hirschsprung's disease) ลำไส้จะไม่คลายตัวและเกิดลำไส้อุดตัน",
    "system": "Digestive System",
    "topic": "Histological Structure of the Digestive Tract",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 13,
    "tags": [
      "myenteric-plexus",
      "auerbachs-plexus",
      "hirschsprungs-disease",
      "muscularis-externa"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-004",
    "questionText": "เยื่อบุผิว (Epithelium) ของระบบทางเดินอาหารมีการเปลี่ยนแปลงชนิดของเนื้อเยื่อตามหน้าที่ของแต่ละส่วน ข้อใดจับคู่ระหว่างอวัยวะกับชนิดของเนื้อเยื่อบุผิวได้ถูกต้องและแม่นยำที่สุด?",
    "options": {
      "A": "ลำไส้ใหญ่: Stratified cuboidal epithelium; ทวารหนัก: Simple squamous epithelium",
      "B": "หลอดอาหาร: Simple columnar epithelium; ลำไส้เล็ก: Stratified squamous epithelium",
      "C": "ช่องปาก: Pseudostratified ciliated columnar epithelium; กระเพาะอาหาร: Transitional epithelium",
      "D": "หลอดอาหาร (Esophagus): Non-keratinized stratified squamous epithelium; กระเพาะอาหารและลำไส้เล็ก: Simple columnar epithelium"
    },
    "correctOption": "D",
    "explanation": "ส่วนที่ต้องทนต่อแรงเสียดทานจากการกลืนอาหาร (ช่องปาก คอหอย และหลอดอาหาร) จะบุด้วย Non-keratinized stratified squamous epithelium เพื่อป้องกันการสึกหรอ ส่วนที่มีการหลั่งน้ำย่อยและดูดซึมสารอาหาร (กระเพาะอาหาร ลำไส้เล็ก และลำไส้ใหญ่) จะเปลี่ยนเป็น Simple columnar epithelium พร้อมด้วย Goblet cells และ Microvilli",
    "system": "Digestive System",
    "topic": "Histological Structure of the Digestive Tract",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 10,
    "tags": [
      "gi-epithelium",
      "stratified-squamous",
      "simple-columnar"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-005",
    "questionText": "อวัยวะในทางเดินอาหารส่วนที่อยู่นอกช่องเยื่อบุช่องท้อง (Retroperitoneal organs) เช่น หลอดอาหารและลำไส้ตรงส่วนล่าง จะมีผนังชั้นนอกสุดห่อหุ้มเป็นเนื้อเยื่อชนิดใดที่แตกต่างจากกระเพาะอาหาร?",
    "options": {
      "A": "Adventitia ซึ่งเป็นเนื้อเยื่อเกี่ยวพันชนิด Areolar connective tissue ที่ไม่มี Mesothelium บุผิวด้านนอก",
      "B": "Serosa ซึ่งมีชั้น Mesothelium ชัดเจน",
      "C": "Peritoneum parietal layer",
      "D": "Dense regular tendon"
    },
    "correctOption": "A",
    "explanation": "อวัยวะ Intraperitoneal จะมีผนังชั้นนอกสุดเป็น Serosa (ประกอบด้วยเนื้อเยื่อเกี่ยวพันบางๆ คลุมด้วย Simple squamous mesothelium หรือ Visceral peritoneum) ส่วนอวัยวะ Retroperitoneal หรือนอกช่องท้อง (เช่น หลอดอาหาร ลำไส้ตรงส่วนล่าง) ผนังจะยึดติดกับเนื้อเยื่อข้างเคียงด้วยชั้น Adventitia (ไม่มี Mesothelium)",
    "system": "Digestive System",
    "topic": "Histological Structure of the Digestive Tract",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 14,
    "tags": [
      "serosa-vs-adventitia",
      "retroperitoneal-histology"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-006",
    "questionText": "แผ่นเยื่อบุช่องท้องขนาดใหญ่ที่มีลักษณะเป็นถุงพับสองชั้น ห้อยย้อยลงมาจากขอบโค้งใหญ่ของกระเพาะอาหาร (Greater curvature) คลุมทับลำไส้เล็กคล้ายผ้ากันเปื้อน บรรจุไขมันและหลอดเลือดจำนวนมาก มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Lesser Omentum",
      "B": "Greater Omentum (โอเมนตัมใหญ่ หรือฉายา \"Policeman of the abdomen\")",
      "C": "Mesentery proper",
      "D": "Falciform ligament"
    },
    "correctOption": "B",
    "explanation": "Greater omentum ห้อยย้อยลงมาจาก Greater curvature ของกระเพาะอาหารลงมาคลุมลำไส้เล็ก แล้ววกกลับขึ้นไปยึดกับ Transverse colon อุดมด้วยไขมันและ Macrophages ทำหน้าที่ห่อหุ้มบริเวณที่มีการติดเชื้อหรือทะลุในช่องท้องเพื่อจำกัดการแพร่กระจาย จึงได้ฉายาว่า \"Policeman of the abdomen\"",
    "system": "Digestive System",
    "topic": "Peritoneum & Related Structures",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 17,
    "tags": [
      "greater-omentum",
      "policeman-of-abdomen",
      "peritoneum"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-007",
    "questionText": "แผ่นเยื่อแขวน Lesser Omentum เชื่อมระหว่างขอบโค้งเล็กของกระเพาะอาหาร (Lesser curvature) และส่วนต้นของ Duodenum เข้ากับผิวด้านล่างของตับ (Liver) ประกอบด้วยเอ็นสำคัญ 2 ส่วนคือข้อใด?",
    "options": {
      "A": "Falciform ligament และ Coronary ligament",
      "B": "Gastrosplenic ligament และ Splenorenal ligament",
      "C": "Hepatogastric ligament และ Hepatoduodenal ligament",
      "D": "Phrenicocolic ligament และ Gastrocolic ligament"
    },
    "correctOption": "C",
    "explanation": "Lesser omentum ทอดระหว่างตับกับกระเพาะอาหารและลำไส้เล็กส่วนต้น แบ่งเป็น 2 ส่วน: 1. Hepatogastric ligament (แผ่นบาง เชื่อมตับกับ Lesser curvature) 2. Hepatoduodenal ligament (ขอบอิสระด้านขวาที่หนากว่า เชื่อมตับกับ Duodenum ส่วนต้น และเป็นที่บรรจุ Portal triad)",
    "system": "Digestive System",
    "topic": "Peritoneum & Related Structures",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 18,
    "tags": [
      "lesser-omentum",
      "hepatogastric",
      "hepatoduodenal-ligament"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-008",
    "questionText": "ในการผ่าตัดควบคุมภาวะเลือดออกฉุกเฉินในตับ ศัลยแพทย์ทำการกดหนีบโครงสร้าง Portal Triad บริเวณขอบอิสระของ Hepatoduodenal ligament (Pringle maneuver) โครงสร้าง 3 ชนิดที่บรรจุอยู่ภายใน Portal Triad ประกอบด้วยข้อใด?",
    "options": {
      "A": "Abdominal Aorta, Renal Artery และ Thoracic Duct",
      "B": "Inferior Vena Cava, Hepatic Vein และ Cystic Duct",
      "C": "Celiac trunk, Splenic Vein และ Pancreatic Duct",
      "D": "Proper Hepatic Artery, Hepatic Portal Vein และ Common Bile Duct"
    },
    "correctOption": "D",
    "explanation": "Portal Triad บรรจุอยู่ในขอบอิสระของ Hepatoduodenal ligament (ส่วนหนึ่งของ Lesser omentum) ประกอบด้วย: 1. Proper hepatic artery (นำเลือดแดงเข้าตับ) 2. Hepatic portal vein (นำเลือดดำที่มีสารอาหารเข้าตับ) 3. Common bile duct (นำน้ำดีออกจากตับ) การทำ Pringle maneuver จะหยุดการไหลเข้าของเลือดสู่ตับทั้งหมดชั่วคราว",
    "system": "Digestive System",
    "topic": "Peritoneum & Related Structures",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 18,
    "tags": [
      "portal-triad",
      "pringle-maneuver",
      "hepatoduodenal-ligament"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-009",
    "questionText": "แผ่นเยื่อแขวนลำไส้รูปพัด (Mesentery proper) ทำหน้าที่ยึดแขวนอวัยวะใดไว้กับผนังช่องท้องด้านหลัง (Posterior abdominal wall) และเป็นทางผ่านของหลอดเลือด Superior Mesenteric vessels?",
    "options": {
      "A": "Jejunum และ Ileum",
      "B": "กระเพาะอาหาร (Stomach)",
      "C": "Ascending colon และ Descending colon",
      "D": "ถุงน้ำดี (Gallbladder)"
    },
    "correctOption": "A",
    "explanation": "Mesentery proper (เยื่อแขวนลำไส้รูปพัด) มีรากเกาะ (Root of mesentery) ยาวประมาณ 15 ซม. ทอดเฉียงจากระดับ L2 ด้านซ้ายลงสู่ Right sacroiliac joint ทำหน้าที่ยึดแขวนลำไส้เล็กส่วน Jejunum และ Ileum ไว้กับผนังช่องท้องด้านหลัง เป็นทางทอดผ่านของ Superior mesenteric artery, vein, lymphatics และ nerves",
    "system": "Digestive System",
    "topic": "Peritoneum & Related Structures",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 19,
    "tags": [
      "mesentery-proper",
      "jejunum",
      "ileum",
      "sma"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-010",
    "questionText": "อวัยวะในช่องท้องกลุ่มใดจัดเป็น Retroperitoneal organs (อวัยวะที่อยู่นอกหรือหลังเยื่อบุช่องท้อง) ทั้งหมด?",
    "options": {
      "A": "กระเพาะอาหาร (Stomach), ม้าม (Spleen), และตับ (Liver)",
      "B": "ไต (Kidneys), ต่อมหมวกไต (Adrenal glands), ตับอ่อน (Pancreas ยกเว้นหาง), และ Duodenum (ส่วนที่ 2-4)",
      "C": "Jejunum, Ileum, และ Transverse colon",
      "D": "Cecum, Appendix, และ Sigmoid colon"
    },
    "correctOption": "B",
    "explanation": "อวัยวะ Retroperitoneal (ตามสูตรจำ SAD PUCKER) ได้แก่ Suprarenal glands, Aorta/IVC, Duodenum (2nd-4th parts), Pancreas (ยกเว้น tail), Ureters, Colon (Ascending & Descending), Kidneys, Esophagus, Rectum อวัยวะเหล่านี้ถูกคลุมด้วยเยื่อบุช่องท้องเฉพาะผิวด้านหน้าเท่านั้น",
    "system": "Digestive System",
    "topic": "Peritoneum & Related Structures",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 16,
    "tags": [
      "retroperitoneal-organs",
      "pancreas",
      "kidneys",
      "duodenum"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-011",
    "questionText": "ต่อมน้ำลายขนาดใหญ่ที่สุดในร่างกายคือต่อมใด ตั้งอยู่บริเวณใด และท่อน้ำลายของต่อมนี้เจาะเปิดเข้าสู่ช่องปากที่ตำแหน่งใด?",
    "options": {
      "A": "Sublingual gland ท่อ Rivinus เปิดที่พื้นปาก",
      "B": "Submandibular gland ท่อ Wharton's duct เปิดใต้โคนลิ้น",
      "C": "Parotid gland ตั้งอยู่หน้าและใต้ใบหู ท่อ Stensen's duct เจาะผ่านกล้ามเนื้อ Buccinator เปิดเข้าสู่กระพุ้งแก้มตรงข้ามฟันกรามบนซี่ที่ 2 (Upper 2nd molar)",
      "D": "Von Ebner's gland เปิดที่ร่อง Circumvallate papillae"
    },
    "correctOption": "C",
    "explanation": "Parotid gland เป็นต่อมน้ำลายขนาดใหญ่ที่สุด ตั้งอยู่หน้าและใต้รูหู (หุ้มด้วย Parotid fascia) หลั่งน้ำลายชนิดใส (Pure serous) มีท่อน้ำลาย Parotid duct (Stensen's duct) ทอดข้ามกล้ามเนื้อ Masseter เจาะผ่าน Buccinator ไปเปิดที่กระพุ้งแก้มตรงข้ามฟันกรามบนซี่ที่ 2",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 23,
    "tags": [
      "parotid-gland",
      "stensens-duct",
      "upper-2nd-molar"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-012",
    "questionText": "ผู้ป่วยเด็กเป็นโรคคางทูม (Mumps) มีการอักเสบและบวมโตของต่อมน้ำลาย Parotid gland ทั้งสองข้าง โครงสร้างทางกายวิภาคที่สำคัญเส้นใดที่ทอดผ่านทะลุเข้าไปในเนื้อของต่อมน้ำลายนี้และอาจเกิดการอักเสบกดทับได้?",
    "options": {
      "A": "เส้นประสาท Vagus nerve",
      "B": "เส้นประสาทสมองคู่ที่ 5 (Trigeminal nerve)",
      "C": "เส้นประสาทสมองคู่ที่ 12 (Hypoglossal nerve)",
      "D": "เส้นประสาทสมองคู่ที่ 7 (Facial nerve: CN VII) ซึ่งแตกแขนง 5 แขนงภายในเนื้อต่อม"
    },
    "correctOption": "D",
    "explanation": "โครงสร้างที่ทอดผ่านเนื้อต่อม Parotid gland จากตื้นไปลึก: 1. Facial nerve (CN VII) ซึ่งแยกเป็น 5 แขนงใหญ่เลี้ยงกล้ามเนื้อใบหน้า (Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical) 2. Retromandibular vein 3. External carotid artery การผ่าตัดต่อมพารอติตจึงต้องระมัดระวังไม่ให้เกิด Facial nerve palsy",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 23,
    "tags": [
      "parotid-gland",
      "facial-nerve",
      "mumps",
      "cn-vii"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-013",
    "questionText": "ต่อมน้ำลาย Submandibular gland ผลิตน้ำลายคิดเป็นสัดส่วนมากที่สุดของร่างกายขณะพัก (ประมาณ 65-70%) น้ำลายที่ผลิตมีลักษณะอย่างไร และท่อน้ำลายของต่อมนี้มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "ผลิตน้ำลายแบบผสมโดยเน้นชนิดใส (Mixed, serous-predominant) และส่งผ่านท่อ Wharton's duct ไปเปิดที่ Sublingual caruncle ใต้โคนลิ้น",
      "B": "ผลิตน้ำลายเหนียวข้นล้วน ผ่านท่อ Stensen's duct",
      "C": "ผลิตน้ำลายใสล้วน ผ่านท่อ Rivinus",
      "D": "ผลิตเฉพาะเอนไซม์เปปซิน"
    },
    "correctOption": "A",
    "explanation": "Submandibular gland ตั้งอยู่ใน Submandibular triangle ใต้แนวกรามล่าง ผลิตน้ำลายปริมาณมากที่สุดขณะพัก (65-70%) เป็นน้ำลายชนิดผสมโดยมี Serous acini มากกว่า Mucous acini (Serous-predominant) ส่งผ่านท่อ Wharton's duct (ยาวประมาณ 5 ซม.) ไปเปิดที่ปุ่ม Sublingual caruncle ข้าง Frenulum ใต้ลิ้น",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 24,
    "tags": [
      "submandibular-gland",
      "whartons-duct",
      "sublingual-caruncle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-014",
    "questionText": "ต่อมน้ำลาย Sublingual gland ตั้งอยู่ใต้เยื่อบุพื้นปากด้านหน้า มีลักษณะทางเนื้อเยื่อและการเปิดของท่อน้ำลายอย่างไร?",
    "options": {
      "A": "ผลิตน้ำลายใสล้วน ผ่านท่อเดียวขนาดใหญ่ชื่อ Stensen's duct",
      "B": "เป็นต่อมน้ำลายขนาดเล็กที่สุด ผลิตน้ำลายชนิดเมือกเหนียวข้นเป็นหลัก (Predominantly mucous) และเปิดเข้าสู่ใต้ลิ้นผ่านท่อขนาดเล็กจำนวนมากเรียกว่า Ducts of Rivinus",
      "C": "ตั้งอยู่หลังคอหอย ผลิตน้ำย่อยไขมัน",
      "D": "มีเนื้อเยื่อแบบกล้ามเนื้อลายล้วน"
    },
    "correctOption": "B",
    "explanation": "Sublingual gland เป็นต่อมน้ำลายหลักที่มีขนาดเล็กที่สุด อยู่ใต้ลิ้นเหนือกล้ามเนื้อ Mylohyoid หลั่งน้ำลายที่มีมิวซินสูงเหนียวข้น (Predominantly mucous) น้ำลายจะเปิดออกสู่พื้นปากผ่านท่อเล็กๆ 8-20 ท่อ เรียกว่า Ducts of Rivinus (และบางส่วนรวมเป็นท่อใหญ่ Bartholin's duct ไปเปิดร่วมกับ Wharton's duct)",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 24,
    "tags": [
      "sublingual-gland",
      "ducts-of-rivinus",
      "mucous-saliva"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-015",
    "questionText": "ปุ่มลิ้น (Lingual papillae) ชนิดใดที่มีจำนวนมากที่สุดบนผิวด้านบนของลิ้น มีลักษณะเป็นหนามรูปกรวย มีเคราติน แต่ \"ไม่มีต่อมรับรส\" (No taste buds) ทำหน้าที่สร้างแรงเสียดทานช่วยคลุกเคล้าอาหาร?",
    "options": {
      "A": "Circumvallate papillae",
      "B": "Fungiform papillae",
      "C": "Filiform papillae",
      "D": "Foliate papillae"
    },
    "correctOption": "C",
    "explanation": "Filiform papillae มีจำนวนมากที่สุด กระจายทั่ว 2/3 ส่วนหน้าของลิ้น เป็นปุ่มขนาดเล็กรูปกรวย ปลายมีเคราตินสีขาว ไม่มี Taste buds ทำหน้าที่รับสัมผัสเชิงกล (Mechanical/Tactile) สร้างแรงเสียดทานเพื่อขยับอาหารขณะเคี้ยว ส่วน Fungiform, Foliate, และ Circumvallate ล้วนมี Taste buds",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 21,
    "tags": [
      "filiform-papillae",
      "no-taste-buds",
      "tongue-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-016",
    "questionText": "ปุ่มลิ้นชนิด Circumvallate (Vallate) papillae มีขนาดใหญ่ที่สุด เรียงตัวเป็นรูปตัววี (V-shaped) อยู่ด้านหน้าของร่องใด และมีต่อมน้ำลายชนิดใดเปิดน้ำลายใสมาชะล้างร่องรอบปุ่ม?",
    "options": {
      "A": "เรียงตัวที่ปลายลิ้น มี Meibomian glands เปิดมาชะล้าง",
      "B": "เรียงตัวอยู่หลังต่อ Lingual tonsil โดยมี Submandibular glands เปิดมาชะล้าง",
      "C": "เรียงตัวรอบขอบลิ้น มี Parotid gland เปิดมาชะล้าง",
      "D": "เรียงตัวอยู่หน้าต่อ Sulcus terminalis โดยมีต่อมน้ำลายใสของ Von Ebner's glands เปิดมาชะล้าง"
    },
    "correctOption": "D",
    "explanation": "Circumvallate papillae มีขนาดใหญ่ 8-12 ปุ่ม เรียงเป็นแถวรูปตัววี (V-shape) อยู่ด้านหน้า Sulcus terminalis มี Taste buds จำนวนมากอยู่ตามร่องด้านข้างของปุ่ม และมีต่อมน้ำลายใสบริสุทธิ์ชื่อ Serous glands of Von Ebner หลั่งน้ำลายมาชะล้างร่องเพื่อเตรียมรับสารเคมีใหม่",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 22,
    "tags": [
      "circumvallate-papillae",
      "sulcus-terminalis",
      "von-ebners-glands"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-017",
    "questionText": "การรับความรู้สึกรับรส (Taste sensation) จากตุ่มรับรสของลิ้น 2 ใน 3 ส่วนหน้า (Anterior 2/3 of tongue) ส่งสัญญาณประสาทผ่านทางเส้นประสาทสมองคู่ใด?",
    "options": {
      "A": "เส้นประสาทสมองคู่ที่ 7 (Facial nerve: CN VII ผ่าน Chorda tympani)",
      "B": "เส้นประสาทสมองคู่ที่ 9 (Glossopharyngeal nerve: CN IX)",
      "C": "เส้นประสาทสมองคู่ที่ 5 (Trigeminal nerve: CN V3)",
      "D": "เส้นประสาทสมองคู่ที่ 12 (Hypoglossal nerve: CN XII)"
    },
    "correctOption": "A",
    "explanation": "การเลี้ยงประสาทของลิ้น: 1. Anterior 2/3: รับรสโดย CN VII (Chorda tympani), รับความรู้สึกทั่วไป (เจ็บ ร้อน) โดย CN V3 (Lingual nerve) 2. Posterior 1/3: ทั้งรับรสและรับความรู้สึกทั่วไปโดย CN IX (Glossopharyngeal nerve) 3. กล้ามเนื้อลิ้นทั้งหมดเลี้ยงโดย CN XII (Hypoglossal nerve ยกเว้น Palatoglossus)",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 22,
    "tags": [
      "tongue-innervation",
      "taste-sensation",
      "chorda-tympani",
      "cn-vii"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-018",
    "questionText": "สูตรฟันแท้ (Permanent teeth formula) ของมนุษย์ในขากรรไกรแต่ละข้าง (ครึ่งซีกบนหรือล่าง) ประกอบด้วยฟันชนิดต่างๆ รวม 16 ซี่ต่อขากรรไกร ข้อใดเรียงลำดับจากด้านหน้ากึ่งกลางไปสู่ด้านหลังได้ถูกต้อง?",
    "options": {
      "A": "Incisors 2, Canine 1, Premolars 0, Molars 2 (2-1-0-2 ซึ่งเป็นฟันน้ำนม)",
      "B": "Incisors 2, Canine 1, Premolars 2, Molars 3 (2-1-2-3)",
      "C": "Incisors 1, Canine 2, Premolars 3, Molars 2",
      "D": "Incisors 3, Canine 1, Premolars 1, Molars 3"
    },
    "correctOption": "B",
    "explanation": "สูตรฟันแท้ของผู้ใหญ่ในแต่ละเสี้ยว (Quadrant) คือ 2-1-2-3 ได้แก่ Central/Lateral Incisors 2 ซี่, Canine (เขี้ยว) 1 ซี่, Premolars (กรามน้อย) 2 ซี่, และ Molars (กรามใหญ่) 3 ซี่ รวม 8 ซี่ต่อเสี้ยว สองข้างรวมเป็น 16 ซี่ต่อขากรรไกร และรวมทั้งหมด 32 ซี่",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 25,
    "tags": [
      "dental-formula",
      "permanent-teeth",
      "incisors",
      "molars"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-019",
    "questionText": "สารประกอบที่มีความแข็งแกร่งมากที่สุดในร่างกายมนุษย์ ซึ่งทำหน้าที่คลุมผิวด้านนอกของตัวฟัน (Crown) ป้องกันการสึกกร่อนจากกรดและการบดเคี้ยวคือข้อใด?",
    "options": {
      "A": "Cementum (สารเคลือบรากฟัน)",
      "B": "Dentin (เนื้อฟัน)",
      "C": "Enamel (สารเคลือบฟัน)",
      "D": "Pulp (โพรงประสาทฟัน)"
    },
    "correctOption": "C",
    "explanation": "Enamel (สารเคลือบฟัน) เป็นแร่ธาตุไฮดรอกซีอะพาไทต์ถึง 96-97% เป็นสารที่แข็งที่สุดในร่างกาย คลุมผิวชั้นนอกของ Crown เซลล์ Ameloblasts ที่สร้างสารเคลือบฟันจะสลายไปเมื่อฟันงอกพ้นเหงือก จึงไม่สามารถสร้างทดแทนใหม่ได้หากสึกหรอ",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Easy",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 26,
    "tags": [
      "enamel",
      "tooth-anatomy",
      "hydroxyapatite"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-020",
    "questionText": "ข้อต่อทางกายวิภาคชนิด Fibrous joint ชนิดพิเศษที่ยึดรากฟัน (Root of tooth) แน่นสนิทไว้กับเบ้ากระดูกขากรรไกร (Alveolar bone) ผ่านทางเส้นใยเอ็น Periodontal ligament เรียกว่าข้อต่อชนิดใด?",
    "options": {
      "A": "Symphysis",
      "B": "Suture",
      "C": "Syndesmosis",
      "D": "Gomphosis (Peg-and-socket joint)"
    },
    "correctOption": "D",
    "explanation": "Gomphosis (Peg-and-socket fibrous joint) เป็นข้อต่อพิเศษที่ตรึงเดือย (รากฟัน) เข้ากับเบ้า (Alveolus) โดยมีเส้นใยคอลลาเจนหนาแน่นของ Periodontal ligament ยึดระหว่าง Cementum ของฟันกับ Alveolar bone ของขากรรไกร ช่วยดูดซับแรงกระแทกขณะเคี้ยว",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 26,
    "tags": [
      "gomphosis",
      "periodontal-ligament",
      "fibrous-joint"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-021",
    "questionText": "คอหอย (Pharynx) แบ่งออกเป็น 3 ส่วนตามตำแหน่งทางกายวิภาค ส่วนใดของคอหอยที่ทำหน้าที่เป็นทางผ่านร่วมกันของทั้งอาหารและอากาศ (Common passage for food and air)?",
    "options": {
      "A": "Oropharynx และ Laryngopharynx",
      "B": "Nasopharynx เท่านั้น",
      "C": "Trachea",
      "D": "Larynx"
    },
    "correctOption": "A",
    "explanation": "Nasopharynx ทำหน้าที่เป็นทางผ่านเฉพาะอากาศเท่านั้น ส่วน Oropharynx (หลังช่องปาก) และ Laryngopharynx/Hypopharynx (หลังกล่องเสียงลงไปถึงหลอดอาหาร) ทำหน้าที่เป็นทางผ่านร่วมของทั้งอาหารที่กลืนลงมาและอากาศที่หายใจผ่าน ทั้งสองส่วนนี้จึงบุด้วย Stratified squamous epithelium",
    "system": "Digestive System",
    "topic": "Pharynx & Esophagus",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 27,
    "tags": [
      "oropharynx",
      "laryngopharynx",
      "food-air-passage"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-022",
    "questionText": "ในระยะ Pharyngeal phase ของกลไกการกลืนอาหาร (Swallowing reflex) โครงสร้างกระดูกอ่อนรูปใบไม้ชนิดใดที่ทำหน้าที่พับเอียงลงมาปิดช่องเปิดของกล่องเสียง (Laryngeal inlet) เพื่อป้องกันไม่ให้อาหารสำลักเข้าสู่หลอดลม?",
    "options": {
      "A": "Thyroid cartilage",
      "B": "Epiglottis (ฝาปิดกล่องเสียง)",
      "C": "Cricoid cartilage",
      "D": "Arytenoid cartilage"
    },
    "correctOption": "B",
    "explanation": "ในระหว่าง Pharyngeal stage ของการกลืน (ซึ่งเป็น Involuntary reflex) กล่องเสียงจะถูกยกตัวขึ้นด้านบนและด้านหน้า ดันให้กระดูกอ่อน Epiglottis พับปิด Laryngeal inlet ไว้ พร้อมกับ Vocal cords หดชิดกัน เพื่อป้องกันไม่ให้ก้อนอาหาร (Bolus) ตกลงสู่ Trachea",
    "system": "Digestive System",
    "topic": "Pharynx & Esophagus",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 28,
    "tags": [
      "epiglottis",
      "swallowing-reflex",
      "aspiration-prevention"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-023",
    "questionText": "ชั้นกล้ามเนื้อ Muscularis externa ของหลอดอาหาร (Esophagus) มีการกระจายตัวของชนิดเซลล์กล้ามเนื้อตลอดความยาว 25 เซนติเมตร อย่างไร?",
    "options": {
      "A": "เป็นกล้ามเนื้อเรียบล้วนตลอดทั้งท่อ",
      "B": "เป็นกล้ามเนื้อลายล้วนตลอดทั้งท่อ",
      "C": "ส่วนบน 1/3 เป็นกล้ามเนื้อลายล้วน (Skeletal muscle), ส่วนกลาง 1/3 เป็นกล้ามเนื้อลายผสมกล้ามเนื้อเรียบ, และส่วนล่าง 1/3 เป็นกล้ามเนื้อเรียบล้วน (Smooth muscle)",
      "D": "ส่วนบนเป็นกล้ามเนื้อเรียบ ส่วนล่างเป็นกล้ามเนื้อลาย"
    },
    "correctOption": "C",
    "explanation": "Muscularis externa ของหลอดอาหารมีการเปลี่ยนผ่านชนิดของกล้ามเนื้อ: 1. Upper 1/3 = Skeletal muscle (ควบคุมได้บางส่วน) 2. Middle 1/3 = Mixed skeletal and smooth muscle 3. Lower 1/3 = Smooth muscle ล้วน (ควบคุมโดยระบบประสาทอัตโนมัติ Vagus nerve)",
    "system": "Digestive System",
    "topic": "Pharynx & Esophagus",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 30,
    "tags": [
      "esophagus-muscularis",
      "skeletal-to-smooth-muscle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-024",
    "questionText": "หลอดอาหารทอดตัวผ่านช่องเปิดของกล้ามเนื้อกะบังลม (Diaphragm) เข้าสู่ช่องท้องที่ระดับกระดูกสันหลังระดับใด และช่องเปิดดังกล่าวมีชื่อว่าอะไร?",
    "options": {
      "A": "ระดับ L1 ผ่านทาง Foramen ovale",
      "B": "ระดับ T8 ผ่านทาง Vena caval foramen",
      "C": "ระดับ T12 ผ่านทาง Aortic hiatus",
      "D": "ระดับกระดูกสันหลังส่วนอกข้อที่ 10 (T10) ผ่านทาง Esophageal hiatus"
    },
    "correctOption": "D",
    "explanation": "ช่องเปิดสำคัญบนกะบังลม: 1. Caval opening (T8) สำหรับ IVC 2. Esophageal hiatus (T10) สำหรับ Esophagus และ Vagus nerves 3. Aortic hiatus (T12) สำหรับ Aorta, Thoracic duct และ Azygos vein (สูตรจำ: I 8 10 Eggs At 12)",
    "system": "Digestive System",
    "topic": "Pharynx & Esophagus",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 29,
    "tags": [
      "esophageal-hiatus",
      "t10",
      "diaphragm-apertures"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-025",
    "questionText": "ผู้ป่วยโรคกรดไหลย้อนรุนแรง (Gastroesophageal Reflux Disease: GERD) เกิดจากการคลายตัวผิดปกติของ Lower Esophageal Sphincter (LES) การสัมผัสกรดเรื้อรังทำให้เกิดการเปลี่ยนสภาพของเนื้อเยื่อ (Metaplasia) บริเวณรอยต่อ Gastroesophageal junction (Z-line) จากเนื้อเยื่อชนิดใดเป็นชนิดใด (Barrett's esophagus)?",
    "options": {
      "A": "เปลี่ยนจาก Non-keratinized stratified squamous epithelium กลายเป็น Simple columnar epithelium ที่มี Goblet cells คล้ายเยื่อบุลำไส้",
      "B": "เปลี่ยนจาก Simple columnar กลายเป็น Stratified keratinized epithelium",
      "C": "เปลี่ยนจาก Simple cuboidal กลายเป็น Transitional epithelium",
      "D": "เปลี่ยนจาก Smooth muscle กลายเป็น Skeletal muscle"
    },
    "correctOption": "A",
    "explanation": "Barrett's esophagus เป็นภาวะแทรกซ้อนของ GERD เกิด Intestinal metaplasia โดยกรดจากกระเพาะกัดทำลายเซลล์เยื่อบุผิว Stratified squamous ของหลอดอาหาร ร่างกายจึงปรับตัวเปลี่ยนเป็น Simple columnar epithelium พร้อม Goblet cells เพื่อทนกรด ซึ่งภาวะนี้จัดเป็น Precancerous lesion เสี่ยงต่อการเกิด Esophageal adenocarcinoma",
    "system": "Digestive System",
    "topic": "Pharynx & Esophagus",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 31,
    "tags": [
      "gerd",
      "barretts-esophagus",
      "metaplasia",
      "z-line"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-026",
    "questionText": "กระเพาะอาหาร (Stomach) แบ่งออกเป็น 4 ส่วนทางกายวิภาค ส่วนโค้งกระเปาะที่ยื่นนูนขึ้นไปอยู่เหนือระดับของจุดเชื่อมต่อระหว่างหลอดอาหารกับกระเพาะอาหาร (Cardia) ใต้กะบังลมด้านซ้าย มีชื่อเรียกว่าอะไร?",
    "options": {
      "A": "Body (Corpus)",
      "B": "Fundus",
      "C": "Pyloric antrum",
      "D": "Cardia"
    },
    "correctOption": "B",
    "explanation": "ส่วนของกระเพาะอาหาร: 1. Cardia (ส่วนต้นล้อมรอบรูเปิดของหลอดอาหาร) 2. Fundus (ส่วนกระเปาะโค้งนูนขึ้นด้านบนซ้ายเหนือแนวระนาบ Cardia มักเป็นที่ขังของแก๊สในกระเพาะที่เห็นบนภาพ X-ray) 3. Body (ส่วนกลางขนาดใหญ่ที่สุด) 4. Pylorus (ส่วนปลายเชื่อมกับ Duodenum)",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 32,
    "tags": [
      "stomach-regions",
      "fundus",
      "cardia"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-027",
    "questionText": "ชั้นกล้ามเนื้อ Muscularis externa ของกระเพาะอาหารมีความพิเศษแตกต่างจากอวัยวะอื่นในทางเดินอาหารทั้งหมดอย่างไร?",
    "options": {
      "A": "มีกล้ามเนื้อเพียงชั้นเดียวเพื่อเพิ่มความจุ",
      "B": "มีเฉพาะกล้ามเนื้อลายเท่านั้น",
      "C": "มีชั้นกล้ามเนื้อเรียบ 3 ชั้น (เพิ่มชั้นในสุด Inner oblique layer เสริมจาก Middle circular และ Outer longitudinal layers) เพื่อช่วยบดขยี้และคลุกเคล้าอาหารกับน้ำย่อยแบบ 3 มิติ",
      "D": "มีแผ่นกระดูกอ่อนแทรกในชั้นกล้ามเนื้อ"
    },
    "correctOption": "C",
    "explanation": "กระเพาะอาหารเป็นอวัยวะเดียวในทางเดินอาหารที่มีกล้ามเนื้อเรียบ 3 ชั้นในชั้น Muscularis externa ได้แก่: 1. Inner oblique layer (ชั้นในสุด ทอดเฉียง ช่วยบดและขยี้อาหาร) 2. Middle circular layer (ชั้นกลาง หนาตัวขึ้นเป็น Pyloric sphincter) 3. Outer longitudinal layer (ชั้นนอกสุด)",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 34,
    "tags": [
      "stomach-muscularis",
      "three-muscle-layers",
      "inner-oblique"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-028",
    "questionText": "รอยพับของชั้นเยื่อเมือก (Mucosa and Submucosa) ภายในกระเพาะอาหารที่มองเห็นได้ด้วยตาเปล่าในขณะที่กระเพาะอาหารว่างและแฟบลง แต่จะขยายเรียบตึงเมื่อมีอาหารบรรจุอยู่ เรียกว่าอะไร?",
    "options": {
      "A": "Haustra",
      "B": "Plicae circulares",
      "C": "Villi",
      "D": "Rugae (Gastric folds)"
    },
    "correctOption": "D",
    "explanation": "Rugae คือรอยพับตามยาวของชั้น Mucosa และ Submucosa ภายในกระเพาะอาหาร ช่วยให้กระเพาะอาหารสามารถยืดขยายตัว (Distension) รองรับปริมาตรอาหารได้มากถึง 1.5 - 2 ลิตรเมื่ออิ่ม และจะหดพับตัวกลับเป็นสันนูนเมื่อกระเพาะว่าง",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Easy",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 33,
    "tags": [
      "rugae",
      "gastric-folds",
      "stomach-capacity"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-029",
    "questionText": "กล้ามเนื้อหูรูด Pyloric Sphincter เกิดจากการหนาตัวขึ้นของกล้ามเนื้อเรียบชั้นใดของกระเพาะอาหาร และทำหน้าที่ควบคุมสิ่งใด?",
    "options": {
      "A": "การหนาตัวของชั้น Middle circular layer ทำหน้าที่ควบคุมการปล่อย Chyme ออกจากกระเพาะอาหารเข้าสู่ Duodenum ทีละน้อย",
      "B": "การหนาตัวของชั้น Outer longitudinal layer",
      "C": "การหนาตัวของชั้น Inner oblique layer",
      "D": "การหนาตัวของ Muscularis mucosae"
    },
    "correctOption": "A",
    "explanation": "Pyloric sphincter เกิดจากการหนาตัวของกล้ามเนื้อเรียบชั้นวงกลม (Middle circular layer) บริเวณปลายสุดของ Pyloric canal ทำหน้าที่เป็นลิ้นกล้ามเนื้อ ควบคุมการเคลื่อนตัวของอาหารกึ่งเหลว (Chyme) ให้ผ่านเข้าสู่ Duodenum ในอัตราที่เหมาะสม และป้องกันการไหลย้อนกลับของน้ำดีจาก Duodenum",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 34,
    "tags": [
      "pyloric-sphincter",
      "middle-circular-layer",
      "chyme"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-030",
    "questionText": "เซลล์ชนิดใดในต่อมกระเพาะอาหาร (Gastric glands) ที่ทำหน้าที่สร้างและหลั่งกรดไฮโดรคลอริก (HCl) และ Intrinsic Factor?",
    "options": {
      "A": "Chief cells (Zymogenic cells)",
      "B": "Parietal cells (Oxyntic cells)",
      "C": "Enteroendocrine G cells",
      "D": "Mucous neck cells"
    },
    "correctOption": "B",
    "explanation": "Parietal (Oxyntic) cells เป็นเซลล์รูปพีระมิดย้อมติดสีชมพูเข้ม (Eosinophilic) พบมากใน Fundic glands มีปั๊ม H+/K+ ATPase ทำหน้าที่หลั่งกรดเกลือ (HCl) สร้างสภาวะ pH 1.5-2.0 และหลั่ง Glycoprotein ชื่อ Intrinsic factor ซึ่งจำเป็นต่อการดูดซึมวิตามิน B12 ที่ปลายลำไส้เล็ก (Ileum)",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 35,
    "tags": [
      "parietal-cells",
      "hcl",
      "intrinsic-factor",
      "oxyntic-cells"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-031",
    "questionText": "ผู้ป่วยผ่าตัดตัดกระเพาะอาหารออกทั้งหมด (Total Gastrectomy) จะเกิดภาวะโลหิตจางชนิด Pernicious anemia (Megaloblastic anemia) พยาธิกำเนิดเกิดจากการขาดสารใดที่สร้างจากเซลล์ในกระเพาะอาหาร?",
    "options": {
      "A": "ขาดเมือกป้องกันจาก Goblet cells",
      "B": "ขาด Pepsinogen จาก Chief cells ทำให้ย่อยโปรตีนไม่ได้",
      "C": "ขาด Intrinsic Factor ที่สร้างจาก Parietal cells ทำให้ไม่สามารถดูดซึมวิตามิน B12 ที่บริเวณ Terminal ileum ได้",
      "D": "ขาด Gastrin จาก G cells"
    },
    "correctOption": "C",
    "explanation": "Intrinsic factor สร้างจาก Parietal cells ในกระเพาะอาหาร เมื่อถูกตัดกระเพาะออก ร่างกายจะขาด Intrinsic factor ทำให้วิตามิน B12 ไม่สามารถจับตัวและดูดซึมที่ Terminal ileum ได้ ส่งผลให้การสร้าง DNA ของเซลล์เม็ดเลือดแดงในไขกระดูกล้มเหลว เกิดโรคโลหิตจางเม็ดเลือดขนาดใหญ่ (Pernicious/Megaloblastic anemia)",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 35,
    "tags": [
      "pernicious-anemia",
      "gastrectomy",
      "intrinsic-factor",
      "vitamin-b12"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-032",
    "questionText": "เซลล์ชนิด Chief cells (Peptic/Zymogenic cells) ในต่อมกระเพาะอาหารทำหน้าที่สร้างและหลั่งสารตั้งต้นของเอนไซม์ชนิดใด และสารนี้จะถูกกระตุ้นให้เปลี่ยนเป็นเอนไซม์ที่ทำงานได้ด้วยปัจจัยใด?",
    "options": {
      "A": "หลั่ง Lipase ซึ่งกระตุ้นด้วยน้ำดี",
      "B": "หลั่ง Trypsinogen ซึ่งกระตุ้นด้วย Enterokinase",
      "C": "หลั่ง Amylase ซึ่งกระตุ้นด้วยน้ำลาย",
      "D": "หลั่ง Pepsinogen ซึ่งจะถูกกระตุ้นให้เปลี่ยนเป็น Active Pepsin โดยกรดไฮโดรคลอริก (HCl) ที่มีสภาวะเป็นกรดจัด"
    },
    "correctOption": "D",
    "explanation": "Chief cells อยู่ที่ฐานของ Gastric glands ย้อมติดสีม่วงเข้ม (Basophilic) ทำหน้าที่หลั่งเอนไซม์ที่ยังไม่ทำงาน (Proenzyme) คือ Pepsinogen และ Gastric lipase เมื่อ Pepsinogen สัมผัสกับกรด HCl ในลูเมนของกระเพาะอาหาร จะถูกตัดสายเปปไทด์กลายเป็นเอนไซม์ Pepsin ที่ทำงานย่อยโปรตีนได้อย่างเต็มที่",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 36,
    "tags": [
      "chief-cells",
      "pepsinogen",
      "pepsin",
      "zymogen"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-033",
    "questionText": "เซลล์ต่อมไร้ท่อ G cells ซึ่งพบหนาแน่นที่สุดในชั้น Mucosa ของกระเพาะอาหารส่วน Pyloric antrum ทำหน้าที่หลั่งฮอร์โมนชนิดใด และฮอร์โมนนี้มีฤทธิ์กระตุ้นสิ่งใด?",
    "options": {
      "A": "หลั่งฮอร์โมน Gastrin เข้าสู่กระแสเลือดเพื่อไปกระตุ้น Parietal cells ให้หลั่งกรด HCl และกระตุ้นการบีบตัวของกระเพาะอาหาร",
      "B": "หลั่งฮอร์โมน Secretin เข้าสู่ช่องปากเพื่อลดกรด",
      "C": "หลั่งฮอร์โมน Cholecystokinin เพื่อยับยั้งตับ",
      "D": "หลั่งฮอร์โมน Insulin เพื่อลดน้ำตาลในลูเมน"
    },
    "correctOption": "A",
    "explanation": "G cells เป็น Enteroendocrine cells ใน Pyloric antrum เมื่อถูกกระตุ้นโดยการยืดขยายของกระเพาะอาหาร (Distension) หรือเปปไทด์ในอาหาร จะหลั่งฮอร์โมน Gastrin ซึมเข้าสู่กระแสเลือดไปจับกับ CCK-B receptors บน Parietal cells และ Enterochromaffin-like (ECL) cells กระตุ้นการหลั่งกรด HCl อย่างรวดเร็ว",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 36,
    "tags": [
      "g-cells",
      "gastrin",
      "pyloric-antrum",
      "acid-secretion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-034",
    "questionText": "กลไกทางกายวิภาคและสรีรวิทยาที่สำคัญที่สุดที่ป้องกันไม่ให้กรดไฮโดรคลอริกและเอนไซม์เปปซินย่อยทำลายผนังกระเพาะอาหารของตนเอง (Gastric mucosal barrier) ประกอบด้วยปัจจัยใดบ้าง?",
    "options": {
      "A": "การมีชั้นกระดูกอ่อนโปร่งแสงคั่นกลาง",
      "B": "ชั้นเมือกเจลที่มีไบคาร์บอเนตเคลือบผิว (Mucus-bicarbonate barrier), รอยต่อระหว่างเซลล์ที่แนบสนิท (Tight junctions), และการไหลเวียนเลือดที่สมบูรณ์ช่วยผลัดเปลี่ยนเซลล์ใหม่อย่างรวดเร็ว",
      "C": "การมีสภาวะ pH ในกระเพาะอาหารเป็นด่างอ่อนๆ ตลอดเวลา",
      "D": "การมีชั้นกล้ามเนื้อลายหนาแน่นสะท้อนกรดออกไป"
    },
    "correctOption": "B",
    "explanation": "Gastric mucosal barrier ประกอบด้วย 3 องค์ประกอบหลัก: 1. Insoluble mucus gel หนาที่มีด่าง Bicarbonate (HCO3-) ดักจับกรดไว้ที่ผิว 2. Tight junctions ระหว่างเซลล์บุผิวป้องกันไม่ให้กรดรั่วซึมลงสู่ชั้นล่าง 3. Prostaglandins และ Rich mucosal microcirculation ช่วยซ่อมแซมและผลัดเปลี่ยนเซลล์ใหม่ทุกๆ 3-5 วัน",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 37,
    "tags": [
      "mucosal-barrier",
      "tight-junctions",
      "bicarbonate",
      "peptic-ulcer"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-035",
    "questionText": "หลอดเลือดแดง Celiac Trunk ซึ่งแตกแขนงออกมาจาก Abdominal Aorta เลี้ยงอวัยวะ Foregut ให้แขนงหลัก 3 แขนงเพื่อไปเลี้ยงกระเพาะอาหารและอวัยวะข้างเคียง ได้แก่แขนงใดบ้าง?",
    "options": {
      "A": "Right Gastric artery, Gastroepiploic artery, และ Cystic artery",
      "B": "Superior Mesenteric artery, Inferior Mesenteric artery, และ Renal artery",
      "C": "Left Gastric artery, Splenic artery, และ Common Hepatic artery",
      "D": "Internal Iliac artery, Lumbar artery, และ Phrenic artery"
    },
    "correctOption": "C",
    "explanation": "Celiac trunk แตกแขนงออกจาก Abdominal aorta ที่ระดับ T12 ให้ 3 แขนงหลัก: 1. Left Gastric Artery (ไปเลี้ยง Lesser curvature และส่วนล่างของหลอดอาหาร) 2. Splenic Artery (ทอดคดเคี้ยวไปเลี้ยงม้าม ตับอ่อน และ Greater curvature) 3. Common Hepatic Artery (ไปเลี้ยงตับ ถุงน้ำดี และ Duodenum)",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 38,
    "tags": [
      "celiac-trunk",
      "left-gastric",
      "splenic-artery",
      "common-hepatic"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-036",
    "questionText": "ลำไส้เล็กส่วนต้น ดูโอดีนัม (Duodenum) มีความยาวประมาณ 25 เซนติเมตร ทอดตัวโค้งเป็นรูปตัว C (C-shaped curve) โอบล้อมรอบส่วนใดของอวัยวะข้างเคียง?",
    "options": {
      "A": "ถุงน้ำดี (Gallbladder)",
      "B": "ม้าม (Spleen)",
      "C": "ไตข้างซ้าย (Left Kidney)",
      "D": "หัวของตับอ่อน (Head of the Pancreas)"
    },
    "correctOption": "D",
    "explanation": "Duodenum ทอดโค้งเป็นรูปตัว C โอบล้อมรอบ Head of Pancreas อย่างแนบชิด แบ่งออกเป็น 4 ส่วน (Superior, Descending, Horizontal, และ Ascending) โดยส่วนที่ 2 (Descending part) เป็นตำแหน่งสำคัญที่มีท่อน้ำดีและท่อตับอ่อนมาเปิดร่วมกัน",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 40,
    "tags": [
      "duodenum",
      "head-of-pancreas",
      "c-shaped-loop"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-037",
    "questionText": "โครงสร้างทางจุลกายวิภาคที่พบได้เฉพาะในชั้นใต้เยื่อเมือก (Submucosa) ของลำไส้เล็กส่วน Duodenum เท่านั้น แต่ไม่พบใน Jejunum และ Ileum ทำหน้าที่หลั่งเมือกด่างเข้มข้นเพื่อปรับกรดจากกระเพาะอาหาร คือโครงสร้างใด?",
    "options": {
      "A": "Brunner's glands (Duodenal glands)",
      "B": "Peyer's patches",
      "C": "Crypts of Lieberkühn",
      "D": "Islets of Langerhans"
    },
    "correctOption": "A",
    "explanation": "Brunner's glands (Duodenal glands) เป็นต่อมท่อขดในชั้น Submucosa ที่พบเฉพาะใน Duodenum ทำหน้าที่หลั่งของเหลวเมือกที่เป็นด่างสูง (Bicarbonate-rich mucus, pH 8.1 - 9.3) เพื่อสะเทินกรด HCl จาก Chyme ที่ผ่านลงมาจากกระเพาะอาหาร ปกป้องเยื่อบุลำไส้ไม่ให้เกิดแผลดูโอดีนัม (Duodenal ulcer)",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 41,
    "tags": [
      "brunners-glands",
      "duodenum-submucosa",
      "bicarbonate-mucus"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-038",
    "questionText": "ท่อน้ำดีร่วม (Common bile duct) และท่อตับอ่อนหลัก (Main pancreatic duct) จะไหลมาบรรจบกันเป็นกระเปาะร่วมชื่อว่าอะไร ก่อนจะเปิดเข้าสู่ผนังด้านในของ Duodenum ส่วน Descending part?",
    "options": {
      "A": "Cystic duct ampulla",
      "B": "Hepatopancreatic ampulla (Ampulla of Vater)",
      "C": "Duct of Santorini",
      "D": "Pyloric sphincter"
    },
    "correctOption": "B",
    "explanation": "Main pancreatic duct (Duct of Wirsung) และ Common bile duct จะวิ่งมาบรรจบกันขยายเป็นกระเปาะเรียกว่า Hepatopancreatic ampulla (Ampulla of Vater) ฝังอยู่ในผนังของ Descending duodenum และเปิดออกที่ Major duodenal papilla",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 42,
    "tags": [
      "ampulla-of-vater",
      "hepatopancreatic-ampulla",
      "common-bile-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-039",
    "questionText": "กล้ามเนื้อหูรูดที่ล้อมรอบทางออกของ Hepatopancreatic ampulla ทำหน้าที่ควบคุมการไหลของน้ำดีและน้ำย่อยจากตับอ่อนเข้าสู่ลำไส้เล็ก และป้องกันการไหลย้อนกลับคือกล้ามเนื้อหูรูดใด?",
    "options": {
      "A": "Ileocecal sphincter",
      "B": "Pyloric sphincter",
      "C": "Sphincter of Oddi (Hepatopancreatic sphincter)",
      "D": "Lower esophageal sphincter"
    },
    "correctOption": "C",
    "explanation": "Sphincter of Oddi เป็นมัดกล้ามเนื้อเรียบวงแหวนล้อมรอบ Ampulla of Vater ปกติจะหดเกร็งปิดไว้ แต่เมื่ออาหารที่มีไขมันและกรดอะมิโนเข้าสู่ Duodenum จะกระตุ้นการหลั่งฮอร์โมน Cholecystokinin (CCK) ส่งผลให้ Sphincter of Oddi คลายตัว เปิดทางให้น้ำดีและน้ำย่อยตับอ่อนพุ่งเข้าสู่ลำไส้เล็ก",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 42,
    "tags": [
      "sphincter-of-oddi",
      "cck",
      "bile-flow"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-040",
    "questionText": "ผู้ป่วยมีก้อนนิ่วในถุงน้ำดีหลุดมาติดค้างอุดตันสนิทที่บริเวณ Ampulla of Vater ภาวะนี้จะส่งผลให้เกิดโรคและพยาธิสภาพร่วมกันในอวัยวะใดบ้าง?",
    "options": {
      "A": "ม้ามโตและภาวะโลหิตจาง",
      "B": "แผลเปื่อยในหลอดอาหารร่วมกับไส้ติ่งอักเสบ",
      "C": "กระเพาะอาหารทะลุร่วมกับไตวายเฉียบพลัน",
      "D": "ดีซ่านจากการอุดกั้นทางเดินน้ำดี (Obstructive jaundice) ร่วมกับตับอ่อนอักเสบเฉียบพลัน (Acute gallstone pancreatitis)"
    },
    "correctOption": "D",
    "explanation": "เนื่องจาก Ampulla of Vater เป็นทางออกร่วมสุดท้ายของทั้ง Common bile duct และ Main pancreatic duct เมื่อมีนิ่วมาอุดที่นี่ น้ำดีจะไหลลงลำไส้ไม่ได้และล้นเข้าสู่กระแสเลือด เกิด Obstructive jaundice ขณะเดียวกันเอนไซม์จากตับอ่อนไม่สามารถระบายได้และถูกกระตุ้นให้ย่อยเนื้อเยื่อตับอ่อนเอง เกิด Acute pancreatitis รุนแรง",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 43,
    "tags": [
      "gallstone-pancreatitis",
      "ampulla-of-vater-obstruction",
      "jaundice"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-041",
    "questionText": "เอ็นแขวนเนื้อเยื่อเกี่ยวพันและกล้ามเนื้อเรียบที่ยึดระหว่างจุดต่อ Duodenojejunal flexure เข้ากับกะบังลมด้านหลัง ซึ่งศัลยแพทย์ใช้เป็นจุดสังเกตแบ่งแยกระหว่างทางเดินอาหารส่วนบน (Upper GI tract) กับทางเดินอาหารส่วนล่าง (Lower GI tract) คือเอ็นใด?",
    "options": {
      "A": "Suspensory ligament of the Duodenum (Ligament of Treitz)",
      "B": "Falciform ligament",
      "C": "Inguinal ligament",
      "D": "Gastrocolic ligament"
    },
    "correctOption": "A",
    "explanation": "Ligament of Treitz (Suspensory muscle of duodenum) เกาะจาก Right crus ของกะบังลมมายัง Duodenojejunal flexure ทางคลินิกใช้ Ligament of Treitz เป็นแลนด์มาร์กสำคัญแบ่งแยกระหว่าง Upper GI tract (ตั้งแต่ปากถึง Treitz) กับ Lower GI tract (ตั้งแต่ Jejunum ลงไปจนถึงทวารหนัก)",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 40,
    "tags": [
      "ligament-of-treitz",
      "duodenojejunal-flexure",
      "upper-vs-lower-gi"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-042",
    "questionText": "โครงสร้างทางกายวิภาค 3 ระดับที่ช่วยเพิ่มพื้นที่ผิวในการย่อยและการดูดซึมสารอาหารของลำไส้เล็กให้กว้างขึ้นถึงกว่า 200-300 ตารางเมตร เรียงลำดับจากขนาดใหญ่ที่เห็นด้วยตาเปล่าลงไปสู่ระดับจุลกายวิภาคคือข้อใด?",
    "options": {
      "A": "Rugae -> Haustra -> Taeniae coli",
      "B": "Plicae circulares (Circular folds) -> Villi (วิลไล) -> Microvilli (ไมโครวิลไล / Brush border)",
      "C": "Cilia -> Flagella -> Microtubules",
      "D": "Crypts of Lieberkühn -> Lacteals -> Peyer's patches"
    },
    "correctOption": "B",
    "explanation": "ลำไส้เล็กเพิ่มพื้นที่ผิวดูดซึม 3 ระดับ: 1. Plicae circulares (วาล์วพับรูปวงกลมถาวร เพิ่มพื้นที่ 3 เท่า) 2. Villi (ส่วนยื่นคล้ายนิ้วมือยาว 0.5-1 มม. เพิ่มพื้นที่ 10 เท่า) 3. Microvilli (ขนเซลล์ขนาดจิ๋วบนผิว Enterocytes รวมกันเป็น Brush border เพิ่มพื้นที่อีก 20 เท่า) รวมกันเพิ่มพื้นที่ผิวกว่า 600 เท่า",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 44,
    "tags": [
      "plicae-circulares",
      "villi",
      "microvilli",
      "surface-area-expansion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-043",
    "questionText": "ลำไส้เล็กส่วนเจจูนัม (Jejunum) มีลักษณะทางกายวิภาคที่โดดเด่นแตกต่างจากลำไส้เล็กส่วนไอเลียม (Ileum) อย่างไร?",
    "options": {
      "A": "มี Peyer's patches หนาแน่นที่สุด",
      "B": "มีผนังบางกว่าและมีไขมันในเยื่อแขวนลำไส้หนาแน่นกว่า",
      "C": "มีผนังหนากว่า เส้นผ่านศูนย์กลางกว้างกว่า มีหลอดเลือดมาเลี้ยงมากกว่า (สีแดงสดกว่า), มี Plicae circulares สูงและหนาแน่นกว่า, และมี Vasa recta ขนาดยาวแต่มี Arterial arcades เพียง 1-2 ชั้น",
      "D": "มี Brunner's glands ในชั้น Submucosa"
    },
    "correctOption": "C",
    "explanation": "การเปรียบเทียบ Jejunum vs Ileum: Jejunum มีผนังหนา กว้าง หลอดเลือดเลี้ยงมาก (Vascularity สูง) มี Plicae circulares เด่นชัดเพื่อดูดซึมสารอาหาร มี Arterial arcades สั้นๆ 1-2 ชั้นแต่ Vasa recta ยาว ส่วน Ileum ผนังบางกว่า มี Peyer's patches หนาแน่น มี Arcades หลายชั้น (4-5 ชั้น) และ Vasa recta สั้น",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 45,
    "tags": [
      "jejunum-vs-ileum",
      "arterial-arcades",
      "vasa-recta"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-044",
    "questionText": "เซลล์ชนิด Paneth cells ซึ่งตั้งอยู่ที่ก้นของหลอดต่อม Crypts of Lieberkühn ในลำไส้เล็ก ทำหน้าที่สำคัญทางสรีรวิทยาและภูมิคุ้มกันอย่างไร?",
    "options": {
      "A": "สร้างฮอร์โมนกลูคากอน",
      "B": "หลั่งกรดไฮโดรคลอริกเพื่อย่อยโปรตีน",
      "C": "ดูดซึมไขมันเข้าสู่หลอดน้ำเหลือง",
      "D": "หลั่งสารต้านจุลชีพ เช่น Lysozyme, Phospholipase A2, และ Defensins เพื่อควบคุมปริมาณแบคทีเรียและปกป้อง Stem cells ในต่อม"
    },
    "correctOption": "D",
    "explanation": "Paneth cells ตั้งอยู่ที่ฐานของ Intestinal crypts (Crypts of Lieberkühn) ภายในไซโทพลาสซึมมีแกรนูลขนาดใหญ่ติดสีชมพูแดง บรรจุเอนไซม์ทำลายแบคทีเรีย ได้แก่ Lysozyme, Alpha-defensins (Cryptdins) ทำหน้าที่ควบคุมจุลชีพในลูเมน และปกป้อง Intestinal stem cells ที่อยู่ข้างเคียง",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 46,
    "tags": [
      "paneth-cells",
      "crypts-of-lieberkuhn",
      "lysozyme",
      "defensins"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-045",
    "questionText": "ลำไส้เล็กส่วนปลาย ไอเลียม (Ileum) มีหน้าที่ดูดซึมสารสำคัญชนิดใดที่มีความจำเพาะสูง ซึ่งหากถูกตัดลำไส้ส่วนนี้ออกจะทำให้สารดังกล่าวไม่สามารถดูดซึมกลับเข้าสู่ร่างกายได้?",
    "options": {
      "A": "วิตามิน B12 (ที่จับกับ Intrinsic factor) และเกลือน้ำดี (Bile salts ผ่านกลไก Enterohepatic circulation)",
      "B": "ธาตุเหล็ก (Iron) และแคลเซียม",
      "C": "น้ำตาลกลูโคสและกรดอะมิโนเท่านั้น",
      "D": "ก๊าซออกซิเจนและไนโตรเจน"
    },
    "correctOption": "A",
    "explanation": "Terminal ileum มีบทบาทจำเพาะยิ่งยวด 2 ประการ: 1. ดูดซึม Vitamin B12-Intrinsic Factor complex 2. ดูดซึม Bile salts กลับคืนสู่ตับ (ประมาณ 95% ของน้ำดีถูกดูดกลับที่นี่ในกระบวนการ Enterohepatic circulation) หากตัด Ileum ออก ผู้ป่วยจะขาด B12 ท้องเสียเรื้อรัง และขาดวิตามินที่ละลายในไขมัน",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 47,
    "tags": [
      "terminal-ileum",
      "vitamin-b12",
      "bile-salts",
      "enterohepatic-circulation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-046",
    "questionText": "ลิ้นที่กั้นระหว่างลำไส้เล็กส่วนปลาย (Ileum) กับลำไส้ใหญ่ส่วนต้น (Cecum) มีชื่อเรียกว่าอะไร และทำหน้าที่ป้องกันสิ่งใด?",
    "options": {
      "A": "Pyloric valve ป้องกันไม่ให้น้ำย่อยไหลย้อนเข้ากระเพาะ",
      "B": "Ileocecal valve ทำหน้าที่ป้องกันไม่ให้กากอาหารและแบคทีเรียจำนวนมหาศาลจากลำไส้ใหญ่ไหลย้อนกลับเข้าสู่ลำไส้เล็ก",
      "C": "Anal sphincter ป้องกันอุจจาระเล็ด",
      "D": "Sphincter of Oddi ป้องกันน้ำดีรั่ว"
    },
    "correctOption": "B",
    "explanation": "Ileocecal valve (Bauhin's valve) มีขอบพับ 2 แฉกยื่นเข้าไปในโพรง Cecum ทำหน้าที่ปล่อย Chyme จาก Ileum เข้าสู่ Cecum และจะปิดสนิทเมื่อมีแรงดันใน Cecum สูงขึ้น เพื่อป้องกันแบคทีเรียจากลำไส้ใหญ่ไม่ให้ย้อนขึ้นไปรบกวนลำไส้เล็ก (Prevent bacterial overgrowth)",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 48,
    "tags": [
      "ileocecal-valve",
      "cecum",
      "bacterial-overgrowth-prevention"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-047",
    "questionText": "หลอดเลือดแดง Superior Mesenteric Artery (SMA) แตกแขนงออกจาก Abdominal Aorta ทำหน้าที่ส่งเลือดไปเลี้ยงอวัยวะ Midgut ของระบบทางเดินอาหารตั้งแต่โครงสร้างใดถึงโครงสร้างใด?",
    "options": {
      "A": "ตั้งแต่ 1/3 ส่วนปลายของ Transverse Colon ไปจนถึง Rectum",
      "B": "ตั้งแต่หลอดอาหารลงไปจนถึงกระเพาะอาหาร",
      "C": "ตั้งแต่ Duodenum ส่วนล่าง (ใต้ Major papilla) ไปจนถึง 2/3 ส่วนต้นของ Transverse Colon",
      "D": "เลี้ยงเฉพาะตับและม้ามเท่านั้น"
    },
    "correctOption": "C",
    "explanation": "Superior Mesenteric Artery (SMA) เป็นเส้นเลือดแดงของอนุพันธ์ Midgut เลี้ยงตั้งแต่ครึ่งล่างของ Duodenum, Jejunum, Ileum, Cecum, Appendix, Ascending colon ไปจนถึง 2 ใน 3 ส่วนต้นของ Transverse colon",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 49,
    "tags": [
      "sma",
      "midgut",
      "transverse-colon"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-048",
    "questionText": "ฮอร์โมน Cholecystokinin (CCK) ถูกสร้างและหลั่งจากเซลล์ I cells ในชั้นเยื่อบุของ Duodenum และ Jejunum เมื่อมีสิ่งเร้าใด และมีบทบาททางสรีรวิทยาอย่างไร?",
    "options": {
      "A": "หลั่งเพื่อยับยั้งการขับปัสสาวะของไต",
      "B": "หลั่งเมื่อน้ำตาลในเลือดต่ำเพื่อสลายไกลโคเจน",
      "C": "หลั่งเมื่อกระเพาะอาหารว่างเพื่อกระตุ้นความหิว",
      "D": "หลั่งเมื่อมีกรดไขมันและเปปไทด์ใน Chyme กระตุ้นให้ถุงน้ำดีบีบตัว (Gallbladder contraction), กระตุ้น Acinar cells ของตับอ่อนให้หลั่งเอนไซม์ย่อยอาหาร, และคลายกล้ามเนื้อหูรูด Sphincter of Oddi"
    },
    "correctOption": "D",
    "explanation": "Cholecystokinin (CCK) หลั่งจาก I cells ใน Duodenum/Jejunum เพื่อตอบสนองต่อไขมันและโปรตีน ทำหน้าที่หลัก: 1. สั่งให้ Gallbladder บีบตัวส่งน้ำดีเข้มข้นออกมา 2. สั่งให้ Acinar cells ของตับอ่อนหลั่ง Enzyme-rich pancreatic juice 3. คลาย Sphincter of Oddi 4. ชะลอการบีบตัวของกระเพาะอาหาร (Inhibits gastric emptying)",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 43,
    "tags": [
      "cck",
      "i-cells",
      "gallbladder-contraction",
      "pancreatic-enzymes"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-049",
    "questionText": "ฮอร์โมนซีครีติน (Secretin) หลั่งจาก S cells ในชั้น Mucosa ของลำไส้เล็กส่วนต้นเพื่อตอบสนองต่อสภาวะกรด (Acidic chyme) มีหน้าที่สำคัญที่สุดต่ออวัยวะใด?",
    "options": {
      "A": "กระตุ้นเซลล์ท่อของตับอ่อน (Pancreatic duct cells) และท่อน้ำดีให้หลั่งสารละลายไบคาร์บอเนต (HCO3- rich fluid) ในปริมาณมหาศาลเพื่อสะเทินกรด",
      "B": "กระตุ้นให้กระเพาะอาหารหลั่งกรดเพิ่มขึ้น",
      "C": "กระตุ้นการดูดซึมกลูโคสที่ลำไส้ใหญ่",
      "D": "กระตุ้นการสร้างเกล็ดเลือดในม้าม"
    },
    "correctOption": "A",
    "explanation": "Secretin ถูกค้นพบเป็นฮอร์โมนแรกของร่างกาย หลั่งจาก S cells เมื่อ pH ใน Duodenum ลดลงต่ำกว่า 4.5 โดย Secretin จะกระตุ้น Pancreatic centroacinar และ ductal cells รวมถึง Cholangiocytes ในตับ ให้หลั่งสารน้ำที่เป็นด่างสูง อุดมด้วย Bicarbonate (HCO3-) ออกมาสะเทินกรดในลำไส้เล็ก",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 43,
    "tags": [
      "secretin",
      "s-cells",
      "bicarbonate-secretion",
      "pancreatic-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-050",
    "questionText": "การเคลื่อนไหวของลำไส้เล็กแบบ Segmentation มีความแตกต่างเชิงหน้าที่จากการเคลื่อนไหวแบบ Peristalsis อย่างไร?",
    "options": {
      "A": "Segmentation ใช้เฉพาะกล้ามเนื้อลาย ส่วน Peristalsis ใช้กล้ามเนื้อเรียบ",
      "B": "Segmentation เป็นการหดและคลายตัวสลับกันของกล้ามเนื้อวงเพื่อคลุกเคล้าอาหารกับน้ำย่อยและเพิ่มโอกาสให้สัมผัสเยื่อบุผิวดูดซึมโดยไม่เน้นเคลื่อนที่ไปข้างหน้า ส่วน Peristalsis เป็นคลื่นการบีบรูดเพื่อผลักดันอาหารไปข้างหน้า",
      "C": "Segmentation เกิดเฉพาะในกระเพาะอาหาร ส่วน Peristalsis เกิดเฉพาะในหลอดอาหาร",
      "D": "Segmentation เกิดขึ้นเฉพาะเวลาหลับเท่านั้น"
    },
    "correctOption": "B",
    "explanation": "การเคลื่อนไหวของลำไส้เล็กมี 2 รูปแบบหลัก: 1. Segmentation (Mixing contractions): กล้ามเนื้อ Circular หดตัวเป็นปล้องๆ สลับจังหวะ เพื่อคลุกเคล้า Chyme กับเอนไซม์และผลักให้สารอาหารสัมผัสกับ Villi ดูดซึม 2. Peristalsis (Propulsive contractions): คลื่นกล้ามเนื้อบีบด้านหลังและคลายด้านหน้าเพื่อขับเคลื่อนกากอาหารไปข้างหน้าอย่างช้าๆ",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 44,
    "tags": [
      "segmentation",
      "peristalsis",
      "motility"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-051",
    "questionText": "ลำไส้ใหญ่ (Large Intestine) มีลักษณะโครงสร้างทางกายวิภาคภายนอกที่เด่นชัด 3 ประการซึ่งใช้แยกความแตกต่างจากลำไส้เล็กได้อย่างชัดเจน ข้อใดคือโครงสร้าง 3 ประการดังกล่าว?",
    "options": {
      "A": "Brunner's glands, Peyer's patches, และ Rugae",
      "B": "Villi, Plicae circulares, และ Lacteals",
      "C": "Taeniae coli (แถบกล้ามเนื้อแนวยาว 3 แถบ), Haustra (กระพุ้งโป่งพองเป็นปล้องๆ), และ Epiploic appendages (ถุงไขมันเล็กๆ ห้อยจากเยื่อบุผิว)",
      "D": "Crypts of Lieberkühn, Microvilli, และ Cilia"
    },
    "correctOption": "C",
    "explanation": "ลักษณะเฉพาะของลำไส้ใหญ่ (Colon) มี 3 อย่าง: 1. Taeniae coli: การรวมตัวของกล้ามเนื้อเรียบชั้นนอก (Outer longitudinal muscle) เป็นแถบแบน 3 แถบ 2. Haustra: กระเปาะหรือกระพุ้งที่เกิดจากการที่ Taeniae coli สั้นกว่าความยาวลำไส้ 3. Omental/Epiploic appendages: ติ่งถุงเยื่อบุช่องท้องที่บรรจุหย่อมไขมันห้อยตามแนว Taeniae coli",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 51,
    "tags": [
      "taeniae-coli",
      "haustra",
      "epiploic-appendages",
      "large-intestine-features"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-052",
    "questionText": "ผู้ป่วยชายอายุ 22 ปี มีอาการปวดท้องรอบสะดือก่อนย้ายมาปวดรุนแรงที่บริเวณท้องน้อยด้านล่างขวา (Right lower quadrant) ตรวจร่างกายพบกดเจ็บชัดเจนที่จุด McBurney's point ตำแหน่งทางกายวิภาคของจุด McBurney's point อยู่ที่ใด?",
    "options": {
      "A": "อยู่ที่ 1/3 ด้านในติดกับสะดือ",
      "B": "อยู่ที่กึ่งกลางระหว่างสะดือกับกระดูกหัวหน่าว (Pubic symphysis)",
      "C": "อยู่ที่ใต้ชายโครงขวาตัดกับ Midclavicular line",
      "D": "อยู่ที่ 1/3 ทางด้านข้าง (Lateral 1/3) บนเส้นสมมติที่ลากเชื่อมระหว่าง สะดือ (Umbilicus) กับ Anterior Superior Iliac Spine (ASIS) ด้านขวา"
    },
    "correctOption": "D",
    "explanation": "McBurney's point เป็นแลนด์มาร์กสำคัญทางศัลยกรรมในการวินิจฉัยไส้ติ่งอักเสบเฉียบพลัน (Acute appendicitis) อยู่ที่ตำแหน่ง 1 ใน 3 จาก ASIS ด้านขวา บนเส้นที่ลากระหว่าง Right ASIS กับ Umbilicus ซึ่งตรงกับตำแหน่งโคนของ Appendix (Base of the appendix) ที่แยกออกจาก Cecum",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 53,
    "tags": [
      "mcburneys-point",
      "appendicitis",
      "appendix-base",
      "asis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-053",
    "questionText": "ไส้ติ่ง (Vermiform appendix) มีจุดโคน (Base) เริ่มต้นติดอยู่กับ Cecum บริเวณใด และศัลยแพทย์สามารถหาโคนของไส้ติ่งในระหว่างการผ่าตัดได้อย่างไร?",
    "options": {
      "A": "อยู่ที่จุดรวมตัวบรรจบกันของแถบกล้ามเนื้อ Taeniae coli ทั้ง 3 แถบบริเวณผนังด้านหลังและด้านในของ Cecum",
      "B": "อยู่ที่กึ่งกลางของ Ileocecal valve",
      "C": "อยู่ที่ด้านหน้าของ Rectum",
      "D": "อยู่ที่บริเวณ Hepatic flexure"
    },
    "correctOption": "A",
    "explanation": "โคนของ Vermiform appendix (Base of appendix) จะเกาะอยู่ที่ขอบ Posteromedial ของ Cecum ใต้ต่อ Ileocecal junction ประมาณ 2 ซม. โดยเป็นจุดบรรจบกันของแถบกล้ามเนื้อ Taeniae coli ทั้ง 3 เส้น (Taenia libera, mesocolica, omentalis) ศัลยแพทย์จึงใช้การตามรอยแถบ Taenia coli เพื่อหาโคนของไส้ติ่ง",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 52,
    "tags": [
      "appendix-base",
      "taeniae-coli-convergence",
      "cecum"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-054",
    "questionText": "ส่วนโค้งหักมุมของลำไส้ใหญ่บริเวณใต้ผิวด้านล่างของตับ (Right colic flexure) และส่วนโค้งหักมุมบริเวณใต้ผิวด้านล่างของม้าม (Left colic flexure) มีชื่อเรียกทางการแพทย์ว่าอะไร และส่วนใดอยู่ในระดับสูงกว่า?",
    "options": {
      "A": "Duodenal flexure และ Sigmoid flexure",
      "B": "Hepatic flexure และ Splenic flexure โดย Splenic flexure อยู่ในระดับที่สูงกว่าและชิดด้านหลังมากกว่า",
      "C": "Hepatic flexure อยู่สูงกว่า Splenic flexure",
      "D": "Colic angle ทั้งสองข้างอยู่ในระนาบเดียวกันพอดี"
    },
    "correctOption": "B",
    "explanation": "1. Right colic (Hepatic) flexure เชื่อมระหว่าง Ascending colon กับ Transverse colon อยู่ใต้ตับ 2. Left colic (Splenic) flexure เชื่อมระหว่าง Transverse colon กับ Descending colon อยู่ใต้ม้าม โดย Splenic flexure จะอยู่สูงกว่าและลึกกว่า Hepatic flexure เนื่องจากตับขนาดใหญ่ด้านขวาเบียดกดให้ Hepatic flexure อยู่ต่ำกว่า",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 54,
    "tags": [
      "hepatic-flexure",
      "splenic-flexure",
      "colon-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-055",
    "questionText": "ลำไส้ใหญ่ส่วนคดเคี้ยวรูปตัวเอส (Sigmoid Colon) แขวนตัวอยู่ในอุ้งเชิงกรานด้วยแผ่นเยื่อแขวนที่มีชื่อว่าอะไร และเป็นส่วนที่มีความเสี่ยงต่อการเกิดภาวะลำไส้บิดเกลียว (Volvulus) สูงที่สุดเพราะเหตุใด?",
    "options": {
      "A": "Greater omentum ซึ่งมีไขมันหนัก",
      "B": "Mesentery proper ซึ่งยึดแน่นกับกระดูกสันหลัง",
      "C": "Sigmoid mesocolon ซึ่งมีความยาวและเคลื่อนที่ได้อย่างอิสระ ทำให้มีโอกาสหมุนบิดตัวรอบรากของเยื่อแขวนได้ง่าย",
      "D": "Falciform ligament"
    },
    "correctOption": "C",
    "explanation": "Sigmoid colon แขวนตัวอยู่ด้วย Sigmoid mesocolon รูปตัว V คว่ำ มีความยาวและความเป็นอิสระในการเคลื่อนไหวสูง (Intraperitoneal mobility) ทำให้ในผู้สูงอายุหรือผู้ที่มีอาการท้องผูกเรื้อรัง อาจเกิดภาวะ Sigmoid volvulus (ลำไส้บิดเกลียวรอบแกน mesocolon) เกิดการอุดตันของทางเดินอาหารและขาดเลือดเฉุกเฉิน",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 55,
    "tags": [
      "sigmoid-colon",
      "sigmoid-mesocolon",
      "volvulus"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-056",
    "questionText": "ชั้นเยื่อบุผิว (Mucosa) ของลำไส้ใหญ่แตกต่างจากลำไส้เล็กอย่างชัดเจนในแง่จุลกายวิภาคศาสตร์อย่างไร?",
    "options": {
      "A": "ลำไส้ใหญ่ไม่มีเซลล์ Goblet cells เลย",
      "B": "ลำไส้ใหญ่มี Villi สูงและแตกแขนงมากกว่าลำไส้เล็ก",
      "C": "ลำไส้ใหญ่บุด้วย Stratified squamous epithelium ตลอดทั้งท่อ",
      "D": "ลำไส้ใหญ่ \"ไม่มี Villi และไม่มี Plicae circulares\" แต่มีต่อม Tubular crypts of Lieberkühn ลึกและตรง อุดมไปด้วยเซลล์ Goblet cells ผลิตเมือกหล่อลื่นจำนวนมหาศาล"
    },
    "correctOption": "D",
    "explanation": "เยื่อบุของลำไส้ใหญ่ไม่มี Villi และไม่มี Circular folds เนื่องจากหน้าที่หลักไม่ใช่การดูดซึมสารอาหาร แต่เป็นดูดซึมน้ำและอิเล็กโทรไลต์กลับคืน จึงมี Crypts of Lieberkühn ทรงกระบอกตรง เรียงตัวชิดกันหนาแน่น และมี Goblet cells จำนวนมากที่สุดในทางเดินอาหารเพื่อสร้างเมือก (Mucus) หล่อลื่นการเคลื่อนที่ของก้อนอุจจาระแข็ง",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 56,
    "tags": [
      "large-intestine-histology",
      "no-villi",
      "goblet-cells",
      "crypts"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-057",
    "questionText": "หน้าที่ทางสรีรวิทยาและกายวิภาคที่สำคัญที่สุดของลำไส้ใหญ่ (Large Intestine) ต่อการรักษาสมดุลของร่างกายคือข้อใด?",
    "options": {
      "A": "การดูดซึมน้ำ (ประมาณ 1.0 - 1.5 ลิตร/วัน) และเกลือแร่ (Na+, Cl-) กลับคืนสู่กระแสเลือด, การสร้างอุจจาระอัดแน่น, และการสังเคราะห์วิตามิน K และ B complex โดย Normal flora",
      "B": "การย่อยโปรตีนด้วยกรดเข้มข้น",
      "C": "การสร้างน้ำดีและเอนไซม์ย่อยไขมัน",
      "D": "การดูดซึมวิตามิน B12 ร่วมกับ Intrinsic factor"
    },
    "correctOption": "A",
    "explanation": "หน้าที่หลักของลำไส้ใหญ่: 1. Water & Electrolyte reabsorption (ดูดซึมน้ำกลับประมาณ 90% ของของเหลวที่เข้ามา เพื่อทำให้อุจจาระกึ่งแข็ง) 2. Feces formation & storage 3. Vitamin synthesis (แบคทีเรียกลุ่ม Colonic microflora เช่น E. coli ช่วยสังเคราะห์ Vitamin K ที่จำเป็นต่อการแข็งตัวของเลือด และ Biotin, Vitamin B5)",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 50,
    "tags": [
      "colonic-functions",
      "water-absorption",
      "vitamin-k-synthesis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-058",
    "questionText": "หลอดเลือดแดง Inferior Mesenteric Artery (IMA) แตกแขนงออกจาก Abdominal Aorta ที่ระดับกระดูกสันหลัง L3 เลี้ยงอวัยวะอนุพันธ์ Hindgut ได้แก่อวัยวะใดบ้าง?",
    "options": {
      "A": "Cecum, Appendix, และ Ascending Colon",
      "B": "1/3 ส่วนปลายของ Transverse Colon, Descending Colon, Sigmoid Colon, และส่วนบนของ Rectum (Superior Rectal Artery)",
      "C": "Duodenum และ Jejunum",
      "D": "กระเพาะอาหารและตับอ่อน"
    },
    "correctOption": "B",
    "explanation": "Inferior Mesenteric Artery (IMA) เลี้ยงอนุพันธ์ของ Hindgut ได้แก่: ปลาย 1/3 ของ Transverse colon (ผ่าน Left colic artery), Descending colon, Sigmoid colon (ผ่าน Sigmoid arteries) และสิ้นสุดเป็น Superior Rectal Artery ไปเลี้ยงส่วนบนของ Rectum",
    "system": "Digestive System",
    "topic": "Large Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 57,
    "tags": [
      "ima",
      "hindgut",
      "descending-colon",
      "superior-rectal-artery"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-059",
    "questionText": "ในทวารหนัก เส้น Pectinate line (Dentate line) เป็นรอยต่อสำคัญทางคัพภวิทยา (Embryological junction) ที่แบ่งแยกความแตกต่างด้านกายวิภาคและคลินิก ข้อใดเปรียบเทียบบริเวณเหนือต่อ Pectinate line กับใต้ต่อ Pectinate line ได้ถูกต้อง?",
    "options": {
      "A": "เหนือเส้นบุด้วยเนื้อเยื่อกระดูกอ่อน ส่วนใต้เส้นบุด้วยเยื่อเมือก",
      "B": "เหนือเส้นเลี้ยงด้วยเส้นประสาท Somatic ส่วนใต้เส้นเลี้ยงด้วย Autonomic",
      "C": "เหนือเส้นบุด้วย Simple columnar epithelium, เลี้ยงด้วยระบบประสาทอัตโนมัติ Autonomic (ไม่เจ็บปวดต่อการสัมผัส), และเกิดริดสีดวงทวารภายใน (Internal hemorrhoids); ใต้เส้นบุด้วย Stratified squamous, เลี้ยงด้วย Somatic pudendal nerve (เจ็บปวดรุนแรง), และเกิดริดสีดวงภายนอก (External hemorrhoids)",
      "D": "ไม่มีความแตกต่างกันทั้งระบบประสาทและหลอดเลือด"
    },
    "correctOption": "C",
    "explanation": "Pectinate line เป็นรอยต่อระหว่าง Endoderm (Hindgut) กับ Ectoderm (Proctodeum): 1. Above line: Simple columnar epithelium, หลอดเลือดดำเทเข้า Portal system (Superior rectal v.), ประสาท Autonomic ( visceral sensation ไม่เจ็บปวด จึงมัดยางริดสีดวงภายในได้) 2. Below line: Stratified squamous epithelium, หลอดเลือดดำเทเข้า Caval system (Inferior rectal v.), เลี้ยงโดย Somatic Pudendal nerve (เจ็บปวดเฉียบพลัน ไวต่อสัมผัส)",
    "system": "Digestive System",
    "topic": "Rectum & Anal Canal",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 58,
    "tags": [
      "pectinate-line",
      "dentate-line",
      "internal-vs-external-hemorrhoids",
      "pudendal-nerve"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-060",
    "questionText": "กล้ามเนื้อหูรูดทวารหนักมี 2 ชั้น ข้อใดเปรียบเทียบระหว่าง Internal Anal Sphincter กับ External Anal Sphincter ในแง่ชนิดของกล้ามเนื้อและการควบคุมการทำงานได้ถูกต้อง?",
    "options": {
      "A": "ทั้งสองชั้นเป็นกล้ามเนื้อเรียบที่อยู่นอกอำนาจจิตใจ",
      "B": "Internal เป็นกล้ามเนื้อลาย ส่วน External เป็นกล้ามเนื้อเรียบ",
      "C": "ทั้งสองชั้นเป็นกล้ามเนื้อลายที่ควบคุมได้เองตลอดเวลา",
      "D": "Internal anal sphincter เป็นกล้ามเนื้อเรียบ (Smooth muscle) ทำงานอยู่นอกอำนาจจิตใจ (Involuntary) ควบคุมโดย Autonomic nervous system; External anal sphincter เป็นกล้ามเนื้อลาย (Skeletal muscle) ทำงานภายใต้อำนาจจิตใจ (Voluntary) ควบคุมโดย Pudendal nerve"
    },
    "correctOption": "D",
    "explanation": "1. Internal anal sphincter เกิดจากการหนาตัวของกล้ามเนื้อเรียบชั้นวงกลม (Circular smooth muscle) ของทวารหนัก ควบคุมโดย Autonomic (Sympathetic ช่วยหดตัวกลั้น, Parasympathetic ช่วยคลายตัวขับถ่าย) อยู่นอกอำนาจจิตใจ 2. External anal sphincter เป็นกล้ามเนื้อลาย (Skeletal muscle) ส่วนหนึ่งของ Pelvic diaphragm ควบคุมภายใต้อำนาจจิตใจ (Voluntary control) ผ่าน Somatic nerve (Pudendal nerve: S2-S4)",
    "system": "Digestive System",
    "topic": "Rectum & Anal Canal",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 59,
    "tags": [
      "internal-anal-sphincter",
      "external-anal-sphincter",
      "defecation-reflex",
      "pudendal-nerve"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-061",
    "questionText": "ตับ (Liver) เป็นต่อมขนาดใหญ่ที่สุดในร่างกาย ตั้งอยู่ในช่องท้องส่วนบนขวา (Right hypochondrium และ Epigastrium) แบ่งออกเป็น 4 พู (Lobes) ทางกายวิภาค ได้แก่พูใดบ้าง?",
    "options": {
      "A": "Right lobe, Left lobe, Caudate lobe (ด้านหลังบน), และ Quadrate lobe (ด้านล่างหน้าถัดจากถุงน้ำดี)",
      "B": "Anterior lobe, Posterior lobe, Superior lobe, และ Inferior lobe",
      "C": "Medial lobe, Lateral lobe, Dorsal lobe, และ Ventral lobe",
      "D": "Cranial lobe, Caudal lobe, Apical lobe, และ Basal lobe"
    },
    "correctOption": "A",
    "explanation": "ตับแบ่งตามกายวิภาคศาสตร์มหภาคเป็น 4 Lobes: 1. Right lobe (ขนาดใหญ่ที่สุด) 2. Left lobe (แยกจาก Right lobe ด้วย Falciform ligament) 3. Caudate lobe (อยู่ผิวด้านหลัง ระหว่าง IVC กับ Fossa for ductus venosus) 4. Quadrate lobe (อยู่ผิวด้านล่าง ระหว่างถุงน้ำดีกับ Ligamentum teres hepatis)",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 61,
    "tags": [
      "liver-lobes",
      "caudate-lobe",
      "quadrate-lobe"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-062",
    "questionText": "แผ่นเอ็นรูปเคียว Falciform Ligament ทำหน้าที่ยึดตับไว้กับผนังหน้าท้องและกะบังลม ที่ขอบล่างอิสระของเอ็นนี้มีโครงสร้างเส้นเอ็นกลม Ligamentum Teres Hepatis (Round ligament of the liver) ซึ่งเป็นโครงสร้างที่หลงเหลือมาจากสิ่งใดในระยะทารกในครรภ์?",
    "options": {
      "A": "หลอดเลือดแดงสายสะดือ (Umbilical artery)",
      "B": "หลอดเลือดดำสะดือ (Obliterated Left Umbilical Vein)",
      "C": "Ductus arteriosus",
      "D": "Ductus venosus"
    },
    "correctOption": "B",
    "explanation": "Ligamentum teres hepatis (Round ligament of liver) ทอดอยู่ที่ขอบล่างอิสระของ Falciform ligament เกิดจากการตีบตันและกลายเป็นพังผืดของ Left Umbilical Vein ภายหลังการคลอด ซึ่งในครรภ์เคยทำหน้าที่นำเลือดที่มีออกซิเจนสูงจากรกเข้าสู่ตัวทารก",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 62,
    "tags": [
      "falciform-ligament",
      "ligamentum-teres",
      "umbilical-vein-remnant"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-063",
    "questionText": "หน่วยโครงสร้างเชิงฟังก์ชันพื้นฐานของตับคือ พูตับคลาสสิก (Classic Hepatic Lobule) มีลักษณะรูปร่างเป็นรูปหกเหลี่ยม (Hexagonal prism) มีโครงสร้างเส้นเลือดใดทอดผ่านอยู่ที่แกนกลางของพูตับพอดี?",
    "options": {
      "A": "Proper hepatic artery",
      "B": "Hepatic portal vein",
      "C": "Central vein (หลอดเลือดดำศูนย์กลางพูตับ)",
      "D": "Bile canaliculus"
    },
    "correctOption": "C",
    "explanation": "Classic Hepatic Lobule มีรูปร่างเป็นปริซึมหกเหลี่ยม มี Central vein อยู่ตรงแกนกลาง มีแผ่นเซลล์ตับ (Hepatocyte plates) เรียงตัวแผ่ออกเป็นแนวรัศมีคล้ายซี่ล้อเกวียน โดยที่มุมทั้งหกของหกเหลี่ยมจะเป็นที่ตั้งของ Portal canals (Portal triads)",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 63,
    "tags": [
      "classic-hepatic-lobule",
      "central-vein",
      "hexagonal-prism"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-064",
    "questionText": "ทิศทางการไหลเวียนของเลือดและน้ำดีภายในเนื้อตับ (Hepatic lobule) สัมพันธ์กับ Central vein และ Portal triad อย่างไร?",
    "options": {
      "A": "เลือดไหลออกจาก Central vein ไปยังมุมของหกเหลี่ยม",
      "B": "ทั้งเลือดและน้ำดีไหลเข้าหา Central vein ในทิศทางเดียวกัน",
      "C": "น้ำดีไหลจาก Central vein ออกไปเลี้ยงกระเพาะอาหาร",
      "D": "เลือด (จาก Portal vein และ Hepatic artery) ไหลเข้าสู่ Sinusoids มุ่งหน้า \"เข้าหา\" Central vein ตรงกลาง ส่วนน้ำดี (Bile) ไหลผ่าน Bile canaliculi ในทิศทางตรงกันข้าม มุ่งหน้า \"ออกจาก\" ศูนย์กลางไปสู่ Bile ductules ที่ Portal triad"
    },
    "correctOption": "D",
    "explanation": "ทิศทางการไหลในตับเป็นแบบสวนทางกัน (Counter-current): เลือดผสมระหว่าง Portal vein (75%) และ Hepatic artery (25%) จะไหลผ่าน Sinusoids จากมุมของพู (Portal triad) เข้าสู่แกนกลาง (Central vein) ขณะที่น้ำดีที่สร้างโดย Hepatocytes จะถูกหลั่งเข้าสู่ Bile canaliculi แล้วไหลจากแกนกลางออกสู่ท่อน้ำดีที่มุม (Bile ductule at Portal triad)",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 64,
    "tags": [
      "hepatic-blood-flow",
      "counter-current-bile-flow",
      "portal-triad-to-central-vein"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-065",
    "questionText": "เซลล์แมคโครฟาจประจำที่ (Resident macrophages) ที่อาศัยอยู่ภายในหลอดเลือดฝอย Sinusoids ของตับ ทำหน้าที่ตรวจจับและทำลายแบคทีเรีย เศษซากเซลล์ และสารพิษที่มาจากทางเดินอาหารคือเซลล์ชนิดใด?",
    "options": {
      "A": "Kupffer cells (Stellate macrophages)",
      "B": "Ito cells (Hepatic stellate cells)",
      "C": "Hepatocytes",
      "D": "Endothelial cells"
    },
    "correctOption": "A",
    "explanation": "Kupffer cells (Stellate macrophages) เป็นเซลล์ในระบบ Mononuclear phagocyte เกาะติดอยู่ตามผนังของ Hepatic sinusoids ทำหน้าที่เก็บกินเชื้อแบคทีเรียที่เล็ดลอดมาจากลำไส้ผ่านทาง Portal vein เม็ดเลือดแดงที่ผิดปกติ และอนุภาคสิ่งแปลกปลอมได้อย่างมีประสิทธิภาพสูง",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 65,
    "tags": [
      "kupffer-cells",
      "hepatic-macrophages",
      "sinusoids"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-066",
    "questionText": "เซลล์ชนิด Hepatic Stellate Cells (Ito cells) ซึ่งตั้งอยู่ในช่องว่างใต้เยื่อบุโพรงไซนูซอยด์ (Space of Disse) มีบทบาทสรีรวิทยาปกติในการสะสมสารใด และในภาวะตับอักเสบเรื้อรังมีบทบาททำให้เกิดพยาธิสภาพใด?",
    "options": {
      "A": "ทำหน้าที่สร้างฮีโมโกลบิน และทำให้เกิดโรคตับแข็ง",
      "B": "ในภาวะปกติทำหน้าที่สะสมวิตามิน A (Fat-soluble Vitamin A storage) และในภาวะตับอักเสบเรื้อรังจะเปลี่ยนรูปเป็น Myofibroblasts หลั่งเส้นใยคอลลาเจนจนเกิดพังผืดในตับ (Liver Cirrhosis)",
      "C": "ทำหน้าที่หลั่งเอนไซม์เปปซิน",
      "D": "ทำหน้าที่กำจัดยูเรีย"
    },
    "correctOption": "B",
    "explanation": "Ito cells (Hepatic stellate cells) อยู่ใน Perisinusoidal space (Space of Disse) สภาวะปกติเก็บสะสม Vitamin A ถึง 80% ของร่างกาย แต่เมื่อตับได้รับบาดเจ็บเรื้อรัง (เช่น จากแอลกอฮอล์หรือไวรัสตับอักเสบ) เซลล์จะถูกกระตุ้นเปลี่ยนเป็น Myofibroblasts สร้าง Collagen Type I และ III ก่อให้เกิด Fibrosis และ Liver cirrhosis",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 65,
    "tags": [
      "ito-cells",
      "hepatic-stellate-cells",
      "vitamin-a-storage",
      "cirrhosis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-067",
    "questionText": "ลำดับเส้นทางทางเดินน้ำดี (Biliary tree pathway) ตั้งแต่จุดเริ่มต้นการสร้างจากเซลล์ตับจนกระทั่งไหลออกสู่ท่อน้ำดีใหญ่ข้อใดถูกต้อง?",
    "options": {
      "A": "Cystic duct -> Pancreatic duct -> Hepatic duct -> Duodenum",
      "B": "Gallbladder -> Central vein -> Common bile duct -> Liver",
      "C": "Hepatocytes -> Bile canaliculi -> Canals of Hering -> Interlobular bile ductules (in portal triad) -> Right and Left Hepatic ducts -> Common Hepatic duct",
      "D": "Hepatocytes -> Portal vein -> Hepatic vein -> Common bile duct"
    },
    "correctOption": "C",
    "explanation": "เส้นทางน้ำดี: 1. Hepatocytes สังเคราะห์น้ำดี 2. หลั่งเข้าสู่ Bile canaliculi (ร่องเล็กๆ ระหว่างเซลล์ตับ) 3. ไหลเข้า Canals of Hering 4. เข้าสู่ Interlobular bile ducts ใน Portal triad 5. รวมกันเป็น Right & Left hepatic ducts 6. ไหลมารวมเป็น Common hepatic duct ออกจากขั้วตับ (Porta hepatis)",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 66,
    "tags": [
      "biliary-tree",
      "bile-canaliculi",
      "common-hepatic-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-068",
    "questionText": "ท่อน้ำดีร่วม Common Bile Duct (Ductus choledochus) เกิดจากการรวมตัวกันของท่อน้ำดี 2 ท่อใด?",
    "options": {
      "A": "Hepatic Portal Vein รวมกับ Celiac Trunk",
      "B": "Right Hepatic Duct รวมกับ Left Hepatic Duct",
      "C": "Pancreatic Duct รวมกับ Parotid Duct",
      "D": "Common Hepatic Duct (จากตับ) รวมกับ Cystic Duct (จากถุงน้ำดี)"
    },
    "correctOption": "D",
    "explanation": "Common Bile Duct (ท่อน้ำดีร่วม ยาวประมาณ 7.5 ซม.) เกิดจากการบรรจบกันของ Common Hepatic Duct (ที่นำน้ำดีสดจากตับ) กับ Cystic Duct (ที่ต่อกับถุงน้ำดี) จากนั้นจะทอดลงมาทางด้านหลังของ Duodenum และหัวตับอ่อน เพื่อไปเปิดเข้าสู่ Duodenum",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 67,
    "tags": [
      "common-bile-duct",
      "cystic-duct",
      "common-hepatic-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-069",
    "questionText": "ถุงน้ำดี (Gallbladder) ตั้งอยู่บนผิวด้านล่างของตับ (Visceral surface) มีหน้าที่ทางสรีรวิทยาที่สำคัญที่สุดคือข้อใด?",
    "options": {
      "A": "กักเก็บน้ำดี (Storage) และดูดซึมน้ำและอิเล็กโทรไลต์ออกเพื่อทำให้น้ำดีเข้มข้นขึ้น 5 ถึง 10 เท่า (Concentration of bile)",
      "B": "สร้างน้ำดีขึ้นมาใหม่ทั้งหมด",
      "C": "ย่อยโปรตีนและไขมันในถุงน้ำดี",
      "D": "สร้างฮอร์โมนอินซูลินและกลูคากอน"
    },
    "correctOption": "A",
    "explanation": "ถุงน้ำดีไม่ได้ทำหน้าที่สร้างน้ำดี (น้ำดีสร้างจากตับ Hepatocytes ตลอด 24 ชม.) แต่ทำหน้าที่เป็นอ่างกักเก็บน้ำดีสำรอง (กักเก็บได้ 30-50 มล.) และมีเยื่อบุ Simple columnar epithelium ดึงน้ำและเกลือแร่กลับ ทำให้สารน้ำดีมีความเข้มข้นขึ้นถึง 5-10 เท่า เพื่อเตรียมพร้อมฉีดออกเมื่อรับประทานอาหารมัน",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 68,
    "tags": [
      "gallbladder-functions",
      "bile-storage",
      "bile-concentration"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-070",
    "questionText": "ผู้ป่วยหญิงมีอาการปวดเกร็งรุนแรงที่ใต้ชายโครงขวา ร้าวไปที่สะบักขวา หลังรับประทานอาหารมื้อที่มีไขมันสูง ตรวจอัลตราซาวด์พบนิ่วในถุงน้ำดี (Cholelithiasis) องค์ประกอบหลักของก้อนนิ่วในถุงน้ำดีที่พบได้บ่อยที่สุด (ประมาณ 80%) เกิดจากการตกตะกอนของสารใด?",
    "options": {
      "A": "Calcium oxalate",
      "B": "Cholesterol (คอเลสเตอรอลตกผลึกเนื่องจากอัตราส่วนของเกลือน้ำดีและเลซิตินไม่สมดุล)",
      "C": "Uric acid",
      "D": "Sodium bicarbonate"
    },
    "correctOption": "B",
    "explanation": "Cholesterol gallstones เป็นชนิดของนิ่วในถุงน้ำดีที่พบมากที่สุด (ประมาณ 75-80%) เกิดจากภาวะที่น้ำดีมีคอเลสเตอรอลอิ่มตัวเกิน (Supersaturated bile) ร่วมกับมีเกลือน้ำดี (Bile salts) และฟอสโฟลิพิด (Lecithin) ไม่เพียงพอที่จะละลายคอเลสเตอรอลให้อยู่ในรูป Micelles ได้ จึงเกิดการตกผลึกเป็นเม็ดนิ่ว",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 69,
    "tags": [
      "cholelithiasis",
      "cholesterol-stones",
      "gallbladder-stones"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-071",
    "questionText": "ตับอ่อน (Pancreas) จัดเป็นต่อมผสม (Mixed gland) โดยโครงสร้างเนื้อเยื่อส่วนใหญ่ประมาณ 98-99% ทำหน้าที่เป็นต่อมมีท่อ (Exocrine pancreas) เซลล์หน่วยย่อยที่ทำหน้าที่สร้างเอนไซม์ย่อยอาหารคือเซลล์ชนิดใด?",
    "options": {
      "A": "Hepatocytes",
      "B": "Islets of Langerhans",
      "C": "Acinar cells (จัดกลุ่มกันเป็นรูปถุง Acini บรรจุ Zymogen granules)",
      "D": "Goblet cells"
    },
    "correctOption": "C",
    "explanation": "เนื้อเยื่อส่วน Exocrine ของตับอ่อนประกอบด้วย Pancreatic acini ซึ่งสร้างขึ้นจาก Acinar cells ทรงพีระมิด ภายในบรรจุ Zymogen granules ทำหน้าที่ผลิตและหลั่งเอนไซม์ย่อยอาหารหลัก 3 หมู่ (Amylase, Lipase, Proteases เช่น Trypsinogen, Chymotrypsinogen) เข้าสู่ระบบท่อน้ำย่อยตับอ่อน",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 71,
    "tags": [
      "exocrine-pancreas",
      "acinar-cells",
      "zymogen-granules"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-072",
    "questionText": "เหตุใดเอนไซม์ย่อยโปรตีนที่สร้างจาก Acinar cells ของตับอ่อน เช่น Trypsinogen และ Chymotrypsinogen จึงไม่ย่อยทำลายเนื้อเยื่อตับอ่อนเองในขณะที่ถูกสร้างและสะสมอยู่?",
    "options": {
      "A": "เพราะตับอ่อนไม่มีโปรตีนเป็นส่วนประกอบ",
      "B": "เพราะในตับอ่อนมีอุณหภูมิติดลบ",
      "C": "เพราะเอนไซม์ตับอ่อนทำงานได้เฉพาะเมื่อมีกรด HCl ในตับอ่อน",
      "D": "ถูกสร้างและหลั่งออกมาในรูปของสารตั้งต้นที่ยังไม่ทำงาน (Inactive proenzymes / Zymogens) และมี Pancreatic Secretory Trypsin Inhibitor (PSTI) บรรจุอยู่ด้วย"
    },
    "correctOption": "D",
    "explanation": "กลไกป้องกันการย่อยตัวเอง (Autodigestion prevention): 1. เอนไซม์ย่อยโปรตีนถูกสังเคราะห์ในรูป Inactive zymogens (เช่น Trypsinogen) 2. บรรจุใน Zymogen granules ที่มีเยื่อหุ้มหนา 3. มี Trypsin inhibitor ป้องกันการกระตุ้นก่อนเวลา โดย Trypsinogen จะถูกกระตุ้นเป็น Active Trypsin ก็ต่อเมื่อไหลไปสัมผัสกับเอนไซม์ Enteropeptidase (Enterokinase) บนผนัง Duodenum เท่านั้น",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 72,
    "tags": [
      "zymogens",
      "trypsinogen",
      "enteropeptidase",
      "pancreatitis-prevention"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-073",
    "questionText": "เอนไซม์ชนิดใดบนเยื่อบุ Brush border ของลำไส้เล็กส่วนต้น (Duodenum) ที่ทำหน้าที่ตัดสายเปปไทด์ของ Trypsinogen จากตับอ่อนให้กลายเป็น Active Trypsin ซึ่งจะไปกระตุ้น Zymogens อื่นๆ ทั้งหมดต่อไป?",
    "options": {
      "A": "Enteropeptidase (Enterokinase)",
      "B": "Pepsin",
      "C": "Amylase",
      "D": "Lipase"
    },
    "correctOption": "A",
    "explanation": "Enteropeptidase (เดิมเรียก Enterokinase) เป็นเอนไซม์ที่ตรึงอยู่บน Microvilli ของ Duodenal enterocytes เมื่อสัมผัสกับ Pancreatic juice จะตัดสาย Hexapeptide ของ Trypsinogen ให้กลายเป็น Trypsin จากนั้น Trypsin จะทำหน้าที่เป็น Master activator ไปเร่งกระตุ้น Chymotrypsinogen, Procarboxypeptidase, และ Proelastase ให้กลายเป็น Active enzymes พร้อมย่อยอาหาร",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 72,
    "tags": [
      "enteropeptidase",
      "enterokinase",
      "trypsin-activation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-074",
    "questionText": "ตับอ่อนส่วนไร้ท่อ (Endocrine pancreas) คิดเป็นประมาณ 1-2% ของเนื้อเยื่อตับอ่อนทั้งหมด รวมตัวกันเป็นเกาะเซลล์ขนาดเล็กเรียกว่า Islets of Langerhans เซลล์ชนิด Beta cells (บีตาเซลล์) ทำหน้าที่สร้างและหลั่งฮอร์โมนชนิดใด?",
    "options": {
      "A": "Glucagon (กลูคากอน) เพื่อเพิ่มระดับน้ำตาลในเลือด",
      "B": "Insulin (อินซูลิน) เพื่อลดระดับน้ำตาลในกระแสเลือดโดยนำกลูโคสเข้าสู่เซลล์",
      "C": "Somatostatin (โซมาโตสแตติน)",
      "D": "Pancreatic polypeptide (PP)"
    },
    "correctOption": "B",
    "explanation": "ใน Islets of Langerhans ประกอบด้วย: 1. Beta cells (ประมาณ 70%): หลั่งฮอร์โมน Insulin ช่วยนำกลูโคสเข้าสู่กล้ามเนื้อและไขมัน สังเคราะห์ไกลโคเจน ลดน้ำตาลในเลือด 2. Alpha cells (20%): หลั่ง Glucagon สลายไกลโคเจนเพิ่มน้ำตาลในเลือด 3. Delta cells (5%): หลั่ง Somatostatin ยับยั้งทั้งอินซูลินและกลูคากอน",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 73,
    "tags": [
      "islets-of-langerhans",
      "beta-cells",
      "insulin",
      "alpha-cells",
      "glucagon"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-075",
    "questionText": "ส่วนหางของตับอ่อน (Tail of the Pancreas) ทอดตัวไปสิ้นสุดทางกายวิภาคชิดติดกับอวัยวะใด และบรรจุอยู่ในเอ็นเยื่อบุช่องท้องชนิดใด?",
    "options": {
      "A": "ชิดติดกับไส้ติ่ง",
      "B": "ชิดติดกับถุงน้ำดี",
      "C": "ชิดติดกับขั้วของม้าม (Hilum of the Spleen) โดยบรรจุอยู่ใน Splenorenal (Lienorenal) ligament",
      "D": "ชิดติดกับกระเพาะปัสสาวะ"
    },
    "correctOption": "C",
    "explanation": "Tail of pancreas เป็นส่วนเดียวของตับอ่อนที่จัดเป็น Intraperitoneal structure โดยทอดตัวเข้าไปแตะชิดกับ Hilum ของม้าม และบรรจุอยู่ภายใน Splenorenal (Lienorenal) ligament ร่วมกับหลอดเลือด Splenic vessels ในการผ่าตัดตัดม้าม (Splenectomy) ศัลยแพทย์จึงต้องระวังไม่ให้เกิดการบาดเจ็บต่อหางของตับอ่อน",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 70,
    "tags": [
      "tail-of-pancreas",
      "splenic-hilum",
      "splenorenal-ligament"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-076",
    "questionText": "กระบวนการย่อยสารอาหารประเภทคาร์โบไฮเดรต (Carbohydrate digestion) ในร่างกายมนุษย์เริ่มต้นขึ้นเป็นครั้งแรกที่อวัยวะใด โดยอาศัยเอนไซม์ชนิดใด?",
    "options": {
      "A": "ในหลอดอาหาร โดยอาศัย Amylase จากหลอดอาหาร",
      "B": "ในกระเพาะอาหาร โดยอาศัยเอนไซม์ Pepsin",
      "C": "ในลำไส้เล็ก โดยอาศัย Lactase",
      "D": "ในช่องปาก (Oral cavity) โดยอาศัยเอนไซม์ Salivary amylase (Ptyalin)"
    },
    "correctOption": "D",
    "explanation": "การย่อยแป้งเริ่มต้นขึ้นทันทีในช่องปากขณะบดเคี้ยวอาหาร โดยเอนไซม์ Salivary alpha-amylase (Ptyalin) ซึ่งสร้างจากต่อมน้ำลาย (โดยเฉพาะ Parotid gland) จะย่อยแป้ง (Starch/Glycogen) ให้กลายเป็นโอลิโกแซ็กคาไรด์และมอลโทส จนกระทั่งอาหารถูกกลืนลงกระเพาะอาหาร กรด HCl จะทำให้เอนไซม์นี้หมดฤทธิ์ลง",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 23,
    "tags": [
      "salivary-amylase",
      "ptyalin",
      "carbohydrate-digestion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-077",
    "questionText": "กระบวนการย่อยโปรตีน (Protein digestion) เริ่มต้นขึ้นเป็นครั้งแรกที่อวัยวะใดของระบบทางเดินอาหาร?",
    "options": {
      "A": "กระเพาะอาหาร (Stomach) โดยเอนไซม์ Pepsin ร่วมกับกรดไฮโดรคลอริก",
      "B": "ช่องปาก โดยน้ำลาย",
      "C": "หลอดอาหาร โดยเมือก",
      "D": "ลำไส้ใหญ่ โดยแบคทีเรีย"
    },
    "correctOption": "A",
    "explanation": "ในช่องปากและหลอดอาหารไม่มีเอนไซม์ย่อยโปรตีน การย่อยโปรตีนเริ่มต้นขึ้นเป็นครั้งแรกในกระเพาะอาหาร เมื่อ Pepsinogen จาก Chief cells ถูกกรด HCl จาก Parietal cells กระตุ้นให้กลายเป็น Active Pepsin ทำหน้าที่ย่อยพันธะเปปไทด์ของโปรตีนสายยาวให้กลายเป็น Polypeptides และ Oligopeptides ขนาดเล็กลง",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 36,
    "tags": [
      "protein-digestion",
      "stomach",
      "pepsin"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-078",
    "questionText": "น้ำดี (Bile) ที่สร้างจากตับไม่มีเอนไซม์ย่อยอาหารอยู่เลย แต่น้ำดีมีความจำเป็นอย่างยิ่งต่อการย่อยไขมันในทางเดินอาหารผ่านกลไกใด?",
    "options": {
      "A": "การเปลี่ยนไขมันให้กลายเป็นน้ำตาลกลูโคสโดยตรง",
      "B": "Emulsification (การทำให้อนุภาคไขมันแตกตัวเป็นละอองหยดขนาดเล็ก เพื่อเพิ่มพื้นที่ผิวสัมผัสให้เอนไซม์ Pancreatic lipase เข้าย่อยสลายได้ง่ายขึ้น)",
      "C": "การสร้างความเย็นทำให้ไขมันแข็งตัวตกตะกอน",
      "D": "การยับยั้งการทำงานของเอนไซม์ไลเปส"
    },
    "correctOption": "B",
    "explanation": "น้ำดีประกอบด้วย Bile salts, Phospholipids (Lecithin), และ Cholesterol ซึ่งมีคุณสมบัติเป็นสารลดแรงตึงผิว (Amphipathic molecules) ช่วยลดแรงตึงผิวของก้อนไขมันขนาดใหญ่ แตกตัวออกเป็นละอองไขมันขนาดเล็กจิ๋ว (Emulsification) เพิ่มพื้นที่ผิวให้ Pancreatic lipase สามารถเข้าตัดพันธะ Triglycerides ได้อย่างรวดเร็ว",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 66,
    "tags": [
      "bile-functions",
      "emulsification",
      "lipid-digestion"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-079",
    "questionText": "ในกระบวนการดูดซึมไขมันที่ผนังลำไส้เล็ก กรดไขมันอิสระและโมโนกลีเซอไรด์จะถูกนำมารวมตัวใหม่ภายในเซลล์เยื่อบุผิว แล้วประกอบรวมเข้ากับโปรตีนกลายเป็นอนุภาคชนิดใดก่อนจะถูกหลั่งเข้าสู่หลอดน้ำเหลืองแล็กทีล (Lacteals)?",
    "options": {
      "A": "High Density Lipoproteins (HDL)",
      "B": "Very Low Density Lipoproteins (VLDL)",
      "C": "Chylomicrons (ไคโลไมครอน)",
      "D": "Micelles"
    },
    "correctOption": "C",
    "explanation": "ภายใน Enterocytes: กรดไขมันและ Monoglycerides จะถูก Resynthesized เป็น Triglycerides ใน Smooth ER แล้วนำไปรวมกับ Cholesterol, Phospholipids และ Apolipoproteins กลายเป็นหยดไขมันชนิด Chylomicrons จากนั้นจะถูกหลั่งออกจากเซลล์โดย Exocytosis เข้าสู่หลอดน้ำเหลือง Lacteals (เนื่องจากมีขนาดใหญ่เกินกว่าจะเข้าหลอดเลือดฝอยได้)",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 47,
    "tags": [
      "chylomicrons",
      "fat-absorption",
      "lacteals"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-080",
    "questionText": "หลอดเลือดดำที่ทำหน้าที่ระบายเลือดออกจากทางเดินอาหารในช่องท้องเพื่อส่งเข้าสู่ตับ มีชื่อว่าอะไร และทำไมเลือดจากทางเดินอาหารจึงต้องผ่านตับก่อนเข้าสู่หัวใจ?",
    "options": {
      "A": "Celiac vein เพื่อไปสร้างเม็ดเลือดแดง",
      "B": "Inferior Vena Cava เพื่อส่งสารอาหารตรงสู่สมองทันที",
      "C": "Aorta เพื่อสูบฉีดเลือดไปยังไต",
      "D": "Hepatic Portal Vein เพื่อให้ตับทำหน้าที่ประมวลผล กักเก็บสารอาหารที่ดูดซึมมา และกำจัดสารพิษ ยา หรือแบคทีเรียแปลกปลอม (First-pass metabolism & detoxification)"
    },
    "correctOption": "D",
    "explanation": "Hepatic Portal System ลำเลียงเลือดดำจากกระเพาะอาหาร ลำไส้เล็ก ลำไส้ใหญ่ ม้าม และตับอ่อนเข้าสู่ตับโดยตรงทาง Hepatic Portal Vein เพื่อให้เซลล์ตับ (Hepatocytes) และเซลล์ Kupffer cells ได้ทำหน้าที่: 1. กรองดักจับเชื้อโรค 2. สลายสารพิษและยา (First-pass effect) 3. สังเคราะห์ไกลโคเจนและควบคุมระดับสารอาหารก่อนปล่อยสู่ระบบไหลเวียนร่างกาย",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 64,
    "tags": [
      "hepatic-portal-vein",
      "first-pass-metabolism",
      "detoxification"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-081",
    "questionText": "ผู้ป่วยโรคตับแข็งที่มีภาวะความดันในระบบพอร์ทัลสูง (Portal Hypertension) มักเกิดการขยายตัวโป่งพองของหลอดเลือดดำที่รอยต่อพอร์ทัลกับระบบดำหลัก (Portosystemic anastomoses) บริเวณหลอดอาหารส่วนล่างจนเสี่ยงต่อการแตกเสียชีวิต เรียกว่าภาวะใด?",
    "options": {
      "A": "Esophageal varices (หลอดเลือดขอดในหลอดอาหาร เกิดจากการเชื่อมกันของ Left gastric vein กับ Azygos vein)",
      "B": "Caput medusae ที่ขาหนีบ",
      "C": "Hemorrhoids ในกระเพาะอาหาร",
      "D": "Aortic aneurysm"
    },
    "correctOption": "A",
    "explanation": "บริเวณรอยต่อ Gastroesophageal junction เป็นจุด Portosystemic anastomosis ระหว่าง Left gastric vein (ระบบ Portal) กับ Esophageal tributaries ของ Azygos vein (ระบบ Systemic) เมื่อเกิด Portal hypertension เลือดจะไหลย้อนกลับผ่านจุดเชื่อมนี้ ทำให้หลอดเลือดดำใต้เยื่อบุหลอดอาหารโป่งพองเป็น Esophageal varices ซึ่งหากแตกจะทำให้เกิดอาเจียนเป็นเลือดสดปริมาณมหาศาล (Massive hematemesis)",
    "system": "Digestive System",
    "topic": "Pharynx & Esophagus",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 31,
    "tags": [
      "esophageal-varices",
      "portal-hypertension",
      "portosystemic-anastomosis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-082",
    "questionText": "บริเวณรอยต่อ Portosystemic Anastomoses รอบสะดือ (Umbilicus) เมื่อมีความดันในระบบพอร์ทัลสูง จะเห็นหลอดเลือดดำใต้ผิวหนังรอบสะดือโป่งพองคดเคี้ยวแผ่เป็นรัศมีคล้ายหัวงูเมดูซ่า เรียกว่า Caput Medusae เกิดจากการเชื่อมกันของหลอดเลือดคู่ใด?",
    "options": {
      "A": "Hepatic vein กับ Renal vein",
      "B": "Paraumbilical veins (ระบบ Portal) กับ Superficial Epigastric veins (ระบบ Systemic)",
      "C": "Splenic vein กับ Iliac vein",
      "D": "Left gastric vein กับ IVC"
    },
    "correctOption": "B",
    "explanation": "Caput Medusae เกิดจากการขยายตัวของ Paraumbilical veins (ทอดตาม Ligamentum teres hepatis ในระบบ Portal) ที่มาเชื่อมต่อกับ Superficial epigastric veins และ Superior/Inferior epigastric veins (ระบบ Systemic) บริเวณผนังหน้าท้องรอบสะดือ",
    "system": "Digestive System",
    "topic": "Peritoneum & Related Structures",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 64,
    "tags": [
      "caput-medusae",
      "paraumbilical-veins",
      "portal-hypertension"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-083",
    "questionText": "โครงสร้างใดต่อไปนี้ทำหน้าที่ดูดซึมน้ำและสารอาหารส่วนใหญ่ (ประมาณ 85-90% ของปริมาณทั้งหมด) ในระบบทางเดินอาหาร?",
    "options": {
      "A": "ลำไส้ใหญ่ (Large Intestine)",
      "B": "กระเพาะอาหาร (Stomach)",
      "C": "ลำไส้เล็ก (Small Intestine โดยเฉพาะ Jejunum)",
      "D": "หลอดอาหาร (Esophagus)"
    },
    "correctOption": "C",
    "explanation": "ลำไส้เล็ก (Small intestine) เป็นอวัยวะที่มีการย่อยทางเคมีและการดูดซึมสารอาหารมากที่สุดถึง 90% ของสารอาหารทั้งหมด (รวมถึงคาร์โบไฮเดรต โปรตีน ไขมัน วิตามิน แร่ธาตุ และน้ำส่วนใหญ่) เนื่องจากมีโครงสร้าง Plicae circulares, Villi, และ Microvilli ที่ให้พื้นที่ผิวสัมผัสมหาศาล",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Easy",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 44,
    "tags": [
      "nutrient-absorption",
      "small-intestine-primary-site"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-084",
    "questionText": "ในสภาวะที่ไม่มีอาหาร (Fasting state) ระบบทางเดินอาหารจะเกิดการหดตัวเป็นคลื่นกวาดล้างกากอาหารและเศษแบคทีเรียที่คั่งค้างจากกระเพาะอาหารลงสู่ลำไส้เล็กทุกๆ 90-120 นาที คลื่นการบีบตัวนี้เรียกว่าอะไรและควบคุมโดยฮอร์โมนใด?",
    "options": {
      "A": "Haustral churning ควบคุมโดยฮอร์โมน Glucagon",
      "B": "Peristalsis ควบคุมโดยฮอร์โมน Insulin",
      "C": "Segmentation ควบคุมโดยฮอร์โมน Gastrin",
      "D": "Migrating Motor Complex (MMC) ควบคุมโดยฮอร์โมน Motilin"
    },
    "correctOption": "D",
    "explanation": "Migrating Motor Complex (MMC) เป็นรูปแบบการบีบตัวของกล้ามเนื้อทางเดินอาหารแบบคลื่นลูกคลื่นเป็นระยะในช่วงที่ท้องว่าง (Interdigestive state) เริ่มจากกระเพาะอาหารและเคลื่อนที่ไปตามลำไส้เล็ก ทำหน้าที่เสมือน \"Housekeeper\" กวาดล้างเศษอาหารและแบคทีเรียลงสู่ลำไส้ใหญ่ โดยถูกกระตุ้นโดยฮอร์โมน Motilin จาก M cells ใน Duodenum/Jejunum",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 44,
    "tags": [
      "migrating-motor-complex",
      "mmc",
      "motilin",
      "housekeeper-contractions"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-085",
    "questionText": "ฟันน้ำนม (Deciduous / Primary teeth) ของเด็กมีจำนวนทั้งหมดกี่ซี่ และฟันชนิดใดที่ไม่พบเลยในชุดฟันน้ำนม?",
    "options": {
      "A": "มีทั้งหมด 20 ซี่ และ \"ไม่มีฟันกรามน้อย (Premolars)\" เลยในชุดฟันน้ำนม",
      "B": "มีทั้งหมด 32 ซี่ และไม่มีฟันเขี้ยว",
      "C": "มีทั้งหมด 24 ซี่ และไม่มีฟันตัด",
      "D": "มีทั้งหมด 16 ซี่ และไม่มีฟันกรามแท้"
    },
    "correctOption": "A",
    "explanation": "ฟันน้ำนมมีทั้งหมด 20 ซี่ (เสี้ยวละ 5 ซี่: สูตร 2-1-0-2 ได้แก่ Incisors 2, Canine 1, Molars 2) โดยในชุดฟันน้ำนมจะ \"ไม่มีฟันกรามน้อย (Premolars)\" เมื่อฟันแท้งอกขึ้นมา ฟันกรามน้อยแท้ (Premolars) จะขึ้นมาแทนที่ตำแหน่งของฟันกรามน้ำนม (Deciduous molars)",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 25,
    "tags": [
      "deciduous-teeth",
      "no-premolars",
      "dental-anatomy"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-086",
    "questionText": "กระดูกขากรรไกรล่าง (Mandible) เคลื่อนไหวในกระบวนการบดเคี้ยวอาหารด้วยการทำงานของกลุ่มกล้ามเนื้อเคี้ยว (Muscles of mastication) กล้ามเนื้อกลุ่มนี้เลี้ยงด้วยเส้นประสาทสมองคู่ใด?",
    "options": {
      "A": "Facial nerve (CN VII)",
      "B": "Mandibular nerve (CN V3 ซึ่งเป็นแขนงที่ 3 ของ Trigeminal nerve)",
      "C": "Hypoglossal nerve (CN XII)",
      "D": "Glossopharyngeal nerve (CN IX)"
    },
    "correctOption": "B",
    "explanation": "Muscles of mastication ทั้ง 4 มัด (Masseter, Temporalis, Medial pterygoid, Lateral pterygoid) มีต้นกำเนิดจาก 1st Pharyngeal arch จึงเลี้ยงด้วย Mandibular nerve (CN V3 แขนงของ Trigeminal nerve) ส่วน Facial nerve (CN VII) เลี้ยงกล้ามเนื้อแสดงสีหน้า (Muscles of facial expression)",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 20,
    "tags": [
      "muscles-of-mastication",
      "cn-v3",
      "mandibular-nerve"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-087",
    "questionText": "ร่องรูปตัววีบนผิวด้านบนของลิ้นที่แบ่งแยกระหว่าง 2/3 ส่วนหน้าของลิ้น (Oral part) กับ 1/3 ส่วนหลังของลิ้น (Pharyngeal part) คือข้อใด และที่ปลายยอดของตัววีมีหลุมบุ๋มชื่ออะไร?",
    "options": {
      "A": "Terminal line โดยมี Fossa ovalis",
      "B": "Median sulcus โดยที่ปลายยอดมี Lingual tonsil",
      "C": "Sulcus terminalis โดยที่ปลายยอดมีหลุม Foramen Cecum",
      "D": "Glossoepiglottic fold โดยมี Vallecula"
    },
    "correctOption": "C",
    "explanation": "Sulcus terminalis เป็นร่องรูปตัว V คว่ำบนผิวด้านบนของลิ้น แบ่งลิ้นออกเป็น Anterior 2/3 (Body) และ Posterior 1/3 (Root) โดยที่มุมยอดกึ่งกลางของร่องตัว V มีหลุมบุ๋มเรียกว่า Foramen Cecum ซึ่งเป็นจุดกำเนิดทางคัพภวิทยาของ Thyroglossal duct ในการสร้างต่อมไทรอยด์",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 21,
    "tags": [
      "sulcus-terminalis",
      "foramen-cecum",
      "tongue-development"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-088",
    "questionText": "สารคัดหลั่งน้ำลาย (Saliva) ประกอบด้วยสารใดที่มีคุณสมบัติทำลายผนังเซลล์ของแบคทีเรีย และแอนติบอดีชนิดใดที่ทำหน้าที่เป็นด่านหน้าทางภูมิคุ้มกันในช่องปาก?",
    "options": {
      "A": "กรดเกลือและฮิสตามีน",
      "B": "เอนไซม์ Pepsin และแอนติบอดีชนิด IgG",
      "C": "เอนไซม์ Trypsin และแอนติบอดีชนิด IgE",
      "D": "เอนไซม์ Lysozyme และแอนติบอดีชนิด Secretory IgA"
    },
    "correctOption": "D",
    "explanation": "น้ำลายมีบทบาทสำคัญในการป้องกันการติดเชื้อในช่องปาก: 1. Lysozyme ย่อยผนังเซลล์แบคทีเรีย 2. Secretory IgA (sIgA) ดักจับเชื้อโรคไม่ให้เกาะติดเยื่อบุผิว 3. Lactoferrin แย่งจับธาตุเหล็กไม่ให้แบคทีเรียเจริญเติบโต 4. Bicarbonate ช่วยปรับสะเทินกรดจากแบคทีเรียป้องกันฟันผุ",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 23,
    "tags": [
      "saliva-components",
      "lysozyme",
      "secretory-iga"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-089",
    "questionText": "เมื่อเกิดการกระตุ้นระบบประสาทพาราซิมพาเทติก (Parasympathetic stimulation) ต่อต่อมน้ำลายผ่านทางเส้นประสาทสมองคู่ที่ 7 และ 9 จะส่งผลต่อการหลั่งน้ำลายอย่างไร?",
    "options": {
      "A": "กระตุ้นให้หลั่งน้ำลายชนิดใสปริมาณมาก อุดมด้วยน้ำและเอนไซม์ (Profuse watery saliva)",
      "B": "ยับยั้งการหลั่งน้ำลายจนเกิดภาวะปากแห้งสนิท",
      "C": "หลั่งน้ำลายเหนียวข้นที่มีมิวซินสูงเพียงเล็กน้อย",
      "D": "ไม่มีผลต่อการหลั่งน้ำลาย"
    },
    "correctOption": "A",
    "explanation": "ระบบ Parasympathetic (ผ่าน CN VII เลี้ยง Submandibular/Sublingual และ CN IX เลี้ยง Parotid) กระตุ้นให้เกิด Vasodilation และสั่งให้ Acinar cells หลั่งน้ำลายใสปริมาณมาก (Watery enzyme-rich saliva) เพื่อช่วยในการเคี้ยวและกลืน ส่วน Sympathetic จะทำให้หลอดเลือดหดตัวและหลั่งน้ำลายเหนียวข้นปริมาณน้อย",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 24,
    "tags": [
      "parasympathetic-salivation",
      "cn-vii",
      "cn-ix",
      "watery-saliva"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-090",
    "questionText": "ร่องแคบๆ ระหว่างริมฝีปากและแก้มกับแนวฟันและเหงือกด้านใน เรียกว่าบริเวณใดของช่องปาก?",
    "options": {
      "A": "Oral cavity proper",
      "B": "Oral vestibule",
      "C": "Fauces",
      "D": "Gingival sulcus"
    },
    "correctOption": "B",
    "explanation": "ช่องปากแบ่งออกเป็น 2 ส่วน: 1. Oral vestibule คือช่องแคบๆ ระหว่างริมฝีปาก/แก้มด้านนอก กับฟันและเหงือกด้านใน (เป็นที่เปิดของท่อน้ำลาย Parotid duct) 2. Oral cavity proper คือช่องปากแท้จริงที่อยู่ด้านในของแนวฟัน เข้าไปจนถึง Oropharyngeal isthmus",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Easy",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 20,
    "tags": [
      "oral-vestibule",
      "oral-cavity-proper"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-091",
    "questionText": "ท่อตับอ่อนเสริม (Accessory pancreatic duct หรือ Duct of Santorini) หากมีอยู่ตามความผันแปรทางกายวิภาค จะเปิดเข้าสู่ Duodenum ที่ตำแหน่งใด?",
    "options": {
      "A": "Pyloric sphincter",
      "B": "Major duodenal papilla ร่วมกับท่อน้ำดีใหญ่",
      "C": "Minor duodenal papilla ซึ่งอยู่เหนือกว่า Major duodenal papilla ประมาณ 2 ซม.",
      "D": "Duodenojejunal flexure"
    },
    "correctOption": "C",
    "explanation": "Accessory pancreatic duct (Duct of Santorini) เป็นท่อระบายน้ำย่อยจากส่วนบนของ Head of pancreas จะทอดตัวไปเปิดเข้าสู่ผนัง Duodenum ที่ Minor duodenal papilla ซึ่งตั้งอยู่เหนือกว่า Major duodenal papilla ประมาณ 2 เซนติเมตร",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 71,
    "tags": [
      "duct-of-santorini",
      "minor-duodenal-papilla",
      "accessory-pancreatic-duct"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-092",
    "questionText": "สารสำคัญชนิดใดในน้ำดีที่ทำหน้าที่กำจัดของเสียจากกระบวนการแตกสลายของฮีโมโกลบินในเม็ดเลือดแดงที่หมดอายุขัย และหากเกิดการคั่งในเลือดจะทำให้ผิวหนังและตาขาวเปลี่ยนเป็นสีเหลือง (Jaundice)?",
    "options": {
      "A": "Lecithin",
      "B": "Bile salts",
      "C": "Cholesterol",
      "D": "Bilirubin (บิลิรูบิน)"
    },
    "correctOption": "D",
    "explanation": "Bilirubin เป็นรงควัตถุสีเหลืองส้ม (Bile pigment) ซึ่งเป็นของเสียขั้นสุดท้ายจากการสลาย Heme ของฮีโมโกลบินในเม็ดเลือดแดงที่ม้ามและตับ ตับจะนำ Unconjugated bilirubin มาทำ Conjugation กับ Glucuronic acid กลายเป็น Conjugated bilirubin แล้วขับออกทางน้ำดี หากท่อน้ำดีอุดตันหรือตับทำงานบกพร่องจะเกิดภาวะดีซ่าน (Jaundice/Icterus)",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 66,
    "tags": [
      "bilirubin",
      "bile-pigments",
      "jaundice",
      "heme-catabolism"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-093",
    "questionText": "ในกระบวนการ Defecation reflex เมื่อก้อนอุจจาระเคลื่อนตัวเข้าสู่ Rectum จะกระตุ้น Stretch receptors ส่งสัญญาณประสาทพาราซิมพาเทติกผ่านทางไขสันหลังระดับใดมาสั่งการให้เกิดการถ่ายอุจจาระ?",
    "options": {
      "A": "ระดับไขสันหลังส่วนกระเบนเหน็บ S2, S3, S4 (Pelvic splanchnic nerves)",
      "B": "ระดับไขสันหลังส่วนอก T1 - T5",
      "C": "ระดับไขสันหลังส่วนเอว L1 - L2",
      "D": "ระดับเส้นประสาทสมองคู่ที่ 10 (Vagus nerve)"
    },
    "correctOption": "A",
    "explanation": "Defecation reflex ควบคุมโดย Parasympathetic center ในไขสันหลังระดับ S2-S4 เมื่อ Rectum ขยายตัว สัญญาณจะวิ่งผ่าน Sensory fibers เข้าสู่ไขสันหลัง S2-S4 และส่งสัญญาณ Parasympathetic กลับมาตาม Pelvic splanchnic nerves สั่งให้ผนัง Sigmoid colon และ Rectum บีบตัวรุนแรง พร้อมกับสั่งคลาย Internal anal sphincter",
    "system": "Digestive System",
    "topic": "Rectum & Anal Canal",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 60,
    "tags": [
      "defecation-reflex",
      "s2-s4",
      "pelvic-splanchnic-nerves"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-094",
    "questionText": "ชั้นเยื่อบุ Mucosa ของกระเพาะอาหารมีเซลล์ Surface mucous cells ทำหน้าที่หลั่งสารชนิดใดที่มีความหนาแน่นสูงเพื่อปกป้องเซลล์จากการสัมผัสกับอาหารและกรด?",
    "options": {
      "A": "กรดไฮโดรคลอริกเข้มข้น",
      "B": "Insoluble alkaline mucus (เมือกด่างที่ไม่ละลายน้ำ อุดมด้วย Bicarbonate และ Mucin)",
      "C": "เอนไซม์เปปซินบริสุทธิ์",
      "D": "น้ำเกลือไอโซโทนิก"
    },
    "correctOption": "B",
    "explanation": "Surface mucous cells บุคลุมผิวหน้าทั้งหมดของกระเพาะอาหารและ Gastric pits หลั่งเมือกชนิดพิเศษที่ไม่ละลายน้ำ (Insoluble viscid alkaline mucus) หนาประมาณ 1-1.5 มม. ซึ่งมีประจุลบดักจับ HCO3- ไว้ที่ผิว ช่วยรักษาค่า pH ติดผิวเซลล์ให้อยู่ที่ประมาณ 7 แม้ในโพรงกระเพาะจะมี pH 1.5-2.0 ก็ตาม",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 33,
    "tags": [
      "surface-mucous-cells",
      "alkaline-mucus",
      "gastric-pit"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-095",
    "questionText": "หลอดเลือดแดงคู่ใดที่แตกแขนงมาจาก Celiac Trunk และ Superior Mesenteric Artery แล้วมาเชื่อมประสานกันรอบส่วนหัวของตับอ่อนและ Duodenum?",
    "options": {
      "A": "Splenic และ Renal arteries",
      "B": "Right และ Left Gastric arteries",
      "C": "Superior และ Inferior Pancreaticoduodenal arteries",
      "D": "Cystic และ Hepatic arteries"
    },
    "correctOption": "C",
    "explanation": "Superior Pancreaticoduodenal artery (แขนงจาก Gastroduodenal a. ในระบบ Celiac trunk) วิ่งมาเชื่อมประสาน (Anastomosis) กับ Inferior Pancreaticoduodenal artery (แขนงจาก SMA) เกิดเป็นวงหลอดเลือดล้อมรอบ C-loop ของ Duodenum และ Head of Pancreas ซึ่งเป็นจุดเชื่อมต่อการไหลเวียนระหว่าง Foregut และ Midgut",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 70,
    "tags": [
      "pancreaticoduodenal-arteries",
      "foregut-midgut-anastomosis"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-096",
    "questionText": "โครงสร้างทางเดินอาหารส่วนใดที่มีบทบาทสำคัญที่สุดในการดูดซึมวิตามินที่ละลายในไขมัน (Vitamins A, D, E, K)?",
    "options": {
      "A": "หลอดอาหาร",
      "B": "กระเพาะอาหาร",
      "C": "ลำไส้ใหญ่ส่วน Sigmoid",
      "D": "ลำไส้เล็กส่วนต้นและส่วนกลาง (Duodenum และ Jejunum) ร่วมกับการทำงานของน้ำดีและ Pancreatic lipase"
    },
    "correctOption": "D",
    "explanation": "วิตามินที่ละลายในไขมัน (Fat-soluble vitamins: A, D, E, K) ต้องอาศัยเกลือน้ำดีในการฟอร์มตัวเป็น Micelles และถูกดูดซึมพร้อมกับกรดไขมันในลำไส้เล็ก (โดยเฉพาะ Duodenum และ Jejunum) หากผู้ป่วยมีโรคท่อน้ำดีอุดตันหรือโรคตับอ่อน จะเกิดภาวะขาดวิตามินกลุ่มนี้ตามมา",
    "system": "Digestive System",
    "topic": "Small Intestine Anatomy",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 47,
    "tags": [
      "fat-soluble-vitamins",
      "micelles",
      "jejunum-absorption"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-097",
    "questionText": "ในทางเดินอาหาร เซลล์ Enterochromaffin-like cells (ECL cells) ในชั้นต่อมกระเพาะอาหาร ทำหน้าที่หลั่งสารเคมีสื่อกลางใดเพื่อไปกระตุ้น Parietal cells ให้หลั่งกรด HCl ผ่านทาง H2 receptors?",
    "options": {
      "A": "Histamine (ฮิสตามีน)",
      "B": "Serotonin",
      "C": "Somatostatin",
      "D": "Acetylcholine"
    },
    "correctOption": "A",
    "explanation": "ECL cells ตั้งอยู่ใกล้ชิดกับ Parietal cells ในกระเพาะอาหาร เมื่อถูกกระตุ้นโดยฮอร์โมน Gastrin หรือเส้นประสาท Vagus จะหลั่ง Histamine ออกมาจับกับ Histamine H2 receptors บน Parietal cells กระตุ้นการหลั่งกรด HCl อย่างรวดเร็ว (ยาในกลุ่ม H2-blockers เช่น Cimetidine/Ranitidine ออกฤทธิ์ยับยั้งตัวรับนี้)",
    "system": "Digestive System",
    "topic": "Stomach Anatomy & Secretions",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 35,
    "tags": [
      "ecl-cells",
      "histamine",
      "h2-receptor",
      "parietal-activation"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-098",
    "questionText": "เอนไซม์ย่อยไขมันในช่องปาก Lingual Lipase ถูกสร้างและหลั่งออกมาจากต่อมใด และมีคุณสมบัติพิเศษอย่างไรในการทำงาน?",
    "options": {
      "A": "หลั่งจากต่อม Parotid และทำงานได้เฉพาะในสภาวะด่าง",
      "B": "หลั่งจากต่อม Serous glands of Von Ebner บริเวณโคนลิ้น และสามารถทำงานย่อยไขมันได้ดีต่อเนื่องแม้ในสภาวะที่เป็นกรดของกระเพาะอาหาร",
      "C": "หลั่งจากต่อมน้ำลาย Sublingual และย่อยเฉพาะโปรตีน",
      "D": "หลั่งจากกระพุ้งแก้ม"
    },
    "correctOption": "B",
    "explanation": "Lingual lipase สร้างจาก Von Ebner's serous glands ที่โคนลิ้น แม้จะหลั่งในช่องปากแต่มีคุณสมบัติทนกรด (Optimum pH 3.5-6.0) จึงไม่ถูกทำลายโดยกรดในกระเพาะอาหาร และทำหน้าที่ย่อย Triglycerides ร่วมกับ Gastric lipase ต่อเนื่องในกระเพาะอาหาร โดยเฉพาะในทารกแรกเกิดที่ดื่มนมแม่",
    "system": "Digestive System",
    "topic": "Mouth, Tongue & Salivary Glands",
    "difficulty": "Hard",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 23,
    "tags": [
      "lingual-lipase",
      "von-ebners-glands",
      "acid-stable-lipase"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-099",
    "questionText": "โครงสร้างใดทำหน้าที่ควบคุมการเคลื่อนไหวและการหลั่งของระบบทางเดินอาหารโดยอัตโนมัติ โดยมีจำนวนเซลล์ประสาทมากกว่า 100 ล้านเซลล์ จนได้รับฉายาว่า \"สมองที่สองของร่างกาย\" (The second brain)?",
    "options": {
      "A": "Sympathetic chain ganglia",
      "B": "Central Nervous System",
      "C": "Enteric Nervous System (ENS ประกอบด้วย Myenteric และ Submucosal plexuses)",
      "D": "Somatic motor system"
    },
    "correctOption": "C",
    "explanation": "Enteric Nervous System (ENS) เป็นเครือข่ายร่างแหเซลล์ประสาทอิสระที่ฝังตัวอยู่ในผนังทางเดินอาหารตั้งแต่หลอดอาหารจนถึงทวารหนัก ประกอบด้วย Myenteric (Auerbach's) plexus และ Submucosal (Meissner's) plexus สามารถควบคุม Reflexes ของการเคลื่อนไหว การหลั่ง และการไหลเวียนเลือดได้ด้วยตนเองแม้ถูกตัดขาดจากสมอง",
    "system": "Digestive System",
    "topic": "Histological Structure of the Digestive Tract",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 13,
    "tags": [
      "enteric-nervous-system",
      "ens",
      "second-brain",
      "myenteric-submucosal"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  },
  {
    "id": "DIGEST-100",
    "questionText": "ข้อใดสรุปหน้าที่สำคัญของตับ (Liver) ต่อกระบวนการเมแทบอลิซึมและการรักษาสมดุลของร่างกายได้อย่างถูกต้องและครอบคลุมที่สุด?",
    "options": {
      "A": "1. กรองน้ำเหลือง 2. ผลิตฮอร์โมนไทรอยด์ 3. ย่อยแป้งในช่องปาก",
      "B": "1. ผลิตกรดไฮโดรคลอริก 2. สร้างเม็ดเลือดขาวชนิดนิวโทรฟิล 3. ควบคุมการบีบตัวของหัวใจ",
      "C": "1. ดูดซึมก๊าซคาร์บอนไดออกไซด์ 2. ขับปัสสาวะ 3. สร้างเอนไซม์เปปซิน",
      "D": "1. สร้างน้ำดีช่วยย่อยไขมัน 2. ควบคุมระดับน้ำตาลโดยสะสม Glycogen และสังเคราะห์กลูโคส (Gluconeogenesis) 3. สังเคราะห์โปรตีนพลาสมา (Albumin, Clotting factors) 4. เปลี่ยนแอมโมเนียเป็นยูเรีย และทำลายสารพิษ/ยา 5. สะสมวิตามินและแร่ธาตุ (A, D, B12, Iron)"
    },
    "correctOption": "D",
    "explanation": "ตับเป็นอวัยวะที่มีกิจกรรมทางชีวเคมีสูงที่สุดในร่างกาย ทำหน้าที่กว่า 500 อย่าง ได้แก่: ผลิตน้ำดี (Bile production), เมแทบอลิซึมของคาร์โบไฮเดรต/ไขมัน/โปรตีน, การสร้าง Albumin และ Clotting factors I, II, VII, IX, X, Urea cycle (เปลี่ยนแอมโมเนียมีพิษเป็นยูเรีย), Detoxification สลายยา/สารพิษ, และเป็นแหล่งสะสม Glycogen, Iron, และวิตามิน A, D, B12",
    "system": "Digestive System",
    "topic": "Liver, Gallbladder & Pancreas",
    "difficulty": "Medium",
    "sourceFile": "Digestive system_Nartnutda_261024_214326.pdf",
    "sourcePage": 60,
    "tags": [
      "liver-functions-summary",
      "metabolism",
      "albumin-synthesis",
      "urea-cycle"
    ],
    "createdAt": "2026-10-24",
    "updatedAt": "2026-10-24",
    "verificationStatus": "verified"
  }
];
