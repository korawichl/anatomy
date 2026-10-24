const fs = require('fs');
const path = require('path');

const files = ['urinary_raw_pages.json', 'digestive_raw_pages.json', 'cardio_lymph_raw_pages.json'];

files.forEach(f => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
  console.log(`\n=================== ${data.name} (Total: ${data.totalPages} pages) ===================`);
  data.pages.forEach(p => {
    const lines = p.text.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 0) {
      console.log(`[P.${p.page}] ${lines.slice(0, 3).join(' | ')}`);
    }
  });
});
