import { motion } from 'framer-motion';
import { FounderImage } from './FounderImage';
import { FounderContent } from './FounderContent';
import { founderData } from './data';

const Founder = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Visionary Leadership
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {founderData.vision}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FounderImage data={founderData} />
            <FounderContent data={founderData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;