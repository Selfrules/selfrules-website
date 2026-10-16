import type { Barre as BarreDati } from '@/content/decisioni';

// Il segno che torna in tutto il sito: una fila di barre, una per problema, utente o attività.
// Quelle che contano diventano verdi. Con 44 barre le quattro accese sono sparse, come nella lista vera.
const SPARSE_44 = [5, 17, 26, 38];

function accesa(i: number, b: BarreDati) {
  if (b.totale === 44 && b.accese === 4) return SPARSE_44.includes(i);
  return i < b.accese;
}

export function Barre({
  barre,
  accese = true,
  fitte = false,
  className = '',
}: {
  barre: BarreDati;
  accese?: boolean;
  fitte?: boolean;
  className?: string;
}) {
  const molte = barre.totale > 60;
  return (
    <div
      aria-hidden="true"
      data-accese={accese ? 'si' : 'no'}
      className={`barre ${molte ? 'barre-molte' : ''} ${fitte ? 'barre-fitte' : ''} ${className}`}
    >
      {Array.from({ length: barre.totale }, (_, i) => (
        <span
          key={i}
          className={accesa(i, barre) ? 'barra conta' : 'barra'}
          style={{ '--i': molte ? Math.floor(i / 5) : i } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
