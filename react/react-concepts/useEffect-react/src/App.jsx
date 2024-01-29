import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run
    console.log("The count is: ", count);

    //  Optional return function / cleanup function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); // The dependency array

  return (
    <div className="container">
      <h1>Count: {count}</h1>

      <div>
        <button onClick={() => setCount(count - 1)}>Increase</button>
        <button onClick={() => setCount(count + 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default App;
