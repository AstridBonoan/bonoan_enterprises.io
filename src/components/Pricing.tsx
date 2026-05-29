const STRIPE_DEPOSIT_PAYMENT_LINK = 'https://buy.stripe.com/test_placeholder';
/** Set to true when Stripe Payment Links are live. */
const SHOW_STRIPE_DEPOSIT_BUTTON = false;

export function Pricing({ onSelect }: { onSelect?: (subject: string) => void }) {
  const websiteCreation = [
    {
      name: "Basic",
      price: "$500",
      features: ["1-3 Pages", "Custom UI", "Mobile Friendly", "Contact Form"]
    },
    {
      name: "Standard",
      price: "$800",
      features: [
        "3-5 Pages",
        "Custom UI",
        "Mobile Friendly",
        "Contact Form",
        "Lead & application forms",
      ]
    },
    {
      name: "Advanced",
      price: "$1200",
      features: [
        "6-8 Pages",
        "Custom UI",
        "Mobile Friendly",
        "Contact Form",
        "Advanced forms (quotes, intake, service requests)",
        "Light Integrations",
        "Email Automation",
        "Basic Stripe Checkout",
      ]
    }
  ];

  const saasTools = [
    {
      name: "Basic",
      price: "$1000",
      features: [
        "Single Purpose Feature",
        "Data Collection & Automation",
        "Streamlined Workflows",
        "Basic Integration"
      ]
    },
    {
      name: "Standard",
      price: "$1600",
      features: [
        "Business Process Automation",
        "Payment Processing",
        "Calendar & Email Integration",
        "Confirmations & Reminders"
      ]
    },
    {
      name: "Advanced",
      price: "$3200",
      features: [
        "User Authentication",
        "Multi-user Dashboards",
        "Complex Workflows",
        "Advanced Integrations"
      ]
    }
  ];

  const PricingCard = ({ category, tier }: { category: string; tier: { name: string; price: string; features: string[] } }) => (
    <div className="card-hover flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70 sm:p-7">
      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
        {tier.name}
      </h4>
      <p className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {tier.price}
      </p>
      <div className="space-y-2.5 flex-grow">
        {tier.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start">
            <span className="mr-3 mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 dark:bg-brand-500">
              <svg
                className="h-3 w-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="text-sm text-slate-700 dark:text-slate-200">{feature}</span>
          </div>
        ))}
      </div>
      <div
        className={
          SHOW_STRIPE_DEPOSIT_BUTTON ? 'mt-6 flex flex-col gap-2' : 'mt-6'
        }
      >
        <button
          onClick={() => onSelect?.(`${category}: ${tier.name}`)}
          className="w-full rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400"
        >
          Keep In Touch
        </button>
        {SHOW_STRIPE_DEPOSIT_BUTTON && (
          <a
            href={STRIPE_DEPOSIT_PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg border-2 border-slate-900 bg-transparent px-3 py-2 text-center text-xs font-semibold leading-snug text-slate-900 transition-colors duration-200 hover:bg-slate-50 dark:border-white dark:text-white dark:hover:bg-slate-900/50 sm:text-sm sm:leading-tight"
          >
            Start Project (Pay 50% Deposit)
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section
      id="pricing"
      className="min-h-screen bg-surface px-4 pb-20 pt-28 transition-colors duration-300 dark:bg-surface-dark sm:px-6 sm:pt-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Pricing
          </p>
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Clear packages for every stage
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Transparent pricing for websites and software tools—pick what fits your goals and budget.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-brand-200/80 bg-brand-50/50 px-5 py-4 dark:border-brand-500/20 dark:bg-brand-500/5 sm:px-6 sm:py-5">
          <p className="text-center text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-left sm:text-base">
            A <strong className="font-semibold text-slate-900 dark:text-white">50%</strong> upfront
            deposit is required to begin all projects. The remaining balance is due upon completion,
            before final delivery.
          </p>
        </div>

        {/* Website Creation */}
        <div className="mb-14">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Website Creation
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Custom, responsive websites built with modern technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websiteCreation.map((tier, index) => (
              <PricingCard key={index} category="Website Creation" tier={tier} />
            ))}
          </div>
        </div>

        {/* SaaS Tools */}
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              SaaS Tools
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Build scalable Software-as-a-Service solutions tailored to your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {saasTools.map((tier, index) => (
              <PricingCard key={index} category="SaaS Tools" tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
