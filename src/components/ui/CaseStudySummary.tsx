interface MetricItem {
  value: string;
  label: string;
}

interface CaseStudySummaryProps {
  role: string;
  period: string;
  industry: string;
  metrics: MetricItem[];
  summary: string;
}

export function CaseStudySummary({
  role,
  period,
  industry,
  metrics,
  summary,
}: CaseStudySummaryProps) {
  return (
    <div className="border border-[#1a1a1f] bg-[#111113] p-6 md:p-8 my-12 md:my-16">
      {/* Header info row */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-[#1a1a1f]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[1px] text-[rgba(255,255,255,0.4)] mb-2">
            Role
          </p>
          <p className="text-[13px] text-[#f5f5f0]">{role}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[1px] text-[rgba(255,255,255,0.4)] mb-2">
            Period
          </p>
          <p className="text-[13px] text-[#f5f5f0]">{period}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[1px] text-[rgba(255,255,255,0.4)] mb-2">
            Industry
          </p>
          <p className="text-[13px] text-[#f5f5f0]">{industry}</p>
        </div>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-[#1a1a1f]">
        {metrics.map((metric, i) => (
          <div key={i}>
            <p className="font-heading font-bold text-[#e8a838] text-[28px] md:text-[36px] leading-[1] tracking-[-1.2px] mb-2">
              {metric.value}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[1px] text-[rgba(255,255,255,0.4)]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* Summary line */}
      <p className="text-[14px] md:text-[15px] leading-[1.6] text-[rgba(255,255,255,0.7)]">
        {summary}
      </p>
    </div>
  );
}
