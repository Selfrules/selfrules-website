import { ImageResponse } from 'next/og';

export interface OGImageConfig {
  title: string;
  subtitle?: string;
  accent?: string;
  theme?: 'dark' | 'light';
}

/**
 * Create a dynamic OG image with design system styling
 * 1200x630px (standard OG size)
 * Dark background (#0A0A0B)
 * Light text (#F5F5F0)
 * Accent color (#E8A838)
 */
export async function createOGImage({
  title,
  subtitle,
  accent = '#E8A838',
  theme = 'dark',
}: OGImageConfig) {
  const bgColor = theme === 'dark' ? '#0A0A0B' : '#F5F5F0';
  const textColor = theme === 'dark' ? '#F5F5F0' : '#0A0A0B';
  const secondaryText = theme === 'dark' ? '#8A8A8E' : '#666666';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: bgColor,
          padding: '80px',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        {/* Main content container */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          {/* Title */}
          <h1
            style={{
              margin: '0 0 24px 0',
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: textColor,
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: 1.4,
                color: secondaryText,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '40px',
            borderTop: `1px solid ${theme === 'dark' ? '#1A1A1F' : '#E0E0E0'}`,
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: secondaryText,
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            selfrules.org
          </span>
          <div
            style={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '0px',
                backgroundColor: accent,
              }}
            />
            <span
              style={{
                fontSize: '14px',
                color: accent,
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              Mattia De Luca
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(new URL('@/assets/fonts/inter.ttf', import.meta.url)).then((res) =>
            res.arrayBuffer()
          ),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Space Grotesk',
          data: await fetch(new URL('@/assets/fonts/space-grotesk.ttf', import.meta.url)).then(
            (res) => res.arrayBuffer()
          ),
          weight: 700,
          style: 'normal',
        },
        {
          name: 'JetBrains Mono',
          data: await fetch(new URL('@/assets/fonts/jetbrains-mono.ttf', import.meta.url)).then(
            (res) => res.arrayBuffer()
          ),
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );
}
