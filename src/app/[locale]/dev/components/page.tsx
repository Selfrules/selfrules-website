import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { MetricCard } from '@/components/ui/MetricCard';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { BlinkingCursor } from '@/components/ui/BlinkingCursor';
import { TerminalPrompt } from '@/components/ui/TerminalPrompt';
import { CountUpNumber } from '@/components/ui/CountUpNumber';
import { VerticalTimeline } from '@/components/ui/VerticalTimeline';
import { TimelineNode } from '@/components/ui/TimelineNode';

export default function DevComponentsPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <main className="py-20 px-8 max-w-[1080px] mx-auto">
      <h1 className="font-heading text-3xl font-bold text-primary mb-12">
        Phase 3 — Component Library
      </h1>

      {/* Button */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">Button</h2>
        <div className="flex gap-4">
          <Button variant="primary">Get in touch &rarr;</Button>
          <Button variant="secondary">See the work &rarr;</Button>
        </div>
      </section>

      <hr className="border-default my-16" />

      {/* Tag */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">Tag</h2>
        <div className="flex gap-3 mb-4">
          <Tag>B2B SaaS</Tag>
          <Tag>Payments</Tag>
          <Tag>10+ years</Tag>
        </div>
        <div className="flex gap-3">
          <Tag bordered={false}>B2B SaaS</Tag>
          <Tag bordered={false}>Payments</Tag>
          <Tag bordered={false}>10+ years</Tag>
        </div>
      </section>

      <hr className="border-default my-16" />

      {/* SectionHeader */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">SectionHeader</h2>
        <SectionHeader label="NUMBERS, NOT WORDS" title="Numeri, non parole" />
      </section>

      <hr className="border-default my-16" />

      {/* Section */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">Section</h2>
        <Section>
          <p className="text-secondary">Default width (720px) content container</p>
        </Section>
        <Section wide>
          <p className="text-secondary">Wide variant (1080px) content container</p>
        </Section>
      </section>

      <hr className="border-default my-16" />

      {/* MetricCard Grid */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">MetricCard Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--border-default)] border border-default">
          <MetricCard number="99%+" label="Uptime" context="Payment success rate" />
          <MetricCard number="-25%" label="Incidents" context="Post-release (QubicaAMF)" />
          <MetricCard number="116" label="Markets" context="Countries with active deployments" />
          <MetricCard number="3" label="Roles" context="Designer Developer PM" />
          <MetricCard number="10+" label="Years" context="Cross-functional product work" />
          <MetricCard number="$2M+" label="Revenue" context="Annual recurring influenced" />
        </div>
      </section>

      <hr className="border-default my-16" />

      {/* CaseStudyCard */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">CaseStudyCard</h2>
        <div className="space-y-6">
          <CaseStudyCard
            tag="B2B SaaS"
            title="Payment System Redesign"
            preview="Rebuilt the scoring and payment infrastructure for 116 markets, reducing post-release incidents by 25%."
            metric="-25%"
            metricLabel="Incidents"
          />
          <CaseStudyCard
            tag="Payments"
            title="Uptime Optimization"
            preview="Achieved 99%+ payment success rate across all markets."
            metric="99%+"
          />
        </div>
      </section>

      <hr className="border-default my-16" />

      {/* ProjectCard */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">ProjectCard</h2>
        <div className="space-y-6">
          <ProjectCard
            title="CasaHunter"
            description="Automated rental listing aggregation with AI analysis and Telegram notifications."
            techStack={['Python', 'OpenAI', 'Telegram API']}
            status="active"
            statusLabel="Active"
            href="/lab/casahunter"
          />
          <ProjectCard
            title="MoneyMind"
            description="Personal finance tracking with smart categorization."
            techStack={['Next.js', 'TypeScript', 'Supabase']}
            status="shipped"
            statusLabel="Shipped"
          />
        </div>
      </section>

      <hr className="border-default my-16" />

      {/* BlinkingCursor */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">BlinkingCursor</h2>
        <div className="flex gap-8 items-center">
          <div>
            <p className="text-secondary text-sm mb-2">Block</p>
            <span className="font-mono text-tertiary">cursor</span>
            <BlinkingCursor type="block" />
          </div>
          <div>
            <p className="text-secondary text-sm mb-2">Underscore</p>
            <span className="font-mono text-tertiary">cursor</span>
            <BlinkingCursor type="underscore" />
          </div>
        </div>
      </section>

      <hr className="border-default my-16" />

      {/* TerminalPrompt */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">TerminalPrompt</h2>
        <TerminalPrompt />
      </section>

      <hr className="border-default my-16" />

      {/* CountUpNumber */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">CountUpNumber</h2>
        <div className="flex gap-12">
          <div>
            <CountUpNumber value="-25%" className="font-heading font-bold text-accent text-4xl" />
            <p className="text-tertiary text-sm mt-1">Incidents</p>
          </div>
          <div>
            <CountUpNumber value="116" className="font-heading font-bold text-accent text-4xl" />
            <p className="text-tertiary text-sm mt-1">Markets</p>
          </div>
          <div>
            <CountUpNumber value="99%+" className="font-heading font-bold text-accent text-4xl" />
            <p className="text-tertiary text-sm mt-1">Uptime</p>
          </div>
        </div>
      </section>

      <hr className="border-default my-16" />

      {/* VerticalTimeline + TimelineNode */}
      <section>
        <h2 className="font-heading text-xl font-bold text-primary mb-6">VerticalTimeline + TimelineNode</h2>
        <VerticalTimeline>
          <TimelineNode
            role="Designer"
            company="Freelance"
            dates="2014 — 2016"
          />
          <TimelineNode
            role="Frontend Developer"
            company="Agency XYZ"
            dates="2016 — 2019"
          />
          <TimelineNode
            role="Product Manager"
            company="QubicaAMF"
            dates="2019 — Present"
            description="Leading product strategy for bowling and entertainment solutions across 116 markets."
            isActive
          />
        </VerticalTimeline>
      </section>
    </main>
  );
}
