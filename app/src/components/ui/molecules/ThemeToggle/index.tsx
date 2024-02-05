import { Moon, Sun, SunMoon } from 'lucide-react'

import useTheme from '@hooks/useTheme'

import { getLangFromWindowUrl, useTranslations } from '@i18n/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu'

import { THEMES } from './constants'

const language = getLangFromWindowUrl()
const t = useTranslations(language)

const ThemeToggle = () => {
  const { themeIcon, updateTheme, hasMounted } = useTheme()

  if (!hasMounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{themeIcon}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.values(THEMES).map((theme) => {
          const ThemeIcon = ({ ...props }) =>
            theme === THEMES.dark ? (
              <Moon {...props} />
            ) : theme === THEMES.light ? (
              <Sun {...props} />
            ) : (
              <SunMoon {...props} />
            )

          return (
            <DropdownMenuItem onClick={() => updateTheme(theme)}>
              <ThemeIcon className="mr-2" size={18} />
              {t(`theme.${theme}`)}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle
