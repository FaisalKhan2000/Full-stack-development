steps to use Redux Toolkit:

1. **Install Redux Toolkit:**
   Use npm or yarn to install Redux Toolkit in your project.

   ```bash
   npm install @reduxjs/toolkit
   # or
   yarn add @reduxjs/toolkit


   npm i @redux-devtools/extension
   npm install react-redux
   ```

2. **Create Redux Slices:**
   Define your Redux slices using `createSlice` from Redux Toolkit. A slice contains actions and reducers.

   ```javascript
   // src/features/counterSlice.js
   import { createSlice } from "@reduxjs/toolkit";

   const counterSlice = createSlice({
     name: "counter",
     initialState: { value: 0 },
     reducers: {
       increment: (state) => {
         state.value += 1;
       },
       decrement: (state) => {
         state.value -= 1;
       },
     },
   });

   export const { increment, decrement } = counterSlice.actions;
   export default counterSlice.reducer;
   ```

3. **Create the Redux Store:**
   Use `configureStore` to create the Redux store, combining your slices.

   ```javascript
   // src/app/store.js
   import { configureStore } from "@reduxjs/toolkit";
   import counterReducer from "../features/counterSlice";

   const store = configureStore({
     reducer: {
       counter: counterReducer,
       // Add other reducers as needed
     },
   });

   export default store;
   ```

4. **Provider Component:**
   Wrap your app with the `Provider` component from `react-redux` to make the store available to the entire app.

   ```javascript
   // src/index.js
   import React from "react";
   import ReactDOM from "react-dom";
   import { Provider } from "react-redux";
   import store from "./app/store";
   import App from "./App";

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById("root")
   );
   ```

5. **Connect Components:**
   Use `useSelector` and `useDispatch` hooks from `react-redux` to connect your components to the Redux store.

   ```javascript
   // src/components/Counter.js
   import React from "react";
   import { useSelector, useDispatch } from "react-redux";
   import { increment, decrement } from "../features/counterSlice";

   const Counter = () => {
     const count = useSelector((state) => state.counter.value);
     const dispatch = useDispatch();

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => dispatch(increment())}>Increment</button>
         <button onClick={() => dispatch(decrement())}>Decrement</button>
       </div>
     );
   };

   export default Counter;
   ```

6. **Dispatch Actions:**
   Dispatch actions in your components using the `dispatch` function provided by `useDispatch`.
