'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { MobileMenu } from './MobileMenu';
import { LanguageToggle } from './LanguageToggle';

const navLinks: readonly { key: string; href: string; isAccent?: boolean }[] = [
  { key: 'about', href: '/about' },
  { key: 'work', href: '/work' },
  { key: 'lab', href: '/lab' },
  { key: 'notes', href: '/notes' },
  { key: 'contact', href: '/contact', isAccent: true },
];

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener: 50px threshold (D-14, LNAV-01)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-border-default px-[var(--spacing-page-padding)] transition-[background-color,backdrop-filter] duration-200 ease-out ${
          scrolled
            ? 'bg-[rgba(10,10,11,0.9)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className={`mx-auto flex max-w-[var(--width-wide)] items-center justify-between transition-[height] duration-200 ${scrolled ? 'h-14' : 'h-16'}`}>
          {/* Left: Hamburger (mobile only, D-04) + SELFRULES wordmark (D-15) */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-text-primary p-2 md:hidden"
              aria-label={t('openMenu')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>

            <Link
              href="/"
              className="font-mono text-[14px] font-bold uppercase tracking-[1.4px] text-text-primary"
            >
              SELFRULES
            </Link>
          </div>

          {/* Right: Desktop nav links + CTA + Language toggle (D-15, D-16) */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`text-[14px] transition-colors duration-150 hover:underline underline-offset-4 decoration-1 ${
                    link.isAccent
                      ? 'text-accent hover:text-accent-hover'
                      : isActive
                        ? 'text-accent'
                        : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {t(link.key)}
                </Link>
              );
            })}
            {/* Vertical separator */}
            <div className="w-px h-4 bg-[#1a1a1f]" />
            <LanguageToggle locale={locale} variant="desktop" />
          </div>
        </nav>
      </header>

      <MobileMenu
        locale={locale}
        currentPath={pathname}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
