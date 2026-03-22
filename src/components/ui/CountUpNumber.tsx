'use client';

import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountUpNumberProps {
  value: string;
  className?: string;
}

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: '', numericPart: 0, suffix: value };
  return {
    prefix: match[1],
    numericPart: parseFloat(match[2]),
    suffix: match[3],
  };
}

export function CountUpNumber({ value, className }: CountUpNumberProps) {
  const { prefix, numericPart, suffix } = parseValue(value);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // prefers-reduced-motion: show final value immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const duration = 800;
          const start = performance.now();
          const isInteger = Number.isInteger(numericPart);

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out: 1 - (1 - t)^3
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numericPart;

            setDisplay(
              `${prefix}${isInteger ? Math.round(current) : current.toFixed(1)}${suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, prefix, numericPart, suffix]);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
    </span>
  );
}
