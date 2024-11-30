import { motion } from 'framer-motion';
import type { Feature } from './types';

interface Props {
  feature: Feature;
  index: number;
}

export const FeatureCard = ({ feature, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
    >
      <div className="flex flex-col items-start">
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
          <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};