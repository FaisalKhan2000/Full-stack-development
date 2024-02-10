import React, { useState } from "react";
import styles from "./Countries.module.css";
import { IoMdSearch } from "react-icons/io";
import { getCountriesData } from "../services/countryApi";
import { useLoaderData } from "react-router-dom";
import CountriesCard from "./CountriesCard";

function Countries() {
  // State variables for search query and selected region
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  // Fetch countries data using useLoaderData hook from react-router-dom
  const data = useLoaderData();

  // List of available regions for dropdown filter
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  // Filter data based on the search query and selected region
  const filteredData = data.filter((item) => {
    // Convert both selectedRegion and item.region to lowercase for case-insensitive comparison
    const isInSelectedRegion =
      selectedRegion.toLowerCase() === "all" ||
      item.region.toLowerCase() === selectedRegion.toLowerCase();

    // Check if any of the item's properties contain the search query
    const matchesSearchQuery = [
      item.name.common,
      item.region,
      item.population.toString(),
    ].some((value) => value.toLowerCase().includes(query.toLowerCase()));

    // Return true if item is in selected region and matches search query
    return isInSelectedRegion && matchesSearchQuery;
  });

  // Handle change in search query
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle change in selected region
  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterComponents}>
        {/* Input filter */}
        <div className={styles.searchInput}>
          <IoMdSearch color="hsl(0, 0%, 98%)" />
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search countries..."
          />
        </div>

        {/* Dropdown filter */}
        <div className={styles.dropdown}>
          <select value={selectedRegion} onChange={handleRegionChange}>
            {regions.map((region, index) => (
              <option key={index} value={region.toLowerCase()}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Display filtered countries */}
      <div className={styles.card}>
        {filteredData.map((country, index) => (
          <CountriesCard key={index} data={country} />
        ))}
      </div>
    </div>
  );
}

// Asynchronous loader function to fetch countries data
export async function loader() {
  const data = await getCountriesData();
  return data;
}

export default Countries;
