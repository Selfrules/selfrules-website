'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageToggle } from './LanguageToggle';

const navLinks: readonly { key: string; href: string; isAccent?: boolean }[] = [
  { key: 'about', href: '/about' },
  { key: 'work', href: '/work' },
  { key: 'lab', href: '/lab' },
  { key: 'notes', href: '/notes' },
  { key: 'contact', href: '/#contact', isAccent: true },
];

interface MobileMenuProps {
  locale: string;
  currentPath: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ locale, currentPath, isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const menuRef = useRef<HTMLDivElement>(null);
  const savedScrollY = useRef(0);

  // iOS Safari scroll lock (position:fixed + scrollY save/restore)
  useEffect(() => {
    if (isOpen) {
      savedScrollY.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${savedScrollY.current}px`;
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = savedScrollY.current;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key handler (D-05)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap (D-05, LNAV-03): Tab wraps within menu
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const container = menuRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    // Focus first element (close button) on open
    const firstFocusable = container.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      // Re-query on each Tab press (safe against stale refs)
      const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelector);
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = useCallback(() => { onClose(); }, [onClose]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label={t('openMenu')}
      className={`fixed inset-0 z-50 bg-primary transition-transform duration-300 ease-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header: close [X] top-right (D-04) */}
      <div className="flex items-center justify-end px-[--spacing-page-padding] h-16">
        <button
          onClick={onClose}
          className="text-text-primary p-2"
          aria-label={t('closeMenu')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      {/* Nav links: 32px bold, 24px gap (D-02, D-03) */}
      <nav className="flex flex-col gap-6 px-[--spacing-page-padding] pt-12">
        {navLinks.map((link) => {
          const isActive = currentPath === link.href || currentPath.startsWith(link.href + '/');
          return (
            <Link
              key={link.key}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-[32px] font-bold leading-tight transition-colors duration-150 ${
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
      </nav>

      {/* Divider + Language toggle (D-02, D-07) */}
      <div className="mx-[--spacing-page-padding] mt-8 border-t border-[#1a1a1f]" />
      <div className="px-[--spacing-page-padding] pt-6">
        <LanguageToggle locale={locale} variant="mobile" />
      </div>
    </div>
  );
}
