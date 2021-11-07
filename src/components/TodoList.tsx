import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './Todolist.css'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  console.log(todos)

  return (
    <div className="wrapper">
      {todos?.map((list) => (
        <SingleTodo
          todo={list}
          key={list.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList
