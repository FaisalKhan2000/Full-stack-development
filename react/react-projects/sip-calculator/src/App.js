import React, { useReducer } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const initialState = {
  monthlyInvestment: 0,
  expectedReturn: 0,
  timePeriod: 0,
  showResults: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "enterMonthlyInvestment":
      return { ...state, monthlyInvestment: action.payload };
    case "enterExpectedReturn":
      return { ...state, expectedReturn: action.payload };
    case "enterTimePeriod":
      return { ...state, timePeriod: action.payload };
    case "displayResult":
      return { ...state, showResults: true };
    default:
      return state;
  }
}

const calculateSIPValues = (monthlyInvestment, expectedReturn, timePeriod) => {
  const monthlyRate = expectedReturn / 1200;
  const numberOfMonths = timePeriod * 12;

  // Corrected formula for future value
  const futureValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const investedAmount = monthlyInvestment * numberOfMonths;
  const estimatedReturns = futureValue - investedAmount;

  return { investedAmount, estimatedReturns, futureValue };
};

export default function App() {
  const [
    { monthlyInvestment, expectedReturn, timePeriod, showResults },
    dispatch,
  ] = useReducer(reducer, initialState);

  const { investedAmount, estimatedReturns, futureValue } = calculateSIPValues(
    monthlyInvestment,
    expectedReturn,
    timePeriod
  );

  return (
    <div className="container">
      <Navbar className="navbar">
        <div className="navbar-contents">
          <div className="logo">SIP Calculator .in</div>
        </div>
      </Navbar>

      <Main
        dispatch={dispatch}
        showResults={showResults}
        investedAmount={investedAmount}
        estimatedReturns={estimatedReturns}
        futureValue={futureValue}
      />
    </div>
  );
}
