export const BRAND = {
  name: 'Bonoan Labs',
  tagline: 'Modern websites & AI solutions for growing businesses',
  email: 'hello@bonoanlabs.com',
  instagram: 'https://www.instagram.com/',
  instagramHandle: '@bonoanlabs',
  calendlyPlaceholder: '#schedule-intro-call',
} as const;

export const METRICS = [
  { label: 'Faster booking', detail: 'Clear calls-to-action that turn visits into appointments' },
  { label: 'Mobile-first', detail: 'Looks great on every phone your customers use' },
  { label: 'Better experience', detail: 'Simple navigation that builds trust instantly' },
  { label: 'Stronger presence', detail: 'A professional look that matches your quality' },
] as const;

export const INDUSTRIES = [
  { name: 'Restaurants', icon: 'utensils' },
  { name: 'Auto shops', icon: 'wrench' },
  { name: 'Barbershops', icon: 'scissors' },
  { name: 'Construction', icon: 'hammer' },
  { name: 'Fitness', icon: 'dumbbell' },
  { name: 'Local services', icon: 'map-pin' },
] as const;

export const SERVICES = [
  {
    title: 'Website Design & Development',
    description:
      'Custom websites that look professional, load fast, and guide customers to call, book, or order.',
    icon: 'globe',
  },
  {
    title: 'AI Chatbots',
    description:
      'Answer common questions 24/7 so you spend less time on the phone and more time running the shop.',
    icon: 'bot',
  },
  {
    title: 'SaaS Tools',
    description:
      'Simple software for your team—dashboards, client portals, and tools that fit how you actually work.',
    icon: 'layers',
  },
  {
    title: 'Business Automation',
    description:
      'Connect forms, email, and workflows so leads and requests land where they belong—automatically.',
    icon: 'zap',
  },
  {
    title: 'Mobile-Friendly Redesigns',
    description:
      'Refresh an outdated site so it feels modern, readable, and easy to use on every screen size.',
    icon: 'smartphone',
  },
  {
    title: 'Booking & Ordering Systems',
    description:
      'Let customers schedule service, reserve a table, or place orders without extra back-and-forth.',
    icon: 'calendar',
  },
  {
    title: 'Accessibility-Focused Solutions',
    description:
      'Inclusive design so more people can find you, read your content, and take action with confidence.',
    icon: 'accessibility',
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We learn your goals, customers, and what success looks like—no tech jargon, just clarity.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description:
      'You see progress early. We refine the look, content, and tools until it feels right for your brand.',
  },
  {
    step: '03',
    title: 'Launch & Support',
    description:
      'Go live with confidence. We handle handoff, updates, and support so you stay focused on the business.',
  },
] as const;

export const WHY_CHOOSE = [
  'Mobile-first design',
  'Fast turnaround',
  'Personalized service',
  'Modern technology',
  'AI integration',
  'Small business focus',
  'Accessibility-first mindset',
  'Direct communication',
] as const;

export const FEATURED_PROJECTS = [
  {
    title: 'Vick Auto Repair',
    industry: 'Auto shop',
    problem: 'Turn Google searches into scheduled service calls',
    image: 'vick-auto-repair.png',
    href: 'https://astridbonoan.github.io/vick-autoshop.io-/',
  },
  {
    title: '1 Mi Taller Auto Repair',
    industry: 'Auto shop',
    problem: 'Build trust before the first bay opens',
    image: 'mi-taller-auto-repair.png',
    href: 'https://astridbonoan.github.io/1-Mi-Taller-Auto-Repair.io/',
  },
  {
    title: 'Good Eats',
    industry: 'Restaurant',
    problem: 'Menu, hours, and order paths in one clear place',
    image: 'good-eats.png',
    href: 'https://astridbonoan.github.io/GoodEats.io/',
  },
  {
    title: 'Ember Bowl Co.',
    industry: 'Restaurant',
    problem: 'Warm brand story that drives dine-in and takeout',
    image: 'ember-bowl-co.png',
    href: 'https://astridbonoan.github.io/ember-bowl-co.io/',
  },
  {
    title: 'A&S Barbershop',
    industry: 'Barbershop',
    problem: 'Book appointments without phone tag',
    image: 'as-barbershop.png',
    href: 'https://astridbonoan.github.io/AS_Barbershop.io/',
  },
  {
    title: 'A&S Renovations',
    industry: 'Construction',
    problem: 'Credibility and clear next steps for big projects',
    image: 'as-renovations.png',
    href: 'https://astridbonoan.github.io/AS-Renovations.io/',
  },
] as const;
