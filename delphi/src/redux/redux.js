import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  philosopher: 'King',
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PHILOSOPHER':
      return { ...state, philosopher: action.philosopher }
    default:
      return state
  }
}

// actions
const changePhilosopher = (philosopher) => {
  return {
    type: 'CHANGE_PHILOSOPHER',
    value: philosopher
  }
}

// export actions for use
export { changePhilosopher }

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// export store for use in App.js
export { store }
