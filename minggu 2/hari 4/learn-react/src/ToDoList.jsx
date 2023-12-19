import { Square, Trash2, Undo2 } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )

  const [task, setTask] = useState('')

  const activeTodos = todos.filter((todo) => !todo.completed).reverse()
  const completedTodos = todos.filter((todo) => todo.completed)
  const stats = `${completedTodos.length}/${todos.length} Completed`

  const addTodo = (event) => {
    event.preventDefault()

    if (task.length > 2) {
      setTodos([...todos, { id: uuidv4(), task, completed: false }])
      setTask('')
    }
  }

  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (index) => {
    if (confirm('Are you sure you want to delete this todo?')) {
      setTodos(todos.filter((todo, i) => i !== index))
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <div className="text-end font-semibold mb-2 text-sm">{stats}</div>
      <form className="flex justify-between" onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          className="grow rounded"
          placeholder="Add a todo"
        />
      </form>

      <ul>
        {activeTodos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between p-2 border rounded bg-white mt-2"
          >
            <button className="p-1" onClick={() => toggleTodo(todo.id)}>
              <Square size={14} />
            </button>

            <span className="text-start grow p-1">{todo.task}</span>

            <button
              type="button"
              onClick={() => deleteTodo(index)}
              className="text-sm text-red-600 p-1"
            >
              <Trash2 size={14} />
            </button>
          </li>
        ))}
      </ul>

      <hr className="my-3" />
      <ul>
        {completedTodos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between p-2 border rounded bg-slate-100 mt-2"
          >
            <button
              className="p-1 bg-slate-100"
              onClick={() => toggleTodo(todo.id)}
            >
              <Undo2 size={14} />
            </button>

            <span className="text-start grow p-1 text-slate-500">
              {todo.task}
            </span>

            <button
              type="button"
              onClick={() => deleteTodo(index)}
              className="text-sm text-red-600 p-1"
            >
              <Trash2 size={14} />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo