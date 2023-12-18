/// <reference lib="dom" />
import Button from '@atoms/Buttons/Button/'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

describe('Button component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the Button component', () => {
    render(<Button handleClick={() => {}}></Button>)
  })

  test('renders the main button with custom text', () => {
    render(<Button handleClick={() => {}}>Main button text</Button>)
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
