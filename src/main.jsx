import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import UnderConstruction from "./pages/UnderConstruction";

const router = createBrowserRouter([
 {
  path: "/home",
  element: <App />,
 },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <UnderConstruction />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);