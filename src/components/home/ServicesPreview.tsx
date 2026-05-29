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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to grow online"
          description="Clear solutions with real business value—no confusing tech talk."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.04}>
              <article className="card-hover group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70 sm:p-7">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-violet-500/15 text-brand-600 transition-transform duration-300 group-hover:scale-105 dark:text-brand-400">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 flex justify-center">
          <Button variant="secondary" onClick={() => onNavigate('/services')}>
            Explore all services
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
