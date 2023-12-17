import { ui, fallbackLang, languages } from './ui'

export const getLangFromLocalStorage = () => {
  const lang = localStorage.getItem('lng')

  if (Object.keys(languages).includes(lang)) {
    return lang
  }

  return fallbackLang
}

export const getLangFromWindowUrl = () => {
  const lang = window.location.pathname.split('/')[1]

  if (lang in ui) return lang as keyof typeof ui

  return fallbackLang
}

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')

  if (lang in ui) return lang as keyof typeof ui

  return fallbackLang
}

export const useTranslations = (lang: keyof typeof ui) => {
  return function t(key: keyof (typeof ui)[typeof fallbackLang]) {
    return ui[lang][key] || ui[fallbackLang][key]
  }
}

export const generateParamsLanguageList = (languages: Record<string, string>) => {
  return Object.keys(languages).map((lang) => ({ params: { lang } }))
}
