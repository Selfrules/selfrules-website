import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import { foto, schermate } from '@/content/foto';
import { ScenaInLinea } from '@/components/Palco';
import { DecidiStoria } from '@/components/Decidi';
import { Children, isValidElement, type ReactNode } from 'react';

function testo(nodo: ReactNode): string {
  return Children.toArray(nodo)
    .map((n) => {
      if (typeof n === 'string' || typeof n === 'number') return String(n);
      if (isValidElement<{ children?: ReactNode }>(n)) return testo(n.props.children);
      return '';
    })
    .join('');
}

// "Com'è finita" diventa "come-finita", così ogni sezione ha un indirizzo
export function ancora(t: string) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Una foto dentro il testo: <Foto id="rocca" /> per le foto d'archivio, <Foto schermata="mappa" /> per le schermate
function Foto({ id, schermata }: { id?: keyof typeof foto; schermata?: keyof typeof schermate }) {
  const f = id ? foto[id] : schermata ? schermate[schermata] : null;
  if (!f) return null;
  return (
    <figure data-entra>
      <div className="foto-taglio overflow-hidden">
        <Image src={f.src} alt={f.alt} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[3/2] w-full object-cover" />
      </div>
      {f.didascalia && <figcaption className="didascalia">{f.didascalia}</figcaption>}
    </figure>
  );
}

const components: MDXComponents = {
  Foto,
  ScenaInLinea,
  DecidiStoria,
  a: ({ href = '', children }) =>
    href.startsWith('/') ? <Link href={href}>{children}</Link> : <a href={href}>{children}</a>,
  h2: ({ children }) => <h2 id={ancora(testo(children))}>{children}</h2>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
