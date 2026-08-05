// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Ganti dengan domain produksi final (dipakai untuk sitemap, canonical, hreflang, OG).
const SITE = process.env.SITE_URL || 'https://semaja.id';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Batasi ukuran yang di-generate agar build cepat & asset ringan.
    responsiveStyles: true,
  },
});
