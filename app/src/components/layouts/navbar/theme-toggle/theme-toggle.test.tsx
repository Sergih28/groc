import { fireEvent, render, screen } from '@testing-library/react'

import ThemeToggle from '.'
import { DEFAULT_THEME, THEMES } from './constants'

describe.skip('ThemeToggle component', () => {
  const DEFAULT_THEME_TEXT = DEFAULT_THEME

  test('renders the ThemeToggle component', () => {
    render(<ThemeToggle />)
  })

  // test.only('the switch should render the default theme text', () => {
  //   render(<ThemeToggle />)

  //   const themeElement = screen.getByText(THEME_TOGGLE_ICON.light)

  //   expect(themeElement).toBeInTheDocument()
  // })

  describe('clicking event scenarios', () => {
    test('clicking the switch should change the text value', () => {
      render(<ThemeToggle />)

      const switchElement = screen.getByRole('checkbox')

      const labelElement = screen.getByText(THEMES[DEFAULT_THEME_TEXT])

      expect(switchElement).toBeInTheDocument()

      fireEvent.click(switchElement)

      expect(labelElement).toHaveTextContent(THEMES.dark)
    })
  })

  describe('localStorage scenarios', () => {
    beforeEach(() => {
      localStorage.clear()
    })

    test('should render the default theme text if there is no localStorage data', () => {
      render(<ThemeToggle />)

      const switchElement = screen.getByRole('checkbox', {
        name: THEMES[DEFAULT_THEME_TEXT],
      })

      expect(switchElement).toBeInTheDocument()
    })

    test('should render the theme text stored in localStorage', () => {
      localStorage.setItem('theme', THEMES.light)

      render(<ThemeToggle />)

      const switchElement = screen.getByRole('checkbox', {
        name: THEMES.light,
      })

      expect(switchElement).toBeInTheDocument()
    })
  })
})
