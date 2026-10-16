import Image from 'next/image';
import Link from 'next/link';
import { storie, note } from '@/content';
import { foto, mattia, schermate, type Immagine } from '@/content/foto';
import { Barre } from '@/components/Barre';
import { DecidiTu } from '@/components/Decidi';
import { ElencoErrori } from '@/components/ElencoErrori';
import { GiorniDaGM } from '@/components/GiorniDaGM';
import { Clip } from '@/components/Palco';
import { dataBreve } from '@/lib/date';

const immagineStoria: Record<string, Immagine> = {
  pagamenti: foto.birilli,
  leadsbridge: foto.telefonista,
  palestra: foto.manubri,
};

export default function Home() {
  return (
    <>
      {/* La prima schermata: il ritratto resta fermo a destra mentre a sinistra si legge il perché */}
      <div className="apertura">
        <figure className="apertura-foto">
          <Image src={mattia.ritratto.src} alt={mattia.ritratto.alt} priority sizes="(min-width: 1024px) 50vw, 100vw" />
        </figure>

        <div>
          <section aria-labelledby="titolo" className="biglietto">
            <Barre barre={{ totale: 44, accese: 4, dopo: '' }} fitte className="entra-subito" />
            <div className="pt-8 lg:my-auto lg:pt-16">
              <h1
                id="titolo"
                className="entra-subito text-[clamp(2.125rem,0.5rem+6.5vw,4.75rem)] leading-[0.95]"
                style={{ '--ritardo': 1 } as React.CSSProperties}
              >
                <span className="block">Product manager,</span>
                <span className="block">con una palestra</span>
              </h1>
              <p className="entra-subito mt-6 max-w-[38ch]" style={{ '--ritardo': 2 } as React.CSSProperties}>
                Sono Mattia De Luca. Ho fatto il designer, lo sviluppatore e il product manager, in QubicaAMF e in
                LeadsBridge. Da agosto 2026 sono il GM di 21Lab, una palestra a Vignola, e il suo gestionale lo
                costruisco con agenti AI. <strong className="font-semibold">Cerco un ruolo da product manager in un team.</strong>
              </p>
              <div className="entra-subito mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ '--ritardo': 3 } as React.CSSProperties}>
                <a href="#decidi" className="pulsante" data-umami-event="home-decidi">
                  Prendi tre decisioni
                </a>
                <Link href="/storie" className="collegamento">
                  Oppure leggi le storie
                </Link>
              </div>
            </div>
            <p className="mt-10 text-piccolo text-grigio lg:mt-0">
              GM di 21Lab <GiorniDaGM />, il gestionale va ai primi clienti il 7 dicembre.
            </p>
          </section>

          <section aria-label="Perché una palestra" className="px-[var(--margine)] py-20 lg:px-12 lg:py-36">
            <div className="max-w-[34rem] space-y-5">
              <p data-entra className="text-lead font-medium">
                Per sei anni ho detto nelle riunioni che le decisioni si prendono guardando i dati, che si prova in
                piccolo, che il software deve restituire tempo alle persone.
              </p>
              <p data-entra>
                Poi ho voluto vedere se funziona anche alle sette di sera, con la reception piena e una classe che sta
                per partire. Così il primo agosto 2026 ho lasciato un&apos;azienda da 600 persone per una palestra.
              </p>
              <p data-entra>
                Detta così sembra la mossa di chi molla tutto per aprire un chiringuito ai Caraibi. Il motivo è più
                semplice, e sta tutto nelle tre decisioni qui sotto. Una per ogni lavoro.
              </p>
              <p data-entra className="text-grigio">
                Prima di leggere cosa ho fatto io, prova a prenderle tu. Ci vuole un minuto.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section id="decidi" aria-labelledby="titolo-decidi" className="px-[var(--margine)] pt-16 lg:pt-28">
        <h2 id="titolo-decidi" data-entra className="text-testa max-w-[16ch]">
          Tre decisioni. Prima tu, poi io.
        </h2>
        <div className="mt-10 lg:mt-16">
          <DecidiTu />
        </div>
      </section>

      <section aria-labelledby="titolo-storie" className="px-[var(--margine)] pt-32 lg:pt-48">
        <div className="lg:ml-[12%] lg:max-w-[52rem]">
          <h2 id="titolo-storie" data-entra className="text-testa">
            Le storie intere
          </h2>
          <ul className="registro mt-8">
            {storie.map((s) => (
              <li key={s.slug} data-entra className="relative">
                <div className="foto-taglio mb-5 aspect-[16/10] overflow-hidden lg:hidden">
                  {s.slug === 'pagamenti' ? (
                    <Clip className="h-full w-full" />
                  ) : (
                    <Image src={immagineStoria[s.slug].src} alt="" sizes="100vw" className="h-full w-full object-cover" />
                  )}
                </div>
                <Link href={`/storie/${s.slug}`} className="registro-riga group lg:!grid-cols-[11rem_1fr_auto] lg:!py-7">
                  <span className="text-testa text-verde tabular-nums lg:row-span-2">{s.numero}</span>
                  <span className="text-lead col-start-1 font-medium lg:col-start-2">{s.titolo}</span>
                  <span className="col-start-1 text-piccolo text-grigio lg:col-start-2">
                    {s.azienda}, {s.periodo}. {s.minuti} minuti.
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-[calc(100%+48px)] hidden w-[300px] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 xl:block"
                  >
                    {s.slug === 'pagamenti' ? (
                      <Clip className="aspect-[4/3] w-full" />
                    ) : (
                      <Image src={immagineStoria[s.slug].src} alt="" sizes="300px" className="aspect-[4/3] w-full object-cover" />
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <h3 data-entra className="mt-16 text-lead font-medium text-grigio">
            Note, più corte
          </h3>
          <ul className="registro mt-2">
            {note.map((n) => (
              <li key={n.slug} data-entra>
                <Link href={`/note/${n.slug}`} className="registro-riga">
                  <span className="text-lead">{n.titolo}</span>
                  <span className="self-start text-piccolo text-grigio tabular-nums">
                    <time dateTime={n.data}>{dataBreve(n.data)}</time>
                  </span>
                  <span className="text-piccolo text-grigio">{n.riga}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titolo-errori" className="px-[var(--margine)] pt-32 lg:pt-48">
        <h2 id="titolo-errori" data-entra className="text-testa max-w-[18ch]">
          Gli errori che ho pagato
        </h2>
        <p data-entra className="mt-4 max-w-[46ch] text-grigio">
          Tre, con quanto mi sono costati e la regola che ne è uscita.
        </p>
        <div className="mt-10 lg:mt-16">
          <ElencoErrori />
        </div>
        <Link href="/errori" className="collegamento mt-8 inline-block font-semibold lg:ml-[calc(50%+16px)]">
          Gli errori raccontati per intero <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section aria-label="Adesso" className="mt-32 bg-superficie px-[var(--margine)] py-20 lg:mt-48 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:py-32">
        <figure data-entra className="mb-14 lg:order-2 lg:col-span-5 lg:col-start-8 lg:mb-0 lg:self-center">
          <div className="telefono mx-auto lg:mx-0" data-ui>
            <Image src={schermate.assistente.src} alt={schermate.assistente.alt} sizes="320px" className="w-full" />
          </div>
          <figcaption className="didascalia mx-auto max-w-[320px] lg:mx-0">
            Il gestionale di 21Lab, una sera di ottobre. {schermate.assistente.didascalia}
          </figcaption>
        </figure>
        <div className="max-w-[34rem] lg:col-span-6 lg:col-start-2">
          <Image
            data-entra
            src={mattia.volto.src}
            alt={mattia.volto.alt}
            sizes="88px"
            className="size-14 rounded-full object-cover"
          />
          <div className="mt-7 space-y-5">
            <p data-entra>
              Adesso faccio il GM di 21Lab. Prezzi e pacchetti, turni e compensi dei coach, clienti, conti di fine
              mese. Il lunedì sera sono spesso alla reception, ed è il posto migliore che conosca per capire se una
              decisione era giusta.
            </p>
            <p data-entra>
              La sera chiudo la prima versione del gestionale. L&apos;app per iPhone è in prova da ottobre, e il primo
              gruppo di clienti la userà dal 7 dicembre.
            </p>
            <p data-entra>
              Cerco un team, un&apos;azienda, dove si può dire quello che si pensa e il rischio si condivide. Un ruolo
              da product manager, in qualunque settore. Ho fatto pagamenti, integrazioni e una palestra, e il metodo
              era lo stesso.
            </p>
            <p data-entra>
              Da solo vado veloce, ma imparo poco. Mi manca qualcuno che mi dica che la mia idea migliore della
              settimana è una pessima idea.
            </p>
          </div>
          <p data-entra className="text-lead mt-8 italic">
            Mattia
          </p>
          <p className="text-piccolo text-grigio">GM di 21Lab, Vignola</p>
          <Link href="/adesso" className="collegamento mt-8 inline-block font-semibold">
            Cosa sto facendo questo mese <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
