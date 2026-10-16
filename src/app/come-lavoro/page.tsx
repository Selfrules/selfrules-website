import type { Metadata } from 'next';
import Image from 'next/image';
import Contenuto from '@/content/pagine/come-lavoro.mdx';
import { foto } from '@/content/foto';
import { Monumento } from '@/components/Pagina';

export const metadata: Metadata = {
  title: 'Come lavoro',
  description: "Il mio manuale d'uso. Come decido, come scrivo, cosa mi fa arrabbiare e come darmi una cattiva notizia.",
  alternates: { canonical: '/come-lavoro' },
};

const sezioni = [
  ['come-decido', 'Come decido'],
  ['come-scrivo', 'Come scrivo'],
  ['cosa-mi-fa-arrabbiare', 'Cosa mi fa arrabbiare'],
  ['come-darmi-una-cattiva-notizia', 'Come darmi una cattiva notizia'],
  ['dove-sono-scarso', 'Dove sono scarso'],
  ['da-dove-vengo', 'Da dove vengo'],
];

// Come lavoro è un manuale d'uso, e si apre come un manuale: l'indice accanto a una pagina di un manuale di palestra del 1905
export default function PaginaComeLavoro() {
  return (
    <>
      <header className="pb-16 md:pb-28">
        <Monumento testo={'Come\nlavoro'} titolo />
        <div className="mt-10 px-4 md:mt-14 md:grid md:grid-cols-12 md:gap-x-8 md:px-8">
          <nav aria-label="Sezioni" data-entra className="md:col-span-7">
            <ul>
              {sezioni.map(([id, t]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="testa block py-1.5 text-[1.75rem] leading-[1.1] no-underline transition-colors hover:text-ciliegia md:py-2 md:text-[clamp(1.75rem,2.6vw,2.5rem)]"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Image
            src={foto['manuale-1905'].src}
            alt={foto['manuale-1905'].alt}
            priority
            sizes="(min-width: 768px) 30vw, 100vw"
            className="mt-12 aspect-[3/4] w-full max-w-[26rem] object-cover md:col-span-4 md:col-start-9 md:mt-0"
          />
        </div>
      </header>
      <div data-entra-ciascuno className="testo-lungo blocchi px-4 pb-8 md:px-8">
        <Contenuto />
      </div>
    </>
  );
}
