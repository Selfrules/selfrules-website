import type { Metadata } from 'next';
import { BASE_URL } from '@/lib/constants';
import { routing } from '@/i18n/routing';

export function buildLocalizedUrl(locale: string, path: string = '/'): string {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  const suffix = path === '/' ? '' : path;
  return `${BASE_URL}${prefix}${suffix}`;
}

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
  const enUrl = buildLocalizedUrl('en', path);
  const itUrl = buildLocalizedUrl('it', path);
  const currentUrl = buildLocalizedUrl(locale, path);

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
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}
