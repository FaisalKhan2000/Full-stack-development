import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

//  initial state
const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

// create slice
const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default UsersSlice.reducer;

// creating thunk

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users");
  const data = await res.json();
  return data;
});
