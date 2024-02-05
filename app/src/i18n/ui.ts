import ca from './locales/ca/_export'
import en from './locales/en/_export'
import es from './locales/es/_export'
import jp from './locales/jp/_export'
import ko from './locales/ko/_export'

export const languages = {
  en: 'English',
  es: 'Spanish',
  ko: 'Korean',
  ca: 'Catalan',
  jp: 'Japanese',
}

export const fallbackLang = 'en'

export const ui = {
  en,
  es,
  ko,
  ca,
  jp,
}

export type UIType = typeof ui

export type ValUIType = keyof typeof en
