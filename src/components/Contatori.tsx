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
    <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
      <div className="flex flex-col-reverse">
        <dt className="mt-2 max-w-[20ch] text-grigio">giorni da GM di 21Lab</dt>
        <dd className="cifra text-verde">{daGM ?? '1° ago'}</dd>
      </div>
      <div className="flex flex-col-reverse">
        <dt className="mt-2 max-w-[20ch] text-grigio">giorni prima che il gruppo pilota provi il gestionale</dt>
        <dd className="cifra">{alPilota === null ? '7 dic' : alPilota > 0 ? alPilota : 'via'}</dd>
      </div>
      <div className="flex flex-col-reverse">
        <dt className="mt-2 max-w-[20ch] text-grigio">annunci di case letti da CasaHunter al posto mio</dt>
        <dd className="cifra">880</dd>
      </div>
    </dl>
  );
}
