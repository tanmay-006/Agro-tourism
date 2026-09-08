const fs = require('fs');
const path = require('path');

const target = /text-[#fcf5e5]\b/g;
const replacement = 'text-[#fcf5e5]';

function processDirectory(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        processDirectory(filePath);
      }
    } else {
      const ext = path.extname(filePath);
      if (['.tsx', '.ts', '.css', '.html', '.js'].includes(ext)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (target.test(content)) {
          content = content.replace(target, replacement);
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated: ${filePath}`);
        }
      }
    }
  });
}

console.log('Starting text color replacements...');
processDirectory('.');
console.log('Completed text color replacements.');
