import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { FounderData } from './types';

interface Props {
  data: FounderData;
}

export const FounderContent = ({ data }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="relative">
        <Quote className="absolute -left-8 -top-8 h-16 w-16 text-blue-100 dark:text-blue-900" />
        <div className="space-y-6">
          {data.quote.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed relative z-10"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {data.keyPoints.map((point, index) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {point.title}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};