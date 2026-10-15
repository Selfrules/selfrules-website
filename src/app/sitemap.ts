import type { MetadataRoute } from 'next';
import { SITO, storie, note } from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const fisse = ['', '/storie', '/errori', '/adesso', '/come-lavoro', '/note'];
  return [
    ...fisse.map((p) => ({ url: `${SITO}${p}`, changeFrequency: 'monthly' as const })),
    ...storie.map((s) => ({ url: `${SITO}/storie/${s.slug}` })),
    ...note.map((n) => ({ url: `${SITO}/note/${n.slug}`, lastModified: n.data })),
  ];
}
