'use client';

import { usePathname, useRouter } from '@/i18n/navigation';

interface LanguageToggleProps {
  locale: string;
  variant?: 'desktop' | 'mobile';
}

export function LanguageToggle({ locale, variant = 'desktop' }: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    router.replace({ pathname }, { locale: newLocale });
  }

  const sizeClass = variant === 'mobile' ? 'text-base' : 'text-[16px] font-medium';

  return (
    <div className={`flex items-center gap-1 ${sizeClass}`} role="group" aria-label="Language">
      <button
        onClick={() => switchLocale('it')}
        className={`transition-colors duration-150 ${
          locale === 'it'
            ? 'text-[rgba(255,255,255,0.6)]'
            : 'text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] cursor-pointer'
        }`}
        aria-label="Italiano"
        aria-current={locale === 'it' ? 'true' : undefined}
      >
        IT
      </button>
      <span className="text-text-tertiary">/</span>
      <button
        onClick={() => switchLocale('en')}
        className={`transition-colors duration-150 ${
          locale === 'en'
            ? 'text-[rgba(255,255,255,0.6)]'
            : 'text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] cursor-pointer'
        }`}
        aria-label="English"
        aria-current={locale === 'en' ? 'true' : undefined}
      >
        EN
      </button>
    </div>
  );
}
