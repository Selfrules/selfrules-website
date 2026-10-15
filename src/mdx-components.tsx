import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
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

const components: MDXComponents = {
  a: ({ href = '', children }) =>
    href.startsWith('/') ? <Link href={href}>{children}</Link> : <a href={href}>{children}</a>,
  h2: ({ children }) => <h2 id={ancora(testo(children))}>{children}</h2>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
