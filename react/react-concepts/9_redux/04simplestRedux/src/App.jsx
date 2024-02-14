import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice/counterSlice";
import "./index.css"; // Import the external CSS file

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <p className="count-text">Count: {count}</p>
      <div className="button-container">
        <button className="increment-btn" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="decrement-btn" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
