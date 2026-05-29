import { FEATURED_PROJECTS } from '../../data/site';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

interface FeaturedProjectsProps {
  onNavigate: (path: string) => void;
}

export function FeaturedProjects({ onNavigate }: FeaturedProjectsProps) {
  const demoImageBase = `${import.meta.env.BASE_URL}demo-images/`;

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 dark:border-white/5 dark:bg-slate-900/30 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured work"
          title="Projects that feel ready for real customers"
          description="Sample builds across industries—each focused on trust, clarity, and action."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.05}>
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/80">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={`${demoImageBase}${project.image}`}
                    alt={`${project.title} website preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-80" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur dark:bg-slate-900/90 dark:text-slate-100">
                    {project.industry}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-800 dark:text-slate-200">Solved: </span>
                    {project.problem}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    View project
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={() => onNavigate('/demos')}>Browse all demos</Button>
          <Button variant="secondary" onClick={() => onNavigate('/my-work')}>
            Client work
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
