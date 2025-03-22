import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Bento } from "./layouts/Bento.jsx";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/home", element: <Bento />},
  {path: "*", element: <NotFoundPage />}
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
