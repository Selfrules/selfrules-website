import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const alt = 'Notes - Mattia De Luca';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0A0A0B',
          padding: '80px',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          {/* Title */}
          <h1
            style={{
              margin: '0 0 40px 0',
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#F5F5F0',
              fontFamily: '"Space Grotesk", sans-serif',
              letterSpacing: '-1px',
            }}
          >
            Notes
          </h1>

          {/* Subtitle */}
          <p
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#8A8A8E',
              maxWidth: '700px',
            }}
          >
            Thinking out loud about product decisions, systems design, and what I'm learning by building.
          </p>

          {/* Topics */}
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '14px',
                color: '#E8A838',
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 500,
              }}
            >
              Product Thinking
            </span>
            <span
              style={{
                fontSize: '14px',
                color: '#E8A838',
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 500,
              }}
            >
              Leadership
            </span>
            <span
              style={{
                fontSize: '14px',
                color: '#E8A838',
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 500,
              }}
            >
              Building
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '40px',
            borderTop: '1px solid #1A1A1F',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: '#7A7A7E',
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            selfrules.org
          </span>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#E8A838',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                color: '#E8A838',
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              Notes
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(
            new URL('https://fonts.gstatic.com/s/inter/v18/UcCO_p8_aG2OY0sH-y7F7NmVu9s3dQ.woff2')
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Space Grotesk',
          data: await fetch(
            new URL('https://fonts.gstatic.com/s/spacegrotesk/v16/V8mqIQm9oH1Z0LS8M3pdZKhz-MaVZlI.woff2')
          ).then((res) => res.arrayBuffer()),
          weight: 700,
          style: 'normal',
        },
        {
          name: 'JetBrains Mono',
          data: await fetch(
            new URL('https://fonts.gstatic.com/s/jetbrainsmono/v18/tDBx4pVdWd_RC2EoPJc2r9_PgHyPsKjhzpd.woff2')
          ).then((res) => res.arrayBuffer()),
          weight: 500,
          style: 'normal',
        },
      ],
    }
  );
}
