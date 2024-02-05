import { render, screen } from '@testing-library/react'

import { DEFAULT_STATE_VALUES } from '@store/constants'
import { pomodoroStore } from '@store/store'

import ProgressBar from '@atoms/ProgressBar/'
import { calculatePercentage } from '@atoms/ProgressBar/functions'

import { CurrentAboveBaseError } from '@errors/CurrentAboveBaseError'
import { CurrentAboveTargetError } from '@errors/CurrentAboveTargetError'
import { CurrentBelowBaseError } from '@errors/CurrentBelowBaseError'
import { CurrentBelowTargetError } from '@errors/CurrentBelowTargetError'
import { colorToRgb } from '@tests/unit/helpers'

describe('ProgressBar component test', () => {
  test('renders the ProgressBar component', () => {
    render(<ProgressBar />)
  })

  describe('ProgressBar component values', () => {
    test('given a progress bar with default pomodoro settings (25 minutes) should have the proper value', () => {
      render(<ProgressBar />)

      const progressElement = screen.getByRole('progressbar')

      expect(Number(progressElement.getAttribute('aria-valuenow'))).toBe(0)
    })

    test('given a progress bar with the counter value reaching half, should have a value of 50', () => {
      pomodoroStore.actions.setPomodoroState({
        counterValue: DEFAULT_STATE_VALUES.pomodoroDuration / 2,
      })

      render(<ProgressBar />)

      const progressElement = screen.getByRole('progressbar')

      expect(Number(progressElement.getAttribute('aria-valuenow'))).toBe(50)
    })
  })

  describe('ProgressBar component percentage rendering', () => {
    test('given a progres bar with percentage, should render the percentage', () => {
      pomodoroStore.actions.setPomodoroState({ showPercentage: true })
      render(<ProgressBar />)

      const percentageElement = screen.getByText('0%')
      expect(percentageElement).toBeInTheDocument()
    })

    test('given a progress bar without percentage, should not render a percentage element', () => {
      render(<ProgressBar />)

      expect(screen.queryByText('50%')).not.toBeInTheDocument()
    })
  })

  describe('ProgressBar component color rendering', () => {
    test('given a progress bar with default values, should have the default background and fill color', () => {
      pomodoroStore.actions.setPomodoroState({
        showPercentage: true,
        counterValue: DEFAULT_STATE_VALUES.pomodoroDuration / 2,
      })

      const backgroundColor = colorToRgb(DEFAULT_STATE_VALUES.backgroundColor)
      const fillColor = colorToRgb(DEFAULT_STATE_VALUES.fillColor)

      render(<ProgressBar />)

      const progressBar = screen.getByRole('progressbar')
      const filledBar = screen.getByText('50%')

      const progressBarStyles = window.getComputedStyle(progressBar)
      const filledBarStyles = window.getComputedStyle(filledBar)

      expect(progressBarStyles.backgroundColor).toBe(backgroundColor)
      expect(filledBarStyles.backgroundColor).toBe(fillColor)
    })

    test('given a progress bar with custom colors, should render those custom colors', () => {
      pomodoroStore.actions.setPomodoroState({
        showPercentage: true,
        counterValue: DEFAULT_STATE_VALUES.pomodoroDuration / 2,
        fillColor: 'purple',
        backgroundColor: 'red',
      })

      const backgroundColor = colorToRgb(pomodoroStore.state.get().backgroundColor)
      const fillColor = colorToRgb(pomodoroStore.state.get().fillColor)

      render(<ProgressBar />)

      const progressBar = screen.getByRole('progressbar')
      const filledBar = screen.getByText('50%')

      const progressBarStyles = window.getComputedStyle(progressBar)
      const filledBarStyles = window.getComputedStyle(filledBar)

      expect(progressBarStyles.backgroundColor).toBe(backgroundColor)
      expect(filledBarStyles.backgroundColor).toBe(fillColor)
    })
  })

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
})
