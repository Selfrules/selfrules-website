import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'it'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false
});

export const LOCALE_PARAMS = routing.locales.map((locale) => ({ locale }));
