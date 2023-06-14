import { Link, useNavigate } from "react-router-dom";
import logo from '../../../src/assets/logo.png'
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import { imageUpload } from "../../api/utils";
import { addClasses } from "../../api/classes";
import Swal from 'sweetalert2'


const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [number, setNumber] = useState();
    const [number1, setNumber1] = useState();
    const navigate = useNavigate()
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const handleSubmit = event => {
        event.preventDefault()


        const name = event.target.name.value
        const price = event.target.price.value
        const seats = event.target.seats.value
        const image = event.target.image.files[0]
        const email = user?.email;
        setUploadButtonText('Uploading...')
        // Upload image
        imageUpload(image)
            .then(data => {
                const classesData = {

                    name,
                    price: parseFloat(price),
                    seats: parseFloat(seats),
                    image: data.data.display_url,
                    email,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,

                        status: 'pending'
                    },

                }

                // post classes data to server
                addClasses(classesData)
                    .then(data => {
                        console.log(data)
                        setUploadButtonText('Uploaded!')
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class Added!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard/MyClasses')
                    })
                    .catch(err => console.log(err))

                console.log(classesData)
                event.target.reset();
            })
            .catch(err => {
                console.log(err.message)
                event.target.reset();

            })
    }

    const handleImageChange = image => {
        console.log(image)
        setUploadButtonText(image.name)
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
        <div className="flex h-screen items-center justify-center mt-20 mb-20">
            <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                <form onSubmit={handleSubmit}>
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
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Inter Price" name='price' value={number} onChange={handleNumberChange} />
                        </div>
                        <div className="grid grid-cols-1">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Seats</label>
                            <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="number" placeholder="Seats" name='seats' value={number1} onChange={handleNumberChange1} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                        <div className='flex items-center justify-center w-full'>
                            <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                                <div className='flex flex-col items-center justify-center pt-7'>
                                    <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>  {uploadButtonText}</p>
                                </div>
                                <input onChange={event => {
                                    handleImageChange(event.target.files[0])
                                }} type='file' className="hidden" name="image" />
                            </label>
                        </div>
                    </div>

                    <div className='flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5'>
                        <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Add Toy</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddClass;