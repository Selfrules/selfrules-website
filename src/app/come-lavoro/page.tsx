import type { Metadata } from 'next';
import Contenuto from '@/content/pagine/come-lavoro.mdx';
import { Colonna, TestataPagina } from '@/components/Titolo';

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

export default function PaginaComeLavoro() {
  return (
    <Colonna>
      <TestataPagina titolo="Come lavoro" />
      <nav aria-label="Sezioni" className="appare -mt-4 mb-12">
        <ul className="flex flex-wrap gap-2">
          {sezioni.map(([id, t]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-md bg-pannello px-3 py-1.5 text-[0.95rem] no-underline transition-colors hover:text-verde"
              >
                {t}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="testo-lungo blocchi">
        <Contenuto />
      </div>
    </Colonna>
  );
}
