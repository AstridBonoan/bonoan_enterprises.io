export function Services() {
  const services = [
    {
      title: "Website Creation",
      description: "Custom, responsive websites built with modern technologies. From landing pages to complex web applications, I create digital experiences that convert.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Mobile-First"]
    },
    {
      title: "SaaS Tools",
      description: "Build scalable Software-as-a-Service solutions. I develop robust platforms with secure authentication, payment processing, and real-time features.",
      features: ["Cloud-Ready", "Scalable Architecture", "Secure Integration", "24/7 Reliability"]
    },
    {
      title: "Graphic Design",
      description: "Professional business cards and branding materials that make lasting impressions. Design that reflects your company's identity and values.",
      features: ["Brand Identity", "Print Design", "Digital Assets", "Style Guides"]
    }
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-5 h-5 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center mr-3">
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
                    <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
