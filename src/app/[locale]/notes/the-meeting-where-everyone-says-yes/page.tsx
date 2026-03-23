import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Section } from '@/components/layout/Section';
import { JsonLd } from '@/components/seo/json-ld';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'notes' });
  const meta = createPageMetadata({
    locale,
    path: '/notes/the-meeting-where-everyone-says-yes',
    title: t('posts.the-meeting-where-everyone-says-yes.title'),
    description: t('posts.the-meeting-where-everyone-says-yes.excerpt'),
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: 'article',
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { default: Content, metadata } = await import(
    `./content.${locale}.mdx`
  );

  const baseUrl = 'https://selfrules.org';
  const notesName = locale === 'it' ? 'Note' : 'Notes';
  const notesUrl = locale === 'it' ? `${baseUrl}/it/notes` : `${baseUrl}/notes`;
  const postUrl = locale === 'it' ? `${baseUrl}/it/notes/the-meeting-where-everyone-says-yes` : `${baseUrl}/notes/the-meeting-where-everyone-says-yes`;
  const homeUrl = locale === 'it' ? `${baseUrl}/it` : baseUrl;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": homeUrl },
          { "@type": "ListItem", "position": 2, "name": notesName, "item": notesUrl },
          { "@type": "ListItem", "position": 3, "name": metadata.title, "item": postUrl }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": metadata.title,
        "datePublished": metadata.date,
        "author": {
          "@type": "Person",
          "name": "Mattia De Luca",
          "url": "https://selfrules.org"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": postUrl
        },
        "description": metadata.excerpt
      }} />
      <Section>
        <article>
          <h1 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-text-primary">
            {metadata.title}
          </h1>
          <time className="mt-2 block font-mono text-[14px] uppercase tracking-[0.05em] text-text-secondary">
            {metadata.date}
          </time>

          <div
            className="mt-12 max-w-none leading-[1.7]
              prose prose-invert
              prose-headings:font-heading prose-headings:text-[var(--color-text-primary)]
              prose-p:text-[var(--color-text-primary)]
              prose-a:text-[var(--color-text-primary)] prose-a:underline hover:prose-a:text-[var(--color-accent)]
              prose-strong:text-[var(--color-accent)] prose-strong:font-bold
              prose-code:font-mono prose-code:text-sm prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none
              prose-hr:border-[var(--color-border-default)] prose-hr:my-12"
          >
            <Content />
          </div>
        </article>
      </Section>
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
