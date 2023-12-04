const INITIAL_YEAR = 2023

export const calculateYearRange = (initialYear: number, currentYear: number) => {
  return initialYear >= currentYear ? initialYear.toString() : `${initialYear} - ${currentYear}`
}

const useYearRange = (initialCurrentYear?: number) => {
  const currentYear = null == initialCurrentYear ? new Date().getFullYear() : initialCurrentYear
  const yearRange = calculateYearRange(INITIAL_YEAR, currentYear)

  return yearRange
}

export default useYearRange
