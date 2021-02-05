import React from "react"
import "./todos.css"

const DoneList = ({ todo, onCompletedChange, onDelete }) => {
  const { id, completed, text } = todo

  const handleCompletedChanged = e => {
    onCompletedChange(e.target.checked, id)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <div>
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChanged}
        />
        <del>{text}</del>
      </div>
      <div className="segment buttons">
        <button className="delete" onClick={handleDelete}>
          x
        </button>
      </div>
    </li>
  )
}

export default DoneList
