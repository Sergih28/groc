import { DEFAULT_THEME } from '@components/layouts/navbar/theme-toggle/constants'

import { localStorageItems } from './keys'

export const getTheme = (): string => {
  const themeValue = localStorage.getItem(localStorageItems.theme)

  if (null == themeValue) return DEFAULT_THEME

  return themeValue
}
