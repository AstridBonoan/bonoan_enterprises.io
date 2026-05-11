import { useState } from 'react';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'saas', label: 'SaaS Tools' },
] as const;

type FilterId = (typeof FILTERS)[number]['id'];
type DemoCategory = Exclude<FilterId, 'all'>;

interface Demo {
  image: string;
  alt: string;
  title: string;
  href: string;
  category: DemoCategory;
}

const demos: readonly Demo[] = [
  {
    image: 'clothing.png',
    alt: 'AS Clothing Ecommerce screenshot',
    title: 'Project 1',
    href: 'https://astridbonoan.github.io/AS-ClothingEcommerce.io/',
    category: 'websites',
  },
  {
    image: 'autoshop.png',
    alt: 'AS Auto Shop screenshot',
    title: 'Project 2',
    href: 'https://astridbonoan.github.io/AS-AutoShop.io/',
    category: 'websites',
  },
  {
    image: 'restaurant.png',
    alt: 'A&S Filipino Kitchen screenshot',
    title: 'Project 3',
    href: 'https://astridbonoan.github.io/AS-FilipinoRestaurant.io/',
    category: 'websites',
  },
  {
    image: 'as-enterprises.png',
    alt: 'A&S Enterprises construction and real estate landing page screenshot',
    title: 'Project 4',
    href: 'https://astridbonoan.github.io/AS_RealEstate.io/',
    category: 'websites',
  },
  {
    image: 'as-law.png',
    alt: 'A&S Law corporate counsel landing page screenshot',
    title: 'Project 5',
    href: 'https://astridbonoan.github.io/A-S_LawFirm.io/',
    category: 'websites',
  },
  {
    image: 'lens-light.png',
    alt: 'Lens & Light photography portfolio screenshot',
    title: 'Project 6',
    href: '#',
    category: 'websites',
  },
  {
    image: 'as-fitness.png',
    alt: 'AS Fitness gym landing page screenshot',
    title: 'Project 7',
    href: 'https://astridbonoan.github.io/AS-Fitness/',
    category: 'websites',
  },
  {
    image: 'as-contractor.png',
    alt: 'AS Contractor HVAC about page screenshot',
    title: 'Project 8',
    href: 'https://astridbonoan.github.io/AS-Contractor.io/about',
    category: 'websites',
  },
  {
    image: 'as-bistro.png',
    alt: 'A.S. Bistro Urban Kitchen restaurant landing page screenshot',
    title: 'Project 9',
    href: 'https://astridbonoan.github.io/AS-BistroDemo.io',
    category: 'websites',
  },
  {
    image: 'astrid-stone.png',
    alt: 'Astrid & Stone luxury real estate advisory landing page screenshot',
    title: 'Project 10',
    href: 'https://astridbonoan.github.io/AS-RealEstate.io/',
    category: 'websites',
  },
  {
    image: 'as-studio.png',
    alt: 'AS Studio contemporary fashion ecommerce landing page screenshot',
    title: 'Project 11',
    href: 'https://astridbonoan.github.io/AS-ClothingEcommerce/',
    category: 'websites',
  },
  {
    image: 'as-cafe.png',
    alt: 'AS Café cozy coffee shop landing page screenshot',
    title: 'Project 12',
    href: 'https://astridbonoan.github.io/AS_Cafe.io/',
    category: 'websites',
  },
];

const cardShell =
  'flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900';

function countFor(filter: FilterId): number {
  if (filter === 'all') return demos.length;
  return demos.filter((d) => d.category === filter).length;
}

export function DemosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const demoImageBase = `${import.meta.env.BASE_URL}demo-images/`;

  const visibleDemos =
    activeFilter === 'all' ? demos : demos.filter((d) => d.category === activeFilter);

  return (
    <section className="min-h-screen bg-white px-4 pb-20 pt-32 transition-colors duration-200 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Demos
        </h1>
        <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
          Explore live examples of websites, SaaS experiences, and interactive product builds.
        </p>

        {/* Category filter bar */}
        <div
          role="group"
          aria-label="Filter demos by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            const count = countFor(filter.id);
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ' +
                  (isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700')
                }
              >
                <span>{filter.label}</span>
                <span
                  className={
                    'rounded-full px-2 py-0.5 text-xs font-medium ' +
                    (isActive
                      ? 'bg-white/20 text-white dark:bg-slate-900/15 dark:text-slate-900'
                      : 'bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-400')
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {visibleDemos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              SaaS tool demos are on the way
            </h2>
            <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-300">
              I&rsquo;m wrapping up a few in-progress dashboards and internal tools. Check back
              soon &mdash; or reach out if you&rsquo;d like a preview of what&rsquo;s in the
              pipeline.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleDemos.map((demo) => (
              <article key={demo.href + demo.title} className={cardShell}>
                <div className="flex aspect-[16/10] w-full shrink-0 items-center justify-center overflow-hidden bg-slate-100 p-2 dark:bg-slate-800 sm:p-2.5">
                  <img
                    src={`${demoImageBase}${demo.image}`}
                    alt={demo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {demo.title}
                  </h2>
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit shrink-0 items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    Open Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
