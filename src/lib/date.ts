const mesi = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

// "2026-02-08" diventa "8 feb 2026"
export function dataBreve(iso: string) {
  const [a, m, g] = iso.split('-').map(Number);
  return `${g} ${mesi[m - 1]} ${a}`;
}
