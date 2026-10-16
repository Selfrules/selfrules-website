import { Barre } from './Barre';

// Un annuncio come lo mostrava CasaHunter, ridisegnato in HTML per leggersi dal telefono.
// I valori vengono da una schermata del programma (public/images/casahunter/v1-lista.png).
export function Annuncio() {
  return (
    <figure data-entra>
      <div className="annuncio" data-ui>
        <div className="flex items-start justify-between gap-4">
          <p className="font-semibold leading-tight">Trilocale ottimo stato, secondo piano, centro, Medolla</p>
          <p className="annuncio-voto">100</p>
        </div>
        <p className="text-lead mt-3 font-semibold">500 euro al mese</p>
        <p className="mt-1 text-grigio">80 metri quadri, 3 locali, parcheggio, autonomo</p>
        <p className="mt-4 text-piccolo">Il voto dell&apos;AI</p>
        <Barre barre={{ totale: 20, accese: 20, dopo: '' }} fitte className="mt-1" />
        <p className="mt-4 text-piccolo text-grigio">
          Ottimo trilocale con prezzo eccellente, 6,25 euro al metro quadro.
        </p>
      </div>
      <figcaption className="didascalia">
        Uno degli 880 annunci che CasaHunter ha letto al posto mio, con il voto che gli ha dato l&apos;AI. Ridisegnato dalla schermata del programma.
      </figcaption>
    </figure>
  );
}
