import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import Script from 'next/script';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'a11y' });

  return (
    <NextIntlClientProvider messages={messages}>
      {/* Skip to content — sr-only, visible on keyboard focus */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        {t('skipToContent')}
      </a>

      <Navbar locale={locale} />

      <main id="main" className="pt-16">
        {children}
      </main>

      <Footer locale={locale} />

      {process.env.NEXT_PUBLIC_UMAMI_ID && (
        <Script
          src="/api/umami/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          strategy="afterInteractive"
        />
      )}
    </NextIntlClientProvider>
  );
}
