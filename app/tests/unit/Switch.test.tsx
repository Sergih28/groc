/// <reference lib="dom" />
import { cleanup, render, screen } from '@testing-library/react'

import Switch from '@atoms/Switch/'

describe('Switch compontent test', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the Switch component', () => {
    render(<Switch isOn={true} switchLabel="Rendering the switch component for testing" />)
  })

  test('renders a toggled Switch component and checks if it is checked', () => {
    render(<Switch isOn={true} switchLabel="Toggle Switch" />)

    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).toBeChecked()
  })

  test('renders a not-toggled Switch component and checks if it is not checked', () => {
    render(<Switch isOn={false} switchLabel="Toggle Switch" />)

    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).not.toBeChecked()
  })
})
