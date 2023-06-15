import { useContext, useState } from "react";
import logo from '../../../assets/logo.png'
import Avatar from "../../Avatar/Avatar";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Najmus Sport Academies"
                    title="Najmus Sport Academies"
                    className="inline-flex items-center"
                >
                    <img src={logo} alt="" />
                    <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                        <span className="text-red-700 text-center"> Najmus Sport</span><br />
                        <span className="text-teal-600"> Academies</span>
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to="/"
                            aria-label="Home"
                            title="Home"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/instructors"
                            aria-label="instructors"
                            title="Instructors"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                            Instructors
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/classes"
                            aria-label="classes"
                            title="Classes"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                            Classes
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard"
                            aria-label="Dashboard"
                            title="Dashboard"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                        >
                            Dashboard
                        </Link>
                    </li>
                </ul>
                {user ?
                    <ul className="flex hidden items-center space-x-5 lg:flex">


                        <li className='h-14 w-14'>
                            <Link
                                to="/"
                                title={user && user?.displayName ? user?.displayName : "User Name"}
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                <Avatar></Avatar>
                            </Link>
                        </li>
                        <li onClick={handleLogOut}>
                            <Link
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Log Out"
                            >
                                Log Out
                            </Link>
                        </li>
                    </ul>
                    :
                    <li className="flex hidden items-center space-x-3 ml-64 lg:flex">
                        <Link
                            to="/login"
                            aria-label="Log In"
                            title="Log In"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Log In
                        </Link>
                    </li>

                }

                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute z-40 top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Najmus Sport Academies"
                                            title="Najmus Sport Academies"
                                            className="inline-flex items-center"
                                        >
                                            <img src={logo} alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                                <span className="text-red-700 text-center"> Najmus Sport</span><br />
                                                <span className="text-teal-600"> Academies</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Home"
                                                title="Home"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/instructors"
                                                aria-label="instructors"
                                                title="Instructors"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                            >
                                                Instructors
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/classes"
                                                aria-label="classes"
                                                title="Classes"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                            >
                                                Classes
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="/dashboard"
                                                aria-label="dashboard"
                                                title="dashboard"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                    </ul>
                                    {user ?
                                        <ul className="items-center space-x-5 lg:flex">


                                            <li className='h-14 w-14 mt-4'>
                                                <Link
                                                    to="/singIn"
                                                    aria-label="Sign in"
                                                    // title={user?.displayName}
                                                    title={user && user?.displayName ? user?.displayName : "User Name"}
                                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                                                >
                                                    <Avatar></Avatar>
                                                </Link>
                                            </li>
                                            <li onClick={handleLogOut}>
                                                <Link
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 mt-4 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Log Out"
                                                >
                                                    Log Out
                                                </Link>
                                            </li>
                                        </ul>
                                        :
                                        <li className="flex items-center space-x-3 lg:ml-64 lg:flex">
                                            <Link
                                                to="/login"
                                                aria-label="Log In"
                                                title="Log In"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 mt-4 focus:shadow-outline focus:outline-none"
                                            >
                                                Log In
                                            </Link>
                                        </li>

                                    }
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;