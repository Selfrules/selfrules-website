import type { MetadataRoute } from 'next';

const baseUrl = 'https://selfrules.org';

const pages = ['', '/about', '/work', '/work/payments-rescue', '/work/cashless-system', '/work/leadsbridge-redesign', '/lab', '/lab/casahunter', '/approach', '/notes', '/notes/why-i-prototype-in-code', '/notes/the-meeting-where-everyone-says-yes', '/notes/why-metrics-lie-without-context', '/contact'];

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
