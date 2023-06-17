import { useState } from "react";

import logo from '../../../src/assets/logo.png'
import Swal from "sweetalert2";

import { Link, useLoaderData } from "react-router-dom";

const Update = () => {

    const updateClasses = useLoaderData()
    console.log(updateClasses)
    const [number, setNumber] = useState();
    const [number1, setNumber1] = useState();
    console.log(updateClasses)
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;


        const price = form.price.value;
        const seats = form.seats.value;




        const infoUpdate = { name, price: parseFloat(price), seats: parseFloat(seats) }



        fetch(`https://sports-academies-server-site.vercel.app/classes/update/${updateClasses._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(infoUpdate)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Data has been Update',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();


                }
            })
    }





    const handleNumberChange = (event) => {
        const inputNumber = parseFloat(event.target.value);
        if (inputNumber < 0) {
            event.target.value = '';
            // Do not update the state for negative numbers

        }
        else {
            setNumber(inputNumber);
        }

    };
    const handleNumberChange1 = (event) => {
        const inputNumber = parseFloat(event.target.value);

        if (inputNumber < 0) {
            // Do not update the state for negative numbers
            event.target.value = '';

        }
        else { setNumber1(inputNumber); }

    };
    return (
        <div className="flex h-screen items-center justify-center ">
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <form onSubmit={handleUpdate}>
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
                            <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Class Update Form</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Class Name</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Class Name" name="name" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"> Price</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Inter Price" name='price' value={number} onChange={handleNumberChange} />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Seats</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Seats" name='seats' value={number1} onChange={handleNumberChange1} />
                        </div>
                    </div>

                    <div className='flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5'>
                        <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;