import { cn } from '@/lib/utils';
import { Tag } from '@/components/ui/Tag';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  status: 'active' | 'shipped' | 'coming-soon' | 'experiment';
  statusLabel: string;
  href?: string;
  whatItTaughtMe?: string;
  whatItTaughtMeLabel?: string;
  className?: string;
}

const statusColors: Record<ProjectCardProps['status'], string> = {
  active: 'bg-accent',
  shipped: 'bg-[#00bc7d]',
  'coming-soon': 'bg-secondary',
  experiment: 'bg-[#2b7fff]',
};

export function ProjectCard({
  title,
  description,
  techStack,
  status,
  statusLabel,
  href,
  whatItTaughtMe,
  whatItTaughtMeLabel,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'border border-[#1a1a1f] p-10',
        'transition-[border-color] duration-200 hover:border-accent/40',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading font-bold text-[22px] tracking-[-0.55px] text-[#f5f5f0]">{title}</h3>
        <span className="inline-flex items-center gap-2 shrink-0">
          <span className={`w-2 h-2 ${statusColors[status]}`} data-status-dot />
          <span className="font-mono text-[11px] uppercase tracking-[1.1px] text-[rgba(255,255,255,0.4)]">{statusLabel}</span>
        </span>
      </div>

      <p className="font-light text-[16px] leading-[25.6px] text-[rgba(255,255,255,0.5)] mt-3">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {whatItTaughtMe && (
        <div className="mt-4 border-t border-[#1a1a1f] pt-4">
          {whatItTaughtMeLabel && (
            <span className="font-heading font-medium text-[15px] text-[rgba(255,255,255,0.7)]">
              {whatItTaughtMeLabel}
            </span>
          )}
          <p className="mt-1 font-light text-[15px] leading-[24px] text-[rgba(255,255,255,0.5)]">{whatItTaughtMe}</p>
        </div>
      )}

      {href && (
        <Link href={href} className="mt-4 inline-block text-accent hover:underline">
          View project &rarr;
        </Link>
      )}
    </div>
  );
}
