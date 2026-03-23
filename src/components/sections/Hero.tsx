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
      className="flex flex-col justify-start pt-[96px] pb-[80px] pl-[24px] px-[clamp(20px,5vw,80px)]"
    >
      <div className="max-w-[720px]">
        {/* Terminal prompt */}
        <div aria-hidden="true" className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[13px] text-[#5a5a5e] leading-[19.5px]">
            {terminalPrompt}
          </span>
          <BlinkingCursor type="block" />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[clamp(40px,5vw,64px)] font-bold leading-[1.08] tracking-[-1.6px] text-text-primary max-w-[674px]">
          {headline}
        </h1>

        {/* Subtitle */}
        <p className="font-light text-[24px] leading-[36px] text-[rgba(255,255,255,0.6)] max-w-[715px] mt-8">
          {subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 mt-14">
          <Button variant="primary" href="#contact">
            {primaryCta}
          </Button>
          <Button variant="secondary" href="/work">
            {secondaryCta}
          </Button>
        </div>

        {/* Credential tags */}
        <div className="flex flex-wrap gap-3 mt-14">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Separator line */}
        <div className="h-px w-[200px] bg-[#1a1a1f] mt-12" />

        {/* Signature phrase */}
        <p className="italic text-[15px] leading-[22.5px] text-[#8a8a8e] mt-5">
          {signaturePhrase}
        </p>
      </div>
    </section>
  );
}
