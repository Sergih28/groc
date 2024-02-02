import { useStore } from '@nanostores/react'

import { ProgressBarContent, ProgressBarWrapper } from './components'
import { calculatePercentage } from './functions'
import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'
import { getPhaseDuration } from '@store/Pomodoro/actions'
import { pomodoroStore } from '@store/Pomodoro/index'

const ProgressBar = () => {
  const { counterValue, showPercentage, fillColor, backgroundColor } = useStore(pomodoroStore.state)

  let percentage
  const currentValue = counterValue
  const baseValue = 0
  const targetValue = getPhaseDuration()

  try {
    percentage = calculatePercentage(currentValue, baseValue, targetValue)
  } catch (e) {
    if (e instanceof CurrentAboveBaseError || e instanceof CurrentBelowBaseError) {
      percentage = 0
    } else {
      percentage = 100
    }
  }

  return (
    <ProgressBarWrapper percentage={percentage} backgroundColor={backgroundColor}>
      <ProgressBarContent
        percentage={percentage}
        showPercentage={showPercentage}
        backgroundColor={backgroundColor}
        fillColor={fillColor}
      />
    </ProgressBarWrapper>
  )
}

export default ProgressBar
