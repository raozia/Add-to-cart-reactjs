import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import { RouterProvider } from "react-router";
import Home from "./components/Home";
import Guest from "./components/Guest";
import RequireAuth from "./components/RequireAuth";
import Profile from "./components/Profile";
import Products from "./components/Products";
import Applayout from "./components/layout/Applayout";
// import Cart from "./components/Cart";
import CartPage from "./components/CartPage";
import PageNotfound from "./components/PageNotfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Applayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/*",
        element: <PageNotfound />,
      },
    ],
  },
  {
    path: "/SignUp",
    element: (
      <Guest>
        <SignUp />
      </Guest>
    ),
  },
  {
    path: "/Login",
    element: (
      <Guest>
        <Login />
      </Guest>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
