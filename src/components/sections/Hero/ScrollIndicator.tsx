import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2" />
      </div>
    </motion.div>
  );
};