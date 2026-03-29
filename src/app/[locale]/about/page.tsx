import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Section } from '@/components/layout/Section';
import { VerticalTimeline } from '@/components/ui/VerticalTimeline';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/about',
    title: t('about.title'),
    description: t('about.description'),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const richBold = {
    bold: (chunks: React.ReactNode) => (
      <strong className="font-bold text-accent">{chunks}</strong>
    ),
  };

  const careerEntries = [
    {
      company: t('career.selfrules.company'),
      dates: t('career.selfrules.dates'),
      text: t.rich('career.selfrules.text', richBold),
      isActive: false,
      overlapBadge: t('career.overlapBadge'),
    },
    {
      company: t('career.flowing.company'),
      dates: t('career.flowing.dates'),
      text: t.rich('career.flowing.text', richBold),
      isActive: false,
    },
    {
      company: t('career.leadsbridge.company'),
      dates: t('career.leadsbridge.dates'),
      text: t.rich('career.leadsbridge.text', richBold),
      isActive: false,
    },
    {
      company: t('career.qubicamf.company'),
      dates: t('career.qubicamf.dates'),
      text: t.rich('career.qubicamf.text', richBold),
      isActive: true,
    },
  ];

  const beliefs = [
    {
      title: t('beliefs.belief1.title'),
      text: t('beliefs.belief1.text'),
    },
    {
      title: t('beliefs.belief2.title'),
      text: t('beliefs.belief2.text'),
    },
    {
      title: t('beliefs.belief3.title'),
      text: t('beliefs.belief3.text'),
    },
  ];

  const baseUrl = 'https://selfrules.org';
  const pageName = locale === 'it' ? 'Chi sono' : 'About';
  const pageUrl = locale === 'it' ? `${baseUrl}/it/about` : `${baseUrl}/about`;
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
          {t('subtitle')}
        </p>
      </Section>

      {/* Career Path — VerticalTimeline */}
      <ScrollReveal>
      <Section className="!pt-0">
        <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-6">
          {t('careerLabel')}
        </p>
        <VerticalTimeline>
          <ol className="list-none p-0 m-0">
            {careerEntries.map((entry, index) => (
              <li
                key={index}
                className={index < careerEntries.length - 1 ? 'mb-8 md:mb-12' : ''}
              >
                <div className="relative">
                  {/* Square node */}
                  <div
                    className={`absolute w-[10px] h-[10px] -left-[33px] md:-left-[41px] top-[6px] ${
                      entry.isActive
                        ? 'bg-accent'
                        : 'border-[1.5px] border-[#5a5a5e] bg-transparent'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Horizontal connector */}
                  <div
                    className="absolute top-[10px] -left-[23px] md:-left-[31px] w-[16px] md:w-[20px] h-[1px] bg-[#1a1a1f]"
                    aria-hidden="true"
                  />

                  {/* Content block */}
                  <div>
                    <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-accent mt-1">
                      {entry.dates}
                    </p>
                    <h2 className="font-heading font-medium text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.65px] text-[#f5f5f0] mt-2">
                      {entry.company}
                    </h2>
                    <div className="mt-4 font-light text-[17px] leading-[29.75px] text-[rgba(255,255,255,0.5)] whitespace-pre-line">
                      {entry.text}
                    </div>
                  </div>
                </div>

                {/* Overlap badge between nodes */}
                {'overlapBadge' in entry && entry.overlapBadge && (
                  <div className="relative mt-4 mb-[-16px]">
                    <span className="relative -left-[33px] md:-left-[41px] inline-flex items-center gap-1 font-mono text-[10px] text-[rgba(232,168,56,0.6)] border border-[rgba(232,168,56,0.3)] px-2 py-0.5">
                      {entry.overlapBadge}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </VerticalTimeline>
      </Section>
      </ScrollReveal>

      {/* What I believe — 3 principles */}
      <ScrollReveal>
      <Section>
        <div>
          <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-6">
            {t('beliefsLabel')}
          </p>
          {beliefs.map((belief, index) => (
            <div key={index} className={index < beliefs.length - 1 ? 'mb-8 md:mb-12' : ''}>
              <h2 className="font-heading font-medium text-[22px] leading-[1.3] tracking-[-0.55px] text-[#f5f5f0] md:whitespace-pre-line">
                {belief.title}
              </h2>
              <p className="mt-4 font-light text-[18px] leading-[32.4px] text-[rgba(255,255,255,0.5)]">
                {belief.text}
              </p>
            </div>
          ))}
        </div>
      </Section>
      </ScrollReveal>

      {/* Outside work — subtle divider above (D-03 Option B) */}
      <ScrollReveal>
      <Section className="!pt-0">
        <div className="mt-16 pt-16 border-t border-[#1a1a1f]">
          <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-6">
            {t('outsideLabel')}
          </p>
          <p className="font-light text-[17px] leading-[29.75px] text-[rgba(255,255,255,0.5)]">
            {t('outside.text')}
          </p>
        </div>
      </Section>
      </ScrollReveal>

      {/* PageCTA */}
      <PageCTA
        text={t('cta.text')}
        primaryCta={{ label: t('cta.primary'), href: locale === 'it' ? '/it/work' : '/work' }}
        secondaryCta={{ label: t('cta.secondary'), href: 'mailto:hello@selfrules.org' }}
      />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
