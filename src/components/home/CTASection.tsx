import { BRAND } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';

interface CTASectionProps {
  onNavigate: (path: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="pb-20 pt-4 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950 px-6 py-12 text-center shadow-xl dark:border-white/10 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to modernize your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Let&rsquo;s build something your customers will remember—a site and tools that
                work as hard as you do.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button
                  onClick={() => onNavigate('/contact')}
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-white sm:w-auto"
                >
                  Get in touch
                </Button>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Email us
                </a>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-slate-400 sm:flex-row sm:gap-8">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram {BRAND.instagramHandle}
                </a>
                <a
                  href={BRAND.calendlyPlaceholder}
                  className="transition-colors hover:text-white"
                  title="Calendly link — replace with your scheduling URL"
                >
                  Schedule a call (coming soon)
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
