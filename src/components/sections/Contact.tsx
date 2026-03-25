import { Section } from '@/components/layout/Section';

interface ContactProps {
  label: string;
  title: string;
  text?: string;
  email: string;
  linkedinLabel: string;
  linkedinHref: string;
  cvLabel: string;
  cvHref: string;
  availability: string;
}

export function Contact({
  label,
  title,
  email,
  linkedinLabel,
  linkedinHref,
  cvLabel,
  cvHref,
  availability,
}: ContactProps) {
  return (
    <Section id="contact">
      {/* Custom header — Contact uses 36px title per Figma */}
      <div className="mb-12">
        <p className="font-mono text-[14px] uppercase tracking-[0.7px] text-[rgba(255,255,255,0.5)] mb-2">
          {label}
        </p>
        <h2 className="font-heading text-[36px] font-bold leading-[40px] tracking-[-0.9px] text-text-primary">
          {title}
        </h2>
      </div>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        className="block font-mono text-[clamp(24px,5vw,40px)] leading-[1.5] font-normal text-[rgba(255,255,255,0.8)] hover:text-accent transition-colors duration-150"
        data-umami-event="contact-email"
      >
        {email}
      </a>

      {/* Links */}
      <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[14px] text-[rgba(255,255,255,0.6)] hover:text-accent transition-colors duration-150"
          data-umami-event="contact-linkedin"
        >
          {linkedinLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href={cvHref}
          download
          className="inline-flex items-center gap-1 text-[14px] text-[rgba(255,255,255,0.6)] hover:text-accent transition-colors duration-150"
          data-umami-event="contact-cv-download"
        >
          {cvLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </a>
      </div>

      {/* Availability badge */}
      <div className="mt-12 inline-flex items-center gap-3 border border-[#1a1a1f] h-[32px] px-3">
        <span className="w-2 h-2 bg-[#00bc7d] animate-pulse" aria-hidden="true" />
        <span className="font-mono text-[12px] text-[rgba(255,255,255,0.5)]">
          {availability}
        </span>
      </div>
    </Section>
  );
}
