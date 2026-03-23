import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

interface PageCTAProps {
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PageCTA({ text, primaryCta, secondaryCta }: PageCTAProps) {
  return (
    <Section>
      <div>
        <p className="mb-8 font-light text-[19px] leading-[28.5px] text-[rgba(255,255,255,0.6)]">{text}</p>
        <div className="flex gap-4">
          <Button variant="primary" href={primaryCta.href}>
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button variant="secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
