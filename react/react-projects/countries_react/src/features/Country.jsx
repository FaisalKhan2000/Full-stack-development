import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getCountry } from "../services/countryApi";
import BackButton from "../ui/BackButton";
import styles from "./Country.module.css";

function Country() {
  const data = useLoaderData();

  const renderNativeNames = () => {
    const nativeNames = Object.values(data[0].name.nativeName);
    return nativeNames.map((name) => name.common).join(", ");
  };

  const renderCurrencies = () => {
    const currencies = Object.values(data[0].currencies);
    return currencies
      .map((currency) => `${currency.name} (${currency.symbol}) `)
      .join(", ");
  };

  const renderLanguages = () => {
    const languages = Object.values(data[0].languages);
    return languages.join(", ");
  };

  const renderBorderCountries = () => {
    const borderCountries = data[0].borders;
    return borderCountries.map((borderCountry, index) => (
      <button key={index}>{borderCountry}</button>
    ));
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <BackButton to="/countries">← Back</BackButton>
      </div>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={data[0].flags.png} alt="" />
        </div>
        <div className={styles.content}>
          <h2>{data[0].name.common}</h2>
          <div className={styles.contentContainer}>
            <div className={styles.contentContainerA}>
              <p>
                {" "}
                <strong>Native Name:</strong> {renderNativeNames()}{" "}
              </p>
              <p>
                {" "}
                <strong>Population : </strong>
                {data[0].population}
              </p>
              <p>
                <strong>Region: </strong> {data[0].region}
              </p>
              <p>
                {" "}
                <strong>Sub Region:</strong> {data[0].subregion}
              </p>
              <p>
                {" "}
                <strong> Capital:</strong>
                {data[0].capital[0]}
              </p>
            </div>
            <div className={styles.contentContainerB}>
              <p>
                {" "}
                <strong>Top Level Domain:</strong> {data[0].tld}
              </p>
              <p>
                {" "}
                <strong>Curreincies:</strong> {renderCurrencies()}
              </p>
              <p>
                <strong>languages:</strong> {renderLanguages()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Asynchronous loader function to fetch country
export async function loader({ params }) {
  const { countryCode } = params;
  const data = await getCountry(countryCode);
  return data;
}
export default Country;
