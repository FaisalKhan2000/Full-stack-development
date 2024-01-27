import { useReducer } from "react";

import { InputNumber } from "antd";
import Navbar from "./components/Navbar";

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

  // const [showResults, setShowResults] = useState(false);

  const { investedAmount, estimatedReturns, futureValue } = calculateSIPValues(
    monthlyInvestment,
    expectedReturn,
    timePeriod
  );

  // const handleCalculate = () => {
  //   setShowResults(true);
  // };

  return (
    <div>
      <Navbar>SIP Calculator</Navbar>
      <h1>SIP Calculator</h1>
      <div className="inputs">
        <div>
          <label>Monthly Investment</label>
          {/* <input
            type="number"
            onChange={(e) =>
              dispatch({
                type: "enterMonthlyInvestment",
                payload: parseFloat(e.target.value),
              })
            }
          /> */}
          <InputNumber
            min={1}
            placeholder="10000"
            onChange={(e) =>
              dispatch({
                type: "enterMonthlyInvestment",
                payload: parseFloat(e.target.value),
              })
            }
          />
          ;
        </div>
        <div>
          <label>Expected Return rate (p.a)</label>
          {/* <input
            type="number"
            onChange={(e) =>
              dispatch({
                type: "enterExpectedReturn",
                payload: parseFloat(e.target.value),
              })
            }
          /> */}
          <InputNumber
            min={1}
            placeholder="15"
            onChange={(e) =>
              dispatch({
                type: "enterExpectedReturn",
                payload: parseFloat(e.target.value),
              })
            }
          />
        </div>
        <div>
          <label>Time period (years)</label>
          <input
            type="number"
            onChange={(e) =>
              dispatch({
                type: "enterTimePeriod",
                payload: parseInt(e.target.value, 10),
              })
            }
          />
          <InputNumber placeholder="10" addonAfter="years" defaultValue={10} />
        </div>
      </div>

      <button onClick={() => dispatch({ type: "displayResult" })}>
        Calculate
      </button>

      {showResults && (
        <div className="outputs">
          <p>Invested Amount: Rs {investedAmount.toFixed(2)}</p>
          <p>Est. Returns: Rs {estimatedReturns.toFixed(2)}</p>
          <p>Total value: Rs {futureValue.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
