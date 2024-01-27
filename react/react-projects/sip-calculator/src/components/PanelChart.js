import React from "react";
import Chart from "./Chart";
// Import the external CSS file

function formatCurrency(value) {
  const formattedValue = value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const lakhsValue = (value / 100000).toFixed(2);

  return `${formattedValue} (${lakhsValue} Lakhs)`;
}
export default function PanelChart({
  investedAmount,
  estimatedReturns,
  futureValue,
}) {
  return (
    <table className="table">
      <tbody>
        <tr className="row1">
          <td colSpan={2}>Amount Invested vs Returns</td>
        </tr>
        <tr>
          <td colSpan={2}>
            {/* Include your Chart component here */}
            <Chart
              investedAmount={investedAmount}
              estimatedReturns={estimatedReturns}
            />
          </td>
        </tr>
        <tr className="row3">
          <td colSpan={2}>
            Expected Maturity Amount : Rs. {formatCurrency(futureValue)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
