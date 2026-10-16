// L'apertura delle pagine interne: la parola grande, una frase che dice cosa c'è, e se serve una riga sotto.
export function Testata({ titolo, frase, riga, children }: { titolo: string; frase: string; riga?: string; children?: React.ReactNode }) {
  return (
    <header className="px-[var(--margine)] pt-10 pb-14 lg:pt-20 lg:pb-24">
      <h1 className="entra-subito text-[clamp(3.5rem,1.5rem+9vw,10rem)] leading-[0.88] tracking-[-0.045em]">{titolo}</h1>
      <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <p className="entra-subito text-lead max-w-[38ch] lg:col-span-7" style={{ '--ritardo': 1 } as React.CSSProperties}>
          {frase}
        </p>
        {riga && (
          <p className="entra-subito mt-4 max-w-[40ch] text-grigio lg:col-span-4 lg:col-start-9 lg:mt-1" style={{ '--ritardo': 2 } as React.CSSProperties}>
            {riga}
          </p>
        )}
      </div>
      {children}
    </header>
  );
}
