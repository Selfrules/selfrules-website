import { getTranslations } from 'next-intl/server';
import { COMMIT_COUNT } from '@/lib/build-info';

const buildMonth = new Date().toISOString().slice(0, 7).replace('-', '.');

export async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <footer className="mt-32 px-[var(--spacing-page-padding)]">
      <div className="mx-auto max-w-[var(--width-wide)] flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pb-8">
        {/* Left: inline links separated by · */}
        <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-1 text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.5)]">
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
            data-umami-event="contact-linkedin"
          >
            {t('linkedin')}
          </a>
          <span>·</span>
          <a
            href="https://github.com/selfrules"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-150"
            data-umami-event="external-github"
          >
            {t('github')}
          </a>
          <span>·</span>
          <a
            href="/mattia-de-luca-cv.pdf"
            download
            className="inline-flex items-center gap-1 hover:text-accent transition-colors duration-150"
            data-umami-event="contact-cv-download"
          >
            CV
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>

        {/* Right: build version */}
        <p className="font-mono text-[11px] text-[#7e7e82]">
          {t('buildVersion', { buildMonth, commitCount: String(COMMIT_COUNT) })}
        </p>
      </div>
    </footer>
  );
}
