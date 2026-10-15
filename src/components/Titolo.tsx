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

export function TestataPagina({
  sopra,
  titolo,
  intro,
}: {
  sopra?: React.ReactNode;
  titolo: string;
  intro?: React.ReactNode;
}) {
  return (
    <header className="pt-14 pb-10 sm:pt-20">
      {sopra && (
        <p className="etichetta appare" style={{ '--ritardo': '0s' } as React.CSSProperties}>
          {sopra}
        </p>
      )}
      <h1 className="titolo-morbido mt-4 text-[2.4rem] leading-[1.08] font-medium tracking-tight text-balance sm:text-[3.2rem]">
        <ParolePerParola testo={titolo} />
      </h1>
      {intro && <p className="appare mt-5 max-w-[34rem] text-lg text-matita">{intro}</p>}
    </header>
  );
}

export function Colonna({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[680px] px-5 sm:px-0">{children}</div>;
}
