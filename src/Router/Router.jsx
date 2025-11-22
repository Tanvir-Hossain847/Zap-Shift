import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home/Home/Home";
import Coverage from "../page/Coverge/Coverage";

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
]);