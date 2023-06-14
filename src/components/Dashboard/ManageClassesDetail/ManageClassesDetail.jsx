/* eslint-disable react/prop-types */

const ManageClassesDetail = ({ manage }) => {
    const { name, image, price, seats } = manage
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div >
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={image}
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                aria-label="Category"
                                title="traveling"
                            >
                                traveling
                            </a>
                            <span className="text-gray-600">— 28 Dec 2020</span>
                        </p>
                        <a
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            {name}
                        </a>
                        <p className="mb-2 text-gray-700">
                            {price}
                        </p>
                        <p className="mb-2 text-gray-700">
                            {seats}
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageClassesDetail;