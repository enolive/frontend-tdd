import './App.css'
import { useEffect, useRef, useState } from 'react'
import { createNewTodo, getAllTodos, Todo, TodoRequest } from './api'

function App() {
  const [allTodos, setAllTodos] = useState<Todo[]>([])
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    void getAllTodos().then(setAllTodos)
  }, [])

  async function onCreate() {
    const title = input.current?.value
    if (!title) {
      return
    }
    const toCreate: TodoRequest = { title }
    const created = await createNewTodo(toCreate)
    setAllTodos((prev) => [...prev, created])
    input.current.value = ''
  }

  return (
    <>
      <h1>Todo App</h1>
      <label>
        New Todo
        <input ref={input} type="text" />
      </label>
      <button onClick={onCreate}>Create Todo</button>
      {allTodos.length > 0 && (
        <ul aria-label="Todo List">
          {allTodos.map((todo, index) => (
            <li key={index} className={todo.done ? 'done' : ''}>
              {todo.title}
            </li>
          ))}
        </ul>
      )}
      {allTodos.length === 0 && <div role="status">No Todos available</div>}
    </>
  )
}

export default App
