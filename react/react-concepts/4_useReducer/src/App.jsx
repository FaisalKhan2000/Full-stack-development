import React, { useReducer } from "react";
import "./App.css";

// Reducer function to handle state transitions
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  // Initial state with a property 'count' set to 0
  const initialState = { count: 0 };

  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="App">
      <h1>Counter App with useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default App;
