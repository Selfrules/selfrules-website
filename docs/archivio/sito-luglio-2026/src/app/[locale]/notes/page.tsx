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

const TAG_ORDER = [
  'payments',
  'architecture',
  'process',
  'metrics',
  'ai',
  'craft',
] as const;

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
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tag?: string }>;
}) {
  const { locale } = await params;
  const { tag: tagParam } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations('notes');

  const activeTag = TAG_ORDER.find((tag) => tag === tagParam) ?? null;

  const allPosts = POSTS.map((slug) => ({
    slug,
    title: t(`posts.${slug}.title`),
    date: t(`posts.${slug}.date`),
    excerpt: t(`posts.${slug}.excerpt`),
    readingTime: t(`posts.${slug}.readingTime`),
    tags: t.raw(`posts.${slug}.tags`) as string[],
  }))
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const posts = activeTag
    ? allPosts.filter((post) => post.tags.includes(activeTag))
    : allPosts;

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

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: homeUrl },
            { '@type': 'ListItem', position: 2, name: pageName, item: pageUrl },
          ],
        }}
      />

      {/* Headline + Subtitle */}
      <Section>
        <h1 className="font-heading font-bold text-[32px] md:text-[48px] leading-[36px] md:leading-[52.8px] tracking-[-1.2px] text-[#f5f5f0]">
          {t('headline')}
        </h1>
        <p className="mt-4 font-light text-[19px] leading-[30.4px] text-[rgba(255,255,255,0.6)]">
          {t('subtitle')}
        </p>
      </Section>

      {/* Post list */}
      <Section className="!pt-0">
        {/* Filter bar */}
        <nav
          aria-label="Filter notes by tag"
          className="flex flex-wrap items-center gap-x-4 gap-y-3 border border-border-default bg-[#0d0d0f] px-4 py-3 mt-8"
        >
          <span className="font-mono text-[13px] text-text-tertiary whitespace-nowrap">
            <span className="text-accent mr-1.5">$</span>ls --tag
          </span>
          <div className="flex flex-wrap gap-2">
            {TAG_ORDER.map((tag) => {
              const isActive = activeTag === tag;
              const href = isActive
                ? { pathname: '/notes' as const }
                : { pathname: '/notes' as const, query: { tag } };
              return (
                <Link
                  key={tag}
                  href={href}
                  scroll={false}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? 'font-mono text-[11px] uppercase tracking-[1.2px] px-2.5 py-1 border border-accent bg-[rgba(232,168,56,0.06)] text-accent transition-colors'
                      : 'font-mono text-[11px] uppercase tracking-[1.2px] px-2.5 py-1 border border-[#2a2a30] text-text-tertiary hover:text-accent hover:border-[rgba(232,168,56,0.35)] transition-colors'
                  }
                >
                  #{tag}
                </Link>
              );
            })}
          </div>
          <span className="ml-auto font-mono text-[11px] uppercase tracking-[1.4px] text-text-tertiary whitespace-nowrap">
            {activeTag
              ? `${posts.length} of ${allPosts.length} entries`
              : `${allPosts.length} entries`}
          </span>
        </nav>

        {posts.length > 0 ? (
          <div className="mt-10 flex flex-col gap-14">
            {years.map((year) => (
              <div key={year}>
                {/* Session header */}
                <div className="flex items-baseline justify-between border-b border-border-default pb-3">
                  <span className="font-mono text-[13px] text-text-tertiary">
                    <span className="text-text-secondary">~/notes</span>
                    <span className="text-text-tertiary"> · </span>
                    <span className="text-text-primary">session {year}</span>
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[1.4px] text-text-tertiary">
                    {postsByYear[year].length}{' '}
                    {postsByYear[year].length === 1 ? 'entry' : 'entries'}
                  </span>
                </div>

                {/* Entries */}
                <div className="flex flex-col">
                  {postsByYear[year].map((post) => (
                    <article
                      key={post.slug}
                      className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-1.5 py-5 border-b border-border-default transition-colors hover:border-b-[rgba(232,168,56,0.3)]"
                    >
                      {/* Row 1 — command + meta */}
                      <Link
                        href={`/notes/${post.slug}`}
                        className="font-mono text-[13px] leading-[1.6] text-text-tertiary min-w-0 truncate"
                      >
                        <span className="text-accent mr-2">$</span>
                        <span className="text-text-secondary mr-1.5">cat</span>
                        <span className="text-text-primary group-hover:underline underline-offset-4 decoration-accent">
                          notes/{post.slug}.md
                        </span>
                      </Link>
                      <div className="font-mono text-[11px] uppercase tracking-[1.2px] text-text-tertiary text-right whitespace-nowrap">
                        <time>{post.date}</time>
                        <span className="mx-2 text-text-tertiary/50">·</span>
                        <span>{post.readingTime}</span>
                      </div>

                      {/* Row 2 — title + excerpt + tags */}
                      <div className="col-span-2 pl-3.5 border-l border-transparent transition-colors group-hover:border-[rgba(232,168,56,0.35)]">
                        <Link
                          href={`/notes/${post.slug}`}
                          className="block font-heading font-bold text-[20px] leading-[28px] text-[#f5f5f0] transition-colors group-hover:text-accent"
                        >
                          {post.title}
                        </Link>
                        <p className="mt-1.5 font-light text-[15px] leading-[24px] text-[rgba(255,255,255,0.55)] max-w-[62ch]">
                          {post.excerpt}
                        </p>
                        <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-2">
                          {post.tags.map((tag) => (
                            <Link
                              key={tag}
                              href={{
                                pathname: '/notes' as const,
                                query: { tag },
                              }}
                              scroll={false}
                              className="font-mono text-[11px] uppercase tracking-[1.1px] text-text-tertiary border-b border-[rgba(232,168,56,0.35)] pb-0.5 hover:text-accent hover:border-accent transition-colors"
                            >
                              #{tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-12 font-mono text-[13px] text-text-tertiary">
            <span className="text-accent mr-1.5">$</span>ls --tag={activeTag}{' '}
            <span className="text-text-secondary">// no entries</span>
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
