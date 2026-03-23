import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Section } from '@/components/layout/Section';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/approach',
    title: t('approach.title'),
    description: t('approach.description'),
  });
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('approach');

  const richBold = {
    bold: (chunks: React.ReactNode) => (
      <strong className="font-bold text-accent">{chunks}</strong>
    ),
  };

  const sections = ['s1', 's2', 's3', 's4', 's5'] as const;

  const baseUrl = 'https://selfrules.org';
  const pageName = locale === 'it' ? 'Approccio' : 'Approach';
  const pageUrl = locale === 'it' ? `${baseUrl}/it/approach` : `${baseUrl}/approach`;
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
        <h1 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-primary">
          {t('headline')}
        </h1>
        <p className="mt-6 text-base leading-[1.7] text-secondary">
          {t('intro')}
        </p>
      </Section>

      {/* 5 numbered sections */}
      <ScrollReveal>
      <Section className="!pt-0">
        <div className="mt-12">
          {sections.map((key, index) => (
            <div key={key} className={index < sections.length - 1 ? 'mb-16' : ''}>
              <h2 className="font-heading font-bold text-[20px] leading-[1.3] text-primary">
                {t(`sections.${key}.title`)}
              </h2>
              <div className="mt-4 text-base leading-[1.6] text-primary whitespace-pre-line">
                {t.rich(`sections.${key}.text`, richBold)}
              </div>
            </div>
          ))}
        </div>
      </Section>
      </ScrollReveal>

      {/* Closing text */}
      <ScrollReveal>
      <Section className="!pt-0">
        <div className="mt-16">
          <p className="text-base leading-[1.7] text-primary whitespace-pre-line">
            {t('closing.text')}
          </p>
        </div>
      </Section>
      </ScrollReveal>

      {/* PageCTA */}
      <PageCTA
        text={t('cta.text')}
        primaryCta={{ label: t('cta.primary'), href: `/${locale === 'it' ? 'it/' : ''}work` }}
      />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
