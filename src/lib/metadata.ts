import type { Metadata } from 'next';

const baseUrl = 'https://selfrules.org';

export function createPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const enUrl = `${baseUrl}${path === '/' ? '' : path}`;
  const itUrl = `${baseUrl}/it${path === '/' ? '' : path}`;
  const currentUrl = locale === 'it' ? itUrl : enUrl;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        en: enUrl,
        it: itUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: 'selfrules',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}
