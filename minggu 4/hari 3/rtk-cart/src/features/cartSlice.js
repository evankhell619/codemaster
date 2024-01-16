import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../features/cartItem";

const initialState =  {
  cartItems: cartItems,
  amount: 10,
  priceTotal:0
}

const cartSlice = createSlice ({
  name: "cart",
  initialState,
  reducers: {
    clearCart:(state) => {
      state.cartItems = []
    },
    removeItem: (state,action) => {
      const itemId =action.payload
      state.cartItems = state.cartItems.filter ((item)  => item.id !== itemId)
    },
    increase: (state,action) => {
      const item = state.cartItems.find ((item) => item.id === action.payload)
      item.amount = item.amount + 1
    },
    decrease: () => {},
    calcu: () => {}
  }
})


export const {clearCart, removeItem, increase, decrease} = cartSlice.actions
export default cartSlice.reducer