import Link from 'next/link';
import type { Nota } from '@/content';

const mesi = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

export function dataBreve(iso: string) {
  const [a, m, g] = iso.split('-').map(Number);
  return `${g} ${mesi[m - 1]} ${a}`;
}

export function ListaNote({ note, compatta = false }: { note: Nota[]; compatta?: boolean }) {
  return (
    <ul className="mt-4">
      {note.map((n) => (
        <li key={n.slug} className="border-b border-riga last:border-0">
          <Link
            href={`/note/${n.slug}`}
            className="group grid gap-1 py-5 no-underline sm:grid-cols-[7.5rem_1fr] sm:gap-6"
          >
            <time dateTime={n.data} className="etichetta pt-1">
              {dataBreve(n.data)}
            </time>
            <span>
              <span className="font-titolo text-xl font-medium underline decoration-riga decoration-1 underline-offset-4 transition-colors group-hover:decoration-verde">
                {n.titolo}
              </span>
              {!compatta && <span className="mt-1 block text-matita">{n.riga}</span>}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
