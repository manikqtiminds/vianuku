import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { servicesData } from './data';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#080E1C] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              variant="main"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {servicesData.additionalServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              variant="additional"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;