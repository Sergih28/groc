import { getLangFromWindowUrl, useTranslations } from '../i18n/utils'

type NavBarElement = {
  key: string
  url: string
  isEnabled: boolean
}

const NAVBAR_STYLES = {
  LIST: 'flex flex-col gap-4',
  DISABLED_ELEMENT: 'cursor-not-allowed text-gray-400',
  ENABLED_ELEMENT: 'cursor-pointer text-blue-500 hover:text-blue-700',
}

export const NAVBAR_ELEMENTS: NavBarElement[] = [
  {
    key: 'home',
    url: '/',
    isEnabled: true,
  },
  {
    key: 'pomodoro',
    url: '/pomodoro',
    isEnabled: false,
  },
  {
    key: 'notifications',
    url: '/notifications',
    isEnabled: false,
  },
  {
    key: 'settings',
    url: '/settings',
    isEnabled: false,
  },
  {
    key: 'stats',
    url: '/stats',
    isEnabled: false,
  },
  {
    key: 'challenges',
    url: '/challenges',
    isEnabled: false,
  },
  {
    key: 'export',
    url: '/export',
    isEnabled: false,
  },
  {
    key: 'help',
    url: '/help',
    isEnabled: false,
  },
]

const NavBar = () => {
  const lang = getLangFromWindowUrl()
  const t = useTranslations(lang)

  return (
    <ul className={NAVBAR_STYLES.LIST}>
      {NAVBAR_ELEMENTS.map(({ url, key, isEnabled }) => {
        const ListElement = () => (
          <li
            className={isEnabled ? NAVBAR_STYLES.ENABLED_ELEMENT : NAVBAR_STYLES.DISABLED_ELEMENT}
          >
            {t(`nav.${key}`)}
          </li>
        )

        if (!isEnabled) return <ListElement key={key} />

        return (
          <a key={key} href={url}>
            <ListElement />
          </a>
        )
      })}
    </ul>
  )
}

export default NavBar
