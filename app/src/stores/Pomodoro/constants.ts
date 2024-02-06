import type { StateType } from './types'

export const DEFAULT_STATE_VALUES: StateType = {
  id: null,
  counterContent: '25:00',
  counterValue: 0,
  isPaused: true,
  pomodoroDuration: 25 * 60 * 1000,
  breakDuration: 5 * 60 * 1000,
  longBreakDuration: 15 * 60 * 1000,
  isCountingUp: false,
  counterFormat: 'minutes',
  countingInterval: 1 * 1000,
  backgroundColor: 'blue',
  fillColor: 'yellow',
  showPercentage: false,
  phase: 'pomodoro',
} as const
