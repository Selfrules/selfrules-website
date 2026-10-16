import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { note } from '@/content';
import { fotoNote } from '@/content/foto';
import { dataBreve } from '@/lib/date';
import { Testata } from '@/components/Testata';

export const metadata: Metadata = {
  title: 'Note',
  description: 'Appunti di prodotto, scritti quando una cosa mi è diventata chiara.',
  alternates: { canonical: '/note' },
};

// Le note una sotto l'altra, ognuna con la sua foto, a lati alterni
export default function PaginaNote() {
  return (
    <>
      <Testata
        titolo="Note"
        frase="Appunti di prodotto. Le scrivo quando una cosa mi diventa chiara."
        riga="Ne ho riscritte tre. Le altre tornano qui man mano che le rileggo."
      />
      <ul className="px-[var(--margine)]">
        {note.map((n, i) => (
          <li key={n.slug} className="pb-20 lg:pb-32">
            <Link href={`/note/${n.slug}`} className="group block no-underline lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
              <div data-entra className={`lg:col-span-5 ${i % 2 ? 'lg:order-2 lg:col-start-8' : ''}`}>
                <div className="foto-taglio overflow-hidden">
                  <Image
                    src={fotoNote[n.slug].src}
                    alt={fotoNote[n.slug].alt}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div data-entra className={`mt-7 lg:mt-0 ${i % 2 ? 'lg:col-span-6 lg:col-start-1' : 'lg:col-span-6 lg:col-start-7'}`}>
                <h2 className="text-testa group-hover:underline">{n.titolo}</h2>
                <p className="text-lead mt-4 max-w-[34ch]">{n.riga}</p>
                <p className="mt-4 text-grigio">
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
