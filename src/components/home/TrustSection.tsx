import { INDUSTRIES, METRICS } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { IndustryIcon } from '../ui/ServiceIcon';
import { SectionHeader } from '../ui/SectionHeader';

export function TrustSection() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/80 py-16 dark:border-white/5 dark:bg-slate-900/40 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Built for real businesses"
          title="Helping owners modernize with confidence"
          description="From neighborhood shops to growing teams—we design for the outcomes you care about: more calls, smoother bookings, and a professional first impression."
        />

        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {INDUSTRIES.map((industry, index) => (
            <AnimatedSection key={industry.name} delay={index * 0.05}>
              <div className="card-hover flex h-full flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-sm dark:border-white/10 dark:bg-slate-900/80 sm:p-5">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <IndustryIcon name={industry.icon} />
                </span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{industry.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 0.06}>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/60 sm:p-6">
                <p className="text-lg font-bold text-slate-900 dark:text-white">{metric.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {metric.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
