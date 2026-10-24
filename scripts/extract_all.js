const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const files = [
  { id: 'urinary', name: 'Urinary System', filename: 'Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf' },
  { id: 'digestive', name: 'Digestive System', filename: 'Digestive system_Nartnutda_261024_214326.pdf' },
  { id: 'cardio_lymph', name: 'Cardiovascular and Lymphatic Systems', filename: 'BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf' }
];

async function run() {
  for (const item of files) {
    const filePath = path.join(__dirname, '..', item.filename);
    console.log(`\n========================================`);
    console.log(`Processing: ${item.name}`);
    const buffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    console.log(`Total Pages: ${result.total}, Text length: ${result.text.length}`);
    
    // Split by page marker "-- X of Y --"
    const rawPages = result.text.split(/--\s*\d+\s+of\s+\d+\s*--/);
    console.log(`Extracted page slices: ${rawPages.length}`);
    
    const pages = rawPages.map((txt, idx) => ({
      page: idx + 1,
      text: txt.trim()
    })).filter(p => p.text.length > 0);
    
    const outFile = path.join(__dirname, `${item.id}_raw_pages.json`);
    fs.writeFileSync(outFile, JSON.stringify({ id: item.id, name: item.name, totalPages: result.total, pages }, null, 2), 'utf8');
    console.log(`Saved to ${outFile} (${pages.length} non-empty pages)`);
    
    // Print first 3 pages
    for (let i = 0; i < Math.min(3, pages.length); i++) {
      console.log(`--- Page ${pages[i].page} preview ---`);
      console.log(pages[i].text.slice(0, 150));
    }
  }
}

run().catch(err => {
  console.error("Error:", err);
});
