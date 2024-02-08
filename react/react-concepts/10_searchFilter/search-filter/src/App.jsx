import React, { useState } from "react";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all"); // State to track selected filter

  // Define filter options
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "com", label: ".com" },
    { value: "org", label: ".org" },
  ];

  function search(data) {
    return data.filter((item) => {
      // Apply email domain filter
      if (selectedFilter !== "all") {
        // Check if the email domain matches the selected filter
        if (item.email.toLowerCase().endsWith(`.${selectedFilter}`)) {
          // Apply search query filter within the selected email domain
          return ["first_name", "last_name", "email"].some((key) =>
            item[key].toLowerCase().includes(query)
          );
        }
        return false; // Exclude if email domain doesn't match selected filter
      }

      // Apply search query filter across all fields
      return ["first_name", "last_name", "email"].some((key) =>
        item[key].toLowerCase().includes(query)
      );
    });
  }

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Dropdown for selecting filter */}
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Table data={search(Users)} />
    </div>
  );
}

export default App;
