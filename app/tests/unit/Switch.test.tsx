/// <reference lib="dom" />
import Switch from '@atoms/Switch/'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

describe('Switch compontent test', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the Switch component', () => {
    render(<Switch initialState={true} switchLabel="Rendering the switch component for testing" />)
  })

  test('renders a toggled Switch component and checks if it is checked', () => {
    render(<Switch initialState={true} switchLabel="Toggle Switch" />)

    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).toBeChecked()
  })

  test('renders a not-toggled Switch component and checks if it is not checked', () => {
    render(<Switch initialState={false} switchLabel="Toggle Switch" />)

    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).not.toBeChecked()
  })

  test('update Switch component from toggled to not-toggled', () => {
    render(<Switch initialState={true} switchLabel="Toggle Switch" />)

    const checkboxElement = screen.getByRole('checkbox')
    expect(checkboxElement).toBeChecked()

    fireEvent.click(checkboxElement)

    expect(checkboxElement).not.toBeChecked()
  })

  test('update Switch component from non-toggled to toggled', () => {
    render(<Switch initialState={false} switchLabel="Toggle Switch" />)

    const checkboxElement = screen.getByRole('checkbox')
    expect(checkboxElement).not.toBeChecked()

    fireEvent.click(checkboxElement)

    expect(checkboxElement).toBeChecked()
  })
})
