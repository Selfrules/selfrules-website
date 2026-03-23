import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/layout/Section';
import { JsonLd } from '@/components/seo/json-ld';

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

  // Group posts by year
  const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.slice(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a));

  const baseUrl = 'https://selfrules.org';
  const pageName = locale === 'it' ? 'Note' : 'Notes';
  const pageUrl = locale === 'it' ? `${baseUrl}/it/notes` : `${baseUrl}/notes`;
  const homeUrl = locale === 'it' ? `${baseUrl}/it` : baseUrl;

  // Format date for display (e.g., "Mar 22")
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": homeUrl },
          { "@type": "ListItem", "position": 2, "name": pageName, "item": pageUrl }
        ]
      }} />
      {/* Headline + Subtitle */}
      <Section>
        <h1 className="font-heading font-bold text-[clamp(36px,4vw,48px)] leading-[1.1] text-text-primary">
          {t('headline')}
        </h1>
        <p className="mt-4 text-[16px] leading-[26px] text-[rgba(255,255,255,0.6)]">
          {t('subtitle')}
        </p>
      </Section>

      {/* Post list grouped by year */}
      <Section className="!pt-0">
        {posts.length > 0 ? (
          <div className="mt-12 space-y-12">
            {years.map((year) => (
              <div key={year}>
                {/* Year separator */}
                <div className="mb-8">
                  <span className="font-mono text-[14px] text-[rgba(255,255,255,0.4)]">{year}</span>
                  <div className="mt-2 h-[1px] w-full bg-[#1a1a1f]" />
                </div>

                {/* Posts in this year */}
                <div className="space-y-8">
                  {postsByYear[year].map((post) => (
                    <article key={post.slug} className="flex gap-6">
                      <time className="w-[80px] shrink-0 font-mono text-[14px] text-[rgba(255,255,255,0.4)] pt-1">
                        {formatDate(post.date)}
                      </time>
                      <div>
                        <Link
                          href={`/notes/${post.slug}`}
                          className="block font-heading font-medium text-[18px] leading-[1.3] text-text-primary transition-colors duration-150 hover:text-accent"
                        >
                          {post.title}
                        </Link>
                        <p className="mt-1 text-[14px] text-[rgba(255,255,255,0.6)]">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-[16px] text-[rgba(255,255,255,0.4)]">
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
