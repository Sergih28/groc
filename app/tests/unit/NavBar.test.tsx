import NavBar, { NAVBAR_ELEMENTS } from '@components/NavBar'
import { render } from '@testing-library/react'

describe('NavBar component', () => {
  test('renders the NavBar component', () => {
    render(<NavBar />)
  })

  test('NavBar elements snapshot', () => {
    expect(NAVBAR_ELEMENTS).toMatchSnapshot()
  })
})
