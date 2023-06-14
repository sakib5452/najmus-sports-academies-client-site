/* eslint-disable react/prop-types */

const MyClassesDetail = ({ classDetail }) => {
    const { name, image, price, seats, } = classDetail
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
                            <p className="mb-5 text-gray-700 text-lg">
                                Price: ${price}
                            </p>
                            <p className="mb-5 text-gray-700 text-lg">
                                Available Seats: {seats}
                            </p>
                        </div>
                        <p className="mb-4 text-left">States: {classDetail.host.status}</p>
                        <p className="mb-4 text-left">Enrolled: </p>
                        <p className="mb-4 text-left">Feedback:</p>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Update Class
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassesDetail;