import Link from 'next/link';
import { LINKEDIN, pagine as voci } from '@/content';
import { crediti } from '@/content/foto';
import { TrePaesi } from './TrePaesi';
import { Scrivimi } from './Scrivimi';

// La chiusura di ogni pagina: un campo per scrivermi, poi i tre paesi accanto al menu.
export function PieDiPagina() {
  return (
    <footer className="mt-24 lg:mt-32">
      <section id="scrivimi" aria-labelledby="titolo-scrivimi" className="campo-verde px-[var(--margine)] py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div data-entra className="lg:col-span-5">
            <p className="text-lead max-w-[30ch]">Cerchi un product manager? Hai una domanda su una storia?</p>
            <h2 id="titolo-scrivimi" className="mt-4 text-[clamp(3rem,1.5rem+6vw,7rem)] leading-[0.9] tracking-[-0.04em]">
              Scrivimi due righe
            </h2>
          </div>
          <div data-entra className="mt-10 lg:col-span-6 lg:col-start-7 lg:mt-3" style={{ '--ritardo': 1 } as React.CSSProperties}>
            <Scrivimi />
            <dl className="mt-10 grid grid-cols-2 gap-6 text-piccolo">
              <div>
                <dt className="opacity-80">Dove</dt>
                <dd>Savignano sul Panaro, lavoro a Vignola</dd>
              </div>
              <div>
                <dt className="opacity-80">Altrove</dt>
                <dd>
                  <a href={LINKEDIN} rel="me" className="collegamento" data-umami-event="linkedin">
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="bg-superficie px-[var(--margine)] pt-12 pb-8 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:pt-20">
        <div className="lg:col-span-6">
          <TrePaesi />
        </div>
        <div className="mt-14 flex flex-col lg:col-span-5 lg:col-start-8 lg:mt-0">
          <p className="font-semibold">Mattia De Luca</p>
          <nav aria-label="Pagine" className="menu-grande mt-4">
            <ul className="grid grid-cols-2 gap-x-6">
              <li>
                <Link href="/">Inizio</Link>
              </li>
              {voci.map((v) => (
                <li key={v.href}>
                  <Link href={v.href}>{v.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-12 grid gap-6">
            <p>Scritto da me, costruito con qualche agente AI.</p>
            <details>
              <summary className="cursor-pointer font-semibold">Le foto, chi le ha fatte</summary>
              <ul className="mt-3 space-y-2 text-grigio">
                <li>
                  Il ritratto di Mattia è di{' '}
                  <a href="https://valentinamalavenda.com/" className="collegamento">
                    Valentina Malavenda
                  </a>
                  . Le schermate sono dei suoi programmi, con dati di prova.
                </li>
                {crediti.map((c) => (
                  <li key={c.pagina}>
                    <a href={c.pagina} className="collegamento">
                      {c.titolo}
                    </a>
                    , {c.autore}, {c.licenza}
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <p className="mt-10 text-piccolo text-grigio">© Mattia De Luca, 2026</p>
        </div>
      </div>
    </footer>
  );
}
