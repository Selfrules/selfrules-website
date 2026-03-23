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
        'border border-default p-8',
        'transition-[border-color] duration-200 hover:border-accent/40',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading font-bold text-xl text-text-primary">{title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={cn('w-2 h-2 inline-block', statusColors[status])}
            aria-hidden="true"
          />
          <span className="font-mono text-[13px] text-text-secondary uppercase tracking-[0.05em]">{statusLabel}</span>
        </div>
      </div>

      <p className="text-base text-text-secondary mt-2">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {whatItTaughtMe && (
        <div className="mt-4 border-t border-default pt-4">
          {whatItTaughtMeLabel && (
            <span className="font-mono text-[13px] font-bold text-accent">
              {whatItTaughtMeLabel}
            </span>
          )}
          <p className="mt-1 text-sm text-text-secondary">{whatItTaughtMe}</p>
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
