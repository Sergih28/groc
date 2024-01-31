import { calculatePercentage } from '@atoms/ProgressBar/functions'
import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentAboveTargetError } from '@errors/CurrentAboveTargetError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'
import { CurrentBelowTargetError } from '@errors/CurrentBelowTargetError'

describe('calculatePercentage()', () => {
  describe('current value is counting up', () => {
    test.each([
      [25, 0, 100, 25],
      [100, 100, 200, 0],
      [1000, 500, 1500, 50],
    ])(
      'given current value %i, base value %i and target value: %i, returns percentage: %i',
      (currentValue, baseValue, targetValue, expectedPercentage) => {
        const percentage = calculatePercentage(currentValue, baseValue, targetValue)

        expect(percentage).toBe(expectedPercentage)
      },
    )
  })

  describe('current value is counting down', () => {
    test.each([
      [99, 100, 0, 1],
      [125, 500, 0, 75],
      [100, 500, 100, 100],
    ])(
      'given current value %i, base value %i and target value: %i, returns percentage: %i',
      (currentValue, baseValue, targetValue, expectedPercentage) => {
        const percentage = calculatePercentage(currentValue, baseValue, targetValue)

        expect(percentage).toBe(expectedPercentage)
      },
    )
  })

  describe('invalid inputs', () => {
    describe('current value exceeds target', () => {
      test('given a current value exceeding the target value above, throws error', () => {
        try {
          calculatePercentage(120, 0, 100)
        } catch (e) {
          expect(e instanceof CurrentAboveTargetError)
          expect((e as Error).message).toBe('Current target (120) is greater than target (100)')
        } finally {
          expect.assertions(2)
        }
      })

      test('given a current value exceeding the base value below, throws error', () => {
        try {
          calculatePercentage(-1, 0, 100)
        } catch (e) {
          expect(e instanceof CurrentBelowBaseError)
          expect((e as Error).message).toBe('Current target (-1) is below base (0)')
        } finally {
          expect.assertions(2)
        }
      })

      test('given a current value exceeding the base value above, throws error', () => {
        try {
          calculatePercentage(51, 50, 0)
        } catch (e) {
          expect(e instanceof CurrentAboveBaseError)
          expect((e as Error).message).toBe('Current target (51) is greater than base (50)')
        } finally {
          expect.assertions(2)
        }
      })

      test('given a current value exceeding the target value below, throws error', () => {
        try {
          calculatePercentage(-2, 100, 0)
        } catch (e) {
          expect(e instanceof CurrentBelowTargetError)
          expect((e as Error).message).toBe('Current target (-2) is below target (0)')
        } finally {
          expect.assertions(2)
        }
      })
    })
  })
})
