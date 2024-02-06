import { Moon, Sun, SunMoon } from 'lucide-react'
import { match } from 'ts-pattern'

import type { ThemeType } from './types'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/elements/dropdown-menu'

import { getLangFromWindowUrl, useTranslations } from '@services/i18n/utils'

import useTheme from '@hooks/use-theme'

import { THEMES } from './constants'

const ThemeToggle = () => {
  const language = getLangFromWindowUrl()
  const t = useTranslations(language)
  const { themeIcon, updateTheme, hasMounted } = useTheme()

  if (!hasMounted) return null
  const themeIconProps = { className: 'mr-2', size: 18 }

  const getThemeIcon = (theme: ThemeType) => {
    return match(theme)
      .with(THEMES.light, () => <Sun {...themeIconProps} />)
      .with(THEMES.dark, () => <Moon {...themeIconProps} />)
      .with(THEMES.system, () => <SunMoon {...themeIconProps} />)
      .exhaustive()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{themeIcon}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.values(THEMES).map((theme) => {
          const ThemeIcon = () => getThemeIcon(theme)
          return (
            <DropdownMenuItem key={theme} onClick={() => updateTheme(theme)}>
              <ThemeIcon />
              {t(`theme.${theme}`)}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle
