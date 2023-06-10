import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if (loading) {
        return <button className="btn loading">loading</button>
    }

    if (user) {

        return children;
    }

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to log in first to view details',
        footer: '<a href="">Why do I have this issue?</a>'
    })

    return <Navigate state={{ from: location }} to="/singIn" replace></Navigate>;
};

export default PrivetRoute;