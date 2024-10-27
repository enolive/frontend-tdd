import { render, screen } from '@testing-library/react'
import App from './App'
import { beforeEach, describe, it, vi } from 'vitest'
import { getAllTodos } from './api'

vi.mock('./api')

describe('Todo App', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(getAllTodos).mockResolvedValue([])
  })

  it('works', () => {
    render(<App />)

    screen.debug()
  })
})
