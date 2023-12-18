/// <reference lib="dom" />
import ResetButton from '@atoms/Buttons/Reset/'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

describe('ResetButton component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the reset button', () => {
    render(<ResetButton resetPomodoro={() => {}} />)
  })

  test('reset button function is called', () => {
    const mockFunction = vi.fn()

    render(<ResetButton resetPomodoro={mockFunction} />)

    const resetButtonElement = screen.getByRole('button')

    fireEvent.click(resetButtonElement)

    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})
