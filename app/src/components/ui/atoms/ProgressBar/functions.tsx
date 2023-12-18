import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'
import { CurrentAboveTargetError } from '@errors/CurrentAboveTargetError'
import { CurrentBelowTargetError } from '@errors/CurrentBelowTargetError'

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
