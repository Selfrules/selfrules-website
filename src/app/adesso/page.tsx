import type { Metadata } from 'next';
import Image from 'next/image';
import { AGGIORNATO } from '@/content';
import Contenuto from '@/content/pagine/adesso.mdx';
import { foto } from '@/content/foto';
import { Contatori } from '@/components/Contatori';
import { Testata } from '@/components/Testata';

export const metadata: Metadata = {
  title: 'Adesso',
  description: 'Cosa sto facendo adesso, e cosa cerco. Aggiornata a mano, con la data in cima.',
  alternates: { canonical: '/adesso' },
};

export default function PaginaAdesso() {
  return (
    <>
      <Testata titolo="Adesso" frase={`Cosa sto facendo adesso, e cosa cerco. Aggiornata a mano il ${AGGIORNATO}.`}>
        <div className="entra-subito mt-14 lg:mt-20" style={{ '--ritardo': 3 } as React.CSSProperties}>
          <Contatori />
        </div>
      </Testata>

      <div className="flex flex-col px-[var(--margine)] lg:grid lg:grid-cols-12 lg:gap-x-8">
        <figure data-entra className="order-last mt-14 lg:order-none lg:mt-0 lg:sticky lg:top-28 lg:col-span-5 lg:mb-0 lg:self-start">
          <div className="foto-taglio overflow-hidden">
            <Image src={foto.ciliegie.src} alt={foto.ciliegie.alt} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full object-cover" />
          </div>
          <figcaption className="didascalia">{foto.ciliegie.didascalia}</figcaption>
        </figure>
        <div data-entra-ciascuno className="testo-lungo lg:col-span-6 lg:col-start-7 [&>h2:first-of-type]:mt-0">
          <Contenuto />
        </div>
      </div>
    </>
  );
}
