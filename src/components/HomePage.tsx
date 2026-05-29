import { CTASection } from './home/CTASection';
import { FeaturedProjects } from './home/FeaturedProjects';
import { HeroSection } from './home/HeroSection';
import { ProcessSection } from './home/ProcessSection';
import { ServicesPreview } from './home/ServicesPreview';
import { TrustSection } from './home/TrustSection';
import { WhyChooseSection } from './home/WhyChooseSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-surface transition-colors duration-300 dark:bg-surface-dark">
      <HeroSection onNavigate={onNavigate} />
      <TrustSection />
      <ServicesPreview onNavigate={onNavigate} />
      <FeaturedProjects onNavigate={onNavigate} />
      <ProcessSection />
      <WhyChooseSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
