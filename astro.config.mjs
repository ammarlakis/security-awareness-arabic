import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

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
  },
});
