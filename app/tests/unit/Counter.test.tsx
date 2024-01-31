import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'

import testIds from '@data/testIds'
import useCounter from '@hooks/useCounter'
import Counter from '@molecules/Counter'
import { calculateElapsedTime } from '@molecules/Counter/functions'
import { pomodoroStore } from '@store/Pomodoro'

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
    pomodoroStore.actions.resetStore()
    cleanup()
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

      const buttonContinue = screen.getByRole('button', { name: 'Start' })
      fireEvent.click(buttonContinue)

      act(() => {
        vi.advanceTimersByTime(25 * 60 * 1000)
      })

      expect(counterContent).toHaveTextContent('00:00')
    })
  })
  describe('calculatElapsedTime()', () => {
    beforeAll(() => {
      const unixTime = 1689941745
      Date.now = vi.fn(() => unixTime)
    })

    afterAll(() => {
      vi.resetAllMocks()
    })

    const ONE_MINUTE_MS = 60 * 1000
    test('given a started time being now with no pauses or end time, the elapsed time should be 0', () => {
      const elapsedTime = calculateElapsedTime(Date.now(), [])

      expect(elapsedTime).toBe(0)
    })

    test('given a start time with no time range that has surpassed the expected duration, should return 0', () => {
      const START_TIME = Date.now() - ONE_MINUTE_MS * 30
      const elapsedTime = calculateElapsedTime(START_TIME, [])

      expect(elapsedTime).toBe(1800)
    })

    test('given a start time and a paused time range, should return the remaining time', () => {
      const START_TIME = Date.now() - ONE_MINUTE_MS * 10
      const pausedTimes = [
        {
          start: START_TIME + ONE_MINUTE_MS * 5,
          end: START_TIME + ONE_MINUTE_MS * 10,
        },
      ]
      const elapsedTime = calculateElapsedTime(START_TIME, pausedTimes)

      expect(elapsedTime).toBe(300)
    })

    test('given a start time and a paused time range that has not fishined, should return the remainin time', () => {
      const START_TIME = Date.now() - ONE_MINUTE_MS * 60
      const pausedTimes = [
        {
          start: START_TIME + ONE_MINUTE_MS * 30,
          end: START_TIME + ONE_MINUTE_MS * 35,
        },
        {
          start: START_TIME + ONE_MINUTE_MS * 55,
          end: null,
        },
      ]
      const elapsedTime = calculateElapsedTime(START_TIME, pausedTimes)

      expect(elapsedTime).toBe(3000)
    })

    test('given a null start time, returns 0', () => {
      const START_TIME = null

      const elapsedTime = calculateElapsedTime(START_TIME, [])

      expect(elapsedTime).toBe(0)
    })
  })
})
