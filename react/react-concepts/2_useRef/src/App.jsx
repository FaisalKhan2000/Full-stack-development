import { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const countRef = useRef(0);
  const inputRef = useRef(null);

  const handleIncrement = () => {
    setCount((count) => count + 1);
    countRef.current++;

    console.log("State: ", count);
    console.log("Ref: ", countRef.current);
  };

  console.log(inputRef.current);
  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is Escape
      if (event.key === "Escape") {
        // Toggle focus on the input
        if (isFocused) {
          inputRef.current?.blur();
        } else {
          inputRef.current?.focus();
        }

        // Toggle the focus state
        setIsFocused((prevIsFocused) => !prevIsFocused);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFocused]); // Re-run the effect when isFocused changes

  return (
    <div className="container">
      <h1>Count: {count}</h1>

      <input ref={inputRef} type="text" placeholder="Type something..." />

      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default App;
