import React from "react";

export default function CurrencyOptions({
  currencyOptions,
  value,
  onChange,
  children,
}) {
  return (
    <div>
      <label>{children}</label>
      <select value={value} onChange={onChange}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
