const initialState = [
  { id: 0, text: 'Test text', completed: false },
  { id: 1, text: 'Test text', completed: false }
]

function nextTodoId(todos) {
  const maxId = todos.reduce((accumulator, todo) => Math.max(todo.id, accumulator), todos[0].id);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        data:[
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]
      }
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    default:
      return state
  }
}