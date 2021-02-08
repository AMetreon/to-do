import React, { useState } from "react"
import { useDispatch } from "react-redux"

// Accepts a list item (id, completed, text), a completed boolean, and a delete
// Requires redux, change actions as needed.
// Can be editable or not.
const ListItem = ({ listItem, editable }) => {
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()

  const { id, completed, text } = listItem

  const onCompletedChange = (_, id) => {
    dispatch({ type: "todos/todoToggled", payload: id })
  }

  const onDelete = id => {
    dispatch({ type: "todos/todoDeleted", payload: id })
  }

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
    console.log(listItem)
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
        {editable ? <div className="todo-text">{clickText()}</div> : text}
      </div>
      <div className="segment buttons">
        <button className="delete" onClick={handleDelete}>
          x
        </button>
      </div>
    </li>
  )
}

export default ListItem
