import { NAVBAR_ELEMENTS } from '@components/layouts/navbar/constants'

describe('NavBar component', () => {
  test('NavBar elements snapshot', () => {
    expect(NAVBAR_ELEMENTS).toMatchSnapshot()
  })
})
