/// <reference lib="dom" />
import Footer from '@components/Footer'
import { render, screen, cleanup } from '@testing-library/react'

describe('Footer component test', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  test('renders the footer', () => {
    render(<Footer />)
  })

  test('given the same year as the initial year, should render the exact year without range', () => {
    render(<Footer />)

    const newDate = new Date('2023-12-17T03:24:00')
    vi.setSystemTime(newDate)

    const yearElement = screen.getByText('2023')
    expect(yearElement).toBeInTheDocument()
  })

  test('given a later year than the initial year, should render a year range', () => {
    const newDate = new Date('2025-12-17T03:24:00')
    vi.setSystemTime(newDate)

    render(<Footer />)

    const yearElement = screen.getByText('2023 - 2025')
    expect(yearElement).toBeInTheDocument()
  })

  test('given a year before the initial year, should render the initial year', () => {
    render(<Footer />)
    const yearElement = screen.getByText('2023')
    expect(yearElement).toBeInTheDocument()
  })
})
