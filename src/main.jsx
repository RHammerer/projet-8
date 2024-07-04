import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import Erreur from "./pages/Erreur/Erreur.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
  },
  {
    path: "/*",
    element: <Erreur />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
