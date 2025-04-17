import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [react()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    server: {
      fs: {
        allow: ['.'],
      },
    },
    plugins: [
      copy({
        targets: [
          { src: 'src/courses', dest: 'dist' }
        ]
      })
    ]
  },
});
