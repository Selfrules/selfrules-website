import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { storie } from '@/content';
import { fotoStorie } from '@/content/foto-storie';
import { Monumento } from '@/components/Pagina';

export const metadata: Metadata = {
  title: 'Storie',
  description: 'Tre storie con i numeri. Pagamenti, una funzione non costruita e una palestra con il suo gestionale.',
  alternates: { canonical: '/storie' },
};

const fondi = ['bg-terra', 'bg-superficie', 'bg-superficie-2'];

export default function PaginaStorie() {
  return (
    <>
      <header className="pb-16 md:pb-24">
        <Monumento testo="Storie" titolo />
        <p className="mt-6 max-w-[44ch] px-4 text-[1.375rem] leading-[1.25] md:mt-8 md:px-8 md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
          Tre storie, con i numeri. Il problema di chi lo aveva, cosa ho deciso, cosa ho scartato e com&apos;è finita.
        </p>
      </header>

      {storie.map((s, i) => (
        <section key={s.slug} aria-labelledby={`storia-${s.slug}`} className={`${fondi[i]} px-4 py-16 md:px-8 md:py-28`}>
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <Link
              href={`/storie/${s.slug}`}
              tabIndex={-1}
              aria-hidden="true"
              className={`block max-w-[36rem] overflow-hidden lg:col-span-5 lg:max-w-none ${i % 2 ? 'lg:order-2 lg:col-start-8' : ''}`}
            >
              <Image
                src={fotoStorie[s.slug][0].src}
                alt=""
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority={i === 0}
                className="si-avvicina aspect-[4/5] w-full object-cover"
              />
            </Link>
            <div data-entra className={`mt-8 lg:col-span-6 lg:mt-0 ${i % 2 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
              <p className="testa cifre text-[16.2vw] leading-[0.95] md:text-[clamp(3rem,6.4vw,6.5rem)]">{s.numero}</p>
              <h2 id={`storia-${s.slug}`} className="testa mt-6 max-w-[28ch] text-[1.375rem] leading-[1.1] text-balance md:text-[2rem]">
                {s.titolo}
              </h2>
              <p className="mt-2 text-grigio">
                {s.azienda}, {s.periodo}. {s.minuti} minuti di lettura.
              </p>
              <p className="mt-6 max-w-[58ch]">{s.riassunto}</p>
              <p className="mt-3 max-w-[58ch] font-bold">{s.rigaPiccola}</p>
              <Image
                src={fotoStorie[s.slug][1].src}
                alt={fotoStorie[s.slug][1].alt}
                sizes="(min-width: 1024px) 15vw, 40vw"
                className="mt-10 aspect-square w-[40%] object-cover lg:w-[34%]"
              />
              <Link
                href={`/storie/${s.slug}`}
                className="pulsante mt-8"
                data-umami-event={`storia-${s.slug}`}
              >
                {s.link} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
