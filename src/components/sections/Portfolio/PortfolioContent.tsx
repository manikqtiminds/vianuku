import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { PortfolioData } from './types';

interface Props {
  data: PortfolioData;
}

export const PortfolioContent = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-blue-600/10"
      >
        <span className="text-blue-400 font-medium">{data.subtitle}</span>
      </motion.div>

      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        {data.title}
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed">
        {data.description}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.button
          className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center space-x-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore Our Solutions</span>
          <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};