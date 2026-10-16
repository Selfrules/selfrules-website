import type { Metadata } from 'next';
import Image from 'next/image';
import { errori } from '@/content/errori';
import { foto, type Foto } from '@/content/foto';
import { Monumento } from '@/components/Pagina';

export const metadata: Metadata = {
  title: 'Errori',
  description: 'Gli errori che mi sono costati qualcosa. Ognuno con la scena, il costo e la regola che ne è uscita.',
  alternates: { canonical: '/errori' },
};

// Una foto per errore, dal suo mondo: la cassa, il centralino, il manuale che nessuno capisce
const fotoErrori: Foto[] = [foto.registratore, foto.centralino, foto['manuale-1905']];
const fondi = ['bg-superficie', 'bg-terra', 'bg-superficie-2'];

export default function PaginaErrori() {
  return (
    <>
      <header className="pb-16 md:pb-24">
        <Monumento testo="Errori" titolo />
        <div className="mt-6 px-4 md:mt-8 md:grid md:grid-cols-12 md:items-end md:gap-x-8 md:px-8">
          <div className="md:col-span-7">
            <p className="max-w-[40ch] text-[1.375rem] leading-[1.25] md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
              Gli errori che mi sono costati qualcosa. Ognuno ha una scena, un costo e la regola che ne è uscita.
            </p>
            <p className="mt-6 max-w-[44ch] text-grigio">
              Li tengo qui perché mi hanno insegnato più delle cose andate bene.
            </p>
          </div>
          <Image
            src={foto.birillo.src}
            alt={foto.birillo.alt}
            priority
            sizes="(min-width: 768px) 30vw, 100vw"
            className="mt-12 aspect-[3/4] w-full max-w-[24rem] object-cover md:col-span-4 md:col-start-9 md:mt-0"
          />
        </div>
      </header>

      {errori.map((e, i) => (
        <section
          key={e.numero}
          aria-labelledby={`errore-${e.numero}`}
          className={`${fondi[i]} px-4 py-20 md:px-8 md:py-32`}
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div data-entra className={`lg:col-span-5 ${i % 2 ? 'lg:order-2 lg:col-start-8' : ''}`}>
              <p className="testa cifre text-[16.2vw] leading-[0.9] text-ciliegia md:text-[clamp(3rem,6.4vw,6.5rem)]">
                {e.costo}
              </p>
              <p className="mt-3 font-bold">{e.costoSpiegato}</p>
              <Image
                src={fotoErrori[i].src}
                alt={fotoErrori[i].alt}
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="mt-10 aspect-[4/5] w-full max-w-[28rem] object-cover"
              />
            </div>
            <div data-entra className={`mt-12 lg:col-span-6 lg:mt-0 ${i % 2 ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
              <h2 id={`errore-${e.numero}`} className="testa text-[1.75rem] leading-[1.1] md:text-[2rem]">
                {e.titolo}
              </h2>
              <div className="mt-6 max-w-[60ch] space-y-4">
                {e.scena.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
              <p className="mt-10 font-bold">La regola che ne è uscita</p>
              <p className="mt-2 max-w-[42ch] text-[1.375rem] leading-[1.25] md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
                {e.regola}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
