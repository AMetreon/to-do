import React from "react"
import ListItem from "./ListItem"

import "./todos.css"

const TodoListItem = ({ todo }) => {
  return <ListItem listItem={todo} editable={true} />
}

export default TodoListItem
