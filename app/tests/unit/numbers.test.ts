import { calculateSecondsFromMilliseconds, calculateSecondsFromMinutes } from '@utils/numbers'

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

describe('calculateSecondsFromMinutes()', () => {
  test.each([
    [1, 60],
    [2, 120],
    [0, 0],
    [-60, -3600],
    [-234562, -14073720],
  ])('given  %d minutes returns %d seconds', (minutes, expected) => {
    const seconds = calculateSecondsFromMinutes(minutes)

    expect(seconds).toBe(expected)
  })
})
