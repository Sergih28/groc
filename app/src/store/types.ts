import useCounter from '@hooks/useCounter'

export type CounterType = ReturnType<typeof useCounter>

export type SettingsType = {
  pomodoroDuration: number
  breakDuration: number
  longBreakDuration: number
  isCountingUp: boolean
  counterFormat: 'minutes' | 'seconds'
  countingInterval: number
  backgroundColor: string
  fillColor: string
  showPercentage: boolean
}
