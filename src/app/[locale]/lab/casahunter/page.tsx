import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { AiBadge } from '@/components/ui/AiBadge';
import { ArchitectureDiagram } from '@/components/ui/ArchitectureDiagram';
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
    path: '/lab/casahunter',
    title: t('casahunter.title'),
    description: t('casahunter.description'),
  });
}

/** Convert **bold** markdown to <strong> tags */
function markdownBold(text: string): string {
  return text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong>$1</strong>'
  );
}

export default async function CasaHunterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('caseStudies');

  const baseUrl = 'https://selfrules.org';
  const labName = locale === 'it' ? 'Lab' : 'Lab';
  const labUrl = locale === 'it' ? `${baseUrl}/it/lab` : `${baseUrl}/lab`;
  const pageUrl =
    locale === 'it'
      ? `${baseUrl}/it/lab/casahunter`
      : `${baseUrl}/lab/casahunter`;
  const homeUrl = locale === 'it' ? `${baseUrl}/it` : baseUrl;

  const originParagraphs = t.raw('casahunter.origin.content') as string[];
  const v1Paragraphs = t.raw('casahunter.v1.content') as string[];
  const turningPointParagraphs = t.raw('casahunter.turning_point.content') as string[];
  const approachParagraphs = t.raw('casahunter.approach.content') as string[];
  const saasParagraphs = t.raw('casahunter.saas.content') as string[];
  const resultItems = t.raw('casahunter.results.items') as {
    metric: string;
    label: string;
  }[];
  const learnedParagraphs = t.raw('casahunter.learned.content') as string[];

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
              name: labName,
              item: labUrl,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: t('casahunter.tag'),
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
              ? 'CasaHunter — Come ho costruito un tool che cerca casa al posto tuo'
              : 'CasaHunter — How I built a tool that apartment-hunts for you',
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
          href="/lab"
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
          {locale === 'it' ? 'Torna al Lab' : 'Back to Lab'}
        </Link>

        <span className="block font-mono text-[12px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.4)]">
          {t('casahunter.role')} · {t('casahunter.company')} · {t('casahunter.period')}
        </span>

        <div className="mt-5 flex items-start justify-between gap-4">
          <h1 className="font-heading font-bold text-[clamp(28px,4vw,48px)] leading-[1.15] tracking-[-1.2px] text-[#f5f5f0]">
            {locale === 'it'
              ? 'CasaHunter — Come ho costruito un tool che cerca casa al posto tuo'
              : 'CasaHunter — How I built a tool that apartment-hunts for you'}
          </h1>
          <div className="mt-1 flex-shrink-0">
            <AiBadge />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-8 md:gap-16">
          <div>
            <p className="font-heading font-bold text-[#e8a838] text-[48px] md:text-[72px] leading-[1] tracking-[-3.6px]">
              {t('casahunter.heroMetric')}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">
              {t('casahunter.heroMetricLabel')}
            </p>
          </div>
          <div>
            <p className="font-heading font-bold text-[#e8a838] text-[48px] md:text-[72px] leading-[1] tracking-[-3.6px]">
              {t('casahunter.secondMetric')}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">
              {t('casahunter.secondMetricLabel')}
            </p>
          </div>
        </div>
      </Section>

      {/* Body — prose sections */}
      <Section>
        <div
          className="max-w-none leading-[1.7]
            prose prose-invert
            prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
            prose-p:text-[var(--color-text-primary)]
            prose-strong:text-[var(--color-accent)] prose-strong:font-bold
            prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none"
        >
          {/* Origin */}
          <h2>{t('casahunter.origin.heading')}</h2>
          {originParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}
        </div>
      </Section>

      {/* V1 Dashboard — visual showcase */}
      <ScrollReveal>
        <Section wide>
          <h2 className="font-heading font-bold text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.8px] text-[#f5f5f0] mb-8">
            {t('casahunter.v1.heading')}
          </h2>

          <div
            className="max-w-[680px] leading-[1.7]
              prose prose-invert
              prose-p:text-[var(--color-text-primary)]
              prose-strong:text-[var(--color-accent)] prose-strong:font-bold mb-10"
          >
            {v1Paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
            ))}
          </div>

          {/* Screenshot grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[rgba(255,255,255,0.08)] overflow-hidden">
              <Image
                src="/images/casahunter/v1-map.png"
                alt={locale === 'it'
                  ? 'Dashboard CasaHunter v1 — Vista mappa con 1029 annunci colorati per score in Emilia-Romagna'
                  : 'CasaHunter v1 dashboard — Map view with 1029 score-colored listings across Emilia-Romagna'}
                width={1440}
                height={900}
                className="w-full h-auto"
                quality={85}
              />
              <div className="px-4 py-3 bg-[rgba(255,255,255,0.03)]">
                <p className="font-mono text-[11px] text-[rgba(255,255,255,0.4)]">
                  {locale === 'it'
                    ? 'Vista mappa — pin colorati per score (verde = alto, giallo = medio, rosso = basso)'
                    : 'Map view — score-colored pins (green = high, yellow = medium, red = low)'}
                </p>
              </div>
            </div>
            <div className="border border-[rgba(255,255,255,0.08)] overflow-hidden">
              <Image
                src="/images/casahunter/v1-lista.png"
                alt={locale === 'it'
                  ? 'Dashboard CasaHunter v1 — Vista lista con card di scoring AI, punteggi 100 Alto'
                  : 'CasaHunter v1 dashboard — List view with AI scoring cards, 100 High scores'}
                width={1440}
                height={900}
                className="w-full h-auto"
                quality={85}
              />
              <div className="px-4 py-3 bg-[rgba(255,255,255,0.03)]">
                <p className="font-mono text-[11px] text-[rgba(255,255,255,0.4)]">
                  {locale === 'it'
                    ? 'Vista lista — card con score AI, prezzo, metratura e analisi'
                    : 'List view — cards with AI score, price, size and analysis'}
                </p>
              </div>
            </div>
          </div>

          {/* Stats screenshot — full width */}
          <div className="mt-4 border border-[rgba(255,255,255,0.08)] overflow-hidden">
            <Image
              src="/images/casahunter/v1-stats.png"
              alt={locale === 'it'
                ? 'Dashboard CasaHunter v1 — Statistiche: 1029 annunci, 73 alto punteggio, prezzo medio 727€, 114 zone'
                : 'CasaHunter v1 dashboard — Statistics: 1029 listings, 73 high-scored, avg price €727, 114 zones'}
              width={1440}
              height={900}
              className="w-full h-auto"
              quality={85}
            />
            <div className="px-4 py-3 bg-[rgba(255,255,255,0.03)]">
              <p className="font-mono text-[11px] text-[rgba(255,255,255,0.4)]">
                {locale === 'it'
                  ? 'Statistiche — distribuzione prezzi, categorie di score, analisi zone'
                  : 'Statistics — price distribution, score categories, zone analysis'}
              </p>
            </div>
          </div>
        </Section>
      </ScrollReveal>

      {/* Turning point */}
      <Section>
        <div
          className="max-w-none leading-[1.7]
            prose prose-invert
            prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
            prose-p:text-[var(--color-text-primary)]
            prose-strong:text-[var(--color-accent)] prose-strong:font-bold
            prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none"
        >
          <h2>{t('casahunter.turning_point.heading')}</h2>
          {turningPointParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}
        </div>
      </Section>

      {/* Approach + Architecture */}
      <Section>
        <div
          className="max-w-none leading-[1.7]
            prose prose-invert
            prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
            prose-p:text-[var(--color-text-primary)]
            prose-strong:text-[var(--color-accent)] prose-strong:font-bold
            prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none"
        >
          <h2>{t('casahunter.approach.heading')}</h2>
          {approachParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="not-prose mt-12">
          <ArchitectureDiagram />
        </div>
      </Section>

      {/* SaaS Prototype */}
      <ScrollReveal>
        <Section>
          <div
            className="max-w-none leading-[1.7]
              prose prose-invert
              prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
              prose-p:text-[var(--color-text-primary)]
              prose-strong:text-[var(--color-accent)] prose-strong:font-bold"
          >
            <h2>{t('casahunter.saas.heading')}</h2>
            {saasParagraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
            ))}
          </div>

          {/* Figma prototype link */}
          <div className="mt-8 border border-[rgba(255,255,255,0.08)] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#F24E1E"/>
                <path d="M12 2h3.5a3.5 3.5 0 010 7H12V2z" fill="#FF7262"/>
                <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill="#1ABCFE"/>
                <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83"/>
                <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF"/>
              </svg>
              <span className="font-mono text-[12px] uppercase tracking-[1px] text-[rgba(255,255,255,0.5)]">
                {locale === 'it' ? 'Prototipo Figma' : 'Figma prototype'}
              </span>
            </div>
            <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.6] mb-4">
              {locale === 'it'
                ? 'Il design completo del SaaS: landing page, dashboard, flusso di onboarding, pricing.'
                : 'Full SaaS design: landing page, dashboard, onboarding flow, pricing.'}
            </p>
            <a
              href="https://www.figma.com/design/Dl9WeoDyuC0pcX9d3dVjDr/casahunter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-[#e8a838] hover:text-[#f0b84c] transition-colors"
              data-umami-event="lab-casahunter-figma"
            >
              {locale === 'it' ? 'Apri il prototipo' : 'Open the prototype'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </Section>
      </ScrollReveal>

      {/* Results */}
      <Section>
        <div
          className="max-w-none leading-[1.7]
            prose prose-invert
            prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]"
        >
          <h2>{t('casahunter.results.heading')}</h2>
        </div>
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
      </Section>

      {/* What I learned */}
      <Section>
        <div
          className="max-w-none leading-[1.7]
            prose prose-invert
            prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
            prose-p:text-[var(--color-text-primary)]
            prose-strong:text-[var(--color-accent)] prose-strong:font-bold
            prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none"
        >
          <h2>{t('casahunter.learned.heading')}</h2>
          {learnedParagraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: markdownBold(p) }} />
          ))}
        </div>
      </Section>

      <PageCTA
        text={t('cta.text')}
        primaryCta={{
          label: t('cta.primary'),
          href: '/lab',
        }}
        secondaryCta={{
          label: t('cta.secondary'),
          href: 'mailto:hello@selfrules.org',
        }}
      />
    </>
  );
}
