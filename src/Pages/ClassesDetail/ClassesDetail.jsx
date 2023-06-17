/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ClassesDetail = ({ approved }) => {
    const { _id, name, price, seats, image } = approved

    console.log('64', approved)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleMakeSelected = () => {


        if (user && user.email) {
            const selected = { classI: _id, name, price, seats, email: user.email, image }




            fetch('http://localhost:5000/addClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selected)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard/MySelectedClasses')
                    }
                })

        }
        else {

            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Plz Login First',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')
        }




    }

    return (
        <div className="px-4 mx-auto mt-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div >
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={image}
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
                                    <h4 className='text-lg font-semibold text-purple-400'> Instruction Name: <span className=' text-black'>{approved.host.name}</span> </h4>

                                </a>
                            </div>
                        </div>
                        <a
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            {name}
                        </a>
                        <div className="flex gap-16">
                            <h4 className='text-xl font-bold text-purple-400'>Price : <span className='text-lg text-black'>${price}</span> </h4>
                            <h4 className='text-xl font-bold text-purple-400'>Seats : <span className='text-lg text-black'>{seats}</span> </h4>
                        </div>

                        <div>

                            {/* {approved.selected === 'Success' ? <button className="disabled inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-slate-400 transition duration-200 rounded shadow-md bg-slate-500 focus:shadow-outline focus:outline-none">Selected</button> :
                                            <button onClick={() => handleMakeSelected(approved)} className="inline-flex mt-4 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">Selected</button>
                                        } */}

                            <button
                                onClick={() => handleMakeSelected(approved)}
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
    );
};

export default ClassesDetail;