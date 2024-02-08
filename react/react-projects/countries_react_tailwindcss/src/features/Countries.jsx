import React, { useState } from "react";
import styles from "./Countries.module.css";
import { IoMdSearch } from "react-icons/io";
import { getCountriesData } from "../services/countryApi";
import { useLoaderData } from "react-router-dom";
import CountriesCard from "./CountriesCard";

function Countries() {
  const [query, setQuery] = useState("");
  const data = useLoaderData();

  // Filter data based on the search query
  const filteredData = data.filter((item) => {
    return [
      item.name.common.toLowerCase(),
      item.region.toLowerCase(),
      item.population.toString(), // Convert population to string before comparison
    ].some((value) => value.includes(query.toLowerCase()));
  });

  return (
    <div className={styles.container}>
      <div className={styles.filterComponents}>
        <div className={styles.searchInput}>
          <IoMdSearch color="hsl(0, 0%, 98%)" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search countries..."
          />
        </div>
        <h1>filter</h1>
      </div>
      <div className={styles.card}>
        {filteredData.map((country, index) => (
          <CountriesCard key={index} data={country} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const data = await getCountriesData();
  return data;
}

export default Countries;
