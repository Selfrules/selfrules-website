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
        'font-mono text-[12px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.4)] inline-flex items-center h-[32px]',
        bordered && 'px-3 bg-surface border border-[#1a1a1f]',
        className
      )}
    >
      {children}
    </span>
  );
}
