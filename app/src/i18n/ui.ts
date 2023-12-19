import en from './locales/en/_export'
import es from './locales/es/_export'
import ko from './locales/ko/_export'
import ca from './locales/ca/_export'
import jp from './locales/jp/_export'

/* Changing the languages here will automatically update astro config */

export const languages = {
  en: 'English',
  es: 'Spanish',
  ko: 'Korean',
  ca: 'Catalan',
  jp: 'Japanese',
}

export const fallbackLang = 'es'

export const ui = {
  en,
  es,
  ko,
  ca,
  jp,
} as const
