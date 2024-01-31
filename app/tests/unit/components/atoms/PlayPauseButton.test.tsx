/// <reference lib="dom" />
import { cleanup, render, screen } from '@testing-library/react'

import PlayPauseButton from '@atoms/Buttons/PlayPause/'

describe('PlayPauseButton component test', () => {
  afterEach(() => {
    cleanup()
  })

  test('render PlayPauseButton component', () => {
    render(<PlayPauseButton />)
  })

  test('given no props, should render "Play" text', () => {
    render(<PlayPauseButton />)

    const buttonElement = screen.getByText(/play/i)

    expect(buttonElement).toBeInTheDocument()
  })

  test('given a text prop, should render a PlayPauseButton with that text', () => {
    render(<PlayPauseButton text="Pause" />)

    const buttonElement = screen.getByText(/Pause/i)

    expect(buttonElement).toBeInTheDocument()
  })
})
