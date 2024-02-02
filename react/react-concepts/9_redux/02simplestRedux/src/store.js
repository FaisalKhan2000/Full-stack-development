import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
