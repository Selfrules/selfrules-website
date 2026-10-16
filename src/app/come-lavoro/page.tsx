import type { Metadata } from 'next';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import Contenuto from '@/content/pagine/come-lavoro.mdx';
import { ancora } from '@/mdx-components';
import { Indice } from '@/components/Indice';
import { Testata } from '@/components/Testata';

export const metadata: Metadata = {
  title: 'Come lavoro',
  description: "Il mio manuale d'uso. Come decido, come scrivo, cosa mi fa arrabbiare e come darmi una cattiva notizia.",
  alternates: { canonical: '/come-lavoro' },
};

// I titoli delle sezioni vengono dal file del testo, così l'indice non si scorda di nessuna
const sezioni = readFileSync(join(process.cwd(), 'src/content/pagine/come-lavoro.mdx'), 'utf8')
  .split('\n')
  .map((r) => r.match(/^<Capitolo titolo="([^"]+)">/)?.[1])
  .filter((t): t is string => Boolean(t))
  .map((t): [string, string] => [ancora(t), t]);

export default function PaginaComeLavoro() {
  return (
    <>
      <Testata
        titolo="Come lavoro"
        frase="Il mio manuale d'uso, come quelli degli elettrodomestici. Ti risparmia tre mesi di prove per capire come prendermi."
      />
      <div className="px-[var(--margine)] lg:grid lg:grid-cols-12 lg:gap-x-8">
        <aside className="mb-14 bg-superficie p-6 lg:col-span-4 lg:mb-0 lg:self-start lg:bg-transparent lg:p-0 lg:sticky lg:top-28">
          <p className="mb-3 text-piccolo text-grigio">Sei capitoli brevi</p>
          <Indice sezioni={sezioni} />
        </aside>
        <div data-entra-ciascuno className="testo-lungo lg:col-span-7 lg:col-start-6 [&>section:first-of-type>h2]:mt-0">
          <Contenuto />
        </div>
      </div>
    </>
  );
}
