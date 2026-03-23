interface SectionHeaderProps {
  label: string;
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mb-12">
      <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)]">
        {label}
      </p>
      <h2 className="font-heading text-[30px] font-bold leading-[36px] tracking-[-0.75px] text-text-primary">
        {title}
      </h2>
    </div>
  );
}
