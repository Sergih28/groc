/// <reference lib="dom" />
import { fireEvent, render, screen } from '@testing-library/react'

import NextButton from '.'

describe('NextButton component test', () => {
  test('renders the next button', () => {
    render(<NextButton nextPomodoro={() => {}} />)
  })

  test('renders the next button with the "Next" text', () => {
    render(<NextButton nextPomodoro={() => {}} />)

    const nextButtonElement = screen.getByText(/Next/i)

    expect(nextButtonElement).toBeInTheDocument()
  })

  test('next button function is called', () => {
    const mockFunction = vi.fn()

    render(<NextButton nextPomodoro={mockFunction} />)

    const nextButtonElement = screen.getByRole('button')

    fireEvent.click(nextButtonElement)

    expect(mockFunction).toHaveBeenCalled()
  })
})
