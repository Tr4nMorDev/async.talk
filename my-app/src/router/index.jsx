// src/router/index.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import App from "../App"; // Thêm import App

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Route đến /
  },
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
