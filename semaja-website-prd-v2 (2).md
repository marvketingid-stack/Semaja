# PRD — Website Semaja (Single Page Landing, Conversion-to-Reservation)

**Versi:** 2.0
**Tanggal:** 5 Agustus 2026
**Untuk:** Tim development (Claude Code)
**Tujuan bisnis:** Landing page konversi tinggi untuk campaign Meta Ads, dengan tracking end-to-end sampai ke reservasi.

**Changelog v2.0 (dari v1.0):**
- Tambah requirement **bilingual ID/EN** (sebelumnya ID-only, dipindah dari Out of Scope ke in-scope v1)
- Perluas requirement **mobile responsive** jadi lebih detail & mencakup semua device (bukan cuma 3 breakpoint umum)
- Perluas tracking stack: tambah **Google Search Console, Microsoft Clarity (heatmap/session recording), GoHighLevel (CRM + automation)** di samping Meta Pixel/CAPI, GTM, GA4
- Tambah alur **GoHighLevel → Meta CAPI** supaya reservasi yang benar-benar selesai (bukan cuma klik WA) bisa ditrack balik ke Meta Ads Manager sebagai offline conversion

---

## 1. Ringkasan & Tujuan

Semaja adalah restoran Indonesia modern oleh Ismaya Group di Menteng, Jakarta Pusat, menyajikan hidangan Nusantara klasik dengan sentuhan kontemporer. Website ini adalah **single landing page** (bukan multi-page site penuh) yang tujuan utamanya adalah:

1. Mengkomunikasikan positioning brand (heritage Indonesia + modern fine dining) dalam <10 detik pertama.
2. Mengonversi traffic dari Meta Ads menjadi **reservasi** (via WhatsApp dan/atau sistem reservasi online).
3. Menyediakan tracking yang bisa mengukur funnel penuh: **Ad Click → Landing View → Engagement → Klik CTA Reservasi → Reservasi Benar-Benar Selesai** untuk optimasi Meta Ads (CAPI + Pixel + CRM feedback loop).
4. Tampil dan berfungsi sempurna di **semua device** (mobile, tablet, desktop) karena traffic utama dari Meta Ads mayoritas mobile.
5. Melayani audience **berbahasa Indonesia maupun Inggris** (lokal + turis/expat).

**Bukan tujuan:** blog, multi-halaman menu lengkap, sistem reservasi custom dari nol (gunakan integrasi pihak ketiga), CMS kompleks.

---

## 2. Target Audience & Konteks Campaign

- Target: warga Jakarta/Jabodetabek usia 25-50, kelas menengah-atas, tertarik fine dining/experience dining, sering muncul di traffic dari Instagram/Facebook Ads. Termasuk juga segmen expat/turis yang browsing dalam bahasa Inggris.
- Sumber traffic utama: **Meta Ads (Instagram & Facebook)**, kemungkinan juga organik dari bio Instagram (@semaja_id) dan pencarian Google (SEO/GSC).
- Device: asumsikan **mobile-first** (>80% traffic dari Meta Ads biasanya mobile), tapi wajib tetap solid di tablet & desktop untuk traffic organik/search.
- Intent: pengguna datang dalam mood "considering di mana makan malam ini/minggu ini" — bukan riset panjang. Copy harus singkat, visual harus kuat.

---

## 3. Referensi Desain & Sintesis Arahan Visual

Referensi yang diberikan sudah dianalisis dan disintesis jadi satu arahan yang cocok untuk Semaja:

| Referensi | Elemen yang diambil untuk Semaja |
|---|---|
| **Canlis** (canlis.com) | Fotografi besar/atmosferik mendominasi hero, teks minimal, satu CTA reservasi yang sangat jelas ("Book a table"), press mentions/awards sebagai social proof, sticky reserve button, nomor telepon & alamat selalu terlihat di header |
| **August Jakarta** (augustjakarta.com) | Pola lokal Jakarta yang sudah terbukti: **WhatsApp sebagai kanal reservasi utama**, section "Seating Area" (showcase ruang: main dining, indoor garden, VIP room), FAQ untuk policy (dress code, anak-anak, pembatalan), founder/chef story, opening hours menonjol di hero |
| **Nour Sydney** (noursydney.com) | Statement headline yang berani & singkat di hero ("One hatted contemporary Middle Eastern restaurant"), grid galeri foto dish yang vibrant, awards/hat sebagai badge kredibilitas |
| **Mowgli Street Food** (mowglistreetfood.com) | Nada storytelling yang hangat dan personal, tipografi playful untuk brand yang punya karakter kuat tapi tetap approachable |
| **Nobu Restaurants** (noburestaurants.com) | Sistem badge/prestige internasional halus, tidak berlebihan, whitespace generous |
| **Sonore** (sonorestaurant.com.au) | Tone premium-casual (fine dining tapi tidak kaku), penggunaan warna gelap/moody untuk atmosphere shot |
| **Noma** (noma.dk) | Kalem, minimal, foto musiman/story-driven, waitlist/reservation flow yang smooth |

