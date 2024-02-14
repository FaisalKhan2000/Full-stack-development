import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
