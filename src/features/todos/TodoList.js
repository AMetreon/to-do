import React from "react"
import { useSelector, useDispatch } from "react-redux"
import TodoListItem from "./TodoListItem"
import TodoDone from "./TodoDone"
import "./todos.scss"

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const onCompletedChange = (_, id) => {
    dispatch({ type: "todos/todoToggled", payload: id })
  }

  const onDelete = id => {
    dispatch({ type: "todos/todoDeleted", payload: id })
    console.log(todos)
  }

  const renderedListItems = todos.map(todo => {
    if (!todo.completed) {
      return (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onDelete={onDelete}
        />
      )
    }
  })

  const renderedDoneItems = todos.map(todo => {
    if (todo.completed) {
      return (
        <TodoDone
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onDelete={onDelete}
        />
      )
    }
  })
  return (
    <div>
      <ul className="todo-list">{renderedListItems}</ul>
      <ul className="done-list">{renderedDoneItems}</ul>
    </div>
  )
}

export default TodoList
