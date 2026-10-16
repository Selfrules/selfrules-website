import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { storie } from '@/content';
import { foto, type Immagine } from '@/content/foto';
import { Testata } from '@/components/Testata';

export const metadata: Metadata = {
  title: 'Storie',
  description: 'Tre storie con i numeri. Pagamenti, una funzione non costruita e una palestra con il suo gestionale.',
  alternates: { canonical: '/storie' },
};

const immagine: Record<string, Immagine> = {
  pagamenti: foto.insegna,
  leadsbridge: foto.centralino,
  palestra: foto.manubri,
};

export default function PaginaStorie() {
  return (
    <>
      <Testata
        titolo="Storie"
        frase="Tre storie, con i numeri. Il problema di chi lo aveva, cosa ho deciso, cosa ho scartato e com'è finita."
        riga="In ognuna, prima del capitolo dove decido, puoi provare a decidere tu."
      />

      {storie.map((s, i) => (
        <section
          key={s.slug}
          aria-labelledby={`storia-${s.slug}`}
          className={`px-[var(--margine)] py-16 lg:py-28 ${i % 2 === 1 ? 'bg-superficie' : ''}`}
        >
          <Link href={`/storie/${s.slug}`} className="group block no-underline lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div data-entra className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2 lg:col-start-7' : ''}`}>
              <div className="foto-taglio overflow-hidden">
                <Image
                  src={immagine[s.slug].src}
                  alt={immagine[s.slug].alt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div data-entra className={`mt-8 lg:mt-0 ${i % 2 === 1 ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5 lg:col-start-8'}`}>
              <p className="cifra text-verde">{s.numero}</p>
              <h2 id={`storia-${s.slug}`} className="text-lead mt-4 max-w-[24ch] font-medium group-hover:underline">
                {s.titolo}
              </h2>
              <p className="mt-4 max-w-[46ch]">{s.riassunto}</p>
              <p className="mt-4 text-piccolo text-grigio">
                {s.azienda}, {s.periodo}. {s.minuti} minuti.
              </p>
              <span className="pulsante mt-8">{s.link}</span>
            </div>
          </Link>
        </section>
      ))}
    </>
  );
}
