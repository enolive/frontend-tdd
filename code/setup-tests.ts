import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  // unlike jest, the dom won't be cleaned after each test run. so we have to trigger it by hand
  cleanup()
})
