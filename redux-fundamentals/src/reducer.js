import { combineReducers } from 'redux'

import todosReducer from './features/todos/todoSlice'
import filtersReducer from './features/filters/filterSlice'

// Use the initialState as the default value
const rootReducer = combineReducers({
  // The reducer normally looks at the action type field to decide what happens
  // The value of `state.todos` is whatever the todos reducer returns
  todos: todosReducer,
  // For both reducers, we only pass in their slice of the state
  filters: filtersReducer
})

export default rootReducer
