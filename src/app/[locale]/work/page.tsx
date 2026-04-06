import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata, buildLocalizedUrl } from '@/lib/metadata';
import { LOCALE_PARAMS } from '@/i18n/routing';
import { Section } from '@/components/layout/Section';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function generateStaticParams() {
  return LOCALE_PARAMS;
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/work',
    title: t('work.title'),
    description: t('work.description'),
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('work');

  const pageName = locale === 'it' ? 'Lavori' : 'Work';
  const pageUrl = buildLocalizedUrl(locale, '/work');
  const homeUrl = buildLocalizedUrl(locale);

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
      {/* Headline + Intro */}
      <Section>
        <h1 className="font-heading font-bold text-[32px] md:text-[48px] leading-[36px] md:leading-[52.8px] tracking-[-1.2px] text-[#f5f5f0] md:whitespace-pre-line">
          {t('headline')}
        </h1>
        <p className="mt-6 font-light text-[19px] leading-[30.4px] text-[rgba(255,255,255,0.6)]">
          {t('intro')}
        </p>
        <p className="mt-8 text-[17px] leading-[28px] text-[rgba(255,255,255,0.45)]">
          {t('metaNarrative')}
        </p>
      </Section>

      {/* Case Study Cards */}
      <ScrollReveal>
      <Section wide>
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Card 1: Payments Rescue */}
          <CaseStudyCard
            tag={t('cases.payments.tag')}
            title={t('cases.payments.title')}
            preview={t('cases.payments.preview')}
            metric={t('cases.payments.metric')}
            metricLabel={t('cases.payments.metricLabel')}
            href="/work/payments-rescue"
          />

          {/* Card 2: Cashless System */}
          <div>
            <CaseStudyCard
              tag={t('cases.cashless.tag')}
              title={t('cases.cashless.title')}
              preview={t('cases.cashless.preview')}
              metric={t('cases.cashless.metric')}
              metricLabel={t('cases.cashless.metricLabel')}
              href="/work/cashless-system"
            />
            <p className="mt-3 font-mono text-[14px] text-[rgba(255,255,255,0.55)]">
              {t('cases.cashless.note')}
            </p>
          </div>

          {/* Card 3: LeadsBridge Redesign */}
          <CaseStudyCard
            tag={t('cases.leadsbridge.tag')}
            title={t('cases.leadsbridge.title')}
            preview={t('cases.leadsbridge.preview')}
            metric={t('cases.leadsbridge.metric')}
            metricLabel={t('cases.leadsbridge.metricLabel')}
            href="/work/leadsbridge-redesign"
          />
        </div>
      </Section>
      </ScrollReveal>

      {/* PageCTA */}
      <PageCTA
        text={t('cta.text')}
        primaryCta={{
          label: t('cta.primary'),
          href: locale === 'it' ? '/it/about' : '/about',
        }}
        secondaryCta={{
          label: t('cta.secondary'),
          href: 'mailto:hello@selfrules.org',
        }}
      />
    </>
  );
}
