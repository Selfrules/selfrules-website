'use client';

import { cn } from '@/lib/utils';

// Animation: blink keyframes with step-end timing defined in globals.css
// Reduced motion: prefers-reduced-motion: reduce disables animation via globals.css .animate-blink rule

interface BlinkingCursorProps {
  type: 'block' | 'underscore';
  className?: string;
}

export function BlinkingCursor({ type, className }: BlinkingCursorProps) {
  if (type === 'block') {
    return (
      <span
        className={cn(
          'inline-block w-[8px] h-[1.1em] bg-accent align-middle ml-1 animate-blink blinking-cursor',
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={cn('text-accent animate-blink blinking-cursor', className)}
      aria-hidden="true"
    >
      _
    </span>
  );
}
