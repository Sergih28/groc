import { cleanup, render, screen } from '@testing-library/react'

import { colorToRgb, resetCounterState, resetSettingsState } from './helpers'
import ProgressBar from '@atoms/ProgressBar/'
import { DEFAULT_SETTINGS_VALUES } from '@store/constants'
import { $counter, $settings } from '@store/Pomodoro'

describe('ProgressBar component test', () => {
  afterEach(() => {
    cleanup()
    resetSettingsState()
    resetCounterState()
  })

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
      $counter.set({
        ...$counter.get(),
        counterValue: DEFAULT_SETTINGS_VALUES.pomodoroDuration / 2,
      })

      render(<ProgressBar />)

      const progressElement = screen.getByRole('progressbar')

      expect(Number(progressElement.getAttribute('aria-valuenow'))).toBe(50)
    })
  })

  describe('ProgressBar component percentage rendering', () => {
    test('given a progres bar with percentage, should render the percentage', () => {
      $settings.set({ ...$settings.get(), showPercentage: true })

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
      $settings.set({ ...$settings.get(), showPercentage: true })
      $counter.set({
        ...$counter.get(),
        counterValue: DEFAULT_SETTINGS_VALUES.pomodoroDuration / 2,
      })

      const backgroundColor = colorToRgb($settings.get().backgroundColor)
      const fillColor = colorToRgb($settings.get().fillColor)

      render(<ProgressBar />)

      const progressBar = screen.getByRole('progressbar')
      const filledBar = screen.getByText('50%')

      const progressBarStyles = window.getComputedStyle(progressBar)
      const filledBarStyles = window.getComputedStyle(filledBar)

      expect(progressBarStyles.backgroundColor).toBe(backgroundColor)
      expect(filledBarStyles.backgroundColor).toBe(fillColor)
    })

    test('given a progress bar with custom colors, should render those custom colors', () => {
      $settings.set({
        ...$settings.get(),
        showPercentage: true,
        fillColor: 'purple',
        backgroundColor: 'red',
      })
      $counter.set({
        ...$counter.get(),
        counterValue: DEFAULT_SETTINGS_VALUES.pomodoroDuration / 2,
      })

      const backgroundColor = colorToRgb($settings.get().backgroundColor)
      const fillColor = colorToRgb($settings.get().fillColor)

      render(<ProgressBar />)

      const progressBar = screen.getByRole('progressbar')
      const filledBar = screen.getByText('50%')

      const progressBarStyles = window.getComputedStyle(progressBar)
      const filledBarStyles = window.getComputedStyle(filledBar)

      expect(progressBarStyles.backgroundColor).toBe(backgroundColor)
      expect(filledBarStyles.backgroundColor).toBe(fillColor)
    })
  })
})
