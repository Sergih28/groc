import { useStore } from '@nanostores/react'

import type { ProgressBarContentProps, ProgressBarWrapperProps } from './types'

import { calculatePercentage } from './functions'
import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'
import { $counter, $phase, $settings } from '@store/Pomodoro'

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
  const { counterValue } = useStore($counter)
  const settings = useStore($settings)
  const phase = useStore($phase)

  let percentage
  const currentValue = counterValue
  const baseValue = settings.isCountingUp ? 0 : settings[`${phase}Duration`]
  const targetValue = settings.isCountingUp ? settings[`${phase}Duration`] : 0

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
    <ProgressBarWrapper percentage={percentage} backgroundColor={settings.backgroundColor}>
      <ProgressBarContent
        percentage={percentage}
        showPercentage={settings.showPercentage}
        backgroundColor={settings.backgroundColor}
        fillColor={settings.fillColor}
      />
    </ProgressBarWrapper>
  )
}

export default ProgressBar
