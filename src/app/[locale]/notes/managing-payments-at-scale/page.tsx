import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createPageMetadata } from '@/lib/metadata';
import { NoteLayout } from '@/components/layout/NoteLayout';
import { getAdjacentPosts } from '@/lib/posts';

const SLUG = 'managing-payments-at-scale';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'notes' });
  const meta = createPageMetadata({
    locale,
    path: `/notes/${SLUG}`,
    title: t(`posts.${SLUG}.title`),
    description: t(`posts.${SLUG}.excerpt`),
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: 'article' } };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('notes');
  const { default: Content, metadata } = await import(
    `./content.${locale}.mdx`
  );

  const { prev, next } = getAdjacentPosts(SLUG);

  return (
    <NoteLayout
      locale={locale}
      slug={SLUG}
      metadata={metadata}
      prevPost={
        prev ? { slug: prev, title: t(`posts.${prev}.title`) } : undefined
      }
      nextPost={
        next ? { slug: next, title: t(`posts.${next}.title`) } : undefined
      }
    >
      <Content />
    </NoteLayout>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}
