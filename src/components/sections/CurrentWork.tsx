import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

const statusColors: Record<string, string> = {
  active: 'bg-accent',
  shipped: 'bg-[#4ADE80]',
  experiment: 'bg-[#60A5FA]',
};

interface CurrentWorkProps {
  label: string;
  title: string;
  cards: Array<{
    title: string;
    text: string;
    status?: string;
    statusLabel?: string;
  }>;
}

export function CurrentWork({ label, title, cards }: CurrentWorkProps) {
  return (
    <Section wide>
      <SectionHeader label={label} title={title} />
      <div className="flex flex-col gap-6 max-w-[var(--width-content)]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-default bg-surface p-6 transition-all duration-150 hover:border-accent hover:-translate-y-0.5"
          >
            {/* Title + badge on same row */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading font-bold text-[20px] leading-[1.3] text-text-primary">
                {card.title}
              </h3>
              {card.status && card.statusLabel && (
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`w-2 h-2 inline-block ${statusColors[card.status] || 'bg-secondary'}`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[13px] text-text-secondary uppercase tracking-[0.05em]">
                    {card.statusLabel}
                  </span>
                </div>
              )}
            </div>
            <p className="text-base leading-[1.6] text-text-secondary mt-3">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
