import "./App.css"
import TodoList from "./features/todos/TodoList"
import TodoForm from "./features/header/TodoForm"

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
