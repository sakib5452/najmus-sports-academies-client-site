import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Terms from "../Pages/Terms/Terms";
import NotFound from "../Pages/NotFound/NotFound";
import DashboardLayout from "../Layout/DashboardLayout";
import Welcome from "../Pages/Dashboard/Welcome";
import PrivetRoute from "./PrivetRoute";
import MySelecedClasses from "../components/Dashboard/MySelecedClasses";
import EnrollClasses from "../components/Dashboard/EnrollClasses";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import ManageUsers from "../components/Dashboard/ManageUsers/ManageUsers";
import Instructor from "../Pages/Instructor/Instructor";
import ClassManageButton from "../components/ClassManageButton/ClassManageButton";
import Classes from "../Pages/Classes/Classes";
import Update from "../Pages/Update/Update";
// import Payment from "../Pages/payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signUp",
                element: <SingUp></SingUp>
            },
            {
                path: "instructors",
                element: <Instructor></Instructor>
            },
            {
                path: "classes",
                element: <Classes></Classes>
            },
            {
                path: "terms",
                element: <Terms></Terms>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout>
        </PrivetRoute>,
        children: [
            {
                path: '',
                element: <Welcome></Welcome>
            },
            {
                path: 'MySelectedClasses',
                element: <PrivetRoute><MySelecedClasses></MySelecedClasses></PrivetRoute>
            },
            {
                path: 'EnrolledClasses',
                element: <PrivetRoute><EnrollClasses></EnrollClasses></PrivetRoute>
            },
            {
                path: 'AddClass',
                element: <PrivetRoute> <AddClass></AddClass></PrivetRoute>
            },
            {
                path: 'MyClasses',
                element: <PrivetRoute> <MyClasses></MyClasses></PrivetRoute>
            },
            {
                path: 'ManageClasses',
                element: <PrivetRoute><ClassManageButton></ClassManageButton> </PrivetRoute>
            },
            {
                path: 'ManageUsers',
                element: <PrivetRoute><ManageUsers></ManageUsers> </PrivetRoute>
            },
            // {
            //     path: 'payment',
            //     element: <PrivetRoute><Payment></Payment> </PrivetRoute>
            // },
            {
                path: "update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://sports-academies-server-site.vercel.app/${params._id}`)
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);