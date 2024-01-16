import {createStore} from "redux"

const counterReducer = (state = {count : 0}, action) => {
  action.payload = action.payload || 1

  switch (action.type) {
    case "increment" : 
      return {count: state.count + action.payload}
    case "decrement" : 
      return {count: state.count - action.payload}
    default:
      return state
  }
}

  const store = createStore(counterReducer)

  const handleStateChange = () => {
    console.log(store.getState);
  }

  store.subscribe (handleStateChange)

  store.dispatch({ type: "increment" })

console.log(`final state: ${JSON.stringify(store.getState)} `);