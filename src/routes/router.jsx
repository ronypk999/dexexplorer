import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import axios from "axios";
import ContextProvider from "../provider/ContextProvider";
import Claim from "../pages/Claim";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Invite from "../pages/Invite";
import AuthProvider from "../provider/AuthProvider";
import Register from "../pages/Register";
import ProtectedRouter from "./ProtectedRouter";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import InviteJoin from "../pages/InviteJoin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <ContextProvider>
          <Layout />
        </ContextProvider>
      </AuthProvider>
    ),
    loader: () =>
      axios.post(
        `${import.meta.env.VITE_API_URL}/api.php`,
        JSON.stringify({
          info: 1,
          address: localStorage.getItem("address"),
        })
      ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buy",
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
      {
        path: "/invite",
        element: (
          <PrivateRouter>
            <Invite />
          </PrivateRouter>
        ),
      },
      {
        path: "/invite/:refId",
        element: <InviteJoin />,
      },
      {
        path: "/signup",
        element: (
          <ProtectedRouter>
            <Register />
          </ProtectedRouter>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRouter>
            <Login />
          </ProtectedRouter>
        ),
      },
    ],
  },
]);
