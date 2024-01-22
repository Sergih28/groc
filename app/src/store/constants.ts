import { calculateSecondsFromMinutes } from '@utils/numbers'

import type { CounterType, SettingsType } from './types'

export const DEFAULT_SETTINGS_VALUES: SettingsType = {
  pomodoroDuration: calculateSecondsFromMinutes(25),
  breakDuration: calculateSecondsFromMinutes(5),
  longBreakDuration: calculateSecondsFromMinutes(15),
  isCountingUp: false,
  counterFormat: 'minutes',
  countingInterval: 1,
  backgroundColor: 'blue',
  fillColor: 'yellow',
  showPercentage: false,
  mode: 'manual',
} as const

export const DEFAULT_PHASE = 'pomodoro'

export const DEFAULT_COUNTER_VALUES: CounterType = {
  id: null,
  counterContent: '',
  counterValue: 0,
  isPaused: true,
  handlePause: () => {},
  handleReset: () => {},
  handlePhase: () => {},
}
