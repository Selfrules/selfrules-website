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
        'border border-default p-8 md:p-12',
        'flex flex-col md:flex-row md:items-center gap-6',
        'transition-all duration-200 hover:border-accent/40 hover:-translate-y-[2px]',
        className
      )}
    >
      <div className="flex-1">
        <Tag>{tag}</Tag>
        <h3 className="text-xl font-bold text-primary font-heading mt-3">{title}</h3>
        <p className="text-base text-secondary mt-2">{preview}</p>
      </div>

      <div className="shrink-0 md:text-right">
        <p className="font-heading font-bold text-accent text-[clamp(40px,5vw,72px)] leading-none">
          {metric}
        </p>
        {metricLabel && (
          <p className="text-[13px] text-tertiary mt-1">{metricLabel}</p>
        )}
      </div>
    </div>
  );
}
