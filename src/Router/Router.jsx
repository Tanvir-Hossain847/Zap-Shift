import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
        {
            index: true,
            Component: Home,
        }
    ]
  },
]);