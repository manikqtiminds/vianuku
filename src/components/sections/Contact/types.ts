export interface ContactMethod {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    action: string;
    href: string;
  }
  
  export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }