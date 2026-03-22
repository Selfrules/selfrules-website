import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('homepage');

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
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
