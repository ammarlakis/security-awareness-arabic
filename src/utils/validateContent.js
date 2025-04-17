const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function validateMetaJson(filePath) {
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (!content.title || !content.description || !content.lessons) {
    throw new Error(`Invalid meta.json structure in ${filePath}`);
  }
}

function validateMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  if (!content.trim()) {
    throw new Error(`Empty markdown file: ${filePath}`);
  }
}

function validateYaml(filePath) {
  const content = yaml.load(fs.readFileSync(filePath, 'utf-8'));
  if (!content || typeof content !== 'object') {
    throw new Error(`Invalid YAML structure in ${filePath}`);
  }
}

function validateContent(directory) {
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      validateContent(filePath);
    } else if (file === 'meta.json') {
      validateMetaJson(filePath);
    } else if (file.endsWith('.md')) {
      validateMarkdown(filePath);
    } else if (file.endsWith('.yaml')) {
      validateYaml(filePath);
    }
  });
}

try {
  validateContent(path.join(__dirname, '../courses'));
  console.log('All content files are valid.');
} catch (error) {
  console.error(error.message);
  process.exit(1);
}