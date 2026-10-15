import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;
}

export function Section({ children, wide = false, className, id, 'aria-label': ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        'py-[var(--spacing-section)] px-[var(--spacing-page-padding)]',
        className
      )}
    >
      <div
        className={cn(
          'mx-auto w-full',
          wide
            ? 'max-w-[var(--width-wide)]'
            : 'max-w-[var(--width-content)]'
        )}
      >
        {children}
      </div>
    </section>
  );
}
