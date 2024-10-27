import { Todo, TodoRequest } from '../api.ts'
import { http, HttpResponse } from 'msw'

const allTodos: Todo[] = [
  { title: 'Learn', done: false },
  { title: 'Sleep', done: false },
  { title: 'Code', done: true },
]
export const handlers = [
  http.get('/todos', () => {
    return HttpResponse.json(allTodos)
  }),
  http.post('/todos', async (it) => {
    const data = (await it.request.json()) as TodoRequest
    const newTodo: Todo = {
      title: data.title,
      done: false,
    }
    allTodos.push(newTodo)
    return HttpResponse.json(newTodo, { status: 201 })
  }),
]