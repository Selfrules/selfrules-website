import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/layout/Section';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { PageCTA } from '@/components/sections/page-cta';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('work');

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

      {/* Case Study Cards */}
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
