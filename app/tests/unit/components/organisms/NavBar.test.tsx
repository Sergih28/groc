import { render } from '@testing-library/react'

import { NAVBAR_ELEMENTS } from '@components/ui/organisms/NavBar/constants'
import NavBar from '@organisms/NavBar/'

describe('NavBar component', () => {
  test('renders the NavBar component', () => {
    render(<NavBar />)
  })

  test('NavBar elements snapshot', () => {
    expect(NAVBAR_ELEMENTS).toMatchSnapshot()
  })
})
