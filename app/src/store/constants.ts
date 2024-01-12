import type { CounterType, SettingsType } from './types'

export const DEFAULT_COUNTER_VALUES: CounterType = {
  counterContent: '00:00',
  counterValue: 0,
  handlePause: () => {},
  handleReset: () => {},
  isFinished: true,
  isPaused: false,
}

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
