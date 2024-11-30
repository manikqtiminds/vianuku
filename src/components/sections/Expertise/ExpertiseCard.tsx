import { motion } from 'framer-motion';
import type { ExpertiseData } from './types';

interface Props {
  detail: string;
  index: number;
  theme: ExpertiseData['theme'];
  icon: ExpertiseData['icon'];
}

export const ExpertiseCard = ({ detail, index, theme, icon: Icon }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`${theme.card} backdrop-blur-sm p-6 rounded-xl transition-all duration-300 group border border-white/10`}
    >
      <div className="space-y-4">
        <div className={`h-10 w-10 rounded-full ${theme.accent} flex items-center justify-center transition-colors duration-300`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white">{detail}</h3>
        <p className="text-gray-300 text-sm">
          Implementing cutting-edge solutions for modern business needs
        </p>
      </div>
    </motion.div>
  );
};