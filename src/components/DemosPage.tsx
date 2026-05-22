import { useLayoutEffect, useMemo, useState } from 'react';

const FILTERS = [
  { id: 'websites', label: 'Websites' },
  { id: 'saas', label: 'SaaS Tools' },
] as const;

type FilterId = (typeof FILTERS)[number]['id'];
type DemoCategory = FilterId;

const WEBSITE_INDUSTRIES = [
  { id: 'all', label: 'All industries' },
  { id: 'restaurant', label: 'Restaurants & dining' },
  { id: 'cafe', label: 'Cafés & coffee' },
  { id: 'auto', label: 'Auto shop' },
  { id: 'construction', label: 'Construction & trades' },
  { id: 'real-estate', label: 'Real estate' },
  { id: 'legal', label: 'Legal & professional' },
  { id: 'photography', label: 'Photography & creative' },
  { id: 'fitness', label: 'Fitness & wellness' },
  { id: 'fashion-retail', label: 'Fashion & retail' },
  { id: 'barbershop', label: 'Barbershop & grooming' },
] as const;

const SAAS_INDUSTRIES = [
  { id: 'all', label: 'All industries' },
  { id: 'restaurant', label: 'Restaurants & hospitality' },
  { id: 'field-services', label: 'Field services & contractors' },
  { id: 'fitness', label: 'Fitness & gyms' },
  { id: 'retail', label: 'Retail & ecommerce' },
] as const;

type WebsiteIndustryId = (typeof WEBSITE_INDUSTRIES)[number]['id'];
type SaasIndustryId = (typeof SAAS_INDUSTRIES)[number]['id'];
type IndustryId = WebsiteIndustryId | SaasIndustryId;

interface Demo {
  image: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  category: DemoCategory;
  industry: Exclude<IndustryId, 'all'>;
}

function industryOptionsFor(filter: FilterId) {
  return filter === 'websites' ? WEBSITE_INDUSTRIES : SAAS_INDUSTRIES;
}

