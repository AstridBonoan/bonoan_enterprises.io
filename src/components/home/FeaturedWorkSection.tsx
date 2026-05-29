import { CLIENT_WORK, FEATURED_DEMOS } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

interface FeaturedWorkSectionProps {
  onNavigate: (path: string) => void;
}

export function FeaturedWorkSection({ onNavigate }: FeaturedWorkSectionProps) {
  const demoImageBase = `${import.meta.env.BASE_URL}demo-images/`;
  const clientImageBase = `${import.meta.env.BASE_URL}my-work/`;

  return (
    <section id="work" aria-labelledby="work-heading" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured work"
          title="Results that look ready for real customers"
          description="Live client projects and sample builds—each focused on trust, clarity, and business outcomes."
        />

        <div className="mb-14">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-500">
            Client projects
          </h3>
          <div className="grid gap-5 lg:grid-cols-2">
            {CLIENT_WORK.map((project, index) => (
              <AnimatedSection key={project.href} delay={index * 0.06}>
                <article className="card-hover group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                  <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-slate-100 p-2 dark:bg-slate-800 sm:p-3">
                    <img
                      src={`${clientImageBase}${project.image}`}
                      alt={project.imageAlt}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                      Live project
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                      {project.client} · {project.industry}
                    </p>
                    <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium text-slate-800 dark:text-slate-200">Challenge: </span>
                      {project.problem}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                    >
                      View project
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-500">
            Sample demos by industry
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_DEMOS.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.04}>
                <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                  <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-slate-100 p-2 dark:bg-slate-800 sm:p-3">
                    <img
                      src={`${demoImageBase}${project.image}`}
                      alt={`${project.title} website preview`}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-2.5 py-1 text-[0.65rem] font-semibold text-slate-800 shadow-sm backdrop-blur sm:text-xs dark:bg-slate-900/95 dark:text-slate-100">
                      {project.industry}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h4>
                    <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                      {project.problem}
                    </p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400"
                    >
                      View project →
                    </a>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={() => onNavigate('/my-work')}>All client work</Button>
          <Button variant="secondary" onClick={() => onNavigate('/demos')}>
            Browse demo library
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
