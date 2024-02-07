import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";

function AppLayout() {
  const naigation = useNavigation();
  const isLoading = naigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] ">
      {isLoading && <Loader />}

      <Header />
      <div className="">
        <main className="mx-auto max-w-5xl px-4 py-4 sm:px-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
