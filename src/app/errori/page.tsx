import type { Metadata } from 'next';
import Image from 'next/image';
import { mattia } from '@/content/foto';
import { ElencoErrori } from '@/components/ElencoErrori';
import { Testata } from '@/components/Testata';

export const metadata: Metadata = {
  title: 'Errori',
  description: 'Gli errori che mi sono costati qualcosa. Ognuno con la scena, il costo e la regola che ne è uscita.',
  alternates: { canonical: '/errori' },
};

export default function PaginaErrori() {
  return (
    <>
      <Testata
        titolo="Errori"
        frase="Gli errori che mi sono costati qualcosa. Ognuno ha una scena, un costo e la regola che ne è uscita."
        riga="Li tengo qui perché mi hanno insegnato più delle cose andate bene. Apri quello che ti incuriosisce."
      />

      <section aria-label="L'elenco" className="px-[var(--margine)]">
        <ElencoErrori conScena />
      </section>

      <section aria-label="Chi li ha fatti" className="mt-28 px-[var(--margine)] lg:mt-40 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <figure data-entra className="lg:col-span-5 lg:col-start-2">
          <div className="foto-taglio overflow-hidden">
            <Image src={mattia.alto.src} alt={mattia.alto.alt} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full object-cover" />
          </div>
          <figcaption className="didascalia">Io, che li ho fatti. Ne ho fatti altri, questi sono quelli che mi hanno insegnato di più.</figcaption>
        </figure>
        <div data-entra className="mt-10 self-center lg:col-span-5 lg:col-start-8 lg:mt-0">
          <p className="text-testa">Il primo l&apos;ho pagato 8.000 euro.</p>
          <p className="mt-6 max-w-[42ch]">
            Da allora, prima di guardare se una pagina è bella, guardo se le persone riescono a finire quello che sono
            venute a fare. Lo stesso per questo sito. Se qualcosa qui non funziona, dimmelo.
          </p>
          <a href="#scrivimi" className="pulsante mt-8">
            Segnalami un errore
          </a>
        </div>
      </section>
    </>
  );
}
