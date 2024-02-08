// Home.js
import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h3>
        Discover the World with WorldExplorer! Explore detailed information
        about countries from around the globe. From population statistics to
        cultural insights, embark on a journey of discovery with us.
      </h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/countries">Explore Countries</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
