import { useEffect, useState } from "react";
import { getAllClasses } from "../../api/classes";
import Swal from "sweetalert2";


const ClassManageButton = () => {
    const [manageClasses, setManageClasses] = useState([]);
    useEffect(() => {

        getAllClasses()
            .then(data => {

                setManageClasses(data)

            })
            .catch(err => console.log(err))
    }, [])

    const handleMakeApproved = user => {

        fetch(`https://sports-academies-server-site.vercel.app/classes/approved/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeDeny = user => {

        fetch(`https://sports-academies-server-site.vercel.app/classes/deny/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deny',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="grid grid-cols-2">

            {
                manageClasses.map(user => <div
                    key={user._id}>

                    <div className="px-4 mx-auto mt-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div >
                            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                                <img
                                    src={user.image}
                                    className="object-cover w-full h-64"
                                    alt=""
                                />
                                <div className="p-5 border border-t-0">
                                    <div className="flex items-center mb-5">
                                        <a aria-label="Author" className="mr-3">
                                            <img
                                                alt="avatar"
                                                src={user.host.image}
                                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                                            />
                                        </a>
                                        <div>
                                            <a
                                                aria-label="Author"
                                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                {user.host.name}
                                            </a>
                                            <p className="text-sm font-medium leading-4 text-gray-600">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        aria-label="Category"
                                        title="Visit the East"
                                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                        {user.name}
                                    </a>
                                    <div className="flex gap-16">
                                        <h4 className='text-xl font-bold text-purple-400'>Price : <span className='text-lg text-black'>${user.price}</span> </h4>
                                        <h4 className='text-xl font-bold text-purple-400'>Seats : <span className='text-lg text-black'>{user.seats}</span> </h4>
                                    </div>
                                    <h4 className='text-xl  text-left font-bold text-purple-400'>States: <span className='text-lg text-black'>{user.status}</span> </h4>
                                    <div className="grid grid-cols-2 gap-3">

                                        {user.status === 'Approved' ?
                                            <button className="disabled inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-500 transition duration-200 rounded shadow-md bg-zinc-600 focus:shadow-outline focus:outline-none">Approved</button>
                                            :
                                            <button onClick={() => handleMakeApproved(user)} className="inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">Approved</button>
                                        }
                                        {
                                            user.status === 'Deny' ?
                                                <button className="disabled inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-500 transition duration-200 rounded shadow-md bg-zinc-600 focus:shadow-outline focus:outline-none">Deny</button>
                                                :
                                                <button onClick={() => handleMakeDeny(user)} className="inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">Deny</button>
                                        }
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <label className=' pt-3 text-xl font-bold text-purple-400'>Feedback</label>
                                        <textarea className="textarea textarea-primary" placeholder="Feedback"></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    >
                                        Feedback
                                    </button>
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

export default ClassManageButton;