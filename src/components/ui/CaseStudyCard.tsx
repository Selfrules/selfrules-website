import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';

interface CaseStudyCardProps {
  tag: string;
  title: string;
  preview: string;
  metric: string;
  metricLabel?: string;
  href?: string;
  className?: string;
}

export function CaseStudyCard({
  tag,
  title,
  preview,
  metric,
  metricLabel,
  href,
  className,
}: CaseStudyCardProps) {
  const cardClasses = cn(
    'border border-[#1a1a1f] px-6 py-8 md:px-[49px] md:py-[49px]',
    'flex flex-col md:flex-row md:items-center gap-6',
    'transition-all duration-200 hover:border-accent/40 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]',
    href && 'cursor-pointer',
    className
  );

  const content = (
    <>
      <div className="flex-1">
        <span className="font-mono text-[12px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.4)]">{tag}</span>
        <h3 className="font-heading font-bold text-[28px] leading-[33.6px] tracking-[-0.7px] text-[#f5f5f0] mt-5 md:whitespace-pre-line">{title}</h3>
        <p className="font-light text-[17px] leading-[25.5px] text-[rgba(255,255,255,0.5)] mt-3">{preview}</p>
      </div>

      <div className="shrink-0 md:text-right flex flex-col items-start md:items-end">
        <p className="font-heading font-bold text-[#e8a838] text-[48px] md:text-[72px] leading-[48px] md:leading-[72px] tracking-[-3.6px]">
          {metric}
        </p>
        {metricLabel && (
          <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">{metricLabel}</p>
        )}
        {href && (
          <span className="mt-3 text-[14px] text-[rgba(255,255,255,0.3)] transition-colors group-hover:text-accent">
            →
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn('group block no-underline', cardClasses)}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
}
