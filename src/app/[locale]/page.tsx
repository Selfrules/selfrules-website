import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { WhatIDo } from '@/components/sections/WhatIDo';
import { HowIWork } from '@/components/sections/HowIWork';
import { Timeline } from '@/components/sections/Timeline';
import { Metrics } from '@/components/sections/Metrics';
import { CurrentWork } from '@/components/sections/CurrentWork';
import { Contact } from '@/components/sections/Contact';
import { JsonLd } from '@/components/seo/json-ld';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const meta = createPageMetadata({
    locale,
    path: '/',
    title: t('home.title'),
    description: t('home.description'),
  });
  return { ...meta, title: { absolute: t('home.title') } };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('homepage');

  const richBold = {
    b: (chunks: React.ReactNode) => (
      <strong className="font-bold text-accent">{chunks}</strong>
    ),
  };

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mattia De Luca",
        "jobTitle": "Senior Technical Product Manager",
        "url": "https://selfrules.org",
        "sameAs": [
          "https://linkedin.com/in/selfrules",
          "https://github.com/selfrules"
        ]
      }} />
      <Hero
        headline={t('hero.headline')}
        subtitle={t('hero.subtitle')}
        primaryCta={t('hero.primaryCta')}
        secondaryCta={t('hero.secondaryCta')}
        tags={[t('hero.tag1'), t('hero.tag2'), t('hero.tag3'), t('hero.tag4')]}
        terminalPrompt={t('hero.terminalPrompt')}
        signaturePhrase={t('hero.signaturePhrase')}
      />

      <ScrollReveal>
        <WhatIDo
          label={t('whatIDo.label')}
          title={t('whatIDo.title')}
          text={t('whatIDo.text')}
        />
      </ScrollReveal>

      <ScrollReveal>
        <HowIWork
          label={t('howIWork.label')}
          title={t('howIWork.title')}
          intro={t('howIWork.intro')}
          pillars={[
            {
              title: t('howIWork.pillar1.title'),
              text: t.rich('howIWork.pillar1.text', richBold),
              shortText: t.rich('howIWork.pillar1.shortText', richBold),
            },
            {
              title: t('howIWork.pillar2.title'),
              text: t.rich('howIWork.pillar2.text', richBold),
              shortText: t.rich('howIWork.pillar2.shortText', richBold),
            },
            {
              title: t('howIWork.pillar3.title'),
              text: t.rich('howIWork.pillar3.text', richBold),
              shortText: t.rich('howIWork.pillar3.shortText', richBold),
            },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Timeline
          label={t('timeline.label')}
          title={t('timeline.title')}
          blocks={[
            {
              role: t('timeline.block1.role'),
              dates: t('timeline.block1.dates'),
              company: t('timeline.block1.company'),
              text: t.rich('timeline.block1.text', richBold),
              shortText: t('timeline.block1.shortText'),
            },
            {
              role: t('timeline.block2.role'),
              dates: t('timeline.block2.dates'),
              company: t('timeline.block2.company'),
              text: t.rich('timeline.block2.text', richBold),
              shortText: t('timeline.block2.shortText'),
            },
            {
              role: t('timeline.block3.role'),
              dates: t('timeline.block3.dates'),
              company: t('timeline.block3.company'),
              text: t.rich('timeline.block3.text', richBold),
              shortText: t('timeline.block3.shortText'),
            },
            {
              role: t('timeline.block4.role'),
              dates: t('timeline.block4.dates'),
              company: t('timeline.block4.company'),
              text: t.rich('timeline.block4.text', richBold),
              shortText: t('timeline.block4.shortText'),
            },
          ]}
          closingLine={t('timeline.closingLine')}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Metrics
          label={t('metrics.label')}
          title={t('metrics.title')}
          metrics={[
            { number: t('metrics.metric6.number'), label: t('metrics.metric6.label'), context: t('metrics.metric6.context') },
            { number: t('metrics.metric5.number'), label: t('metrics.metric5.label'), context: t('metrics.metric5.context') },
            { number: t('metrics.metric2.number'), label: t('metrics.metric2.label'), context: t('metrics.metric2.context') },
            { number: t('metrics.metric1.number'), label: t('metrics.metric1.label'), context: t('metrics.metric1.context') },
            { number: t('metrics.metric3.number'), label: t('metrics.metric3.label'), context: t('metrics.metric3.context') },
            { number: t('metrics.metric4.number'), label: t('metrics.metric4.label'), context: t('metrics.metric4.context') },
          ]}
          linkText={t('metrics.link')}
          linkHref="/work"
        />
      </ScrollReveal>

      <ScrollReveal>
        <CurrentWork
          label={t('currentWork.label')}
          title={t('currentWork.title')}
          cards={[
            { title: t('currentWork.card1.title'), text: t('currentWork.card1.text'), status: 'active', statusLabel: t('currentWork.card1.statusLabel') },
            { title: t('currentWork.card2.title'), text: t('currentWork.card2.text'), status: 'shipped', statusLabel: t('currentWork.card2.statusLabel') },
            { title: t('currentWork.card3.title'), text: t('currentWork.card3.text'), status: 'experiment', statusLabel: t('currentWork.card3.statusLabel') },
          ]}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Contact
          label={t('contact.label')}
          title={t('contact.title')}
          text={t('contact.text')}
          email={t('contact.email')}
          linkedinLabel={t('contact.linkedinLabel')}
          linkedinHref="https://linkedin.com/in/selfrules"
          cvLabel={t('contact.cvLabel')}
          cvHref="/mattia-de-luca-cv.pdf"
          availability={t('contact.availability')}
        />
      </ScrollReveal>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
