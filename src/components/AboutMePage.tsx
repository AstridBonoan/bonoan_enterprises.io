interface AboutMePageProps {
  onNavigate: (path: string) => void;
}

export function AboutMePage({ onNavigate }: AboutMePageProps) {
  // Drop your headshot at `public/about-me.jpg` (or .png) and the <img> below
  // will pick it up automatically. Until then, the placeholder block is shown.
  const photoSrc = `${import.meta.env.BASE_URL}about-me.jpg`;

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-200 px-4 sm:px-6 lg:px-8 pt-20 pb-8">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1">
            About Me
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            The person behind Bonoan Labs.
          </p>
        </div>

        <article className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,13rem)_1fr] gap-5 md:gap-7 p-5 sm:p-6 items-center">
            {/* Photo card */}
            <div className="w-full max-w-[14rem] mx-auto md:max-w-none">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center max-h-[38vh] md:max-h-[60vh]">
                <img
                  src={photoSrc}
                  alt="Astrid Bonoan"
                  className="w-full h-full object-cover"
                  onError={(event) => {
                    // Hide the broken-image icon when no headshot is uploaded yet
                    // and let the dashed placeholder show through.
                    event.currentTarget.style.display = 'none';
                    const fallback = event.currentTarget.nextElementSibling;
                    if (fallback instanceof HTMLElement) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-slate-500 dark:text-slate-400 text-xs font-medium px-3 text-center">
                  Add your photo at{' '}
                  <code className="ml-1 font-mono text-[0.7rem]">public/about-me.jpg</code>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="min-w-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-0.5">
                Astrid Bonoan
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                Founder &amp; Lead Developer
              </p>

              <div className="space-y-2.5 text-[0.95rem] text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  I&rsquo;m the founder of Bonoan Labs, where I help small businesses
                  and growing teams ship websites, apps, and internal tools that
                  actually move the needle &mdash; with clean code, fast pages, and
                  design that earns the user&rsquo;s trust on the first scroll.
                </p>
                <p>
                  My work spans full-stack web development, workflow automation, and
                  product design. I enjoy partnering with founders who want a
                  thoughtful technical partner, not just a contractor.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  Get in touch
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="px-5 py-2 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  See what I do
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
