import type { MetadataRoute } from 'next';
import { SITO } from '@/content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITO}/sitemap.xml`,
  };
}
