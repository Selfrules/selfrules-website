'use client';

import { useSyncExternalStore } from 'react';

type Tema = 'light' | 'dark';

const ascoltatori = new Set<() => void>();

function leggi(): Tema {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function iscrivi(cb: () => void) {
  ascoltatori.add(cb);
  return () => ascoltatori.delete(cb);
}

export function InterruttoreTema() {
  const tema = useSyncExternalStore<Tema | null>(iscrivi, leggi, () => null);
  const scuro = tema === 'dark';

  const cambia = () => {
    const nuovo: Tema = scuro ? 'light' : 'dark';
    const applica = () => {
      document.documentElement.dataset.theme = nuovo;
      ascoltatori.forEach((cb) => cb());
    };
    try {
      localStorage.setItem('tema', nuovo);
    } catch {}
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      doc.startViewTransition(applica);
      return;
    }
    applica();
  };

  return (
    <button
      type="button"
      onClick={cambia}
      aria-label={scuro ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
      title={scuro ? 'Accendi la luce' : 'Spegni la luce'}
      className="grid size-9 place-items-center rounded-md text-inchiostro transition-transform hover:rotate-12 hover:bg-pannello active:scale-90"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {scuro ? (
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
          </g>
        ) : (
          <path
            d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
