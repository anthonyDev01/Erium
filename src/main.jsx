import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import bannerPreto from "./assets/images/banner-dark.png";
import nuvemImg from "./assets/images/nuvem.png";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home/index.jsx";
import { Contato } from "./pages/Contato/index.jsx";
import { Nuvens } from "./components/Nuvens/index.jsx";
import { Equipe } from "./pages/Equipe/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Nuvens img={nuvemImg}>
              <Home img={bannerPreto} />
            </Nuvens>
          </div>
        ),
      },
      {
        path: "/contato",
        element: (
          <Nuvens img={nuvemImg}>
            <Contato />
          </Nuvens>
        ),
      },
      {
        path: "/equipe",
        element: (
          <Nuvens img={nuvemImg}>
            <Equipe />
          </Nuvens>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);
