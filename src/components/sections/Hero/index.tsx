import { HeroContent } from './HeroContent';
import { ScrollIndicator } from './ScrollIndicator';
import { heroData } from './data';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2447]/90 to-[#19376D]/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <HeroContent data={heroData} />
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;