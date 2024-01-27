import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Chart({ investedAmount, estimatedReturns }) {
  const formatValue = (value) => parseFloat(value.toFixed(2));

  return (
    <PieChart
      series={[
        {
          data: [
            {
              id: 0,
              value: formatValue(investedAmount),
              label: "Amount Invested",
            },
            {
              id: 1,
              value: formatValue(estimatedReturns),
              label: "Wealth Gain",
            },
          ],
        },
      ]}
      width={450}
      height={200}
    />
  );
}
