import React from "react"
import ListItem from "./ListItem"


const DoneList = ({ todo }) => {
  return <ListItem listItem={todo} editable={false} />
}

export default DoneList
