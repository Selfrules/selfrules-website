interface PatternCardProps {
  title: string;
  children: React.ReactNode;
  label?: string;
}

export function PatternCard({ title, children, label = 'PATTERN' }: PatternCardProps) {
  return (
    <div className="border-l-[3px] border-[#e8a838] bg-[#111113] px-6 py-6 md:px-8 md:py-8">
      <span className="block font-mono text-[11px] uppercase tracking-[1.2px] text-[#e8a838] mb-3">
        {label}
      </span>
      <h3 className="font-heading font-bold text-[16px] leading-[1.5] tracking-[-0.5px] text-[#f5f5f0] mb-3">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.7] text-[rgba(245,245,240,0.7)] font-light">
        {children}
      </p>
    </div>
  );
}
