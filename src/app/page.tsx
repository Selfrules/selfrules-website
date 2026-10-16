import Image from 'next/image';
import Link from 'next/link';
import { storie, note, AGGIORNATO, EMAIL, LINKEDIN } from '@/content';
import { errori } from '@/content/errori';
import { foto, video, mattia, type Foto } from '@/content/foto';
import { GiorniDaGM } from '@/components/GiorniDaGM';
import { dataBreve } from '@/lib/date';

// Le tre foto che passano sotto il nome, una per storia, e quelle della cornice accanto ai numeri
const quadri: { foto: Pick<Foto, 'src' | 'alt'>; fondo: string; posizione: string; slug: string }[] = [
  { foto: mattia.ritratto, fondo: 'var(--terra)', posizione: '50% 30%', slug: 'io' },
  { foto: foto.birilli, fondo: 'var(--superficie)', posizione: '50% 50%', slug: 'pagamenti' },
  { foto: foto.telefonista, fondo: 'var(--superficie-2)', posizione: '72% 50%', slug: 'leadsbridge' },
  { foto: foto.sollevatore, fondo: 'var(--superficie)', posizione: '50% 30%', slug: 'palestra' },
];
const cornice: Foto[] = [foto.registratore, foto.centralino, foto.manubri];

// Un tiro di bowling da Wikimedia Commons, muto e in loop. In bianco e nero come le foto, tagliato sotto le insegne
function Clip() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={video.bowling.poster}
      aria-hidden="true"
      className="clip h-full w-full object-cover"
    >
      <source src={video.bowling.src} type="video/webm" />
    </video>
  );
}

const frase = 'Ho fatto il designer, lo sviluppatore e il product manager.';

