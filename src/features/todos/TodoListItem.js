import React from "react"
import ListItem from "./ListItem"


const TodoListItem = ({ todo }) => {
  return <ListItem listItem={todo} editable={true} />
}

export default TodoListItem
