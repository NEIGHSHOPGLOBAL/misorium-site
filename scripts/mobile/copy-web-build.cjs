/**
 * Copies Expo web export (dist/) to public/ for Express to serve.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', '..');
const viewsDir = path.join(rootDir, 'resources', 'views');
const distDir = path.join(viewsDir, 'dist');
const targetDir = path.join(rootDir, 'public');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Build output not found: ${src}`);
    console.error('Run "expo export --platform web" first.');
    process.exit(1);
  }

  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

fs.mkdirSync(targetDir, { recursive: true });

for (const entry of fs.readdirSync(distDir)) {
  const targetPath = path.join(targetDir, entry);
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

copyRecursive(distDir, targetDir);
console.log(`✓ Web build copied to ${targetDir}`);
