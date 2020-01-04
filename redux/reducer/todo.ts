export enum TODO_ACTION_TYPES {
  ADD_TODO_ACTION = 'ADD_TODO',
  REMOVE_TODO_ACTION = 'REMOVE_TODO_ACTION'
}

export function addTodo(todo: string) {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_ACTION,
    payload: {
      todo
    }
  }
}

export function removeTodo(todo_key: number) {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_ACTION,
    payload: {
      todo_key
    }
  }
}

const initState = {
  todos: []
}

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO_ACTION:
      return {
        todos: [...state.todos, action.payload.todo]
      }
    case TODO_ACTION_TYPES.REMOVE_TODO_ACTION:
      return {
        todos: state.todos.filter((el) => el !== state.todos[action.payload.todo_key])
      }
    default:
      return state
  }
}