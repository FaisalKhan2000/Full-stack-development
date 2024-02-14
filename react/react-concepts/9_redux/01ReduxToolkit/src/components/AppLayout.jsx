import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
