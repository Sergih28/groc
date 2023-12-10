/// <reference lib="dom" />
import Button from '@components/Button'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

describe('Button component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the Button component', () => {
    render(<Button></Button>)
  })

  test('renders the main button with custom text', () => {
    render(<Button>Main button text</Button>)
    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toBeInTheDocument()
  })

  test('render the main button with onClick function', () => {
    const mockFuntion = vi.fn()

    render(<Button handleClick={mockFuntion}>Main button text with onClick</Button>)
    const buttonElement = screen.getByRole('button')

    fireEvent.click(buttonElement)
    expect(mockFuntion).toHaveBeenCalledTimes(1)
    fireEvent.click(buttonElement)
    expect(mockFuntion).toHaveBeenCalledTimes(2)
  })
})
