import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>

      <button
        className="border rounded bg-slate-50 p-2 mr-3"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        className="border rounded bg-slate-50 p-2 mr-3"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default Counter