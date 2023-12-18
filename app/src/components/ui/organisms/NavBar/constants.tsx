import type { NavBarElement } from './types'

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
] as const
