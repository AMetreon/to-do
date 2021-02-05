import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // enter button pressed.
    if (e.which === 13 && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      setText('')
    }
  }

  return (
    <input
    type="text"
    placeholder="Let's do it..."
    autoFocus={true}
    value={text}
    onChange={handleChange}
    onKeyDown={handleKeyDown}
    />
  )
}

export default Form