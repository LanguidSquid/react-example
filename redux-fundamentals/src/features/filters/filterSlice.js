const initialState = {
  status: 'All',
  colors: []
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    //do something here based on the different types of actions

    case 'filters/statusFilterChanged': {
      return {
        // Copy the whole state
        ...state,
        // And replace the status field with the new value
        status: action.payload
        }
      }
    }
    default:
      return state
  }
}
