import { getTranslations } from 'next-intl/server';

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <footer className="mt-32">
      <div className="mx-auto max-w-[var(--width-wide)] px-[var(--spacing-page-padding)] flex flex-col gap-4 pb-8">
        {/* Main row: links left, credit right */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left: inline links separated by · */}
          <div className="flex flex-wrap items-center gap-x-2 text-[14px] text-[rgba(255,255,255,0.5)]">
            <span>PM / Builder</span>
            <span>·</span>
            <a
              href="mailto:hello@selfrules.org"
              className="hover:text-accent transition-colors duration-150"
            >
              {t('email')}
            </a>
            <span>·</span>
            <a
              href="https://linkedin.com/in/selfrules"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-150"
            >
              {t('linkedin')}
            </a>
            <span>·</span>
            <a
              href="https://github.com/selfrules"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-150"
            >
              {t('github')}
            </a>
            <span>·</span>
            <a
              href="/mattia-de-luca-cv.pdf"
              download
              className="inline-flex items-center gap-1 hover:text-accent transition-colors duration-150"
            >
              CV
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          {/* Right: credit */}
          <p className="text-[12px] text-[rgba(255,255,255,0.3)]">
            {t('credit')}
          </p>
        </div>

        {/* Build version — right aligned */}
        <p className="font-mono text-[11px] text-[#5a5a5e] md:text-right">
          {t('buildVersion', { buildMonth: '2026.03', commitCount: '47' })}
        </p>
      </div>
    </footer>
  );
}
