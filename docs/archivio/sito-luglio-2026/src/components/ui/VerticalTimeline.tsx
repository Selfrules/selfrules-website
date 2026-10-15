import { cn } from '@/lib/utils';

interface VerticalTimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function VerticalTimeline({ children, className }: VerticalTimelineProps) {
  return (
    <div className={cn('relative pl-10 md:pl-12', className)}>
      {/* Vertical line */}
      <div className="absolute left-[14px] md:left-[16px] top-0 bottom-0 w-[2px] bg-[#1a1a1f]" aria-hidden="true" />
      {children}
    </div>
  );
}
