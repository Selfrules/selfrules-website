interface SectionHeaderProps {
  label: string;
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm uppercase tracking-[0.05em] text-secondary mb-3">
        {label}
      </p>
      <h2 className="font-heading text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] text-primary">
        {title}
      </h2>
    </div>
  );
}
