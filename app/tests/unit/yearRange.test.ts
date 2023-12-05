import { calculateYearRange } from '@hooks/useYearRange'
import useYearRange from '@hooks/useYearRange'

describe('calculateYearRange()', () => {
  describe('calculates the year range when the current year is after than the initial year', () => {
    test.each([
      [2023, 2025, '2023 - 2025'],
      [2025, 30234, '2025 - 30234'],
    ])(
      'given initial year %i and current year %i returns %s',
      (initialYear, currentYear, expected) => {
        const yearRange = calculateYearRange(initialYear, currentYear)

        expect(yearRange).toBe(expected)
      },
    )
  })

  describe('calculates the year when there is no currentYear parameter', () => {
    test('given no currentYear parameter, use the current year as default', () => {
      const mockedDate = new Date('2025-04-07T00:00:00Z')

      vi.setSystemTime(mockedDate)

      const yearRange = useYearRange()

      expect(yearRange).toBe('2023 - 2025')

      vi.useRealTimers()
    })
  })

  describe('calculates the year when the current year is before the initial year', () => {
    test.each([
      [2023, 2020, '2023'],
      [1823, 1580, '1823'],
      [3, -1234, '3'],
    ])(
      'given initial year %i and current year %i, returns %s',
      (initialYear, currentYear, expected) => {
        const yearRange = calculateYearRange(initialYear, currentYear)

        expect(yearRange).toBe(expected)
      },
    )
  })
})
