import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from 'locales/ru/common.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      ru: { common: ru },
    },
    debug: true,
    lng: 'ru',
    fallbackLng: 'ru',
    defaultNS: 'common',
    ns: 'common',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
