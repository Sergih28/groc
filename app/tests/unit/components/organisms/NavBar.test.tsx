import { render } from '@testing-library/react'

import NavBar from '@organisms/NavBar/'
import { NAVBAR_ELEMENTS } from '@organisms/NavBar/constants'

describe('NavBar component', () => {
  test('renders the NavBar component', () => {
    render(<NavBar />)
  })

  test('NavBar elements snapshot', () => {
    expect(NAVBAR_ELEMENTS).toMatchSnapshot()
  })
})
