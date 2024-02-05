import { useEffect, useState } from 'react'

import { getDarkMode } from '@utils/storage/pomodoro'

import { DEFAULT_THEME, THEME_TOGGLE_TEXT, THEMES_TEXT } from '@molecules/ThemeToggle/constants'
import type { ThemeType } from '@molecules/ThemeToggle/types'

const useTheme = () => {
  const darkModeValue = getDarkMode()

  const [darkMode, setDarkMode] = useState<ThemeType>(darkModeValue) ?? DEFAULT_THEME
  const [hasMounted, setHasMounted] = useState(false)

  const toggleTheme = () => {
    setDarkMode((prevTheme) => !prevTheme)
  }
  const switchLabel = !darkMode ? THEME_TOGGLE_TEXT.light : THEME_TOGGLE_TEXT.dark

  useEffect(function checkMount() {
    setHasMounted(true)
  }, [])

  useEffect(
    function toggleDarkMode() {
      if (!hasMounted) return

      if (darkMode) {
        document.documentElement.classList.add(THEMES_TEXT.dark)
      } else {
        document.documentElement.classList.remove(THEMES_TEXT.dark)
      }

      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    },
    [darkMode, hasMounted],
  )

  return { darkMode, hasMounted, toggleTheme, switchLabel }
}

export default useTheme
