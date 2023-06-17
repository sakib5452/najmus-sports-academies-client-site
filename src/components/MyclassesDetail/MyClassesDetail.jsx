/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MyClassesDetail = ({ classDetail }) => {
    const { _id, name, image, price, seats, status } = classDetail
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <img
                            className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                            src={image}
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                    </div>
                    <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            {name}
                        </h5>
                        <div className="flex gap-16 ">
                            <h4 className='text-xl font-bold text-purple-400'>Price : <span className='text-lg text-black'>${price}</span> </h4>
                            <h4 className='text-xl font-bold text-purple-400'>Seats : <span className='text-lg text-black'>{seats}</span> </h4>
                        </div>
                        <h4 className='text-xl  text-left font-bold text-purple-400'>States: <span className='text-lg text-black'>{status}</span> </h4>
                        <h4 className='text-xl  text-left font-bold text-purple-400'>Enrolled: <span className='text-lg text-black'>0</span> </h4>
                        {/* <h4 className='text-xl  text-left font-bold text-purple-400'>Feedback: <span className='text-lg text-black'>coming soon</span> </h4> */}
                        <Link to={`/dashboard/update/${_id}`}>
                            <button
                                type="submit"
                                className="inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            >
                                Update Class
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassesDetail;