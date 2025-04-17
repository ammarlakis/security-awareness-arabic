import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  site: 'https://ammarlakis.github.io/security-awareness-arabic/',
  base: '/security-awareness-arabic/',
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
