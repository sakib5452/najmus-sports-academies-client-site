
import img1 from '../../../assets/cover1.png'
// import img2 from '../../../assets/cover2.png'
// import img3 from '../../../assets/cover3.png'
// import img4 from '../../../assets/cover4.png'
// import img5 from '../../../assets/cover5.png'
// import img6 from '../../../assets/cover6.png'

const Banner = () => {

    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={img1}
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                        Brand new
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        JOIN A MEMBERSHIP
                        <br className="hidden md:block" />
                        {' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            PROGRAM!
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                        Najmus Sports Academy memberships offer something for every
                        athlete. From Youth to Adult, to Multi-sport and single sport Athletes. we are ready  to help you achieve your goals !

                    </p>
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Join Today
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;