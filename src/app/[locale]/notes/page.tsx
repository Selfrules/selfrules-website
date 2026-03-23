import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/layout/Section';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createPageMetadata({
    locale,
    path: '/notes',
    title: t('notes.title'),
    description: t('notes.description'),
  });
}

export default async function NotesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('notes');

  const posts = [
    {
      slug: 'why-i-prototype-in-code',
      title: t('posts.why-i-prototype-in-code.title'),
      date: t('posts.why-i-prototype-in-code.date'),
      excerpt: t('posts.why-i-prototype-in-code.excerpt'),
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

      {/* Post list */}
      <Section className="!pt-0">
        {posts.length > 0 ? (
          <div className="mt-12 space-y-12">
            {posts.map((post) => (
              <article key={post.slug}>
                <time className="block font-mono text-[14px] uppercase tracking-[0.05em] text-secondary">
                  {post.date}
                </time>
                <Link
                  href={`/notes/${post.slug}`}
                  className="mt-1 block text-[20px] leading-[1.3] text-primary transition-colors duration-150 hover:text-accent"
                >
                  {post.title}
                </Link>
                <p className="mt-1 text-base text-secondary">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-base text-secondary">
            {t('emptyState')}
          </p>
        )}
      </Section>
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
