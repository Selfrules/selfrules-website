import { schedaOg, formatoOg } from '@/lib/og';

export const alt = 'Mattia De Luca. Ho fatto il designer, lo sviluppatore e il product manager.';
export const size = formatoOg;
export const contentType = 'image/png';

export default function Immagine() {
  return schedaOg({
    sopra: 'Product manager, con una palestra',
    titolo: 'Ho fatto il designer, lo sviluppatore e il product manager. Poi ho preso in mano una palestra.',
  });
}
