/**
 * Konfigurasi tunggal untuk data brand & tracking.
 * Semua ID marketing di-set lewat environment variable (lihat .env.example),
 * BUKAN di-hardcode — sesuai PRD section 6.3.
 *
 * Variabel diawali PUBLIC_ agar tersedia di sisi klien/build.
 */

const env = import.meta.env;

export const SITE_URL = (env.SITE_URL as string) || 'https://semaja.id';

/**
 * Video hero (opsional). Taruh file di `public/videos/` lalu set path-nya di env
 * `PUBLIC_HERO_VIDEO` (mis. "/videos/hero.mp4"). Kosong = pakai foto hero.
 * Video akan autoplay, muted, loop, playsinline dengan foto sebagai poster/fallback.
 */
export const heroVideo = (env.PUBLIC_HERO_VIDEO as string) || '';

export const brand = {
  name: 'Semaja',
  tagline: 'Modern Indonesian',
  group: 'Ismaya Group',
  chef: 'Glenn Erari',
  // Nomor WhatsApp Business resmi (format internasional tanpa "+"/spasi).
  // Ganti lewat env PUBLIC_WA_NUMBER. Placeholder di bawah HARUS diganti sebelum go-live.
  waNumber: (env.PUBLIC_WA_NUMBER as string) || '62811272723',
  phoneDisplay: (env.PUBLIC_PHONE_DISPLAY as string) || '+62 811 272 723',
  address: {
    street: 'Jalan Gereja Theresia No.41',
    area: 'Gondangdia, Menteng',
    city: 'Jakarta Pusat',
    region: 'DKI Jakarta',
    postalCode: '10350',
    country: 'ID',
  },
  mapsEmbed:
    'https://www.google.com/maps?q=Semaja+Restaurant+Jalan+Gereja+Theresia+41+Menteng&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Jalan+Gereja+Theresia+No.41+Gondangdia+Menteng+Jakarta+Pusat',
  hours: [
    { d: 'Senin – Jumat', dEn: 'Monday – Friday', h: '11.00 – 22.00' },
    { d: 'Sabtu – Minggu', dEn: 'Saturday – Sunday', h: '10.00 – 23.00' },
  ],
  priceRange: 'Rp 150.000 – Rp 400.000 / orang',
  social: {
    instagram: 'https://www.instagram.com/semaja_id/',
    instagramHandle: '@semaja_id',
    tiktok: 'https://www.tiktok.com/@semaja_id',
  },
  email: 'reservation@semaja.id',
};

/** ID tracking — diisi tim marketing lewat env. Kosong = script tidak dipasang. */
export const tracking = {
  gtmId: (env.PUBLIC_GTM_ID as string) || '',
  ga4Id: (env.PUBLIC_GA4_ID as string) || '',
  metaPixelId: (env.PUBLIC_META_PIXEL_ID as string) || '',
  clarityId: (env.PUBLIC_CLARITY_ID as string) || '',
  // Endpoint webhook untuk capture lead → GoHighLevel (opsional, section 6.5).
  ghlWebhook: (env.PUBLIC_GHL_LEAD_WEBHOOK as string) || '',
};

/** Bangun link WhatsApp dengan pesan pre-filled sesuai bahasa aktif. */
export function waLink(lang: 'id' | 'en'): string {
  const text =
    lang === 'en'
      ? 'Hello Semaja, I would like to make a reservation.'
      : 'Halo Semaja, saya ingin membuat reservasi.';
  return `https://wa.me/${brand.waNumber}?text=${encodeURIComponent(text)}`;
}
