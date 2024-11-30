import { Code2, GitBranch, Workflow, Timer, Cpu, Lock } from 'lucide-react';
import type { AboutData } from './types';

export const aboutData: AboutData = {
  title: 'Empowering Innovation Through DevOps Excellence',
  subtitle: 'Our Approach',
  description: 'At Ankurasoft, we specialize in empowering businesses with robust DevOps solutions that enhance efficiency, scalability, and delivery speed.',
  approach: {
    title: 'Our Approach',
    description: 'We integrate development and operations teams through automated CI/CD pipelines, infrastructure as code (IaC), and continuous monitoring.'
  },
  promise: {
    title: 'Our Promise',
    description: 'Whether you\'re modernizing legacy systems or building cloud-native applications, our DevOps practices enable faster time-to-market and resilient, high-performing solutions.'
  },
  features: [
    {
      icon: Code2,
      title: 'CI/CD Pipelines',
      description: 'Automated deployment pipelines ensuring rapid and reliable delivery'
    },
    {
      icon: GitBranch,
      title: 'Infrastructure as Code',
      description: 'Version-controlled infrastructure deployment with modern IaC practices'
    },
    {
      icon: Workflow,
      title: 'DevOps Integration',
      description: 'Seamless integration of development and operations workflows'
    },
    {
      icon: Timer,
      title: 'Faster Time-to-Market',
      description: 'Accelerated delivery cycles with automated testing and deployment'
    },
    {
      icon: Cpu,
      title: 'Cloud-Native Solutions',
      description: 'Modern architectures using Docker and Kubernetes'
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Built-in security practices throughout the development lifecycle'
    }
  ]
};