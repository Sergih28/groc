export const calculatePercentage = (current: number, base: number, target: number): number => {
  const distance = Math.abs(target - base)
  const relativeProgress = Math.abs(current - base)
  const percentage = (relativeProgress / distance) * 100

  return percentage
}
