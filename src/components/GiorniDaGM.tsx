'use client';

import { useSyncExternalStore } from 'react';

// Da quanti giorni Mattia è GM di 21Lab. Il numero cambia ogni giorno; senza script resta la data di inizio.
const INIZIO = Date.UTC(2026, 7, 1);

const nessunEvento = () => () => {};
const giorniOggi = () => Math.max(1, Math.floor((Date.now() - INIZIO) / 86_400_000) + 1);
const sulServer = () => null;

export function GiorniDaGM() {
  const n = useSyncExternalStore(nessunEvento, giorniOggi, sulServer);
  return (
    <time dateTime="2026-08-01" title="GM del 21Lab dal 1° agosto 2026">
      {n === null ? 'dal 1° agosto 2026' : n === 1 ? 'da oggi' : `da ${n} giorni`}
    </time>
  );
}
