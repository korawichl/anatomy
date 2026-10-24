const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const files = [
  { name: 'Cardiovascular & Lymphatic', filename: 'BNS102-Anatomy of Cardiovascular and Lymphatic Sys_261024_214357.pdf' },
  { name: 'Digestive System', filename: 'Digestive system_Nartnutda_261024_214326.pdf' },
  { name: 'Urinary System', filename: 'Urinary System-Nartnutda_Nurse RSU_May 2026_261024_214340.pdf' }
];

async function inspect() {
  for (const item of files) {
    const filePath = path.join(__dirname, '..', item.filename);
    console.log(`\n========================================`);
    console.log(`Reading: ${item.name} (${item.filename})`);
    const dataBuffer = fs.readFileSync(filePath);
    
    // Custom pager to capture page-by-page text
    const pages = [];
    let pageNum = 0;
    
    const options = {
      pagerender: function(pageData) {
        return pageData.getTextContent().then(function(textContent) {
          pageNum++;
          let lastY, text = '';
          for (let item of textContent.items) {
            if (lastY == item.transform[5] || !lastY){
              text += item.str;
            } else {
              text += '\n' + item.str;
            }
            lastY = item.transform[5];
          }
          pages.push({ page: pageNum, text: text.trim() });
          return text;
        });
      }
    };
    
    const parsed = await pdf(dataBuffer, options);
    console.log(`Total Pages: ${parsed.numpages}`);
    
    // Save extracted text to a JSON file for analysis
    const outFileName = path.join(__dirname, `extracted_${item.name.replace(/[^a-zA-Z]/g, '_')}.json`);
    fs.writeFileSync(outFileName, JSON.stringify({ name: item.name, filename: item.filename, numpages: parsed.numpages, pages }, null, 2), 'utf8');
    console.log(`Saved extraction to: ${outFileName}`);
    
    // Show sample outline
    console.log(`First 5 slides summary:`);
    for (let i = 0; i < Math.min(5, pages.length); i++) {
      const firstLine = pages[i].text.split('\n')[0] || '';
      console.log(`  Page ${pages[i].page}: ${firstLine.substring(0, 80)}`);
    }
  }
}

inspect().catch(err => console.error(err));
