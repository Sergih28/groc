/// <reference lib="dom" />
import PlayPauseButton from '@atoms/Buttons/PlayPause/'
import { render, screen, cleanup } from '@testing-library/react'

describe('PlayPauseButton component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('render PlayPauseButton component', () => {
    render(<PlayPauseButton isPaused={true} />)
  })

  test('given a false initial state, should render a PlayPauseButton with  "Pause" text', () => {
    render(<PlayPauseButton isPaused={false} />)

    const buttonElement = screen.getByText(/Pause/i)

    expect(buttonElement).toBeInTheDocument()
  })

  test('given a true initial state, should render a PlayPauseButton with  "Continue" text', () => {
    render(<PlayPauseButton isPaused={true} />)

    const buttonElement = screen.getByText(/Continue/i)

    expect(buttonElement).toBeInTheDocument()
  })
})
