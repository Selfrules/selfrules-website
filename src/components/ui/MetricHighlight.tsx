interface MetricHighlightProps {
  value: string;
  label: string;
  context?: string;
}

export function MetricHighlight({ value, label, context }: MetricHighlightProps) {
  return (
    <span className="inline-flex flex-col items-start gap-1">
      <span className="font-heading font-bold text-[#e8a838] text-xl md:text-2xl leading-[1] tracking-[-0.9px]">
        {value}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">
        {label}
      </span>
      {context && (
        <span className="text-[12px] text-[rgba(255,255,255,0.5)] mt-0.5">
          {context}
        </span>
      )}
    </span>
  );
}
