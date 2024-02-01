import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import ThemeToggle from '@molecules/ThemeToggle'
import { DEFAULT_THEME, THEME_TOGGLE_TEXT, THEMES_TEXT } from '@molecules/ThemeToggle/constants'

describe('ThemeToggle component', () => {
  const DEFAULT_THEME_TEXT = DEFAULT_THEME ? 'dark' : 'light'

  afterEach(() => {
    cleanup()
  })

  test('renders the ThemeToggle component', () => {
    render(<ThemeToggle />)
  })

  test('rendering the ThemeToggle component should render the switch to switch theme', () => {
    render(<ThemeToggle />)

    const switchElement = screen.getByRole('checkbox')

    expect(switchElement).toBeInTheDocument()
  })

  test('the switch should render the default theme text', () => {
    render(<ThemeToggle />)
    const switchElement = screen.getByRole('checkbox', {
      name: THEME_TOGGLE_TEXT[DEFAULT_THEME_TEXT],
    })

    expect(switchElement).toBeInTheDocument()
  })

  describe('clicking event scenarios', () => {
    test('clicking the switch should change the text value', () => {
      render(<ThemeToggle />)

      const switchElement = screen.getByRole('checkbox')

      const labelElement = screen.getByText(THEME_TOGGLE_TEXT[DEFAULT_THEME_TEXT])

      expect(switchElement).toBeInTheDocument()

      fireEvent.click(switchElement)

      expect(labelElement).toHaveTextContent(THEME_TOGGLE_TEXT.dark)
    })
  })

  describe('localStorage scenarios', () => {
    beforeEach(() => {
      localStorage.clear()
    })

    test('should render the default theme text if there is no localStorage data', () => {
      render(<ThemeToggle />)

      const switchElement = screen.getByRole('checkbox', {
        name: THEME_TOGGLE_TEXT[DEFAULT_THEME_TEXT],
      })

      expect(switchElement).toBeInTheDocument()
    })

    test('should render the theme text stored in localStorage', () => {
      localStorage.setItem('theme', THEMES_TEXT.light)

      render(<ThemeToggle />)

      const switchElement = screen.getByRole('checkbox', {
        name: THEME_TOGGLE_TEXT[THEMES_TEXT.light],
      })

      expect(switchElement).toBeInTheDocument()
    })
  })
})
