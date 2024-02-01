import { useStore } from '@nanostores/react'

import type { ProgressBarContentProps, ProgressBarWrapperProps } from './types'

import { calculatePercentage } from './functions'
import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'
import { getPhaseDuration } from '@store/Pomodoro/actions'
import { pomodoroStore } from '@store/Pomodoro/index'

import { STYLES } from './styles'

const ProgressBarWrapper = ({ children, percentage, backgroundColor }: ProgressBarWrapperProps) => {
  return (
    <div
      className={STYLES.progressBar}
      role="progressbar"
      aria-valuenow={percentage}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  )
}

const ProgressBarContent = ({
  percentage,
  showPercentage,
  fillColor,
  backgroundColor,
}: ProgressBarContentProps) => {
  return (
    <div
      className={STYLES.fillBar}
      style={{ width: `${percentage}%`, backgroundColor: `${fillColor}`, color: backgroundColor }}
    >
      {showPercentage && <>{percentage}%</>}
    </div>
  )
}

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
