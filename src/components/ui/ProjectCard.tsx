import { cn } from '@/lib/utils';
import { Tag } from '@/components/ui/Tag';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  status: 'active' | 'shipped' | 'coming-soon';
  statusLabel: string;
  href?: string;
  className?: string;
}

const statusColors: Record<ProjectCardProps['status'], string> = {
  active: 'bg-accent',
  shipped: 'bg-[#4ADE80]',
  'coming-soon': 'bg-secondary',
};

export function ProjectCard({
  title,
  description,
  techStack,
  status,
  statusLabel,
  href,
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
      <div className="flex items-center gap-2">
        <h3 className="font-heading font-bold text-xl text-primary">{title}</h3>
        {/* Status dot: only exception to 0px border-radius (data-status-dot overrides global reset) */}
        <span
          className={cn('w-2 h-2 rounded-full inline-block', statusColors[status])}
          data-status-dot
          aria-hidden="true"
        />
        <span className="text-[13px] text-secondary">{statusLabel}</span>
      </div>

      <p className="text-base text-secondary mt-2">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {href && (
        <Link href={href} className="mt-4 inline-block text-accent hover:underline">
          View project &rarr;
        </Link>
      )}
    </div>
  );
}
