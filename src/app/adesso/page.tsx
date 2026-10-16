import type { Metadata } from 'next';
import { AGGIORNATO } from '@/content';
import Contenuto from '@/content/pagine/adesso.mdx';
import { Monumento, FotoLarga } from '@/components/Pagina';
import { GiorniDaGM } from '@/components/GiorniDaGM';
import { foto } from '@/content/foto';

export const metadata: Metadata = {
  title: 'Adesso',
  description: 'Cosa sto facendo adesso, e cosa cerco. Aggiornata a mano, con la data in cima.',
  alternates: { canonical: '/adesso' },
};

export default function PaginaAdesso() {
  return (
    <>
      <header className="pb-14 md:pb-24">
        <Monumento testo="Adesso" titolo />
        <div className="mt-6 px-4 md:mt-8 md:grid md:grid-cols-12 md:gap-x-8 md:px-8">
          <p className="text-[1.375rem] leading-[1.25] md:col-span-7 md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
            Cosa sto facendo adesso, e cosa cerco.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 md:col-span-4 md:col-start-9 md:mt-2">
            <div>
              <dt className="font-bold">Aggiornato</dt>
              <dd className="text-grigio">il {AGGIORNATO}</dd>
            </div>
            <div>
              <dt className="font-bold">GM di 21Lab</dt>
              <dd className="text-grigio">
                <GiorniDaGM />
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-12 md:mt-16">
          <FotoLarga foto={foto.rocca} priorita />
        </div>
      </header>
      <div data-entra-ciascuno className="testo-lungo blocchi px-4 pb-8 md:px-8">
        <Contenuto />
      </div>
    </>
  );
}
