import React, { useState } from "react"
import { useDispatch } from "react-redux"

import "./todos.css"

const TodoListItem = ({ todo, onCompletedChange, onDelete }) => {
  const { text, completed, id } = todo
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()

  const handleCompletedChanged = e => {
    onCompletedChange(e.target.checked, id)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  const onClick = () => {
    setClicked(!clicked)
  }

  const onChange = e => {
    // Set text of textfield of id
    dispatch({
      type: "todos/todoChanged",
      payload: { id: id, content: e.target.value }
    })
  }

  const onKeyDown = e => {
    //if enter, lose focus
    if (e.which === 13) {
      onClick()
      clickText()
    }
  }

  const onBlur = () => {
    onClick()
    clickText()
  }

  const onFocus = e => {
    e.target.select()
  }

  const clickText = () => {
    let renderedText = <div onClick={onClick}>{text}</div>

    if (clicked) {
      renderedText = (
        <input
          type="text"
          value={text}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          onFocus={onFocus}
          autoFocus
        />
      )
    }

    return renderedText
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
        <div className="todo-text">{clickText()}</div>
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
