/// <reference lib="dom" />
import { render, screen } from '@testing-library/react'

import PlayPauseButton from '@atoms/Buttons/PlayPause/'

describe('PlayPauseButton component test', () => {
  test('render PlayPauseButton component', () => {
    render(<PlayPauseButton />)
  })

  test('given no props, should render "Start" text', () => {
    render(<PlayPauseButton />)

    const buttonElement = screen.getByText(/start/i)

    expect(buttonElement).toBeInTheDocument()
  })

  test('given a text prop, should render a the component with that text', () => {
    render(<PlayPauseButton text="Pause" />)

    const buttonElement = screen.getByText(/Pause/i)

    expect(buttonElement).toBeInTheDocument()
  })
})
