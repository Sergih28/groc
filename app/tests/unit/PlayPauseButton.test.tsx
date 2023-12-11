/// <reference lib="dom" />
import PlayPauseButton from '@components/PlayPauseButton'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

describe('PlayPauseButton component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('render PlayPauseButton component', () => {
    render(<PlayPauseButton initialState={true} />)
  })

  test('given a false initial state, should render a PlayPauseButton with  "Pause" text', () => {
    render(<PlayPauseButton initialState={false} />)

    const buttonElement = screen.getByText(/Pause/i)

    expect(buttonElement).toBeInTheDocument()
  })

  test('given a true initial state, should render a PlayPauseButton with  "Continue" text', () => {
    render(<PlayPauseButton initialState={true} />)

    const buttonElement = screen.getByText(/Continue/i)

    expect(buttonElement).toBeInTheDocument()
  })

  test('clicking the button when it is paused, should change the text to "Pause"', () => {
    render(<PlayPauseButton initialState={true} />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent('Continue')

    fireEvent.click(buttonElement)

    expect(buttonElement).toHaveTextContent('Pause')
  })

  test('clicking the button when it is not paused, should change the text to "Continue"', () => {
    render(<PlayPauseButton initialState={false} />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent('Pause')

    fireEvent.click(buttonElement)

    expect(buttonElement).toHaveTextContent('Continue')
  })
})
