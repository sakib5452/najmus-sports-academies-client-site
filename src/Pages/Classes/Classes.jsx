import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: approved = [], refetch } = useQuery(['approved'], async () => {
        const res = await axiosSecure.get('/approved')
        return res.data;
    })
    refetch()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">

            {
                approved.map(approved => <div
                    key={approved._id}>

                    <div className="px-4 mx-auto mt-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div >
                            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                                <img
                                    src={approved.image}
                                    className="object-cover w-full h-64"
                                    alt=""
                                />
                                <div className="p-5 border border-t-0">
                                    <div className="flex items-center mb-5">
                                        <div>
                                            <a
                                                aria-label="Author"
                                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                <h4 className='text-lg font-semibold text-purple-400'>  Instruction Name: <span className=' text-black'>{approved.host.name}</span> </h4>

                                            </a>
                                        </div>
                                    </div>
                                    <a
                                        aria-label="Category"
                                        title="Visit the East"
                                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        {approved.name}
                                    </a>
                                    <div className="flex gap-16">
                                        <h4 className='text-xl font-bold text-purple-400'>Price : <span className='text-lg text-black'>${approved.price}</span> </h4>
                                        <h4 className='text-xl font-bold text-purple-400'>Seats : <span className='text-lg text-black'>{approved.seats}</span> </h4>
                                    </div>

                                    <div>

                                        <button
                                            type="submit"
                                            className="inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Select
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                </div>

                )
            }
        </div>

    );
};

export default Classes;