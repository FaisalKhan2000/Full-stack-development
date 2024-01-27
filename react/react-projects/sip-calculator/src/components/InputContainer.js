import React from "react";

export default function InputContainer({ dispatch }) {
  return (
    <div className="input-contents">
      <h3>Monthly Investment Amount (Rs.)</h3>
      <div className="input-content">
        <input
          type="number"
          // inputMode="numeric"
          placeholder="20000"
          onChange={(e) =>
            dispatch({
              type: "enterMonthlyInvestment",
              payload: parseFloat(e.target.value),
            })
          }
        />
      </div>
      <div>
        <h3>Investment Period</h3>
        <div className="input-content">
          <input
            type="number"
            // inputMode="numeric"
            placeholder="10"
            onChange={(e) =>
              dispatch({
                type: "enterTimePeriod",
                payload: parseInt(e.target.value, 10),
              })
            }
          />
        </div>
      </div>
      <h3>Expected Annual Returns (%)</h3>
      <div className="input-content">
        <input
          type="number"
          // inputMode="numeric"
          placeholder="15"
          onChange={(e) =>
            dispatch({
              type: "enterExpectedReturn",
              payload: parseFloat(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
}
