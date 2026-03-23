import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { MetricCard } from '@/components/ui/MetricCard';

interface MetricsProps {
  label: string;
  title: string;
  metrics: Array<{
    number: string;
    label: string;
    context: string;
  }>;
  linkText: string;
  linkHref: string;
}

export function Metrics({ label, title, metrics, linkText, linkHref }: MetricsProps) {
  return (
    <Section wide>
      <SectionHeader label={label} title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1a1a1f] border border-[#1a1a1f]">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            number={metric.number}
            label={metric.label}
            context={metric.context}
          />
        ))}
      </div>
      <div className="mt-8">
        <a
          href={linkHref}
          className="inline-flex items-center gap-2 text-[14px] font-medium text-text-primary hover:text-accent transition-colors duration-150"
        >
          {linkText}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
