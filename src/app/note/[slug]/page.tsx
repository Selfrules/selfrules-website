import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { note } from '@/content';
import { Colonna, TestataPagina } from '@/components/Titolo';
import { dataBreve } from '@/components/ListaNote';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return note.map((n) => ({ slug: n.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const n = note.find((x) => x.slug === slug);
  if (!n) return {};
  return {
    title: n.titolo,
    description: n.riga,
    alternates: { canonical: `/note/${n.slug}` },
    openGraph: { type: 'article', title: n.titolo, description: n.riga },
  };
}

export default async function PaginaNota({ params }: Props) {
  const { slug } = await params;
  const n = note.find((x) => x.slug === slug);
  if (!n) notFound();
  const { default: Contenuto } = await import(`@/content/note/${slug}.mdx`);

  return (
    <>
      <div aria-hidden="true" className="barra-lettura fixed top-0 left-0 z-50 h-[3px] w-full bg-senape" />
      <Colonna>
        <article>
          <TestataPagina sopra={`Nota · ${dataBreve(n.data)} · ${n.minuti} min`} titolo={n.titolo} />
          <div className="testo-lungo appare">
            <Contenuto />
          </div>
        </article>
        <Link href="/note" className="link mt-16 inline-block font-medium">
          <span className="freccia" aria-hidden="true">←</span> Tutte le note
        </Link>
      </Colonna>
    </>
  );
}
