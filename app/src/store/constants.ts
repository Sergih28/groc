import type { CounterType, SettingsType } from './types'

export const DEFAULT_SETTINGS_VALUES: SettingsType = {
  pomodoroDuration: 25 * 60,
  breakDuration: 5 * 60,
  longBreakDuration: 15 * 60,
  isCountingUp: false,
  counterFormat: 'minutes',
  countingInterval: 1,
  backgroundColor: 'blue',
  fillColor: 'yellow',
  showPercentage: false,
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
