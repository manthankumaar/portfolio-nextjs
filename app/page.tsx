import { AboutSection } from './components/main/AboutSection';
import { FeatureSection } from './components/main/FeatureSection';
import { HeroSection } from './components/main/HeroSection';
import { ServiceSection } from './components/main/ServiceSection';
import { TechStackSection } from './components/main/TechStackSection';

const Home = () => {
  return (
    <section>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <TechStackSection />
    </section>
  );
};

export default Home;
