import React from "react";
import { CiSearch } from "react-icons/ci";

export default function FormContainer({ input, onInput, onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(); // Call the onSubmit prop if needed
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <span className="search-container">
        <CiSearch color="rgb(3, 120, 254)" size="25" />
        <input
          type="text"
          value={input}
          onChange={(e) => onInput(e.target.value)}
          placeholder="Search..."
        />
      </span>
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
