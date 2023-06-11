import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Terms from "../Pages/Terms/Terms";
import NotFound from "../Pages/NotFound/NotFound";

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
        path: '*',
        element: <NotFound></NotFound>
    }
]);