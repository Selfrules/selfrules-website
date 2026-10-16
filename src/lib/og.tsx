import { ImageResponse } from 'next/og';

export const formatoOg = { width: 1200, height: 630 };

// Scheda per LinkedIn, come il sito: carta rosa, il numero enorme in verde, il titolo in inchiostro
export function schedaOg({ sopra, titolo, numero }: { sopra: string; titolo: string; numero?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#EBE5E3',
          color: '#2B2622',
          padding: '64px 72px',
          fontFamily: 'Georgia, serif',
          fontWeight: 500,
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#645B57' }}>{sopra}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {numero && (
            <div style={{ display: 'flex', fontSize: 190, lineHeight: 0.9, letterSpacing: -8, color: '#0F7D45', marginBottom: 28 }}>
              {numero}
            </div>
          )}
          <div style={{ display: 'flex', fontSize: numero ? 52 : 72, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1040 }}>
            {titolo}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28 }}>
          <span>Mattia De Luca</span>
          <span style={{ color: '#645B57' }}>selfrules.org</span>
        </div>
      </div>
    ),
    formatoOg,
  );
}
