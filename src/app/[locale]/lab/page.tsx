import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata, buildLocalizedUrl } from '@/lib/metadata';
import Image from 'next/image';
import { LOCALE_PARAMS } from '@/i18n/routing';
import { Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PageCTA } from '@/components/sections/page-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const CASAHUNTER_STACK = [
  'Python 3.11',
  'SQLite',
  'Claude Sonnet',
  'React 18',
  'Tailwind',
  'Leaflet',
  'Recharts',
  'Telegram API',
  'GitHub Actions',
];

export function generateStaticParams() {
  return LOCALE_PARAMS;
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/lab',
    title: t('lab.title'),
    description: t('lab.description'),
  });
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('lab');

  const pageUrl = buildLocalizedUrl(locale, '/lab');
  const homeUrl = buildLocalizedUrl(locale);

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": homeUrl },
          { "@type": "ListItem", "position": 2, "name": "Lab", "item": pageUrl }
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

        <div className="mt-8 w-full overflow-hidden" style={{ borderRadius: 0 }}>
          <Image
            src="/images/ui/lab.png"
            alt="Wireframe illustration of a laboratory flask — hello@selfrules.org ~ $ experiment --run"
            width={1380}
            height={776}
            className="w-full h-auto"
            priority
          />
        </div>
      </Section>

      {/* CasaHunter — the only shipped project */}
      <ScrollReveal>
        <Section wide>
          <ProjectCard
            title={t('casahunter.title')}
            description={t('casahunter.description')}
            techStack={CASAHUNTER_STACK}
            status={'active' as const}
            statusLabel={t('casahunter.statusLabel')}
            whatItTaughtMe={t('casahunter.whatItTaughtMe')}
            whatItTaughtMeLabel={t('whatItTaughtMeLabel')}
            href={locale === 'it' ? '/it/lab/casahunter' : '/lab/casahunter'}
          />
        </Section>
      </ScrollReveal>

      {/* PageCTA */}
      <PageCTA
        text={t('cta.text')}
        primaryCta={{
          label: t('cta.primary'),
          href: locale === 'it' ? '/it/work' : '/work',
        }}
      />
    </>
  );
}
