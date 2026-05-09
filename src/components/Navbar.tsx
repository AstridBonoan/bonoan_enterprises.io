import { useState } from 'react';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
  pathname: string;
  onNavigate: (path: string) => void;
}

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

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-md z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={goToHome}
            className="flex-shrink-0 flex items-center gap-3"
          >
            <img
              src={logoMarkSrc}
              alt="Bonoan Labs"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              Bonoan Labs
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('/')}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('/team')}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Our Team
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('/pricing')}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => {
                onNavigate('/demos');
                setIsMenuOpen(false);
              }}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Demos
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707zm2.828 2.829a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-900 dark:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Sidebar */}
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black z-40 md:hidden transition-opacity duration-500 ease-in-out ${
            isMenuOpen ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-2xl z-40 md:hidden transform transition-all duration-500 ease-in-out border-l border-slate-200 dark:border-slate-800 ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col">
            <button
              onClick={() => {
                onNavigate('/');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 border-b border-slate-100 dark:border-slate-800"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('/team');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 border-b border-slate-100 dark:border-slate-800"
            >
              Our Team
            </button>
            <button
              onClick={() => {
                onNavigate('/services');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 border-b border-slate-100 dark:border-slate-800"
            >
              Services
            </button>
            <button
              onClick={() => {
                onNavigate('/pricing');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 border-b border-slate-100 dark:border-slate-800"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                onNavigate('/contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 border-b border-slate-100 dark:border-slate-800"
            >
              Contact
            </button>
            <button
              onClick={() => {
                onNavigate('/demos');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 border-t border-slate-100 dark:border-slate-800"
            >
              Demos
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
