import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/layout/Section';
import { Tag } from '@/components/ui/Tag';
import { PageCTA } from '@/components/sections/page-cta';

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
  return [{ locale: 'en' }, { locale: 'it' }];
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('lab');

  const problemHeading = locale === 'it' ? 'Il problema' : 'The problem';
  const whatItDoesHeading = locale === 'it' ? 'Cosa fa' : 'What it does';
  const productDecisionHeading =
    locale === 'it' ? 'La decisione di prodotto' : 'The product decision';
  const comingSoonHeading =
    locale === 'it' ? 'Prossimamente' : 'Coming soon';

  return (
    <>
      {/* Headline + Intro */}
      <Section>
        <h1 className="font-heading text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-primary">
          {t('headline')}
        </h1>
        <p className="mt-6 text-base leading-[1.7] text-secondary">
          {t('intro')}
        </p>
      </Section>

      {/* CasaHunter expanded section (D-06) */}
      <Section>
        <div className="flex flex-col gap-8">
          {/* Project title + one-liner */}
          <div>
            <h2 className="font-heading text-xl font-bold text-primary">
              CasaHunter
            </h2>
            <p className="mt-6 text-base leading-[1.6] text-secondary">
              {t('casahunter.oneLiner')}
            </p>
          </div>

          {/* The problem */}
          <div>
            <h3 className="font-heading text-xl font-bold text-primary">
              {problemHeading}
            </h3>
            <p className="mt-4 text-base leading-[1.6] text-primary">
              {t('casahunter.problem')}
            </p>
          </div>

          {/* What it does */}
          <div>
            <h3 className="font-heading text-xl font-bold text-primary">
              {whatItDoesHeading}
            </h3>
            <p className="mt-4 text-base leading-[1.6] text-primary">
              {t('casahunter.whatItDoes')}
            </p>
          </div>

          {/* The product decision */}
          <div>
            <h3 className="font-heading text-xl font-bold text-primary">
              {productDecisionHeading}
            </h3>
            <p className="mt-4 text-base leading-[1.6] text-primary">
              {t('casahunter.productDecision')}
            </p>
          </div>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2">
            {CASAHUNTER_STACK.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-accent" data-status-dot />
            <span className="font-mono text-sm text-secondary">
              {t('casahunter.status')}
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {/* TODO: Replace with actual URLs */}
            <a
              href="#"
              className="text-secondary transition-colors duration-150 hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-secondary transition-colors duration-150 hover:text-accent"
            >
              {locale === 'it' ? 'Dashboard live' : 'Live dashboard'}
            </a>
          </div>
        </div>
      </Section>

      {/* MoneyMind "Coming soon" */}
      <Section>
        <div className="mt-[-16px]">
          <h2 className="font-heading text-xl font-bold text-primary">
            {t('moneymind.title')}
          </h2>
          <p className="mt-4 text-base leading-[1.6] text-secondary">
            {t('moneymind.oneLiner')}
          </p>
        </div>
      </Section>

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
