import { useEffect, useState } from 'react'

import {
  DEFAULT_THEME,
  THEME_TOGGLE_ICON,
  THEMES,
} from '@components/layouts/navbar/theme-toggle/constants'
import type { ThemeType } from '@components/layouts/navbar/theme-toggle/types'

import { getTheme } from '@services/local-storage/utils'

const getSystemTheme = (): ThemeType => {
  if (matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEMES.dark
  }

  return THEMES.light
}

const useTheme = () => {
  const themeValue = getTheme() as ThemeType

  const [theme, setTheme] = useState<ThemeType>(themeValue) ?? DEFAULT_THEME
  const [hasMounted, setHasMounted] = useState(false)

  const themeIcon = theme === THEMES.light ? THEME_TOGGLE_ICON.light : THEME_TOGGLE_ICON.dark

  const updateTheme = (themeToUpdate: ThemeType) => {
    const newTheme = themeToUpdate === THEMES.system ? getSystemTheme() : themeToUpdate

    if (themeToUpdate === theme) return

    setTheme(newTheme)
  }

  useEffect(function checkMount() {
    setHasMounted(true)
  }, [])

  useEffect(
    function changeTheme() {
      if (!hasMounted) return

      if (theme === 'dark') {
        document.documentElement.classList.add(THEMES.dark)
      } else {
        document.documentElement.classList.remove(THEMES.dark)
      }

      localStorage.setItem('theme', JSON.stringify(theme))
    },
    [theme, hasMounted],
  )

  return { theme, hasMounted, updateTheme, themeIcon }
}

export default useTheme
