const todos = (state = {
  todos: [],
  asyncCount: 0,

}, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: action.id,
              text: action.text,
              completed: false
            }
          ]
        }
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
        }
      case 'FETCH_ASYNC_COUNT_DONE':
          return {
            ...state,
            asyncCount: state.todos.length,
          }
      case 'IS_FETCHING_COUNT':
          return {
            ...state,
            isFetchingCount: action.payload,
          }
      default:
        return state
    }
  }
  
  export default todos
  