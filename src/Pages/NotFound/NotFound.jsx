
import { useEffect } from 'react';
import pic from '../../../src/assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif'
import { Link } from 'react-router-dom';
const NotFound = () => {
    useEffect(() => {
        document.title = 'Robot Galaxy | Page Not Found';
    }, [])
    return (
        <div className='lg:ml-96'>
            <div className="flex items-center mt-6 gap-x-3">
                <Link class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>


                    <span>Go back</span>
                </Link>


            </div>
            <img src={pic} alt="" />
        </div>
    );
};

export default NotFound;