import {createBrowserRouter} from "react-router-dom";
import React from "react";
import { Home, About, Contact, Services} from "./pages";
import {ThankYou} from "./pages/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  }

]);

export { router }
