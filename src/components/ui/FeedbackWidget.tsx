'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

type FeedbackType = 'feedback' | 'bug' | 'domanda';

export function FeedbackWidget({ locale }: { locale: string }) {
  const t = useTranslations('feedbackWidget');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<FeedbackType>('feedback');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  // Trap focus inside modal
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  const resetForm = () => {
    setType('feedback');
    setMessage('');
    setEmail('');
    setStatus('idle');
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          message: message.trim(),
          email: email.trim() || undefined,
          page: pathname,
          locale,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send feedback');
      }

      setStatus('success');

      // Track with Umami
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        if (w.umami?.track) {
          w.umami.track('feedback-submitted', { type });
        }
      } catch { /* noop */ }

      // Auto-close after 2s
      setTimeout(() => {
        setIsOpen(false);
        resetForm();
      }, 2000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  const typeOptions: { value: FeedbackType; label: string; icon: string }[] = [
    { value: 'feedback', label: t('typeFeedback'), icon: '💬' },
    { value: 'bug', label: t('typeBug'), icon: '🐛' },
    { value: 'domanda', label: t('typeQuestion'), icon: '❓' },
  ];

  return (
    <>
      {/* Floating trigger button */}
      <button
        ref={triggerRef}
        onClick={() => {
          setIsOpen(!isOpen);
          if (status === 'success') resetForm();
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-surface border border-border-default px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:border-accent transition-all duration-150 shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
        aria-label={t('triggerLabel')}
        data-umami-event="feedback-open"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2h12v9H5l-3 3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span className="hidden sm:inline">{t('triggerText')}</span>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" aria-hidden="true" />

          {/* Modal */}
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={t('modalTitle')}
            className="relative w-full sm:w-[400px] max-h-[85vh] overflow-y-auto bg-surface border border-border-default shadow-[0_8px_32px_rgba(0,0,0,0.6)] sm:mb-0"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border-default">
              <h2 className="text-base font-medium text-text-primary">{t('modalTitle')}</h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (status === 'success') resetForm();
                }}
                className="text-text-secondary hover:text-text-primary transition-colors p-1"
                aria-label={t('close')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              {status === 'success' ? (
                <div className="text-center py-6">
                  <p className="text-accent text-lg font-medium mb-2">{t('successTitle')}</p>
                  <p className="text-text-secondary text-sm">{t('successMessage')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Type selector */}
                  <fieldset>
                    <legend className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      {t('typeLabel')}
                    </legend>
                    <div className="flex gap-2">
                      {typeOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setType(opt.value)}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-sm border transition-all duration-150 ${
                            type === opt.value
                              ? 'border-accent text-accent bg-[rgba(232,168,56,0.08)]'
                              : 'border-border-default text-text-secondary hover:border-[rgba(255,255,255,0.2)] hover:text-text-primary'
                          }`}
                          aria-pressed={type === opt.value}
                        >
                          <span aria-hidden="true">{opt.icon}</span>
                          <span>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* Message */}
                  <div>
                    <label htmlFor="feedback-message" className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2 block">
                      {t('messageLabel')}
                    </label>
                    <textarea
                      id="feedback-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('messagePlaceholder')}
                      required
                      rows={4}
                      className="w-full bg-primary border border-border-default p-3 text-sm text-text-primary placeholder:text-text-tertiary resize-none focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email (optional) */}
                  <div>
                    <label htmlFor="feedback-email" className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2 block">
                      {t('emailLabel')} <span className="normal-case tracking-normal text-text-tertiary">({t('optional')})</span>
                    </label>
                    <input
                      id="feedback-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('emailPlaceholder')}
                      className="w-full bg-primary border border-border-default p-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <p className="text-sm text-red-400" role="alert">
                      {errorMsg || t('errorGeneric')}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending' || !message.trim()}
                    className="w-full bg-accent text-[#0A0A0B] font-medium py-3 px-4 text-sm hover:bg-accent-hover transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? t('sending') : t('submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
