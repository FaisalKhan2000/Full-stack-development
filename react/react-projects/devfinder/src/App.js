import "./App.css";
import NavBar from "./NavBar";
import FormContainer from "./FormContainer";
import Content from "./Content";
import { useEffect, useState, useRef } from "react";

function App() {
  const [input, setInput] = useState("");
  const [content, setContent] = useState();
  const apiUrl = "https://api.github.com";
  const API = "6ed9372981d4fbf02d40";
  const abortControllerRef = useRef(new AbortController());

  useEffect(() => {
    const abortController = abortControllerRef.current;

    // Only fetch data when input length is greater than 2
    if (input.length > 2) {
      const fetchUserData = async (username) => {
        try {
          const response = await fetch(`${apiUrl}/users/${username}`, {
            headers: {
              Authorization: `${API}`,
            },
            signal: abortController.signal,
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data = await response.json();
          console.log(data);
          setContent(data);
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      };

      // Use the input state as the username for the API request
      fetchUserData(input);
    }

    return () => {
      // Cleanup function to abort the fetch when the component unmounts
      abortController.abort();
    };
  }, [input]);

  const handleSearchSubmit = () => {
    // Optionally, you can put more logic here if needed
  };

  // Update the ref value when input changes
  useEffect(() => {
    abortControllerRef.current = new AbortController();
  }, [input]);

  return (
    <div className="container">
      <NavBar />
      <FormContainer
        input={input}
        onInput={setInput}
        onSubmit={handleSearchSubmit}
      />
      {content && <Content content={content} />}
    </div>
  );
}

export default App;
