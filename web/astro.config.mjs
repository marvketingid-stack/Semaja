// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain produksi (dipakai untuk sitemap, canonical, OG). Override lewat env SITE_URL
// saat sudah punya subdomain final (mis. https://book.semaja.id).
const SITE = process.env.SITE_URL || 'https://semaja-6xc.pages.dev';

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
