import type { UUID } from 'crypto'

export type StateType = {
  id: UUID | null
  counterContent: string
  counterValue: number
  isPaused: boolean
  pomodoroDuration: number
  breakDuration: number
  longBreakDuration: number
  isCountingUp: boolean
  counterFormat: 'minutes' | 'seconds'
  countingInterval: number
  backgroundColor: string
  fillColor: string
  showPercentage: boolean
  phase: PhaseType
  sound: boolean
}

export type ActionType = {
  handlePause: () => void
  handleReset: () => void
  handlePhase: (phase: PhaseType) => void
}

export type PhaseType = 'pomodoro' | 'break' | 'longBreak'
