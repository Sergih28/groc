import { useEffect, useState } from 'react'
import Switch from '@components/ui/atoms/Switch'
import type { ThemeType } from './types'
import { DEFAULT_THEME, THEMES_TEXT, THEME_TOGGLE_TEXT } from './constants'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<ThemeType>(
    Boolean(localStorage.getItem('darkMode')) ?? DEFAULT_THEME,
  )
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