**Arahan visual final untuk Semaja:**
- Palet warna: gelap & hangat (dark wood, batik-inspired accent), bukan putih-terang seperti Canlis — karena interior Semaja memang wood + batik + warm lighting.
- Tipografi: serif elegan untuk heading (kesan heritage), sans-serif clean untuk body (kesan modern).
- Fotografi jadi hero utama di setiap section — minim copywriting panjang.
- CTA reservasi via **WhatsApp** sebagai primary action (mengikuti pola August Jakarta yang proven di Jakarta), dengan opsi reservation form/Tock-like sebagai secondary jika Ismaya Group sudah punya sistem reservasi sendiri.
- Referensi internasional (Nobu, Noma, Sonore, Nour Sydney) dipakai untuk kualitas fotografi & whitespace, bukan untuk pola reservasi — karena pasar Jakarta terbukti lebih convert lewat WA dibanding form booking ala Barat.

---

## 4. Struktur Halaman (Single Page, Section by Section)

> **Catatan bilingual:** semua copy di section 4.1–4.10 di bawah wajib tersedia dalam **Bahasa Indonesia (default)** dan **English**. Lihat Section 5.5 untuk mekanisme switching-nya.

### 4.1 Sticky Header
- Logo Semaja (kiri)
- Nomor WA / telepon (tengah/kanan, klik-to-chat)
- **Language switcher (ID / EN)** — toggle kecil, posisi kanan atas, tidak mengganggu hierarki CTA
- CTA button "Reserve a Table" / "Reservasi Sekarang" — **selalu terlihat (sticky)**, ini adalah CTA #1 yang paling sering diklik.

### 4.2 Hero Section
- Full-bleed video/foto atmosferik (interior + hidangan signature)
- Headline pendek: positioning statement (contoh arah: "A Tribute to Indonesia's Rich Heritage" / "Sebuah Penghormatan untuk Kekayaan Nusantara")
- Subheadline 1 kalimat
- Primary CTA: **"Reserve via WhatsApp"** (besar, kontras tinggi)
- Secondary CTA (opsional): "View Menu" (scroll ke section menu, bukan external link, supaya user tetap di landing page)

### 4.3 Our Story / About
- 2-3 kalimat singkat tentang konsep Semaja (Ismaya Group, tribute to Nusantara, chef Glenn Erari)
- Foto chef atau dapur sebagai supporting visual
- Tidak perlu panjang — cukup untuk kredibilitas, bukan halaman "About Us" penuh

### 4.4 Signature Dishes (Gallery)
- Grid foto 4-6 hidangan signature (Sate Maranggi, Ayam Bom Banjarmasin, Es Teler Deconstructed, dll)
- Setiap foto: nama dish + 1 baris deskripsi singkat
- CTA kecil di akhir section: "See Full Menu" (bisa link ke PDF menu atau modal, tidak wajib page baru)

### 4.5 The Space (Ambience)
- Showcase 3 area utama: Main Dining Hall, Indoor Garden, VIP Room
- Format mirip "Seating Area" August Jakarta — tab/carousel foto per area
- Tujuan: bantu user membayangkan pengalaman & occasion (dinner biasa vs private event)

### 4.6 Social Proof / Press
- Logo media yang pernah meliput (Jakarta Globe, dll) atau review score (Tripadvisor 4.7/5)
- Quote singkat dari review (1 kalimat)
- Badge "by Ismaya Group" untuk kredibilitas (Ismaya = grup F&B ternama di Jakarta)

