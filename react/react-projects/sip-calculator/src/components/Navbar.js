import React from "react";

export default function Navbar({ children, className, onClick }) {
  return (
    <nav className={className} onClick={onClick}>
      {children}
    </nav>
  );
}
