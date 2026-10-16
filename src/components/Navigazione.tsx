'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { InterruttoreTema } from './InterruttoreTema';
import { pagine } from '@/content';

const voci = pagine;

// Una barra semplice: il nome, le pagine, un'azione. Sul telefono le pagine stanno in un menu a tutto schermo.
export function Navigazione() {
  const percorso = usePathname();
  const [aperto, setAperto] = useState(false);
  const [ultimo, setUltimo] = useState(percorso);

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
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', chiudi);
      document.documentElement.style.overflow = '';
    };
  }, [aperto]);

  const attivo = (href: string) => percorso === href || percorso.startsWith(href + '/');

  return (
    <header className="sticky top-0 z-40 bg-carta">
      <nav aria-label="Principale" className="flex h-16 items-center justify-between gap-6 px-[var(--margine)]">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.01em] no-underline"
          aria-current={percorso === '/' ? 'page' : undefined}
        >
          Mattia De Luca
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {voci.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                aria-current={attivo(v.href) ? 'page' : undefined}
                className={`no-underline transition-colors hover:text-verde ${attivo(v.href) ? 'text-verde' : ''}`}
              >
                {v.label}
              </Link>
            </li>
          ))}
          <li>
            <InterruttoreTema />
          </li>
          <li>
            <a href="#scrivimi" className="pulsante !py-2.5">
              Scrivimi
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1 lg:hidden">
          <InterruttoreTema />
          <button
            type="button"
            aria-expanded={aperto}
            aria-controls="menu-telefono"
            onClick={() => setAperto((a) => !a)}
            className="px-3 py-2 font-semibold transition-transform active:scale-95"
          >
            {aperto ? 'Chiudi' : 'Menu'}
          </button>
        </div>
      </nav>

      <div
        id="menu-telefono"
        hidden={!aperto}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-carta px-[var(--margine)] pt-4 pb-10 lg:hidden"
      >
        <ul className="menu-grande">
          <li>
            <Link href="/" aria-current={percorso === '/' ? 'page' : undefined}>
              Inizio
            </Link>
          </li>
          {voci.map((v) => (
            <li key={v.href}>
              <Link href={v.href} aria-current={attivo(v.href) ? 'page' : undefined} className={attivo(v.href) ? 'text-verde' : ''}>
                {v.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href="#scrivimi" onClick={() => setAperto(false)} className="pulsante mt-10">
          Scrivimi
        </a>
      </div>
    </header>
  );
}
