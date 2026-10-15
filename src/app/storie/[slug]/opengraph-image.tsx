import { schedaOg, formatoOg } from '@/lib/og';
import { storie } from '@/content';

export const alt = 'Una storia di Mattia De Luca';
export const size = formatoOg;
export const contentType = 'image/png';

export function generateStaticParams() {
  return storie.map((s) => ({ slug: s.slug }));
}

export default async function Immagine({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = storie.find((x) => x.slug === slug) ?? storie[0];
  return schedaOg({ sopra: `Storia · ${s.azienda}`, titolo: s.titolo, numero: s.numero });
}
