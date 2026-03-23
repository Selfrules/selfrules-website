import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

interface HowIWorkProps {
  label: string;
  title: string;
  intro: string;
  pillars: Array<{
    title: string;
    text: React.ReactNode;
  }>;
}

export function HowIWork({ label, title, intro, pillars }: HowIWorkProps) {
  return (
    <Section wide>
      <div className="max-w-[var(--width-content)]">
        <SectionHeader label={label} title={title} />
        <p className="text-base leading-[1.7] text-text-secondary max-w-[720px] mb-8">
          {intro}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
        {pillars.map((pillar, index) => (
          <div key={index}>
            <h3 className="font-heading font-bold text-[20px] leading-[1.3] text-text-primary mb-4">
              {pillar.title}
            </h3>
            <p className="text-base leading-[1.6] text-text-secondary">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
