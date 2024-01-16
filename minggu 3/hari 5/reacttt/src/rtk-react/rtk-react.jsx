import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice ({
  name: 'counter',
  initialState: 0,
  reducer: {
    increment: (state, action) => state +(action.payload || 1),
    decrement: (state, action) => {
      return state >0 ? (action.payload ?? 1) : state },
    setCounter: (state, action) => action.payload || 0
  }
})

export const {increment, decrement, setCounter} = counterSlice.action
export default counterSlice.reducer