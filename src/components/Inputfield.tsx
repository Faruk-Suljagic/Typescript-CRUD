import React from 'react'
import './Inputfield.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const Inputfield: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form action="input" onSubmit={(e) => handleAdd(e)}>
      <input
        type="input"
        autoFocus
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your task..."
      />
      <button className="Go" disabled={!todo} type="submit">
        Go
      </button>
    </form>
  )
}

export default Inputfield
