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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border-default border border-default">
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
          className="text-base text-text-secondary hover:text-accent transition-colors duration-150"
        >
          {linkText} →
        </a>
      </div>
    </Section>
  );
}
