import { cn } from '@/lib/utils';

interface TimelineNodeProps {
  role: string;
  company: string;
  dates: string;
  description?: string;
  isActive?: boolean;
  className?: string;
}

export function TimelineNode({
  role,
  company,
  dates,
  description,
  isActive = false,
  className,
}: TimelineNodeProps) {
  return (
    <div className={cn('relative mb-8', className)}>
      {/* Square node (0px border-radius -- consistent with site identity) */}
      <div
        className={cn(
          'absolute w-[10px] h-[10px] -left-[33px] md:-left-[41px] top-[6px]',
          isActive ? 'bg-accent' : 'border border-default bg-transparent'
        )}
      />

      {/* Horizontal connector */}
      <div className="absolute top-[10px] -left-[23px] md:-left-[31px] w-[16px] md:w-[20px] h-[1px] bg-[var(--border-default)]" />

      {/* Content block */}
      <div className="border border-default bg-surface p-6 transition-[border-color] duration-200 hover:border-accent/50">
        <p className="font-mono text-[13px] text-tertiary">{dates}</p>
        <h3 className="font-heading font-bold text-xl text-primary mt-1">{role}</h3>
        <p className="text-base text-secondary mt-1">{company}</p>
        {description && (
          <p className="text-base text-secondary mt-2">{description}</p>
        )}
      </div>
    </div>
  );
}
