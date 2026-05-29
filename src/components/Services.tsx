import { SERVICES } from '../data/site';
import { AnimatedSection } from './ui/AnimatedSection';
import { PageShell } from './ui/PageShell';
import { ServiceIcon } from './ui/ServiceIcon';

export function Services() {
  return (
    <PageShell
      eyebrow="Services"
      title="Solutions that help your business grow"
      description="Every service is explained in plain language—focused on results your customers and team will feel."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {SERVICES.map((service, index) => (
          <AnimatedSection key={service.title} delay={index * 0.04}>
            <article className="card-hover flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70 sm:p-7">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-violet-500/15 text-brand-600 dark:text-brand-400">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-10 rounded-2xl border border-brand-200/80 bg-brand-50/50 p-6 dark:border-brand-500/20 dark:bg-brand-500/5 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Not sure where to start?</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Tell us about your business and goals—we&rsquo;ll recommend the right mix of website,
          tools, and automation for your budget and timeline.
        </p>
      </AnimatedSection>
    </PageShell>
  );
}
