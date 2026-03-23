import { cn } from '@/lib/utils';
import { Tag } from '@/components/ui/Tag';

interface CaseStudyCardProps {
  tag: string;
  title: string;
  preview: string;
  metric: string;
  metricLabel?: string;
  className?: string;
}

export function CaseStudyCard({
  tag,
  title,
  preview,
  metric,
  metricLabel,
  className,
}: CaseStudyCardProps) {
  return (
    <div
      className={cn(
        'border border-[#1a1a1f] p-8 md:p-12',
        'flex flex-col md:flex-row md:items-center gap-6',
        'transition-all duration-200 hover:border-accent/40 hover:-translate-y-[2px]',
        className
      )}
    >
      <div className="flex-1">
        <Tag>{tag}</Tag>
        <h3 className="text-[18px] font-medium text-text-primary font-heading mt-3">{title}</h3>
        <p className="text-[14px] text-[rgba(255,255,255,0.6)] mt-2">{preview}</p>
      </div>

      <div className="shrink-0 md:text-right">
        <p className="font-heading font-bold text-accent text-[clamp(40px,5vw,64px)] leading-none tracking-[-2px]">
          {metric}
        </p>
        {metricLabel && (
          <p className="font-mono text-[14px] uppercase tracking-[1.4px] text-[rgba(255,255,255,0.6)] mt-1">{metricLabel}</p>
        )}
      </div>
    </div>
  );
}
