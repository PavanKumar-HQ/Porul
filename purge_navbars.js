const fs = require('fs');
const path = require('path');

const targetDirs = [
  'src/app'
];

function processFile(filePath) {
  if (filePath.endsWith('layout.tsx')) return; // Skip RootLayout
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove import Navbar...
  content = content.replace(/import Navbar from ["']@\/components\/layout\/Navbar["'];?\n?/g, '');
  
  // Remove <Navbar />
  content = content.replace(/<Navbar \/>\n?\s*/g, '');
  
  // Also adjust padding if it's there
  content = content.replace(/className="pt-32/g, 'className="');
  
  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

targetDirs.forEach(dir => {
  const fullDir = path.resolve(__dirname, dir);
  if (fs.existsSync(fullDir)) {
    walkDir(fullDir);
  }
});

console.log('Artifact: Navbars purged.');
