// Situs English-only (sesuai permintaan klien). Objek `dict.id` sengaja
// dipertahankan supaya versi Bahasa Indonesia mudah diaktifkan lagi nanti.
export const defaultLang = 'en' as const;
export type Lang = 'id' | 'en';

export const languages: Record<Lang, string> = {
  id: 'Bahasa Indonesia',
  en: 'English',
};

/** English-only: semua rute dianggap English. */
export function getLangFromUrl(_url: URL): Lang {
  return 'en';
}

/* -------- Route helpers (English-only) -------- */
export const homePath = (_lang?: Lang) => '/';
export const blogIndexPath = (_lang?: Lang) => '/articles';
export const blogPostPath = (_lang: Lang, slug: string) => `/articles/${slug}`;

export const dict = {
  id: {
    nav: {
      story: 'Cerita',
      dishes: 'Menu',
      space: 'Ruang',
      location: 'Lokasi',
      journal: 'Jurnal',
      reserve: 'Reservasi',
    },
    hero: {
      eyebrow: 'Menteng · Jakarta Pusat',
      kicker: 'Penghormatan untuk',
      headline: 'Kekayaan Nusantara',
      sub: 'Ubah setiap santapan menjadi penjelajahan budaya — selamat datang di Semaja.',
      cta: 'Reservasi via WhatsApp',
      cta2: 'Lihat Menu',
      scroll: 'Gulir',
    },
    story: {
      eyebrow: 'Cerita Kami',
      title: 'Santap Indonesia modern,\nberakar pada warisan',
      body: 'Di Semaja, warisan kuliner Indonesia ditafsir ulang lewat lensa kontemporer. Setiap bahan, teknik, dan resep berawal dari rasa hormat yang dalam pada asal-usulnya, sebelum berkembang menjadi pengalaman yang dirancang untuk meja hari ini. Di bawah tangan Chef Glenn Erari, cita rasa yang akrab menjadi lebih halus — tradisi dijaga melalui kesungguhan.',
      chefCaption: 'Chef Glenn Erari',
      badge: 'Sebuah restoran oleh Ismaya Group',
    },
    dishes: {
      eyebrow: 'Signature',
      title: 'Hidangan Andalan',
      sub: 'Enam interpretasi Nusantara yang paling dicari tamu kami.',
      cta: 'Lihat Menu Lengkap',
    },
    space: {
      eyebrow: 'Ruang',
      title: 'Suasana yang Menghangatkan',
      sub: 'Dari makan malam intim hingga acara privat — temukan ruang yang pas.',
      areas: [
        { name: 'Main Dining Hall', desc: 'Ruang utama dengan pencahayaan hangat dan tenun dinding artisan.' },
        { name: 'Indoor Garden', desc: 'Sudut hijau yang teduh, ideal untuk santap siang santai.' },
        { name: 'VIP Room', desc: 'Ruang privat untuk perayaan & pertemuan penting.' },
      ],
    },
    proof: {
      eyebrow: 'Dipercaya',
      quote:
        '“Perpaduan cita rasa Nusantara dan keanggunan modern yang jarang ditemui di Jakarta.”',
      source: 'Ulasan Tamu',
      rating: '4,8 / 5 dari ratusan ulasan',
      byGroup: 'by Ismaya Group',
    },
    reserve: {
      eyebrow: 'Reservasi',
      title: 'Amankan Meja Anda',
      sub: 'Buka setiap hari · Menteng, Jakarta Pusat',
      cta: 'Reservasi via WhatsApp',
      call: 'Telepon Kami',
    },
    location: {
      eyebrow: 'Kunjungi Kami',
      title: 'Lokasi & Jam Buka',
      hoursTitle: 'Jam Operasional',
      addressTitle: 'Alamat',
      directions: 'Petunjuk Arah',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Pertanyaan yang Sering Diajukan',
      items: [
        { q: 'Apakah ada dress code?', a: 'Smart casual. Kami menyarankan tampilan rapi dan nyaman untuk pengalaman bersantap yang menyenangkan.' },
        { q: 'Bisakah reservasi untuk grup besar atau private dining?', a: 'Tentu. Kami memiliki VIP Room dan opsi private dining. Hubungi kami via WhatsApp untuk pengaturan grup besar.' },
        { q: 'Bagaimana kebijakan pembatalan?', a: 'Pembatalan dapat dilakukan hingga 3 jam sebelum waktu reservasi tanpa biaya. Konfirmasi ulang lewat WhatsApp.' },
        { q: 'Apakah menerima anak-anak?', a: 'Ya, kami ramah keluarga dan menyediakan kursi anak atas permintaan.' },
      ],
    },
    footer: {
      tagline: 'Modern Indonesian · Menteng, Jakarta',
      follow: 'Ikuti Kami',
      contact: 'Kontak',
      rights: 'Hak cipta dilindungi.',
      privacy:
        'Data yang Anda kirim (nama, nomor WhatsApp) hanya digunakan untuk keperluan reservasi. Situs ini menggunakan analitik untuk meningkatkan pengalaman Anda.',
    },
    blog: {
      title: 'Jurnal Semaja',
      sub: 'Cerita di balik dapur, bahan, dan budaya Nusantara.',
      readMore: 'Baca selengkapnya',
      back: 'Kembali ke Jurnal',
      backHome: 'Kembali ke Beranda',
      minRead: 'menit baca',
      empty: 'Belum ada artikel. Nantikan cerita pertama kami.',
    },
    common: {
      reserve: 'Reservasi Sekarang',
      langLabel: 'Bahasa',
      menuOpen: 'Buka menu',
      menuClose: 'Tutup menu',
    },
  },

  en: {
    nav: {
      story: 'Story',
      dishes: 'Menu',
      space: 'Spaces',
      location: 'Location',
      journal: 'Journal',
      reserve: 'Reserve',
    },
    hero: {
      eyebrow: 'Menteng · Central Jakarta',
      kicker: 'A Tribute to Indonesia’s',
      headline: 'Rich Heritage',
      sub: 'Turn every meal into a cultural discovery — welcome to Semaja.',
      cta: 'Reserve via WhatsApp',
      cta2: 'View Menu',
      scroll: 'Scroll',
    },
    story: {
      eyebrow: 'Our Story',
      title: 'Modern Indonesian dining,\nrooted in heritage',
      body: 'At Semaja, Indonesia’s culinary heritage is reimagined through a contemporary lens. Every ingredient, technique, and recipe begins with deep respect for its origins before evolving into an experience designed for today’s table. Under Chef Glenn Erari, familiar flavours become more refined — traditions preserved through thoughtful craftsmanship.',
      chefCaption: 'Chef Glenn Erari',
      badge: 'A restaurant by Ismaya Group',
    },
    dishes: {
      eyebrow: 'Signature',
      title: 'Signature Dishes',
      sub: 'Six Nusantara interpretations our guests keep coming back for.',
      cta: 'View Full Menu',
    },
    space: {
      eyebrow: 'The Space',
      title: 'A Room That Warms You',
      sub: 'From intimate dinners to private events — find the right space.',
      areas: [
        { name: 'Main Dining Hall', desc: 'The main room, warmly lit with artisan woven wall art.' },
        { name: 'Indoor Garden', desc: 'A shaded green corner, ideal for a relaxed lunch.' },
        { name: 'VIP Room', desc: 'A private space for celebrations & important gatherings.' },
      ],
    },
    proof: {
      eyebrow: 'Trusted',
      quote:
        '“A pairing of Nusantara flavour and modern elegance that is rare in Jakarta.”',
      source: 'Guest Review',
      rating: '4.8 / 5 from hundreds of reviews',
      byGroup: 'by Ismaya Group',
    },
    reserve: {
      eyebrow: 'Reservations',
      title: 'Secure Your Table',
      sub: 'Open daily · Menteng, Central Jakarta',
      cta: 'Reserve via WhatsApp',
      call: 'Call Us',
    },
    location: {
      eyebrow: 'Visit Us',
      title: 'Location & Hours',
      hoursTitle: 'Opening Hours',
      addressTitle: 'Address',
      directions: 'Get Directions',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Is there a dress code?', a: 'Smart casual. We recommend a neat, comfortable look for a pleasant dining experience.' },
        { q: 'Can I reserve for large groups or private dining?', a: 'Absolutely. We have a VIP Room and private dining options. Reach us on WhatsApp to arrange large groups.' },
        { q: 'What is the cancellation policy?', a: 'Cancellations can be made up to 3 hours before your reservation at no charge. Please reconfirm via WhatsApp.' },
        { q: 'Are children welcome?', a: 'Yes, we are family-friendly and provide high chairs on request.' },
      ],
    },
    footer: {
      tagline: 'Modern Indonesian · Menteng, Jakarta',
      follow: 'Follow Us',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy:
        'The data you submit (name, WhatsApp number) is used only for reservation purposes. This site uses analytics to improve your experience.',
    },
    blog: {
      title: 'The Semaja Journal',
      sub: 'Stories behind our kitchen, ingredients, and Nusantara culture.',
      readMore: 'Read more',
      back: 'Back to Journal',
      backHome: 'Back to Home',
      minRead: 'min read',
      empty: 'No articles yet. Our first story is coming soon.',
    },
    common: {
      reserve: 'Reserve Now',
      langLabel: 'Language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return dict[lang];
}
