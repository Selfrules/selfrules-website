import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { HowIWork } from '@/components/sections/HowIWork';
import { Timeline } from '@/components/sections/Timeline';
import { Metrics } from '@/components/sections/Metrics';
import { CurrentWork } from '@/components/sections/CurrentWork';
import { Contact } from '@/components/sections/Contact';

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
      <Hero
        headline={t('hero.headline')}
        subtitle={t('hero.subtitle')}
        primaryCta={t('hero.primaryCta')}
        secondaryCta={t('hero.secondaryCta')}
        tags={[t('hero.tag1'), t('hero.tag2'), t('hero.tag3'), t('hero.tag4')]}
        terminalPrompt={t('hero.terminalPrompt')}
        signaturePhrase={t('hero.signaturePhrase')}
      />

      <HowIWork
        label={t('howIWork.label')}
        title={t('howIWork.title')}
        intro={t('howIWork.intro')}
        pillars={[
          {
            title: t('howIWork.pillar1.title'),
            text: t.rich('howIWork.pillar1.text', richBold),
          },
          {
            title: t('howIWork.pillar2.title'),
            text: t.rich('howIWork.pillar2.text', richBold),
          },
          {
            title: t('howIWork.pillar3.title'),
            text: t.rich('howIWork.pillar3.text', richBold),
          },
        ]}
      />

      <Timeline
        label={t('timeline.label')}
        title={t('timeline.title')}
        blocks={[
          {
            role: t('timeline.block1.role'),
            dates: t('timeline.block1.dates'),
            text: t.rich('timeline.block1.text', richBold),
          },
          {
            role: t('timeline.block2.role'),
            dates: t('timeline.block2.dates'),
            text: t.rich('timeline.block2.text', richBold),
          },
          {
            role: t('timeline.block3.role'),
            dates: t('timeline.block3.dates'),
            text: t.rich('timeline.block3.text', richBold),
          },
          {
            role: t('timeline.block4.role'),
            dates: t('timeline.block4.dates'),
            text: t.rich('timeline.block4.text', richBold),
          },
        ]}
        closingLine={t('timeline.closingLine')}
      />

      <Metrics
        label={t('metrics.label')}
        title={t('metrics.title')}
        metrics={[
          { number: t('metrics.metric1.number'), label: '', context: t('metrics.metric1.context') },
          { number: t('metrics.metric2.number'), label: '', context: t('metrics.metric2.context') },
          { number: t('metrics.metric3.number'), label: '', context: t('metrics.metric3.context') },
          { number: t('metrics.metric4.number'), label: '', context: t('metrics.metric4.context') },
          { number: t('metrics.metric5.number'), label: '', context: t('metrics.metric5.context') },
          { number: t('metrics.metric6.number'), label: '', context: t('metrics.metric6.context') },
        ]}
        linkText={t('metrics.link')}
        linkHref="/work"
      />

      <CurrentWork
        label={t('currentWork.label')}
        title={t('currentWork.title')}
        cards={[
          { title: t('currentWork.card1.title'), text: t('currentWork.card1.text') },
          { title: t('currentWork.card2.title'), text: t('currentWork.card2.text') },
        ]}
      />

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
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
