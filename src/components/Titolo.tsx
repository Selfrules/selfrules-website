// Titolo che entra parola per parola. Senza animazioni il testo resta leggibile.
export function ParolePerParola({ testo, inizio = 0 }: { testo: string; inizio?: number }) {
  const parole = testo.split(' ');
  return (
    <>
      {parole.map((p, i) => (
        <span key={i} className="parola" style={{ '--i': i + inizio } as React.CSSProperties}>
          {p}
          {i < parole.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
}

// La riga di servizio (azienda, data, minuti) sta sotto il titolo, non sopra: il titolo apre la pagina
export function TestataPagina({
  meta,
  titolo,
  intro,
}: {
  meta?: React.ReactNode;
  titolo: string;
  intro?: React.ReactNode;
}) {
  return (
    <header className="pt-14 pb-10 sm:pt-20">
      <h1 className="titolo-morbido text-[2.15rem] leading-[1.08] font-medium tracking-tight text-balance sm:text-[3.2rem] xl:w-[860px]">
        <ParolePerParola testo={titolo} />
      </h1>
      {meta && (
        <p className="etichetta appare mt-4" style={{ '--ritardo': '0.3s' } as React.CSSProperties}>
          {meta}
        </p>
      )}
      {intro && <p className="appare mt-5 max-w-[34rem] text-lg text-matita">{intro}</p>}
    </header>
  );
}

export function Colonna({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[680px] px-5 sm:px-0">{children}</div>;
}
