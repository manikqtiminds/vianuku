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
            about: 'About',
            expertise: 'Expertise',
            contact: 'Contact',
          },
          hero: {
            title: 'Transform Your Digital Presence with Ankurasoft',
            subtitle: 'We help businesses innovate and grow with modern technology solutions.',
            cta: {
              primary: 'Learn More',
              secondary: 'Contact Us',
            },
          },
        },
      },
      de: {
        translation: {
          nav: {
            home: 'Startseite',
            services: 'Dienstleistungen',
            about: 'Über uns',
            expertise: 'Expertise',
            contact: 'Kontakt',
          },
          hero: {
            title: 'Transformieren Sie Ihre Digitale Präsenz mit Ankurasoft',
            subtitle: 'Wir helfen Unternehmen mit modernen Technologielösungen zu innovieren und zu wachsen.',
            cta: {
              primary: 'Mehr erfahren',
              secondary: 'Kontaktieren Sie uns',
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

export default i18n;