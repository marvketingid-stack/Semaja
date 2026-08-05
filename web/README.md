# Semaja — Website (Landing + Jurnal)

Landing page konversi untuk **Semaja** (Modern Indonesian, by Ismaya Group) — dibangun sesuai PRD v2.0.
Stack: **Astro + Tailwind CSS v4** (statis, zero-JS, cepat, SEO-friendly) + **Decap CMS** untuk kelola artikel.

## Fitur

- ✅ **Ringan & cepat** — output statis, **tidak mengirim JavaScript framework** (hanya sedikit script inline untuk tracking & interaksi), gambar auto-WebP + `srcset` responsif, font di-preload.
- ✅ **SEO** — meta + Open Graph, `hreflang` ID/EN, `sitemap-index.xml`, `robots.txt`, structured data `Restaurant` (semua halaman) & `Article` (blog).
- ✅ **Bilingual ID/EN** — default ID (`/`), English (`/en`), tanpa reload kasar, dengan language switcher.
- ✅ **Blog/Jurnal + upload artikel** — panel CMS di `/admin` (Decap CMS). Artikel = file Markdown, gambar dioptimasi Astro.
- ✅ **Tracking stack (PRD §6)** — GTM, GA4, Meta Pixel, Microsoft Clarity, capture `fbclid`/`fbc`/`fbp` + UTM, event CTA per-section, scroll depth, `ViewContent`, `menu_gallery_view`, `directions_click`, `language_switch`, `event_id` untuk dedup Pixel↔CAPI, dan webhook lead ke **GoHighLevel**.
- ✅ **Mobile-first** — breakpoint 320px→≥1440px, touch target ≥48px, `safe-area-inset`, sticky reserve bar di mobile, tanpa horizontal scroll.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # hasil di dist/
npm run preview    # preview hasil build
```

## Konfigurasi (WAJIB sebelum go-live)

1. Salin `.env.example` → `.env`, lalu isi:
   - `PUBLIC_WA_NUMBER` — **nomor WhatsApp Business asli** (placeholder `628000000000` HARUS diganti).
   - `SITE_URL` — domain final (mis. `https://semaja.id`).
   - ID tracking: `PUBLIC_GTM_ID`, `PUBLIC_GA4_ID`, `PUBLIC_META_PIXEL_ID`, `PUBLIC_CLARITY_ID` (kosong = script tidak dipasang).
   - `PUBLIC_GHL_LEAD_WEBHOOK` — URL webhook GoHighLevel (opsional, PRD §6.5).
2. Data brand lain (alamat, jam, sosial, harga) ada di [`src/data/site.ts`](src/data/site.ts).
3. Copy section (ID/EN) ada di [`src/i18n/ui.ts`](src/i18n/ui.ts).
4. Nama & deskripsi hidangan di [`src/data/dishes.ts`](src/data/dishes.ts) — **placeholder, mohon disesuaikan menu final**.

## Kelola / Upload Artikel

**Cara 1 — Panel CMS (untuk non-teknis):**
- Buka `/admin` di situs yang sudah di-deploy.
- Butuh backend Git: aktifkan **Netlify Identity + Git Gateway** (default), atau ganti ke backend `github` di [`public/admin/config.yml`](public/admin/config.yml).
- Test lokal: `npm run cms` (jalan paralel dengan `npm run dev`), lalu buka `http://localhost:4321/admin`.

**Cara 2 — Tambah file Markdown langsung:**
- Buat file baru di `src/content/articles/nama-artikel.md` (lihat contoh yang ada).
- Set `lang: "id"` → muncul di `/artikel`; `lang: "en"` → muncul di `/en/articles`.

## Deploy

Cocok untuk **Vercel** atau **Netlify** (deploy statis, HTTPS otomatis).
- Build command: `npm run build` · Output: `dist`
- Set environment variables (dari `.env`) di dashboard hosting.
- Untuk CMS di Netlify: aktifkan Identity + Git Gateway.

## Struktur

```
src/
  components/   # Header, Hero, Story, Dishes, Space, dst + Tracking, Seo
  data/         # site.ts (brand & tracking), dishes.ts
  i18n/         # ui.ts (kamus ID/EN + route helper)
  content/articles/  # artikel Markdown (blog)
  pages/        # / , /en , /artikel , /en/articles , 404
  assets/photos # foto (dioptimasi Astro saat build)
public/
  admin/        # Decap CMS
  fonts/        # Paradigm Pro
```
