import type { Metadata } from 'next';
import { inter, spaceGrotesk, jetbrainsMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'selfrules.org',
  description: 'Mattia De Luca — Senior Technical Product Manager',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
