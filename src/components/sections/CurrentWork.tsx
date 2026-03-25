import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

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
    <Section>
      <SectionHeader label={label} title={title} />
      <div className="flex flex-col gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative border border-[#1a1a1f] pt-[25px] px-[25px] pb-6 transition-all duration-150 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 to-accent/0" />

            {/* Title + badge on same row */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading font-medium text-[18px] leading-[28px] text-text-primary">
                {card.title}
              </h3>
              {card.status && card.statusLabel && (
                <span className="shrink-0 bg-accent/10 border border-accent/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[1px] text-accent leading-[15px]">
                  {card.statusLabel}
                </span>
              )}
            </div>
            <p className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.6)] mt-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
