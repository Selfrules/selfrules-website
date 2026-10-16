import { ImageResponse } from 'next/og';

export const formatoOg = { width: 1200, height: 630 };

// Scheda per LinkedIn, come il sito: gesso, il numero enorme in rosso ciliegia, il titolo in nero
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
          background: '#F3F2EF',
          color: '#141414',
          padding: '64px 72px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontWeight: 700,
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#57534D' }}>{sopra}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {numero && (
            <div style={{ display: 'flex', fontSize: 190, lineHeight: 0.9, letterSpacing: -8, color: '#B0102C', marginBottom: 28 }}>
              {numero.toUpperCase()}
            </div>
          )}
          <div style={{ display: 'flex', fontSize: numero ? 52 : 72, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1040 }}>
            {titolo}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28 }}>
          <span>MATTIA DE LUCA</span>
          <span style={{ color: '#57534D' }}>selfrules.org</span>
        </div>
      </div>
    ),
    formatoOg,
  );
}
