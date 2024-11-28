import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Cloud Services',
    description: 'Maximize the value of your cloud investments. Our cloud optimization services focus on cost efficiency, performance enhancement, and security.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    link: '#cloud-services',
  },
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions that drive growth and innovation in the modern marketplace.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
    link: '#digital-transformation',
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions designed to safeguard your business against evolving threats.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    link: '#cybersecurity',
  },
];

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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[600px] overflow-hidden rounded-3xl"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {service.description}
                </p>
                <motion.a
                  href={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors transform transition-transform duration-300 group-hover:-translate-y-2"
                  whileHover={{ x: 10 }}
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {['AI & Machine Learning', 'Data Analytics', 'IoT Solutions', 'Software Development'].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {service}
              </h4>
              <div className="flex items-center text-gray-400 group-hover:text-blue-400 transition-colors">
                <span className="text-sm">Explore Service</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;