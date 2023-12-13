type NavBarElement = {
  name: string
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
    name: 'Home',
    url: '/',
    isEnabled: true,
  },
  {
    name: 'Pomodoro',
    url: '/pomodoro',
    isEnabled: false,
  },
  {
    name: 'Notifications',
    url: '/notifications',
    isEnabled: false,
  },
  {
    name: 'Settings',
    url: '/settings',
    isEnabled: false,
  },
  {
    name: 'Stats',
    url: '/stats',
    isEnabled: false,
  },
  {
    name: 'Challenges',
    url: '/challenges',
    isEnabled: false,
  },
  {
    name: 'Export',
    url: '/export',
    isEnabled: false,
  },
  {
    name: 'Help',
    url: '/help',
    isEnabled: false,
  },
]

const NavBar = () => {
  return (
    <ul className={NAVBAR_STYLES.LIST}>
      {NAVBAR_ELEMENTS.map(({ url, name, isEnabled }) => {
        const ListElement = () => (
          <li
            className={isEnabled ? NAVBAR_STYLES.ENABLED_ELEMENT : NAVBAR_STYLES.DISABLED_ELEMENT}
          >
            {name}
          </li>
        )

        if (!isEnabled) return <ListElement />

        return (
          <a href={url}>
            <ListElement />
          </a>
        )
      })}
    </ul>
  )
}

export default NavBar
