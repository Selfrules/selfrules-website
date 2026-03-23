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
  shipped: 'bg-[#4ADE80]',
  'coming-soon': 'bg-secondary',
  experiment: 'bg-[#60A5FA]',
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
        'border border-[#1a1a1f] p-6',
        'transition-[border-color] duration-200 hover:border-accent/40',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading font-medium text-[18px] text-text-primary">{title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[10px] uppercase tracking-[1px] bg-[rgba(26,26,31,0.5)] text-[rgba(255,255,255,0.4)] px-2 py-1">{statusLabel}</span>
        </div>
      </div>

      <p className="text-[14px] text-[rgba(255,255,255,0.6)] mt-2">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {whatItTaughtMe && (
        <div className="mt-4 border-t border-[#1a1a1f] pt-4">
          {whatItTaughtMeLabel && (
            <span className="font-mono text-[12px] font-medium text-accent">
              {whatItTaughtMeLabel}
            </span>
          )}
          <p className="mt-1 text-[14px] text-[rgba(255,255,255,0.4)]">{whatItTaughtMe}</p>
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
