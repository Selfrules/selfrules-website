import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata, buildLocalizedUrl } from '@/lib/metadata';
import { LOCALE_PARAMS } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { POSTS } from '@/lib/posts';
import { Section } from '@/components/layout/Section';
import { PageCTA } from '@/components/sections/page-cta';
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

  const posts = POSTS.map((slug) => ({
    slug,
    title: t(`posts.${slug}.title`),
    date: t(`posts.${slug}.date`),
    excerpt: t(`posts.${slug}.excerpt`),
    readingTime: t(`posts.${slug}.readingTime`),
    tags: t.raw(`posts.${slug}.tags`) as string[],
  }));

  // Group posts by year
  const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.slice(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a));

  const pageName = locale === 'it' ? 'Note' : 'Notes';
  const pageUrl = buildLocalizedUrl(locale, '/notes');
  const homeUrl = buildLocalizedUrl(locale);

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
        <h1 className="font-heading font-bold text-[32px] md:text-[48px] leading-[36px] md:leading-[52.8px] tracking-[-1.2px] text-[#f5f5f0]">
          {t('headline')}
        </h1>
        <p className="mt-4 font-light text-[19px] leading-[30.4px] text-[rgba(255,255,255,0.6)]">
          {t('subtitle')}
        </p>
      </Section>

      {/* Post list grouped by year */}
      <Section className="!pt-0">
        {posts.length > 0 ? (
          <div className="mt-12 flex flex-col gap-32">
            {years.map((year) => (
              <div key={year}>
                {/* Year separator */}
                <div className="border-b border-[#1a1a1f] pb-4">
                  <span className="font-mono text-[13px] uppercase tracking-[1.3px] text-[rgba(255,255,255,0.55)]">{year}</span>
                </div>

                {/* Posts in this year */}
                <div className="flex flex-col gap-16 mt-12">
                  {postsByYear[year].map((post) => (
                    <article key={post.slug} className="flex gap-6">
                      <time className="w-[96px] shrink-0 font-mono text-[13px] leading-[19.5px] text-[rgba(255,255,255,0.55)] pt-[6px]">
                        {formatDate(post.date)}
                      </time>
                      <div>
                        <Link
                          href={`/notes/${post.slug}`}
                          className="block font-heading font-bold text-[20px] leading-[28px] text-[#f5f5f0] transition-colors duration-150 hover:text-accent"
                        >
                          {post.title}
                        </Link>
                        <p className="mt-2 font-light text-[16px] leading-[25.6px] text-[rgba(255,255,255,0.6)]">
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
          <p className="mt-12 text-[16px] text-[rgba(255,255,255,0.55)]">
            {t('emptyState')}
          </p>
        )}
      </Section>

      {/* PageCTA */}
      <PageCTA
        text={t('cta.text')}
        primaryCta={{
          label: t('cta.primary'),
          href: locale === 'it' ? '/it/work' : '/work',
        }}
        secondaryCta={{
          label: t('cta.secondary'),
          href: 'mailto:hello@selfrules.org',
        }}
      />
    </>
  );
}

export function generateStaticParams() {
  return LOCALE_PARAMS;
}
