export interface SocialLink {
    platform: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
  }
  
  export interface Stat {
    value: string;
    label: string;
  }
  
  export interface KeyPoint {
    title: string;
  }
  
  export interface FounderData {
    image: string;
    role: string;
    experience: string;
    quote: string[];
    vision: string;
    stats: Stat[];
    keyPoints: KeyPoint[];
    social: SocialLink[];
  }