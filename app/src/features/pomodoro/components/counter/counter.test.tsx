import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import testIds from '@data/test-ids'

import useCounter from '@features/pomodoro/hooks/use-counter'

import { pomodoroStore } from '@store/pomodoro'

import Counter from '.'

const CounterSetup = () => {
  useCounter()
  return (
    <>
      <Counter />
    </>
  )
}

describe('Counter component test', () => {
  test('render Counter component', () => {
    render(<CounterSetup />)
  })

  describe('Counter format renders', () => {
    test('given counter with minutes format, renders the time left in minutes format', () => {
      render(<CounterSetup />)

      const counterContentElement = screen.getByTestId(testIds.pomodoro.counterContent)

      expect(counterContentElement).toBeInTheDocument()

      expect(counterContentElement).toHaveTextContent('25:00')
    })

    test('given counter with seconds format, renders the time left in seconds format', () => {
      pomodoroStore.actions.setPomodoroState({ counterFormat: 'seconds' })
      render(<CounterSetup />)

      const counterContentElement = screen.getByTestId(testIds.pomodoro.counterContent)
      expect(counterContentElement).toBeInTheDocument()
    })
  })

  describe('Updating the counter value after some time', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })
    afterEach(() => {
      vi.useRealTimers()
    })

    test('counter updates value after a few seconds', async () => {
      const { rerender } = render(<CounterSetup />)

      const startButton = screen.getByRole('button', { name: 'Start' })
      fireEvent.click(startButton)

      act(() => {
        vi.advanceTimersByTime(8000)
      })
      const counterContentElement = screen.getByTestId(testIds.pomodoro.counterContent)

      rerender(<CounterSetup />)

      waitFor(async () => {
        expect(counterContentElement).toBeInTheDocument()

        expect(counterContentElement).toHaveTextContent('24:52')
      })
    })

    test('given a counter value that has reached the target, the counter remains at the target value after additional time passes', async () => {
      const { rerender } = render(<CounterSetup />)

      const startButton = screen.getByRole('button', { name: 'Start' })
      fireEvent.click(startButton)

      act(() => {
        vi.advanceTimersByTime(30 * 60 * 1000)
      })

      const counterContent = screen.getByTestId(testIds.pomodoro.counterContent)

      rerender(<CounterSetup />)

      waitFor(async () => {
        expect(counterContent).toHaveTextContent('00:00')
      })
    })
  })
})
