import { CLIENT_WORK } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

interface ClientWorkSectionProps {
  onNavigate: (path: string) => void;
}

export function ClientWorkSection({ onNavigate }: ClientWorkSectionProps) {
  const imageBase = `${import.meta.env.BASE_URL}my-work/`;

  return (
    <section className="border-t border-slate-200/80 py-16 dark:border-white/5 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client work"
          title="Real projects for real businesses"
          description="Live tools and websites we've shipped for clients—not sample demos."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:max-w-4xl">
          {CLIENT_WORK.map((project, index) => (
            <AnimatedSection key={project.href} delay={index * 0.06}>
              <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/80 sm:flex-row">
                <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 sm:aspect-auto sm:w-2/5">
                  <img
                    src={`${imageBase}${project.image}`}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    Live client project
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                    {project.client}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-500">
                    {project.industry}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-400"
                  >
                    View live project
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 flex justify-center sm:justify-start">
          <Button variant="secondary" onClick={() => onNavigate('/my-work')}>
            View all client work
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
