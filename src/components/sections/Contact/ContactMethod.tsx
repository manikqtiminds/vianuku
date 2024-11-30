import { motion } from 'framer-motion';
import type { ContactMethod as ContactMethodType } from './types';

interface Props {
  method: ContactMethodType;
  index: number;
}

export const ContactMethod = ({ method, index }: Props) => {
  const { icon: Icon, title, description, action, href } = method;
  
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="p-4 rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
        {description}
      </p>
      <span className="text-primary font-medium">
        {action}
      </span>
    </motion.a>
  );
};