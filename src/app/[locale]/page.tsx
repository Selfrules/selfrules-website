import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('placeholder');

  return (
    <main className="min-h-screen flex items-center justify-center px-(--spacing-page-padding)">
      <div className="max-w-(--width-content) w-full space-y-12">
        {/* Title — Space Grotesk heading font */}
        <h1 className="font-heading text-(--text-hero) font-bold text-text-primary leading-[1.1]">
          {t('title')}
        </h1>

        {/* Font verification */}
        <div className="space-y-4">
          {/* Heading font check — Space Grotesk */}
          <p className="font-heading text-(--text-section-title) font-bold text-text-primary">
            {t('headingCheck')}
          </p>

          {/* Body font check — Inter */}
          <p className="font-sans text-(--text-body-lg) text-text-secondary leading-relaxed">
            {t('fontCheck')}
          </p>

          {/* Mono font check — JetBrains Mono */}
          <p className="font-mono text-(--text-label) text-text-secondary tracking-wide uppercase">
            {t('monoCheck')}
          </p>
        </div>

        {/* Color swatches */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-primary border border-border-default" />
            <span className="font-mono text-(--text-small) text-text-tertiary">#0A0A0B</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-text-primary" />
            <span className="font-mono text-(--text-small) text-text-tertiary">#F5F5F0</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-accent" />
            <span className="font-mono text-(--text-small) text-text-tertiary">#E8A838</span>
          </div>
        </div>

        {/* Locale indicator */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-(--text-label) text-accent uppercase tracking-wide">
            {t('locale')}
          </span>
          <span className="font-mono text-(--text-small) text-text-tertiary">
            ({locale})
          </span>
        </div>
      </div>
    </main>
  );
}
