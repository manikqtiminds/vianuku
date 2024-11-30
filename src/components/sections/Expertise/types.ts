export interface ExpertiseTheme {
    primary: string;
    accent: string;
    button: string;
    card: string;
  }
  
  export interface ExpertiseData {
    title: string;
    description: string;
    details: string[];
    image: string;
    icon: React.ComponentType<{ className?: string }>;
    isReversed: boolean;
    theme: ExpertiseTheme;
  }