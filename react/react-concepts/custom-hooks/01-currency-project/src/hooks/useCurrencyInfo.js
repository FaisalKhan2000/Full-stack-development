import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
          {
            signal: abortController.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result[currency]);
        // console.log(result[currency]);
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore the error if it's an AbortError
          console.log("Fetch aborted:", error.message);
        } else {
          // Handle other errors
          console.error("Error fetching data:", error.message);
        }
      }
    };

    fetchData();

    // Cleanup function to abort the fetch on component unmount
    return () => abortController.abort();
  }, [currency]);

  // console.log(data);
  return data;
}

export default useCurrencyInfo;
