import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { note } from '@/content';
import { fotoNote } from '@/content/foto-storie';
import { dataBreve } from '@/lib/date';
import { FotoLarga } from '@/components/Pagina';

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
      <div aria-hidden="true" className="barra-lettura fixed top-0 left-0 z-50 h-1 w-full bg-ciliegia" />
      <article>
        <header className="px-4 pt-6 md:px-8 md:pt-12">
          <h1 className="testa max-w-[16ch] text-[2.5rem] leading-[0.95] text-ciliegia md:text-[clamp(3rem,6.4vw,6.5rem)]">
            {n.titolo}
          </h1>
          <div className="mt-6 md:mt-8 md:grid md:grid-cols-12 md:gap-x-8">
            <p className="max-w-[40ch] text-[1.375rem] leading-[1.25] md:col-span-7 md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
              {n.riga}
            </p>
            <p className="mt-4 text-grigio md:col-span-4 md:col-start-9 md:mt-2">
              <time dateTime={n.data}>{dataBreve(n.data)}</time>, {n.minuti} minuti di lettura.
            </p>
          </div>
        </header>
        <div className="mt-10 md:mt-14">
          <FotoLarga foto={fotoNote[slug]} priorita />
        </div>
        <div className="mt-14 px-4 md:mt-24 md:grid md:grid-cols-12 md:gap-x-8 md:px-8">
          <div data-entra-ciascuno className="testo-lungo max-w-[62ch] md:col-span-7 md:col-start-4">
            <Contenuto />
          </div>
        </div>
      </article>

      <nav aria-labelledby="altre-note" className="mt-24 bg-superficie px-4 py-20 md:mt-40 md:px-8 md:py-28">
        <h2 id="altre-note" className="testa text-[1.75rem] md:text-[2rem]">
          Le altre note
        </h2>
        <ul className="mt-10 grid gap-12 md:grid-cols-2 md:gap-8">
          {altre.map((a) => (
            <li key={a.slug} data-entra>
              <Link href={`/note/${a.slug}`} className="group block no-underline">
                <div className="overflow-hidden">
                  <Image
                    src={fotoNote[a.slug].src}
                    alt={fotoNote[a.slug].alt}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="testa mt-6 block text-[1.75rem] leading-[1.1] transition-colors group-hover:text-ciliegia md:text-[2rem]">
                  {a.titolo}
                </span>
                <span className="mt-2 block text-grigio">{a.riga}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/note" className="collegamento mt-12 inline-block font-bold">
          Tutte le note <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </>
  );
}
