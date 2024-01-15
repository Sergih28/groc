import type { UUID } from 'crypto'

import type { PhaseType } from '@store/types'

export type PomodoroType = {
  id: UUID
  phase: PhaseType
  startTime: number
  endTime: number | null
  pausedTimeRanges: PausedTimeRange[] | null
  expectedDuration: number
}

export type PausedTimeRange = {
  start: number
  end: number | null
}
