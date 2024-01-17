import "./styles.css";
import { useState } from "react";
import BillInput from "./BillInput";
import SelectTip from "./SelectTip";
import People from "./People";
import Output from "./Output";

export default function App() {
  const [billInput, setBillInput] = useState("");
  const [selectedTip, setSelectedTip] = useState(10);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  // Ensure that selectedTip is a valid number, defaulting to 0 if null or undefined
  const tipPercent = selectedTip ?? 0;

  // Ensure that billInput is a valid number, defaulting to 0 if not
  const billAmount = isNaN(billInput) ? 0 : Number(billInput);

  const totalTip = (billAmount * tipPercent) / 100;
  const tipAmountPerPerson = totalTip / numberOfPeople;
  const totalAmount = totalTip + billAmount;

  // Reset all input values to their default states
  function handleReset() {
    setBillInput("");
    setSelectedTip(0);
    setNumberOfPeople(1);
  }

  return (
    <div className="app">
      <p className="heading">
        Spli
        <br />
        tter
      </p>
      <div className="container">
        <div className="container-box">
          <BillInput input={billInput} onInput={setBillInput} />
          <SelectTip selectTip={selectedTip} onSelectTip={setSelectedTip} />
          <People
            noOfPeople={numberOfPeople}
            onNoOfPeople={setNumberOfPeople}
          />
        </div>
        <div className="container-box">
          <Output
            tipAmountPerPerson={tipAmountPerPerson}
            totalAmount={totalAmount}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}
