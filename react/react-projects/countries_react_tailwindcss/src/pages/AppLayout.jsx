// AppLayout.js
import React from "react";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
import worldmap from "../assets/worldmap.svg";

function AppLayout() {
  return (
    <div>
      <Header />

      <main className="wrapper">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
