import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'

import testIds from '@data/testIds'
import useCounter from '@hooks/useCounter'
import Counter from '@molecules/Counter'
import { pomodoroStore } from '@store/Pomodoro'
import { resetStore } from '@tests/unit/helpers'

const CounterWrapper = () => {
  useCounter()
  return (
    <>
      <Counter />
    </>
  )
}

describe('Counter component test', () => {
  beforeEach(() => {
    resetStore()
    cleanup()
    localStorage.clear()
  })

  test('render Counter component', () => {
    render(<CounterWrapper />)
  })

  describe('Counter format renders', () => {
    test('given counter with minutes format, renders the time left in minutes format', () => {
      render(<CounterWrapper />)

      const counterContentElement = screen.getByText('25:00')

      expect(counterContentElement).toBeInTheDocument()
    })

    test('given counter with seconds format, renders the time left in seconds format', () => {
      pomodoroStore.actions.setPomodoroState({ counterFormat: 'seconds' })
      vi.useFakeTimers()
      render(<CounterWrapper />)

      const startButton = screen.getByTestId(testIds.pomodoro.startButton)

      fireEvent.click(startButton)

      act(() => {
        vi.advanceTimersByTime(12000)
      })

      const counterContentElement = screen.getByText('1488')
      expect(counterContentElement).toBeInTheDocument()
    })
  })

  describe('Updating the counter value after some time', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })
    afterEach(() => {
      vi.useRealTimers()
      cleanup()
    })

    test('counter updates value after a few seconds', () => {
      render(<CounterWrapper />)

      const startButton = screen.getByTestId(testIds.pomodoro.startButton)
      fireEvent.click(startButton)

      act(() => {
        vi.advanceTimersByTime(8000)
      })

      const counterContent = screen.getByTestId(testIds.pomodoro.counterContent)

      expect(counterContent).toBeInTheDocument()
      expect(counterContent).toHaveTextContent('24:52')
    })

    test('given a counter value that has reached the target, the counter remains at the target value after additional time passes', () => {
      render(<CounterWrapper />)

      const counterContent = screen.getByTestId(testIds.pomodoro.counterContent)

      expect(counterContent).toHaveTextContent('25:00')

      const startButton = screen.getByTestId(testIds.pomodoro.startButton)
      fireEvent.click(startButton)

      act(() => {
        vi.advanceTimersByTime(25 * 60 * 1000)
      })

      expect(counterContent).toHaveTextContent('00:00')
    })
  })
})
