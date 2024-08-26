import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({ //WE need 3 property to make a slice
  name: "cart",
  initialState: {
    cart: [], // initially cart is empty
  },
  reducers: {
    addToCart: (state, {payload}) => {
      const item = state.cart.find((item) => item.id === payload.id);
      if (item) {
        // Item exists, update quantity
        item.quantity += payload.quantity;
      } else {
        // Item does not exist, add to cart
        state.cart.push(payload);
      }
    },
    removeFromCart: (state, {payload}) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    updateQuantity: (state, {payload}) => {
      const item = state.cart.find((item) => item.id === payload.id);
      if (item) {
        item.quantity = payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;
export const selectTotalQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export default CartSlice.reducer;
