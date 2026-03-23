import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const baseClasses =
  'inline-flex items-center justify-center h-12 px-8 text-base transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

const variantClasses = {
  primary: 'bg-accent text-dark font-medium hover:bg-accent-hover hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(232,168,56,0.25)] active:translate-y-0 active:shadow-none',
  secondary:
    'bg-transparent border border-[rgba(255,255,255,0.2)] text-text-primary font-normal hover:border-accent hover:text-accent hover:shadow-[0_2px_8px_rgba(255,255,255,0.05)] active:translate-y-0 active:shadow-none',
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
