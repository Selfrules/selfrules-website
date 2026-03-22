import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)}>
      <p className="font-mono text-[13px] uppercase tracking-[0.05em] text-secondary mb-2">
        {label}
      </p>
      <h2 className="text-xl font-bold text-primary font-heading">
        {title}
      </h2>
    </div>
  );
}
