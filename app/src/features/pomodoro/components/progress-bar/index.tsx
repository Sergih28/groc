import { useStore } from '@nanostores/react'

import { calculatePercentage } from '@features/pomodoro/utils/progress-bar'

import { pomodoroStore } from '@store/Pomodoro'

import { ProgressBar } from './components'

const MAX_PERCENTAGE = 100
const MIN_PERCENTAGE = 0

const ProgressBarComponent = () => {
  const {
    counterValue: currentValue,
    showPercentage,
    fillColor,
    backgroundColor,
  } = useStore(pomodoroStore.state)

  const targetValue = pomodoroStore.actions.getPhaseDuration()
  const percentage =
    targetValue !== MIN_PERCENTAGE
      ? calculatePercentage(currentValue, MIN_PERCENTAGE, targetValue)
      : MAX_PERCENTAGE

  const wrapperProps = { percentage, backgroundColor }
  const contentProps = {
    percentage,
    showPercentage,
    fillColor: backgroundColor,
    backgroundColor: fillColor,
  }

  return (
    <ProgressBar {...wrapperProps}>
      <ProgressBar.Content {...contentProps} />
    </ProgressBar>
  )
}

export default ProgressBarComponent
