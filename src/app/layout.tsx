import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { franklin, serif } from '@/lib/fonts';
import { SITO } from '@/content';
import { Navigazione } from '@/components/Navigazione';
import { PieDiPagina } from '@/components/PieDiPagina';
import { Movimento } from '@/components/Movimento';
import './globals.css';

const descrizione =
  'Ho fatto il designer, lo sviluppatore e il product manager. Poi ho preso in mano una palestra. Storie, numeri ed errori di Mattia De Luca.';

export const metadata: Metadata = {
  metadataBase: new URL(SITO),
  title: {
    default: 'Mattia De Luca, product manager con una palestra',
    template: '%s · Mattia De Luca',
  },
  description: descrizione,
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Mattia De Luca',
    description: descrizione,
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f2ef' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

// Prima del disegno della pagina, così il tema scuro non lampeggia in chiaro
const temaIniziale = `try{var t=localStorage.getItem('tema');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('mv')}catch(e){}`;

const persona = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mattia De Luca',
  url: SITO,
  jobTitle: 'Senior Product Manager',
  worksFor: { '@type': 'Organization', name: '21Lab Fitness & Athletics' },
  hasOccupation: { '@type': 'Occupation', name: 'GM di 21Lab' },
  sameAs: ['https://www.linkedin.com/in/selfrules'],
  address: { '@type': 'PostalAddress', addressRegion: 'Modena', addressCountry: 'IT' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${franklin.variable} ${serif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaIniziale }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(persona) }}
        />
      </head>
      <body className="min-h-dvh">
        <div className="pagina flex min-h-dvh flex-col">
          <a
            href="#contenuto"
            className="pulsante sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
          >
            Vai al contenuto
          </a>
          <Navigazione />
          <main id="contenuto" className="flex-1">
            {children}
          </main>
        </div>
        <PieDiPagina />
        <Movimento />
        {process.env.NEXT_PUBLIC_UMAMI_ID && (
          <Script
            src="/api/umami/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
