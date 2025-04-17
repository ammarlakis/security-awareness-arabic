import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [],
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
