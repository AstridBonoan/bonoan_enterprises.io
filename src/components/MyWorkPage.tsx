interface WorkProject {
  title: string;
  client: string;
  description: string;
  responsibilities: readonly string[];
  image: string;
  imageAlt: string;
  href: string;
}

const projects: readonly WorkProject[] = [
  {
    title: 'Project Cost Estimator',
    client: 'Tamay Enterprises',
    description:
      'A multi-step web application that helps homeowners and property managers receive contractor-aligned project estimates for repairs and renovations—from drywall and painting to plumbing and fixture installs.',
    responsibilities: [
      'Implemented Stripe payment processing for secure deposit collection at checkout',
      'Integrated Google Calendar for appointment scheduling after estimate completion',
      'Led a full UI refresh to improve clarity, flow, and alignment with the Tamay Enterprises brand',
    ],
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
        <p className="mb-10 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Selected client projects—real builds with integrations, workflows, and design decisions
          behind them.
        </p>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6">
          {projects.map((project) => (
            <article key={project.href} className={cardShell}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-slate-100 dark:bg-slate-800"
              >
                <img
                  src={`${imageBase}${project.image}`}
                  alt={project.imageAlt}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </a>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {project.client}
                </p>
                <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  {project.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  {project.description}
                </p>
                <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
                  Key contributions
                </h3>
                <ul className="mb-6 flex-1 space-y-2">
                  {project.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900 dark:bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  View live project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
