import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <nav>HomeLayout</nav>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
