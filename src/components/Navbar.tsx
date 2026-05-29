import { useState } from 'react';
import { Button } from './ui/Button';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
  pathname: string;
  onNavigate: (path: string) => void;
}

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/my-work', label: 'My Work' },
  { path: '/demos', label: 'Demos' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/about', label: 'About' },
] as const;

export function Navbar({ isDark, onThemeToggle, pathname, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoMarkSrc = `${import.meta.env.BASE_URL}logo-mark-${isDark ? 'dark' : 'light'}.png`;

  const goToHome = () => {
    if (pathname !== '/') {
      onNavigate('/');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkClass = (path: string) =>
    'text-sm font-medium transition-colors ' +
    (pathname === path
      ? 'text-brand-600 dark:text-brand-400'
      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white');

  return (
    <header className="fixed top-0 z-50 w-full nav-glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={goToHome} className="flex shrink-0 items-center gap-2.5">
          <img src={logoMarkSrc} alt="" className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Bonoan Labs
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <button
              key={link.path}
              type="button"
              onClick={() => onNavigate(link.path)}
              className={navLinkClass(link.path)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onThemeToggle}
            type="button"
            className="hidden rounded-xl border border-slate-200/80 p-2.5 text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 md:flex"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707zm2.828 2.829a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          <Button
            onClick={() => onNavigate('/contact')}
            className="hidden py-2.5 text-sm md:inline-flex"
          >
            Start a Project
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="rounded-xl p-2.5 text-slate-900 dark:text-white md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <div
        id="mobile-nav-menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-slate-950 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10">
          <span className="font-semibold text-slate-900 dark:text-white">Menu</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg p-1 text-slate-600 dark:text-slate-300"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto p-3" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link.path}
              type="button"
              onClick={() => {
                onNavigate(link.path);
                setIsMenuOpen(false);
              }}
              className={
                'rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ' +
                (pathname === link.path
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5')
              }
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              onNavigate('/contact');
              setIsMenuOpen(false);
            }}
            className={
              'rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ' +
              (pathname === '/contact'
                ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5')
            }
          >
            Contact
          </button>
        </nav>

        <div className="space-y-2 border-t border-slate-200 p-4 dark:border-white/10">
          <button
            type="button"
            onClick={onThemeToggle}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
          >
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
          <Button onClick={() => { onNavigate('/contact'); setIsMenuOpen(false); }} className="w-full">
            Start a Project
          </Button>
        </div>
      </div>
    </header>
  );
}
