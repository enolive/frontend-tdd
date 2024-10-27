import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, it } from 'vitest'

describe('Todo App', () => {
  it('renders correctly', () => {
    render(<App />)

    screen.debug()
  })
})