### 4.7 Reservation CTA Section (Mid-page repeat)
- Section khusus dengan CTA reservasi besar di tengah scroll (jangan hanya andalkan sticky header)
- Info singkat: jam operasional, kisaran harga (opsional), area (Menteng)
- Tombol: "Reserve via WhatsApp" + alternatif "Call Us"

### 4.8 Location & Hours
- Embed Google Maps
- Alamat lengkap: Jalan Gereja Theresia No.41, Gondangdia, Menteng, Jakarta Pusat
- Jam operasional
- Tombol "Get Directions" (deep link ke Google Maps app)

### 4.9 FAQ (opsional tapi direkomendasikan)
Ikuti pola August Jakarta — 4-6 pertanyaan singkat (tersedia ID & EN):
- Dress code?
- Reservasi untuk grup besar / private dining?
- Kebijakan pembatalan?
- Apakah menerima anak-anak?

### 4.10 Footer
- Logo, alamat, jam buka
- Social media links (Instagram @semaja_id, TikTok)
- Kontak email/WA
- Copyright + link ke Ismaya Group (opsional)

### 4.11 Bahasa & Konten Parity
- Setiap section di atas wajib punya versi ID dan EN yang setara (bukan salah satu lebih lengkap dari yang lain).
- Nama dish di Signature Dishes boleh tetap dalam Bahasa Indonesia (mis. "Sate Maranggi") walau versi EN aktif, dengan deskripsi 1 baris di-translate — pola umum resto Nusantara premium (nama dish adalah bagian dari brand identity, tidak perlu diterjemahkan literal).

---

## 5. Functional Requirements

### 5.1 Reservasi
- **Primary flow:** Button/link `https://wa.me/62XXXXXXXXXX?text=Halo%20Semaja%2C%20saya%20ingin%20reservasi...` — pre-filled message, disesuaikan bahasanya dengan bahasa aktif di halaman (ID/EN).
- Jika Ismaya Group punya sistem reservasi online (mis. Chope, Tock, atau sistem internal Ismaya), sediakan sebagai secondary CTA yang link keluar.
- Semua tombol reservasi (header, hero, mid-page, footer) harus **konsisten mengarah ke channel yang sama** dan **semua di-tag untuk tracking** (lihat section 6).

### 5.2 Navigasi
- Smooth scroll ke anchor section dari header nav (jika ada nav menu) atau dari CTA "View Menu".
- Tidak ada page reload — tetap single page experience, termasuk saat ganti bahasa (ID ↔ EN tidak reload/redirect kasar, gunakan client-side switch atau route yang tetap mempertahankan scroll position).

### 5.3 Responsive — Mobile-First, Wajib di Semua Device

Karena mayoritas traffic dari Meta Ads adalah mobile, **mobile responsiveness bukan "nice to have" — ini requirement utama**, sama pentingnya dengan tracking.

**Breakpoint minimum:**
- Small mobile: 320–374px (mis. iPhone SE)
- Mobile standar: 375–639px (mayoritas device Meta Ads traffic)
- Tablet: 640–1023px (termasuk iPad portrait & landscape)
- Desktop: 1024–1439px
- Large desktop: ≥1440px

**Requirement teknis tambahan (di luar breakpoint umum):**
- **Viewport meta tag** wajib benar: `width=device-width, initial-scale=1`, tidak boleh ada horizontal scroll di device manapun.
- **Touch target** minimum 44x44px untuk semua tombol/CTA (standar Apple HIG & Google Material) — CTA WhatsApp dan sticky reserve button jadi prioritas utama karena ini elemen paling sering di-tap.
- **Safe area insets** untuk device dengan notch/dynamic island (iPhone) dan gesture nav bar (Android) — gunakan `env(safe-area-inset-*)` di CSS supaya sticky header/footer/CTA tidak tertutup atau terpotong.
- **Orientation handling** — layout tetap rapi saat device diputar landscape, terutama section galeri foto & "The Space".
- **Testing matrix minimum sebelum go-live:** Chrome DevTools device emulation (iPhone SE, iPhone 14/15/16 series, Pixel, Samsung Galaxy standar) + minimal 1x real device test di iOS dan 1x di Android, karena rendering font/scroll-snap kadang beda dari emulator.
- Sticky header & sticky CTA tetap accessible di semua breakpoint, jangan menutupi konten penting atau elemen interaktif lain di mobile.
- Gambar & video wajib `srcset`/responsive image supaya device kecil tidak load asset ukuran desktop (berpengaruh ke LCP di 4G, lihat 5.4).

