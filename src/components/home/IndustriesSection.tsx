import { INDUSTRIES } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { IndustryIcon } from '../ui/ServiceIcon';
import { SectionHeader } from '../ui/SectionHeader';

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="section-padding border-y border-slate-200/80 bg-slate-50/60 dark:border-white/5 dark:bg-slate-900/35"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="industries-heading">
          <SectionHeader
            eyebrow="Industries"
            title="Built for the businesses we know best"
            description="Whether you run a shop, restaurant, or service company—we design for how your customers actually find and choose you."
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7 lg:gap-4">
          {INDUSTRIES.map((industry, index) => (
            <AnimatedSection key={industry.name} delay={index * 0.04}>
              <div className="card-hover flex h-full flex-col items-center rounded-2xl border border-slate-200/90 bg-white px-3 py-5 text-center shadow-sm dark:border-white/10 dark:bg-slate-900/80 sm:px-4 sm:py-6">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  <IndustryIcon name={industry.icon} className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold leading-snug text-slate-800 sm:text-sm dark:text-slate-100">
                  {industry.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
