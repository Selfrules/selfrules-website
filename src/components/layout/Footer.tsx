import { getTranslations } from 'next-intl/server';

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <footer className="border-t border-border-default">
      <div className="mx-auto max-w-[--width-wide] px-[--spacing-page-padding] py-8">
        {/* Desktop: single row (D-09). Mobile: stacked (D-11). */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Left: bio tagline (14px, text-secondary) */}
          <p className="text-sm text-text-secondary">
            {t('bio')}
          </p>

          {/* Right: links (D-09, D-10) */}
          <div className="flex flex-col gap-2">
            {/* Email in JetBrains Mono with accent hover (D-10) */}
            <a
              href="mailto:mattia@selfrules.org"
              className="font-mono text-base text-text-secondary transition-colors duration-150 hover:text-accent"
            >
              {t('email')}
            </a>
            {/* LinkedIn, GitHub, CV links (14px, text-secondary, accent hover) */}
            <div className="flex items-center gap-3 text-sm">
              <a
                href="https://linkedin.com/in/mattiadeluca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors duration-150 hover:text-accent"
              >
                {t('linkedin')}
              </a>
              <span className="text-text-tertiary">|</span>
              <a
                href="https://github.com/mattiadeluca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors duration-150 hover:text-accent"
              >
                {t('github')}
              </a>
              <span className="text-text-tertiary">|</span>
              <a
                href="/cv.pdf"
                className="text-text-secondary transition-colors duration-150 hover:text-accent"
              >
                {t('cv')}
              </a>
            </div>
          </div>
        </div>

        {/* Credit line (14px, text-tertiary) per D-09 */}
        <p className="mt-6 text-sm text-text-tertiary">
          {t('credit')}
        </p>

        {/* Build version (JetBrains Mono, 11px, text-tertiary) per DESIGN-UPDATE-v25.md change 5 */}
        <p className="mt-1 font-mono text-[11px] text-text-tertiary">
          {t('buildVersion', { buildMonth: '2026.03', commitCount: '47' })}
        </p>
      </div>
    </footer>
  );
}
