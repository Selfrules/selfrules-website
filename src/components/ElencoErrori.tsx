'use client';

import { useState } from 'react';
import Image from 'next/image';
import { errori } from '@/content/errori';
import { foto, type Foto } from '@/content/foto';

// Una foto dal mondo dell'errore. Il primo ha la sua cassa del 1918 in fondo alla pagina
const fotoErrore: Record<string, Foto> = { '2': foto.centralino, '3': foto.riunione };

// Gli errori come elenco: la riga sotto il dito o aperta si accende, e a sinistra compare quanto mi è costata.
// Ogni riga è un <details>, così sul telefono si apre col dito e senza script funziona lo stesso.
export function ElencoErrori({ conScena = false }: { conScena?: boolean }) {
  const [attivo, setAttivo] = useState(0);
  const e = errori[attivo];

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 bg-superficie p-12">
          <p key={e.numero} className="cifra text-verde entra-subito">
            {e.costo}
          </p>
          <p className="text-lead mt-3 max-w-[22ch]">{e.costoSpiegato}</p>
        </div>
      </div>
      <ul className="registro lg:col-span-6 lg:col-start-7">
        {errori.map((x, i) => (
          <li key={x.numero} onMouseEnter={() => setAttivo(i)} onFocus={() => setAttivo(i)}>
            <details
              className="group"
              open={conScena || undefined}
              onToggle={(ev) => {
                if ((ev.currentTarget as HTMLDetailsElement).open) setAttivo(i);
              }}
            >
              <summary className="registro-riga cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lead font-medium">{x.titolo}</span>
                <span className="self-start text-right font-semibold text-verde tabular-nums lg:hidden">{x.costo}</span>
                <span className="text-piccolo text-grigio">
                  <span className="group-open:hidden">Apri</span>
                  <span className="hidden group-open:inline">Chiudi</span>
                </span>
              </summary>
              <div className="pb-8">
                <p className="text-piccolo text-grigio lg:hidden">{x.costoSpiegato}</p>
                {conScena && fotoErrore[x.numero] && (
                  <figure className="mt-5 mb-6">
                    <Image src={fotoErrore[x.numero].src} alt={fotoErrore[x.numero].alt} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[3/2] w-full object-cover" />
                    <figcaption className="didascalia">{fotoErrore[x.numero].didascalia}</figcaption>
                  </figure>
                )}
                {conScena && x.scena.map((p, k) => <p key={k} className="mt-3 max-w-[54ch]">{p}</p>)}
                <p className="mt-4 max-w-[54ch] font-semibold">{x.regola}</p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
