import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/about",
                element: <About></About>

            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/signup",
                element: <SignUp></SignUp>

            },
            {
                path: "/booking",
                element: <PrivetRoute><Bookings></Bookings></PrivetRoute>

            },
            {
                path: "/checkout/:id",
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

        ]
    },
]);

export default router;