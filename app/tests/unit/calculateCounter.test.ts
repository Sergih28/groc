import { calculateCounter } from '@hooks/useCounter'

describe('calculateCounter()', () => {
  describe('Incrementing scenarios', () => {
    describe('counter does not reach the target (seconds)', () => {
      test.each([
        [1, 10, true, 1, 2],
        [23, 120, true, 2, 25],
        [200, 400, true, 100, 300],
      ])(
        'counter %i and target (seconds) %i, increments being %o by %i returns %i',
        (prevCounter, seconds, isIncrementing, countingInterval, expected) => {
          const result = calculateCounter(prevCounter, seconds, isIncrementing, countingInterval)

          expect(result).toBe(expected)
        },
      )
    })

    describe('counter reaches the target (seconds)', () => {
      test.each([
        [9, 10, true, 1, 10],
        [121, 120, true, 10, 120],
        [401, 400, true, 100, 400],
      ])(
        'counter %i and target (seconds) %i, increments being %o by %i returns target (%i)',
        (prevCounter, seconds, isIncrementing, countingInterval, expected) => {
          const result = calculateCounter(prevCounter, seconds, isIncrementing, countingInterval)

          expect(result).toBe(expected)
        },
      )
    })
  })

  describe('Decrementing scenarios', () => {
    describe('counter does not reach the target (seconds)', () => {
      test.each([
        [2, 10, false, 1, 1],
        [120, 300, false, 10, 110],
        [45, 60, false, 10, 35],
      ])(
        'counter %i and target (seconds) %i, decrements being %o by %i returns %i',
        (prevCounter, seconds, isIncrementing, countingInterval, expected) => {
          const result = calculateCounter(prevCounter, seconds, isIncrementing, countingInterval)

          expect(result).toBe(expected)
        },
      )
    })

    describe('counter reaches the target (seconds)', () => {
      test.each([
        [0, 10, false, 1, 0],
        [-12, 400, false, 25, 0],
        [0, 400, false, 30, 0],
      ])(
        'counter %i and target (seconds) %i, decrements being %o by %i returns target (%i)',
        (prevCounter, seconds, isIncrementing, countingInterval, expected) => {
          const result = calculateCounter(prevCounter, seconds, isIncrementing, countingInterval)

          expect(result).toBe(expected)
        },
      )
    })
  })
})
