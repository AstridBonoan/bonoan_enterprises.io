import { PROCESS_STEPS } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="My process"
          title="Simple steps from first call to launch"
          description="A straightforward path designed for busy owners—no confusing project speak."
        />

        <ol className="grid gap-5 md:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.08}>
              <li className="relative h-full list-none rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
                <p className="text-5xl font-bold tabular-nums text-slate-200 dark:text-slate-800">{step.step}</p>
                <h3
                  id={index === 0 ? 'process-heading' : undefined}
                  className="mt-2 text-xl font-bold text-slate-900 dark:text-white"
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}
