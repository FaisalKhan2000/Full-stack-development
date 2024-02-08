import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Countries, { loader as countriesLoader } from "./features/Countries";
import Country from "./features/Country";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countries",
        loader: countriesLoader,
        element: <Countries />,
      },
      {
        path: "/countries/:countryName",
        element: <Country />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
