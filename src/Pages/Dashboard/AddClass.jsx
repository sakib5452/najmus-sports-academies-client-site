import { Link } from "react-router-dom";
import logo from '../../../src/assets/logo.png'

import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    // const [number, setNumber] = useState()
    // if (number >= 0) {
    //     setNumber
    // }
    // else (
    //     Alert('plz')
    // )

    return (
        <div className="flex h-screen items-center justify-center mt-20 mb-20">
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <form >
                    <div className="flex justify-center py-4">
                        <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                            <Link
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
                    </div>

                    <div className="flex justify-center">
                        <div className="flex">
                            <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Class Add Form</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Class Name</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Class Name" name="name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Instructor Name</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2  focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Instructor Name" value={user?.displayName} name='sellerName' />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Instructor Email</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="email" placeholder="5" value={user?.email} name='email' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"> Price</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Inter Price" name='price' />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Seats</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Seats" name='seats' />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Photo URL</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Photo URL" name='img' />
                    </div>

                    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
                        <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Add Toy</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddClass;