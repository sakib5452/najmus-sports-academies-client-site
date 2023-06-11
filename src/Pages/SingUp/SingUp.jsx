/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import sing from '../../../src/assets/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TbFidgetSpinner } from 'react-icons/tb'
import { AuthContext } from '../../provider/AuthProvider';
import Google from '../Google/Google';
const SingUp = () => {

    const {
        loading,
        createUser,
        setLoading

    } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState('')
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('')


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('')
        console.log(name, img, email)

        createUser(email, password)
            .then(result => {
                setLoading(false)
                const createdUser = result.user;
                navigate(from, { replace: true })
                console.log(createdUser);
                setError('');
                event.target.reset();

                setSuccess('User has created Success')

            })
            .catch(error => {
                setLoading(false)
                console.error(error.message);
                setError(error.message);
                event.target.reset();

            })


        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');

        }
        else if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters long');

        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            setPasswordError('Please add at least one uppercase');

        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError('Password should contain at least one special character');

        }
        else {
            // Password and confirm password are valid, proceed with further actions
            setPasswordError('');
            // Additional logic or API calls can be performed here
        }

    };

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className="relative mb-10">
            <img
                src={sing}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg lg:ml-24 mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Ready to go? <br /> <span>
                                    Let's get started!
                                </span>
                            </h2>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Sign up
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="name"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Name
                                        </label>
                                        <input
                                            placeholder="Your Name"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="img"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Photo URL
                                        </label>
                                        <input
                                            placeholder="Photo URL"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="img"
                                            name="img"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="Email"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
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
                                            placeholder="*******"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            placeholder="*******"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                    </div>
                                    {passwordError && <p className='text-red-600'>{passwordError}</p>}
                                    {error && <p className='text-red-600'>{error}</p>}
                                    {success && <p className='text-green-400'>{success}</p>}

                                    {/* <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Subscribe
                                        </button>
                                    </div> */}
                                    <div className="form-control">
                                        <label className="label">
                                            <input onClick={handleAccepted} type="checkbox" name="accept" />
                                            <span className="label-text mr-40">{<>Accept <span className='hover:underline hover:text-purple-700 text-purple-400'><Link to="/terms">Terms and Conditions</Link></span> </>}</span>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary " disabled={!accepted} > {loading ? (
                                            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                                        ) : (
                                            'Sing Up'
                                        )}</button>
                                    </div>
                                    <Google></Google>
                                    <p className='px-6 text-sm text-center text-gray-400'>
                                        Already have an account?{' '}
                                        <Link
                                            to='/login'
                                            className='hover:underline hover:text-purple-700 text-purple-400'
                                        >
                                            Login
                                        </Link>
                                        .
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;