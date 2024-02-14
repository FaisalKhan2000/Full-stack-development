// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // creating this so that the user cannot change the value i.e. read only
// export const STATUSES = Object.freeze({
//   IDLE: "idle",
//   ERROR: "error",
//   LOADING: "loading",
// });

// const initialState = {
//   data: [],
//   status: STATUSES.IDLE,
// };

// const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     setProducts(state, action) {
//       // Do not do this. NEVER

//       // const res = await fetch("https://fakestoreapi.com/products");

//       state.data = action.payload;
//     },

//     setStatus(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setProducts, setStatus } = productSlice.actions;

// export default productSlice.reducer;

// // THUNKs --> The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than excecute some logic now, we can write a function body or code that can be used to perform the work later

// // earlier thunk
// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     // getState is used to get the current state
//     // for .e.g.
//     // const prop  = getState().data

//     dispatch(setStatus(STATUSES.LOADING));

//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.error(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
