import { act, fireEvent, render, screen } from '@testing-library/react'

import useCounter from '@hooks/useCounter'

import { pomodoroStore } from '@store/Pomodoro/'

import Counter from '@molecules/Counter'

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

      const counterContentElement = screen.getByText('25:00')

      expect(counterContentElement).toBeInTheDocument()
    })

    test('given counter with seconds format, renders the time left in seconds format', () => {
      pomodoroStore.actions.setPomodoroState({ counterFormat: 'seconds' })
      vi.useFakeTimers()
      render(<CounterSetup />)

      const startButton = screen.getByRole('button', { name: 'Start' })

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
    })

    test('counter updates value after a few seconds', () => {
      render(<CounterSetup />)

      const startButton = screen.getByRole('button', { name: 'Start' })
      fireEvent.click(startButton)

      act(() => {
        vi.advanceTimersByTime(8000)
      })

      const counterContent = screen.getByText('24:52')

      expect(counterContent).toBeInTheDocument()
    })

    test('given a counter value that has reached the target, the counter remains at the target value after additional time passes', () => {
      render(<CounterSetup />)

      const counterContent = screen.getByText('25:00')

      expect(counterContent).toBeInTheDocument()

      const startButton = screen.getByRole('button', { name: 'Start' })
      fireEvent.click(startButton)

      act(() => {
        vi.advanceTimersByTime(25 * 60 * 1000)
      })

      expect(counterContent).toHaveTextContent('00:00')
    })
  })
})
