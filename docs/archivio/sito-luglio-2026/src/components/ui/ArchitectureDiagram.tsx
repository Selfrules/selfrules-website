'use client';

import { useEffect, useRef, useState } from 'react';

interface PipelineStage {
  label: string;
  sublabel?: string;
  detail?: string;
  accent?: boolean;
  icon?: 'scraper' | 'filter' | 'ai' | 'score' | 'telegram' | 'clean';
}

const stages: PipelineStage[] = [
  {
    label: '8 Scrapers',
    sublabel: 'collect',
    detail: 'Immobiliare, Idealista, Subito, Casa.it + 4 more',
    icon: 'scraper',
  },
  {
    label: 'Dedup & Normalize',
    sublabel: 'clean',
    detail: 'Remove duplicates, standardize fields, geocode',
    icon: 'clean',
  },
  {
    label: 'Pass 1: Hard Filter',
    sublabel: '80% filtered',
    detail: 'Location, price, size — binary yes/no',
    accent: true,
    icon: 'filter',
  },
  {
    label: 'Pass 2: AI Scoring',
    sublabel: 'weighted',
    detail: 'Transport, light, floor, noise — 0-100',
    accent: true,
    icon: 'ai',
  },
  {
    label: 'Pass 3: AI Analysis',
    sublabel: 'deep review',
    detail: 'Red/green flags from listing text',
    accent: true,
    icon: 'ai',
  },
  {
    label: 'Final Score',
    sublabel: '0–100',
    detail: 'Composite weighted score',
    icon: 'score',
  },
  {
    label: 'Telegram',
    sublabel: 'alert',
    detail: 'Instant notification if score > threshold',
    icon: 'telegram',
  },
];

function StageIcon({ type }: { type: PipelineStage['icon'] }) {
  const cls = 'w-5 h-5 text-[var(--color-accent)] opacity-80';
  switch (type) {
    case 'scraper':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
        </svg>
      );
    case 'clean':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
        </svg>
      );
    case 'filter':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
      );
    case 'ai':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4zM8 14h8l2 8H6l2-8z" />
        </svg>
      );
    case 'score':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      );
    default:
      return null;
  }
}

function Arrow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Horizontal arrow (desktop) */}
      <svg
        className="hidden md:block w-8 h-4 text-[var(--color-accent)]"
        viewBox="0 0 32 16"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 8h28" stroke="currentColor" strokeWidth="2" />
        <path d="M24 3l6 5-6 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Vertical arrow (mobile) */}
      <svg
        className="md:hidden w-4 h-8 text-[var(--color-accent)]"
        viewBox="0 0 16 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M8 0v28" stroke="currentColor" strokeWidth="2" />
        <path d="M3 24l5 6 5-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StageCard({ stage, index, isVisible }: { stage: PipelineStage; index: number; isVisible: boolean }) {
  return (
    <div
      className={`
        relative flex flex-col items-center text-center
        p-4 md:p-5
        border transition-all duration-500
        ${stage.accent
          ? 'border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.04]'
          : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]'
        }
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        min-w-0 w-full md:w-[140px] md:flex-shrink-0
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Step number */}
      <span className="absolute -top-3 left-3 font-mono text-[10px] bg-[var(--color-bg-primary)] px-1.5 py-0.5 text-[rgba(255,255,255,0.55)]">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="mb-3 mt-1">
        <StageIcon type={stage.icon} />
      </div>

      {/* Label */}
      <p className="font-heading font-semibold text-[13px] md:text-[14px] text-[var(--color-text-primary)] leading-tight">
        {stage.label}
      </p>

      {/* Sublabel */}
      {stage.sublabel && (
        <span className={`mt-1 font-mono text-[10px] uppercase tracking-[1px] ${
          stage.accent ? 'text-[var(--color-accent)]' : 'text-[rgba(255,255,255,0.55)]'
        }`}>
          {stage.sublabel}
        </span>
      )}

      {/* Detail */}
      {stage.detail && (
        <p className="mt-2 font-mono text-[10px] leading-[1.5] text-[rgba(255,255,255,0.35)]">
          {stage.detail}
        </p>
      )}
    </div>
  );
}

export function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="my-12">
      {/* Title bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
        <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-[rgba(255,255,255,0.55)]">
          Three-Pass Scoring Pipeline
        </span>
        <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
      </div>

      {/* Pipeline flow */}
      <div
        className="
          flex flex-col items-center gap-2
          md:flex-row md:items-start md:justify-center md:gap-0
          overflow-x-auto md:overflow-visible
          pb-4 md:pb-0
        "
        role="img"
        aria-label="CasaHunter architecture: 8 scrapers collect raw data, then deduplicate and normalize, followed by three scoring passes (hard filter removing 80%, AI weighted scoring, AI text analysis), producing a final 0-100 score that triggers Telegram alerts"
      >
        {stages.map((stage, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center">
            <StageCard stage={stage} index={i} isVisible={isVisible} />
            {i < stages.length - 1 && <Arrow />}
          </div>
        ))}
      </div>

      {/* Data flow summary */}
      <div
        className={`
          mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8
          font-mono text-[11px] text-[rgba(255,255,255,0.55)]
          transition-all duration-700 delay-700
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <span>
          <span className="text-[var(--color-accent)]">1,000+</span> listings/day in
        </span>
        <span className="hidden sm:inline text-[rgba(255,255,255,0.15)]">→</span>
        <span>
          <span className="text-[var(--color-accent)]">~80%</span> filtered at Pass 1
        </span>
        <span className="hidden sm:inline text-[rgba(255,255,255,0.15)]">→</span>
        <span>
          <span className="text-[var(--color-accent)]">&lt;5</span> alerts/day out
        </span>
      </div>
    </div>
  );
}
