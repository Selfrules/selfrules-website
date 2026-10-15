'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { InterruttoreTema } from './InterruttoreTema';

const voci = [
  { href: '/storie', label: 'Storie' },
  { href: '/errori', label: 'Errori' },
  { href: '/adesso', label: 'Adesso' },
  { href: '/come-lavoro', label: 'Come lavoro' },
  { href: '/note', label: 'Note' },
];

export function Navigazione() {
  const percorso = usePathname();
  const [aperto, setAperto] = useState(false);
  const [ultimo, setUltimo] = useState(percorso);

  // Cambiando pagina il menu del telefono si chiude
  if (ultimo !== percorso) {
    setUltimo(percorso);
    setAperto(false);
  }

  useEffect(() => {
    if (!aperto) return;
    const chiudi = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAperto(false);
    };
    window.addEventListener('keydown', chiudi);
    return () => window.removeEventListener('keydown', chiudi);
  }, [aperto]);

  const attivo = (href: string) => percorso === href || percorso.startsWith(href + '/');

  return (
    <header className="sticky top-0 z-40 border-b border-riga bg-carta/90 backdrop-blur-sm">
      <nav
        aria-label="Principale"
        className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="font-titolo text-[1.15rem] font-medium tracking-tight no-underline">
          Mattia De Luca
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {voci.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                aria-current={attivo(v.href) ? 'page' : undefined}
                className={`etichetta no-underline transition-colors hover:text-inchiostro ${
                  attivo(v.href)
                    ? 'text-inchiostro underline decoration-senape decoration-2 underline-offset-[6px]'
                    : ''
                }`}
              >
                {v.label}
              </Link>
            </li>
          ))}
          <li>
            <InterruttoreTema />
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <InterruttoreTema />
          <button
            type="button"
            aria-expanded={aperto}
            aria-controls="menu-telefono"
            onClick={() => setAperto((a) => !a)}
            className="etichetta rounded-md border border-riga px-3 py-1.5 text-inchiostro"
          >
            {aperto ? 'Chiudi' : 'Menu'}
          </button>
        </div>
      </nav>

      <div id="menu-telefono" hidden={!aperto} className="border-t border-riga bg-carta md:hidden">
        <ul className="mx-auto max-w-[960px] px-5 py-3">
          {voci.map((v, i) => (
            <li key={v.href} className="appare" style={{ '--ritardo': `${i * 40}ms` } as React.CSSProperties}>
              <Link
                href={v.href}
                aria-current={attivo(v.href) ? 'page' : undefined}
                className="flex items-baseline justify-between border-b border-riga py-3.5 font-titolo text-2xl no-underline last:border-0"
              >
                {v.label}
                <span className="etichetta">0{i + 1}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
