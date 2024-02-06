import type { ProgressBarContentProps, ProgressBarWrapperType } from './types'

export const ProgressBar = ({ children, percentage, backgroundColor }: ProgressBarWrapperType) => {
  return (
    <div
      className="progressbar"
      role="progressbar"
      aria-valuenow={percentage}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  )
}

ProgressBar.Content = ({
  percentage,
  showPercentage,
  fillColor,
  backgroundColor,
}: ProgressBarContentProps) => {
  return (
    <div
      className="progressbar--fill"
      style={{ width: `${percentage}%`, backgroundColor, color: fillColor }}
    >
      {showPercentage && <>{percentage}%</>}
    </div>
  )
}
