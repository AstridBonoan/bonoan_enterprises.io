import { motion, useReducedMotion } from 'framer-motion';
import { BRAND } from '../../data/site';
import { Button } from '../ui/Button';
import { HeroGrid } from './HeroGrid';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="section-padding relative overflow-hidden pt-24 sm:pt-28"
    >
      <HeroGrid />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Independent digital studio for local & growing businesses
          </p>

          <h1
            id="hero-heading"
            className="text-[2rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.06] dark:text-white"
          >
            Modern Digital Solutions{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-slate-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-brand-300 dark:to-slate-400">
              for Growing Businesses
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed dark:text-slate-400">
            {BRAND.tagline}
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button onClick={() => onNavigate('/contact')} className="w-full px-8 sm:w-auto">
              Start Your Project
            </Button>
            <Button
              variant="secondary"
              onClick={() => onNavigate('/my-work')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
