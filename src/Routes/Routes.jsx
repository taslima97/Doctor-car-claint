import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PriveteRoute from "./PriveteRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

      {
        path:'/checkout/:id',
        element:<PriveteRoute><CheckOut></CheckOut></PriveteRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
         path:'/bookings',
         element:<PriveteRoute><Bookings></Bookings></PriveteRoute>
      }
    ]
  },
]);

export default router