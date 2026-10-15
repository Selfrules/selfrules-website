'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
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
          if (delay > 0) {
            setTimeout(() => {
              el.classList.remove('animate-fade-up-initial');
              el.classList.add('animate-fade-up');
            }, delay);
          } else {
            el.classList.remove('animate-fade-up-initial');
            el.classList.add('animate-fade-up');
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="animate-fade-up-initial">
      {children}
    </div>
  );
}
