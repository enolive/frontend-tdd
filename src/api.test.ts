import { beforeAll, describe, expect, it } from 'vitest'
import { setupServer } from 'msw/node'
import { createNewTodo, getAllTodos, Todo, TodoRequest } from './api.ts'
import { handlers } from './mocks/handlers.ts'

const server = setupServer(...handlers)

describe('api', () => {
  beforeAll(() => {
    server.listen()
  })

  it('returns all existing todos', async () => {
    const expected: Todo[] = [
      { title: 'Learn', done: false },
      { title: 'Sleep', done: false },
      { title: 'Code', done: true },
    ]

    const result = await getAllTodos()

    expect(result).toEqual(expected)
  })

  it('creates a new todo', async () => {
    const toCreate: TodoRequest = {
      title: 'New Todo',
    }
    const expectedList = [
      { title: 'Learn', done: false },
      { title: 'Sleep', done: false },
      { title: 'Code', done: true },
      { title: 'New Todo', done: false },
    ]

    const createdTodo = await createNewTodo(toCreate)

    const todos = await getAllTodos()
    expect(todos).toEqual(expectedList)
    expect(todos).toContainEqual(createdTodo)
  })
})
