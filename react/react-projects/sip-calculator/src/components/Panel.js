import React from "react";

export default function Panel({
  investedAmount,
  estimatedReturns,
  futureValue,
}) {
  function formatCurrency(value) {
    const formattedValue = value.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });

    const lakhsValue = (value / 100000).toFixed(2);

    return `${formattedValue} (${lakhsValue} Lakhs)`;
  }

  return (
    <div className="panel">
      <table>
        <tbody>
          <tr>
            <th colSpan={2}>Summary</th>
          </tr>
          <tr>
            <td>Expected Amount</td>
            <td>{formatCurrency(futureValue)}</td>
          </tr>
          <tr>
            <td>Amount Invested</td>
            <td>{formatCurrency(investedAmount)}</td>
          </tr>
          <tr>
            <td>Wealth Gain</td>
            <td>{formatCurrency(estimatedReturns)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
