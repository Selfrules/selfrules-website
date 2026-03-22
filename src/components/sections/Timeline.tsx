import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

interface TimelineProps {
  label: string;
  title: string;
  blocks: Array<{
    role: string;
    dates: string;
    text: React.ReactNode;
  }>;
  closingLine: string;
}

export function Timeline({ label, title, blocks, closingLine }: TimelineProps) {
  const lastIndex = blocks.length - 1;

  return (
    <Section wide>
      <SectionHeader label={label} title={title} />

      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block">
        {/* Connector line */}
        <div className="relative mb-8">
          <div className="absolute top-[4px] left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-4 gap-8">
            {blocks.map((block, index) => (
              <div key={index} className="relative pt-6">
                {/* Square node */}
                <div
                  className={
                    index === lastIndex
                      ? 'absolute top-0 left-0 w-[10px] h-[10px] bg-accent'
                      : 'absolute top-0 left-0 w-[10px] h-[10px] border border-default bg-transparent'
                  }
                />
                <h3 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-primary mb-2">
                  {block.role}
                </h3>
                <p className="font-mono text-sm text-secondary mb-3">
                  {block.dates}
                </p>
                <div className="text-base leading-[1.6] text-secondary">
                  {block.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="lg:hidden">
        <div className="relative pl-8">
          {/* Vertical connector line */}
          <div className="absolute top-0 bottom-0 left-[4px] w-[2px] bg-border" />
          {blocks.map((block, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              {/* Square node */}
              <div
                className={
                  index === lastIndex
                    ? 'absolute -left-8 top-[6px] w-[10px] h-[10px] bg-accent'
                    : 'absolute -left-8 top-[6px] w-[10px] h-[10px] border border-default bg-transparent'
                }
              />
              <h3 className="font-heading font-bold text-[clamp(28px,3vw,36px)] leading-[1.2] text-primary mb-2">
                {block.role}
              </h3>
              <p className="font-mono text-sm text-secondary mb-3">
                {block.dates}
              </p>
              <div className="text-base leading-[1.6] text-secondary">
                {block.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing phrase */}
      <p className="text-base leading-[1.7] text-primary mt-12 max-w-[720px]">
        {closingLine}
      </p>
    </Section>
  );
}
