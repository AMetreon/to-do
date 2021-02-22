import React, { useState } from "react"
import { useDispatch } from "react-redux"
import TextField from "@material-ui/core/Textfield"
import DoneOutlineIcon from "@material-ui/icons/DoneOutline"

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px"
}

const textFieldStyle = {
  width: "60%"
}

const styles = {
  resize: {
    fontSize: 1000
  }
}

const Form = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // enter button pressed.
    if (e.which === 13 && trimmedText) {
      dispatch({ type: "todos/todoAdded", payload: trimmedText })
      setText("")
    }
  }

  return (
    <div style={divStyle}>
      <DoneOutlineIcon />
      <TextField
        style={textFieldStyle}
        placeholder="What's next?"
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          styles: {
            input: styles.resize
          }
        }}
        InputLabelProps={{}}
      />
    </div>
  )
}

export default Form
