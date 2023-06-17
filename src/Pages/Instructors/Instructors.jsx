import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        return res.data;
    })
    refetch()
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>

                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">

                            <span className="relative">Our</span>
                        </span>{' '}
                        Top Instructor
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
            </div>
            <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {
                    instructors.slice(0.6).map(user => <div key={user._id}>
                        <div className="px-4 py-16  -mt-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div >
                                <div className="px-12 text-center sm:px-0">
                                    <div className="flex items-center h-52 w-52 justify-center mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                                        <img className="rounded-full" src={user.img} alt="" />
                                    </div>
                                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                                        {user.name}
                                    </h6>
                                    <div className="mb-2 text-gray-700">
                                        I will remember and recover, not forgive and forget.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Instructors;