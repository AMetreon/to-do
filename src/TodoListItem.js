import React from 'react'
import './features/todos/todos.css'

const TodoListItem = ({ todo, onCompletedChange, onDelete }) => {
  const { text, completed, id } = todo

  const handleCompletedChanged = (e) => {
    onCompletedChange(e.target.checked, id )
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChanged}
        />
        <div className="todo-text">{text}</div>
      </div>
      <div className="segment buttons">
        <button className="delete" onClick={handleDelete}>
        x
        </button>
      </div>
    </li>
  )
}

export default TodoListItem
