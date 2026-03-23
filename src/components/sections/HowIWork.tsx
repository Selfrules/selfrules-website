import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

interface HowIWorkProps {
  label: string;
  title: string;
  intro?: string;
  pillars: Array<{
    title: string;
    text: React.ReactNode;
    shortText?: React.ReactNode;
  }>;
}

export function HowIWork({ label, title, pillars }: HowIWorkProps) {
  return (
    <Section wide>
      <SectionHeader label={label} title={title} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-12">
        {pillars.map((pillar, index) => (
          <div key={index}>
            <h3 className="font-heading font-medium text-[20px] leading-[28px] text-text-primary mb-4 md:whitespace-pre-line">
              {pillar.title}
            </h3>
            <p className="text-[16px] leading-[26px] text-[rgba(255,255,255,0.6)]">
              {pillar.shortText || pillar.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
