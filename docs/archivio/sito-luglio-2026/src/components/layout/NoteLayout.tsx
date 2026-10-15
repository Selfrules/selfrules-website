import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Section } from '@/components/layout/Section';
import { JsonLd } from '@/components/seo/json-ld';
import { buildLocalizedUrl } from '@/lib/metadata';

interface NoteLayoutProps {
  locale: string;
  slug: string;
  metadata: { title: string; date: string; excerpt?: string; readingTime?: number };
  heroImage?: { src: string; alt: string };
  children: React.ReactNode;
  prevPost?: { slug: string; title: string };
  nextPost?: { slug: string; title: string };
}

export function NoteLayout({
  locale,
  slug,
  metadata,
  heroImage,
  children,
  prevPost,
  nextPost,
}: NoteLayoutProps) {
  const notesName = locale === 'it' ? 'Note' : 'Notes';
  const notesUrl = buildLocalizedUrl(locale, '/notes');
  const postUrl = buildLocalizedUrl(locale, `/notes/${slug}`);
  const homeUrl = buildLocalizedUrl(locale);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: homeUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: notesName,
              item: notesUrl,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: metadata.title,
              item: postUrl,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: metadata.title,
          datePublished: metadata.date,
          author: {
            '@type': 'Person',
            name: 'Mattia De Luca',
            url: 'https://selfrules.org',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': postUrl,
          },
          description: metadata.excerpt,
        }}
      />
      <Section>
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-[14px] text-[rgba(255,255,255,0.5)] hover:text-accent transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {locale === 'it' ? 'Tutte le note' : 'All notes'}
        </Link>

        <article>
          <h1 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-text-primary">
            {metadata.title}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <time className="font-mono text-[14px] uppercase tracking-[0.05em] text-text-secondary">
              {metadata.date}
            </time>
            {metadata.readingTime && (
              <>
                <span className="text-[rgba(255,255,255,0.55)]">·</span>
                <span className="font-mono text-[14px] uppercase tracking-[0.05em] text-text-secondary">
                  {metadata.readingTime} min read
                </span>
              </>
            )}
          </div>

          {heroImage && (
            <div className="mt-8 w-full overflow-hidden" style={{ borderRadius: 0 }}>
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1380}
                height={776}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          <div
            className="mt-12 max-w-none leading-[1.7]
              prose prose-invert
              prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
              prose-p:text-[var(--color-text-primary)]
              prose-a:text-[var(--color-text-primary)] prose-a:underline hover:prose-a:text-[var(--color-accent)]
              prose-strong:text-[var(--color-accent)] prose-strong:font-bold
              prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none
              prose-hr:border-[var(--color-border-default)] prose-hr:my-12
              prose-img:max-w-full prose-img:h-auto"
          >
            {children}
          </div>
        </article>

        {(prevPost || nextPost) && (
          <nav className="mt-16 flex justify-between border-t border-[#1a1a1f] pt-8">
            {prevPost ? (
              <Link
                href={`/notes/${prevPost.slug}`}
                className="group text-[14px] text-[rgba(255,255,255,0.5)] hover:text-accent transition-colors"
              >
                <span className="block font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.55)] mb-1">
                  {locale === 'it' ? 'Precedente' : 'Previous'}
                </span>
                ← {prevPost.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/notes/${nextPost.slug}`}
                className="group text-right text-[14px] text-[rgba(255,255,255,0.5)] hover:text-accent transition-colors"
              >
                <span className="block font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.55)] mb-1">
                  {locale === 'it' ? 'Successivo' : 'Next'}
                </span>
                {nextPost.title} →
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}
      </Section>
    </>
  );
}
