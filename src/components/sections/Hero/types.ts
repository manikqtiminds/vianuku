export interface HeroButton {
    label: string;
    variant: 'primary' | 'secondary';
  }
  
  export interface HeroData {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttons: HeroButton[];
  }