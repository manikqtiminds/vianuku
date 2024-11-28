import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            services: 'Services',
            portfolio: 'Portfolio',
            blog: 'Blog',
            contact: 'Contact',
          },
          hero: {
            title: 'Transform Your Digital Presence with Ankurasoft',
            subtitle: 'We help businesses innovate and grow with modern technology solutions.',
            cta: {
              primary: 'Get Started',
              secondary: 'Learn More',
            },
          },
        },
      },
      de: {
        translation: {
          nav: {
            home: 'Startseite',
            services: 'Dienstleistungen',
            portfolio: 'Portfolio',
            blog: 'Blog',
            contact: 'Kontakt',
          },
          hero: {
            title: 'Transformieren Sie Ihre Digitale Präsenz mit Ankurasoft',
            subtitle: 'Wir helfen Unternehmen mit modernen Technologielösungen zu innovieren und zu wachsen.',
            cta: {
              primary: 'Loslegen',
              secondary: 'Mehr erfahren',
            },
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });