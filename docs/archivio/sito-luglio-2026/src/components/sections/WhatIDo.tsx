import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

interface WhatIDoProps {
  label: string;
  title: string;
  text: string;
}

export function WhatIDo({ label, title, text }: WhatIDoProps) {
  return (
    <Section wide>
      <SectionHeader label={label} title={title} />
      <p className="text-[18px] md:text-[20px] leading-[30px] md:leading-[34px] text-[rgba(255,255,255,0.7)] max-w-[720px]">
        {text}
      </p>
    </Section>
  );
}
