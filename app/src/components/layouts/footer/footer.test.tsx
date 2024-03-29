/// <reference lib="dom" />
import { render, screen } from '@testing-library/react'

import FooterComponent from './components'

const Footer = () => {
  return (
    <FooterComponent>
      <FooterComponent.Year />
      <FooterComponent.License />
      <FooterComponent.Github />
    </FooterComponent>
  )
}

describe('Footer component test', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('renders the footer', () => {
    render(<Footer />)
  })

  test('given the same year as the initial year, should render the exact year without range', () => {
    const newDate = new Date('2023-12-17T03:24:00')
    vi.setSystemTime(newDate)

    render(<Footer />)

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
    const newDate = new Date('2022-12-17T03:24:00')
    vi.setSystemTime(newDate)

    render(<Footer />)

    const yearElement = screen.getByText('2023')
    expect(yearElement).toBeInTheDocument()
  })
})
