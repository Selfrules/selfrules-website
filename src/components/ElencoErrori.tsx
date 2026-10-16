'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { errori } from '@/content/errori';
import { foto, schermate } from '@/content/foto';

function Figura({ numero }: { numero: string }) {
  if (numero === '1')
    return (
      <figure className="mt-5 mb-6">
        <div className="foto-taglio overflow-hidden">
          <Image src={foto.registratore.src} alt={foto.registratore.alt} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[3/2] w-full object-cover" />
        </div>
        <figcaption className="didascalia">{foto.registratore.didascalia}</figcaption>
      </figure>
    );
  if (numero === '3')
    return (
      <figure className="mt-5 mb-6">
        <div className="schermo" data-ui>
          <Image src={schermate.impostazioni.src} alt={schermate.impostazioni.alt} sizes="(min-width: 1024px) 45vw, 100vw" className="w-full" />
        </div>
        <figcaption className="didascalia">Come scrivo le regole della palestra adesso, nel gestionale. Le capisce anche chi non le ha scritte.</figcaption>
      </figure>
    );
  return null;
}

// Gli errori come elenco: la riga sotto il dito o aperta si accende, e a sinistra compare quanto mi è costata.
// Ogni riga è un <details>, così sul telefono si apre col dito e senza script funziona lo stesso.
export function ElencoErrori({ conScena = false }: { conScena?: boolean }) {
  const [attivo, setAttivo] = useState(0);
  const e = errori[attivo];
  const elenco = useRef<HTMLUListElement>(null);

  // Scorrendo, il costo a sinistra segue l'errore che sta a metà schermo
  useEffect(() => {
    const righe = elenco.current?.querySelectorAll('li');
    if (!righe || !('IntersectionObserver' in window)) return;
    const os = new IntersectionObserver(
      (voci) => {
        for (const v of voci) if (v.isIntersecting) setAttivo(Number((v.target as HTMLElement).dataset.indice));
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    righe.forEach((r) => os.observe(r));
    return () => os.disconnect();
  }, []);

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
      <ul ref={elenco} className="registro lg:col-span-6 lg:col-start-7">
        {errori.map((x, i) => (
          <li key={x.numero} data-indice={i} onMouseEnter={() => setAttivo(i)} onFocus={() => setAttivo(i)}>
            <details
              className="group"
              open={conScena || undefined}
              onToggle={(ev) => {
                if ((ev.currentTarget as HTMLDetailsElement).open) setAttivo(i);
              }}
            >
              <summary className="registro-riga cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-lead font-medium">{x.titolo}</span>
                <span className="self-start pt-1 text-piccolo text-grigio">
                  <span className="group-open:hidden">Apri</span>
                  <span className="hidden group-open:inline">Chiudi</span>
                </span>
                <span className="lg:hidden">
                  <span className="font-semibold text-verde tabular-nums">{x.costo}</span>{' '}
                  <span className="text-grigio">{x.costoSpiegato}</span>
                </span>
              </summary>
              <div className="pb-8">
                {conScena && <Figura numero={x.numero} />}
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
