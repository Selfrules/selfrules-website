interface KeyInsightProps {
  label?: string;
  children: React.ReactNode;
}

export function KeyInsight({ label = 'KEY INSIGHT', children }: KeyInsightProps) {
  return (
    <div className="border-l-[3px] border-[#e8a838] bg-[#111113] px-6 py-6 md:px-8 md:py-8 my-10">
      <span className="block font-mono text-[11px] uppercase tracking-[1.2px] text-[#e8a838] mb-3">
        {label}
      </span>
      <p className="text-lg md:text-xl leading-[1.7] text-[#f5f5f0] font-light">
        {children}
      </p>
    </div>
  );
}
