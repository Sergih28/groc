import type { ProgressBarContentProps, ProgressBarWrapperProps } from './types'

import { STYLES } from './styles'

export const ProgressBarWrapper = ({
  children,
  percentage,
  backgroundColor,
}: ProgressBarWrapperProps) => {
  return (
    <div
      className={STYLES.PROGRESSBAR}
      role="progressbar"
      aria-valuenow={percentage}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  )
}

export const ProgressBarContent = ({
  percentage,
  showPercentage,
  fillColor,
  backgroundColor,
}: ProgressBarContentProps) => {
  return (
    <div
      className={STYLES.FILLBAR}
      style={{ width: `${percentage}%`, backgroundColor: `${fillColor}`, color: backgroundColor }}
    >
      {showPercentage && <>{percentage}%</>}
    </div>
  )
}
