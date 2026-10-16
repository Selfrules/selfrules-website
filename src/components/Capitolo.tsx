'use client';

import { useState, useSyncExternalStore } from 'react';

// Un capitolo del manuale. Sul telefono si vede il titolo e il primo paragrafo, il resto si apre col dito.
// Sul computer e senza script è tutto aperto.
const nessunEvento = () => () => {};

export function Capitolo({ titolo, id, children }: { titolo: string; id: string; children: React.ReactNode }) {
  const nelBrowser = useSyncExternalStore(nessunEvento, () => true, () => false);
  const [aperto, setAperto] = useState(false);
  const chiuso = nelBrowser && !aperto;

  return (
    <section className="capitolo" data-chiuso={chiuso ? 'si' : 'no'} aria-labelledby={id}>
      <h2 id={id}>{titolo}</h2>
      <div id={`${id}-corpo`} className="capitolo-corpo">
        {children}
      </div>
      {nelBrowser && (
        <button
          type="button"
          className="capitolo-apri collegamento font-semibold lg:hidden"
          aria-expanded={aperto}
          aria-controls={`${id}-corpo`}
          onClick={() => setAperto((a) => !a)}
        >
          {aperto ? 'Chiudi' : 'Continua a leggere'}
        </button>
      )}
    </section>
  );
}
