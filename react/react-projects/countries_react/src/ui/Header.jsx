import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className="wrapper" onClick={handleNavigate}>
        where in the world?
      </div>
    </header>
  );
}

export default Header;
