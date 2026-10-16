import localFont from 'next/font/local';

// Erode di Indian Type Foundry (Fontshare, licenza ITF Free Font), un carattere solo per tutto il sito.
// I file stanno nel repo, così la build non dipende da un servizio esterno. Redesign del 16/10/2026, docs/design-racconto.md
export const erode = localFont({
  src: [
    { path: '../fonts/erode-400.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/erode-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/erode-500.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/erode-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-erode',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});
