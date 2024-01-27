import React, { useState } from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import Button from "./Button";
import Panel from "./Panel";
import PanelChart from "./PanelChart";

export default function Main({
  dispatch,
  showResults,
  investedAmount,
  estimatedReturns,
  futureValue,
}) {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  // Check if any of the values is zero or undefined
  const anyValueIsZeroOrUndefined =
    investedAmount === 0 ||
    estimatedReturns === 0 ||
    futureValue === 0 ||
    investedAmount === undefined ||
    estimatedReturns === undefined ||
    futureValue === undefined;

  // Update the button's disabled state when values change
  React.useEffect(() => {
    setButtonDisabled(anyValueIsZeroOrUndefined);
  }, [anyValueIsZeroOrUndefined]);

  return (
    <div className="main-container">
      <Header />
      <InputContainer dispatch={dispatch} />

      <Button
        className="btn"
        onClick={() => {
          // Dispatch the action only if none of the values is zero or undefined
          if (!anyValueIsZeroOrUndefined) {
            dispatch({ type: "displayResult" });
          } else {
            console.log("Please enter all values before calculating.");
            // You can show a user-friendly message or take other actions as needed.
          }
        }}
        disabled={isButtonDisabled}
      >
        Calculate
      </Button>

      {showResults && !anyValueIsZeroOrUndefined && (
        <>
          <Panel
            investedAmount={investedAmount}
            estimatedReturns={estimatedReturns}
            futureValue={futureValue}
          />
          <PanelChart
            investedAmount={investedAmount}
            estimatedReturns={estimatedReturns}
            futureValue={futureValue}
          />
        </>
      )}
    </div>
  );
}
