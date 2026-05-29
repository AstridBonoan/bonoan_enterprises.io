import { SERVICES } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceIcon } from '../ui/ServiceIcon';

interface ServicesPreviewProps {
  onNavigate: (path: string) => void;
}

export function ServicesPreview({ onNavigate }: ServicesPreviewProps) {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Digital solutions that move your business forward"
          description="Practical services with clear outcomes—built for owners who want results, not technical overwhelm."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.03}>
              <article className="card-hover group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75 sm:p-7">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50 text-slate-700 transition-colors group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:group-hover:border-brand-500/30 dark:group-hover:bg-brand-500/10 dark:group-hover:text-brand-400">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </span>
                <h3
                  id={index === 0 ? 'services-heading' : undefined}
                  className="text-lg font-bold text-slate-900 dark:text-white"
                >
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 flex justify-center">
          <Button variant="secondary" onClick={() => onNavigate('/services')}>
            View service details
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
