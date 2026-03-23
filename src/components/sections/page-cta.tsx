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
      <div className="mt-[80px]">
        <p className="mb-8 text-base leading-[1.7] text-text-primary">{text}</p>
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
