import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/layout/Section';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/work/leadsbridge-redesign',
    title: t('leadsbridgeRedesign.title'),
    description: t('leadsbridgeRedesign.description'),
  });
}

/** Convert **bold** markdown to <strong> tags */
function markdownBold(text: string): string {
  return text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong>$1</strong>'
  );
}

export default async function LeadsBridgePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('caseStudies');

  const baseUrl = 'https://selfrules.org';
  const workName = locale === 'it' ? 'Lavori' : 'Work';
  const workUrl = locale === 'it' ? `${baseUrl}/it/work` : `${baseUrl}/work`;
  const pageUrl =
    locale === 'it'
      ? `${baseUrl}/it/work/leadsbridge-redesign`
      : `${baseUrl}/work/leadsbridge-redesign`;
  const homeUrl = locale === 'it' ? `${baseUrl}/it` : baseUrl;

  const contextParagraphs = t.raw('leadsbridge.context.content') as string[];
  const challengeParagraphs = t.raw('leadsbridge.challenge.content') as string[];
  const approachParagraphs = t.raw('leadsbridge.approach.content') as string[];
  const resultItems = t.raw('leadsbridge.results.items') as {
    metric: string;
    label: string;
  }[];
  const learnedParagraphs = t.raw('leadsbridge.learned.content') as string[];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: homeUrl },
            {
              '@type': 'ListItem',
              position: 2,
              name: workName,
              item: workUrl,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: t('leadsbridge.tag'),
              item: pageUrl,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            locale === 'it'
              ? '380+ integrazioni, e la maggior parte degli utenti non ne finiva nemmeno una'
              : '380+ integrations, and most users never finished setting one up',
          author: {
            '@type': 'Person',
            name: 'Mattia De Luca',
            url: 'https://selfrules.org',
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        }}
      />

      {/* Header */}
      <Section>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[14px] text-[rgba(255,255,255,0.5)] hover:text-accent transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t('backToWork')}
        </Link>

        <span className="block font-mono text-[12px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.4)]">
          {t('leadsbridge.role')} · {t('leadsbridge.company')} · {t('leadsbridge.period')}
        </span>

        <h1 className="mt-5 font-heading font-bold text-[clamp(28px,4vw,48px)] leading-[1.15] tracking-[-1.2px] text-[#f5f5f0]">
          {locale === 'it'
            ? '380+ integrazioni, e la maggior parte degli utenti non ne finiva nemmeno una'
            : '380+ integrations, and most users never finished setting one up'}
        </h1>

        <div className="mt-10 flex flex-wrap gap-8 md:gap-16">
          <div>
            <p className="font-heading font-bold text-[#e8a838] text-[48px] md:text-[72px] leading-[1] tracking-[-3.6px]">
              {t('leadsbridge.heroMetric')}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">
              {t('leadsbridge.heroMetricLabel')}
            </p>
          </div>
          <div>
            <p className="font-heading font-bold text-[#e8a838] text-[48px] md:text-[72px] leading-[1] tracking-[-3.6px]">
              {t('leadsbridge.secondMetric')}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">
              {t('leadsbridge.secondMetricLabel')}
            </p>
          </div>
        </div>
      </Section>

      {/* Body */}
      <Section>
        <div
          className="max-w-none leading-[1.7]
            prose prose-invert
            prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
            prose-p:text-[var(--color-text-primary)]
            prose-strong:text-[var(--color-accent)] prose-strong:font-bold
            prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none"
        >
          {/* Context */}
          <h2>{t('leadsbridge.context.heading')}</h2>
          {contextParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}

          {/* Challenge */}
          <h2>{t('leadsbridge.challenge.heading')}</h2>
          {challengeParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}

          {/* Approach */}
          <h2>{t('leadsbridge.approach.heading')}</h2>
          {approachParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}

          {/* Results */}
          <h2>{t('leadsbridge.results.heading')}</h2>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            {resultItems.map((item, i) => (
              <div key={i}>
                <p className="font-heading font-bold text-[#e8a838] text-[32px] leading-[1] tracking-[-1.5px]">
                  {item.metric}
                </p>
                <p className="mt-2 font-light text-[15px] leading-[22.5px] text-[rgba(255,255,255,0.6)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* What I learned */}
          <h2 className="mt-16">{t('leadsbridge.learned.heading')}</h2>
          {learnedParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}
        </div>
      </Section>

      <PageCTA
        text={t('cta.text')}
        primaryCta={{
          label: t('cta.primary'),
          href: '/about',
        }}
        secondaryCta={{
          label: t('cta.secondary'),
          href: 'mailto:hello@selfrules.org',
        }}
      />
    </>
  );
}
