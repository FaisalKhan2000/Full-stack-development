import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
