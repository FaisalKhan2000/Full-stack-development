import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const data = await response.json();
      if (data) {
        setData(data);
        setError(null);
        setPending(false);
      }
    } catch (error) {
      console.error(error);
      setError(`${error}. Some Error Occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
