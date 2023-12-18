import type { SETTINGS_OPTIONS_TYPE } from './types'

export const MODE_OPTIONS = {
  MANUAL: 'manual',
  AUTO: 'auto',
} as const

export const SETTINGS_OPTIONS: SETTINGS_OPTIONS_TYPE = {
  POMODORO_DURATION: {
    name: 'pomodoroDuration',
    description: 'Pomodoro duration (minutes)',
  },
  BREAK_DURATION: {
    name: 'breakDuration',
    description: 'Break duration (minutes)',
  },
  LONG_BREAK_DURATION: {
    name: 'longBreakDuration',
    description: 'Long break duration (minutes)',
  },
  MODE: {
    name: 'mode',
    description: 'Select mode',
  },
} as const

export const MODE_OPTIONS = {
  MANUAL: 'manual',
  AUTO: 'auto',
} as const

export const DEFAULT_SETTINGS_VALUES = {
  POMODORO_DURATION: 25,
  BREAK_DURATION: 5,
  LONG_BREAK_DURATION: 15,
  MODE: MODE_OPTIONS.MANUAL,
} as const
