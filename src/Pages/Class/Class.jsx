
import { useEffect, useState } from "react";
import ClassDetail from "../ClassDetail/ClassDetail";


const Class = () => {
    const [approved, setApproved] = useState([])


    // const [axiosSecure] = useAxiosSecure();
    // const { data: approved = [], refetch } = useQuery(['approved'], async () => {
    //     const res = await axiosSecure.get('/approved')
    //     return res.data;
    // })
    // refetch()

    useEffect(() => {
        fetch('http://localhost:5000/approved')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setApproved(data);
            });
    }, []);


    console.log(approved)



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
                        Top Classes
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 -mt-28 lg:grid-cols-3">

                {
                    approved.slice(0, 6).map(approved => <ClassDetail
                        key={approved._id}
                        approved={approved}

                    ></ClassDetail>




                    )
                }
            </div>
        </div>
    );
};


export default Class;