export default function Home() {
  return (
    <>
      <section aria-labelledby="nome" className="monumento lg:-mt-16">
        <div className="monumento-strato">
          <h1 id="nome" className="nome monumento-nome">
            <span className="block lg:inline">Mattia </span>
            <span className="block lg:inline">De Luca</span>
          </h1>
          <div className="absolute inset-x-8 bottom-8 hidden items-end justify-between gap-8 lg:flex">
            <div className="max-w-[26ch] font-bold">
              <p>{frase}</p>
              <p className="mt-2">
                Senior Product Manager, <GiorniDaGM /> GM di 21Lab.
              </p>
            </div>
            <a href="#contatti" className="pulsante" data-umami-event="home-scrivimi">
              Scrivimi
            </a>
          </div>
        </div>

        <div className="mx-4 mt-5 max-w-[30rem] font-bold lg:hidden">
          <p>{frase}</p>
          <p className="mt-2">
            Senior Product Manager, <GiorniDaGM /> GM di 21Lab.
          </p>
          <a href="#contatti" className="pulsante mt-5" data-umami-event="home-scrivimi">
            Scrivimi
          </a>
        </div>

        <div className="monumento-quadri">
          {quadri.map((q, i) => {
            const s = storie.find((x) => x.slug === q.slug);
            return (
              <figure
                key={q.slug}
                className="quadro pt-6 pb-14 lg:pt-0 lg:pb-0"
                style={{ '--fondo': q.fondo } as React.CSSProperties}
              >
                <Image
                  src={q.foto.src}
                  alt={q.foto.alt}
                  priority={i === 0}
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="quadro-foto"
                  style={{ objectPosition: q.posizione }}
                />
                <figcaption className="quadro-didascalia mx-4 mt-5 max-w-[30rem] lg:mx-0 lg:mt-0">
                  {s ? (
                    <Link href={`/storie/${s.slug}`} className="group block no-underline">
                      <span className="block text-base text-grigio">
                        {s.azienda}, {s.periodo}
                      </span>
                      <span className="collegamento mt-1 block">
                        {s.titolo} <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  ) : (
                    <Link href="/come-lavoro" className="group block no-underline">
                      <span className="block text-base text-grigio">Mattia De Luca</span>
                      <span className="collegamento mt-1 block">
                        Come lavoro, il mio manuale d&apos;uso <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section aria-label="Adesso" className="px-4 py-24 md:grid md:grid-cols-12 md:gap-x-8 md:px-8 md:py-36">
        <div data-entra className="md:col-span-2 md:row-start-1 md:pt-2">
          <dl className="hidden space-y-4 text-base md:block">
            <Fatti />
          </dl>
        </div>
        <div data-entra className="md:col-span-9 md:col-start-4 md:row-start-1">
          <p className="text-[1.375rem] leading-[1.25] md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
            <Image
              src={mattia.volto.src}
              alt={mattia.volto.alt}
              sizes="160px"
              className="float-left mt-1 mr-[0.5em] aspect-square h-[5em] w-[5em] object-cover md:h-[3.6em] md:w-[3.6em]"
            />
            Poi ho preso in mano una palestra, per vedere se le cose che dicevo nelle riunioni funzionano
            anche alle sette di sera con la reception piena.
          </p>
          <p className="mt-[1.2em] text-[1.375rem] leading-[1.25] text-grigio md:text-[clamp(1.75rem,2.4vw,2.25rem)] md:leading-[1.2]">
            Adesso faccio il GM di 21Lab e chiudo la prima versione del gestionale. Cerco un team,
            un&apos;azienda, dove si può dire quello che si pensa e il rischio si condivide.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 text-base md:hidden">
            <Fatti />
          </dl>
          <Link href="/adesso" className="collegamento mt-8 inline-block font-bold">
            Cosa sto facendo questo mese <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="titolo-storie" className="vetrina px-4 pb-24 md:grid md:grid-cols-12 md:gap-x-8 md:px-8 md:pb-40">
        <div className="md:col-span-8">
          <h2 id="titolo-storie" className="testa text-[1.75rem] md:text-[2rem]">
            Tre storie, con i numeri
          </h2>
          <ul className="indice mt-8 md:mt-12">
            {storie.map((s, i) => (
              <li key={s.slug} data-entra className="mb-12 md:mb-0">
                <div className={`mb-5 aspect-[16/10] w-full overflow-hidden md:hidden ${i === 0 ? 'clip-fondo' : ''}`}>
                  {i === 0 ? (
                    <Clip />
                  ) : (
                    <Image
                      src={cornice[i].src}
                      alt={cornice[i].alt}
                      sizes="100vw"
                      className="si-avvicina h-full w-full object-cover"
                    />
                  )}
                </div>
                <Link
                  href={`/storie/${s.slug}`}
                  className="block py-1 no-underline md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] md:items-baseline md:gap-6 md:py-2.5"
                  data-umami-event={`storia-${s.slug}`}
                >
                  <span className="indice-nome testa cifre block text-[16.2vw] md:text-[clamp(3rem,6.4vw,6.5rem)] md:leading-[0.95]">
                    {s.numero}
                  </span>
                  <span className="mt-3 block md:mt-0">
                    <span className="block font-bold">{s.titolo}</span>
                    <span className="mt-1 block text-base text-grigio">
                      {s.azienda}, {s.periodo}, {s.minuti} minuti
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:col-span-4 md:block">
          <div className="cornice sticky top-[15vh] grid aspect-[4/5] w-full overflow-hidden bg-superficie">
            <div className="col-start-1 row-start-1 overflow-hidden">
              <Clip />
            </div>
            {cornice.slice(1).map((f, i) => (
              <Image
                key={i}
                src={f.src}
                alt=""
                sizes="30vw"
                className="col-start-1 row-start-1 h-full w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titolo-errori" className="bg-superficie px-4 py-24 md:px-8 md:py-40">
        <div className="md:grid md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-7 md:col-start-2">
            <h2 id="titolo-errori" className="testa ml-[7rem] text-[1.75rem] md:ml-[11.5rem] md:text-[2rem]">
              Gli errori che ho pagato
            </h2>
            <dl className="mt-10 space-y-7 md:mt-14">
              {errori.map((e) => (
                <div key={e.numero} data-entra className="grid grid-cols-[6rem_1fr] gap-x-4 md:grid-cols-[10rem_1fr] md:gap-x-6">
                  <dt className="testa cifre text-right text-[1.75rem] leading-tight md:text-[2rem]">{e.costo}</dt>
                  <dd className="max-w-[40ch] pt-0.5 md:pt-1.5">
                    <span className="font-bold">{e.titolo}</span>
                    <span className="block text-grigio">{e.costoSpiegato}.</span>
                  </dd>
                </div>
              ))}
            </dl>
            <Link href="/errori" className="collegamento mt-10 ml-[7rem] inline-block font-bold md:ml-[11.5rem]">
              Tutti gli errori, con la regola che ne è uscita <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-14 ml-auto w-[56%] md:col-span-3 md:col-start-10 md:mt-20 md:w-full">
            <Image
              src={foto['cartolina-bowling'].src}
              alt={foto['cartolina-bowling'].alt}
              sizes="(min-width: 768px) 25vw, 56vw"
              className="si-avvicina aspect-square w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="titolo-note" className="px-4 py-24 md:px-8 md:py-36">
        <h2 id="titolo-note" className="testa text-ciliegia text-[1.75rem] md:text-[clamp(1.75rem,2.6vw,2.5rem)]">
          Note
        </h2>
        <ul className="mt-6 md:mt-8">
          {note.map((n) => (
            <li key={n.slug} data-entra>
              <Link
                href={`/note/${n.slug}`}
                className="group block py-3 no-underline md:flex md:items-baseline md:justify-between md:gap-8 md:py-1"
              >
                <span className="testa block text-[1.75rem] leading-tight transition-colors group-hover:text-ciliegia md:text-[clamp(1.75rem,2.6vw,2.5rem)] md:leading-[1.45]">
                  {n.titolo}
                </span>
                <span className="cifre mt-1 flex justify-between text-base text-grigio md:mt-0 md:block md:shrink-0 md:text-[clamp(1.75rem,2.6vw,2.5rem)] md:text-inchiostro">
                  <time dateTime={n.data}>{dataBreve(n.data)}</time>
                  <span className="md:hidden">{n.minuti} minuti</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/note" className="collegamento mt-8 inline-block font-bold">
          Tutte le note <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section aria-label="Contatti" className="pb-16 md:pb-24">
        <ul className="testa text-[1.75rem] md:text-[clamp(3rem,6.4vw,6.5rem)]">
          <li className="bg-superficie">
            <a
              href={`mailto:${EMAIL}`}
              className="flex h-[22vw] items-end px-4 pb-3 no-underline transition-colors hover:text-ciliegia md:h-[150px] md:px-8 md:pb-6"
            >
              {EMAIL}
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN}
              rel="me"
              className="flex h-[22vw] items-end px-4 pb-3 no-underline transition-colors hover:text-ciliegia md:h-[150px] md:px-8 md:pb-6"
            >
              LinkedIn
            </a>
          </li>
          <li className="bg-superficie">
            <a
              href="/mattia-de-luca-cv.pdf"
              download
              className="flex h-[22vw] items-end px-4 pb-3 no-underline transition-colors hover:text-ciliegia md:h-[150px] md:px-8 md:pb-6"
            >
              Scarica il CV
            </a>
          </li>
          <li>
            <p className="flex h-[22vw] items-end px-4 pb-3 md:h-[150px] md:px-8 md:pb-6">21Lab, Vignola</p>
          </li>
          <li className="bg-ciliegia text-ciliegia-testo md:bg-transparent md:text-inchiostro">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex h-[22vw] items-end justify-between px-4 pb-3 no-underline md:h-[150px] md:justify-start md:gap-6 md:px-8 md:pb-6"
              data-umami-event="home-scrivimi-fondo"
            >
              Scrivimi
              <span
                aria-hidden="true"
                className="mb-[0.08em] grid size-[0.9em] place-items-center rounded-full bg-ciliegia-testo text-[0.55em] text-ciliegia transition-transform group-hover:translate-x-1 group-active:scale-90 md:bg-ciliegia md:text-ciliegia-testo"
              >
                →
              </span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

function Fatti() {
  return (
    <>
      <div>
        <dt className="font-bold">Dove</dt>
        <dd className="text-grigio">Vignola, Modena</dd>
      </div>
      <div>
        <dt className="font-bold">GM di 21Lab</dt>
        <dd className="text-grigio">
          <GiorniDaGM />
        </dd>
      </div>
      <div>
        <dt className="font-bold">Aggiornato</dt>
        <dd className="text-grigio">il {AGGIORNATO}</dd>
      </div>
    </>
  );
}
