import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFoundPage() {
  const t = await getTranslations('notFound');

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-[--spacing-page-padding]">
      {/* Headline: Space Grotesk display size, centered */}
      <h1 className="font-heading text-[length:--text-hero] font-bold leading-[1.1] text-text-primary text-center max-w-[720px]">
        {t('headline')}
      </h1>

      {/* Signature phrase: italic, 14px, text-secondary, centered */}
      <p className="mt-4 text-sm italic text-text-secondary text-center max-w-[720px]">
        {t('signaturePhrase')}
      </p>

      {/* Back link: accent color, arrow prefix */}
      <Link
        href="/"
        className="mt-6 text-base text-accent transition-colors duration-150 hover:text-accent-hover"
      >
        &rarr; {t('backLink')}
      </Link>
    </div>
  );
}
