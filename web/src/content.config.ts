import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Koleksi artikel (blog/jurnal) berbasis Markdown.
 * File .md ada di src/content/articles/ dan bisa di-upload lewat
 * panel CMS di /admin (Decap CMS) — lihat public/admin/config.yml.
 *
 * Field `lang` menentukan artikel muncul di /artikel (id) atau /en/articles (en).
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      lang: z.enum(['id', 'en']).default('id'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Tim Semaja'),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articles };
