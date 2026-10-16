'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { decisioni, type Decisione, type Scelta } from '@/content/decisioni';
import { Barre } from './Barre';

// "Decidi tu": chi legge sceglie prima, poi vede cosa ho fatto io. In home ci sono tutte e tre le decisioni
// col punteggio alla fine; dentro una storia ce n'è una sola, prima del capitolo dove la prendo.
// Senza script la scena resta leggibile e la risposta sta in un riquadro che si apre.

const nessunEvento = () => () => {};
const useNelBrowser = () => useSyncExternalStore(nessunEvento, () => true, () => false);

type Risposte = Partial<Record<string, Scelta['id']>>;

function Esito({ d, scelta, inStoria }: { d: Decisione; scelta: Scelta['id'] | null; inStoria: boolean }) {
  const stessa = scelta === d.mia;
  const mia = d.scelte.find((s) => s.id === d.mia)!;
  return (
    <div className="esito" aria-live="polite">
      {scelta ? (
        <p className="text-lead font-medium">{stessa ? d.stessa : d.diversa}</p>
      ) : (
        <p className="text-lead font-medium">Io ho scelto «{mia.testo.toLowerCase()}».</p>
      )}
      {!inStoria && <p className="mt-4 max-w-[46ch]">{d.fatto}</p>}
      <p className="cifra mt-8 text-verde">{d.numero}</p>
      <p className="mt-1 text-grigio">{d.numeroDetto}</p>
      <Barre barre={d.barre} className="mt-6" />
      <p className="mt-5 max-w-[46ch]">{d.barre.dopo}</p>
    </div>
  );
}

function Foglio({
  d,
  scelta,
  onScegli,
  inStoria,
}: {
  d: Decisione;
  scelta: Scelta['id'] | null;
  onScegli: (id: Scelta['id']) => void;
  inStoria: boolean;
}) {
  const nelBrowser = useNelBrowser();
  return (
    <div className="foglio">
      <p className="text-grigio">{d.dove}</p>
      <p className="text-lead mt-3 max-w-[40ch]">{d.scena}</p>
      <p className="text-lead mt-6 font-semibold">{d.domanda}</p>

      {nelBrowser ? (
        <>
          <div className="scelte mt-5" role="group" aria-label={d.domanda}>
            {d.scelte.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onScegli(s.id)}
                disabled={scelta !== null}
                aria-pressed={scelta === s.id}
                data-mia={scelta !== null && s.id === d.mia ? 'si' : undefined}
                className="scelta"
              >
                {s.testo}
              </button>
            ))}
          </div>
          {scelta !== null && <Esito d={d} scelta={scelta} inStoria={inStoria} />}
        </>
      ) : (
        <>
          <ul className="mt-5 list-disc pl-5">
            {d.scelte.map((s) => (
              <li key={s.id}>{s.testo}</li>
            ))}
          </ul>
          <details className="mt-6">
            <summary className="collegamento cursor-pointer font-semibold">Cosa ho fatto io</summary>
            <Esito d={d} scelta={null} inStoria={inStoria} />
          </details>
        </>
      )}
    </div>
  );
}

export function DecidiStoria({ slug }: { slug: string }) {
  const d = decisioni.find((x) => x.slug === slug);
  const [scelta, setScelta] = useState<Scelta['id'] | null>(null);
  if (!d) return null;
  return (
    <aside aria-label="Decidi tu" className="decidi-storia not-prose">
      <p className="text-testa mb-8 font-medium">Decidi tu, prima di leggere</p>
      <Foglio d={d} scelta={scelta} onScegli={setScelta} inStoria />
      {scelta !== null && <p className="mt-6 font-semibold">Cosa ho fatto, e perché, è qui sotto.</p>}
    </aside>
  );
}

export function DecidiTu() {
  const [attiva, setAttiva] = useState(0);
  const [risposte, setRisposte] = useState<Risposte>({});
  const d = decisioni[attiva];
  const date = decisioni.filter((x) => risposte[x.slug]).length;
  const comeMe = decisioni.filter((x) => risposte[x.slug] === x.mia).length;
  const finito = date === decisioni.length;

  const scegli = (id: Scelta['id']) => setRisposte((r) => ({ ...r, [d.slug]: id }));
  const prossima = decisioni.findIndex((x) => !risposte[x.slug]);

  return (
    <div className="decidi">
      <div className="decidi-nomi" role="tablist" aria-label="Le tre decisioni">
        {decisioni.map((x, i) => (
          <button
            key={x.slug}
            type="button"
            role="tab"
            id={`tab-${x.slug}`}
            aria-selected={i === attiva}
            aria-controls="decidi-palco"
            onClick={() => setAttiva(i)}
            className="decidi-nome"
          >
            <span>{x.nome}</span>
            <span className="decidi-segno" aria-hidden="true">
              {risposte[x.slug] ? (risposte[x.slug] === x.mia ? 'come me' : 'diverso') : ''}
            </span>
          </button>
        ))}
      </div>

      <div id="decidi-palco" role="tabpanel" aria-labelledby={`tab-${d.slug}`} className="decidi-palco">
        <Foglio key={d.slug} d={d} scelta={risposte[d.slug] ?? null} onScegli={scegli} inStoria={false} />
        {risposte[d.slug] && (
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href={`/storie/${d.slug}`} className="collegamento font-semibold">
              Leggi la storia intera <span aria-hidden="true">→</span>
            </Link>
            {prossima >= 0 && (
              <button type="button" onClick={() => setAttiva(prossima)} className="pulsante">
                Prossima decisione
              </button>
            )}
          </div>
        )}
        {finito && (
          <div className="punteggio" aria-live="polite">
            <p className="text-testa font-medium">
              Hai deciso come me {comeMe === 1 ? 'una volta' : comeMe === 0 ? 'nessuna volta' : `${comeMe} volte`} su 3.
            </p>
            <p className="mt-3 max-w-[46ch]">
              {comeMe === 3
                ? 'Allora probabilmente lavoreremmo bene insieme. Scrivimi.'
                : 'Le tue scelte non sono sbagliate. Mi interessa sapere perché le hai fatte, scrivimi.'}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#scrivimi" className="pulsante">
                Scrivimi
              </a>
              <button
                type="button"
                className="collegamento font-semibold"
                onClick={() => {
                  setRisposte({});
                  setAttiva(0);
                }}
              >
                Ricomincia
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
