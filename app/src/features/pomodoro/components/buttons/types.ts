export interface ResetButtonProps {
  resetPomodoro: () => void
}

export interface PlayPauseButtonProps {
  hasStarted?: boolean
  isPaused?: boolean
  handleClick?: () => void
}

export interface NextButtonProps {
  nextPomodoro: () => void
}
