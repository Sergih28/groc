import { Moon, Sun } from 'lucide-react'

export const THEMES = {
  light: 'light',
  dark: 'dark',
  system: 'system',
} as const

export const DEFAULT_THEME = THEMES.light

export const THEMES_TEXT = {
  dark: 'dark',
  light: 'light',
} as const

export const THEME_TOGGLE_ICON = {
  dark: <Moon />,
  light: <Sun />,
}
