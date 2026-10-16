'use client';

import { useEffect, useState } from 'react';

// L'indice che resta fermo accanto al testo e accende la sezione che stai leggendo. Senza script resta un elenco di link.
export function Indice({ sezioni }: { sezioni: [string, string][] }) {
  const [attiva, setAttiva] = useState(sezioni[0]?.[0]);

  useEffect(() => {
    const aggiorna = () => {
      const meta = window.innerHeight * 0.4;
      let corrente = sezioni[0]?.[0];
      for (const [id] of sezioni) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < meta) corrente = id;
      }
      setAttiva(corrente);
    };
    aggiorna();
    window.addEventListener('scroll', aggiorna, { passive: true });
    return () => window.removeEventListener('scroll', aggiorna);
  }, [sezioni]);

  return (
    <nav aria-label="Sezioni">
      <ul className="space-y-1">
        {sezioni.map(([id, t]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={attiva === id ? 'true' : undefined}
              className={`block py-1.5 text-[1.375rem] leading-[1.15] tracking-[-0.015em] no-underline transition-[color,transform] duration-200 hover:translate-x-1 hover:text-inchiostro lg:text-[clamp(1.375rem,1.8vw,1.75rem)] ${
                attiva === id ? 'text-inchiostro' : 'text-grigio'
              }`}
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
