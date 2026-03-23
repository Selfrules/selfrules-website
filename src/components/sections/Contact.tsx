import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';

interface ContactProps {
  label: string;
  title: string;
  text: string;
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
  text,
  email,
  linkedinLabel,
  linkedinHref,
  cvLabel,
  cvHref,
  availability,
}: ContactProps) {
  return (
    <Section id="contact">
      <SectionHeader label={label} title={title} />
      <p className="text-base leading-[1.7] text-text-secondary mb-8">
        {text}
      </p>
      <a
        href={`mailto:${email}`}
        className="block font-mono text-[clamp(24px,3vw,36px)] text-text-primary hover:text-accent transition-colors duration-150"
      >
        {email}
      </a>
      <div className="mt-6 flex flex-row items-center gap-6">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-text-secondary hover:text-accent transition-colors duration-150"
        >
          {linkedinLabel} →
        </a>
        <a
          href={cvHref}
          download
          className="text-base text-text-secondary hover:text-accent transition-colors duration-150"
        >
          {cvLabel} →
        </a>
      </div>
      <div className="mt-8 inline-flex items-center gap-2 border border-default px-4 py-2">
        <span className="w-2 h-2 bg-[#4ADE80]" aria-hidden="true" />
        <span className="font-mono text-sm uppercase tracking-[0.05em] text-text-secondary">
          {availability}
        </span>
      </div>
    </Section>
  );
}
