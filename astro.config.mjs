// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
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
