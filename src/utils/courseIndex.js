import fs from 'fs/promises';
import path from 'path';

export default async function courseIndex() {
  const courseDir = './src/courses';
  const folders = await fs.readdir(courseDir);
  const result = await Promise.all(folders.map(async folder => {
    const metaPath = path.join(courseDir, folder, 'meta.json');
    const meta = JSON.parse(await fs.readFile(metaPath, 'utf-8'));
    return { title: meta.title, url: `/courses/${folder}/lesson1`, image: meta.image };
  }));
  return result;
}
