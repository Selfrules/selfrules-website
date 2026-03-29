import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Section } from '@/components/layout/Section';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/contact',
    title: t('contact.title'),
    description: t('contact.description'),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  const baseUrl = 'https://selfrules.org';
  const pageName = locale === 'it' ? 'Parliamo' : 'Contact';
  const pageUrl = locale === 'it' ? `${baseUrl}/it/contact` : `${baseUrl}/contact`;
  const homeUrl = locale === 'it' ? `${baseUrl}/it` : baseUrl;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": homeUrl },
          { "@type": "ListItem", "position": 2, "name": pageName, "item": pageUrl }
        ]
      }} />

      {/* Headline */}
      <Section>
        <h1 className="font-heading font-bold text-[32px] md:text-[48px] leading-[36px] md:leading-[52.8px] tracking-[-1.2px] text-[#f5f5f0] md:whitespace-pre-line">
          {t('headline')}
        </h1>
        <p className="mt-4 font-light text-[19px] leading-[30.4px] text-[rgba(255,255,255,0.6)]">
          {t('intro')}
        </p>
      </Section>

      {/* Contact Details */}
      <ScrollReveal>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Email */}
          <div>
            <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-4">
              {t('emailLabel')}
            </p>
            <a
              href={`mailto:${t('emailValue')}`}
              className="font-heading font-medium text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.65px] text-[#E8A838] hover:text-[#f5f5f0] transition-colors duration-150"
              data-umami-event="contact-email"
            >
              {t('emailValue')}
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-4">
              {t('linkedinLabel')}
            </p>
            <a
              href={t('linkedinUrl')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-medium text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.65px] text-[#E8A838] hover:text-[#f5f5f0] transition-colors duration-150"
              data-umami-event="contact-linkedin"
            >
              {t('linkedinValue')}
            </a>
          </div>

          {/* CV Download */}
          <div>
            <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-4">
              {t('cvLabel')}
            </p>
            <a
              href="/mattia-de-luca-cv.pdf"
              download
              className="inline-flex items-center gap-2 font-heading font-medium text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.65px] text-[#E8A838] hover:text-[#f5f5f0] transition-colors duration-150"
              data-umami-event="contact-cv-download"
            >
              {t('cvValue')}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </Section>
      </ScrollReveal>

      {/* Availability */}
      <ScrollReveal>
      <Section className="!pt-0">
        <div className="mt-16 pt-16 border-t border-[#1a1a1f]">
          <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-6">
            {t('availabilityLabel')}
          </p>
          <p className="font-light text-[17px] leading-[29.75px] text-[rgba(255,255,255,0.5)]">
            {t('availabilityText')}
          </p>
        </div>
      </Section>
      </ScrollReveal>

      {/* CTA */}
      <PageCTA
        text={t('cta.text')}
        primaryCta={{ label: t('cta.primary'), href: `mailto:hello@selfrules.org` }}
        secondaryCta={{ label: t('cta.secondary'), href: t('linkedinUrl') }}
      />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
