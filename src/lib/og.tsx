import { ImageResponse } from 'next/og';

export const formatoOg = { width: 1200, height: 630 };

// Scheda per LinkedIn: carta chiara, un numero grande col segno di evidenziatore, il titolo
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
          background: '#FAF6EE',
          color: '#1A1A1A',
          padding: '72px 80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#5C5A55', textTransform: 'uppercase' }}>
          {sopra}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {numero && (
            <div style={{ display: 'flex', position: 'relative', fontSize: 120, lineHeight: 1, marginBottom: 28 }}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 6,
                  height: 30,
                  background: '#D9A93A',
                }}
              />
              <div style={{ display: 'flex', position: 'relative' }}>{numero}</div>
            </div>
          )}
          <div style={{ display: 'flex', fontSize: numero ? 54 : 72, lineHeight: 1.12, maxWidth: 1000 }}>{titolo}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#1F4D3A' }}>
          <span>Mattia De Luca</span>
          <span>selfrules.org</span>
        </div>
      </div>
    ),
    formatoOg,
  );
}