### 5.4 Performance
- Target Largest Contentful Paint < 2.5s di koneksi 4G (test dari perspektif mobile, bukan desktop wifi).
- Gambar hero pakai format modern (WebP/AVIF) + lazy load untuk gambar di bawah fold.
- Video hero (jika ada) harus punya fallback image dan di-compress agresif, autoplay muted tanpa suara.
- Tracking script pihak ketiga (GTM, Clarity, dll — lihat section 6) di-load lewat GTM/async supaya tidak memblok render awal, terutama di koneksi mobile yang lebih lambat.

### 5.5 Bilingual Support (ID / EN)

- **Bahasa default:** Bahasa Indonesia (mayoritas audience iklan lokal). English tersedia via toggle, bukan auto-redirect berdasarkan geolocation (supaya user tetap punya kontrol, dan tidak mengacaukan tracking).
- **Struktur URL:** gunakan salah satu pola berikut (pilih sesuai kemampuan stack Next.js tim dev) — `/en` prefix path (mis. `semaja.id/en`) direkomendasikan dibanding query param, karena lebih baik untuk SEO & shareable link dari ad creative.
- **SEO:** tambahkan `hreflang` tags (`hreflang="id"`, `hreflang="en"`, `hreflang="x-default"`) supaya Google mengerti ada 2 versi bahasa dan tidak menganggap duplicate content.
- **Preferensi bahasa** disimpan di local storage/cookie ringan supaya user yang balik lagi tidak perlu switch ulang (tidak wajib, nice-to-have).
- **Konsistensi tracking:** event GTM/Pixel tetap sama nama event-nya di kedua bahasa (jangan bikin event terpisah `cta_click_en` vs `cta_click_id`) — bahasa aktif cukup dikirim sebagai parameter tambahan (`content_language: "id"` atau `"en"`) di dalam payload event, supaya data funnel tidak terpecah dua di Meta Ads Manager.

---

## 6. Tracking & Analytics — INI KRITIKAL untuk Meta Ads

Karena traffic akan datang dari Meta Ads dan tujuan campaign adalah mengukur konversi **sampai ke reservasi benar-benar selesai** (bukan cuma klik), tracking harus di-setup dengan benar dari awal, dan mencakup lebih dari sekadar Pixel.

### 6.1 Tools yang dipasang

1. **Meta Pixel** — dipasang di semua halaman (base code di `<head>`), untuk browser-side event tracking.
2. **Meta Conversions API (CAPI)** — direkomendasikan untuk redundancy terhadap iOS14+ tracking loss & ad blocker. Kirim event dari server-side (via backend endpoint, Meta CAPI Gateway, atau — lihat 6.5 — via GoHighLevel workflow untuk event reservasi yang benar-benar selesai).
3. **Google Tag Manager (GTM)** — semua event dikelola lewat GTM container supaya mudah maintain tanpa perlu deploy ulang code tiap kali ada perubahan tracking.
4. **Google Analytics 4 (GA4)** — untuk data pelengkap & cross-check funnel di luar Meta Ads Manager.
5. **Google Search Console (GSC)** — verifikasi domain + submit sitemap.xml, untuk memonitor performa pencarian organik (nama brand, "restoran Indonesia Menteng", dll) dan memastikan indexing halaman ID/EN berjalan benar (termasuk cek hreflang tidak error).
6. **Microsoft Clarity** — heatmap & session recording gratis, dipasang paralel dengan GTM. Berguna untuk melihat secara visual di section mana user drop-off atau ragu-ragu sebelum klik CTA reservasi (pelengkap kualitatif dari data kuantitatif GA4/Meta).
7. **GoHighLevel (GHL)** — sebagai CRM + automation layer untuk **menutup loop reservasi**: menangkap lead dari WA/form, mencatat status reservasi (booked → confirmed → completed/no-show), dan **mengirim balik conversion event ke Meta CAPI** ketika reservasi benar-benar terjadi. Ini yang menjawab kebutuhan utama: "berapa orang dari ads yang benar-benar reservasi", bukan cuma yang klik WA. Detail alur di Section 6.5.

### 6.2 Event yang wajib di-track

