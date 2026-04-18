import { cn } from '@/lib/utils';

interface TerminalBlockProps {
  command: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  caption?: string;
  italicOutput?: boolean;
  className?: string;
}

export function TerminalBlock({
  command,
  children,
  footer,
  caption,
  italicOutput = false,
  className,
}: TerminalBlockProps) {
  return (
    <div
      className={cn(
        'border border-border-default bg-[#0d0d0f] px-5 py-4',
        className,
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className="font-mono text-[13px] leading-[1.7] text-text-tertiary">
          <span className="text-accent">mattia</span>
          <span className="text-text-secondary">@selfrules</span>
          <span className="text-text-tertiary"> ~ $ </span>
          <span className="text-text-primary">{command}</span>
        </div>
        {caption && (
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[1.4px] text-text-tertiary">
            {caption}
          </span>
        )}
      </div>
      <div
        className={cn(
          'font-mono text-[13px] leading-[1.7] text-text-primary mt-2',
          italicOutput && 'italic',
        )}
      >
        {children}
      </div>
      {footer && (
        <div className="font-mono text-[11px] text-text-tertiary mt-2">
          {footer}
        </div>
      )}
    </div>
  );
}
