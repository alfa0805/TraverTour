import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import uz from "./locales/uz.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const resources = {
  uz: {
    translation: uz,
  },
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};
i18
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "uz",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18;