| Event Name (Meta Standard Event) | Trigger | Catatan |
|---|---|---|
| `PageView` | Otomatis saat landing page load | Base pixel event |
| `ViewContent` | User scroll melewati Hero section (mis. 25% scroll depth) | Menandakan user benar-benar melihat konten, bukan bounce instan |
| `Contact` | Klik tombol WhatsApp mana pun (header, hero, mid-page, footer) | Proxy terdekat untuk "reservation intent" di level browser — **bukan lagi primary conversion**, karena sekarang ada event yang lebih dalam (lihat `Reservation Completed` di bawah) |
| `Lead` | (Jika ada form reservasi online, bukan cuma WA) submit form berhasil | Gunakan jika ada form; kalau full-WA, ini bisa dipakai untuk submit form kontak singkat sebelum redirect ke WA (opsional, untuk capture data lebih awal sebelum masuk GHL) |
| `Schedule` (custom mapping) | Jika integrasi reservasi eksternal (Chope/Tock) punya confirmation page/callback | Untuk track "reservasi benar-benar selesai" via sistem eksternal, jika dipakai |
| **`Reservation Completed`** (custom conversion, dikirim via CAPI dari GHL, bukan dari browser) | GHL pipeline stage diubah ke "Confirmed"/"Seated" oleh tim reservasi Semaja | **Ini primary conversion event untuk optimasi campaign** — lihat Section 6.5 |
| Custom event: `cta_click_[section]` | Setiap klik CTA, dengan label section asal (header/hero/midpage/footer) | Untuk analisis CTA mana yang paling efektif |
| Custom event: `menu_gallery_view` | User klik/scroll ke section Signature Dishes | Sinyal engagement tambahan |
| Custom event: `directions_click` | Klik "Get Directions" | Sinyal intent kunjungan fisik |
| Custom event: `language_switch` | User toggle ID ↔ EN | Untuk analisis preferensi bahasa audience per campaign/ad set |
| Custom event: scroll depth 25/50/75/100% | Native scroll tracking | Lihat 6.3 |

### 6.3 Implementasi teknis yang diminta ke Claude Code

- Setiap tombol CTA reservasi harus punya **atribut data yang jelas** untuk keperluan tracking, contoh:
  ```html
  <a href="https://wa.me/62XXXXXXXXXX?text=..."
     data-track="cta_click"
     data-section="hero"
     data-cta-label="reserve_whatsapp"
     data-lang="id">
    Reserve via WhatsApp
  </a>
  ```
- Buat **satu file konfigurasi tracking terpisah** (mis. `tracking-config.js`) supaya Pixel ID, GTM ID, GA4 ID, Clarity Project ID, dan event mapping mudah diganti tanpa harus edit banyak file.
- Semua event fire ke **dataLayer (GTM)**, lalu GTM yang meneruskan ke Meta Pixel, GA4, dan Clarity — jangan hardcode `fbq()` tersebar di banyak tempat, supaya maintainable.
- Pastikan semua ID (Pixel ID, GTM Container ID, GA4 Measurement ID, Clarity Project ID, nomor WA, GHL API key/Location ID) **dijadikan environment variable / config value**, bukan hardcoded, karena ID sebenarnya akan diberikan terpisah oleh tim marketing.
- **Capture & simpan `fbclid`, `fbc`, `fbp`** (cookie/parameter standar Meta untuk click matching) begitu user landing dari ad, dan **UTM parameter** (`utm_source`, `utm_campaign`, `utm_content`, dll). Simpan di dataLayer/local storage, dan **teruskan ke pesan WA pre-filled ATAU simpan sebagai hidden field/URL parameter kalau ada form** — ini krusial supaya saat lead masuk ke GHL (section 6.5), data click ID ini ikut terbawa dan bisa dipakai untuk match balik ke Meta CAPI dengan akurat.
- Tambahkan **scroll depth tracking** (25%/50%/75%/100%) sebagai custom event, untuk mengukur engagement quality dari traffic ads yang berbeda-beda.
- Gunakan **`event_id` yang sama** antara Pixel (browser) dan CAPI (server) untuk event yang sama, supaya Meta melakukan deduplication dengan benar dan tidak menghitung 1 aksi user sebagai 2 event.

### 6.4 Google Search Console & SEO Teknis

