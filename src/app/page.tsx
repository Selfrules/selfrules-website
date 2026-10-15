import Link from 'next/link';
import { storie, note, AGGIORNATO } from '@/content';
import { errori } from '@/content/errori';
import { ParolePerParola, Colonna } from '@/components/Titolo';
import { Cerchiata } from '@/components/Cerchiata';
import { RigaStoria } from '@/components/RigaStoria';
import { ListaNote } from '@/components/ListaNote';

export default function Home() {
  const errore = errori[0];
  return (
    <Colonna>
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24">
        <p className="etichetta appare mb-5" style={{ '--ritardo': '0s' } as React.CSSProperties}>
          Senior Product Manager · GM di 21Lab
        </p>
        <h1 className="titolo-morbido text-[2.65rem] leading-[1.05] font-medium tracking-tight text-balance sm:text-[4rem]">
          <span className="cursore">
            <ParolePerParola testo="Ho fatto il designer, lo sviluppatore e il product manager." />
          </span>
        </h1>
        <p
          className="appare mt-7 max-w-[36rem] text-[1.15rem] leading-relaxed text-matita sm:text-xl"
          style={{ '--ritardo': '0.5s' } as React.CSSProperties}
        >
          Poi ho preso in mano una <Cerchiata>palestra</Cerchiata>, per vedere se le cose che dicevo
          nelle riunioni funzionano anche alle sette di sera con la reception piena.
        </p>
        <div
          className="appare mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          style={{ '--ritardo': '0.7s' } as React.CSSProperties}
        >
          <a href="#contatti" className="bottone" data-umami-event="home-scrivimi">
            Scrivimi
          </a>
          <Link href="/storie" className="link font-medium">
            Leggi le storie <span className="freccia" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="titolo-storie" className="border-t border-inchiostro pt-10">
        <h2 id="titolo-storie" className="font-titolo text-3xl font-medium">
          Tre storie, con i numeri
        </h2>
        <ul className="mt-6">
          {storie.map((s) => (
            <RigaStoria key={s.slug} storia={s} />
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="titolo-errore"
        className="rivela relative mt-20 overflow-hidden rounded-md bg-rosa px-6 py-9 text-rosa-inchiostro sm:px-10"
      >
        <p className="etichetta !text-rosa-inchiostro/80" id="titolo-errore">
          Errore n. {errore.numero}
        </p>
        <p className="mt-3 font-titolo text-[2.6rem] leading-none font-medium sm:text-5xl">
          <span className="evidenziatore">{errore.costo}</span>
        </p>
        <p className="mt-5 max-w-[32rem]">
          Un negozio online bellissimo che in tre settimane non ha venduto niente. Alla fine il cliente mi
          ha chiesto dove si cliccava per pagare.
        </p>
        <div className="mt-7 border-l-2 border-rosa-inchiostro/40 pl-4">
          <p className="etichetta !text-rosa-inchiostro/80">La regola che ne è uscita</p>
          <p className="mt-2 font-titolo text-xl leading-snug sm:text-2xl">{errore.regola}</p>
        </div>
        <Link href="/errori" className="link mt-7 inline-block font-medium !text-rosa-inchiostro">
          Tutti gli errori <span className="freccia" aria-hidden="true">→</span>
        </Link>
      </section>

      <section aria-labelledby="titolo-adesso" className="rivela mt-20">
        <p className="etichetta">Aggiornato il {AGGIORNATO}</p>
        <h2 id="titolo-adesso" className="mt-3 font-titolo text-3xl font-medium">
          Adesso
        </h2>
        <p className="mt-4 text-lg">
          Faccio il GM di 21Lab e chiudo la prima versione del gestionale. Cerco un team, un&apos;azienda,
          dove si può dire quello che si pensa e il rischio si condivide.
        </p>
        <Link href="/adesso" className="link mt-5 inline-block font-medium">
          Cosa sto facendo questo mese <span className="freccia" aria-hidden="true">→</span>
        </Link>
      </section>

      <section aria-labelledby="titolo-note" className="rivela mt-20">
        <h2 id="titolo-note" className="font-titolo text-3xl font-medium">
          Note
        </h2>
        <ListaNote note={note.slice(0, 3)} compatta />
        <Link href="/note" className="link mt-6 inline-block font-medium">
          Tutte le note <span className="freccia" aria-hidden="true">→</span>
        </Link>
      </section>
    </Colonna>
  );
}
