import axios from 'axios'

export interface Todo {
  title: string
  done: boolean
}

export async function getAllTodos() {
  const response = await axios.get<Todo[]>('/todos')
  return response.data
}

export interface TodoRequest {
  title: string
}

export async function createNewTodo(toCreate: TodoRequest) {
  const response = await axios.post<Todo>('/todos', toCreate)
  return response.data
}