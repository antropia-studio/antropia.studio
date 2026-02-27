// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkRehype: { footnoteLabelTagName: 'h1' },
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
  image: {
    service: passthroughImageService(),
  },
  site: 'https://antropia.studio/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), mdx()],
});
