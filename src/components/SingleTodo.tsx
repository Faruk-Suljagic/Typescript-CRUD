import React, { useState } from 'react'
import { Todo } from '../model'
import "./Singletodo.css"


interface Propss {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Propss) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  console.log(todos);
  console.log(todo.todo);
  console.log(editTodo);
  console.log(todos);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    )
  }
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((list) => list.id === id ? {...list, todo: editTodo} : list)
    )
    setEdit(false)
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todoDelete) => todoDelete.id !== id))
  }
  return (
    <form className='form' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit === true ? (
        <input
        className='editInput'
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          style={{ border: '1px solid black' }}
        />
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <p>{todo.todo}</p>
      )}
      <div>
        {edit === false ? <span
        className='marg'
        onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit)
          } else if(edit) {
              setEdit(edit)
          }
        }}
        
      >
        <i className="fas fa-edit"></i>
      </span> : <button
        id='actives'
        onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit)
          } else if(edit) {
              setEdit(edit)
          }
        }}
      >
        <i className="fas fa-edit"></i>
      </button>}
        <span className='marg' onClick={() => handleDelete(todo.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
        
        <span className='marg' onClick={() => handleDone(todo.id)}>
          <i className="fas fa-check-double"></i>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
