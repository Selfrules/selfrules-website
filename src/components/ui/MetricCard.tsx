import { cn } from '@/lib/utils';
import { CountUpNumber } from '@/components/ui/CountUpNumber';

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
      <CountUpNumber
        value={number}
        className="font-heading font-bold text-accent text-[clamp(40px,5vw,72px)] leading-none block"
      />
      <p className="font-mono text-[13px] uppercase tracking-[0.05em] text-text-primary mt-4">{label}</p>
      <p className="text-[13px] text-text-tertiary mt-1">{context}</p>
    </div>
  );
}
