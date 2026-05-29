import { PROCESS_STEPS } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A simple process you can follow"
          description="Three clear steps—from first conversation to launch—designed for busy business owners."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.08}>
              <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70 sm:p-8">
                <p className="text-4xl font-bold text-brand-600/30 dark:text-brand-400/25">{step.step}</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
