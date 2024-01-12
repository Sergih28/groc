import Counter from '@molecules/Counter'
import { $settings } from '@store/Pomodoro'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'

import { resetSettingsState } from './helpers'

describe('Counter component test', () => {
  afterEach(() => {
    cleanup()
    resetSettingsState()
  })

  test('render Counter component', () => {
    render(<Counter />)
  })

  describe('Counter format renders', () => {
    test('given counter with minutes format, renders the time left in minutes format', () => {
      render(<Counter />)

      const counterContentElement = screen.getByText('25:00')

      expect(counterContentElement).toBeInTheDocument()
    })

    test('given counter with seconds format, renders the time left in seconds format', () => {
      $settings.set({ ...$settings.get(), counterFormat: 'seconds' })

      render(<Counter />)

      const counterContentElement = screen.getByText('1500')
      expect(counterContentElement).toBeInTheDocument()
    })
  })

  describe('Updating the counter value after some time', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })
    afterEach(() => {
      vi.restoreAllMocks()
    })

    test('counter updates value after a few seconds', async () => {
      render(<Counter />)

      const buttonContinue = screen.getByRole('button', { name: 'Continue' })
      fireEvent.click(buttonContinue)

      act(() => {
        vi.advanceTimersByTime(5000)
      })

      expect(screen.getByText('24:55'))
    })

    test('given a counter value that has reached the target, the counter remains at the target value after additional time passes', () => {
      $settings.set({ ...$settings.get(), pomodoroDuration: 60 })

      render(<Counter />)

      expect(screen.getByText('01:00'))

      const buttonContinue = screen.getByRole('button', { name: 'Continue' })
      fireEvent.click(buttonContinue)

      act(() => {
        vi.advanceTimersByTime(70 * 1000)
      })

      expect(screen.getByText('00:00'))
    })
  })
})
