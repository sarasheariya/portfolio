import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ar from './locales/ar.json'

const apply = (l) => {
  document.documentElement.lang = l
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: localStorage.getItem('lang') || 'ar',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})
i18n.on('languageChanged', (l) => { localStorage.setItem('lang', l); apply(l) })
apply(i18n.language)

export default i18n
