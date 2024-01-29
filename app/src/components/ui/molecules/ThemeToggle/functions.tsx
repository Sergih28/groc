import { localStorageItems } from '@utils/storage/keys'

export const getDarkMode = (): boolean => {
  const darkModeValue = localStorage.getItem(localStorageItems.darkMode)

  if (null == darkModeValue) return false

  return JSON.parse(darkModeValue)
}
