'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Le parti di ogni blocco entrano una dopo l'altra quando il blocco arriva sullo schermo, una volta sola.
// Senza questo script il CSS non nasconde niente: la classe .mv sull'html la mette lo script del tema.
export function Movimento() {
  const percorso = usePathname();

  useEffect(() => {
    const blocchi = document.querySelectorAll<HTMLElement>('[data-entra]:not(.dentro)');
    if (!('IntersectionObserver' in window)) {
      blocchi.forEach((b) => b.classList.add('dentro'));
      return;
    }
    const osservatore = new IntersectionObserver(
      (voci) => {
        for (const v of voci) {
          if (!v.isIntersecting) continue;
          v.target.classList.add('dentro');
          osservatore.unobserve(v.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    blocchi.forEach((b) => osservatore.observe(b));
    return () => osservatore.disconnect();
  }, [percorso]);

  return null;
}
