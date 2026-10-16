import Link from 'next/link';
import { CopiaEmail } from './CopiaEmail';
import { LINKEDIN } from '@/content';
import { foto, video } from '@/content/foto';

const pagine = [
  { href: '/storie', label: 'Storie' },
  { href: '/errori', label: 'Errori' },
  { href: '/adesso', label: 'Adesso' },
  { href: '/come-lavoro', label: 'Come lavoro' },
  { href: '/note', label: 'Note' },
];

// Il nome torna a tutta larghezza, in colori invertiti. Su telefono va su due righe.
function Firma() {
  const comune = {
    fill: 'currentColor',
    fontFamily: 'var(--font-franklin)',
    fontWeight: 800,
    lengthAdjust: 'spacingAndGlyphs' as const,
  };
  return (
    <div aria-hidden="true" className="nome select-none">
      <svg viewBox="0 0 1000 92" className="hidden w-full md:block">
        <text x="0" y="89" fontSize="120" textLength="1000" {...comune}>
          MATTIA DE LUCA
        </text>
      </svg>
      <svg viewBox="0 0 1000 400" className="w-full md:hidden">
        <text x="0" y="188" fontSize="254" textLength="1000" {...comune}>
          MATTIA
        </text>
        <text x="0" y="392" fontSize="254" textLength="1000" {...comune}>
          DE LUCA
        </text>
      </svg>
    </div>
  );
}

export function PieDiPagina() {
  return (
    <footer id="contatti" className="chiusura grid min-h-svh grid-rows-[auto_1fr_auto] px-4 pt-10 pb-5 md:px-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-base leading-snug md:grid-cols-12">
        <nav aria-label="Pagine" className="md:col-span-3">
          <p className="font-nome font-bold">Pagine</p>
          <ul className="mt-2 space-y-1 opacity-80">
            {pagine.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="collegamento no-underline hover:underline">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="font-nome font-bold">Contatti</p>
          <ul className="mt-2 space-y-1 opacity-80">
            <li>
              <CopiaEmail />
            </li>
            <li>
              <a href={LINKEDIN} className="collegamento" rel="me" data-umami-event="linkedin">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="/mattia-de-luca-cv.pdf" className="collegamento" download data-umami-event="cv-scarica">
                Scarica il CV
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-3">
          <p className="font-nome font-bold">Le foto</p>
          <details className="mt-2 opacity-80">
            <summary className="cursor-pointer">Archivi pubblici, in bianco e nero. Autori e licenze</summary>
            <ul className="mt-2 space-y-1.5 text-base">
              {[...Object.values(foto), video.bowling].map((f) => (
                <li key={f.pagina}>
                  <a href={f.pagina} className="collegamento">
                    {f.titolo}
                  </a>
                  , {f.autore}, {f.licenza}
                </li>
              ))}
            </ul>
          </details>
        </div>
        <p className="col-span-2 opacity-80 md:col-span-3">
          Scritto e costruito da me, con qualche agente AI che non si lamenta mai.
        </p>
      </div>
      <div />
      <div>
        <Firma />
        <p className="mt-4 text-base opacity-80">© Mattia De Luca, Vignola</p>
      </div>
    </footer>
  );
}
