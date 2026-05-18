interface WorkProject {
  title: string;
  client: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

const projects: readonly WorkProject[] = [
  {
    title: 'Project Cost Estimator',
    client: 'Tamay Enterprises',
    description:
      'Built for a construction company: multi-step estimates for repairs and renovations. I delivered Stripe deposit payments, Google Calendar scheduling, and a full UI refresh for clarity and brand alignment.',
    image: 'tamay-estimator.png',
    imageAlt:
      'Tamay Enterprises project cost estimator showing the project type selection step and multi-step progress bar',
    href: 'https://estimator.tamayenterprises.com/',
  },
];

const cardShell =
  'flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900';

export function MyWorkPage() {
  const imageBase = `${import.meta.env.BASE_URL}my-work/`;

  return (
    <section className="min-h-screen bg-white px-4 pb-20 pt-32 transition-colors duration-200 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          My Work
        </h1>
        <p className="mb-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Selected client projects—real builds with integrations, workflows, and design decisions
          behind them.
        </p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.href} className={cardShell}>
              <div
                className={
                  'flex w-full shrink-0 items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800 ' +
                  'aspect-[3/2] p-1.5 sm:aspect-[16/10] sm:p-2.5'
                }
              >
                <img
                  src={`${imageBase}${project.image}`}
                  alt={project.imageAlt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-1 flex-col p-2 sm:p-5">
                <p className="mb-1 line-clamp-1 text-[0.65rem] font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 sm:text-xs">
                  {project.client}
                </p>
                <h2 className="mb-1 line-clamp-2 text-xs font-semibold leading-snug text-slate-900 dark:text-white sm:mb-1.5 sm:text-lg sm:leading-snug md:text-xl">
                  {project.title}
                </h2>
                <p className="mb-2 line-clamp-3 flex-1 text-[0.65rem] leading-snug text-slate-600 dark:text-slate-400 sm:mb-3 sm:line-clamp-4 sm:text-sm sm:leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-full min-w-0 items-center justify-center rounded-md bg-slate-900 px-2 py-1.5 text-[0.7rem] font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:w-fit sm:px-4 sm:py-2 sm:text-sm"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
