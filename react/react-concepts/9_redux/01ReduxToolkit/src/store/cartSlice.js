import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      return [...state, action.payload]; // we are creating a new array here

      // state.push(action.payload); // since we are using create slice method we can directly push the payload in the state
    },
    removeProduct(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
