import type { ImageMetadata } from 'astro';

import dish1 from '@/assets/photos/dish-1.jpg';
import dish2 from '@/assets/photos/dish-2.jpg';
import dish3 from '@/assets/photos/dish-3.jpg';
import dish4 from '@/assets/photos/dish-4.jpg';
import dish5 from '@/assets/photos/dish-5.jpg';
import dish6 from '@/assets/photos/dish-6.jpg';

export interface Dish {
  img: ImageMetadata;
  /** Nama dish tetap Bahasa Indonesia di kedua bahasa (PRD 4.11). */
  name: string;
  descId: string;
  descEn: string;
}

/**
 * CATATAN untuk tim Semaja:
 * Nama & deskripsi di bawah adalah PLACEHOLDER yang cocok dengan gaya menu.
 * Silakan sesuaikan pasangan foto ↔ nama dish sesuai menu final.
 */
export const dishes: Dish[] = [
  {
    img: dish1,
    name: 'Kroket Rendang',
    descId: 'Kroket renyah berisi rendang, disandingkan sambal bubuk khas.',
    descEn: 'Crisp croquettes filled with rendang, served with our signature spiced salt.',
  },
  {
    img: dish2,
    name: 'Sate Maranggi',
    descId: 'Sate sapi bumbu Sunda, dibakar arang, manis-gurih berasap.',
    descEn: 'Sundanese charcoal-grilled beef skewers, smoky and sweet-savoury.',
  },
  {
    img: dish3,
    name: 'Ayam Bom Banjarmasin',
    descId: 'Ayam pedas khas Banjarmasin dengan sambal yang membakar.',
    descEn: 'Fiery Banjarmasin-style chicken with a sambal that ignites.',
  },
  {
    img: dish4,
    name: 'Sei Sapi Sambal Lombok Ijo',
    descId: 'Sei sapi asap dengan sambal lombok ijo yang segar menggigit.',
    descEn: 'Smoked beef sei with a bright, biting green chilli sambal.',
  },
  {
    img: dish5,
    name: 'Ikan Bakar Baramundi',
    descId: 'Barramundi utuh dibakar dengan bumbu bakar Nusantara.',
    descEn: 'Whole barramundi grilled in aromatic Nusantara spices.',
  },
  {
    img: dish6,
    name: 'Es Teler Deconstructed',
    descId: 'Interpretasi modern es teler — segar, manis, penutup sempurna.',
    descEn: 'A modern take on es teler — fresh, sweet, the perfect finish.',
  },
];
