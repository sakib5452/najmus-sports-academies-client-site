/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import pic from '../../../src/assets/login-password-cyber-security-concept-data-protection-secured-internet-access-cybersecurity_29488-6016.avif'
import Google from '../Google/Google';
const Login = () => {
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
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mr-20">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4  text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Log In
                                </h3>
                                <form>
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
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="Input Your Password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-500 focus:outline-none focus:shadow-outline"
                                            name="password"
                                        />
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="Log In"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Log In
                                        </button>
                                    </div>
                                    <h4> Don't Have an Account? <span className='text-primary'><Link to="/register">Register</Link></span></h4>
                                    <div className="divider">OR</div>
                                    <Google></Google>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;