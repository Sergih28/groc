/// <reference lib="dom" />
import { render, screen } from '@testing-library/react'

import PlayPauseButton from '@atoms/Buttons/PlayPause/'

describe('PlayPauseButton component test', () => {
  test('render PlayPauseButton component', () => {
    render(<PlayPauseButton />)
  })

  test('given no props, should render a button with "Start" text', () => {
    render(<PlayPauseButton />)

    const buttonElement = screen.getByText(/start/i)

    expect(buttonElement).toBeInTheDocument()
  })

  test('given a started and paused button, should render the button with "Continue" text', () => {
    render(<PlayPauseButton hasStarted={true} isPaused={true} />)

    const buttonElement = screen.getByText(/continue/i)

    expect(buttonElement).toBeInTheDocument()
  })

  test('given a started and not paused button, should render the button with "Pause" text', () => {
    render(<PlayPauseButton hasStarted={true} isPaused={false} />)

    const buttonElement = screen.getByText(/pause/i)

    expect(buttonElement).toBeInTheDocument()
  })
})
