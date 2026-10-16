import Image from 'next/image';
import Link from 'next/link';
import { LINKEDIN, pagine as voci } from '@/content';
import { crediti, foto } from '@/content/foto';
import { Scrivimi } from './Scrivimi';

// La chiusura di ogni pagina: un campo per scrivermi, poi la Rocca di Vignola accanto al menu grande.
export function PieDiPagina() {
  return (
    <footer className="mt-32 lg:mt-48">
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
                <dd>Vignola, in provincia di Modena</dd>
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

      <div className="grid bg-superficie lg:min-h-svh lg:grid-cols-2">
        <figure className="relative h-[34svh] overflow-hidden lg:h-auto">
          <Image src={foto.rocca.src} alt={foto.rocca.alt} sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
        </figure>
        <div className="flex flex-col px-[var(--margine)] pt-10 pb-8 lg:px-12 lg:pt-16">
          <p className="font-semibold">Mattia De Luca</p>
          <nav aria-label="Pagine" className="menu-grande mt-6">
            <ul>
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
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-auto lg:pt-16">
            <p>
              Scritto da me, costruito con qualche agente AI. Il carattere è Erode di Indian Type Foundry.
            </p>
            <details>
              <summary className="cursor-pointer font-semibold">Le foto, chi le ha fatte</summary>
              <ul className="mt-3 space-y-2 text-grigio">
                <li>Il ritratto di Mattia è suo. Le schermate sono dei suoi programmi, con dati di prova.</li>
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
          <p className="mt-10 text-piccolo text-grigio">{foto.rocca.didascalia} © Mattia De Luca, 2026</p>
        </div>
      </div>
    </footer>
  );
}
