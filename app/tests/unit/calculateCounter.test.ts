import { calculateCounter } from '@hooks/useCounter'

describe('calculateCounter()', () => {
  test.each([
    [1, 1, 2],
    [23, 2, 25],
    [120, 100, 220],
    [2000, 1000, 3000],
  ])(
    'counter %i and target (seconds) %i, increments being %o by %i returns %i',
    (prevCounter, countingInterval, expected) => {
      const result = calculateCounter(prevCounter, countingInterval)

      expect(result).toBe(expected)
    },
  )
})
