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
    <header className="relative z-40">
      <nav aria-label="Principale" className="flex h-16 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="font-nome text-base font-bold tracking-[-0.01em] no-underline"
          aria-current={percorso === '/' ? 'page' : undefined}
        >
          Mattia De Luca
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {voci.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                aria-current={attivo(v.href) ? 'page' : undefined}
                className={`font-nome text-base font-bold tracking-[-0.01em] no-underline transition-colors hover:text-ciliegia ${
                  attivo(v.href) ? 'text-ciliegia' : ''
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

        <div className="flex items-center gap-2 md:hidden">
          <InterruttoreTema />
          <button
            type="button"
            aria-expanded={aperto}
            aria-controls="menu-telefono"
            onClick={() => setAperto((a) => !a)}
            className="font-nome px-3 py-2 text-base font-bold transition-colors hover:text-ciliegia active:scale-95"
          >
            {aperto ? 'Chiudi' : 'Menu'}
          </button>
        </div>
      </nav>

      <div id="menu-telefono" hidden={!aperto} className="absolute inset-x-0 top-16 bg-superficie md:hidden">
        <ul className="px-4 pt-2 pb-8">
          {voci.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                aria-current={attivo(v.href) ? 'page' : undefined}
                className={`testa block py-2.5 text-[2.6rem] no-underline ${attivo(v.href) ? 'text-ciliegia' : ''}`}
              >
                {v.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
