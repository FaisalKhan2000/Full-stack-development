import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyOptions from "./CurrencyOptions";
import "./App.css";

// https://app.exchangerate-api.com/dashboard
const API_KEY = "9c32f9ab6a78dd52e88f1c74";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

function CurrencyConverter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  // console.log(currencyOptions);

  // Currency Options
  useEffect(() => {
    const fetchCountriesList = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
        );
        const data = response.data;
        setCurrencyOptions([...Object.keys(data.conversion_rates)]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchCountriesList();
  }, []);

  // Exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/${fromCurrency}/${toCurrency}`
        );
        const data = response.data;
        setExchangeRate(data.conversion_rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  // Amount conversion
  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(4));
    }
  }, [amount, exchangeRate]);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div>
        <CurrencyOptions
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          currencyOptions={currencyOptions}
        >
          From Currency:
        </CurrencyOptions>
        <CurrencyOptions
          value={toCurrency}
          onChange={handleToCurrencyChange}
          currencyOptions={currencyOptions}
        >
          To Currency:
        </CurrencyOptions>
      </div>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          step={0.01}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="output">
        <p>Exchange Rate: {exchangeRate}</p>
        <p>Converted Amount: {convertedAmount}</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
