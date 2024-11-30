import { Cloud, GitBranch } from 'lucide-react';
import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  title: 'Empowering Innovation with Cloud and DevOps Excellence',
  subtitle: 'Our Solutions',
  description: 'At Ankurasoft, our skilled consultants and cutting-edge technologies deliver transformative IT solutions, streamlining workflows and accelerating project success. Trust us to drive your business growth with secure, scalable, and future-ready cloud and DevOps strategies.',
  features: [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Secure, scalable, and efficient cloud infrastructure tailored to your business needs'
    },
    {
      icon: GitBranch,
      title: 'DevOps Excellence',
      description: 'Streamlined development workflows and automated deployment pipelines'
    }
  ]
};