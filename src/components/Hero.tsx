interface HeroProps {
  onNavigate: (path: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {

  return (
    <section
      id="about"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center bg-white dark:bg-slate-950 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
          I Help Businesses Grow Through Websites, Apps, and Branding
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          Whether you need a polished website, a simple online tool for customers or your team, or
          a refreshed look and message, I keep the process clear and the results easy to manage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => onNavigate('/services')}
            className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
          >
            Explore Services
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
