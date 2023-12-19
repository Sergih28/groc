import {
  generateParamsLanguageList,
  getLangFromLocalStorage,
  getLangFromUrl,
  getLangFromWindowUrl,
  useTranslations,
} from '@i18n/utils'
import { fallbackLang } from '@i18n/ui'

describe('i18n function tests', () => {
  describe('getFromLangLocaStorage()', () => {
    let localStorageMock: Record<string, string> = {}

    beforeAll(() => {
      localStorage.setItem = vi.fn((key: string, value: string) => {
        localStorageMock[key] = value
      })
      localStorage.getItem = vi.fn((key) => localStorageMock[key])
    })

    beforeEach(() => {
      localStorageMock = {}
    })

    test('given no language in local storage, should return the fallback language', () => {
      const language = getLangFromLocalStorage()
      expect(language).toBe(fallbackLang)
    })

    test('given a language in local storage, should return the language', () => {
      localStorage.setItem('lng', 'en')
      const language = getLangFromLocalStorage()

      expect(language).toBe('en')
    })
  })

  describe('getLangFromWindowUrl()', () => {
    beforeAll(() => {
      window = Object.create(window)

      Object.defineProperty(window, 'location', {
        value: {
          pathname: 'localhost/jp',
        },
      })
    })

    test('given a pathname with a language, should get the lang from the url', () => {
      const language = getLangFromWindowUrl()
      expect(language).toBe('jp')
    })
  })

  describe('getLangFromUrl()', () => {
    const baseURL = 'https://www.groc.com'

    test('given an URL with a language, should return the lang from the URL', () => {
      const fullURL = new URL('/ca', baseURL)
      const language = getLangFromUrl(fullURL)

      expect(language).toBe('ca')
    })

    test('given an URL with no language, shold return the fallback language', () => {
      const language = getLangFromUrl(new URL(baseURL))

      expect(language).toBe(fallbackLang)
    })
  })

  describe('useTranslations()', () => {
    test('should return a function', () => {
      const translationFunction = useTranslations('es')
      expect(typeof translationFunction).toBe('function')
    })

    test('given a language and a key, should return the translation of that key value', () => {
      const translation = useTranslations('jp')('nav.settings')

      expect(translation).toBe('設定')
    })
  })

  describe('generateParamsLanguageList()', () => {
    test('given a language list, should generate an array of objects with language parameters', () => {
      const languageList = {
        en: 'English',
        es: 'Español',
        ca: 'Català',
      }
      const expectedResult = [
        { params: { lang: 'en' } },
        { params: { lang: 'es' } },
        { params: { lang: 'ca' } },
      ]

      const paramLanguageList = generateParamsLanguageList(languageList)

      expect(paramLanguageList).toEqual(expectedResult)
    })
  })
})
