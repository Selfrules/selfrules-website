interface KeyTakeawayProps {
  children: React.ReactNode;
}

export function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <div className="not-prose my-8 border border-[#1a1a1f] p-6">
      <span className="mb-3 block font-mono text-[11px] uppercase tracking-[1.1px] text-accent">
        Key Takeaway
      </span>
      <div className="font-light text-[17px] leading-[1.7] text-[#f5f5f0]">
        {children}
      </div>
    </div>
  );
}
