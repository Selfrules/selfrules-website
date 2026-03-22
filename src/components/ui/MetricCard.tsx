import { cn } from '@/lib/utils';

// Usage: Wrap MetricCard components in a grid container:
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border-default)] border border-default">
//   <MetricCard ... />
// </div>

interface MetricCardProps {
  number: string;
  label: string;
  context: string;
  className?: string;
}

export function MetricCard({ number, label, context, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        'bg-primary p-8',
        'outline outline-0 hover:outline-1 hover:outline-accent/40 hover:-outline-offset-1',
        'transition-all duration-200',
        className
      )}
    >
      <p className="font-heading font-bold text-accent text-[clamp(40px,5vw,72px)] leading-none">
        {number}
      </p>
      <p className="text-[13px] text-primary mt-4">{label}</p>
      <p className="text-[13px] text-tertiary mt-1">{context}</p>
    </div>
  );
}
