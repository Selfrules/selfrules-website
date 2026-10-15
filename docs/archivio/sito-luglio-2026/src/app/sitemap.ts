import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/constants';


const pages = ['', '/about', '/work', '/work/payments-rescue', '/work/cashless-system', '/work/leadsbridge-redesign', '/lab', '/lab/casahunter', '/notes', '/notes/why-i-prototype-in-code', '/notes/the-meeting-where-everyone-says-yes', '/notes/why-metrics-lie-without-context', '/notes/when-ai-makes-sense-in-product', '/notes/managing-payments-at-scale', '/notes/remote-pm-across-countries', '/notes/build-vs-buy-framework', '/notes/seven-years-running-a-business', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) => [
    {
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}${path}`,
          it: `${BASE_URL}/it${path}`,
        },
      },
    },
    {
      url: `${BASE_URL}/it${path}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}${path}`,
          it: `${BASE_URL}/it${path}`,
        },
      },
    },
  ]);
}
