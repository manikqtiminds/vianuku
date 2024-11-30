import { Server, Cloud, GitBranch } from 'lucide-react';
import type { ExpertiseData } from './types';

export const expertiseData: ExpertiseData[] = [
  {
    title: 'IT / ITES Consulting',
    description: 'Our IT/ITES consulting services focus on delivering innovative and scalable technology solutions that align with your business goals.',
    details: [
      'Digital Transformation Strategy',
      'Process Automation Solutions',
      'Enterprise Architecture Planning',
      'Advanced Analytics Integration',
      'Cost Optimization',
      'Service Delivery Enhancement'
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
    icon: Server,
    isReversed: false,
    theme: {
      primary: 'from-indigo-900/95 to-blue-900/95',
      accent: 'bg-indigo-500/20',
      button: 'bg-indigo-500 hover:bg-indigo-600',
      card: 'bg-white/5 hover:bg-white/10'
    }
  },
  {
    title: 'Cloud Services',
    description: 'Our cloud services enable businesses to leverage the full potential of cloud computing through seamless integration and efficient infrastructure management.',
    details: [
      'Multi-Cloud Orchestration',
      'Cloud Migration Services',
      'Containerization Solutions',
      'Serverless Architecture',
      'Disaster Recovery',
      'Security Implementation'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    icon: Cloud,
    isReversed: true,
    theme: {
      primary: 'from-blue-900/95 to-indigo-900/95',
      accent: 'bg-blue-500/20',
      button: 'bg-blue-500 hover:bg-blue-600',
      card: 'bg-white/5 hover:bg-white/10'
    }
  },
  {
    title: 'DevOps',
    description: 'We excel in providing DevOps solutions that enhance collaboration between development and operations teams, ensuring faster delivery cycles.',
    details: [
      'CI/CD Pipeline Implementation',
      'Infrastructure as Code',
      'Kubernetes & Docker',
      'Monitoring & Logging',
      'Performance Optimization',
      'Automated Testing'
    ],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80',
    icon: GitBranch,
    isReversed: false,
    theme: {
      primary: 'from-slate-900/95 to-blue-900/95',
      accent: 'bg-blue-500/20',
      button: 'bg-blue-500 hover:bg-blue-600',
      card: 'bg-white/5 hover:bg-white/10'
    }
  }
];