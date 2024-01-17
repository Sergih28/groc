import { calculateSecondsFromMilliseconds } from '@utils/numbers'

describe('calculateSecondsFromMilliseconds()', () => {
  test.each([
    [1000, 1],
    [0, 0],
    [123454662, 123454.662],
    [-2345, -2.345],
    [-2345236724356662, -2345236724356.662],
  ])('given  %d milliseconds returns %d seconds', (milliseconds, expected) => {
    const seconds = calculateSecondsFromMilliseconds(milliseconds)

    expect(seconds).toBe(expected)
  })
})
