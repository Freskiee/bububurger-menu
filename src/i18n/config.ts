import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { menuTranslations } from './menu';
import { commonTranslations } from './common';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          ...menuTranslations,
          ...commonTranslations
        }
      },
      en: {
        translation: {
          ...menuTranslations,
          ...commonTranslations
        }
      }
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 