// src/router/index.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
