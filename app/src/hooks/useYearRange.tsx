import { calculateYearRange } from '@utils/date'

const INITIAL_YEAR = 2023

const useYearRange = (initialCurrentYear?: number) => {
  const currentYear = null == initialCurrentYear ? new Date().getFullYear() : initialCurrentYear
  const yearRange = calculateYearRange(INITIAL_YEAR, currentYear)

  return yearRange
}

export default useYearRange
