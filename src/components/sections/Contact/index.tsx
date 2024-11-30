import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { ContactMethod } from './ContactMethod';
import { ContactForm } from './ContactForm';
import type { ContactMethod as ContactMethodType } from './types';

const contactMethods: ContactMethodType[] = [
  {
    icon: MessageSquare,
    title: 'Chat with us',
    description: 'Speak with our team directly',
    action: 'Start a conversation',
    href: '#chat',
  },
  {
    icon: Mail,
    title: 'Email us',
    description: 'Get in touch via email',
    action: 'info@ankurasoft.com',
    href: 'mailto:info@ankurasoft.com',
  },
  {
    icon: Phone,
    title: 'Call us',
    description: 'Mon-Fri from 8am to 5pm',
    action: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Let's Build Something Great Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <ContactMethod key={index} method={method} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;