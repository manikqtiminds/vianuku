import { motion } from 'framer-motion';
import type { AboutData } from './types';

interface Props {
  data: AboutData;
}

export const AboutContent = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {data.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {data.description}
        </p>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {data.approach.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {data.approach.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {data.promise.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {data.promise.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};