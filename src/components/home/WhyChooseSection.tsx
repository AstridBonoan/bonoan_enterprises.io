import { WHY_CHOOSE } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';

export function WhyChooseSection() {
  return (
    <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-50/80 to-white py-16 dark:border-white/5 dark:from-slate-900/40 dark:to-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeader
            align="left"
            eyebrow="Why Bonoan Labs"
            title="A partner who speaks your language—not developer jargon"
            description="You get modern tools, thoughtful design, and direct communication from someone focused on small business success."
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHY_CHOOSE.map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.04}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white dark:bg-brand-500">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
