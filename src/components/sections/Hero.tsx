import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { BlinkingCursor } from '@/components/ui/BlinkingCursor';

interface HeroProps {
  headline: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  tags: string[];
  terminalPrompt: string;
  signaturePhrase: string;
}

export function Hero({
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  tags,
  terminalPrompt,
  signaturePhrase,
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="min-h-screen flex flex-col justify-start pt-[28vh] px-[clamp(20px,5vw,80px)]"
    >
      <div className="max-w-[720px]">
        {/* Terminal prompt */}
        <div aria-hidden="true" className="flex gap-2 mb-6">
          <span className="font-mono text-sm text-tertiary">
            {terminalPrompt}
          </span>
          <BlinkingCursor type="block" />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[clamp(40px,5vw,64px)] font-bold leading-[1.1] text-primary">
          {headline}
        </h1>

        {/* Subtitle with blinking cursor */}
        <p className="text-base leading-[1.7] text-secondary max-w-[600px] mt-4">
          {subtitle}
          <BlinkingCursor type="underscore" className="text-accent" />
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 mt-8">
          <Button variant="primary" href="#contact">
            {primaryCta}
          </Button>
          <Button variant="secondary" href="/work">
            {secondaryCta}
          </Button>
        </div>

        {/* Credential tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Separator line */}
        <div className="h-px w-[200px] bg-border-default mt-8" />

        {/* Signature phrase */}
        <p className="italic text-sm text-secondary mt-4">
          {signaturePhrase}
        </p>
      </div>
    </section>
  );
}
