import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from './types';

interface Props {
  service: Service;
  index: number;
  variant?: 'main' | 'additional';
}

export const ServiceCard = ({ service, index, variant = 'main' }: Props) => {
  if (variant === 'main') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative h-[600px] overflow-hidden rounded-3xl"
      >
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        </div>

        <div className="relative h-full flex flex-col justify-end p-8">
          <div className="mb-6">
            <service.icon className="h-12 w-12 text-blue-400 mb-4" />
          </div>
          <motion.div
            initial={false}
            className="space-y-4 transform transition-all duration-300 group-hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-white">
              {service.title}
            </h3>
            <p className="text-gray-300">
              {service.description}
            </p>
            <motion.a
              href={service.link}
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start space-x-6">
        <service.icon className="h-8 w-8 text-blue-400 flex-shrink-0" />
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
          </h4>
          <p className="text-gray-400">
            {service.description}
          </p>
          <motion.div 
            className="flex items-center text-blue-400 group-hover:text-blue-300"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-sm font-medium">Explore Service</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};