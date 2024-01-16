import {combineReducers, createStore} from "redux"

const counter = (state = {count : 0}, action) => {
  action.payload = action.payload || 1

  switch (action.type) {
    case "SET_COUNTER" : 
      return {count: action.payload || 0}
    case "INCREMENT" : 
      return {count: state.count + action.payload}
    case "DECREMENT" : 
      return {count: state.count - action.payload}
    default:
      return state
  }
}

const userReducer = (state= { } ,action) => {
  switch (action.type) {
    case "SET_USER": 
      return action.payload || { }
    default:
      return state
  }
}


const store =createStore(combineReducers({
  count: counter,
  user: userReducer
}))


export default store