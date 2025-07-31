import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function walk(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((dirent) => {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      walk(fullPath, callback);
    } else if (dirent.isFile() && fullPath.endsWith('.md')) {
      callback(fullPath);
    }
  });
}

function hasFrontmatter(content) {
  return content.startsWith('---');
}

function extractTitleAndRemoveHeading(content) {
  const match = content.match(/^# (.+)$/m);
  if (!match) return { title: null, newContent: content };
  const title = match[1].trim();
  // Remove the first H1 heading line
  const newContent = content.replace(/^# .+\n?/, '');
  return { title, newContent };
}

function addFrontmatterToFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (hasFrontmatter(content)) {
    console.info(`Skipping ${filePath}, already has frontmatter.`);
    return;
  }

  const { title, newContent } = extractTitleAndRemoveHeading(content);
  if (!title) {
    console.info(`Skipping ${filePath}, no H1 found.`);
    return;
  }

  const frontmatter = `---\ntitle: "${title}"\n---\n\n`;
  fs.writeFileSync(filePath, frontmatter + newContent, 'utf8');
  console.info(`Added frontmatter to: ${filePath}`);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(__dirname, 'src', 'content', 'docs');
walk(inputDir, addFrontmatterToFile);
