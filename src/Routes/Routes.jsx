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
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);