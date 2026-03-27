import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/layout/Section';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { CaseStudySummary } from '@/components/ui/CaseStudySummary';
import { PullQuote } from '@/components/ui/PullQuote';
import { KeyInsight } from '@/components/ui/KeyInsight';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/work/cashless-system',
    title: t('cashlessSystem.title'),
    description: t('cashlessSystem.description'),
  });
}

/** Convert **bold** markdown to <strong> tags */
function markdownBold(text: string): string {
  return text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong>$1</strong>'
  );
}

export default async function CashlessSystemPage({
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
      ? `${baseUrl}/it/work/cashless-system`
      : `${baseUrl}/work/cashless-system`;
  const homeUrl = locale === 'it' ? `${baseUrl}/it` : baseUrl;

  const contextParagraphs = t.raw('cashless.context.content') as string[];
  const challengeParagraphs = t.raw('cashless.challenge.content') as string[];
  const approachParagraphs = t.raw('cashless.approach.content') as string[];
  const resultItems = t.raw('cashless.results.items') as {
    metric: string;
    label: string;
  }[];
  const learnedParagraphs = t.raw('cashless.learned.content') as string[];
  const patternItems = t.raw('cashless.patterns.items') as {
    title: string;
    content: string;
  }[];

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
              name: t('cashless.tag'),
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
              ? 'Come un prodotto cashless è passato da zero al partner di integrazione giusto'
              : 'How a cashless product went from zero to the right integration partner',
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
          {t('cashless.role')} · {t('cashless.company')} · {t('cashless.period')}
        </span>

        <h1 className="mt-5 font-heading font-bold text-[clamp(28px,4vw,48px)] leading-[1.15] tracking-[-1.2px] text-[#f5f5f0]">
          {locale === 'it'
            ? 'Come un prodotto cashless è passato da zero al partner di integrazione giusto'
            : 'How a cashless product went from zero to the right integration partner'}
        </h1>

        <div className="mt-10 flex flex-wrap gap-8 md:gap-16">
          <div>
            <p className="font-heading font-bold text-[#e8a838] text-[48px] md:text-[72px] leading-[1] tracking-[-3.6px]">
              {t('cashless.heroMetric')}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">
              {t('cashless.heroMetricLabel')}
            </p>
          </div>
          <div>
            <p className="font-heading font-bold text-[#e8a838] text-[48px] md:text-[72px] leading-[1] tracking-[-3.6px]">
              {t('cashless.secondMetric')}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">
              {t('cashless.secondMetricLabel')}
            </p>
          </div>
        </div>
      </Section>

      {/* Case Study Summary */}
      <Section>
        <CaseStudySummary
          role={t('cashless.role')}
          period={t('cashless.period')}
          industry={t('cashless.industry')}
          metrics={[
            { value: t('cashless.heroMetric'), label: t('cashless.heroMetricLabel') },
            { value: t('cashless.secondMetric'), label: t('cashless.secondMetricLabel') },
            { value: resultItems[1]?.metric || '1', label: resultItems[1]?.label || 'co-development partnership' },
          ]}
          summary={t('cashless.summary')}
          labels={{ role: t('summaryLabels.role'), period: t('summaryLabels.period'), industry: t('summaryLabels.industry') }}
        />
      </Section>

      {/* TL;DR + Key Insight */}
      <Section>
        <div className="max-w-none leading-[1.7] prose prose-invert prose-p:text-[var(--color-text-primary)]">
          <p className="text-[18px] md:text-[20px] leading-[1.7] text-[rgba(255,255,255,0.7)]">
            {t('cashless.tldr')}
          </p>
        </div>
        <KeyInsight>{t('cashless.learnedCallout')}</KeyInsight>
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
          <h2>{t('cashless.context.heading')}</h2>
          {contextParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}

          {/* Challenge */}
          <h2>{t('cashless.challenge.heading')}</h2>
          {challengeParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}

          {/* Approach */}
          <h2>{t('cashless.approach.heading')}</h2>
          {approachParagraphs.slice(0, 2).map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}
          <PullQuote>{t('cashless.pullQuote1')}</PullQuote>
          {approachParagraphs.slice(2, 4).map((p, i) => (
            <p key={i + 2} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}
          <PullQuote>{t('cashless.pullQuote2')}</PullQuote>
          {approachParagraphs.slice(4).map((p, i) => (
            <p key={i + 4} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}

          {/* Results */}
          <h2>{t('cashless.results.heading')}</h2>
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
          <h2 className="mt-16">{t('cashless.learned.heading')}</h2>
          {learnedParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}

          {/* Patterns */}
          <h2 className="mt-16">{t('cashless.patterns.heading')}</h2>
          {patternItems.map((item, i) => (
            <div key={i} className="mt-8">
              <h3 className="font-heading font-bold text-[16px] leading-[1.5] tracking-[-0.5px] text-[#f5f5f0]">
                {item.title}
              </h3>
              <p className="mt-3">{item.content}</p>
            </div>
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
