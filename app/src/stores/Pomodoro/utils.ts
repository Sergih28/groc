import { getPhaseDuration } from './actions'
import $state from './state'

export const isPomodoroFinished = () => {
  const phaseDuration = getPhaseDuration()
  const counterValue = $state.get().counterValue

  const isFinished = counterValue >= phaseDuration

  return isFinished
}
