export function Pricing({ onSelect }: { onSelect?: (subject: string) => void }) {
  const websiteCreation = [
    {
      name: "Basic",
      price: "$500",
      features: ["1-3 Pages", "Simple Design", "Mobile Friendly", "Simple Contact Form"]
    },
    {
      name: "Standard",
      price: "$800",
      features: ["3-5 Pages", "Better UI", "Application", "Service", "Contact Forms"]
    },
    {
      name: "Advanced",
      price: "$1200",
      features: [
        "6-8 Pages",
        "Custom UI",
        "Advanced Forms",
        "Quote Request Form",
        "Intake Form",
        "Service Request Form",
        "Light Integrations",
        "Email Automation",
        "Basic Stripe Checkout"
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

  const graphicDesign = [
    {
      name: "Starter Brand Package",
      price: "$100",
      features: ["Logo", "Business Card", "Color Palette"]
    },
    {
      name: "Marketing Kit",
      price: "$150",
      features: ["Flyer", "Social Media Posts", "Ad Graphic"]
    },
    {
      name: "Digital Presence Package",
      price: "$300",
      features: ["Landing Page Design", "Social Media Kit"]
    }
  ];

  const PricingCard = ({ category, tier }: { category: string; tier: any }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col h-full">
      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
        {tier.name}
      </h4>
      <p className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {tier.price}
      </p>
      <div className="space-y-2.5 flex-grow">
        {tier.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start">
            <span className="w-5 h-5 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-white dark:text-slate-900"
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
      <button
        onClick={() => onSelect?.(`${category}: ${tier.name}`)}
        className="mt-6 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
      >
        Keep In Touch
      </button>
    </div>
  );

  return (
    <section
      id="pricing"
      className="pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Transparent pricing for every project scale and budget
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
        <div className="mb-14">
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

        {/* Graphic Design */}
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Graphic Design
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Professional branding materials and design packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {graphicDesign.map((tier, index) => (
              <PricingCard key={index} category="Graphic Design" tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
