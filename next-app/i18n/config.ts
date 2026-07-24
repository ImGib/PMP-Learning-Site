// i18n/config.ts — khởi tạo react-i18next (singleton). vi mặc định, gộp tài nguyên vi/en.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { vi } from './messages/vi';
import { en } from './messages/en';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
    },
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: { escapeValue: false }, // giá trị có thể chứa HTML
    react: { useSuspense: false },
  });
}

export default i18n;
