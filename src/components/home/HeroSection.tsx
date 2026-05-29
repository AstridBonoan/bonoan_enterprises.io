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
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pb-28">
      <HeroGrid />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            Digital partner for local & growing businesses
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.08] dark:text-white">
            Modern Websites &{' '}
            <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent dark:from-brand-400 dark:to-violet-400">
              AI Solutions
            </span>{' '}
            for Growing Businesses
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {BRAND.tagline}. We help you modernize with custom websites, software, and
            automation—so customers find you, trust you, and take action.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button onClick={() => onNavigate('/contact')} className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button
              variant="secondary"
              onClick={() => onNavigate('/demos')}
              className="w-full sm:w-auto"
            >
              View Our Work
            </Button>
          </div>

          <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
            Trusted by restaurants, auto shops, contractors, and local service brands.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
