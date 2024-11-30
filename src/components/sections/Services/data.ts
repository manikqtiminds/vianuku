import { RefreshCw, Cloud, Database, Cog, Users } from 'lucide-react';
import type { ServicesData } from './types';

export const servicesData: ServicesData = {
  mainServices: [
    {
      title: 'Application Modernization',
      description: 'Transform legacy systems into modern, scalable applications using cloud-native technologies, microservices, and containerization. Our services enhance performance, reduce costs, and ensure seamless functionality.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
      icon: RefreshCw,
      link: '#application-modernization',
    },
    {
      title: 'Cloud Expertise',
      description: 'Empower businesses with seamless migration, cost optimization, and infrastructure scalability. Leveraging AWS, Azure, and Google Cloud, we ensure secure and resilient operations.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      icon: Cloud,
      link: '#cloud-expertise',
    },
    {
      title: 'Platforms',
      description: 'Develop scalable platforms tailored to your needs, integrating AI, IoT, and blockchain technologies. Our solutions streamline operations, enhance collaboration, and drive digital growth.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      icon: Database,
      link: '#platforms',
    }
  ],
  additionalServices: [
    {
      title: 'Engineering',
      description: 'Deliver precision-engineered solutions with advanced software development, automation, and system integration. Using agile methodologies, we design scalable, secure applications and embedded systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      icon: Cog,
      link: '#engineering',
    },
    {
      title: 'Staffing Services',
      description: 'Connect businesses with skilled professionals through tailored staffing solutions. Our rigorous process identifies top talent for IT, engineering, and management roles.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
      icon: Users,
      link: '#staffing',
    }
  ]
};