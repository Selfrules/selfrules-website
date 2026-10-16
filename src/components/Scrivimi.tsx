'use client';

import { useState } from 'react';
import { EMAIL } from '@/content';

// Un campo solo. Quello che scrivi finisce in una email già pronta nel tuo programma di posta: niente moduli, niente server.
export function Scrivimi() {
  const [testo, setTesto] = useState('');
  const [copiata, setCopiata] = useState(false);

  const manda = (e: React.FormEvent) => {
    e.preventDefault();
    const oggetto = encodeURIComponent('Dal tuo sito');
    const corpo = encodeURIComponent(testo.trim());
    window.location.href = `mailto:${EMAIL}?subject=${oggetto}${corpo ? `&body=${corpo}` : ''}`;
  };

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
    <div>
      <form onSubmit={manda} action={`mailto:${EMAIL}`} method="get" className="campo">
        <label htmlFor="messaggio" className="sr-only">
          Il tuo messaggio
        </label>
        <textarea
          id="messaggio"
          name="body"
          rows={2}
          value={testo}
          onChange={(e) => setTesto(e.target.value)}
          placeholder="Ciao Mattia, ti scrivo perché…"
        />
        <button type="submit" className="pulsante" data-umami-event="scrivimi-manda">
          Manda
        </button>
      </form>
      <p className="mt-3 text-piccolo opacity-85">
        Si apre la tua posta con il messaggio già scritto. Ti rispondo io.
      </p>
      <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1">
        <a href={`mailto:${EMAIL}`} className="collegamento" data-umami-event="email-scrivi">
          {EMAIL}
        </a>
        <button type="button" onClick={copia} className="collegamento font-semibold" data-umami-event="email-copia">
          <span aria-live="polite">{copiata ? 'Copiata' : 'Copia'}</span>
        </button>
      </p>
    </div>
  );
}
