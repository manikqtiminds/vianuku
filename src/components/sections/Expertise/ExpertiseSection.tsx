import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ExpertiseCard } from './ExpertiseCard';
import type { ExpertiseData } from './types';

interface Props {
  data: ExpertiseData;
}

export const ExpertiseSection = ({ data }: Props) => {
  const contentClasses = data.isReversed ? 'lg:order-2' : '';
  const imageClasses = data.isReversed ? 'lg:order-1' : '';

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${data.theme.primary} backdrop-blur-sm`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className={`space-y-8 ${contentClasses}`}
            initial={{ opacity: 0, x: data.isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full ${data.theme.accent} backdrop-blur-sm`}
              >
                <data.icon className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Our Expertise</span>
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {data.title}
              </h2>
              
              <p className="text-gray-200 text-lg leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center space-x-3 ${data.theme.card} backdrop-blur-sm rounded-lg p-4 transition-all duration-300`}
                >
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-gray-200">{detail}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.button
                className={`px-8 py-4 rounded-full ${data.theme.button} text-white transition-all duration-300 flex items-center space-x-2 group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={`relative ${imageClasses}`}
            initial={{ opacity: 0, x: data.isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {data.details.slice(0, 4).map((detail, index) => (
                <ExpertiseCard
                  key={index}
                  detail={detail}
                  index={index}
                  theme={data.theme}
                  icon={data.icon}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};