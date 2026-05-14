import { useLayoutEffect, useState } from 'react';

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
  {
    image: 'as-restaurant-dashboard.png',
    alt: 'AS Restaurant Operations dashboard with sales trend, guest flow, and live order rail',
    title: 'Project 13',
    href: 'https://astridbonoan.github.io/AS_Restaurant_Dashboard.io/',
    category: 'saas',
  },
  {
    image: 'fieldpro-dashboard.png',
    alt: 'FieldPro contractor operations dashboard for HVAC, plumbing, and home services',
    title: 'Project 14',
    href: 'https://astridbonoan.github.io/Contractor_Dashboard.io/',
    category: 'saas',
  },
  {
    image: 'as-gym-dashboard.png',
    alt: 'AS Gym OS operations dashboard with member, revenue, and retention metrics',
    title: 'Project 15',
    href: 'https://astridbonoan.github.io/AS_Gym_Dashboard.io/',
    category: 'saas',
  },
  {
    image: 'ecommerce-dashboard.png',
    alt: 'Northwind Retail commerce admin overview with revenue KPIs, trend chart, and pulse metrics',
    title: 'Project 16',
    href: 'https://astridbonoan.github.io/E-Commerce_Dashboard.io/',
    category: 'saas',
  },
];

const MOBILE_PAGE = 8;
const compactMq = '(max-width: 639px)';

const cardShell =
  'flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900';

function countFor(filter: FilterId): number {
  if (filter === 'all') return demos.length;
  return demos.filter((d) => d.category === filter).length;
}

export function DemosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(compactMq).matches : false,
  );
  const [mobilePages, setMobilePages] = useState(1);

  const demoImageBase = `${import.meta.env.BASE_URL}demo-images/`;

  const visibleDemos =
    activeFilter === 'all' ? demos : demos.filter((d) => d.category === activeFilter);

  useLayoutEffect(() => {
    const mq = window.matchMedia(compactMq);
    const sync = () => setIsCompact(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useLayoutEffect(() => {
    setMobilePages(1);
  }, [activeFilter, visibleDemos.length, isCompact]);

  const mobileCap = mobilePages * MOBILE_PAGE;
  const demosToRender = isCompact
    ? visibleDemos.slice(0, Math.min(mobileCap, visibleDemos.length))
    : visibleDemos;
  const mobileRemaining = isCompact ? Math.max(0, visibleDemos.length - demosToRender.length) : 0;

  return (
    <section className="min-h-screen bg-white px-4 pb-20 pt-32 transition-colors duration-200 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Demos
        </h1>
        <p className="mb-4 text-lg text-slate-600 dark:text-slate-300 sm:mb-6">
          Explore live examples of websites, SaaS experiences, and interactive product builds.
        </p>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400 sm:hidden">
          Use the filters to shorten the list. On phones, demos load in a two-column grid a few
          at a time so the page stays scannable.
        </p>

        {/* Category filter bar — single row on narrow screens (grid), relaxed flex from sm up */}
        <div
          role="group"
          aria-label="Filter demos by category"
          className="mb-6 grid w-full grid-cols-3 gap-2 sm:mb-10 sm:flex sm:flex-wrap sm:gap-2"
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
                  'flex w-full min-w-0 flex-col items-center justify-center gap-1 rounded-full px-2 py-2.5 text-center text-xs font-semibold leading-tight transition-colors sm:inline-flex sm:w-auto sm:flex-row sm:items-center sm:gap-2 sm:px-4 sm:py-2 sm:text-sm sm:leading-normal ' +
                  (isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700')
                }
              >
                <span className="break-words">{filter.label}</span>
                <span
                  className={
                    'shrink-0 rounded-full px-1.5 py-0.5 text-[0.65rem] font-medium sm:px-2 sm:text-xs ' +
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
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {demosToRender.map((demo) => (
              <article key={demo.href + demo.title} className={cardShell}>
                <div
                  className={
                    'flex w-full shrink-0 items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800 ' +
                    'aspect-[3/2] p-1.5 sm:aspect-[16/10] sm:p-2.5'
                  }
                >
                  <img
                    src={`${demoImageBase}${demo.image}`}
                    alt={demo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex min-h-0 min-w-0 flex-1 flex-col p-2 sm:p-5">
                  <h2 className="mb-1.5 line-clamp-2 text-xs font-semibold leading-snug text-slate-900 dark:text-white sm:mb-3 sm:text-xl sm:leading-normal">
                    {demo.title}
                  </h2>
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-full min-w-0 items-center justify-center rounded-md bg-slate-900 px-2 py-1.5 text-[0.7rem] font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:w-fit sm:px-4 sm:py-2 sm:text-sm"
                  >
                    Open Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
        {mobileRemaining > 0 && (
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobilePages((p) => p + 1)}
              className="rounded-full border border-slate-300 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              Show more ({mobileRemaining} left)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
