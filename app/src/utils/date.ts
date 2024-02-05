export const calculateYearRange = (initialYear: number, currentYear: number) => {
  return initialYear >= currentYear ? initialYear.toString() : `${initialYear} - ${currentYear}`
}
