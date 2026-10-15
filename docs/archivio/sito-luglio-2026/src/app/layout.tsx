import type { Metadata } from 'next';
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
  return children;
}
