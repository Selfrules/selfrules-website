import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { Section } from '@/components/layout/Section';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const meta = createPageMetadata({
    locale,
    path: '/notes/why-i-prototype-in-code',
    title: t('notesPost.title'),
    description: t('notesPost.description'),
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

  return (
    <>
      <Section>
        <article>
          {/* Post header */}
          <h1 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-primary">
            {metadata.title}
          </h1>
          <time className="mt-2 block font-mono text-[14px] uppercase tracking-[0.05em] text-secondary">
            {metadata.date}
          </time>

          {/* Prose body */}
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
