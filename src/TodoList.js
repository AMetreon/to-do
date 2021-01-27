import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const onCompletedChange = (_, id) => {
      dispatch({type: 'todos/todoToggled', payload: id})
  }

  const onDelete = (id) => {
    dispatch({type: 'todos/todoDeleted', payload: id})
  }

  const renderedListItems = todos.map(todo => {
    return <TodoListItem
        key={todo.id}
        todo={todo}
        onCompletedChange={onCompletedChange}
        onDelete = {onDelete}
        />
  })
  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList