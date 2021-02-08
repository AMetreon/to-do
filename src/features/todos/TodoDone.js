import React from "react"
import ListItem from "./ListItem"

import "./todos.css"

const DoneList = ({ todo }) => {
  return <ListItem listItem={todo} editable={false} />
}

export default DoneList
