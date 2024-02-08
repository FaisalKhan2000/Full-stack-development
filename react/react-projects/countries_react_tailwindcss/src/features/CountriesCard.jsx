import React from "react";
import styles from "./CountriesCard.module.css";
function CountriesCard({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={data.flags.png} alt="Flag" />
      </div>
      <div className={styles.dataContainer}>
        <h2>{data.name.common}</h2>
        <p>
          Population:{" "}
          <span className={styles.smallFont}>{data.population}</span>{" "}
        </p>
        <p>
          Region: <span className={styles.smallFont}>{data.region}</span>{" "}
        </p>
        <p>
          Capital: <span className={styles.smallFont}>{data.capital}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default CountriesCard;
