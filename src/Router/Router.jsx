import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../page/Home/Home/Home";
import Coverage from "../page/Coverge/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../page/AuthPages/Login";
import Registration from "../page/AuthPages/Registration";
import PrivateRouter from "./PrivateRouter";
import Rider from "../page/Rider/Rider";
import Parcel from "../page/Parcel/Parcel";
import DashboardLayout from "../Layout/DashboardLayout";
import My_Page from "../page/Dashboard/My-page/My_Page";

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
        path: '/rider',
        element: <PrivateRouter><Rider></Rider></PrivateRouter>
      },
      {
        path: '/send-parcel',
        element: <PrivateRouter><Parcel></Parcel></PrivateRouter>,
        loader: () => fetch("/data/warehouses.json")
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
  },
  {
    path: '/dashboard',
    element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
    children: [
      {
        path: '/dashboard/my-parcel',
        Component: My_Page,
      }
    ]
  }
]);