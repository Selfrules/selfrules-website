import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  bordered?: boolean;
  className?: string;
}

export function Tag({ children, bordered = true, className }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-[13px] uppercase tracking-[0.05em] text-secondary inline-block',
        bordered && 'px-3 py-1 bg-surface border border-default',
        className
      )}
    >
      {children}
    </span>
  );
}
