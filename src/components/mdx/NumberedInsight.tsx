interface NumberedInsightProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function NumberedInsight({ number, title, children }: NumberedInsightProps) {
  return (
    <div className="not-prose my-8">
      <div className="flex items-start gap-4">
        <span className="shrink-0 font-mono text-[32px] font-bold leading-none text-accent">
          {number}
        </span>
        <div>
          <h3 className="mb-2 font-heading text-[17px] font-bold text-[#f5f5f0]">
            {title}
          </h3>
          <div className="text-[16px] leading-[1.7] text-[rgba(255,255,255,0.7)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
