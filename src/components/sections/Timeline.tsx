import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

interface TimelineProps {
  label: string;
  title: string;
  blocks: Array<{
    role: string;
    dates: string;
    company?: string;
    text: React.ReactNode;
    shortText?: React.ReactNode;
  }>;
  closingLine: string;
}

export function Timeline({ label, title, blocks, closingLine }: TimelineProps) {
  return (
    <Section wide>
      <SectionHeader label={label} title={title} />

      {/* Desktop: 4-column card grid with horizontal connector */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Horizontal connector line — behind cards, visible only in gaps */}
          <div className="absolute top-[92px] left-0 right-0 h-px bg-[#1a1a1f] origin-left animate-[scale-x_800ms_ease-out_forwards]" style={{ transform: 'scaleX(0)' }} />
          <div className="grid grid-cols-4 gap-6">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="relative border border-[#1a1a1f] bg-[#0a0a0b] p-6"
              >
                <p className="font-mono text-[12px] leading-[16px] text-accent mb-2">
                  {block.dates}
                </p>
                <h3 className="font-heading font-medium text-[18px] leading-[28px] text-text-primary mb-2">
                  {block.role}
                </h3>
                {block.company && (
                  <p className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.6)] mb-3">
                    {block.company}
                  </p>
                )}
                <div className="text-[14px] leading-[20px] text-text-primary">
                  {block.shortText || block.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-4">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="border border-[#1a1a1f] bg-[#0a0a0b] p-6"
            >
              <p className="font-mono text-[12px] leading-[16px] text-accent mb-2">
                {block.dates}
              </p>
              <h3 className="font-heading font-medium text-[18px] leading-[28px] text-text-primary mb-2">
                {block.role}
              </h3>
              {block.company && (
                <p className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.6)] mb-3">
                  {block.company}
                </p>
              )}
              <div className="text-[14px] leading-[20px] text-text-primary">
                {block.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing phrase */}
      <p className="text-[18px] leading-[28px] text-[rgba(255,255,255,0.8)] mt-12 max-w-[684px]">
        {closingLine}
      </p>
    </Section>
  );
}
