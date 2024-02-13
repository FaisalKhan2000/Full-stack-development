import React, { createContext, useState, useContext, useEffect } from "react";
import getDictionaryData from "../services/api";

// Create the context
const QueryContext = createContext();

// Create a provider component
export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query !== "") {
      const fetchData = async () => {
        setLoading(true);
        try {
          const result = await getDictionaryData(query);
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching dictionary data:", error);
          setError(error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [query]);

  return (
    <QueryContext.Provider value={{ query, setQuery, data, loading, error }}>
      {children}
    </QueryContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useQuery = () => {
  return useContext(QueryContext);
};
