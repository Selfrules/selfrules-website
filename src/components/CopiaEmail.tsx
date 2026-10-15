'use client';

import { useState } from 'react';
import { EMAIL } from '@/content';

export function CopiaEmail() {
  const [copiata, setCopiata] = useState(false);

  const copia = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiata(true);
      setTimeout(() => setCopiata(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
      <a href={`mailto:${EMAIL}`} className="link" data-umami-event="email-scrivi">
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copia}
        data-umami-event="email-copia"
        className="etichetta rounded border border-riga px-2 py-0.5 transition-colors hover:text-inchiostro"
      >
        <span aria-live="polite">{copiata ? 'Copiata' : 'Copia'}</span>
      </button>
    </span>
  );
}
