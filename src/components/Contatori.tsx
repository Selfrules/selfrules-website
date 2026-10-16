'use client';

import { useSyncExternalStore } from 'react';

// Due numeri che cambiano da soli ogni giorno: da quanto sono GM e quanto manca al gruppo pilota.
// Senza script restano le date.
const GIORNO = 86_400_000;
const INIZIO_GM = Date.UTC(2026, 7, 1);
const PILOTA = Date.UTC(2026, 11, 7);

const nessunEvento = () => () => {};
const oggi = () => Math.floor(Date.now() / GIORNO) * GIORNO;
const sulServer = () => null;

export function Contatori() {
  const adesso = useSyncExternalStore(nessunEvento, oggi, sulServer);
  const daGM = adesso === null ? null : Math.floor((adesso - INIZIO_GM) / GIORNO) + 1;
  const alPilota = adesso === null ? null : Math.ceil((PILOTA - adesso) / GIORNO);

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:max-w-[48rem]">
      <p>
        <span className="cifra block text-verde">{daGM ?? '1° ago'}</span>
        <span className="mt-2 block max-w-[20ch] text-grigio">giorni da GM di 21Lab</span>
      </p>
      <p>
        <span className="cifra block">{alPilota === null ? '7 dic' : alPilota > 0 ? alPilota : 'via'}</span>
        <span className="mt-2 block max-w-[20ch] text-grigio">giorni prima che i primi clienti provino il gestionale</span>
      </p>
    </div>
  );
}
