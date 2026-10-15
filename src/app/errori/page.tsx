import type { Metadata } from 'next';
import { errori } from '@/content/errori';
import { Colonna, TestataPagina } from '@/components/Titolo';

export const metadata: Metadata = {
  title: 'Errori',
  description: 'Gli errori che mi sono costati qualcosa. Ognuno con la scena, il costo e la regola che ne è uscita.',
  alternates: { canonical: '/errori' },
};

export default function PaginaErrori() {
  return (
    <Colonna>
      <TestataPagina
        sopra="Errori"
        titolo="Gli errori che mi sono costati qualcosa"
        intro="Ognuno ha una scena, un costo e la regola che ne è uscita. Li tengo qui perché mi hanno insegnato più delle cose andate bene."
      />
      <ol className="grid gap-10">
        {errori.map((e) => (
          <li
            key={e.numero}
            className="rivela relative overflow-hidden rounded-md bg-rosa px-6 pt-8 pb-9 text-rosa-inchiostro sm:px-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="etichetta !text-rosa-inchiostro/80">Errore n. {e.numero}</p>
                <h2 className="mt-2 font-titolo text-[1.75rem] leading-tight font-medium">{e.titolo}</h2>
              </div>
              <p className="timbro shrink-0 rotate-[-7deg] rounded-sm border-[3px] border-double border-timbro px-3 py-1.5 text-center font-mono text-timbro uppercase">
                <span className="block text-2xl leading-none font-medium tracking-tight">{e.costo}</span>
                <span className="mt-1 block max-w-[9rem] text-[0.62rem] leading-tight tracking-wider">
                  {e.costoSpiegato}
                </span>
              </p>
            </div>
            <div className="mt-5 space-y-4">
              {e.scena.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-7 border-l-2 border-rosa-inchiostro/40 pl-4">
              <p className="etichetta !text-rosa-inchiostro/80">La regola</p>
              <p className="mt-2 font-titolo text-xl leading-snug sm:text-[1.4rem]">{e.regola}</p>
            </div>
          </li>
        ))}
      </ol>
    </Colonna>
  );
}
