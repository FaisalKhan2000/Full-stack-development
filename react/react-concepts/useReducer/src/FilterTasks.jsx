import React from "react";

const FilterTasks = ({ filter, handleFilterChange }) => {
  return (
    <div className="filter-buttons">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => handleFilterChange("all")}
      >
        Show All
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={filter === "remaining" ? "active" : ""}
        onClick={() => handleFilterChange("remaining")}
      >
        Remaining
      </button>
    </div>
  );
};

export default FilterTasks;
