import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../routes/PrivateRoute";
import Register from "../pages/Authentication/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Payment from "../pages/Dashboard/Payment/Payment";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import TrackParcel from "../pages/Dashboard/TrackParcel/TrackParcel";
import PendingRiders from "../pages/Dashboard/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/Dashboard/ActiveRiders/ActiveRiders";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage", 
        Component: Coverage,
        loader: () => fetch('/warehouses.json'),
      },
      {
        path: "sendParcel",
        element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute> ,
        loader: () => fetch('./serviceCenter.json')
      }
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
children:[
  {
    path:'myParcels',
    Component: MyParcels
  },
  {
    path:'payment/:parcelId',
    Component: Payment 
  },
  {
    path: 'paymentHistory',
    Component: PaymentHistory
  },
  {
    path:'track',
    Component:TrackParcel

  },
   {
        path: 'pending-riders',
        Component: PendingRiders
      },
      {
        path: 'active-riders',
        Component: ActiveRiders
      },
  
]      }
    ],
  },
]);
