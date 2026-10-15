interface AiBadgeProps {
  label?: string;
  className?: string;
}

export function AiBadge({ label = 'AI-assisted', className = '' }: AiBadgeProps) {
  return (
    <span
      className={`inline-flex items-center border border-[#e8a838] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.8px] text-[#e8a838] ${className}`}
    >
      {label}
    </span>
  );
}
