# Deploy — Semaja (Cloudflare Pages)

Situs statis (Astro). Folder aplikasi: **`web/`**. Output build: **`web/dist/`**.

Sebelum deploy, set domain final agar canonical / sitemap / OG benar:
```bash
# contoh — ganti dengan subdomain final kamu
export SITE_URL="https://book.semaja.id"
```

---

## Cara A — Cloudflare Pages via Git (disarankan, auto-deploy tiap push)

1. Push repo ini ke GitHub/GitLab (lihat bagian "Git" di bawah).
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Pilih repo, lalu set:
   - **Framework preset:** Astro
   - **Root directory:** `web`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Environment variables** (Settings → Variables) — isi yang dipakai:
   - `SITE_URL` = `https://<subdomain-final>`
   - `PUBLIC_WA_NUMBER` = `62811272723`
   - (opsional) `PUBLIC_HERO_VIDEO`, `PUBLIC_GTM_ID`, `PUBLIC_GA4_ID`, `PUBLIC_META_PIXEL_ID`, `PUBLIC_CLARITY_ID`, `PUBLIC_GHL_LEAD_WEBHOOK`
5. Deploy. Dapat URL `*.pages.dev`.
6. **Custom subdomain:** Pages project → **Custom domains → Set up a domain** → masukkan subdomain (mis. `book.semaja.id`). Kalau domainnya sudah di Cloudflare, DNS otomatis dibuat.

## Cara B — Deploy langsung dari mesin ini (wrangler)

```bash
cd web
npm run build

# autentikasi sekali (buka browser):
npx wrangler login
#   ATAU set token sendiri di environment kamu (jangan kirim tokennya ke chat):
#   export CLOUDFLARE_API_TOKEN=***  (scope: Cloudflare Pages: Edit)

# deploy (pakai wrangler.toml → project "semaja", output dist/)
npx wrangler pages deploy dist --project-name semaja
```
Setelah project ada, tambahkan custom subdomain lewat Dashboard (langkah 6 di atas)
atau: `npx wrangler pages domain add semaja book.semaja.id`

---

## Git — push ke remote kamu

Repo sudah di-`init` + ada commit awal di branch `main`. Tambahkan remote lalu push:
```bash
git remote add origin <URL-REPO-KAMU>   # mis. https://github.com/USER/semaja.git
git push -u origin main
```
Kalau belum punya repo & punya GitHub CLI:
```bash
gh repo create semaja --private --source=. --push
```
