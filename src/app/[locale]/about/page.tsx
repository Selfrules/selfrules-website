import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/layout/Section';
import { VerticalTimeline } from '@/components/ui/VerticalTimeline';
import { PageCTA } from '@/components/sections/page-cta';

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

  return (
    <>
      {/* Headline */}
      <Section>
        <h1 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-primary">
          {t('headline')}
        </h1>
      </Section>

      {/* Career Path — VerticalTimeline */}
      <Section className="!pt-0">
        <VerticalTimeline>
          <ol className="list-none p-0 m-0">
            {careerEntries.map((entry, index) => (
              <li
                key={index}
                className={index < careerEntries.length - 1 ? 'mb-12' : ''}
              >
                <div className="relative">
                  {/* Square node */}
                  <div
                    className={`absolute w-[10px] h-[10px] -left-[33px] md:-left-[41px] top-[6px] ${
                      entry.isActive
                        ? 'bg-accent'
                        : 'border border-default bg-transparent'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Horizontal connector */}
                  <div
                    className="absolute top-[10px] -left-[23px] md:-left-[31px] w-[16px] md:w-[20px] h-[1px] bg-[var(--border-default)]"
                    aria-hidden="true"
                  />

                  {/* Content block */}
                  <div>
                    <h2 className="font-heading font-bold text-[20px] leading-[1.3] text-primary">
                      {entry.company}
                    </h2>
                    <p className="font-mono text-[14px] uppercase tracking-[0.05em] text-secondary mt-1">
                      {entry.dates}
                    </p>
                    <div className="mt-4 text-base leading-[1.6] text-primary whitespace-pre-line">
                      {entry.text}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </VerticalTimeline>
      </Section>

      {/* What I believe — 3 principles */}
      <Section className="!pt-0">
        <div className="mt-16">
          {beliefs.map((belief, index) => (
            <div key={index} className={index < beliefs.length - 1 ? 'mb-12' : ''}>
              <h2 className="font-heading font-bold text-[20px] leading-[1.3] text-primary">
                {belief.title}
              </h2>
              <p className="mt-4 text-base leading-[1.6] text-primary">
                {belief.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outside work — subtle divider above (D-03 Option B) */}
      <Section className="!pt-0">
        <div className="mt-16 pt-16 border-t border-default">
          <p className="text-base leading-[1.6] text-primary">
            {t('outside.text')}
          </p>
        </div>
      </Section>

      {/* PageCTA */}
      <PageCTA
        text={t('cta.text')}
        primaryCta={{ label: t('cta.primary'), href: 'mailto:mattia@selfrules.org' }}
      />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
