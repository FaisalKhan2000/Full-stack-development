import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
