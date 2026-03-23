import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const baseClasses =
  'inline-flex items-center justify-center h-12 px-8 text-base font-normal transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

const variantClasses = {
  primary: 'bg-accent text-dark font-medium hover:bg-accent-hover hover:-translate-y-[1px]',
  secondary:
    'bg-transparent border border-[rgba(255,255,255,0.2)] text-text-primary hover:border-accent hover:text-accent',
} as const;

export function Button({ variant, children, href, className }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
