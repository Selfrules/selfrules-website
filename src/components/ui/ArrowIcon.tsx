import { cn } from '@/lib/utils';

interface ArrowIconProps {
  direction?: 'forward' | 'back';
  className?: string;
}

export function ArrowIcon({
  direction = 'forward',
  className,
}: ArrowIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block', className)}
    >
      {direction === 'back' ? '←' : '→'}
    </span>
  );
}
