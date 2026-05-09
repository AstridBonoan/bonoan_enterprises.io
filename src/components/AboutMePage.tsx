interface AboutMePageProps {
  onNavigate: (path: string) => void;
}

export function AboutMePage({ onNavigate }: AboutMePageProps) {
  // Drop your headshot at `public/about-me.jpg` (or .png) and the <img> below
  // will pick it up automatically. Until then, the placeholder block is shown.
  const photoSrc = `${import.meta.env.BASE_URL}about-me.jpg`;

  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            The person behind Bonoan Labs.
          </p>
        </div>

        <article className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,18rem)_1fr] gap-8 md:gap-10 p-6 sm:p-8 md:p-10 items-start">
            {/* Photo card */}
            <div className="w-full">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
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
                <div
                  className="hidden w-full h-full items-center justify-center text-slate-500 dark:text-slate-400 text-sm font-medium px-4 text-center"
                >
                  Add your photo at{' '}
                  <code className="ml-1 font-mono text-xs">public/about-me.jpg</code>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                Astrid Bonoan
              </h2>
              <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-5">
                Founder &amp; Lead Developer
              </p>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  I&rsquo;m the founder of Bonoan Labs, where I help small businesses and
                  growing teams ship websites, apps, and internal tools that actually move
                  the needle. I care about clean code, fast pages, and design that earns
                  the user&rsquo;s trust on the first scroll.
                </p>
                <p>
                  My work spans full-stack web development, workflow automation, and
                  product design &mdash; from the first sketch to the last deploy. I
                  enjoy partnering with founders who want a thoughtful technical partner,
                  not just a contractor.
                </p>
                <p>
                  When I&rsquo;m not coding, I&rsquo;m usually exploring new tools, mentoring
                  early-career devs, or sketching out the next side project.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  Get in touch
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="px-5 py-2.5 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