- Verifikasi domain via GSC (DNS TXT record atau HTML tag, sesuaikan dengan setup DNS Ismaya).
- Submit `sitemap.xml` yang mencakup versi ID dan EN.
- Cek report "Coverage" & "Enhancements" secara berkala untuk memastikan hreflang tidak error dan structured data `Restaurant` schema (section 8) terbaca benar oleh Google.
- GSC tidak terhubung langsung ke funnel Meta Ads, tapi penting untuk melengkapi gambaran full-funnel: berapa traffic organik yang datang di luar iklan, supaya campaign performance tidak salah dibaca.

### 6.5 GoHighLevel Integration — Menutup Loop "Ads → Reservasi Selesai"

Ini bagian yang menjawab kebutuhan inti: **Meta Ads Manager secara default cuma tahu sampai "orang klik WhatsApp" — tidak tahu apakah orang itu benar-benar datang makan.** Untuk itu dipasang GoHighLevel sebagai CRM penghubung:

1. **Capture lead:** saat user klik "Reserve via WhatsApp" dari landing page, selain membuka WA, kirim juga data lead (nama jika ada, nomor WA, section asal klik, `fbclid`/`fbc`/UTM yang sudah ditangkap di 6.3) ke GHL — bisa lewat webhook langsung dari landing page, atau lewat GHL WhatsApp/inbox integration jika nomor WA Business Semaja memang dikelola lewat GHL.
2. **Pipeline status:** tim reservasi Semaja update status lead di GHL pipeline (contoh stage: `New Inquiry` → `Confirmed` → `Seated/Completed` → `No Show`). Ini proses manual ringan yang sudah jadi kebiasaan tim (pola serupa dengan pengelolaan CRM contact GHL yang sudah berjalan untuk brand lain di portfolio Ismaya).
3. **Automation trigger:** saat status berubah jadi `Seated/Completed`, GHL workflow otomatis trigger **webhook ke Meta Conversions API**, mengirim custom conversion event `Reservation Completed` dengan data lead yang di-hash (nomor telepon, email jika ada) plus `fbclid`/`fbc` yang tersimpan dari awal — supaya Meta bisa match balik ke ad/ad set/creative asal.
4. **Hasil akhir di Meta Ads Manager:** campaign bisa dioptimasi berdasarkan **Cost per Reservation Completed**, bukan cuma Cost per Contact/klik WA — jauh lebih akurat untuk keputusan budget allocation antar ad set/creative.

**Catatan implementasi:**
- Bridge webhook GHL → Meta CAPI bisa dibangun custom (kalau tim dev sanggup bikin endpoint kecil), atau lewat automation tool seperti Zapier/Make jika ingin lebih cepat tanpa maintain server sendiri.
- Perlu koordinasi dengan tim reservasi Semaja soal kedisiplinan update pipeline status di GHL — akurasi data tracking ini bergantung penuh pada proses manual ini konsisten dijalankan.
- GHL Location ID & API Key disiapkan terpisah oleh tim marketing (lihat checklist 6.6/11), bukan dihardcode di kode landing page.

### 6.6 Yang perlu disiapkan tim non-teknis (bukan tugas dev, tapi dicatat di sini)

- Meta Pixel ID
- GTM Container ID
- GA4 Measurement ID
- Microsoft Clarity Project ID
- Google Search Console verification (akses domain/DNS)
- GoHighLevel Location ID & API Key, plus konfirmasi apakah nomor WA Business Semaja akan dikelola lewat GHL inbox atau tetap WA biasa (mempengaruhi cara capture lead di poin 1, Section 6.5)
- Nomor WhatsApp Business resmi Semaja
- Akses Meta Events Manager untuk testing event (Test Events tool)
- Kesepakatan proses internal: siapa yang update status reservasi di GHL pipeline, dan seberapa sering (real-time vs end-of-day)

---

## 7. Rekomendasi Tech Stack

