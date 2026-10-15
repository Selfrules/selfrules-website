'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Simple fade-in on route change
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';

    requestAnimationFrame(() => {
      el.style.transition = 'opacity 200ms ease-in, transform 200ms ease-in';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, [pathname]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