const demos: readonly Demo[] = [
  {
    image: 'clothing.png',
    alt: 'AS Clothing Ecommerce screenshot',
    title: 'Style That Sells Before the Cart',
    description:
      'Boutique fashion storefront with editorial pacing—built so browsing feels as intentional as the clothes.',
    href: 'https://astridbonoan.github.io/AS-ClothingEcommerce.io/',
    category: 'websites',
    industry: 'fashion-retail',
  },
  {
    image: 'autoshop.png',
    alt: 'AS Auto Shop screenshot',
    title: 'Trust at First Rev',
    description:
      'Auto repair positioning with clear services and booking energy—because hesitation costs bays.',
    href: 'https://astridbonoan.github.io/AS-AutoShop.io/',
    category: 'websites',
    industry: 'auto',
  },
  {
    image: 'restaurant.png',
    alt: 'A&S Filipino Kitchen screenshot',
    title: 'Flavor Worth a Second Helping',
    description:
      'Family-kitchen storytelling with menu presence—invite people to the table before they walk in.',
    href: 'https://astridbonoan.github.io/AS-FilipinoRestaurant.io/',
    category: 'websites',
    industry: 'restaurant',
  },
  {
    image: 'as-enterprises.png',
    alt: 'A&S Enterprises construction and real estate landing page screenshot',
    title: 'Blueprints to Listings, One Credible Story',
    description:
      'Construction meets property clarity—proof, process, and a confident next step for big-ticket decisions.',
    href: 'https://astridbonoan.github.io/AS_RealEstate.io/',
    category: 'websites',
    industry: 'construction',
  },
  {
    image: 'as-law.png',
    alt: 'A&S Law corporate counsel landing page screenshot',
    title: 'Counsel Without the Cold Shoulder',
    description:
      'Corporate law positioning that reads sharp and human—authority for teams that are scaling fast.',
    href: 'https://astridbonoan.github.io/A-S_LawFirm.io/',
    category: 'websites',
    industry: 'legal',
  },
  {
    image: 'lens-light.png',
    alt: 'Lens & Light photography portfolio screenshot',
    title: 'Moments Worth Keeping',
    description:
      'Photography portfolio with gallery-first flow—because the right clients decide with their eyes first.',
    href: '#',
    category: 'websites',
    industry: 'photography',
  },
  {
    image: 'as-fitness.png',
    alt: 'AS Fitness gym landing page screenshot',
    title: 'Sweat Now, Sign Up Next',
    description:
      'Gym landing with membership momentum—motivation, clarity, and a path from curious to committed.',
    href: 'https://astridbonoan.github.io/AS-Fitness/',
    category: 'websites',
    industry: 'fitness',
  },
  {
    image: 'as-contractor.png',
    alt: 'AS Contractor HVAC about page screenshot',
    title: 'Comfort They Can Feel Year-Round',
    description:
      'HVAC service story with seasonal hooks and low-friction contact—trust is the whole job.',
    href: 'https://astridbonoan.github.io/AS-Contractor.io/about',
    category: 'websites',
    industry: 'construction',
  },
  {
    image: 'as-bistro.png',
    alt: 'A.S. Bistro Urban Kitchen restaurant landing page screenshot',
    title: 'Date-Night Energy, Reservation-Ready',
    description:
      'Urban bistro vibe with social-share polish—built for restaurants that live on first impressions.',
    href: 'https://astridbonoan.github.io/AS-BistroDemo.io',
    category: 'websites',
    industry: 'restaurant',
  },
  {
    image: 'astrid-stone.png',
    alt: 'Astrid & Stone luxury real estate advisory landing page screenshot',
    title: 'Where Luxury Finds Its Address',
    description:
      'High-end advisory narrative with editorial restraint—story-led design for listings worth pausing over.',
    href: 'https://astridbonoan.github.io/AS-RealEstate.io/',
    category: 'websites',
    industry: 'real-estate',
  },
  {
    image: 'as-studio.png',
    alt: 'AS Studio contemporary fashion ecommerce landing page screenshot',
    title: 'Runway Energy, Checkout Confidence',
    description:
      'Contemporary fashion ecommerce with lookbook rhythm—polish that still converts.',
    href: 'https://astridbonoan.github.io/AS-ClothingEcommerce/',
    category: 'websites',
    industry: 'fashion-retail',
  },
  {
    image: 'as-cafe.png',
    alt: 'AS Café cozy coffee shop landing page screenshot',
    title: 'Good Coffee, Great Company',
    description:
      'Neighborhood café warmth—menu moments, hours, and a “meet us on the corner” pull you can feel.',
    href: 'https://astridbonoan.github.io/AS_Cafe.io/',
    category: 'websites',
    industry: 'cafe',
  },
  {
    image: 'as-barbershop.png',
    alt: 'A.S. Barbershop downtown landing page with hero, book appointment, and services',
    title: 'Sharp. Clean. Unmistakable.',
    description:
      'Downtown barbershop precision—booking-led hero and quiet confidence for service brands on the strip.',
    href: 'https://astridbonoan.github.io/AS_Barbershop.io/',
    category: 'websites',
    industry: 'barbershop',
  },
  {
    image: 'as-residential.png',
    alt: 'AS Residential custom homes and renovations landing page with quote CTA and project stats',
    title: 'Built to Last Starts at Home',
    description:
      'Residential construction and renovation positioning—licensed credibility, project proof, and a clear path to request a quote.',
    href: 'https://astridbonoan.github.io/AS-Residential.io/',
    category: 'websites',
    industry: 'construction',
  },
  {
    image: 'as-luxury-homes.png',
    alt: 'AS Luxury Homes bespoke estate construction hero with dusk home photography and consultation CTA',
    title: 'Where Vision Becomes Extraordinary Living',
    description:
      'Luxury residential construction—editorial hero, portfolio energy, and a private consultation path for high-end custom estates.',
    href: 'https://astridbonoan.github.io/AS_Luxery_Homes.io/',
    category: 'websites',
    industry: 'construction',
  },
  {
    image: 'as-renovations.png',
    alt: 'AS Renovations kitchen and bathroom remodel landing page with orange CTA and hero home image',
    title: 'Dream Kitchen or Bath—Done in Weeks',
    description:
      'Fast remodel positioning with urgency, trust badges, and quote-first flow—built for contractors who win on speed and clarity, not surprises.',
    href: 'https://astridbonoan.github.io/AS-Renovations.io/',
    category: 'websites',
    industry: 'construction',
  },
  {
    image: 'as-local-contractor.png',
    alt: 'AS Local Contractor home services landing page with green hero, call CTA, and trust badges',
    title: 'Reliable Home Services You Can Trust',
    description:
      'Local contractor landing with same-week scheduling energy, free-estimate flow, and licensed-and-insured proof—built to turn searches into calls.',
    href: 'https://astridbonoan.github.io/AS-Local-Contractor.io/',
    category: 'websites',
    industry: 'construction',
  },
  {
    image: 'as-personal-trainer.png',
    alt: 'AS Personal Trainer landing page with dark hero, gradient headline, and book free call CTA',
    title: 'Transform Your Limits',
    description:
      'Elite 1:1 coaching positioning—high-contrast hero, programs and booking flow, built for trainers who sell results and accountability, not memberships alone.',
    href: 'https://astridbonoan.github.io/AS_Personal_Trainer.io/',
    category: 'websites',
    industry: 'fitness',
  },
  {
    image: 'ember-bowl-co.png',
    alt: 'Ember Bowl Co. casual restaurant ordering page with pickup and delivery, promos, and mobile-first checkout',
    title: 'Bowls & Wraps, Ready When You Are',
    description:
      'Fast-casual order experience—pickup or delivery, promos up front, and checkout built for phones so hungry customers order in under a minute.',
    href: 'https://astridbonoan.github.io/AS_Casual_Restaurant.io/',
    category: 'websites',
    industry: 'restaurant',
  },
  {
    image: 'as-bakery.png',
    alt: 'A&S Bakery landing page with artisan bread hero, gallery CTA, and pre-order pickup highlights',
    title: 'Bakes Made to Be Admired—and Savored',
    description:
      'Artisan bakery experience—gallery-led hero, seasonal and pre-order paths, and pickup windows that feel as warm as the bread.',
    href: 'https://astridbonoan.github.io/AS_Bakery.io/',
    category: 'websites',
    industry: 'cafe',
  },
  {
    image: 'as-restaurant-dashboard.png',
    alt: 'AS Restaurant Operations dashboard with sales trend, guest flow, and live order rail',
    title: 'The Pulse of a Busy Shift',
    description:
      'Operations dashboard concept—orders, flow, and the numbers a manager watches when the house is full.',
    href: 'https://astridbonoan.github.io/AS_Restaurant_Dashboard.io/',
    category: 'saas',
    industry: 'restaurant',
  },
  {
    image: 'fieldpro-dashboard.png',
    alt: 'FieldPro contractor operations dashboard for HVAC, plumbing, and home services',
    title: 'From Dispatch Thinking to Paid Jobs',
    description:
      'Field-service ops view—crews, jobs, and cash-flow signals for teams that live in trucks and spreadsheets.',
    href: 'https://astridbonoan.github.io/Contractor_Dashboard.io/',
    category: 'saas',
    industry: 'field-services',
  },
  {
    image: 'as-gym-dashboard.png',
    alt: 'AS Gym OS operations dashboard with member, revenue, and retention metrics',
    title: 'Members, Revenue, Retention—Decoded',
    description:
      'Fitness business snapshot—who’s engaged, who’s slipping, and what’s working without digging through tabs.',
    href: 'https://astridbonoan.github.io/AS_Gym_Dashboard.io/',
    category: 'saas',
    industry: 'fitness',
  },
  {
    image: 'ecommerce-dashboard.png',
    alt: 'Northwind Retail commerce admin overview with revenue KPIs, trend chart, and pulse metrics',
    title: 'Retail Command Center',
    description:
      'Commerce admin concept—revenue trends plus operational pulse so growth isn’t guesswork.',
    href: 'https://astridbonoan.github.io/E-Commerce_Dashboard.io/',
    category: 'saas',
    industry: 'retail',
  },
];

