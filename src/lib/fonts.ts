import { Libre_Franklin, Source_Serif_4 } from 'next/font/google';

// Libre Franklin per il nome e i titoli, Source Serif 4 per leggere. Redesign del 16/10/2026, docs/design.md
export const franklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-franklin',
  display: 'swap',
});

export const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});
