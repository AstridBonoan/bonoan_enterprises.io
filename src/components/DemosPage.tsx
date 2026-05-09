const demos = [
  {
    image: "clothing.png",
    alt: "AS Clothing Ecommerce screenshot",
    title: "Project 1",
    href: "https://astridbonoan.github.io/AS-ClothingEcommerce.io/",
  },
  {
    image: "autoshop.png",
    alt: "AS Auto Shop screenshot",
    title: "Project 2",
    href: "https://astridbonoan.github.io/AS-AutoShop.io/",
  },
  {
    image: "restaurant.png",
    alt: "A&S Filipino Kitchen screenshot",
    title: "Project 3",
    href: "https://astridbonoan.github.io/AS-FilipinoRestaurant.io/",
  },
  {
    image: "as-enterprises.png",
    alt: "A&S Enterprises construction and real estate landing page screenshot",
    title: "Project 4",
    href: "https://astridbonoan.github.io/AS_RealEstate.io/",
  },
  {
    image: "as-law.png",
    alt: "A&S Law corporate counsel landing page screenshot",
    title: "Project 5",
    href: "https://astridbonoan.github.io/A-S_LawFirm.io/",
  },
] as const;

const cardShell =
  "flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900";

export function DemosPage() {
  const demoImageBase = `${import.meta.env.BASE_URL}demo-images/`;

  return (
    <section className="min-h-screen bg-white px-4 pb-20 pt-32 transition-colors duration-200 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Demos
        </h1>
        <p className="mb-10 text-lg text-slate-600 dark:text-slate-300">
          Explore live examples of websites, SaaS experiences, and interactive product builds.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <article key={demo.href} className={cardShell}>
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
      </div>
    </section>
  );
}
