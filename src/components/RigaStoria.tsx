import Link from 'next/link';
import type { Storia } from '@/content';

export function RigaStoria({ storia, dettagli = false }: { storia: Storia; dettagli?: boolean }) {
  return (
    <li className="rivela border-b border-riga py-8 first:pt-4 last:border-0">
      <Link
        href={`/storie/${storia.slug}`}
        className="group grid gap-4 no-underline sm:grid-cols-[12.5rem_1fr] sm:gap-8"
        data-umami-event={`storia-${storia.slug}`}
      >
        <span className="font-titolo text-[3.1rem] leading-none font-medium tracking-tight whitespace-nowrap sm:text-[3.25rem]">
          {storia.evidenzia ? <span className="evidenziatore">{storia.numero}</span> : storia.numero}
        </span>
        <span className="block">
          {dettagli && (
            <span className="etichetta mb-2 block">
              {storia.azienda} · {storia.periodo} · {storia.minuti} min
            </span>
          )}
          {dettagli && (
            <span className="mb-2 block font-titolo text-2xl leading-snug font-medium">{storia.titolo}</span>
          )}
          <span className="block">{storia.riassunto}</span>
          <span className="mt-3 block text-[0.95rem] text-matita">{storia.rigaPiccola}</span>
          <span className="link mt-4 inline-block font-medium group-hover:decoration-2">
            {storia.link} <span className="freccia" aria-hidden="true">→</span>
          </span>
        </span>
      </Link>
    </li>
  );
}
