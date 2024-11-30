import { motion } from 'framer-motion';
import { PortfolioContent } from './PortfolioContent';
import { FeatureCard } from './FeatureCard';
import { portfolioData } from './data';

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-[#080E1C]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <PortfolioContent data={portfolioData} />

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid gap-6">
              {portfolioData.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  feature={feature}
                  index={index}
                  gradientFrom={index === 0 ? 'blue-600/10' : 'purple-600/10'}
                  gradientTo={index === 0 ? 'purple-600/10' : 'blue-600/10'}
                  iconBg={index === 0 ? 'bg-blue-600/20' : 'bg-purple-600/20'}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;