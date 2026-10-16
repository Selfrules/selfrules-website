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
      <a href={`mailto:${EMAIL}`} className="collegamento" data-umami-event="email-scrivi">
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copia}
        data-umami-event="email-copia"
        className="font-nome text-base font-bold underline-offset-4 transition-transform hover:underline active:scale-95"
      >
        <span aria-live="polite">{copiata ? 'Copiata' : 'Copia'}</span>
      </button>
    </span>
  );
}
