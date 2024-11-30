export interface Service {
    title: string;
    description: string;
    image: string;
    icon: React.ComponentType<{ className?: string }>;
    link: string;
  }
  
  export interface ServicesData {
    mainServices: Service[];
    additionalServices: Service[];
  }