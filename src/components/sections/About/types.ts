export interface Feature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }
  
  export interface AboutData {
    title: string;
    subtitle: string;
    description: string;
    approach: {
      title: string;
      description: string;
    };
    promise: {
      title: string;
      description: string;
    };
    features: Feature[];
  }