- **Framework:** Next.js (React) atau plain HTML/CSS/JS dengan build tool ringan (Vite) — pilih Next.js jika ada kemungkinan tambah halaman/CMS di masa depan, plain static jika benar-benar hanya 1 halaman selamanya. Next.js juga lebih memudahkan implementasi routing `/en` untuk bilingual (section 5.5).
- **Styling:** Tailwind CSS — cepat untuk build layout section-based seperti PRD ini, dan memudahkan konsistensi responsive breakpoint (section 5.3).
- **Hosting:** Vercel atau Netlify (deploy cepat, gratis untuk single landing page, otomatis HTTPS).
- **Form (jika pakai reservation form):** gunakan service seperti Formspree/Resend, hindari backend custom kalau tidak perlu — kecuali untuk webhook GHL → Meta CAPI (section 6.5) yang memang butuh endpoint kecil server-side.
- **Analytics & tracking stack:** GTM + GA4 + Meta Pixel/CAPI + Microsoft Clarity + Google Search Console + GoHighLevel, seperti dijelaskan di section 6.

---

## 8. Non-Functional Requirements

- **SEO dasar:** meta title, meta description, Open Graph tags (untuk preview link yang bagus saat di-share/saat jadi ad creative link preview), structured data `Restaurant` schema (nama, alamat, jam buka, range harga) untuk Google — masing-masing untuk versi ID dan EN, plus `hreflang` tags (section 5.5).
- **Aksesibilitas:** kontras warna cukup (terutama karena arahan visual gelap/moody — pastikan teks tetap terbaca), alt text di semua gambar (dalam bahasa yang sesuai/ID default), touch target minimum 44x44px (section 5.3).
- **Konsistensi brand:** semua asset (logo, foto) menggunakan yang resmi dari Ismaya Group/Semaja — bukan placeholder di versi final.
- **Privasi data:** karena ada session recording (Clarity) dan CRM (GHL) yang menyimpan data pribadi calon tamu (nomor WA, nama), pastikan ada notice singkat soal penggunaan data (privacy note ringan di footer sudah cukup untuk v1, bukan wajib cookie consent banner kompleks kecuali diminta legal Ismaya).

---

## 9. Metrik Sukses (untuk campaign Meta Ads)

- **Primary KPI:** **Cost per Reservation Completed** (dari GHL pipeline stage `Confirmed`/`Seated`, via CAPI event — section 6.5) — ini metrik paling akurat karena sudah lewat proses konfirmasi tim reservasi, bukan cuma klik.
- **Secondary KPI:** Cost per `Contact` event (klik WhatsApp) — tetap dipantau sebagai leading indicator sebelum data `Reservation Completed` cukup banyak untuk dioptimasi Meta.
- **Tertiary KPI:** Scroll depth rate (>50%) sebagai indikator relevansi audience; rasio klik CTA per section (untuk tahu section mana yang paling persuasif, guna iterasi copy/layout selanjutnya); rasio bahasa ID vs EN yang dipakai per campaign (untuk tahu apakah perlu ad set terpisah per bahasa target).

---

## 10. Out of Scope (v1)

- Sistem reservasi custom dari nol (pakai WA atau integrasi eksisting)
- Blog/artikel
- E-commerce/online ordering
- Login/member area
- Bahasa selain ID/EN (mis. Mandarin, Jepang — bisa jadi v2 jika data menunjukkan kebutuhan)

> **Catatan:** Multi-bahasa (ID/EN) sebelumnya masuk Out of Scope di v1.0 PRD ini, sekarang **dipindah ke in-scope** — lihat Section 4.11 dan 5.5.

---

## 11. Asset yang Dibutuhkan dari Tim Semaja (checklist sebelum development mulai)

- [ ] Logo (SVG/PNG transparan, light & dark version)
- [ ] Foto hero (interior, high-res, landscape & portrait untuk mobile)
- [ ] Foto signature dishes (min. 6, konsisten lighting/style)
- [ ] Foto Indoor Garden & VIP Room
- [ ] Copy final dalam **2 bahasa (ID & EN)** — headline, subheadline, story paragraph, FAQ — atau minta dev/copywriter draft dari brief ini lalu di-review tim Semaja
- [ ] Nomor WhatsApp Business resmi
- [ ] Jam operasional final
- [ ] Meta Pixel ID & GTM Container ID
- [ ] GA4 Measurement ID
- [ ] Microsoft Clarity Project ID
- [ ] Google Search Console access (verifikasi domain/DNS)
- [ ] GoHighLevel Location ID & API Key, plus keputusan apakah WA Business dikelola via GHL inbox
- [ ] Link Google Maps resmi
- [ ] Logo media/press (jika ada) untuk social proof section
