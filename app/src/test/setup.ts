import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'

import { resetStore } from './helpers'

beforeEach(() => {
  localStorage.clear()
  resetStore()
})

afterEach(() => {
  cleanup()
})
