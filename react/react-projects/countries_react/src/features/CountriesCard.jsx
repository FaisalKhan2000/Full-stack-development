import React from "react";
import styles from "./CountriesCard.module.css";
import { useNavigate } from "react-router-dom";

function CountriesCard({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const countryCode = data.ccn3;
    navigate(`/countries/${countryCode}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
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
