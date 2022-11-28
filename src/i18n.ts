import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationRu  from "./locales/ru/translation.json"

const resources = {
  ru: {
    translation: translationRu
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ru",
    resources,
    fallbackLng: {
      'ru-RU':['ru'],
      default:['ru']
    },
    debug: process.env['NODE_ENV'] !== 'production',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
