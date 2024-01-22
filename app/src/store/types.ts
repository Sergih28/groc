import type { UUID } from 'crypto'

import type { PomodoroType } from '@utils/storage/types'

export type CounterType = {
  counterContent: string
  counterValue: number
  handlePause: () => void
  handleReset: () => void
  handlePhase: (phase: PhaseType) => void
  isPaused: boolean
  id: UUID | null
}

export type PhaseType = 'pomodoro' | 'break' | 'longBreak'

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
  mode: 'manual' | 'auto'
}

export type PomodoroStart = Pick<PomodoroType, 'id' | 'phase' | 'startTime'>
