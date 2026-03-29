import { cn } from '@/lib/utils';
import { CountUpNumber } from '@/components/ui/CountUpNumber';

interface MetricCardProps {
  number: string;
  label: string;
  context: string;
  className?: string;
}

function parseShadow(value: string): string {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return '0';
  return `${match[1]}0${match[3]}`;
}

export function MetricCard({ number, label, context, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        'group bg-[#0a0a0b] px-5 py-8 sm:px-8 sm:py-10',
        'outline outline-0 hover:outline-1 hover:outline-accent/40 hover:-outline-offset-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]',
        'transition-all duration-200',
        className
      )}
    >
      <div className="relative">
        {/* Shadow number behind */}
        <span className="font-heading font-bold text-[#1a1a1f] text-[36px] sm:text-[48px] lg:text-[80px] leading-[54px] sm:leading-[72px] lg:leading-[120px] tracking-[-4px] absolute top-0 left-0 select-none" aria-hidden="true">
          {parseShadow(number)}
        </span>
        <CountUpNumber
          value={number}
          className="font-heading font-bold text-accent text-[36px] sm:text-[48px] lg:text-[80px] leading-[54px] sm:leading-[72px] lg:leading-[120px] tracking-[-4px] block relative transition-[filter] duration-200 group-hover:drop-shadow-[0_0_8px_rgba(232,168,56,0.4)]"
        />
      </div>
      <p className="font-mono text-[14px] uppercase tracking-[1.4px] text-[rgba(255,255,255,0.6)] mt-4">{label}</p>
      <p className="text-[12px] text-[rgba(255,255,255,0.5)] mt-1">{context}</p>
    </div>
  );
}
