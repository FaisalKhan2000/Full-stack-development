import React from "react";
import { MdSunny } from "react-icons/md";
export default function NavBar({ onhandleMode }) {
  return (
    <nav className="navbar">
      <div className="logo">devfinder</div>
      <p className="toggle-btn">
        Light{" "}
        <MdSunny color="#ffffff" size={22} style={{ marginLeft: "10px" }} />
      </p>
    </nav>
  );
}
