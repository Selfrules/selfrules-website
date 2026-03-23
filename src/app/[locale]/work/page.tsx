import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Section } from '@/components/layout/Section';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
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

  const baseUrl = 'https://selfrules.org';
  const pageName = locale === 'it' ? 'Lavori' : 'Work';
  const pageUrl = locale === 'it' ? `${baseUrl}/it/work` : `${baseUrl}/work`;
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
      {/* Headline + Intro */}
      <Section>
        <h1 className="font-heading text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-primary">
          {t('headline')}
        </h1>
        <p className="mt-6 text-base leading-[1.7] text-secondary">
          {t('intro')}
        </p>
      </Section>

      {/* Case Study Cards */}
      <ScrollReveal>
      <Section wide>
        <div className="flex flex-col gap-8">
          {/* Card 1: Payments Rescue */}
          <CaseStudyCard
            tag={t('cases.payments.tag')}
            title={t('cases.payments.title')}
            preview={t('cases.payments.preview')}
            metric={t('cases.payments.metric')}
          />

          {/* Card 2: Cashless System */}
          <div>
            <CaseStudyCard
              tag={t('cases.cashless.tag')}
              title={t('cases.cashless.title')}
              preview={t('cases.cashless.preview')}
              metric={t('cases.cashless.metric')}
            />
            <p className="mt-3 font-mono text-sm text-secondary">
              {t('cases.cashless.note')}
            </p>
          </div>
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
          href: 'mailto:mattia@selfrules.org',
        }}
      />
    </>
  );
}
