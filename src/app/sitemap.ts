import type { MetadataRoute } from 'next';

const baseUrl = 'https://selfrules.org';

const pages = ['', '/about', '/work', '/lab', '/approach', '/notes', '/notes/why-i-prototype-in-code'];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) => [
    {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}${path}`,
          it: `${baseUrl}/it${path}`,
        },
      },
    },
    {
      url: `${baseUrl}/it${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}${path}`,
          it: `${baseUrl}/it${path}`,
        },
      },
    },
  ]);
}
