import { render, screen } from '@testing-library/react'
import App from './App'
import { beforeEach, describe, it, vi } from 'vitest'
import { createNewTodo, getAllTodos } from './api'

vi.mock('./api')

describe('Todo App', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(getAllTodos).mockResolvedValue([])
    vi.mocked(createNewTodo).mockResolvedValue({ title: 'Dummy', done: false })
  })

  it('works', () => {
    render(<App />)

    screen.debug()
  })
})
