import type { ProgressBarContentProps, ProgressBarProps, ProgressBarWrapperProps } from './types'

import { DEFAULT_PROGRESSBAR_PROPS } from './constants'
import { calculatePercentage } from './functions'
import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'

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

const ProgressBar = ({
  currentValue,
  baseValue = DEFAULT_PROGRESSBAR_PROPS.baseValue,
  targetValue = DEFAULT_PROGRESSBAR_PROPS.targetValue,
  showPercentage = true,
  fillColor = DEFAULT_PROGRESSBAR_PROPS.fillColor,
  backgroundColor = DEFAULT_PROGRESSBAR_PROPS.backgroundColor,
}: ProgressBarProps) => {
  if (fillColor === backgroundColor) {
    fillColor = DEFAULT_PROGRESSBAR_PROPS.fillColor
    backgroundColor = DEFAULT_PROGRESSBAR_PROPS.backgroundColor
  }

  let percentage

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
