import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { fotoNote } from '@/content/foto';
import { notFound } from 'next/navigation';
import { note } from '@/content';
import { dataBreve } from '@/lib/date';

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
  const altre = note.filter((x) => x.slug !== slug);

  return (
    <>
      <div aria-hidden="true" className="barra-lettura fixed top-0 left-0 z-50 h-1 w-full bg-verde" />
      <article className="px-[var(--margine)]">
        <header className="pt-10 pb-12 lg:pt-20 lg:pb-16">
          <p className="entra-subito text-grigio">
            Nota, <time dateTime={n.data}>{dataBreve(n.data)}</time>, {n.minuti} minuti
          </p>
          <h1
            className="entra-subito mt-5 max-w-[18ch] text-[clamp(2.5rem,1.2rem+5vw,6rem)] leading-[0.95] tracking-[-0.035em]"
            style={{ '--ritardo': 1 } as React.CSSProperties}
          >
            {n.titolo}
          </h1>
          <p className="entra-subito text-lead mt-6 max-w-[38ch] text-grigio" style={{ '--ritardo': 2 } as React.CSSProperties}>
            {n.riga}
          </p>
        </header>
        <figure data-entra className="mb-14 lg:mb-20">
          <div className="foto-taglio overflow-hidden">
            <Image src={fotoNote[slug].src} alt={fotoNote[slug].alt} priority sizes="100vw" className="aspect-[4/3] w-full object-cover lg:aspect-[21/9]" />
          </div>
          {fotoNote[slug].didascalia && <figcaption className="didascalia">{fotoNote[slug].didascalia}</figcaption>}
        </figure>
        <div data-entra-ciascuno className="testo-lungo max-w-[40rem] lg:ml-[calc(100%/12*3)]">
          <Contenuto />
        </div>
      </article>

      <nav aria-labelledby="altre-note" className="mt-24 bg-superficie px-[var(--margine)] py-16 lg:mt-36 lg:py-24">
        <h2 id="altre-note" className="text-lead text-grigio">
          Le altre note
        </h2>
        <ul className="registro mt-4 max-w-[46rem]">
          {altre.map((a) => (
            <li key={a.slug} data-entra>
              <Link href={`/note/${a.slug}`} className="registro-riga">
                <span className="text-testa">{a.titolo}</span>
                <span className="self-start pt-2 text-piccolo text-grigio">{a.minuti} min</span>
                <span className="mt-1">{a.riga}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
