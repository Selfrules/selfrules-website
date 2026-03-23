import { cn } from '@/lib/utils';
import { BlinkingCursor } from '@/components/ui/BlinkingCursor';

interface TerminalPromptProps {
  className?: string;
}

export function TerminalPrompt({ className }: TerminalPromptProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="font-mono text-[13px] text-text-tertiary">
        mattia@selfrules ~ $
      </span>
      <BlinkingCursor type="block" />
    </div>
  );
}
