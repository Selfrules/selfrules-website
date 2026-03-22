import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

interface CurrentWorkProps {
  label: string;
  title: string;
  cards: Array<{
    title: string;
    text: string;
  }>;
}

export function CurrentWork({ label, title, cards }: CurrentWorkProps) {
  return (
    <Section wide>
      <SectionHeader label={label} title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-default bg-surface p-6 transition-all duration-150 hover:border-accent hover:-translate-y-0.5"
          >
            <h3 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-primary mb-3">
              {card.title}
            </h3>
            <p className="text-base leading-[1.6] text-secondary">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
