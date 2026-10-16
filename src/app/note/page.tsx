import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { note } from '@/content';
import { fotoNote } from '@/content/foto-storie';
import { dataBreve } from '@/lib/date';
import { Monumento, FotoLarga } from '@/components/Pagina';
import { foto } from '@/content/foto';

export const metadata: Metadata = {
  title: 'Note',
  description: 'Appunti di prodotto, scritti quando una cosa mi è diventata chiara.',
  alternates: { canonical: '/note' },
};

export default function PaginaNote() {
  return (
    <>
      <header className="pb-16 md:pb-24">
        <Monumento testo="Note" titolo />
        <div className="mt-6 px-4 md:mt-8 md:grid md:grid-cols-12 md:gap-x-8 md:px-8">
          <p className="max-w-[36ch] text-[1.375rem] leading-[1.25] md:col-span-7 md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
            Appunti di prodotto. Le scrivo quando una cosa mi diventa chiara.
          </p>
          <p className="mt-4 max-w-[40ch] text-grigio md:col-span-4 md:col-start-9 md:mt-2">
            Le altre tornano qui man mano che le rileggo.
          </p>
        </div>
        <div className="mt-12 md:mt-16">
          <FotoLarga foto={foto['post-it']} priorita />
        </div>
      </header>
      <ul className="px-4 pb-8 md:px-8">
        {note.map((n, i) => (
          <li key={n.slug} className="pb-16 md:pb-24">
            <Link
              href={`/note/${n.slug}`}
              data-entra
              className="group no-underline lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div className={`overflow-hidden lg:col-span-6 ${i % 2 ? 'lg:order-2 lg:col-start-7' : ''}`}>
                <Image
                  src={fotoNote[n.slug].src}
                  alt={fotoNote[n.slug].alt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="si-avvicina aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className={`mt-6 lg:col-span-5 lg:mt-0 ${i % 2 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'}`}>
                <h2 className="testa text-[1.75rem] leading-[1.05] transition-colors group-hover:text-ciliegia md:text-[clamp(2rem,3.4vw,3.25rem)]">
                  {n.titolo}
                </h2>
                <p className="mt-4 max-w-[44ch]">{n.riga}</p>
                <p className="mt-3 text-grigio">
                  <time dateTime={n.data}>{dataBreve(n.data)}</time>, {n.minuti} minuti
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
