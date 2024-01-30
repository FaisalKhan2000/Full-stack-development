import React from "react";
// import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
