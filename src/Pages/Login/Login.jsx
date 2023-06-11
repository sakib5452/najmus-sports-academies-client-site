/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import pic from '../../../src/assets/login-password-cyber-security-concept-data-protection-secured-internet-access-cybersecurity_29488-6016.avif'
import { TbFidgetSpinner } from 'react-icons/tb'
import { HiEyeOff } from 'react-icons/hi'
import { HiEye } from 'react-icons/hi'
import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';
import Google from '../Google/Google';


const Login = () => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { loading, setLoading, signIn } =
        useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    // const emailRef = useRef()
    // Handle submit
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }


    // const handleReset = () => {
    //     const email = emailRef.current.value

    //     resetPassword(email)
    //         .then(() => {
    //             toast.success('Please check your email for reset link')
    //             setLoading(false)
    //         })
    //         .catch(err => {
    //             setLoading(false)
    //             console.log(err.message)
    //             toast.error(err.message)
    //         })
    // }

    return (
        <div className="relative  mb-14">
            <img
                src={pic}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-700 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg ml-24 mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Ready to go? <br /> <span>
                                    Let's get started!
                                </span>
                            </h2>

                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12 lg:mr-20">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4  text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Log In
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Username or Email
                                        </label>
                                        <input
                                            placeholder="Input Your Username or Email"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-500 focus:outline-none focus:shadow-outline"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2 ">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <div className='input-wrapper'>
                                            <input
                                                placeholder="Input Your Password"
                                                required
                                                type={showPassword ? 'password' : 'text'}
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-500 focus:outline-none focus:shadow-outline"
                                                name="password"
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            <div className='lg:ml-80 ml-96'>
                                                {showPassword ? (
                                                    <HiEyeOff className="icon" onClick={handleTogglePasswordVisibility} />
                                                ) : (
                                                    <HiEye className="icon" onClick={handleTogglePasswordVisibility} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <div>
                                        <button
                                            type='submit'
                                            className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
                                        >
                                            {loading ? (
                                                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                                            ) : (
                                                'Continue'
                                            )}
                                        </button>
                                    </div>
                                    <Google></Google>
                                    <p className='px-6 text-sm text-center text-gray-400'>
                                        Don't have an account yet?{' '}
                                        <Link
                                            to='/signUp'
                                            className='hover:underline hover:text-purple-700 text-purple-400'
                                        >
                                            Sign up
                                        </Link>
                                        .
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;