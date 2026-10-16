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
];

export default function PaginaComeLavoro() {
  return (
    <Colonna>
      <TestataPagina meta="Manuale d'uso" titolo="Come lavoro" />
      <nav aria-label="Sezioni" className="appare -mt-4 mb-12">
        <ol className="grid gap-1.5">
          {sezioni.map(([id, t], i) => (
            <li key={id}>
              <a href={`#${id}`} className="etichetta no-underline transition-colors hover:text-inchiostro">
                0{i + 1} · {t}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="testo-lungo blocchi">
        <Contenuto />
      </div>
    </Colonna>
  );
}
