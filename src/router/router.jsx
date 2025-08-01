import {
  createBrowserRouter,
} from "react-router-dom";
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
import BeARider from "../pages/Dashboard/BeARider/BeARider";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import AdminRoute from "../routes/AdminRoute";
import Forbidden from "../pages/Forbidden/Forbidden";
import RiderRoute from "../routes/RiderRoute";
import PendingDeliveries from "../pages/Dashboard/PendingDeliveries/PendingDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import MyEarnings from "../pages/Dashboard/MyEarnings/MyEarnings";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'coverage', 
        Component: Coverage,
        loader: () => fetch('/warehouses.json'),
      },
        {
        path: 'forbidden',
        Component: Forbidden
      },
      {
        path: 'sendParcel',
        element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute> ,
        loader: () => fetch('./serviceCenter.json')
      },
      {
        path:'beARider',
        element:<PrivateRoute><BeARider></BeARider></PrivateRoute>,
          loader: () => fetch('./serviceCenter.json')
      
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path:'register',
        Component:Register
     }
    ]
  },
      {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
children:[
   {
        index: true,
        Component: DashboardHome
      },
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
//rider routes

{
  path:'pending-deliveries',
  element:<RiderRoute><PendingDeliveries></PendingDeliveries></RiderRoute>
},
{
  path:'completed-deliveries',
  element: <RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
},
{
  path:'my-earnings',
  element:<RiderRoute><MyEarnings></MyEarnings></RiderRoute>
},

  //admin routes
   {
        path: 'assign-rider',
        element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
      },
   {
        path: 'pending-riders',
         element: <AdminRoute><PendingRiders></PendingRiders></AdminRoute>
      },
      {
        path: 'active-riders',
         element: <AdminRoute><ActiveRiders></ActiveRiders></AdminRoute>
      }, 
      {
        path: 'makeAdmin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
    }
    ]
  }
]);