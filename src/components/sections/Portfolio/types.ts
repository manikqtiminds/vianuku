export interface FeatureCard {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }
  
  export interface PortfolioData {
    title: string;
    subtitle: string;
    description: string;
    features: FeatureCard[];
  }