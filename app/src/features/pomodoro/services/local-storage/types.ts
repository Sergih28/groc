import type { UUID } from 'crypto'
import type { PhaseType } from '@store/pomodoro/types'

export type PomodoroType = {
  id: UUID
  phase: PhaseType
  startTime: number | null
  endTime: number | null
  pausedTimeRanges: PausedTimeRange[]
  expectedDuration: number
  lastTick: number
}

export type PausedTimeRange = {
  start: number
  end: number | null
}

export type SavedPomodoroType = Omit<PomodoroType, 'lastTick'>
