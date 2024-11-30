import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { HeroData } from './types';

interface Props {
  data: HeroData;
}

export const HeroContent = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        {t('hero.title')}
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        {t('hero.subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {data.buttons.map((button, index) => (
          <motion.button 
            key={index}
            className={`${
              button.variant === 'primary'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'border-2 border-white text-white hover:bg-white/10'
            } px-8 py-3 rounded-full transition-colors flex items-center justify-center group`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button.label}
            {button.variant === 'primary' && (
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};