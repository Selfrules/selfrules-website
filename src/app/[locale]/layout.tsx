import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import Script from 'next/script';
import { inter, spaceGrotesk, jetbrainsMono } from '@/lib/fonts';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PageTransition } from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  metadataBase: new URL('https://selfrules.org'),
  title: {
    template: '%s \u2014 Mattia De Luca',
    default: 'Mattia De Luca \u2014 Senior Technical Product Manager | B2B SaaS . Payments',
  },
};

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
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans bg-primary text-text-primary antialiased">
        <NextIntlClientProvider messages={messages}>
          {/* Skip to content -- sr-only, visible on keyboard focus (A11Y-01) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-[#0A0A0B] focus:px-4 focus:py-2 focus:font-bold focus:text-sm"
          >
            {t('skipToContent')}
          </a>

          <Navbar locale={locale} />

          <main id="main-content" className="pt-16">
            <PageTransition>
              {children}
            </PageTransition>
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
      </body>
    </html>
  );
}
