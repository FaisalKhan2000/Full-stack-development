import "./App.css";
import Input from "./Input";
import Button from "./Button";
import Output from "./Output";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("2000-01-11");

  const currentDate = new Date();

  // Convert the birthdate string to a Date object
  const birthDate = new Date(input);

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - birthDate;

  // Convert the time difference to years, months, and days
  const ageDate = new Date(timeDifference);
  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1; // Subtract 1 to get the correct days

  return (
    <div className="container">
      {/* Pass the input state and setInput function as props to the Input component */}
      <Input input={input} onInput={setInput} />
      <Button />
      <Output years={years} months={months} days={days} />
    </div>
  );
}

export default App;
