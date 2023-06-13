import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../src/assets/logo.png'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { HiHome } from 'react-icons/hi'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { HiClipboardList } from 'react-icons/hi'
import { AiOutlineBars } from 'react-icons/ai'
import { HiFingerPrint } from 'react-icons/hi'
import { HiCurrencyDollar } from 'react-icons/hi'
import { HiClipboardCheck } from 'react-icons/hi'
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Avatar from "../../Pages/Avatar/Avatar";

const Sidebar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    // const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const [isActive, setActive] = useState('false')
    // const toggleHandler = event => {
    //   setToggle(event.target.checked)
    // }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate(from, { replace: true })
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link
                            to="/"
                            aria-label="Najmus Sport Academies"
                            title="Najmus Sport Academies"
                            className="inline-flex items-center"
                        >
                            <img src={logo} alt="" width={53} height={100} />
                            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                <span className="text-red-700 text-center"> Najmus Sport</span><br />
                                <span className="text-teal-600"> Academies</span>
                            </span>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className='w-full hidden md:flex py-2 justify-center items-center bg-gray-100 mx-auto'>
                            <Link
                                to="/"
                                aria-label="Najmus Sport Academies"
                                title="Najmus Sport Academies"
                                className="inline-flex items-center"
                            >
                                <img src={logo} alt="" width={53} height={100} />
                                <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                                    <span className="text-red-700 text-center"> Najmus Sport</span><br />
                                    <span className="text-teal-600"> Academies</span>
                                </span>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <Avatar></Avatar>
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>


                    <nav>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <HiHome className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Home</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/MySelectedClasses'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <HiOutlineBadgeCheck className='w-5 h-5' />

                            <span className='mx-4 font-medium'>My Selected Classes</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/EnrolledClasses'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <HiClipboardList className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Enrolled Classes</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/paymentHistory'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <HiCurrencyDollar className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Payment History</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/AddClass'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            < HiFingerPrint className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Add Class</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/MyClasses'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            < HiClipboardCheck className='w-5 h-5' />

                            <span className='mx-4 font-medium'>My Classes</span>
                        </NavLink>
                        <NavLink
                            to='/dashboard/profile'
                            className={({ isActive }) =>
                                `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                }`
                            }
                        >
                            <FcSettings className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Profile</span>
                        </NavLink>
                        <button
                            onClick={handleLogOut}
                            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                        >
                            <GrLogout className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Logout</span>
                        </button>
                    </nav>

                    {/* Nav Items */}
                    {/* <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              {role && role === 'host' ? (
                <>
                  <label
                    htmlFor='Toggle3'
                    className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
                  >
                    <input
                      onChange={toggleHandler}
                      id='Toggle3'
                      type='checkbox'
                      className='hidden peer'
                    />
                    <span className='px-4 py-1 rounded-l-md bg-rose-400 peer-checked:bg-gray-300'>
                      Guest
                    </span>
                    <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-rose-400'>
                      Host
                    </span>
                  </label> */}
                    {/* Menu Links */}
                    {/* {toggle ? <HostMenu /> : <GuestMenu />} */}
                    {/* </> */}
                    {/* ) : (
                <GuestMenu />
              )} */}
                    {/* </nav> */}
                </div>
            </div>

            {/* <div>
                <hr />
                <NavLink
                    to='/dashboard/profile'
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                        }`
                    }
                >
                    <FcSettings className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Profile</span>
                </NavLink>
                <button
                    onClick={handleLogOut}
                    className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                >
                    <GrLogout className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Logout</span>
                </button>
            </div> */}
            {/* </div> */}
        </>
    );
};

export default Sidebar;