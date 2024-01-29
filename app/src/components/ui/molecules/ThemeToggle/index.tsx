import { useEffect, useState } from 'react'

import type { ThemeType } from './types'

import { DEFAULT_THEME, THEME_TOGGLE_TEXT, THEMES_TEXT } from './constants'
import { localStorageItems } from '@utils/storage/keys'
import Switch from '@components/ui/atoms/Switch'

const ThemeToggle = () => {
  const darkModeValue = localStorage.getItem(localStorageItems.darkMode)

  if (null == darkModeValue) return null

  const [darkMode, setDarkMode] = useState<ThemeType>(JSON.parse(darkModeValue) ?? DEFAULT_THEME)
  const [hasMounted, setHasMounted] = useState(false)

  const toggleTheme = () => {
    setDarkMode((prevTheme) => !prevTheme)
  }
  const switchLabel = !darkMode ? THEME_TOGGLE_TEXT.light : THEME_TOGGLE_TEXT.dark

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (hasMounted) {
      if (darkMode) {
        document.documentElement.classList.add(THEMES_TEXT.dark)
      } else {
        document.documentElement.classList.remove(THEMES_TEXT.dark)
      }

      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }
  }, [darkMode, hasMounted])

  if (!hasMounted) return null

  return <Switch isOn={darkMode} handleChange={toggleTheme} switchLabel={switchLabel} />
}

export default ThemeToggle
