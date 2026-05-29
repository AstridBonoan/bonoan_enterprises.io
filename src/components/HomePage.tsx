import { CTASection } from './home/CTASection';
import { FeaturedWorkSection } from './home/FeaturedWorkSection';
import { HeroSection } from './home/HeroSection';
import { IndustriesSection } from './home/IndustriesSection';
import { ProcessSection } from './home/ProcessSection';
import { ServicesPreview } from './home/ServicesPreview';
import { WhyChooseSection } from './home/WhyChooseSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-surface transition-colors duration-300 dark:bg-surface-dark">
      <HeroSection onNavigate={onNavigate} />
      <ServicesPreview onNavigate={onNavigate} />
      <IndustriesSection />
      <FeaturedWorkSection onNavigate={onNavigate} />
      <WhyChooseSection />
      <ProcessSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
