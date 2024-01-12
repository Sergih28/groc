import { act, render, screen } from '@testing-library/react'

import Counter from '@components/ui/molecules/Counter'

describe('Counter component test', () => {
  test('render Counter component', () => {
    render(
      <Counter counterFormat="minutes" countingInterval={1} isCountingUp={true} seconds={60} />,
    )
  })

  describe('Counter format renders', () => {
    test('given counter with minutes format, renders the time left in minutes format', () => {
      render(
        <Counter counterFormat="minutes" countingInterval={1} isCountingUp={false} seconds={60} />,
      )

      const counterContentElement = screen.getByText('01:00')

      expect(counterContentElement).toBeInTheDocument()
    })

    test('given counter with seconds format, renders the time left in seconds format', () => {
      render(
        <Counter counterFormat="seconds" countingInterval={1} isCountingUp={false} seconds={60} />,
      )

      const counterContentElement = screen.getByText('60')

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
      render(
        <Counter seconds={120} isCountingUp={true} counterFormat="seconds" countingInterval={1} />,
      )

      expect(screen.getByText('0'))

      act(() => {
        vi.advanceTimersByTime(5000)
      })

      expect(screen.getByText('5'))
    })

    test('given a counter value that has reached the target, the counter remains at the target value after additional time passes', () => {
      render(
        <Counter seconds={60} isCountingUp={false} counterFormat="minutes" countingInterval={1} />,
      )

      expect(screen.getByText('01:00'))

      act(() => {
        vi.advanceTimersByTime(70 * 1000)
      })

      expect(screen.getByText('00:00'))
    })
  })
})
