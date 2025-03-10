import fs from 'fs';
import path from 'path';

function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all files in source directory
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

// Source and destination paths
const sourceDir = path.join(__dirname, '../src/images');
const destDir = path.join(__dirname, '../public/images');

// Execute copy
try {
  copyDirectory(sourceDir, destDir);
  console.log('Images copied successfully from src/images to public/images');
} catch (error) {
  console.error('Error copying images:', error);
  process.exit(1);
}
