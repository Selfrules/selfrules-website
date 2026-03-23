'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.remove('animate-fade-up-initial');
      return;
    }

    // If already in viewport on mount, show immediately with animation
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.remove('animate-fade-up-initial');
      el.classList.add('animate-fade-up');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('animate-fade-up-initial');
          el.classList.add('animate-fade-up');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="animate-fade-up-initial">
      {children}
    </div>
  );
}
