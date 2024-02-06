import type { NavBarElement } from './types'

export const NAVBAR_ELEMENTS: readonly NavBarElement[] = [
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
] as const
