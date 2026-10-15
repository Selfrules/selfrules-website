import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { fraunces, inter, plexMono } from '@/lib/fonts';
import { SITO } from '@/content';
import { Navigazione } from '@/components/Navigazione';
import { PieDiPagina } from '@/components/PieDiPagina';
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
    { media: '(prefers-color-scheme: light)', color: '#faf6ee' },
    { media: '(prefers-color-scheme: dark)', color: '#15140f' },
  ],
};

// Prima del disegno della pagina, così il tema scuro non lampeggia in chiaro
const temaIniziale = `try{var t=localStorage.getItem('tema');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}`;

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
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaIniziale }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(persona) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bottone"
        >
          Vai al contenuto
        </a>
        <Navigazione />
        <main id="contenuto" className="flex-1">
          {children}
        </main>
        <PieDiPagina />
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
