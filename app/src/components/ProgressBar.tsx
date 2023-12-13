import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'
import { CurrentAboveTargetError } from '@errors/CurrentAboveTargetError'
import { CurrentBelowTargetError } from '@errors/CurrentBelowTargetError'
import type { PropsWithChildren } from 'react'

interface ProgressBarProps {
  currentValue: number
  baseValue?: number
  targetValue?: number
  backgroundColor?: string
  fillColor?: string
  showPercentage?: boolean
  percentage?: number
}

type ProgressBarWrapperProps = Pick<ProgressBarProps, 'percentage' | 'backgroundColor'> &
  PropsWithChildren

type ProgressBarContentProps = Omit<ProgressBarProps, 'currentValue' | 'baseValue' | 'targetValue'>

const DEFAULT_PROGRESSBAR_PROPS = {
  backgroundColor: 'rgb(0, 0, 255)',
  fillColor: 'rgb(255, 255, 0)',
  baseValue: 0,
  targetValue: 100,
}

const STYLES = {
  progressBar: 'flex h-3 w-full overflow-hidden rounded-full',
  fillBar:
    'flex flex-col justify-center overflow-hidden whitespace-nowrap text-center  text-xs font-semibold transition duration-500',
}

export const calculatePercentage = (current: number, base: number, target: number): number => {
  const IS_POSITIVE_PROGRESS = base <= target

  if (IS_POSITIVE_PROGRESS && current < base) {
    throw new CurrentBelowBaseError(current, base)
  }

  if (IS_POSITIVE_PROGRESS && current > target) {
    throw new CurrentAboveTargetError(current, target)
  }

  if (!IS_POSITIVE_PROGRESS && current < target) {
    throw new CurrentBelowTargetError(current, target)
  }

  if (!IS_POSITIVE_PROGRESS && current > base) {
    throw new CurrentAboveBaseError(current, base)
  }

  const distance = Math.abs(target - base)
  const relativeProgress = Math.abs(current - base)
  const percentage = (relativeProgress / distance) * 100

  return percentage
}

const ProgressBarWrapper = ({ children, percentage, backgroundColor }: ProgressBarWrapperProps) => {
  return (
    <div
      className={STYLES.progressBar}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100"
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
