import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createNewTodo, getAllTodos } from './api'
import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('./api')

describe('Todo App', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(getAllTodos).mockResolvedValue([])
    vi.mocked(createNewTodo).mockResolvedValue({ title: 'Dummy', done: false })
  })

  it('displays header', () => {
    renderComponent()

    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toHaveTextContent('Todo App')
  })
})

function renderComponent() {
  render(<App />)
}
