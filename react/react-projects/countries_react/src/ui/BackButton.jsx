import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "var(--very-light-gray)",
  background: "var(--dark-blue)",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "10px 20px",
  borderRadius: "4px",
  textDecoration: "none", // To remove underline by default
};

function BackButton({ children, to, className }) {
  return (
    <Link to={to} className={className} style={linkStyle}>
      {children}
    </Link>
  );
}

export default BackButton;