const MOBILE_PAGE = 8;
const compactMq = '(max-width: 639px)';

const cardShell =
  'flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900';

function countFor(filter: FilterId): number {
  return demos.filter((d) => d.category === filter).length;
}

export function DemosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('websites');
  const [industryFilter, setIndustryFilter] = useState<IndustryId>('all');
  const [isCompact, setIsCompact] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(compactMq).matches : false,
  );
  const [mobilePages, setMobilePages] = useState(1);

  const demoImageBase = `${import.meta.env.BASE_URL}demo-images/`;

  const categoryDemos = demos.filter((d) => d.category === activeFilter);

  const industryOptions = useMemo(() => {
    const base = industryOptionsFor(activeFilter);
    const used = new Set(categoryDemos.map((d) => d.industry));
    return base.filter((opt) => opt.id === 'all' || used.has(opt.id as Exclude<IndustryId, 'all'>));
  }, [activeFilter, categoryDemos]);

  const visibleDemos =
    industryFilter === 'all'
      ? categoryDemos
      : categoryDemos.filter((d) => d.industry === industryFilter);

  const handleCategoryChange = (filter: FilterId) => {
    setActiveFilter(filter);
    setIndustryFilter('all');
  };

  useLayoutEffect(() => {
    const mq = window.matchMedia(compactMq);
    const sync = () => setIsCompact(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useLayoutEffect(() => {
    if (industryFilter !== 'all' && !industryOptions.some((o) => o.id === industryFilter)) {
      setIndustryFilter('all');
    }
  }, [industryFilter, industryOptions]);

  useLayoutEffect(() => {
    setMobilePages(1);
  }, [activeFilter, industryFilter, visibleDemos.length, isCompact]);

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
          Browse website and SaaS demos by category—pick a tab below, then narrow by industry if
          you like.
        </p>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400 sm:hidden">
          On phones, demos load in a two-column grid a few at a time so the page stays scannable.
        </p>

        {/* Category filter bar — single row on narrow screens (grid), relaxed flex from sm up */}
        <div
          role="group"
          aria-label="Filter demos by category"
          className="mb-4 grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            const count = countFor(filter.id);
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => handleCategoryChange(filter.id)}
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

        <div className="mb-6 sm:mb-10">
          <label
            htmlFor="demo-industry-filter"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            {activeFilter === 'saas' ? 'Filter by business type' : 'Filter by industry'}
          </label>
          <select
            id="demo-industry-filter"
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value as IndustryId)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:border-white dark:focus:ring-white/20 sm:max-w-md"
          >
            {industryOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {categoryDemos.length === 0 ? (
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
        ) : visibleDemos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
              No demos in this category yet
            </h2>
            <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-300">
              Try another industry from the dropdown, or switch back to{' '}
              <span className="font-medium">All industries</span>.
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
                  <h2 className="mb-1 line-clamp-2 text-xs font-semibold leading-snug text-slate-900 dark:text-white sm:mb-1.5 sm:text-lg sm:leading-snug md:text-xl">
                    {demo.title}
                  </h2>
                  <p className="mb-2 line-clamp-3 flex-1 text-[0.65rem] leading-snug text-slate-600 dark:text-slate-400 sm:mb-3 sm:line-clamp-4 sm:text-sm sm:leading-relaxed">
                    {demo.description}
                  </p>
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
