import { Linkedin, Github, Mail } from 'lucide-react';
import type { FounderData } from './types';

export const founderData: FounderData = {
  image: '/public/images/founder/founder.png',
  role: 'Founder & CEO',
  experience: '20+ Years in Technology',
  quote: [
    "At Ankurasoft, we're not just building software; we're crafting solutions that drive real business transformation. With over two decades of experience in technology leadership, I've witnessed firsthand how the right technological approach can revolutionize businesses.",
    "Our commitment goes beyond delivering code – we're dedicated to understanding your unique challenges and creating innovative solutions that propel your business forward. Through strategic partnerships and cutting-edge development practices, we ensure every project contributes to your long-term success."
  ],
  vision: "Driving innovation through experience and expertise",
  stats: [
    { value: '20+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Delivered' }
  ],
  keyPoints: [
    { title: 'Strategic Vision' },
    { title: 'Technical Excellence' },
    { title: 'Innovation Focus' },
    { title: 'Client Success' }
  ],
  social: [
    { platform: 'LinkedIn', url: '#', icon: Linkedin },
    { platform: 'GitHub', url: '#', icon: Github },
    { platform: 'Email', url: 'mailto:founder@ankurasoft.com', icon: Mail }
  ]
};