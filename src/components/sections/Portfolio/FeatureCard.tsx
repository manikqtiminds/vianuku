import { motion } from 'framer-motion';
import type { FeatureCard as FeatureCardType } from './types';

interface Props {
  feature: FeatureCardType;
  index: number;
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
}

export const FeatureCard = ({ feature, index, gradientFrom, gradientTo, iconBg }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`bg-gradient-to-br from-${gradientFrom} to-${gradientTo} backdrop-blur-sm p-8 rounded-2xl border border-white/10`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <feature.icon className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-300">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};