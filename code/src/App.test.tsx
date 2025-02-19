import { render, screen, within } from '@testing-library/react'
import App from './App'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createNewTodo, getAllTodos, Todo } from './api'
import { userEvent } from '@testing-library/user-event'

vi.mock('./api')

describe('Todo App', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(getAllTodos).mockResolvedValue([])
    vi.mocked(createNewTodo).mockResolvedValue({ title: 'Dummy', done: false })
  })

  it('shows header', () => {
    renderComponent()

    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toHaveTextContent('Todo App')
  })

  it('shows a list of existing todos', async () => {
    const todos: Todo[] = [
      { title: 'Visit SoCraTes', done: true },
      { title: '???', done: false },
      { title: 'Profit', done: false },
    ]
    vi.mocked(getAllTodos).mockResolvedValue(todos)

    renderComponent()

    const list = await screen.findByRole('list', { name: 'Todo List' })
    const todoItems = within(list).getAllByRole('listitem')
    expect(todoItems).toHaveLength(3)
    expect(todoItems[0]).toHaveTextContent('Visit SoCraTes')
    expect(todoItems[0]).toHaveClass('done')
    expect(todoItems[1]).toHaveTextContent('???')
    expect(todoItems[1]).not.toHaveClass('done')
    expect(todoItems[2]).toHaveTextContent('Profit')
    expect(todoItems[2]).not.toHaveClass('done')
  })

  it('shows no list if there are no todos', async () => {
    renderComponent()

    const list = screen.queryByRole('list')
    expect(list).not.toBeInTheDocument()
  })

  it('shows a newly created todo', async () => {
    const newTodo: Todo = { title: 'Something new', done: false }
    vi.mocked(createNewTodo).mockResolvedValue(newTodo)
    renderComponent()

    const input = screen.getByLabelText('New Todo')
    await userEvent.type(input, 'Neeeeeeeeeeeeeeeeew')
    await userEvent.click(screen.getByRole('button', { name: 'Create Todo' }))

    const newTodoItem = screen.getByRole('listitem')
    expect(newTodoItem).toHaveTextContent('Something new')
    expect(createNewTodo).toHaveBeenCalledWith({
      title: 'Neeeeeeeeeeeeeeeeew',
    })
    expect(input).toHaveValue('')
  })

  it('prevents creation of todos without a title', async () => {
    renderComponent()

    await userEvent.click(screen.getByRole('button', { name: 'Create Todo' }))

    const newTodoItem = screen.queryByRole('listitem')
    expect(newTodoItem).not.toBeInTheDocument()
  })
})

function renderComponent() {
  render(<App />)
}
