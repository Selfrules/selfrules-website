import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { BlinkingCursor } from '@/components/ui/BlinkingCursor';
import { TerminalBlock } from '@/components/ui/TerminalBlock';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

interface HeroMetric {
  number: string;
  label: string;
}

interface HeroProps {
  availability: string;
  roleEyebrow: string;
  headline: ReactNode;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  whoamiLine1: string;
  whoamiLine2: string;
  signaturePhrase: string;
  ruleFooter: string;
  terminalCaption: string;
  metricsCaption: string;
  scrollHint: string;
  revLabel: string;
  metrics: [HeroMetric, HeroMetric, HeroMetric];
}

export function Hero({
  availability,
  roleEyebrow,
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  whoamiLine1,
  whoamiLine2,
  signaturePhrase,
  ruleFooter,
  terminalCaption,
  metricsCaption,
  scrollHint,
  revLabel,
  metrics,
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative pt-[56px] sm:pt-[72px] md:pt-[80px] pb-[var(--spacing-section)] px-[var(--spacing-page-padding)]"
    >
      {/* Wireframe grid — signals "objects on a canvas" (hero-only) */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
      >
        <defs>
          <pattern
            id="heroGrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0H0v60"
              fill="none"
              stroke="#F5F5F0"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
      </svg>

      <div className="relative mx-auto w-full max-w-[var(--width-wide)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-[72px] items-start">
          {/* LEFT — editorial claim */}
          <div>
            {/* Availability status */}
            <div className="flex items-center gap-2.5 mb-6">
              <span
                data-status-dot
                aria-hidden="true"
                className="w-1.5 h-1.5 bg-[#00BC7D] shadow-[0_0_0_3px_rgba(0,188,125,0.15)]"
              />
              <span className="font-mono text-[11px] uppercase tracking-[1.4px] text-text-tertiary">
                {availability}
              </span>
            </div>

            {/* Role eyebrow pill */}
            <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 border border-accent bg-[rgba(232,168,56,0.08)]">
              <span aria-hidden="true" className="w-1.5 h-1.5 bg-accent" />
              <span className="font-mono text-[12px] font-medium uppercase tracking-[1.6px] text-accent">
                {roleEyebrow}
              </span>
            </div>

            {/* H1 — product-first, rich-rendered with accent/mute/emph chunks */}
            <h1 className="font-heading text-[clamp(36px,4.2vw,56px)] font-bold leading-[1.04] tracking-[-1.8px] text-text-primary max-w-[680px] whitespace-pre-line">
              {headline}
            </h1>

            {/* Subtitle */}
            <p className="font-light text-[18px] md:text-[20px] leading-[1.55] text-[rgba(245,245,240,0.65)] max-w-[520px] mt-8">
              {subtitle}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mt-12">
              <Button variant="primary" href="#contact">
                {primaryCta}
                <ArrowIcon className="ml-2" />
              </Button>
              <Button variant="secondary" href="/work">
                {secondaryCta}
              </Button>
            </div>
          </div>

          {/* RIGHT — runtime terminal */}
          <aside
            role="complementary"
            aria-label="Runtime"
            className="mt-2 w-full"
          >
            {/* Terminal title bar */}
            <div className="flex items-center justify-between border-b border-border-default pb-2.5 mb-4">
              <div aria-hidden="true" className="flex gap-1.5">
                <span className="w-2 h-2 bg-border-default" />
                <span className="w-2 h-2 bg-border-default" />
                <span className="w-2 h-2 bg-accent" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[1.4px] text-text-tertiary">
                {terminalCaption}
              </span>
            </div>

            <TerminalBlock command="whoami --long">
              <div>{whoamiLine1}</div>
              <div className="text-text-secondary mt-0.5">{whoamiLine2}</div>
            </TerminalBlock>

            <div className="h-3" />

            <TerminalBlock
              command="cat rules/01.txt"
              italicOutput
              footer={ruleFooter}
            >
              &ldquo;{signaturePhrase}&rdquo;
            </TerminalBlock>

            <div className="h-3" />

            <TerminalBlock command="./metrics --tail" caption={metricsCaption}>
              <div className="grid grid-cols-3 gap-4 mt-1">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-heading text-[32px] font-bold tracking-[-1px] leading-none text-accent">
                      {m.number}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[1.2px] text-text-secondary leading-tight mt-2">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </TerminalBlock>

            {/* Dangling prompt */}
            <div className="font-mono text-[13px] text-text-tertiary mt-[18px]">
              <span className="text-accent">mattia</span>
              <span className="text-text-secondary">@selfrules</span>
              <span> ~ $ </span>
              <BlinkingCursor type="block" />
            </div>
          </aside>
        </div>

        {/* Bottom strip — self-citation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-border-default pt-4 mt-16 font-mono text-[11px] uppercase tracking-[1.4px] text-text-tertiary">
          <span>{scrollHint}</span>
          <span>{revLabel}</span>
        </div>
      </div>
    </section>
  );
}
