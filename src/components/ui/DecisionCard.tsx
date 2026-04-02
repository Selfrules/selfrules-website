interface DecisionCardProps {
  title: string;
  why: string;
  learned: string;
  whyLabel?: string;
  learnedLabel?: string;
}

export function DecisionCard({
  title,
  why,
  learned,
  whyLabel = 'WHY',
  learnedLabel = 'WHAT IT TAUGHT ME',
}: DecisionCardProps) {
  return (
    <div className="border-l-[3px] border-[#e8a838] bg-[#111113] px-6 py-6 md:px-8 md:py-8">
      <span className="block font-mono text-[11px] uppercase tracking-[1.2px] text-[#e8a838] mb-3">
        DECISION
      </span>
      <h3 className="font-heading font-bold text-[16px] leading-[1.5] tracking-[-0.5px] text-[#f5f5f0] mb-4">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.7] text-[rgba(245,245,240,0.7)] font-light mb-5">
        {why}
      </p>
      <span className="block font-mono text-[11px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.4)] mb-2">
        {learnedLabel}
      </span>
      <p className="text-[15px] leading-[1.7] text-[rgba(245,245,240,0.55)] font-light italic">
        {learned}
      </p>
    </div>
  );
}
