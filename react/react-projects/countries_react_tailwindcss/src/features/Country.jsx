import React from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../services/countryApi";
import BackButton from "../ui/BackButton";

function Country() {
  const { countryCode } = useParams();

  getCountry(countryCode);

  return (
    <div style={{ margin: "10rem" }}>
      <BackButton to="/countries">← Back</BackButton>
    </div>
  );
}

export default Country;
