import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home/Home/Home";
import Coverage from "../page/Coverge/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../page/AuthPages/Login";
import Registration from "../page/AuthPages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: '/coverage',
          Component: Coverage,
          loader: () => fetch("/data/warehouses.json")
        }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: '/registration',
        Component: Registration,
      }
    ]
  }
]);